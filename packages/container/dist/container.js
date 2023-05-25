'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function create(options) {
  var _window = window,
    head = _window.head;
  head.container.create(options); // eslint-disable-line no-unused-vars
  // console.log($c);
}

function on(id, name) {
  // eslint-disable-line import/prefer-default-export
  return function () {
    var _window2 = window,
      head = _window2.head;
    var $c = head.container.id(id);
    var fn = $c.fn(name);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    fn.apply(null, args); // eslint-disable-line prefer-spread
  };
}

exports.create = create;
exports.on = on;
