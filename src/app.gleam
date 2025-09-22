import lustre/effect
import types.{type Model, type Msg, Model, Command, Notification, Ui}
import commands
import notifications
import ui
import ffi
import view

// Init
pub fn init(_flags: Nil) -> #(Model, effect.Effect(Msg)) {
  ffi.init_notifications()
  
  #(
    Model(
      greeting: "Click the button to greet!", 
      name: "Chouaib",
      loading: False,
      notification_status: "Notifications initialized",
      notification_count: 0,
    ), 
    effect.none()
  )
}

// Update - now uses the correct constructor names
pub fn update(model: Model, msg: Msg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    Command(cmd_msg) -> commands.update_command(model, cmd_msg)
    Notification(notif_msg) -> notifications.update_notification(model, notif_msg)
    Ui(ui_msg) -> ui.update_ui(model, ui_msg)
  }
}
pub fn view(model: Model, stylesheet) {
  view.view(model, stylesheet)
}