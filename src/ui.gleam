import lustre/effect
import types.{type Model, type Msg, type UiMsg, Model, Ui, UpdateName}

pub fn update_ui(model: Model, msg: UiMsg) -> #(Model, effect.Effect(Msg)) {
  case msg {
    UpdateName(new_name) -> {
      #(Model(..model, name: new_name), effect.none())
    }
  }
}