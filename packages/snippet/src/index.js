function Container(options) {
  const { id, desc, $ } = options;
  this.id = id;
  this.desc = desc;
  this.$ = $;
  return this;
}


Container.prototype.fn = function (name) {
  return this.$.fn.call(this.$, this.id, name);
};


function Snippet() {
  this.$ = {};
  this.$fn = {};
}


Snippet.prototype.create = function (options) {
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


Snippet.prototype.fn = function (id, name) {
  const n = `${id}/${name}`;
  return this.$fn[n];
};


const snippet = new Snippet();


export default snippet;
