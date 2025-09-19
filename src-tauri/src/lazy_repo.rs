use crate::features::greet::GreetRepo;
use std::sync::OnceLock;

pub struct LazyRepo {
    greet_repo: OnceLock<GreetRepo>,
}

impl LazyRepo {
    pub fn new() -> Self {
        Self {
            greet_repo: OnceLock::new(),
        }
    }

    pub fn greet_repo(&self) -> &GreetRepo {
        self.greet_repo.get_or_init(|| GreetRepo::new())
    }
}

impl Default for LazyRepo {
    fn default() -> Self {
        Self::new()
    }
}
