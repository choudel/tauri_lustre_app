import sketch/lustre/element.{type Element}
import sketch/lustre/element/html
import lustre/event
import lustre/attribute
import sketch/lustre as sketch_lustre
import sketch/css
import types.{type Model, type Msg, CallCommand}
import styles

pub fn view(model: Model, stylesheet) -> Element(Msg) {
  use <- sketch_lustre.render(stylesheet:, in: [sketch_lustre.node()])
  html.div(styles.container_style(), [], [
    html.h1(css.class([]), [], [html.text("Lustre + Tauri Example")]),
    html.div(styles.greeting_style(), [], [
      html.text(model.greeting)
    ]),
    html.button(
      case model.loading {
        True -> styles.button_loading_style()
        False -> styles.button_style()
      },
      [
        event.on_click(CallCommand("greet")),
        attribute.disabled(model.loading),
      ],
      [html.text(case model.loading { 
        True -> "Loading..." 
        False -> "Run Tauri Command!" 
      })]
    )
  ])
}