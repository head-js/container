
function Http() {}


Http.prototype.fn = function () {
  const { head } = window;
  const fn = head.container.fn('$', 'http');
  return fn;
};


Http.prototype.get = function (...args) {
  const fn = this.fn();
  return fn.get(...args);
};


Http.prototype.post = function (...args) {
  const fn = this.fn();
  return fn.post(...args);
};


Http.prototype.put = function (...args) {
  const fn = this.fn();
  return fn.put(...args);
};


Http.prototype.delete = function (...args) {
  const fn = this.fn();
  return fn.delete(...args);
};


export default Http;
