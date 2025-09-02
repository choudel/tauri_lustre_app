import gleam/json

// Tauri FFI
@external(javascript, "./tauri_ffi.mjs", "invoke")
pub fn tauri_invoke(cmd: String, args: json.Json) -> Nil

@external(javascript, "./tauri_ffi.mjs", "setCallback")
pub fn tauri_set_callback(cb: fn(String, String) -> Nil) -> Nil

// Lodash FFI
@external(javascript, "./lodash_ffi.mjs", "upperCase")
pub fn upper_case(text: String) -> String