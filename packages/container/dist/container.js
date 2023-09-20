'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function $session(update) {
  var _window = window,
    head = _window.head;
  var fn = head.container.script('$', 'session');
  if (update) {
    fn(update);
  } else {
    return fn(update);
  }
}

function $dispatch(action) {
  var _window = window,
    head = _window.head;
  var fn = head.container.script('$', 'dispatch');
  fn(action);
}

function $create(options) {
  var _window = window,
    head = _window.head;
  var $c = head.container.create(options);
  return $c;
}
function $script(id, name, fn) {
  var _window2 = window,
    head = _window2.head;
  if (fn) {
    head.container.script(id, name, fn);
  } else {
    var fn1 = head.container.script(id, name);
    return fn1;
  }
}

exports.$create = $create;
exports.$dispatch = $dispatch;
exports.$script = $script;
exports.$session = $session;
