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
        if let Ok(Some(existing)) = uow.greet_repo().find_by_name(&request.name) {
            return Ok(GreetResponse {
                message: existing.message.clone(),
                greet: Some(existing),
            });
        }

        // Create new greet
        let greet = Greet::new(0, request.name); // ID will be auto-assigned by repo
        let saved_greet = uow.greet_repo().save(greet)?;

        Ok(GreetResponse {
            message: saved_greet.message.clone(),
            greet: Some(saved_greet),
        })
    }

    pub fn get_greet_by_name(&self, uow: &UnitOfWork, name: &str) -> Result<Option<Greet>, String> {
        uow.greet_repo().find_by_name(name)
    }

    pub fn get_greet_by_id(&self, uow: &UnitOfWork, id: u32) -> Result<Option<Greet>, String> {
        uow.greet_repo().find_by_id(id)
    }

    pub fn get_all_greets(&self, uow: &UnitOfWork) -> Result<Vec<Greet>, String> {
        uow.greet_repo().find_all()
    }

    pub fn delete_greet(&self, uow: &UnitOfWork, id: u32) -> Result<bool, String> {
        uow.greet_repo().delete(id)
    }

    // Simple greet function for backward compatibility
    pub fn simple_greet(&self, uow: &UnitOfWork, name: &str) -> Result<String, String> {
        let request = CreateGreetRequest {
            name: name.to_string(),
        };

        let response = self.create_greet(uow, request)?;
        Ok(response.message)
    }
}
