use rusqlite::Connection;
use rusqlite_migration::{Migrations, M};
use std::sync::{Arc, Mutex};

pub struct MyConnection {
    pub conn: Arc<Mutex<Connection>>,
}
impl MyConnection {
    pub fn new() -> Result<Self, Box<dyn std::error::Error>> {
        let migrations = Migrations::new(vec![M::up(
            "CREATE TABLE IF NOT EXISTS greetings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    message TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )",
        )]);
        let mut conn = Connection::open("../db/lustre.db").expect("Cannot open database");
        migrations.to_latest(&mut conn)?;

        Ok(Self {
            conn: Arc::new(Mutex::new(conn)),
        })
    }
    pub fn get_connection(&self) -> Arc<Mutex<Connection>> {
        self.conn.clone()
    }
}
