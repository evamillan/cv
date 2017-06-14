'use strict';

var box = $('.intro-box');
if (box.length > 0) {
  var offset = box.offset();

  function mouse(evt) {
    var center_x = (offset.left) + (box.width() / 2);
    var center_y = (offset.top) + (box.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 45;
    box.css('-moz-transform', 'perspective( 600px) rotateY(' + degree + 'deg)');
    box.css('-webkit-transform', 'perspective( 600px) rotateY(' + degree + 'deg)');
    box.css('-o-transform', 'perspective( 600px) rotateY(' + degree + 'deg)');
    box.css('-ms-transform', 'perspective( 600px) rotateY(' + degree + 'deg)');
  }
  $(document).mousemove(mouse);
}
