use rusqlite::{params, Connection};
use std::sync::{Arc, Mutex};

pub trait GreetRepository {
    fn create_greeting(&self, name: &str, message: &str) -> Result<i64, rusqlite::Error>;
    fn get_greeting_by_name(&self, name: &str) -> Result<Option<String>, rusqlite::Error>;
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
    fn create_greeting(&self, name: &str, message: &str) -> Result<i64, rusqlite::Error> {
        let conn = self.connection.lock().unwrap();
        conn.execute(
            "INSERT INTO greetings (name, message) VALUES (?1, ?2)",
            params![name, message],
        )?;
        Ok(conn.last_insert_rowid())
    }

    fn get_greeting_by_name(&self, name: &str) -> Result<Option<String>, rusqlite::Error> {
        let conn = self.connection.lock().unwrap();
        let mut stmt = conn.prepare("SELECT message FROM greetings WHERE name = ?1 LIMIT 1")?;

        let mut rows = stmt.query_map(params![name], |row| Ok(row.get::<_, String>(0)?))?;

        match rows.next() {
            Some(row) => Ok(Some(row?)),
            None => Ok(None),
        }
    }
}
