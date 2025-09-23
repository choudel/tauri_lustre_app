use std::sync::{Arc, OnceLock};

use crate::{
    connection::{DbConnection, MyConnectionPool},
    features::greet::repo::{GreetRepo, GreetRepository},
};

pub struct LazyRepo {
    pool: Arc<MyConnectionPool>,
    greet_repo: OnceLock<GreetRepo>,
}

impl LazyRepo {
    pub fn new_with_pool(pool: Arc<MyConnectionPool>) -> Self {
        Self {
            pool,
            greet_repo: OnceLock::new(),
        }
    }

    pub fn greet_repo(&self) -> &dyn GreetRepository {
        self.greet_repo_concrete()
    }

    pub fn greet_repo_concrete(&self) -> &GreetRepo {
        self.greet_repo
            .get_or_init(|| GreetRepo::new(self.pool.clone()))
    }

    // Helper methods
    pub fn get_connection(&self) -> Result<DbConnection, r2d2::Error> {
        self.pool.get_connection()
    }

    pub fn pool_state(&self) -> r2d2::State {
        self.pool.pool_state()
    }
}
