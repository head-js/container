import Container from './container';


function Snippet() {
  this.$ = {};
  this.$script = {};
}


Snippet.prototype.create = function (options) {
  const $exist = this.id(options.id);
  if ($exist) {
    Object.assign($exist.materials, options.materials);
    return $exist;
  }

  const $ = this;
  const $c = new Container({ ...options, $ });
  this.$[options.id] = $c;
  return $c;
};


Snippet.prototype.id = function (id) {
  const $c = this.$[id];
  return $c;
};


function noop() {}


Snippet.prototype.script = function (id, name, fn) {
  if (fn) {
    const n = `${id}/${name}`;
    this.$script[n] = fn;
  } else {
    const n = `${id}/${name}`;
    return this.$script[n] || noop;
  }
};


const snippet = new Snippet();


export default snippet;
