use super::model::{CreateGreetRequest, Greet, GreetResponse};
use crate::unit_of_work::UnitOfWork;
pub struct GreetHandler;

impl GreetHandler {
    pub fn new() -> Self {
        Self
    }

    pub fn create_greet(
        &self,
        uow: &UnitOfWork,
        request: CreateGreetRequest,
    ) -> Result<GreetResponse, String> {
        // Check if greet already exists for this name
        match uow.greet_repo().get_greeting_by_name(&request.name) {
            Ok(Some(existing_message)) => {
                // Return existing greeting
                let greet = Greet::new(0, request.name.clone()); // ID is not returned from DB, using 0
                Ok(GreetResponse {
                    message: existing_message,
                    greet: Some(greet),
                })
            }
            Ok(None) => {
                // Create new greet
                let message = format!("Hello, {}!", request.name); // Generate message

                match uow.greet_repo().create_greeting(&request.name, &message) {
                    Ok(id) => {
                        let greet = Greet::new(id as u32, request.name.clone());
                        Ok(GreetResponse {
                            message: message.clone(),
                            greet: Some(greet),
                        })
                    }
                    Err(e) => Err(format!("Failed to create greeting: {}", e)),
                }
            }
            Err(e) => Err(format!("Failed to check existing greeting: {}", e)),
        }
    }

    // Optional: Simple greet method for the basic greet command
    pub fn simple_greet(&self, uow: &UnitOfWork, name: &str) -> Result<String, String> {
        match uow.greet_repo().get_greeting_by_name(name) {
            Ok(Some(message)) => Ok(message),
            Ok(None) => {
                // Create a simple greeting if none exists
                let message = format!("Hello, {}!", name);
                match uow.greet_repo().create_greeting(name, &message) {
                    Ok(_) => Ok(message),
                    Err(e) => Err(format!("Failed to create greeting: {}", e)),
                }
            }
            Err(e) => Err(format!("Database error: {}", e)),
        }
    }
}
