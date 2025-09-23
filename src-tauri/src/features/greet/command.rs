use super::handler::GreetHandler;
use super::model::{CreateGreetRequest, GreetResponse};
use crate::unit_of_work::UnitOfWork;

#[tauri::command]
pub fn greet(app: tauri::AppHandle, name: &str) -> String {
    let uow = UnitOfWork::new(&app);
    let handler = GreetHandler::new();

    match handler.simple_greet(&uow, name) {
        Ok(message) => message,
        Err(err) => format!("Error: {}", err),
    }
}
#[tauri::command]
pub fn create_greet(app: tauri::AppHandle, name: String) -> Result<GreetResponse, String> {
    let uow = UnitOfWork::new(&app);
    let handler = GreetHandler::new();
    let request = CreateGreetRequest { name };

    handler
        .create_greet(&uow, request)
        .map_err(|e| e.to_string())
}
