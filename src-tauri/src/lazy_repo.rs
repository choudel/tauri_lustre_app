use rusqlite::Connection;
use std::sync::{Arc, Mutex, OnceLock};

use crate::features::greet::repo::{GreetRepo, GreetRepository};

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
