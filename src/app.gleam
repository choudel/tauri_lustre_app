import lustre/effect
import gleam/json
import types.{type Model, type Msg, Model, CallCommand, CommandResult, SendTestNotification, NotificationSent, SendTimedNotification}
import ffi
import view

// Init
pub fn init(_flags: Nil) -> #(Model, effect.Effect(Msg)) {
  // Initialize notifications on startup
  ffi.init_notifications()
  
  #(
    Model(
      greeting: "Click the button to greet!", 
      loading: False,
      notification_status: "Notifications initialized",
      notification_count: 0,
    ), 
    effect.none()
  )
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
      
      #(Model(
        greeting: model.greeting, 
        loading: True,
        notification_status: model.notification_status,
        notification_count: model.notification_count,
      ), effect)
    }
    
    CommandResult(cmd, result) -> {
      #(Model(
        greeting: "Command " <> cmd <> " → " <> result, 
        loading: False,
        notification_status: model.notification_status,
        notification_count: model.notification_count,
      ), effect.none())
    }
    
    SendTestNotification -> {
      // Side effect: send test notification
      let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
        let success = ffi.send_test_now()
        dispatch(NotificationSent(success))
      })
      
      #(Model(
        greeting: model.greeting,
        loading: model.loading,
        notification_status: "Sending notification...",
        notification_count: model.notification_count,
      ), effect)
    }
    
    NotificationSent(success) -> {
      let new_count = case success {
        True -> model.notification_count + 1
        False -> model.notification_count
      }
      
      let status = case success {
        True -> "Notification sent successfully!"
        False -> "Failed to send notification"
      }
      
      #(Model(
        greeting: model.greeting,
        loading: model.loading,
        notification_status: status,
        notification_count: new_count,
      ), effect.none())
    }
    
    SendTimedNotification -> {
      // Send a notification after 3 seconds
      let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
        ffi.send_timed_notification(3000, fn(success) {
          dispatch(NotificationSent(success))
        })
      })
      
      #(Model(
        greeting: model.greeting,
        loading: model.loading,
        notification_status: "Timed notification scheduled (3s)...",
        notification_count: model.notification_count,
      ), effect)
    }
  }
}

// Re-export view for convenience
pub fn view(model: Model, stylesheet) {
  view.view(model, stylesheet)
}