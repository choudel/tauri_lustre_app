use crate::features::greet::repo::GreetRepo;
use crate::lazy_repo::LazyRepo;
use crate::{connection::MyConnectionPool, features::greet::repo::GreetRepository};
use std::sync::{Arc, OnceLock};
use tauri::{AppHandle, Manager};

// Global pool, initialized on first use
static GLOBAL_POOL: OnceLock<Arc<MyConnectionPool>> = OnceLock::new();

pub struct UnitOfWork {
    lazy_repo: LazyRepo,
}

impl UnitOfWork {
    /// Create a new UnitOfWork.
    /// If the global pool has not been initialized yet, it will be created automatically.
    pub fn new(app_handle: &AppHandle) -> Self {
        let pool = GLOBAL_POOL
            .get_or_init(|| {
                Arc::new(
                    MyConnectionPool::new(app_handle).expect("Failed to create connection pool"),
                )
            })
            .clone();

        let lazy_repo = LazyRepo::new_with_pool(pool);
        Self { lazy_repo }
    }

    /// Explicit initializer (optional). Useful if you want to set up early in `setup()`.
    pub fn init_global(app_handle: &AppHandle) {
        GLOBAL_POOL.get_or_init(|| {
            Arc::new(MyConnectionPool::new(app_handle).expect("Failed to create connection pool"))
        });
    }

    pub fn new_with_pool(pool: Arc<MyConnectionPool>) -> Self {
        let lazy_repo = LazyRepo::new_with_pool(pool);
        Self { lazy_repo }
    }

    /// Constructor for testing with in-memory database
    pub fn new_in_memory() -> Result<Self, Box<dyn std::error::Error>> {
        let pool = Arc::new(MyConnectionPool::new_in_memory()?);
        let lazy_repo = LazyRepo::new_with_pool(pool);
        Ok(Self { lazy_repo })
    }

    pub fn greet_repo(&self) -> &dyn GreetRepository {
        self.lazy_repo.greet_repo()
    }

    pub fn greet_repo_concrete(&self) -> &GreetRepo {
        self.lazy_repo.greet_repo_concrete()
    }

    pub fn get_connection(&self) -> Result<crate::connection::DbConnection, r2d2::Error> {
        self.lazy_repo.get_connection()
    }

    pub fn pool_state(&self) -> r2d2::State {
        self.lazy_repo.pool_state()
    }
}
