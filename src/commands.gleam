import gleam/dynamic
import gleam/dynamic/decode
import lustre/effect
import gleam/json
import types.{type Model, type Msg, type CommandMsg, Model, Command, CallCommand, CommandResult, CreateGreet}
import ffi

pub fn update_command(model: Model, msg: CommandMsg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    CallCommand(cmd) -> handle_call_command(model, cmd)
    CommandResult(cmd, result) -> handle_command_result(model, cmd, result)
    CreateGreet -> handle_create_greet(model)
  }
}

fn handle_call_command(model: Model, cmd: String) -> #(Model, effect.Effect(Msg)) {
  let args = case cmd {
    "greet" -> json.object([#("name", json.string("Chouaib"))])
    "create_greet" -> json.object([#("name", json.string("Chouaib1"))])
    _ -> json.object([])
  }
  
  let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
    ffi.tauri_set_callback(fn(cmd: String, result: dynamic.Dynamic) -> Nil {
      dispatch(Command(CommandResult(cmd, result))) // Use Command constructor
    })
    ffi.tauri_invoke(cmd, args)
  })
  
  #(Model(..model, loading: True), effect)
}

fn handle_command_result(model: Model, cmd: String, dynamic_result: dynamic.Dynamic) -> #(Model, effect.Effect(Msg)) {
  let result = case cmd {
    "greet" -> decode_greet_result(dynamic_result)
    "create_greet" -> decode_create_greet_result(dynamic_result)
    _ -> "Unknown command: " <> cmd
  }
  
  #(
    Model(..model, 
      greeting: "Command " <> cmd <> " → " <> result,
      loading: False
    ), 
    effect.none()
  )
}

fn handle_create_greet(model: Model) -> #(Model, effect.Effect(Msg)) {
  let args = json.object([#("name", json.string(model.name))])
  
  let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
    ffi.tauri_set_callback(fn(cmd: String, result: dynamic.Dynamic) -> Nil {
      dispatch(Command(CommandResult(cmd, result))) // Use Command constructor
    })
    ffi.tauri_invoke("create_greet", args)
  })
  
  #(Model(..model, loading: True), effect)
}

fn decode_greet_result(result: dynamic.Dynamic) -> String {
  case decode.run(result, decode.string) {
    Ok(message) -> message
    Error(_) -> "Error: Expected string result"
  }
}

fn decode_create_greet_result(result: dynamic.Dynamic) -> String {
  case decode.run(result, decode.string) {
    Ok(error_message) -> "Error: " <> error_message
    Error(_) -> {
      case decode.run(result, decode.at(["message"], decode.string)) {
        Ok(message) -> message
        Error(_) -> "Error: Unexpected result format"
      }
    }
  }
}
