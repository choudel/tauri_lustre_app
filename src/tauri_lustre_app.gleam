import gleam/io
import lustre
import sketch
import sketch/lustre as sketch_lustre
import sketch/css
import sketch/css/length.{px}
import app
import ffi

pub fn main() {
  let assert Ok(stylesheet) = sketch_lustre.setup()
  let result = ffi.upper_case("hello world")
  io.println(result)
  ffi.init_notifications()
  ffi.test_notification()
  sketch.global(stylesheet, css.global("body", [css.margin(px(0))]))
  let lustre_app = lustre.application(app.init, app.update, app.view(_, stylesheet))
  let assert Ok(_) = lustre.start(lustre_app, "#app", Nil)
  Nil
}