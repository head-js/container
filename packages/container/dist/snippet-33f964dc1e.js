/* @head.js/container-snippet 0.0.1 */
this.head=this.head||{},this.head.container=function(){"use strict";function t(t,r){var e=Object.keys(t)
;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){
return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function r(r){
for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){
e(r,t,i[t])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){
Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(i,t))}))}return r}function e(t,r,e){return(r=function(t){
var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){
var n=e.call(t,r||"default");if("object"!=typeof n)return n
;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string")
;return"symbol"==typeof r?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,
writable:!0}):t[r]=e,t}function n(t){var r=t.id,e=t.desc,n=t.$;return this.id=r,this.desc=e,this.$=n,this}function i(){
this.$={},this.$fn={}}return n.prototype.fn=function(t){return this.$.fn.call(this.$,this.id,t)},
i.prototype.create=function(t){var e=new n(r(r({},t),{},{$:this}));return this.$[t.id]=e,e},i.prototype.id=function(t){
return this.$[t]},i.prototype.script=function(t,r,e){var n="".concat(t,"/").concat(r);this.$fn[n]=e},
i.prototype.fn=function(t,r){var e="".concat(t,"/").concat(r);return this.$fn[e]},new i}();
