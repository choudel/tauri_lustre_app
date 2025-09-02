import gleam/io
import lustre
import sketch/lustre/element.{type Element}
import sketch/lustre/element/html
import lustre/event
import lustre/attribute
import lustre/effect
import gleam/json
import sketch
import sketch/lustre as sketch_lustre
import sketch/css
import sketch/css/length.{px}

@external(javascript, "./tauri_ffi.mjs", "invoke")
fn tauri_invoke(cmd: String, args: json.Json) -> Nil

@external(javascript, "./tauri_ffi.mjs", "setCallback")
fn tauri_set_callback(cb: fn(String, String) -> Nil) -> Nil

// Model
pub type Model {
  Model(greeting: String, loading: Bool)
}

// Messages
pub type Msg {
  CallCommand(String)
  CommandResult(String, String)
}

// Init
fn init(_flags: Nil) -> #(Model, effect.Effect(Msg)) {
  #(Model(greeting: "Click the button to greet!", loading: False), effect.none())
}

// Update now returns (Model, Effect(Msg))
fn update(model: Model, msg: Msg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    CallCommand(cmd) -> {
      let args = json.object([#("name", json.string("Chouaib"))])

      // Side effect: call Tauri invoke
      let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
        tauri_set_callback(fn(cmd: String, result: String) -> Nil {
          dispatch(CommandResult(cmd, result))
        })
        tauri_invoke(cmd, args)
      })

      #(Model(greeting: model.greeting, loading: True), effect)
    }

    CommandResult(cmd, result) -> {
      #(Model(greeting: "Command " <> cmd <> " → " <> result, loading: False), effect.none())
    }
  }
}

// CSS Styles
fn container_style() {
  css.class( [
    css.padding(px(20)),
  ])
}

fn greeting_style() {
  css.class( [
    css.margin_top(px(20)),
    css.margin_bottom(px(20)),
  ])
}

fn button_style() {
  css.class( [
    css.padding_top(px(10)),
    css.padding_bottom(px(10)),
    css.padding_left(px(20)),
    css.padding_right(px(20)),
    css.font_size(px(16)),
    css.cursor("pointer"),
  ])
}

fn button_loading_style() {
  css.class([
    css.padding_top(px(10)),
    css.padding_bottom(px(10)),
    css.padding_left(px(20)),
    css.padding_right(px(20)),
    css.font_size(px(16)),
    css.cursor("wait"),
  ])
}

// View
fn view(model: Model, stylesheet) -> Element(Msg) {
  use <- sketch_lustre.render(stylesheet:, in: [sketch_lustre.node()])
  html.div(container_style(), [], [
    html.h1(css.class([]), [], [html.text("Lustre + Tauri Example")]),
    html.div(greeting_style(), [], [
      html.text(model.greeting)
    ]),
    html.button(
      case model.loading {
        True -> button_loading_style()
        False -> button_style()
      },
      [
        event.on_click(CallCommand("greet")),
        attribute.disabled(model.loading),
      ],
      [html.text(case model.loading { True -> "Loading..." False -> "Run Tauri Command!" })]
    )
  ])
}

@external(javascript, "./lodash_ffi.mjs", "upperCase")
pub fn upper_case(text: String) -> String

pub fn main() {
  let assert Ok(stylesheet) = sketch_lustre.setup()
  let result = upper_case("hello world")
  io.println(result)
  sketch.global(stylesheet, css.global("body", [css.margin(px(0))]))
  let app = lustre.application(init, update, view(_, stylesheet))
  let assert Ok(_) = lustre.start(app, "#app", Nil)
  Nil
}