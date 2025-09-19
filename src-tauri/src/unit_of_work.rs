use crate::features::greet::{GreetRepo, GreetRepository};
use crate::lazy_repo::LazyRepo;
use std::sync::{Arc, OnceLock};

static GLOBAL_LAZY_REPO: OnceLock<Arc<LazyRepo>> = OnceLock::new();

pub struct UnitOfWork {
    lazy_repo: Arc<LazyRepo>,
}

impl UnitOfWork {
    pub fn new() -> Self {
        let lazy_repo = GLOBAL_LAZY_REPO
            .get_or_init(|| Arc::new(LazyRepo::new()))
            .clone();

        Self { lazy_repo }
    }

    pub fn greet_repo(&self) -> &dyn GreetRepository {
        self.lazy_repo.greet_repo()
    }

    // Method to get the concrete type if needed
    pub fn greet_repo_concrete(&self) -> &GreetRepo {
        self.lazy_repo.greet_repo()
    }
}

impl Default for UnitOfWork {
    fn default() -> Self {
        Self::new()
    }
}
