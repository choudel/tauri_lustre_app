import gleam/dynamic

pub type Model {
  Model(
    greeting: String,
    name: String,
    loading: Bool,
    notification_status: String,
    notification_count: Int,
  )
}

pub type Msg {
  CallCommand(String)
  CommandResult(String, dynamic.Dynamic)
  CreateGreet
  SendTestNotification
  NotificationSent(Bool)
  SendTimedNotification
}