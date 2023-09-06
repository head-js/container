'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function $create(options) {
  var _window = window,
    head = _window.head;
  var $c = head.container.create(options);
  return $c;
}
function $session() {
  var _window2 = window,
    head = _window2.head;
  return head.container.session();
}
function $dispatch(action) {
  var _window3 = window,
    head = _window3.head;
  var fn = head.container.fn('$', 'dispatch');
  fn(action);
}

exports.$create = $create;
exports.$dispatch = $dispatch;
exports.$session = $session;
