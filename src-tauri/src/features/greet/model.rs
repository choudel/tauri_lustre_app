use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Greet {
    pub id: u32,
    pub name: String,
    pub message: String,
    pub created_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateGreetRequest {
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GreetResponse {
    pub message: String,
    pub greet: Option<Greet>,
}

impl Greet {
    pub fn new(id: u32, name: String) -> Self {
        Self {
            id,
            name: name.clone(),
            message: format!("Hello, {}! You've been greeted from Rust!", name),
            created_at: chrono::Utc::now().to_rfc3339(),
        }
    }
}
