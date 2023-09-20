/* @head.js/container-snippet 0.1.2 */
this.head=this.head||{},this.head.container=function(){"use strict";function t(t,r){var e=Object.keys(t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter((function(r){
return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,i)}return e}function r(r){
for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(t){
e(r,t,n[t])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){
Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}function e(t,r,e){return(r=function(t){
var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){
var i=e.call(t,r||"default");if("object"!=typeof i)return i
;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string")
;return"symbol"==typeof r?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,
writable:!0}):t[r]=e,t}function i(t){var r=t.id,e=t.desc,i=void 0===e?"":e,n=t.materials,o=void 0===n?{}:n,c=t.$
;return this.id=r,this.desc=i,this.materials=o,this.$=c,this}function n(){this.$={},this.$script={}}function o(){}
return i.prototype.script=function(t,r){return this.$.script.call(this.$,this.id,t,r)},i.prototype.material=function(t){
var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.materials[t]||r},
n.prototype.create=function(t){var e=this.id(t.id);if(e)return Object.assign(e.materials,t.materials),e
;var n=new i(r(r({},t),{},{$:this}));return this.$[t.id]=n,n},n.prototype.id=function(t){return this.$[t]},
n.prototype.script=function(t,r,e){if(!e){var i="".concat(t,"/").concat(r);return this.$script[i]||o}
var n="".concat(t,"/").concat(r);this.$script[n]=e},new n}();
