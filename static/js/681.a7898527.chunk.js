/*! For license information please see 681.a7898527.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{792:function(t,e,r){r.d(e,{Bt:function(){return y},Mc:function(){return v},wr:function(){return l},xj:function(){return p},y:function(){return d}});var n,o,a,i,c,u=r(861),s=r(243);function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new G(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function w(){}function m(){}var x={};s(x,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==r&&n.call(L,i)&&(x=L);var k=m.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:w,configurable:!0}),w.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(k),s(k,u,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h="66d85cdc98fdcbda260546142accdb60",l=function(){return(n=n||(0,u.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/week?api_key=".concat(h));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},p=function(t){return(o=o||(0,u.Z)(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?api_key=".concat(h,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},v=function(t){return(a=a||(0,u.Z)(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(h,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},y=function(t){return(i=i||(0,u.Z)(f().mark((function t(e){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(h,"&language=en-US&page=1"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)},d=function(t){return(c=c||(0,u.Z)(f().mark((function t(e){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(h,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},681:function(t,e,r){r.r(e),r.d(e,{Reviews:function(){return u}});var n=r(439),o=r(791),a=r(792),i=r(689),c=r(184),u=function(){var t=(0,o.useState)([]),e=(0,n.Z)(t,2),r=e[0],u=e[1],s=(0,i.UO)().movieId;if(console.log(s),(0,o.useEffect)((function(){(0,a.Bt)(s).then(u)}),[s]),r)return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:(0,c.jsx)("p",{children:"There is no reviews yet"})||r.map((function(t){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:[" Author: ",t.author]}),(0,c.jsx)("span",{children:t.content})]},t.id)}))})})}}}]);
//# sourceMappingURL=681.a7898527.chunk.js.map