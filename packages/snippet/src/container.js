function Container(options) {
  const { id, desc = '', materials = {}, $ } = options; // eslint-disable-line object-curly-newline
  this.id = id;
  this.desc = desc;
  this.materials = materials;
  this.$ = $;
  return this;
}


Container.prototype.script = function (name, fn) {
  return this.$.script.call(this.$, this.id, name, fn);
};


Container.prototype.material = function (name, fallback = '') {
  return this.materials[name] || fallback;
};


export default Container;
