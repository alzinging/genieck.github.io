(window.webpackJsonp=window.webpackJsonp||[]).push([["category-stream~commentsIframe~experiments~featuredPermalinkPage~follow-controls~footer~hamburger-me~97ed8215"],{UWdU:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ButtonWrapper=e.ButtonInner=e.Label=e.getHeight=void 0;var n,o=u(t("mXGw")),i=u(t("Bgts")),a=u(t("UutA")),c=t("PjqS"),s=t("08Bb"),l=(n=t("x+Pm"))&&n.__esModule?n:{default:n};function u(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(r,t):{};n.get||n.set?Object.defineProperty(e,t,n):e[t]=r[t]}return e.default=r,e}function f(){return(f=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function d(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}function p(){var r=function(r,e){e||(e=r.slice(0));return Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}(["\n\t\t","\n\t"]);return p=function(){return r},r}var h=function(r){var e=r.sort;return r.small?"34px":"share"===e?"28px":"42px"};e.getHeight=h;var m=function(r){var e=r.isDisabled,t=r.sort,n=r.variant,o=r.weight;return"secondary"===o&&e?"midgray":"secondary"===o&&n?n:"social"===t?"gray":"secondary"===o?"primary":"tertiary"===o?"gray":void 0},g=function(r){var e=r.isDisabled,t=r.sort,n=r.variant,o=r.weight;return"social"===t?"white":"secondary"===o&&e?"midgray":"primary"===o&&"amazon"===n?"black":"secondary"===o&&n?n:"secondary"===o?"primary":"tertiary"===o?"darkgray":"tertiary-dark"===o?"darkgray":"white"},b=function(r){var e=r.isDisabled,t=r.sort,n=r.variant,o=r.weight;return"primary"===o&&e?"lightgray":"primary"===o&&n?n:"primary"===o?o:"social"===t&&n?n:"white"},y=a.default.span.withConfig({componentId:"j48i5d-0"})(["display:flex;+ svg,+ ","{margin-left:4px;}"],i.IconWrapper);e.Label=y;var w=a.default.div.withConfig({componentId:"j48i5d-1"})(["align-items:center;display:flex;justify-content:center;width:100%;white-space:nowrap;pointer-events:none;svg{"," + span{margin-left:4px;}}","{+ span{margin-left:4px;}}"],function(r){return"share"===r.sort&&(0,a.css)(["svg{width:14px;height:14px;opacity:1;margin-top:-3px;}"])},i.IconWrapper);e.ButtonInner=w;var v=a.default.button.withConfig({componentId:"j48i5d-2"})(["width:",";height:",";padding:",";border:transparent 1px solid;border-radius:",";border-color:",";color:",";font-size:",";text-align:",";line-height:",";background-color:",";transition:",";",";",";"," > svg{margin-bottom:2px;"," "," "," "," "," ","}","{margin-bottom:2px;}&:hover,&:active,&:focus{color:",";border-color:",";background-color:",";"," "," "," > svg{"," "," "," ","}}",""],function(r){return t=(e=r).fullwidth,n=e.halfwidth,o=e.sort,i=e.small,t?"100%":n?"50%":"circle"===o?i?"34px":"42px":"social"===o?"260px":"auto";var e,t,n,o,i},function(r){return h(r)},function(r){return t=(e=r).sort,n=e.size,"circle"===t?"0":"share"===t?"0 16px 0 14px":"small"===n?"0 1.5rem":"0 2rem";var e,t,n},function(r){return t=(e=r).small,n=e.sort,o=e.fullwidth,i=e.halfwidth,t?"34px":o?"0":i?"0":"circle"===n?"50%":"share"===n?"14px":"21px";var e,t,n,o,i},function(r){return"primary"===r.weight||"social"===r.sort?"transparent":r.theme.color[m(r)]},function(r){return r.theme.color[g(r)]},function(r){return r.small||"share"===r.sort?"14px":"1rem"},function(r){return"social"===r.sort?"left":"center"},function(r){return t=(e=r).small,n=e.sort,t?"34px":"share"===n?"28px":"42px";var e,t,n},function(r){return r.theme.color[b(r)]},function(r){return"share"===r.sort?"none":"background-color 0.2s ease-out, border-color 0.2s ease-out, color 0.2s ease-out"},function(r){return r.isDisabled&&"cursor: not-allowed;"},function(r){return r.margin&&"margin: ".concat(r.margin)},w,function(r){return"primary"===r.weight&&"primary"===r.variant&&"stroke: ".concat(r.theme.color[g(r)],";")},function(r){return"primary"===r.weight&&"circle"!==r.sort&&r.isDisabled&&"stroke: ".concat(r.theme.color[g(r)],";")},function(r){return"secondary"===r.weight&&r.isDisabled&&"stroke: ".concat(r.theme.color[g(r)],";")},function(r){return"tertiary"===r.weight&&"stroke: ".concat(r.theme.color[g(r)],";")},function(r){return"social"===r.sort&&"width: 28px; text-align: left; fill: ".concat(r.theme.color[g(r)],";")},function(r){return"share"===r.sort&&"width: 24px; text-align: left;"},i.IconWrapper,function(r){return(0,c.darken)("primary"===r.weight||r.isDisabled?0:.2,r.theme.color[g(r)])},function(r){return"primary"===r.weight||"tertiary-dark"===r.weight||"social"===r.sort?"transparent":(0,c.darken)(r.isDisabled?0:.2,r.theme.color[m(r)])},function(r){return(0,c.darken)("primary"===r.weight&&!r.isDisabled||"social"===r.sort?.1:0,r.theme.color[b(r)])},function(r){return"share"===r.sort&&"background-color: ".concat(r.theme.color[b(r)],";")},function(r){return r.active&&(0,a.css)(["+ ","{border-left:1px solid ",";}"],v,(0,c.darken)(.1,r.theme.color.primary))},w,function(r){return t=(e=r).sort,n=e.variant,!("circle"===t&&-1!==["facebook","twitter","instagram","youtube","rss"].indexOf(n))&&(0,a.css)(["stroke:",";"],(0,c.darken)("primary"===r.weight||r.isDisabled?0:.1,r.theme.color[g(r)]));var e,t,n},function(r){return"circle"===r.sort&&"secondary"===r.weight&&(0,a.css)(["fill:",";stroke:none;"],function(r){return(0,c.darken)(.1,r.theme.color.primary)})},function(r){return"social"===r.sort&&(0,a.css)(['stroke:none;&[name="burner"]{stroke:',";}"],function(r){return r.theme.color.black})},function(r){return"share"===r.sort&&"stroke: none;"},l.default.mediumDown(p(),function(r){return"share"===r.sort&&(0,a.css)(["width:120px;padding:0;"])}));e.ButtonWrapper=v;var x=function(r){var e=r.disabled,t=r.icon,n=r.label,i=void 0===n?"":n,a=r.labelPosition,c=void 0===a?"before":a,l=r.weight,u=void 0===l?"primary":l,p=d(r,["disabled","icon","label","labelPosition","weight"]);return o.createElement(s.EnsureDefaultTheme,null,o.createElement(v,f({weight:u,isDisabled:e,disabled:e},p),o.createElement(w,null,"after"===c&&t,i&&o.createElement(y,null,i),"before"===c&&t)))};e.default=x}}]);