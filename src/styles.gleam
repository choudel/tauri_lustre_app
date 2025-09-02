import sketch/css
import sketch/css/length.{px}

pub fn container_style() {
  css.class([
    css.padding(px(20)),
  ])
}

pub fn greeting_style() {
  css.class([
    css.margin_top(px(20)),
    css.margin_bottom(px(20)),
  ])
}

pub fn button_style() {
  css.class([
    css.padding_top(px(10)),
    css.padding_bottom(px(10)),
    css.padding_left(px(20)),
    css.padding_right(px(20)),
    css.font_size(px(16)),
    css.cursor("pointer"),
  ])
}

pub fn button_loading_style() {
  css.class([
    css.padding_top(px(10)),
    css.padding_bottom(px(10)),
    css.padding_left(px(20)),
    css.padding_right(px(20)),
    css.font_size(px(16)),
    css.cursor("wait"),
  ])
}