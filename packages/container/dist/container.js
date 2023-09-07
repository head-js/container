'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function Http() {}
Http.prototype.fn = function () {
  var _window = window,
    head = _window.head;
  var fn = head.container.fn('$', 'http');
  return fn;
};
Http.prototype.get = function () {
  var fn = this.fn();
  return fn.get.apply(fn, arguments);
};
Http.prototype.post = function () {
  var fn = this.fn();
  return fn.post.apply(fn, arguments);
};
Http.prototype.put = function () {
  var fn = this.fn();
  return fn.put.apply(fn, arguments);
};
Http.prototype["delete"] = function () {
  var fn = this.fn();
  return fn["delete"].apply(fn, arguments);
};

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
var $http = new Http();

exports.$create = $create;
exports.$dispatch = $dispatch;
exports.$http = $http;
exports.$session = $session;
