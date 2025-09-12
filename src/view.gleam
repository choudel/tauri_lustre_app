import gleam/int
import sketch/lustre/element.{type Element}
import sketch/lustre/element/html
import lustre/event
import lustre/attribute
import sketch/lustre as sketch_lustre
import sketch/css
import types.{type Model, type Msg, CallCommand, SendTestNotification, SendTimedNotification}
import styles

pub fn view(model: Model, stylesheet) -> Element(Msg) {
  use <- sketch_lustre.render(stylesheet:, in: [sketch_lustre.node()])
  html.div(styles.container_style(), [], [
    html.h1(css.class([]), [], [html.text("Lustre + Tauri + Notifications")]),
    
    // Greeting section
    html.div(styles.section_style(), [], [
      html.h2(css.class([]), [], [html.text("Tauri Commands")]),
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
    ]),
    
    // Notifications section
    html.div(styles.section_style(), [], [
      html.h2(css.class([]), [], [html.text("Notification Tests")]),
      
      // Notification status
      html.div(styles.status_style(), [], [
        html.p(css.class([]), [], [html.text("Status: " <> model.notification_status)]),
        html.p(css.class([]), [], [html.text("Notifications sent: " <> int.to_string(model.notification_count))])
      ]),
      
      // Notification buttons
      html.div(styles.button_group_style(), [], [
        html.button(
          styles.notification_button_style(),
          [event.on_click(SendTestNotification)],
          [html.text("Send Instant Notification")]
        ),
        html.button(
          styles.notification_button_secondary_style(),
          [event.on_click(SendTimedNotification)],
          [html.text("Send Timed Notification (3s)")]
        )
      ])
    ])
  ])
}