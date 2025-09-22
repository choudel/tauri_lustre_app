use super::*;
use rusqlite::{params, Connection};
use std::sync::{Arc, Mutex};

pub trait GreetRepository {
    fn create_greeting(&self, name: &str, message: &str) -> AppResult<i64>;
    fn get_greeting_by_name(&self, name: &str) -> AppResult<Option<String>>;
}

#[derive(Debug, Clone)]
pub struct GreetRepo {
    connection: Arc<Mutex<Connection>>,
}

impl GreetRepo {
    pub fn new(connection: Arc<Mutex<Connection>>) -> Self {
        Self { connection }
    }
}

impl GreetRepository for GreetRepo {
    fn create_greeting(&self, name: &str, message: &str) -> AppResult<i64> {
        let conn = self
            .connection
            .lock()
            .map_err(|_| AppError::internal("Failed to acquire database lock"))?;

        conn.execute(
            "INSERT INTO greetings (name, message) VALUES (?1, ?2)",
            params![name, message],
        )?;

        Ok(conn.last_insert_rowid())
    }

    fn get_greeting_by_name(&self, name: &str) -> AppResult<Option<String>> {
        let conn = self
            .connection
            .lock()
            .map_err(|_| AppError::internal("Failed to acquire database lock"))?;

        let mut stmt = conn.prepare("SELECT message FROM greetings WHERE name = ?1 LIMIT 1")?;
        let mut rows = stmt.query_map(params![name], |row| Ok(row.get::<_, String>(0)?))?;

        match rows.next() {
            Some(row) => Ok(Some(row?)),
            None => Ok(None),
        }
    }
}
