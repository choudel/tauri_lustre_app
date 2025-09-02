// Model
pub type Model {
  Model(greeting: String, loading: Bool)
}

// Messages
pub type Msg {
  CallCommand(String)
  CommandResult(String, String)
}