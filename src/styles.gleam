import sketch/css
import sketch/css/length.{px, rem, cqw}

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
pub fn input_style() {
  css.class([
    css.padding(px(10)),
    css.font_size(px(16)),
    css.margin_right(px(10)),
    css.border_radius(px(4)),
    css.border("1px solid #ccc"),
  css.width(cqw(100))
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




pub fn section_style() {
  css.class([
    css.display("grid"),
    css.grid_template_columns("1fr"),
    css.margin_bottom(px(30)),
    css.padding(px(20)),
    css.border_radius(px(8)),
    css.background_color("#fafafa")
  ])
}

pub fn status_style() {
  css.class([
    css.padding(px(10)),
    css.margin_bottom(px(15)),
    css.background_color("#e7f3ff"),
    css.border_radius(px(6))
  ])
}

pub fn notification_button_style() {
  css.class([
    css.padding(px(12)),
    css.margin(px(5)),
    css.background_color("#28a745"),
    css.color("white"),    
    css.border_radius(px(6)),
    css.cursor("pointer"),
    css.font_size(rem(1.0)),
    css.hover([
      css.background_color("#1e7e34")
    ])
  ])
}

pub fn notification_button_secondary_style() {
  css.class([
    css.padding(px(12)),
    css.margin(px(5)),
    css.background_color("#ffc107"),
    css.color("#212529"),    
    css.border_radius(px(6)),
    css.cursor("pointer"),
    css.font_size(rem(1.0)),
    css.hover([
      css.background_color("#e0a800")
    ])
  ])
}

pub fn button_group_style() {
  css.class([
    css.display("flex"),
    css.flex_wrap("wrap"),
    css.gap(px(10))
  ])
}