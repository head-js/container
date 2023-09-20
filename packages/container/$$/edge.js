'use strict';

function Edge() {}
Edge.prototype.script = function () {
  var _window = window,
    head = _window.head;
  var fn = head.container.script('$$', 'edge');
  return fn;
};
Edge.prototype.get = function () {
  var fn = this.script();
  return fn.get.apply(fn, arguments);
};
Edge.prototype.post = function () {
  var fn = this.script();
  return fn.post.apply(fn, arguments);
};
Edge.prototype.put = function () {
  var fn = this.script();
  return fn.put.apply(fn, arguments);
};
Edge.prototype["delete"] = function () {
  var fn = this.script();
  return fn["delete"].apply(fn, arguments);
};
var $edge = new Edge();

module.exports = $edge;
