use super::model::Greet;
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

pub trait GreetRepository {
    fn save(&self, greet: Greet) -> Result<Greet, String>;
    fn find_by_id(&self, id: u32) -> Result<Option<Greet>, String>;
    fn find_by_name(&self, name: &str) -> Result<Option<Greet>, String>;
    fn find_all(&self) -> Result<Vec<Greet>, String>;
    fn delete(&self, id: u32) -> Result<bool, String>;
    fn get_next_id(&self) -> u32;
}

#[derive(Debug, Clone)]
pub struct GreetRepo {
    store: Arc<Mutex<HashMap<u32, Greet>>>,
    next_id: Arc<Mutex<u32>>,
}

impl GreetRepo {
    pub fn new() -> Self {
        Self {
            store: Arc::new(Mutex::new(HashMap::new())),
            next_id: Arc::new(Mutex::new(1)),
        }
    }
}

impl GreetRepository for GreetRepo {
    fn save(&self, mut greet: Greet) -> Result<Greet, String> {
        let mut store = self.store.lock().map_err(|_| "Failed to acquire lock")?;

        if greet.id == 0 {
            greet.id = self.get_next_id();
        }

        store.insert(greet.id, greet.clone());
        Ok(greet)
    }

    fn find_by_id(&self, id: u32) -> Result<Option<Greet>, String> {
        let store = self.store.lock().map_err(|_| "Failed to acquire lock")?;
        Ok(store.get(&id).cloned())
    }

    fn find_by_name(&self, name: &str) -> Result<Option<Greet>, String> {
        let store = self.store.lock().map_err(|_| "Failed to acquire lock")?;
        Ok(store.values().find(|g| g.name == name).cloned())
    }

    fn find_all(&self) -> Result<Vec<Greet>, String> {
        let store = self.store.lock().map_err(|_| "Failed to acquire lock")?;
        Ok(store.values().cloned().collect())
    }

    fn delete(&self, id: u32) -> Result<bool, String> {
        let mut store = self.store.lock().map_err(|_| "Failed to acquire lock")?;
        Ok(store.remove(&id).is_some())
    }

    fn get_next_id(&self) -> u32 {
        let mut next_id = self.next_id.lock().unwrap();
        let id = *next_id;
        *next_id += 1;
        id
    }
}
