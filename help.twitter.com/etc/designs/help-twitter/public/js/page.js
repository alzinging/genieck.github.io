!function(e){function o(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r={};o.m=e,o.c=r,o.i=function(e){return e},o.d=function(e,r,s){o.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="/etc/designs/help-twitter/public/",o(o.s=7)}({"../content/jcr_root/apps/help-twitter/components/page/glossary-page/webpack/index.js":function(e,o,r){"use strict";r("../content/jcr_root/apps/help-twitter/components/page/glossary-page/webpack/index.scss")},"../content/jcr_root/apps/help-twitter/components/page/glossary-page/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/page/search-page/search-page-no-result-message/webpack/index.js":function(e,o,r){"use strict";r("../content/jcr_root/apps/help-twitter/components/page/search-page/search-page-no-result-message/webpack/index.scss")},"../content/jcr_root/apps/help-twitter/components/page/search-page/search-page-no-result-message/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/page/search-page/webpack/index.js":function(e,o,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var t=r("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=s(t),l=r("./node_modules/babel-runtime/helpers/createClass.js"),u=s(l),d=r("./source/aem.js");r("../content/jcr_root/apps/help-twitter/components/page/search-page/webpack/index.scss");var i=function(){function e(o,r){var s=this;(0,n.default)(this,e),this.element=o,this.searchScrollTop=o.querySelector(".search-page__scroll-top"),document.documentElement.addEventListener("se01.hasResults",function(e){return s.showResultTitles()}),document.documentElement.addEventListener("se01.hasNoResults",function(e){return s.showNoResultTitles()})}return(0,u.default)(e,[{key:"showResultTitles",value:function(){this.element.querySelector(".search-page__title.has-results").classList.remove("is-hidden"),this.searchScrollTop.classList.remove("visuallyhidden")}},{key:"showNoResultTitles",value:function(){this.element.querySelector(".search-page__title.has-no-results").classList.remove("is-hidden"),this.element.querySelector(".search-page__component.has-no-results").classList.remove("is-hidden"),this.element.querySelector(".search-page__cta-columns").classList.remove("is-hidden"),this.element.querySelector(".search-page__title.has-results").classList.add("is-hidden")}}]),e}();(0,d.registerComponent)(".search-page",i)},"../content/jcr_root/apps/help-twitter/components/page/search-page/webpack/index.scss":function(e,o){},"./node_modules/babel-runtime/core-js/array/from.js":function(e,o,r){e.exports={default:r("./node_modules/core-js/library/fn/array/from.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/define-property.js":function(e,o,r){e.exports={default:r("./node_modules/core-js/library/fn/object/define-property.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/classCallCheck.js":function(e,o,r){"use strict";o.__esModule=!0,o.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}},"./node_modules/babel-runtime/helpers/createClass.js":function(e,o,r){"use strict";o.__esModule=!0;var s=r("./node_modules/babel-runtime/core-js/object/define-property.js"),t=function(e){return e&&e.__esModule?e:{default:e}}(s);o.default=function(){function e(e,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,t.default)(e,s.key,s)}}return function(o,r,s){return r&&e(o.prototype,r),s&&e(o,s),o}}()},"./node_modules/babel-runtime/helpers/toConsumableArray.js":function(e,o,r){"use strict";o.__esModule=!0;var s=r("./node_modules/babel-runtime/core-js/array/from.js"),t=function(e){return e&&e.__esModule?e:{default:e}}(s);o.default=function(e){if(Array.isArray(e)){for(var o=0,r=Array(e.length);o<e.length;o++)r[o]=e[o];return r}return(0,t.default)(e)}},"./node_modules/core-js/library/fn/array/from.js":function(e,o,r){r("./node_modules/core-js/library/modules/es6.string.iterator.js"),r("./node_modules/core-js/library/modules/es6.array.from.js"),e.exports=r("./node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/core-js/library/fn/object/define-property.js":function(e,o,r){r("./node_modules/core-js/library/modules/es6.object.define-property.js");var s=r("./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,o,r){return s.defineProperty(e,o,r)}},"./node_modules/core-js/library/modules/_a-function.js":function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_an-object.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-includes.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_to-iobject.js"),t=r("./node_modules/core-js/library/modules/_to-length.js"),n=r("./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(o,r,l){var u,d=s(o),i=t(d.length),c=n(l,i);if(e&&r!=r){for(;i>c;)if((u=d[c++])!=u)return!0}else for(;i>c;c++)if((e||c in d)&&d[c]===r)return e||c||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_classof.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_cof.js"),t=r("./node_modules/core-js/library/modules/_wks.js")("toStringTag"),n="Arguments"==s(function(){return arguments}()),l=function(e,o){try{return e[o]}catch(e){}};e.exports=function(e){var o,r,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=l(o=Object(e),t))?r:n?s(o):"Object"==(u=s(o))&&"function"==typeof o.callee?"Arguments":u}},"./node_modules/core-js/library/modules/_cof.js":function(e,o){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_core.js":function(e,o){var r=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},"./node_modules/core-js/library/modules/_create-property.js":function(e,o,r){"use strict";var s=r("./node_modules/core-js/library/modules/_object-dp.js"),t=r("./node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,o,r){o in e?s.f(e,o,t(0,r)):e[o]=r}},"./node_modules/core-js/library/modules/_ctx.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,o,r){if(s(e),void 0===o)return e;switch(r){case 1:return function(r){return e.call(o,r)};case 2:return function(r,s){return e.call(o,r,s)};case 3:return function(r,s,t){return e.call(o,r,s,t)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":function(e,o,r){e.exports=!r("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_is-object.js"),t=r("./node_modules/core-js/library/modules/_global.js").document,n=s(t)&&s(t.createElement);e.exports=function(e){return n?t.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_export.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_global.js"),t=r("./node_modules/core-js/library/modules/_core.js"),n=r("./node_modules/core-js/library/modules/_ctx.js"),l=r("./node_modules/core-js/library/modules/_hide.js"),u=r("./node_modules/core-js/library/modules/_has.js"),d=function(e,o,r){var i,c,a,m=e&d.F,j=e&d.G,_=e&d.S,f=e&d.P,p=e&d.B,y=e&d.W,b=j?t:t[o]||(t[o]={}),h=b.prototype,v=j?s:_?s[o]:(s[o]||{}).prototype;j&&(r=o);for(i in r)(c=!m&&v&&void 0!==v[i])&&u(b,i)||(a=c?v[i]:r[i],b[i]=j&&"function"!=typeof v[i]?r[i]:p&&c?n(a,s):y&&v[i]==a?function(e){var o=function(o,r,s){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,r)}return new e(o,r,s)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(a):f&&"function"==typeof a?n(Function.call,a):a,f&&((b.virtual||(b.virtual={}))[i]=a,e&d.R&&h&&!h[i]&&l(h,i,a)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,e.exports=d},"./node_modules/core-js/library/modules/_fails.js":function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_global.js":function(e,o){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},"./node_modules/core-js/library/modules/_has.js":function(e,o){var r={}.hasOwnProperty;e.exports=function(e,o){return r.call(e,o)}},"./node_modules/core-js/library/modules/_hide.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_object-dp.js"),t=r("./node_modules/core-js/library/modules/_property-desc.js");e.exports=r("./node_modules/core-js/library/modules/_descriptors.js")?function(e,o,r){return s.f(e,o,t(1,r))}:function(e,o,r){return e[o]=r,e}},"./node_modules/core-js/library/modules/_html.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":function(e,o,r){e.exports=!r("./node_modules/core-js/library/modules/_descriptors.js")&&!r("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(r("./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_iobject.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_iterators.js"),t=r("./node_modules/core-js/library/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||n[t]===e)}},"./node_modules/core-js/library/modules/_is-object.js":function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,o,r,t){try{return t?o(s(r)[0],r[1]):o(r)}catch(o){var n=e.return;throw void 0!==n&&s(n.call(e)),o}}},"./node_modules/core-js/library/modules/_iter-create.js":function(e,o,r){"use strict";var s=r("./node_modules/core-js/library/modules/_object-create.js"),t=r("./node_modules/core-js/library/modules/_property-desc.js"),n=r("./node_modules/core-js/library/modules/_set-to-string-tag.js"),l={};r("./node_modules/core-js/library/modules/_hide.js")(l,r("./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,r){e.prototype=s(l,{next:t(1,r)}),n(e,o+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":function(e,o,r){"use strict";var s=r("./node_modules/core-js/library/modules/_library.js"),t=r("./node_modules/core-js/library/modules/_export.js"),n=r("./node_modules/core-js/library/modules/_redefine.js"),l=r("./node_modules/core-js/library/modules/_hide.js"),u=r("./node_modules/core-js/library/modules/_iterators.js"),d=r("./node_modules/core-js/library/modules/_iter-create.js"),i=r("./node_modules/core-js/library/modules/_set-to-string-tag.js"),c=r("./node_modules/core-js/library/modules/_object-gpo.js"),a=r("./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),j=function(){return this};e.exports=function(e,o,r,_,f,p,y){d(r,o,_);var b,h,v,g=function(e){if(!m&&e in O)return O[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},x=o+" Iterator",w="values"==f,k=!1,O=e.prototype,S=O[a]||O["@@iterator"]||f&&O[f],M=S||g(f),A=f?w?g("entries"):M:void 0,P="Array"==o?O.entries||S:S;if(P&&(v=c(P.call(new e)))!==Object.prototype&&v.next&&(i(v,x,!0),s||"function"==typeof v[a]||l(v,a,j)),w&&S&&"values"!==S.name&&(k=!0,M=function(){return S.call(this)}),s&&!y||!m&&!k&&O[a]||l(O,a,M),u[o]=M,u[x]=j,f)if(b={values:w?M:g("values"),keys:p?M:g("keys"),entries:A},y)for(h in b)h in O||n(O,h,b[h]);else t(t.P+t.F*(m||k),o,b);return b}},"./node_modules/core-js/library/modules/_iter-detect.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_wks.js")("iterator"),t=!1;try{var n=[7][s]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!t)return!1;var r=!1;try{var n=[7],l=n[s]();l.next=function(){return{done:r=!0}},n[s]=function(){return l},e(n)}catch(e){}return r}},"./node_modules/core-js/library/modules/_iterators.js":function(e,o){e.exports={}},"./node_modules/core-js/library/modules/_library.js":function(e,o){e.exports=!0},"./node_modules/core-js/library/modules/_object-create.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_an-object.js"),t=r("./node_modules/core-js/library/modules/_object-dps.js"),n=r("./node_modules/core-js/library/modules/_enum-bug-keys.js"),l=r("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),u=function(){},d=function(){var e,o=r("./node_modules/core-js/library/modules/_dom-create.js")("iframe"),s=n.length;for(o.style.display="none",r("./node_modules/core-js/library/modules/_html.js").appendChild(o),o.src="javascript:",e=o.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),d=e.F;s--;)delete d.prototype[n[s]];return d()};e.exports=Object.create||function(e,o){var r;return null!==e?(u.prototype=s(e),r=new u,u.prototype=null,r[l]=e):r=d(),void 0===o?r:t(r,o)}},"./node_modules/core-js/library/modules/_object-dp.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_an-object.js"),t=r("./node_modules/core-js/library/modules/_ie8-dom-define.js"),n=r("./node_modules/core-js/library/modules/_to-primitive.js"),l=Object.defineProperty;o.f=r("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,o,r){if(s(e),o=n(o,!0),s(r),t)try{return l(e,o,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[o]=r.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_object-dp.js"),t=r("./node_modules/core-js/library/modules/_an-object.js"),n=r("./node_modules/core-js/library/modules/_object-keys.js");e.exports=r("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,o){t(e);for(var r,l=n(o),u=l.length,d=0;u>d;)s.f(e,r=l[d++],o[r]);return e}},"./node_modules/core-js/library/modules/_object-gpo.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_has.js"),t=r("./node_modules/core-js/library/modules/_to-object.js"),n=r("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=t(e),s(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_has.js"),t=r("./node_modules/core-js/library/modules/_to-iobject.js"),n=r("./node_modules/core-js/library/modules/_array-includes.js")(!1),l=r("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var r,u=t(e),d=0,i=[];for(r in u)r!=l&&s(u,r)&&i.push(r);for(;o.length>d;)s(u,r=o[d++])&&(~n(i,r)||i.push(r));return i}},"./node_modules/core-js/library/modules/_object-keys.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_object-keys-internal.js"),t=r("./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return s(e,t)}},"./node_modules/core-js/library/modules/_property-desc.js":function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/library/modules/_redefine.js":function(e,o,r){e.exports=r("./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-to-string-tag.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_object-dp.js").f,t=r("./node_modules/core-js/library/modules/_has.js"),n=r("./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,o,r){e&&!t(e=r?e:e.prototype,n)&&s(e,n,{configurable:!0,value:o})}},"./node_modules/core-js/library/modules/_shared-key.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_shared.js")("keys"),t=r("./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return s[e]||(s[e]=t(e))}},"./node_modules/core-js/library/modules/_shared.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_core.js"),t=r("./node_modules/core-js/library/modules/_global.js"),n=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(e.exports=function(e,o){return n[e]||(n[e]=void 0!==o?o:{})})("versions",[]).push({version:s.version,mode:r("./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_string-at.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_to-integer.js"),t=r("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(o,r){var n,l,u=String(t(o)),d=s(r),i=u.length;return d<0||d>=i?e?"":void 0:(n=u.charCodeAt(d),n<55296||n>56319||d+1===i||(l=u.charCodeAt(d+1))<56320||l>57343?e?u.charAt(d):n:e?u.slice(d,d+2):l-56320+(n-55296<<10)+65536)}}},"./node_modules/core-js/library/modules/_to-absolute-index.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_to-integer.js"),t=Math.max,n=Math.min;e.exports=function(e,o){return e=s(e),e<0?t(e+o,0):n(e,o)}},"./node_modules/core-js/library/modules/_to-integer.js":function(e,o){var r=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:r)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_iobject.js"),t=r("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return s(t(e))}},"./node_modules/core-js/library/modules/_to-length.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_to-integer.js"),t=Math.min;e.exports=function(e){return e>0?t(s(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(s(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!s(e))return e;var r,t;if(o&&"function"==typeof(r=e.toString)&&!s(t=r.call(e)))return t;if("function"==typeof(r=e.valueOf)&&!s(t=r.call(e)))return t;if(!o&&"function"==typeof(r=e.toString)&&!s(t=r.call(e)))return t;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":function(e,o){var r=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+s).toString(36))}},"./node_modules/core-js/library/modules/_wks.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_shared.js")("wks"),t=r("./node_modules/core-js/library/modules/_uid.js"),n=r("./node_modules/core-js/library/modules/_global.js").Symbol,l="function"==typeof n;(e.exports=function(e){return s[e]||(s[e]=l&&n[e]||(l?n:t)("Symbol."+e))}).store=s},"./node_modules/core-js/library/modules/core.get-iterator-method.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_classof.js"),t=r("./node_modules/core-js/library/modules/_wks.js")("iterator"),n=r("./node_modules/core-js/library/modules/_iterators.js");e.exports=r("./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[t]||e["@@iterator"]||n[s(e)]}},"./node_modules/core-js/library/modules/es6.array.from.js":function(e,o,r){"use strict";var s=r("./node_modules/core-js/library/modules/_ctx.js"),t=r("./node_modules/core-js/library/modules/_export.js"),n=r("./node_modules/core-js/library/modules/_to-object.js"),l=r("./node_modules/core-js/library/modules/_iter-call.js"),u=r("./node_modules/core-js/library/modules/_is-array-iter.js"),d=r("./node_modules/core-js/library/modules/_to-length.js"),i=r("./node_modules/core-js/library/modules/_create-property.js"),c=r("./node_modules/core-js/library/modules/core.get-iterator-method.js");t(t.S+t.F*!r("./node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var o,r,t,a,m=n(e),j="function"==typeof this?this:Array,_=arguments.length,f=_>1?arguments[1]:void 0,p=void 0!==f,y=0,b=c(m);if(p&&(f=s(f,_>2?arguments[2]:void 0,2)),void 0==b||j==Array&&u(b))for(o=d(m.length),r=new j(o);o>y;y++)i(r,y,p?f(m[y],y):m[y]);else for(a=b.call(m),r=new j;!(t=a.next()).done;y++)i(r,y,p?l(a,f,[t.value,y],!0):t.value);return r.length=y,r}})},"./node_modules/core-js/library/modules/es6.object.define-property.js":function(e,o,r){var s=r("./node_modules/core-js/library/modules/_export.js");s(s.S+s.F*!r("./node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperty:r("./node_modules/core-js/library/modules/_object-dp.js").f})},"./node_modules/core-js/library/modules/es6.string.iterator.js":function(e,o,r){"use strict";var s=r("./node_modules/core-js/library/modules/_string-at.js")(!0);r("./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,r=this._i;return r>=o.length?{value:void 0,done:!0}:(e=s(o,r),this._i+=e.length,{value:e,done:!1})})},"./source/aem.js":function(e,o,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function t(){var e=c.id;return c.id++,e}function n(e,o){[].concat((0,u.default)(document.querySelectorAll(e))).forEach(function(e){a.push(new o(e,e.dataset))})}Object.defineProperty(o,"__esModule",{value:!0}),o.Component=o.components=void 0;var l=r("./node_modules/babel-runtime/helpers/toConsumableArray.js"),u=s(l),d=r("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=s(d);o.registerComponent=n;var c={id:0},a=o.components=[];o.Component=function e(){(0,i.default)(this,e),this.componentId=t()}},7:function(e,o,r){r("../content/jcr_root/apps/help-twitter/components/page/glossary-page/webpack/index.js"),r("../content/jcr_root/apps/help-twitter/components/page/search-page/webpack/index.js"),e.exports=r("../content/jcr_root/apps/help-twitter/components/page/search-page/search-page-no-result-message/webpack/index.js")}});