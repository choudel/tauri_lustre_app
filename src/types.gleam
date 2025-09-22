import gleam/dynamic

// Model definition
pub type Model {
  Model(
    greeting: String,
    name: String,
    loading: Bool,
    notification_status: String,
    notification_count: Int,
  )
}

// Command-related messages
pub type CommandMsg {
  CallCommand(String)
  CommandResult(String, dynamic.Dynamic)
  CreateGreet
}

// Notification-related messages  
pub type NotificationMsg {
  SendTestNotification
  SendTimedNotification
  NotificationSent(Bool)
}

// UI-related messages
pub type UiMsg {
  UpdateName(String)
}

// Main message type - note the constructor names are different from type names
pub type Msg {
  Command(CommandMsg)        
  Notification(NotificationMsg)  
  Ui(UiMsg)                 
}
