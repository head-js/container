'use strict';

function Http() {}
Http.prototype.script = function () {
  var _window = window,
    head = _window.head;
  var fn = head.container.script('$$', 'http');
  return fn;
};
Http.prototype.get = function () {
  var fn = this.script();
  return fn.get.apply(fn, arguments);
};
Http.prototype.post = function () {
  var fn = this.script();
  return fn.post.apply(fn, arguments);
};
Http.prototype.put = function () {
  var fn = this.script();
  return fn.put.apply(fn, arguments);
};
Http.prototype["delete"] = function () {
  var fn = this.script();
  return fn["delete"].apply(fn, arguments);
};
var $http = new Http();

module.exports = $http;
