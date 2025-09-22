use super::*;
use crate::{
    features::greet::model::{CreateGreetRequest, Greet, GreetResponse},
    unit_of_work::UnitOfWork,
};
pub struct GreetHandler;

impl GreetHandler {
    pub fn new() -> Self {
        Self
    }

    pub fn create_greet(
        &self,
        uow: &UnitOfWork,
        request: CreateGreetRequest,
    ) -> AppResult<GreetResponse> {
        // Validate input
        if request.name.trim().is_empty() {
            return Err(AppError::validation("Name cannot be empty"));
        }

        if request.name.len() > 100 {
            return Err(AppError::validation("Name cannot exceed 100 characters"));
        }

        // Check if greet already exists for this name
        match uow.greet_repo().get_greeting_by_name(&request.name)? {
            Some(existing_message) => {
                // Return existing greeting
                let greet = Greet::new(0, request.name.clone());
                Ok(GreetResponse {
                    message: existing_message,
                    greet: Some(greet),
                })
            }
            None => {
                // Create new greet
                let message = format!("Hello, {}!", request.name);

                let id = uow.greet_repo().create_greeting(&request.name, &message)?;
                let greet = Greet::new(id as u32, request.name.clone());

                Ok(GreetResponse {
                    message: message.clone(),
                    greet: Some(greet),
                })
            }
        }
    }

    pub fn simple_greet(&self, uow: &UnitOfWork, name: &str) -> AppResult<String> {
        if name.trim().is_empty() {
            return Err(AppError::validation("Name cannot be empty"));
        }

        match uow.greet_repo().get_greeting_by_name(name)? {
            Some(message) => Ok(message),
            None => {
                let message = format!("Hello, {}!", name);
                uow.greet_repo().create_greeting(name, &message)?;
                Ok(message)
            }
        }
    }
}
