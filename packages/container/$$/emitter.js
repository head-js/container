'use strict';

function Emitter() {}
Emitter.prototype.script = function () {
  var _window = window,
    head = _window.head;
  var fn = head.container.script('$$', 'emitter');
  return fn;
};
Emitter.prototype.on = function () {
  var fn = this.script();
  return fn.on.apply(fn, arguments);
};
Emitter.prototype.once = function () {
  var fn = this.script();
  return fn.once.apply(fn, arguments);
};
Emitter.prototype.off = function () {
  var fn = this.script();
  return fn.off.apply(fn, arguments);
};
Emitter.prototype.emit = function () {
  var fn = this.script();
  return fn.emit.apply(fn, arguments);
};
var $emitter = new Emitter();

module.exports = $emitter;
