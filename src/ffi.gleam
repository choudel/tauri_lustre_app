import gleam/dynamic
import gleam/json

// Tauri FFI
@external(javascript, "./tauri_ffi.mjs", "invoke")
pub fn tauri_invoke(cmd: String, args: json.Json) -> Nil

@external(javascript, "./tauri_ffi.mjs", "setCallback")
pub fn tauri_set_callback(cb: fn(String, dynamic.Dynamic) -> Nil) -> Nil

// Lodash FFI
@external(javascript, "./lodash_ffi.mjs", "upperCase")
pub fn upper_case(text: String) -> String

// Notification functions
@external(javascript, "./notification_ffi.mjs", "init_notifications")
pub fn init_notifications() -> Nil

@external(javascript, "./notification_ffi.mjs", "send_notification")
pub fn send_notification(title: String, body: String) -> Bool

@external(javascript, "./notification_ffi.mjs", "send_test_now")
pub fn send_test_now() -> Bool

@external(javascript, "./notification_ffi.mjs", "send_timed_notification")
pub fn send_timed_notification(delay_ms: Int, callback: fn(Bool) -> Nil) -> Nil

@external(javascript, "./notification_ffi.mjs", "test_notification")
pub fn test_notification() -> Nil