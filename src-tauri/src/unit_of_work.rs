use rusqlite::Connection;

use crate::connection::MyConnection;
use crate::features::greet::{GreetRepo, GreetRepository};
use crate::lazy_repo::LazyRepo;
use std::sync::{Arc, Mutex, OnceLock};

static GLOBAL_CONNECTION: OnceLock<Arc<Mutex<Connection>>> = OnceLock::new();

pub struct UnitOfWork {
    lazy_repo: LazyRepo,
}

impl UnitOfWork {
    pub fn new() -> Self {
        let connection = GLOBAL_CONNECTION
            .get_or_init(|| {
                let db_conn = MyConnection::new().unwrap();
                db_conn.get_connection()
            })
            .clone();

        let lazy_repo = LazyRepo::new(connection);

        Self { lazy_repo }
    }

    pub fn greet_repo(&self) -> &dyn GreetRepository {
        self.lazy_repo.greet_repo()
    }

    pub fn greet_repo_concrete(&self) -> &GreetRepo {
        self.lazy_repo.greet_repo_concrete()
    }
}

impl Default for UnitOfWork {
    fn default() -> Self {
        Self::new()
    }
}
