import lustre/effect
import gleam/json
import types.{type Model, type Msg, Model, CallCommand, CommandResult}
import ffi
import view

// Init
pub fn init(_flags: Nil) -> #(Model, effect.Effect(Msg)) {
  #(Model(greeting: "Click the button to greet!", loading: False), effect.none())
}

// Update
pub fn update(model: Model, msg: Msg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    CallCommand(cmd) -> {
      let args = json.object([#("name", json.string("Chouaib"))])
      
      // Side effect: call Tauri invoke
      let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
        ffi.tauri_set_callback(fn(cmd: String, result: String) -> Nil {
          dispatch(CommandResult(cmd, result))
        })
        ffi.tauri_invoke(cmd, args)
      })
      
      #(Model(greeting: model.greeting, loading: True), effect)
    }
    
    CommandResult(cmd, result) -> {
      #(Model(greeting: "Command " <> cmd <> " → " <> result, loading: False), effect.none())
    }
  }
}

// Re-export view for convenience
pub fn view(model: Model, stylesheet) {
  view.view(model, stylesheet)
}