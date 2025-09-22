import lustre/effect
import types.{type Model, type Msg, type NotificationMsg, Model, Notification, SendTestNotification, SendTimedNotification, NotificationSent}
import ffi

pub fn update_notification(model: Model, msg: NotificationMsg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    SendTestNotification -> handle_send_test_notification(model)
    SendTimedNotification -> handle_send_timed_notification(model)
    NotificationSent(success) -> handle_notification_sent(model, success)
  }
}

fn handle_send_test_notification(model: Model) -> #(Model, effect.Effect(Msg)) {
  let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
    let success = ffi.send_test_now()
    dispatch(Notification(NotificationSent(success))) // Use Notification constructor
  })
  
  #(
    Model(..model, notification_status: "Sending notification..."), 
    effect
  )
}

fn handle_send_timed_notification(model: Model) -> #(Model, effect.Effect(Msg)) {
  let effect = effect.from(fn(dispatch: fn(Msg) -> Nil) -> Nil {
    ffi.send_timed_notification(3000, fn(success) {
      dispatch(Notification(NotificationSent(success))) // Use Notification constructor
    })
  })
  
  #(
    Model(..model, notification_status: "Timed notification scheduled (3s)..."), 
    effect
  )
}

fn handle_notification_sent(model: Model, success: Bool) -> #(Model, effect.Effect(Msg)) {
  let new_count = case success {
    True -> model.notification_count + 1
    False -> model.notification_count
  }
  
  let status = case success {
    True -> "Notification sent successfully!"
    False -> "Failed to send notification"
  }
  
  #(
    Model(..model, 
      notification_status: status,
      notification_count: new_count
    ), 
    effect.none()
  )
}