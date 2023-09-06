import Container from './container';


function Snippet() {
  this.$ = {};
  this.$fn = {};
  this.$session = {};
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


Snippet.prototype.script = function (id, name, fn) {
  const n = `${id}/${name}`;
  this.$fn[n] = fn;
};


function noop() {}


Snippet.prototype.fn = function (id, name) {
  const n = `${id}/${name}`;
  return this.$fn[n] || noop;
};


Snippet.prototype.session = function (update) {
  if (update) {
    if (typeof update === 'function') {
      this.$session = update;
    } else {
      if (typeof this.$session === 'function') { // eslint-disable-line no-lonely-if
        this.$session(update);
      } else {
        Object.assign(this.$session, update);
      }
    }
  } else {
    if (typeof this.$session === 'function') { // eslint-disable-line no-lonely-if
      return this.$session();
    } else { // eslint-disable-line no-else-return
      return this.$session;
    }
  }
};


const snippet = new Snippet();


export default snippet;
