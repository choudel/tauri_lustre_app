use super::handler::GreetHandler;
use super::model::{CreateGreetRequest, Greet, GreetResponse};
use crate::unit_of_work::UnitOfWork;

#[tauri::command]
pub fn greet(name: &str) -> String {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();

    match handler.simple_greet(&uow, name) {
        Ok(message) => message,
        Err(err) => format!("Error: {}", err),
    }
}

#[tauri::command]
pub fn create_greet(name: String) -> Result<GreetResponse, String> {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();
    let request = CreateGreetRequest { name };

    handler.create_greet(&uow, request)
}

#[tauri::command]
pub fn get_greet_by_name(name: String) -> Result<Option<Greet>, String> {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();

    handler.get_greet_by_name(&uow, &name)
}

#[tauri::command]
pub fn get_greet_by_id(id: u32) -> Result<Option<Greet>, String> {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();

    handler.get_greet_by_id(&uow, id)
}

#[tauri::command]
pub fn get_all_greets() -> Result<Vec<Greet>, String> {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();

    handler.get_all_greets(&uow)
}

#[tauri::command]
pub fn delete_greet(id: u32) -> Result<bool, String> {
    let uow = UnitOfWork::new();
    let handler = GreetHandler::new();

    handler.delete_greet(&uow, id)
}
