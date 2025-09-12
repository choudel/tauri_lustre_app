pub type Model {
  Model(
    greeting: String,
    loading: Bool,
    notification_status: String,
    notification_count: Int,
  )
}

pub type Msg {
  CallCommand(String)
  CommandResult(String, String)
  SendTestNotification
  NotificationSent(Bool)
  SendTimedNotification
}