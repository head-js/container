/* @head.js/container-snippet 0.0.1 */
this.head=this.head||{},this.head.container=function(){"use strict";function t(t){var i=t.id,n=t.desc;return this.id=i,
this.desc=n,this.fns={},this}function i(){this.$={}}return t.prototype.script=function(t,i){return this.fns[t]=i,this},
t.prototype.fn=function(t){return this.fns[t]},i.prototype.create=function(i){var n=new t(i);return this.$[i.id]=n,n},
i.prototype.id=function(t){return this.$[t]},i.prototype.script=function(t,i,n){this.id(t).script(i,n)},
i.prototype.fn=function(t,i){return this.id(t).fn(i)},new i}();
