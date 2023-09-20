function Edge() {}


Edge.prototype.script = function () {
  const { head } = window;
  const fn = head.container.script('$$', 'edge');
  return fn;
};


Edge.prototype.get = function (...args) {
  const fn = this.script();
  return fn.get(...args);
};


Edge.prototype.post = function (...args) {
  const fn = this.script();
  return fn.post(...args);
};


Edge.prototype.put = function (...args) {
  const fn = this.script();
  return fn.put(...args);
};


Edge.prototype.delete = function (...args) {
  const fn = this.script();
  return fn.delete(...args);
};


const $edge = new Edge();

export default $edge;
