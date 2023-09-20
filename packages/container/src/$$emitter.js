
function Emitter() {}


Emitter.prototype.script = function () {
  const { head } = window;
  const fn = head.container.script('$$', 'emitter');
  return fn;
};


Emitter.prototype.on = function (...args) {
  const fn = this.script();
  return fn.on(...args);
};


Emitter.prototype.once = function (...args) {
  const fn = this.script();
  return fn.once(...args);
};


Emitter.prototype.off = function (...args) {
  const fn = this.script();
  return fn.off(...args);
};


Emitter.prototype.emit = function (...args) {
  const fn = this.script();
  return fn.emit(...args);
};


const $emitter = new Emitter();

export default $emitter;
