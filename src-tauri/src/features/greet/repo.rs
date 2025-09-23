use crate::connection::{DbConnection, MyConnectionPool};

use super::*;
use rusqlite::params;
use std::sync::Arc;

pub trait GreetRepository {
    fn create_greeting(&self, name: &str, message: &str) -> AppResult<i64>;
    fn get_greeting_by_name(&self, name: &str) -> AppResult<Option<String>>;
}

pub struct GreetRepo {
    pool: Arc<MyConnectionPool>,
}

impl GreetRepo {
    pub fn new(pool: Arc<MyConnectionPool>) -> Self {
        Self { pool }
    }

    fn get_connection(&self) -> Result<DbConnection, r2d2::Error> {
        self.pool.get_connection()
    }
}

impl GreetRepository for GreetRepo {
    fn create_greeting(&self, name: &str, message: &str) -> AppResult<i64> {
        let conn = self.get_connection().map_err(|e| {
            AppError::internal(&format!("Failed to get database connection: {}", e))
        })?;

        conn.execute(
            "INSERT INTO greetings (name, message) VALUES (?1, ?2)",
            params![name, message],
        )
        .map_err(|e| AppError::internal(&format!("Database error: {}", e)))?;

        Ok(conn.last_insert_rowid())
    }

    fn get_greeting_by_name(&self, name: &str) -> AppResult<Option<String>> {
        let conn = self.get_connection().map_err(|e| {
            AppError::internal(&format!("Failed to get database connection: {}", e))
        })?;

        let mut stmt = conn
            .prepare("SELECT message FROM greetings WHERE name = ?1 LIMIT 1")
            .map_err(|e| AppError::internal(&format!("Failed to prepare statement: {}", e)))?;

        let mut rows = stmt
            .query_map(params![name], |row| Ok(row.get::<_, String>(0)?))
            .map_err(|e| AppError::internal(&format!("Query execution failed: {}", e)))?;

        match rows.next() {
            Some(row) => Ok(Some(row.map_err(|e| {
                AppError::internal(&format!("Row parsing error: {}", e))
            })?)),
            None => Ok(None),
        }
    }
}
