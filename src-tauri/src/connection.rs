use r2d2::Pool;
use r2d2_sqlite::SqliteConnectionManager;
use rusqlite::Connection;
use rusqlite_migration::{Migrations, M};
use std::fs;
use tauri::{path::BaseDirectory, Manager};

pub type DbPool = Pool<SqliteConnectionManager>;
pub type DbConnection = r2d2::PooledConnection<SqliteConnectionManager>;

pub struct MyConnectionPool {
    pub pool: DbPool,
}

impl MyConnectionPool {
    /// Create a new pool using the app’s sandboxed storage.
    pub fn new(app_handle: &tauri::AppHandle) -> Result<Self, Box<dyn std::error::Error>> {
        let db_path = app_handle
            .path()
            .resolve("db/lustre.db", BaseDirectory::AppData)?;
        if let Some(parent) = db_path.parent() {
            fs::create_dir_all(parent)?;
        }

        let manager = SqliteConnectionManager::file(&db_path);
        let pool = Pool::builder()
            .max_size(15)
            .min_idle(Some(5))
            .test_on_check_out(true)
            .build(manager)?;

        let mut conn = pool.get()?;
        Self::run_migrations(&mut *conn)?;
        drop(conn);

        Ok(Self { pool })
    }

    /// Customizable pool
    pub fn new_with_config(
        app_handle: &tauri::AppHandle,
        max_size: u32,
        min_idle: Option<u32>,
    ) -> Result<Self, Box<dyn std::error::Error>> {
        let db_path = app_handle
            .path()
            .resolve("db/lustre.db", BaseDirectory::AppData)?;
        if let Some(parent) = db_path.parent() {
            fs::create_dir_all(parent)?;
        }

        let manager = SqliteConnectionManager::file(&db_path);
        let pool = Pool::builder()
            .max_size(max_size)
            .min_idle(min_idle)
            .test_on_check_out(true)
            .build(manager)?;

        let mut conn = pool.get()?;
        Self::run_migrations(&mut *conn)?;
        drop(conn);

        Ok(Self { pool })
    }

    /// In-memory database for tests
    pub fn new_in_memory() -> Result<Self, Box<dyn std::error::Error>> {
        let manager = SqliteConnectionManager::memory();
        let pool = Pool::builder().max_size(1).build(manager)?;

        let mut conn = pool.get()?;
        Self::run_migrations(&mut *conn)?;
        drop(conn);

        Ok(Self { pool })
    }

    fn run_migrations(conn: &mut Connection) -> Result<(), Box<dyn std::error::Error>> {
        let migrations = Migrations::new(vec![M::up(
            "CREATE TABLE IF NOT EXISTS greetings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                message TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
        )]);

        migrations.to_latest(conn)?;
        Ok(())
    }

    pub fn get_connection(&self) -> Result<DbConnection, r2d2::Error> {
        self.pool.get()
    }

    pub fn get_pool(&self) -> &DbPool {
        &self.pool
    }

    pub fn pool_state(&self) -> r2d2::State {
        self.pool.state()
    }
}
