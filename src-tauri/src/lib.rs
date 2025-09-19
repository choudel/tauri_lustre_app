pub mod core;
pub mod features;
pub mod lazy_repo;
pub mod unit_of_work;

use features::greet::command::*;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_notification::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            create_greet,
            get_greet_by_name,
            get_greet_by_id,
            get_all_greets,
            delete_greet
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
