function Container(options) {
  const { id, desc } = options;
  this.id = id;
  this.desc = desc;
  this.fns = {};
  return this;
}


Container.prototype.script = function (name, fn) {
  this.fns[name] = fn;
  return this;
};


Container.prototype.fn = function (name) {
  return this.fns[name];
};


function Snippet() {
  this.$ = {};
}


Snippet.prototype.create = function (options) {
  const $c = new Container(options);
  this.$[options.id] = $c;
  return $c;
};


Snippet.prototype.id = function (id) {
  const $c = this.$[id];
  return $c;
};


Snippet.prototype.script = function (id, name, fn) {
  const $c = this.id(id);
  $c.script(name, fn);
};


Snippet.prototype.fn = function (id, name) {
  const $c = this.id(id);
  return $c.fn(name);
};


const snippet = new Snippet();


export default snippet;
