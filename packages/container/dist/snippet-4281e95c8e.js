/* @head.js/container-snippet 0.0.3 */
this.head=this.head||{},this.head.container=function(){"use strict";function t(t,e){var i=Object.keys(t)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function e(e){
for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){
i(e,t,n[t])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){
Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t,e,i){return(e=function(t){
var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){
var r=i.call(t,e||"default");if("object"!=typeof r)return r
;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string")
;return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,
writable:!0}):t[e]=i,t}function r(t){var e=t.id,i=t.desc,r=void 0===i?"":i,n=t.materials,o=void 0===n?{}:n,s=t.$
;return this.id=e,this.desc=r,this.materials=o,this.$=s,this}function n(){this.$={},this.$fn={},this.$session={}}
function o(){}return r.prototype.fn=function(t){return this.$.fn.call(this.$,this.id,t)},
r.prototype.material=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
;return this.materials[t]||e},n.prototype.create=function(t){var i=this.id(t.id)
;if(i)return Object.assign(i.materials,t.materials),i;var n=new r(e(e({},t),{},{$:this}));return this.$[t.id]=n,n},
n.prototype.id=function(t){return this.$[t]},n.prototype.script=function(t,e,i){var r="".concat(t,"/").concat(e)
;this.$fn[r]=i},n.prototype.fn=function(t,e){var i="".concat(t,"/").concat(e);return this.$fn[i]||o},
n.prototype.session=function(t){if(!t)return"function"==typeof this.$session?this.$session():this.$session
;"function"==typeof t?this.$session=t:"function"==typeof this.$session?this.$session(t):Object.assign(this.$session,t)},
new n}();
