function Http() {}


Http.prototype.script = function () {
  const { head } = window;
  const fn = head.container.script('$$', 'http');
  return fn;
};


Http.prototype.get = function (...args) {
  const fn = this.script();
  return fn.get(...args);
};


Http.prototype.post = function (...args) {
  const fn = this.script();
  return fn.post(...args);
};


Http.prototype.put = function (...args) {
  const fn = this.script();
  return fn.put(...args);
};


Http.prototype.delete = function (...args) {
  const fn = this.script();
  return fn.delete(...args);
};


const $http = new Http();

export default $http;
