use rusqlite::Connection;

use crate::features::greet::{GreetRepo, GreetRepository};
use std::sync::{Arc, Mutex, OnceLock};

pub struct LazyRepo {
    greet_repo: OnceLock<GreetRepo>,
}

impl LazyRepo {
    pub fn new(connection: Arc<Mutex<Connection>>) -> Self {
        Self {
            greet_repo: OnceLock::from(GreetRepo::new(connection)),
        }
    }

    pub fn greet_repo(&self) -> &dyn GreetRepository {
        self.greet_repo.get().unwrap()
    }

    pub fn greet_repo_concrete(&self) -> &GreetRepo {
        &self.greet_repo.get().unwrap()
    }
}

// Remove Default implementation as it requires a connection parameter
