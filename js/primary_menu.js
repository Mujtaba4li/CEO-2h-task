

jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
    m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
    ;
    // Required for Meteor package, the use of window prevents export by Meteor
    (function(window){
      if(window.Package){
        Materialize = {};
      } else {
        window.Materialize = {};
      }
    })(window);
    
    
    
    // t: current time, b: begInnIng value, c: change In value, d: duration
    jQuery.easing['jswing'] = jQuery.easing['swing'];
    
    jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });
    
    /*
     *
     * TERMS OF USE - EASING EQUATIONS
     *
     * Open source under the BSD License.
     *
     * Copyright © 2001 Robert Penner
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */
    (function ($) {
    
      // Add posibility to scroll to selected option
      // usefull for select for example
      $.fn.scrollTo = function(elem) {
        $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
        return this;
      };
    
      $.fn.dropdown = function (option) {
        var defaults = {
          inDuration: 300,
          outDuration: 225,
          constrain_width: true, // Constrains width of dropdown to the activator
          hover: false,
          gutter: 0, // Spacing from edge
          belowOrigin: false,
          alignment: 'left'
        };
    
        this.each(function(){
        var origin = $(this);
        var options = $.extend({}, defaults, option);
        var isFocused = false;
    
        // Dropdown menu
        var activates = $("#"+ origin.attr('data-activates'));
    
        function updateOptions() {
          if (origin.data('induration') !== undefined)
            options.inDuration = origin.data('inDuration');
          if (origin.data('outduration') !== undefined)
            options.outDuration = origin.data('outDuration');
          if (origin.data('constrainwidth') !== undefined)
            options.constrain_width = origin.data('constrainwidth');
          if (origin.data('hover') !== undefined)
            options.hover = origin.data('hover');
          if (origin.data('gutter') !== undefined)
            options.gutter = origin.data('gutter');
          if (origin.data('beloworigin') !== undefined)
            options.belowOrigin = origin.data('beloworigin');
          if (origin.data('alignment') !== undefined)
            options.alignment = origin.data('alignment');
        }
    
        updateOptions();
    
        // Attach dropdown to its activator
        origin.after(activates);
    
        /*
          Helper function to position and resize dropdown.
          Used in hover and click handler.
        */
        function placeDropdown(eventType) {
          // Check for simultaneous focus and click events.
          if (eventType === 'focus') {
            isFocused = true;
          }
    
          // Check html data attributes
          updateOptions();
    
          // Set Dropdown state
          activates.addClass('active');
          origin.addClass('active');
    
          // Constrain width
          if (options.constrain_width === true) {
            activates.css('width', origin.outerWidth());
    
          } else {
            activates.css('white-space', 'nowrap');
          }
    
          // Offscreen detection
          var windowHeight = window.innerHeight;
          var originHeight = origin.innerHeight();
          var offsetLeft = origin.offset().left;
          var offsetTop = origin.offset().top - $(window).scrollTop();
          var currAlignment = options.alignment;
          var activatesLeft, gutterSpacing;
    
          // Below Origin
          var verticalOffset = 0;
          if (options.belowOrigin === true) {
            verticalOffset = originHeight;
          }
    
          if (offsetLeft + activates.innerWidth() > $(window).width()) {
            // Dropdown goes past screen on right, force right alignment
            currAlignment = 'right';
    
          } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
            // Dropdown goes past screen on left, force left alignment
            currAlignment = 'left';
          }
          // Vertical bottom offscreen detection
          if (offsetTop + activates.innerHeight() > windowHeight) {
            // If going upwards still goes offscreen, just crop height of dropdown.
            if (offsetTop + originHeight - activates.innerHeight() < 0) {
              var adjustedHeight = windowHeight - offsetTop - verticalOffset;
              activates.css('max-height', adjustedHeight);
            } else {
              // Flow upwards.
              if (!verticalOffset) {
                verticalOffset += originHeight;
              }
              verticalOffset -= activates.innerHeight();
            }
          }
    
          // Handle edge alignment
          if (currAlignment === 'left') {
            gutterSpacing = options.gutter;
            leftPosition = origin.position().left + gutterSpacing;
          }
          else if (currAlignment === 'right') {
            var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
            gutterSpacing = -options.gutter;
            leftPosition =  offsetRight + gutterSpacing;
          }
    
          // Position dropdown
          activates.css({
            position: 'absolute',
            top: origin.position().top + verticalOffset,
            left: leftPosition
          });
    
    
          // Show dropdown
          activates.stop(true, true).css('opacity', 0)
            .slideDown({
            queue: false,
            duration: options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
            .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
        }
    
        function hideDropdown() {
          // Check for simultaneous focus and click events.
          isFocused = false;
          activates.fadeOut(options.outDuration);
          activates.removeClass('active');
          origin.removeClass('active');
          setTimeout(function() { activates.css('max-height', ''); }, options.outDuration);
        }
    
        // Hover
        if (options.hover) {
          var open = false;
          origin.unbind('click.' + origin.attr('id'));
          // Hover handler to show dropdown
          origin.on('mouseenter', function(e){ // Mouse over
            if (open === false) {
              placeDropdown();
              open = true;
            }
          });
          origin.on('mouseleave', function(e){
            // If hover on origin then to something other than dropdown content, then close
            var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
            if(!$(toEl).closest('.dropdown-content').is(activates)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });
    
          activates.on('mouseleave', function(e){ // Mouse out
            var toEl = e.toElement || e.relatedTarget;
            if(!$(toEl).closest('.dropdown-button').is(origin)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });
    
        // Click
        } else {
          // Click handler to show dropdown
          origin.unbind('click.' + origin.attr('id'));
          origin.bind('click.'+origin.attr('id'), function(e){
            if (!isFocused) {
              if ( origin[0] == e.currentTarget &&
                   !origin.hasClass('active') &&
                   ($(e.target).closest('.dropdown-content').length === 0)) {
                e.preventDefault(); // Prevents button click from moving window
                placeDropdown('click');
              }
              // If origin is clicked and menu is open, close menu
              else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
              }
              // If menu open, add click close handler to document
              if (activates.hasClass('active')) {
                $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {
                  if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {
                    hideDropdown();
                    $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
                  }
                });
              }
            }
          });
    
        } // End else
    
        // Listen to open and close event - useful for select component
        origin.on('open', function(e, eventType) {
          placeDropdown(eventType);
        });
        origin.on('close', hideDropdown);
    
    
       });
      }; // End dropdown plugin
    
      $(document).ready(function(){
        $('.dropdown-button').dropdown();
      });
    }( jQuery ));;
    (function ($) {
      $(document).ready(function() {
    
        // Function to update labels of text fields
        Materialize.updateTextFields = function() {
          var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
          $(input_selector).each(function(index, element) {
            if ($(element).val().length > 0 || element.autofocus ||$(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
              $(this).siblings('label, i').addClass('active');
            }
            else {
              $(this).siblings('label, i').removeClass('active');
            }
          });
        };
    
        // Text based inputs
        var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
    
        // Add active if form auto complete
        $(document).on('change', input_selector, function () {
          if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
            $(this).siblings('label').addClass('active');
          }
          validate_field($(this));
        });
    
        // Add active if input element has been pre-populated on document ready
        $(document).ready(function() {
          Materialize.updateTextFields();
        });
    
        // HTML DOM FORM RESET handling
        $(document).on('reset', function(e) {
          var formReset = $(e.target);
          if (formReset.is('form')) {
            formReset.find(input_selector).removeClass('valid').removeClass('invalid');
            formReset.find(input_selector).each(function () {
              if ($(this).attr('value') === '') {
                $(this).siblings('label, i').removeClass('active');
              }
            });
    
            // Reset select
            formReset.find('select.initialized').each(function () {
              var reset_text = formReset.find('option[selected]').text();
              formReset.siblings('input.select-dropdown').val(reset_text);
            });
          }
        });
    
        // Add active when element has focus
        $(document).on('focus', input_selector, function () {
          $(this).siblings('label, i').addClass('active');
        });
    
        $(document).on('blur', input_selector, function () {
          var $inputElement = $(this);
          if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
            $inputElement.siblings('label, i').removeClass('active');
          }
    
          if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
            $inputElement.siblings('i').removeClass('active');
          }
          validate_field($inputElement);
        });
    
        window.validate_field = function(object) {
          var hasLength = object.attr('length') !== undefined;
          var lenAttr = parseInt(object.attr('length'));
          var len = object.val().length;
    
          if (object.val().length === 0 && object[0].validity.badInput === false) {
            if (object.hasClass('validate')) {
              object.removeClass('valid');
              object.removeClass('invalid');
            }
          }
          else {
            if (object.hasClass('validate')) {
              // Check for character counter attributes
              if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
                object.removeClass('invalid');
                object.addClass('valid');
              }
              else {
                object.removeClass('valid');
                object.addClass('invalid');
              }
            }
          }
        };
    
    
        // Textarea Auto Resize
        var hiddenDiv = $('.hiddendiv').first();
        if (!hiddenDiv.length) {
          hiddenDiv = $('<div class="hiddendiv common"></div>');
          $('body').append(hiddenDiv);
        }
        var text_area_selector = '.materialize-textarea';
    
        function textareaAutoResize($textarea) {
          // Set font properties of hiddenDiv
    
          var fontFamily = $textarea.css('font-family');
          var fontSize = $textarea.css('font-size');
    
          if (fontSize) { hiddenDiv.css('font-size', fontSize); }
          if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
    
          if ($textarea.attr('wrap') === "off") {
            hiddenDiv.css('overflow-wrap', "normal")
                     .css('white-space', "pre");
          }
    
          hiddenDiv.text($textarea.val() + '\n');
          var content = hiddenDiv.html().replace(/\n/g, '<br>');
          hiddenDiv.html(content);
    
    
          // When textarea is hidden, width goes crazy.
          // Approximate with half of window size
    
          if ($textarea.is(':visible')) {
            hiddenDiv.css('width', $textarea.width());
          }
          else {
            hiddenDiv.css('width', $(window).width()/2);
          }
    
          $textarea.css('height', hiddenDiv.height());
        }
    
        $(text_area_selector).each(function () {
          var $textarea = $(this);
          if ($textarea.val().length) {
            textareaAutoResize($textarea);
          }
        });
    
        $('body').on('keyup keydown autoresize', text_area_selector, function () {
          textareaAutoResize($(this));
        });
    
        // File Input Path
        $(document).on('change', '.file-field input[type="file"]', function () {
          var file_field = $(this).closest('.file-field');
          var path_input = file_field.find('input.file-path');
          var files      = $(this)[0].files;
          var file_names = [];
          for (var i = 0; i < files.length; i++) {
            file_names.push(files[i].name);
          }
          path_input.val(file_names.join(", "));
          path_input.trigger('change');
        });
    
        /****************
        *  Range Input  *
        ****************/
    
        var range_type = 'input[type=range]';
        var range_mousedown = false;
        var left;
    
        $(range_type).each(function () {
          var thumb = $('<span class="thumb"><span class="value"></span></span>');
          $(this).after(thumb);
        });
    
        var range_wrapper = '.range-field';
        $(document).on('change', range_type, function(e) {
          var thumb = $(this).siblings('.thumb');
          thumb.find('.value').html($(this).val());
        });
    
        $(document).on('input mousedown touchstart', range_type, function(e) {
          var thumb = $(this).siblings('.thumb');
          var width = $(this).outerWidth();
    
          // If thumb indicator does not exist yet, create it
          if (thumb.length <= 0) {
            thumb = $('<span class="thumb"><span class="value"></span></span>');
            $(this).after(thumb);
          }
    
          // Set indicator value
          thumb.find('.value').html($(this).val());
    
          range_mousedown = true;
          $(this).addClass('active');
    
          if (!thumb.hasClass('active')) {
            thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
          }
    
          if (e.type !== 'input') {
            if(e.pageX === undefined || e.pageX === null){//mobile
               left = e.originalEvent.touches[0].pageX - $(this).offset().left;
            }
            else{ // desktop
               left = e.pageX - $(this).offset().left;
            }
            if (left < 0) {
              left = 0;
            }
            else if (left > width) {
              left = width;
            }
            thumb.addClass('active').css('left', left);
          }
    
          thumb.find('.value').html($(this).val());
        });
    
        $(document).on('mouseup touchend', range_wrapper, function() {
          range_mousedown = false;
          $(this).removeClass('active');
        });
    
        $(document).on('mousemove touchmove', range_wrapper, function(e) {
          var thumb = $(this).children('.thumb');
          var left;
          if (range_mousedown) {
            if (!thumb.hasClass('active')) {
              thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
            }
            if (e.pageX === undefined || e.pageX === null) { //mobile
              left = e.originalEvent.touches[0].pageX - $(this).offset().left;
            }
            else{ // desktop
              left = e.pageX - $(this).offset().left;
            }
            var width = $(this).outerWidth();
    
            if (left < 0) {
              left = 0;
            }
            else if (left > width) {
              left = width;
            }
            thumb.addClass('active').css('left', left);
            thumb.find('.value').html(thumb.siblings(range_type).val());
          }
        });
    
        $(document).on('mouseout touchleave', range_wrapper, function() {
          if (!range_mousedown) {
    
            var thumb = $(this).children('.thumb');
    
            if (thumb.hasClass('active')) {
              thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });
            }
            thumb.removeClass('active');
          }
        });
      }); // End of $(document).ready
    
      /*******************
       *  Select Plugin  *
       ******************/
      $.fn.material_select = function (callback) {
        $(this).each(function(){
          var $select = $(this);
    
          if ($select.hasClass('browser-default')) {
            return; // Continue to next (return false breaks out of entire loop)
          }
    
          var multiple = $select.attr('multiple') ? true : false,
              lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt
    
          if (lastID) {
            $select.parent().find('span.caret').remove();
            $select.parent().find('input').remove();
    
            $select.unwrap();
            $('ul#select-options-'+lastID).remove();
          }
    
          // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
          if(callback === 'destroy') {
            $select.data('select-id', null).removeClass('initialized');
            return;
          }
    
          var uniqueID = Materialize.guid();
          $select.data('select-id', uniqueID);
          var wrapper = $('<div class="select-wrapper"></div>');
          wrapper.addClass($select.attr('class'));
          var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
              selectChildren = $select.children('option, optgroup'),
              valuesSelected = [],
              optionsHover = false;
    
          var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";
    
          // Function that renders and appends the option taking into
          // account type and possible image icon.
          var appendOptionWithIcon = function(select, option, type) {
            // Add disabled attr if disabled
            var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
    
            // add icons
            var icon_url = option.data('icon');
            var classes = option.attr('class');
            if (!!icon_url) {
              var classString = '';
              if (!!classes) classString = ' class="' + classes + '"';
    
              // Check for multiple type.
              if (type === 'multiple') {
                options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
              } else {
                options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
              }
              return true;
            }
    
            // Check for multiple type.
            if (type === 'multiple') {
              options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
            } else {
              options.append($('<li class="' + disabledClass + '"><span>' + option.html() + '</span></li>'));
            }
          };
    
          /* Create dropdown structure. */
          if (selectChildren.length) {
            selectChildren.each(function() {
              if ($(this).is('option')) {
                // Direct descendant option.
                if (multiple) {
                  appendOptionWithIcon($select, $(this), 'multiple');
    
                } else {
                  appendOptionWithIcon($select, $(this));
                }
              } else if ($(this).is('optgroup')) {
                // Optgroup.
                var selectOptions = $(this).children('option');
                options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));
    
                selectOptions.each(function() {
                  appendOptionWithIcon($select, $(this));
                });
              }
            });
          }
    
          options.find('li:not(.optgroup)').each(function (i) {
            $(this).click(function (e) {
              // Check if option element is disabled
              if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
                var selected = true;
    
                if (multiple) {
                  $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
                  selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);
                  $newSelect.trigger('focus');
                } else {
                  options.find('li').removeClass('active');
                  $(this).toggleClass('active');
                  $newSelect.val($(this).text());
                }
    
                activateOption(options, $(this));
                $select.find('option').eq(i).prop('selected', selected);
                // Trigger onchange() event
                $select.trigger('change');
                if (typeof callback !== 'undefined') callback();
              }
    
              e.stopPropagation();
            });
          });
    
          // Wrap Elements
          $select.wrap(wrapper);
          // Add Select Display Element
          var dropdownIcon = $('<a class="btn-arrow-down"><div class="line left"></div><div class="line right"></div></a>');
          if ($select.is(':disabled'))
            dropdownIcon.addClass('disabled');
    
          // escape double quotes
          var sanitizedLabelHtml = label.replace(/"/g, '&quot;');
    
          var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
          $select.before($newSelect);
          $newSelect.before(dropdownIcon);
    
          $newSelect.after(options);
          // Check if section element is disabled
          if (!$select.is(':disabled')) {
            $newSelect.dropdown({'hover': false, 'closeOnClick': false});
          }
    
          // Copy tabindex
          if ($select.attr('tabindex')) {
            $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
          }
    
          $select.addClass('initialized');
    
          $newSelect.on({
            'focus': function (){
              if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
                $('input.select-dropdown').trigger('close');
              }
              if (!options.is(':visible')) {
                $(this).trigger('open', ['focus']);
                var label = $(this).val();
                var selectedOption = options.find('li').filter(function() {
                  return $(this).text().toLowerCase() === label.toLowerCase();
                })[0];
                activateOption(options, selectedOption);
              }
            },
            'click': function (e){
              e.stopPropagation();
            }
          });
    
          $newSelect.on('blur', function() {
            if (!multiple) {
              $(this).trigger('close');
            }
            options.find('li.selected').removeClass('selected');
          });
    
          options.hover(function() {
            optionsHover = true;
          }, function () {
            optionsHover = false;
          });
    
          $(window).on({
            'click': function () {
              multiple && (optionsHover || $newSelect.trigger('close'));
            }
          });
    
          // Add initial multiple selections.
          if (multiple) {
            $select.find("option:selected:not(:disabled)").each(function () {
              var index = $(this).index();
    
              toggleEntryFromArray(valuesSelected, index, $select);
              options.find("li").eq(index).find(":checkbox").prop("checked", true);
            });
          }
    
          // Make option as selected and scroll to selected position
          activateOption = function(collection, newOption) {
            if (newOption) {
              collection.find('li.selected').removeClass('selected');
              var option = $(newOption);
              option.addClass('selected');
              options.scrollTo(option);
            }
          };
    
          // Allow user to search by typing
          // this array is cleared after 1 second
          var filterQuery = [],
              onKeyDown = function(e){
                // TAB - switch to another input
                if(e.which == 9){
                  $newSelect.trigger('close');
                  return;
                }
    
                // ARROW DOWN WHEN SELECT IS CLOSED - open select options
                if(e.which == 40 && !options.is(':visible')){
                  $newSelect.trigger('open');
                  return;
                }
    
                // ENTER WHEN SELECT IS CLOSED - submit form
                if(e.which == 13 && !options.is(':visible')){
                  return;
                }
    
                e.preventDefault();
    
                // CASE WHEN USER TYPE LETTERS
                var letter = String.fromCharCode(e.which).toLowerCase(),
                    nonLetters = [9,13,27,38,40];
                if (letter && (nonLetters.indexOf(e.which) === -1)) {
                  filterQuery.push(letter);
    
                  var string = filterQuery.join(''),
                      newOption = options.find('li').filter(function() {
                        return $(this).text().toLowerCase().indexOf(string) === 0;
                      })[0];
    
                  if (newOption) {
                    activateOption(options, newOption);
                  }
                }
    
                // ENTER - select option and close when select options are opened
                if (e.which == 13) {
                  var activeOption = options.find('li.selected:not(.disabled)')[0];
                  if(activeOption){
                    $(activeOption).trigger('click');
                    if (!multiple) {
                      $newSelect.trigger('close');
                    }
                  }
                }
    
                // ARROW DOWN - move to next not disabled option
                if (e.which == 40) {
                  if (options.find('li.selected').length) {
                    newOption = options.find('li.selected').next('li:not(.disabled)')[0];
                  } else {
                    newOption = options.find('li:not(.disabled)')[0];
                  }
                  activateOption(options, newOption);
                }
    
                // ESC - close options
                if (e.which == 27) {
                  $newSelect.trigger('close');
                }
    
                // ARROW UP - move to previous not disabled option
                if (e.which == 38) {
                  newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
                  if(newOption)
                    activateOption(options, newOption);
                }
    
                // Automaticaly clean filter query so user can search again by starting letters
                setTimeout(function(){ filterQuery = []; }, 1000);
              };
    
          $newSelect.on('keydown', onKeyDown);
        });
    
        function toggleEntryFromArray(entriesArray, entryIndex, select) {
          var index = entriesArray.indexOf(entryIndex),
              notAdded = index === -1;
    
          if (notAdded) {
            entriesArray.push(entryIndex);
          } else {
            entriesArray.splice(index, 1);
          }
    
          select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');
    
          // use notAdded instead of true (to detect if the option is selected or not)
          select.find('option').eq(entryIndex).prop('selected', notAdded);
          setValueToInput(entriesArray, select);
    
          return notAdded;
        }
    
        function setValueToInput(entriesArray, select) {
          var value = '';
    
          for (var i = 0, count = entriesArray.length; i < count; i++) {
            var text = select.find('option').eq(entriesArray[i]).text();
    
            i === 0 ? value += text : value += ', ' + text;
          }
    
          if (value === '') {
            value = select.find('option:disabled').eq(0).text();
          }
    
          select.siblings('input.select-dropdown').val(value);
        }
      };
    
    }( jQuery ));
    ;
    (function ($) {
    
      var methods = {
        init : function() {
          return this.each(function() {
    
          // For each set of tabs, we want to keep track of
          // which tab is active and its associated content
          var $this = $(this),
              window_width = $(window).width();
    
          $this.width('100%');
          var $active, $content, $links = $this.find('li.tab a'),
              $tabs_width = $this.width(),
              $tab_width = $this.find('li').first().outerWidth(),
              $index = 0;
    
          // If the location.hash matches one of the links, use that as the active tab.
          $active = $($links.filter('[href="'+location.hash+'"]'));
    
          // If no match is found, use the first link or any with class 'active' as the initial active tab.
          if ($active.length === 0) {
              $active = $(this).find('li.tab a.active').first();
          }
          if ($active.length === 0) {
            $active = $(this).find('li.tab a').first();
          }
    
          $active.addClass('active');
          $index = $links.index($active);
          if ($index < 0) {
            $index = 0;
          }
    
          $content = $($active[0].hash);
    
          // append indicator then set indicator width to tab width
          $this.append('<div class="indicator"></div>');
          var $indicator = $this.find('.indicator');
          if ($this.is(":visible")) {
            $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
            $indicator.css({"left": $index * $tab_width});
          }
          $(window).resize(function () {
            $tabs_width = $this.width();
            $tab_width = $this.find('li').first().outerWidth();
            if ($index < 0) {
              $index = 0;
            }
            if ($tab_width !== 0 && $tabs_width !== 0) {
              $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
              $indicator.css({"left": $index * $tab_width});
            }
          });
    
          // Hide the remaining content
          $links.not($active).each(function () {
            $(this.hash).hide();
          });
    
    
          // Bind the click event handler
          $this.on('click', 'a', function(e) {
            if ($(this).parent().hasClass('disabled')) {
              e.preventDefault();
              return;
            }
    
            $tabs_width = $this.width();
            $tab_width = $this.find('li').first().outerWidth();
    
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();
    
            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);
            $links = $this.find('li.tab a');
    
            // Make the tab active.
            $active.addClass('active');
            var $prev_index = $index;
            $index = $links.index($(this));
            if ($index < 0) {
              $index = 0;
            }
            // Change url to current tab
            // window.location.hash = $active.attr('href');
    
            $content.show();
    
            // Update indicator
            if (($index - $prev_index) >= 0) {
              $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
              $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
    
            }
            else {
              $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
              $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
            }
    
            // Prevent the anchor's default click action
            e.preventDefault();
          });
        });
    
        },
        select_tab : function( id ) {
          this.find('a[href="#' + id + '"]').trigger('click');
        }
      };
    
      $.fn.tabs = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
          return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          // Default to "init"
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }
      };
    
      $(document).ready(function(){
        $('ul.tabs.mat-tabs').tabs();
      });
    }( jQuery ));
    ;
    /*
     *  deOrphan 1.1.5 - jQuery Plugin
     *  https://github.com/megasmack/jquery.deorphan.js
     *  written by Steve Schrab - @megasmack
     *  Special thanks to Erik Wessel - @wesselej and Jeffrey Schrab - @jschrab
     *
     *  Copyright (c) 2015 Steve Schrab (http://www.gsdesign.com/)
     *  Licensed under the MIT license:
     *  http://www.opensource.org/licenses/mit-license.php
     *
     *  What are Orphans?
     *
     *  An orphan is a single word that appears by itself at the end of a paragraph.
     *  This script finds the last two words of a selected element and joins
     *  them together with a non-breaking space.
     *
     *  http://en.wikipedia.org/wiki/Widows_and_orphans
     */
    (function($){
        $.fn.deOrphan = function() {
    
            function _deOrphan(node) {
                $(node).contents().each(function (i,node) {
                    if (node.nodeType === 3 && (typeof(node.textContent) !== 'undefined')) { // nodeType 3 is TEXT_NODE
                        node.textContent = node.nodeValue.replace(/ (\S*)$/, '\u00A0$1');
                    } else {
                        _deOrphan(node);
                    }
                });
            }
    
            return this.each(function(i,el) {
                _deOrphan(el);
            });
        };
    })(jQuery);
    ;
    /*!
     * Masonry PACKAGED v3.3.1
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    
    !function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=parseInt(e,10),h=parseInt(f,10),i=this.layout.size;g=-1!=e.indexOf("%")?g/100*i.width:g,h=-1!=f.indexOf("%")?h/100*i.height:h,g=isNaN(g)?0:g,h=isNaN(h)?0:h,g-=c?i.paddingLeft:i.paddingRight,h-=d?i.paddingTop:i.paddingBottom,this.position.x=g,this.position.y=h},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,a=this.getXValue(a),b=this.getYValue(b),n?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});;
    /*!
     * Modernizr v2.8.3
     * www.modernizr.com
     *
     * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
     * Available under the BSD and MIT licenses: www.modernizr.com/license/
     */
    
    /*
     * Modernizr tests which native CSS3 and HTML5 features are available in
     * the current UA and makes the results available to you in two ways:
     * as properties on a global Modernizr object, and as classes on the
     * <html> element. This information allows you to progressively enhance
     * your pages with a granular level of control over the experience.
     *
     * Modernizr has an optional (not included) conditional resource loader
     * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
     * To get a build that includes Modernizr.load(), as well as choosing
     * which tests to include, go to www.modernizr.com/download/
     *
     * Authors        Faruk Ates, Paul Irish, Alex Sexton
     * Contributors   Ryan Seddon, Ben Alman
     */
    
    window.Modernizr = (function( window, document, undefined ) {
    
        var version = '2.8.3',
    
        Modernizr = {},
    
        /*>>cssclasses*/
        // option for enabling the HTML classes to be added
        enableClasses = true,
        /*>>cssclasses*/
    
        docElement = document.documentElement,
    
        /**
         * Create our "modernizr" element that we do most feature tests on.
         */
        mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,
    
        /**
         * Create the input element for various Web Forms feature tests.
         */
        inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,
    
        /*>>smile*/
        smile = ':)',
        /*>>smile*/
    
        toString = {}.toString,
    
        // TODO :: make the prefixes more granular
        /*>>prefixes*/
        // List of property values to set for css tests. See ticket #21
        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
        /*>>prefixes*/
    
        /*>>domprefixes*/
        // Following spec is to expose vendor-specific style properties as:
        //   elem.style.WebkitBorderRadius
        // and the following would be incorrect:
        //   elem.style.webkitBorderRadius
    
        // Webkit ghosts their properties in lowercase but Opera & Moz do not.
        // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
        //   erik.eae.net/archives/2008/03/10/21.48.10/
    
        // More here: github.com/Modernizr/Modernizr/issues/issue/21
        omPrefixes = 'Webkit Moz O ms',
    
        cssomPrefixes = omPrefixes.split(' '),
    
        domPrefixes = omPrefixes.toLowerCase().split(' '),
        /*>>domprefixes*/
    
        /*>>ns*/
        ns = {'svg': 'http://www.w3.org/2000/svg'},
        /*>>ns*/
    
        tests = {},
        inputs = {},
        attrs = {},
    
        classes = [],
    
        slice = classes.slice,
    
        featureName, // used in testing loop
    
    
        /*>>teststyles*/
        // Inject element with style element and some CSS rules
        injectElementWithStyles = function( rule, callback, nodes, testnames ) {
    
          var style, ret, node, docOverflow,
              div = document.createElement('div'),
              // After page load injecting a fake body doesn't work so check if body exists
              body = document.body,
              // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
              fakeBody = body || document.createElement('body');
    
          if ( parseInt(nodes, 10) ) {
              // In order not to give false positives we create a node for each test
              // This also allows the method to scale for unspecified uses
              while ( nodes-- ) {
                  node = document.createElement('div');
                  node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                  div.appendChild(node);
              }
          }
    
          // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
          // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
          // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
          // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
          // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
          style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
          div.id = mod;
          // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
          // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
          (body ? div : fakeBody).innerHTML += style;
          fakeBody.appendChild(div);
          if ( !body ) {
              //avoid crashing IE8, if background image is used
              fakeBody.style.background = '';
              //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
              fakeBody.style.overflow = 'hidden';
              docOverflow = docElement.style.overflow;
              docElement.style.overflow = 'hidden';
              docElement.appendChild(fakeBody);
          }
    
          ret = callback(div, rule);
          // If this is done after page load we don't want to remove the body so check if body exists
          if ( !body ) {
              fakeBody.parentNode.removeChild(fakeBody);
              docElement.style.overflow = docOverflow;
          } else {
              div.parentNode.removeChild(div);
          }
    
          return !!ret;
    
        },
        /*>>teststyles*/
    
        /*>>mq*/
        // adapted from matchMedia polyfill
        // by Scott Jehl and Paul Irish
        // gist.github.com/786768
        testMediaQuery = function( mq ) {
    
          var matchMedia = window.matchMedia || window.msMatchMedia;
          if ( matchMedia ) {
            return matchMedia(mq) && matchMedia(mq).matches || false;
          }
    
          var bool;
    
          injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
            bool = (window.getComputedStyle ?
                      getComputedStyle(node, null) :
                      node.currentStyle)['position'] == 'absolute';
          });
    
          return bool;
    
         },
         /*>>mq*/
    
    
        /*>>hasevent*/
        //
        // isEventSupported determines if a given element supports the given event
        // kangax.github.com/iseventsupported/
        //
        // The following results are known incorrects:
        //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
        //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
        //   ...
        isEventSupported = (function() {
    
          var TAGNAMES = {
            'select': 'input', 'change': 'input',
            'submit': 'form', 'reset': 'form',
            'error': 'img', 'load': 'img', 'abort': 'img'
          };
    
          function isEventSupported( eventName, element ) {
    
            element = element || document.createElement(TAGNAMES[eventName] || 'div');
            eventName = 'on' + eventName;
    
            // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
            var isSupported = eventName in element;
    
            if ( !isSupported ) {
              // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
              if ( !element.setAttribute ) {
                element = document.createElement('div');
              }
              if ( element.setAttribute && element.removeAttribute ) {
                element.setAttribute(eventName, '');
                isSupported = is(element[eventName], 'function');
    
                // If property was created, "remove it" (by setting value to `undefined`)
                if ( !is(element[eventName], 'undefined') ) {
                  element[eventName] = undefined;
                }
                element.removeAttribute(eventName);
              }
            }
    
            element = null;
            return isSupported;
          }
          return isEventSupported;
        })(),
        /*>>hasevent*/
    
        // TODO :: Add flag for hasownprop ? didn't last time
    
        // hasOwnProperty shim by kangax needed for Safari 2.0 support
        _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;
    
        if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
          hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
          };
        }
        else {
          hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
          };
        }
    
        // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
        // es5.github.com/#x15.3.4.5
    
        if (!Function.prototype.bind) {
          Function.prototype.bind = function bind(that) {
    
            var target = this;
    
            if (typeof target != "function") {
                throw new TypeError();
            }
    
            var args = slice.call(arguments, 1),
                bound = function () {
    
                if (this instanceof bound) {
    
                  var F = function(){};
                  F.prototype = target.prototype;
                  var self = new F();
    
                  var result = target.apply(
                      self,
                      args.concat(slice.call(arguments))
                  );
                  if (Object(result) === result) {
                      return result;
                  }
                  return self;
    
                } else {
    
                  return target.apply(
                      that,
                      args.concat(slice.call(arguments))
                  );
    
                }
    
            };
    
            return bound;
          };
        }
    
        /**
         * setCss applies given styles to the Modernizr DOM node.
         */
        function setCss( str ) {
            mStyle.cssText = str;
        }
    
        /**
         * setCssAll extrapolates all vendor-specific css strings.
         */
        function setCssAll( str1, str2 ) {
            return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
        }
    
        /**
         * is returns a boolean for if typeof obj is exactly type.
         */
        function is( obj, type ) {
            return typeof obj === type;
        }
    
        /**
         * contains returns a boolean for if substr is found within str.
         */
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }
    
        /*>>testprop*/
    
        // testProps is a generic CSS / DOM property test.
    
        // In testing support for a given CSS property, it's legit to test:
        //    `elem.style[styleName] !== undefined`
        // If the property is supported it will return an empty string,
        // if unsupported it will return undefined.
    
        // We'll take advantage of this quick test and skip setting a style
        // on our modernizr element, but instead just testing undefined vs
        // empty string.
    
        // Because the testing of the CSS property names (with "-", as
        // opposed to the camelCase DOM properties) is non-portable and
        // non-standard but works in WebKit and IE (but not Gecko or Opera),
        // we explicitly reject properties with dashes so that authors
        // developing in WebKit or IE first don't end up with
        // browser-specific content by accident.
    
        function testProps( props, prefixed ) {
            for ( var i in props ) {
                var prop = props[i];
                if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                    return prefixed == 'pfx' ? prop : true;
                }
            }
            return false;
        }
        /*>>testprop*/
    
        // TODO :: add testDOMProps
        /**
         * testDOMProps is a generic DOM property test; if a browser supports
         *   a certain property, it won't return undefined for it.
         */
        function testDOMProps( props, obj, elem ) {
            for ( var i in props ) {
                var item = obj[props[i]];
                if ( item !== undefined) {
    
                    // return the property name as a string
                    if (elem === false) return props[i];
    
                    // let's bind a function
                    if (is(item, 'function')){
                      // default to autobind unless override
                      return item.bind(elem || obj);
                    }
    
                    // return the unbound function or obj or value
                    return item;
                }
            }
            return false;
        }
    
        /*>>testallprops*/
        /**
         * testPropsAll tests a list of DOM properties we want to check against.
         *   We specify literally ALL possible (known and/or likely) properties on
         *   the element including the non-vendor prefixed one, for forward-
         *   compatibility.
         */
        function testPropsAll( prop, prefixed, elem ) {
    
            var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
                props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
    
            // did they call .prefixed('boxSizing') or are we just testing a prop?
            if(is(prefixed, "string") || is(prefixed, "undefined")) {
              return testProps(props, prefixed);
    
            // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
            } else {
              props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
              return testDOMProps(props, prefixed, elem);
            }
        }
        /*>>testallprops*/
    
    
        /**
         * Tests
         * -----
         */
    
        // The *new* flexbox
        // dev.w3.org/csswg/css3-flexbox
    
        tests['flexbox'] = function() {
          return testPropsAll('flexWrap');
        };
    
        // The *old* flexbox
        // www.w3.org/TR/2009/WD-css3-flexbox-20090723/
    
        tests['flexboxlegacy'] = function() {
            return testPropsAll('boxDirection');
        };
    
        // On the S60 and BB Storm, getContext exists, but always returns undefined
        // so we actually have to call getContext() to verify
        // github.com/Modernizr/Modernizr/issues/issue/97/
    
        tests['canvas'] = function() {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        };
    
        tests['canvastext'] = function() {
            return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
        };
    
        // webk.it/70117 is tracking a legit WebGL feature detect proposal
    
        // We do a soft detect which may false positive in order to avoid
        // an expensive context creation: bugzil.la/732441
    
        tests['webgl'] = function() {
            return !!window.WebGLRenderingContext;
        };
    
        /*
         * The Modernizr.touch test only indicates if the browser supports
         *    touch events, which does not necessarily reflect a touchscreen
         *    device, as evidenced by tablets running Windows 7 or, alas,
         *    the Palm Pre / WebOS (touch) phones.
         *
         * Additionally, Chrome (desktop) used to lie about its support on this,
         *    but that has since been rectified: crbug.com/36415
         *
         * We also test for Firefox 4 Multitouch Support.
         *
         * For more info, see: modernizr.github.com/Modernizr/touch.html
         */
    
        tests['touch'] = function() {
            var bool;
    
            if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
              bool = true;
            } else {
              injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
                bool = node.offsetTop === 9;
              });
            }
    
            return bool;
        };
    
    
        // geolocation is often considered a trivial feature detect...
        // Turns out, it's quite tricky to get right:
        //
        // Using !!navigator.geolocation does two things we don't want. It:
        //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
        //   2. Disables page caching in WebKit: webk.it/43956
        //
        // Meanwhile, in Firefox < 8, an about:config setting could expose
        // a false positive that would throw an exception: bugzil.la/688158
    
        tests['geolocation'] = function() {
            return 'geolocation' in navigator;
        };
    
    
        tests['postmessage'] = function() {
          return !!window.postMessage;
        };
    
    
        // Chrome incognito mode used to throw an exception when using openDatabase
        // It doesn't anymore.
        tests['websqldatabase'] = function() {
          return !!window.openDatabase;
        };
    
        // Vendors had inconsistent prefixing with the experimental Indexed DB:
        // - Webkit's implementation is accessible through webkitIndexedDB
        // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
        // For speed, we don't test the legacy (and beta-only) indexedDB
        tests['indexedDB'] = function() {
          return !!testPropsAll("indexedDB", window);
        };
    
        // documentMode logic from YUI to filter out IE8 Compat Mode
        //   which false positives.
        tests['hashchange'] = function() {
          return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
        };
    
        // Per 1.6:
        // This used to be Modernizr.historymanagement but the longer
        // name has been deprecated in favor of a shorter and property-matching one.
        // The old API is still available in 1.6, but as of 2.0 will throw a warning,
        // and in the first release thereafter disappear entirely.
        tests['history'] = function() {
          return !!(window.history && history.pushState);
        };
    
        tests['draganddrop'] = function() {
            var div = document.createElement('div');
            return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
        };
    
        // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
        // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
        // FF10 still uses prefixes, so check for it until then.
        // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
        tests['websockets'] = function() {
            return 'WebSocket' in window || 'MozWebSocket' in window;
        };
    
    
        // css-tricks.com/rgba-browser-support/
        tests['rgba'] = function() {
            // Set an rgba() color and check the returned value
    
            setCss('background-color:rgba(150,255,150,.5)');
    
            return contains(mStyle.backgroundColor, 'rgba');
        };
    
        tests['hsla'] = function() {
            // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
            //   except IE9 who retains it as hsla
    
            setCss('background-color:hsla(120,40%,100%,.5)');
    
            return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
        };
    
        tests['multiplebgs'] = function() {
            // Setting multiple images AND a color on the background shorthand property
            //  and then querying the style.background property value for the number of
            //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!
    
            setCss('background:url(https://),url(https://),red url(https://)');
    
            // If the UA supports multiple backgrounds, there should be three occurrences
            //   of the string "url(" in the return value for elemStyle.background
    
            return (/(url\s*\(.*?){3}/).test(mStyle.background);
        };
    
    
    
        // this will false positive in Opera Mini
        //   github.com/Modernizr/Modernizr/issues/396
    
        tests['backgroundsize'] = function() {
            return testPropsAll('backgroundSize');
        };
    
        tests['borderimage'] = function() {
            return testPropsAll('borderImage');
        };
    
    
        // Super comprehensive table about all the unique implementations of
        // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance
    
        tests['borderradius'] = function() {
            return testPropsAll('borderRadius');
        };
    
        // WebOS unfortunately false positives on this test.
        tests['boxshadow'] = function() {
            return testPropsAll('boxShadow');
        };
    
        // FF3.0 will false positive on this test
        tests['textshadow'] = function() {
            return document.createElement('div').style.textShadow === '';
        };
    
    
        tests['opacity'] = function() {
            // Browsers that actually have CSS Opacity implemented have done so
            //  according to spec, which means their return values are within the
            //  range of [0.0,1.0] - including the leading zero.
    
            setCssAll('opacity:.55');
    
            // The non-literal . in this regex is intentional:
            //   German Chrome returns this value as 0,55
            // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
            return (/^0.55$/).test(mStyle.opacity);
        };
    
    
        // Note, Android < 4 will pass this test, but can only animate
        //   a single property at a time
        //   goo.gl/v3V4Gp
        tests['cssanimations'] = function() {
            return testPropsAll('animationName');
        };
    
    
        tests['csscolumns'] = function() {
            return testPropsAll('columnCount');
        };
    
    
        tests['cssgradients'] = function() {
            /**
             * For CSS Gradients syntax, please see:
             * webkit.org/blog/175/introducing-css-gradients/
             * developer.mozilla.org/en/CSS/-moz-linear-gradient
             * developer.mozilla.org/en/CSS/-moz-radial-gradient
             * dev.w3.org/csswg/css3-images/#gradients-
             */
    
            var str1 = 'background-image:',
                str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
                str3 = 'linear-gradient(left top,#9f9, white);';
    
            setCss(
                 // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
                  (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                 // standard syntax             // trailing 'background-image:'
                  prefixes.join(str3 + str1)).slice(0, -str1.length)
            );
    
            return contains(mStyle.backgroundImage, 'gradient');
        };
    
    
        tests['cssreflections'] = function() {
            return testPropsAll('boxReflect');
        };
    
    
        tests['csstransforms'] = function() {
            return !!testPropsAll('transform');
        };
    
    
        tests['csstransforms3d'] = function() {
    
            var ret = !!testPropsAll('perspective');
    
            // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
            //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
            //   some conditions. As a result, Webkit typically recognizes the syntax but
            //   will sometimes throw a false positive, thus we must do a more thorough check:
            if ( ret && 'webkitPerspective' in docElement.style ) {
    
              // Webkit allows this media query to succeed only if the feature is enabled.
              // `@media (transform-3d),(-webkit-transform-3d){ ... }`
              injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
              });
            }
            return ret;
        };
    
    
        tests['csstransitions'] = function() {
            return testPropsAll('transition');
        };
    
    
        /*>>fontface*/
        // @font-face detection routine by Diego Perini
        // javascript.nwbox.com/CSSSupport/
    
        // false positives:
        //   WebOS github.com/Modernizr/Modernizr/issues/342
        //   WP7   github.com/Modernizr/Modernizr/issues/538
        tests['fontface'] = function() {
            var bool;
    
            injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
              var style = document.getElementById('smodernizr'),
                  sheet = style.sheet || style.styleSheet,
                  cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
    
              bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
            });
    
            return bool;
        };
        /*>>fontface*/
    
        // CSS generated content detection
        tests['generatedcontent'] = function() {
            var bool;
    
            injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
              bool = node.offsetHeight >= 3;
            });
    
            return bool;
        };
    
    
    
        // These tests evaluate support of the video/audio elements, as well as
        // testing what types of content they support.
        //
        // We're using the Boolean constructor here, so that we can extend the value
        // e.g.  Modernizr.video     // true
        //       Modernizr.video.ogg // 'probably'
        //
        // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
        //                     thx to NielsLeenheer and zcorpan
    
        // Note: in some older browsers, "no" was a return value instead of empty string.
        //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
        //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5
    
        tests['video'] = function() {
            var elem = document.createElement('video'),
                bool = false;
    
            // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
            try {
                if ( bool = !!elem.canPlayType ) {
                    bool      = new Boolean(bool);
                    bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');
    
                    // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                    bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');
    
                    bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
                }
    
            } catch(e) { }
    
            return bool;
        };
    
        tests['audio'] = function() {
            var elem = document.createElement('audio'),
                bool = false;
    
            try {
                if ( bool = !!elem.canPlayType ) {
                    bool      = new Boolean(bool);
                    bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                    bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');
    
                    // Mimetypes accepted:
                    //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                    //   bit.ly/iphoneoscodecs
                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                    bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                                  elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
                }
            } catch(e) { }
    
            return bool;
        };
    
    
        // In FF4, if disabled, window.localStorage should === null.
    
        // Normally, we could not test that directly and need to do a
        //   `('localStorage' in window) && ` test first because otherwise Firefox will
        //   throw bugzil.la/365772 if cookies are disabled
    
        // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
        // will throw the exception:
        //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
        // Peculiarly, getItem and removeItem calls do not throw.
    
        // Because we are forced to try/catch this, we'll go aggressive.
    
        // Just FWIW: IE8 Compat mode supports these features completely:
        //   www.quirksmode.org/dom/html5.html
        // But IE8 doesn't support either with local files
    
        tests['localstorage'] = function() {
            try {
                localStorage.setItem(mod, mod);
                localStorage.removeItem(mod);
                return true;
            } catch(e) {
                return false;
            }
        };
    
        tests['sessionstorage'] = function() {
            try {
                sessionStorage.setItem(mod, mod);
                sessionStorage.removeItem(mod);
                return true;
            } catch(e) {
                return false;
            }
        };
    
    
        tests['webworkers'] = function() {
            return !!window.Worker;
        };
    
    
        tests['applicationcache'] = function() {
            return !!window.applicationCache;
        };
    
    
        // Thanks to Erik Dahlstrom
        tests['svg'] = function() {
            return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
        };
    
        // specifically for SVG inline in HTML, not within XHTML
        // test page: paulirish.com/demo/inline-svg
        tests['inlinesvg'] = function() {
          var div = document.createElement('div');
          div.innerHTML = '<svg/>';
          return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
        };
    
        // SVG SMIL animation
        tests['smil'] = function() {
            return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
        };
    
        // This test is only for clip paths in SVG proper, not clip paths on HTML content
        // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg
    
        // However read the comments to dig into applying SVG clippaths to HTML content here:
        //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
        tests['svgclippaths'] = function() {
            return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
        };
    
        /*>>webforms*/
        // input features and input types go directly onto the ret object, bypassing the tests loop.
        // Hold this guy to execute in a moment.
        function webforms() {
            /*>>input*/
            // Run through HTML5's new input attributes to see if the UA understands any.
            // We're using f which is the <input> element created early on
            // Mike Taylr has created a comprehensive resource for testing these attributes
            //   when applied to all input types:
            //   miketaylr.com/code/input-type-attr.html
            // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
    
            // Only input placeholder is tested while textarea's placeholder is not.
            // Currently Safari 4 and Opera 11 have support only for the input placeholder
            // Both tests are available in feature-detects/forms-placeholder.js
            Modernizr['input'] = (function( props ) {
                for ( var i = 0, len = props.length; i < len; i++ ) {
                    attrs[ props[i] ] = !!(props[i] in inputElem);
                }
                if (attrs.list){
                  // safari false positive's on datalist: webk.it/74252
                  // see also github.com/Modernizr/Modernizr/issues/146
                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
                }
                return attrs;
            })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
            /*>>input*/
    
            /*>>inputtypes*/
            // Run through HTML5's new input types to see if the UA understands any.
            //   This is put behind the tests runloop because it doesn't return a
            //   true/false like all the other tests; instead, it returns an object
            //   containing each input type with its corresponding true/false value
    
            // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
            Modernizr['inputtypes'] = (function(props) {
    
                for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {
    
                    inputElem.setAttribute('type', inputElemType = props[i]);
                    bool = inputElem.type !== 'text';
    
                    // We first check to see if the type we give it sticks..
                    // If the type does, we feed it a textual value, which shouldn't be valid.
                    // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                    if ( bool ) {
    
                        inputElem.value         = smile;
                        inputElem.style.cssText = 'position:absolute;visibility:hidden;';
    
                        if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {
    
                          docElement.appendChild(inputElem);
                          defaultView = document.defaultView;
    
                          // Safari 2-4 allows the smiley as a value, despite making a slider
                          bool =  defaultView.getComputedStyle &&
                                  defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                  // Mobile android web browser has false positive, so must
                                  // check the height to see if the widget is actually there.
                                  (inputElem.offsetHeight !== 0);
    
                          docElement.removeChild(inputElem);
    
                        } else if ( /^(search|tel)$/.test(inputElemType) ){
                          // Spec doesn't define any special parsing or detectable UI
                          //   behaviors so we pass these through as true
    
                          // Interestingly, opera fails the earlier test, so it doesn't
                          //  even make it here.
    
                        } else if ( /^(url|email)$/.test(inputElemType) ) {
                          // Real url and email support comes with prebaked validation.
                          bool = inputElem.checkValidity && inputElem.checkValidity() === false;
    
                        } else {
                          // If the upgraded input compontent rejects the :) text, we got a winner
                          bool = inputElem.value != smile;
                        }
                    }
    
                    inputs[ props[i] ] = !!bool;
                }
                return inputs;
            })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
            /*>>inputtypes*/
        }
        /*>>webforms*/
    
    
        // End of test definitions
        // -----------------------
    
    
    
        // Run through all tests and detect their support in the current UA.
        // todo: hypothetically we could be doing an array of tests and use a basic loop here.
        for ( var feature in tests ) {
            if ( hasOwnProp(tests, feature) ) {
                // run the test, throw the return value into the Modernizr,
                //   then based on that boolean, define an appropriate className
                //   and push it into an array of classes we'll join later.
                featureName  = feature.toLowerCase();
                Modernizr[featureName] = tests[feature]();
    
                classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
            }
        }
    
        /*>>webforms*/
        // input tests need to run.
        Modernizr.input || webforms();
        /*>>webforms*/
    
    
        /**
         * addTest allows the user to define their own feature tests
         * the result will be added onto the Modernizr object,
         * as well as an appropriate className set on the html element
         *
         * @param feature - String naming the feature
         * @param test - Function returning true if feature is supported, false if not
         */
         Modernizr.addTest = function ( feature, test ) {
           if ( typeof feature == 'object' ) {
             for ( var key in feature ) {
               if ( hasOwnProp( feature, key ) ) {
                 Modernizr.addTest( key, feature[ key ] );
               }
             }
           } else {
    
             feature = feature.toLowerCase();
    
             if ( Modernizr[feature] !== undefined ) {
               // we're going to quit if you're trying to overwrite an existing test
               // if we were to allow it, we'd do this:
               //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
               //   docElement.className = docElement.className.replace( re, '' );
               // but, no rly, stuff 'em.
               return Modernizr;
             }
    
             test = typeof test == 'function' ? test() : test;
    
             if (typeof enableClasses !== "undefined" && enableClasses) {
               docElement.className += ' ' + (test ? '' : 'no-') + feature;
             }
             Modernizr[feature] = test;
    
           }
    
           return Modernizr; // allow chaining.
         };
    
    
        // Reset modElem.cssText to nothing to reduce memory footprint.
        setCss('');
        modElem = inputElem = null;
    
        /*>>shiv*/
        /**
         * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
         */
        ;(function(window, document) {
            /*jshint evil:true */
            /** version */
            var version = '3.7.0';
    
            /** Preset options */
            var options = window.html5 || {};
    
            /** Used to skip problem elements */
            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    
            /** Not all elements can be cloned in IE **/
            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    
            /** Detect whether the browser supports default html5 styles */
            var supportsHtml5Styles;
    
            /** Name of the expando, to work with multiple documents or to re-shiv one document */
            var expando = '_html5shiv';
    
            /** The id for the the documents expando */
            var expanID = 0;
    
            /** Cached data for each document */
            var expandoData = {};
    
            /** Detect whether the browser supports unknown elements */
            var supportsUnknownElements;
    
            (function() {
              try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
                supportsHtml5Styles = ('hidden' in a);
    
                supportsUnknownElements = a.childNodes.length == 1 || (function() {
                  // assign a false positive if unable to shiv
                  (document.createElement)('a');
                  var frag = document.createDocumentFragment();
                  return (
                    typeof frag.cloneNode == 'undefined' ||
                    typeof frag.createDocumentFragment == 'undefined' ||
                    typeof frag.createElement == 'undefined'
                  );
                }());
              } catch(e) {
                // assign a false positive if detection fails => unable to shiv
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
              }
    
            }());
    
            /*--------------------------------------------------------------------------*/
    
            /**
             * Creates a style sheet with the given CSS text and adds it to the document.
             * @private
             * @param {Document} ownerDocument The document.
             * @param {String} cssText The CSS text.
             * @returns {StyleSheet} The style element.
             */
            function addStyleSheet(ownerDocument, cssText) {
              var p = ownerDocument.createElement('p'),
              parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
    
              p.innerHTML = 'x<style>' + cssText + '</style>';
              return parent.insertBefore(p.lastChild, parent.firstChild);
            }
    
            /**
             * Returns the value of `html5.elements` as an array.
             * @private
             * @returns {Array} An array of shived element node names.
             */
            function getElements() {
              var elements = html5.elements;
              return typeof elements == 'string' ? elements.split(' ') : elements;
            }
    
            /**
             * Returns the data associated to the given document
             * @private
             * @param {Document} ownerDocument The document.
             * @returns {Object} An object of data.
             */
            function getExpandoData(ownerDocument) {
              var data = expandoData[ownerDocument[expando]];
              if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
              }
              return data;
            }
    
            /**
             * returns a shived element for the given nodeName and document
             * @memberOf html5
             * @param {String} nodeName name of the element
             * @param {Document} ownerDocument The context document.
             * @returns {Object} The shived element.
             */
            function createElement(nodeName, ownerDocument, data){
              if (!ownerDocument) {
                ownerDocument = document;
              }
              if(supportsUnknownElements){
                return ownerDocument.createElement(nodeName);
              }
              if (!data) {
                data = getExpandoData(ownerDocument);
              }
              var node;
    
              if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
              } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
              } else {
                node = data.createElem(nodeName);
              }
    
              // Avoid adding some elements to fragments in IE < 9 because
              // * Attributes like `name` or `type` cannot be set/changed once an element
              //   is inserted into a document/fragment
              // * Link elements with `src` attributes that are inaccessible, as with
              //   a 403 response, will cause the tab/window to crash
              // * Script elements appended to fragments will execute when their `src`
              //   or `text` property is set
              return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
            }
    
            /**
             * returns a shived DocumentFragment for the given document
             * @memberOf html5
             * @param {Document} ownerDocument The context document.
             * @returns {Object} The shived DocumentFragment.
             */
            function createDocumentFragment(ownerDocument, data){
              if (!ownerDocument) {
                ownerDocument = document;
              }
              if(supportsUnknownElements){
                return ownerDocument.createDocumentFragment();
              }
              data = data || getExpandoData(ownerDocument);
              var clone = data.frag.cloneNode(),
              i = 0,
              elems = getElements(),
              l = elems.length;
              for(;i<l;i++){
                clone.createElement(elems[i]);
              }
              return clone;
            }
    
            /**
             * Shivs the `createElement` and `createDocumentFragment` methods of the document.
             * @private
             * @param {Document|DocumentFragment} ownerDocument The document.
             * @param {Object} data of the document.
             */
            function shivMethods(ownerDocument, data) {
              if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
              }
    
    
              ownerDocument.createElement = function(nodeName) {
                //abort shiv
                if (!html5.shivMethods) {
                  return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
              };
    
              ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                              'var n=f.cloneNode(),c=n.createElement;' +
                                                              'h.shivMethods&&(' +
                                                              // unroll the `createElement` calls
                                                              getElements().join().replace(/[\w\-]+/g, function(nodeName) {
                data.createElem(nodeName);
                data.frag.createElement(nodeName);
                return 'c("' + nodeName + '")';
              }) +
                ');return n}'
                                                             )(html5, data.frag);
            }
    
            /*--------------------------------------------------------------------------*/
    
            /**
             * Shivs the given document.
             * @memberOf html5
             * @param {Document} ownerDocument The document to shiv.
             * @returns {Document} The shived document.
             */
            function shivDocument(ownerDocument) {
              if (!ownerDocument) {
                ownerDocument = document;
              }
              var data = getExpandoData(ownerDocument);
    
              if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument,
                                              // corrects block display not defined in IE6/7/8/9
                                              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                // adds styling not present in IE6/7/8/9
                                                'mark{background:#FF0;color:#000}' +
                                                // hides non-rendered elements
                                                'template{display:none}'
                                             );
              }
              if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
              }
              return ownerDocument;
            }
    
            /*--------------------------------------------------------------------------*/
    
            /**
             * The `html5` object is exposed so that more elements can be shived and
             * existing shiving can be detected on iframes.
             * @type Object
             * @example
             *
             * // options can be changed before the script is included
             * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
             */
            var html5 = {
    
              /**
               * An array or space separated string of node names of the elements to shiv.
               * @memberOf html5
               * @type Array|String
               */
              'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
    
              /**
               * current version of html5shiv
               */
              'version': version,
    
              /**
               * A flag to indicate that the HTML5 style sheet should be inserted.
               * @memberOf html5
               * @type Boolean
               */
              'shivCSS': (options.shivCSS !== false),
    
              /**
               * Is equal to true if a browser supports creating unknown/HTML5 elements
               * @memberOf html5
               * @type boolean
               */
              'supportsUnknownElements': supportsUnknownElements,
    
              /**
               * A flag to indicate that the document's `createElement` and `createDocumentFragment`
               * methods should be overwritten.
               * @memberOf html5
               * @type Boolean
               */
              'shivMethods': (options.shivMethods !== false),
    
              /**
               * A string to describe the type of `html5` object ("default" or "default print").
               * @memberOf html5
               * @type String
               */
              'type': 'default',
    
              // shivs the document according to the specified `html5` object options
              'shivDocument': shivDocument,
    
              //creates a shived element
              createElement: createElement,
    
              //creates a shived documentFragment
              createDocumentFragment: createDocumentFragment
            };
    
            /*--------------------------------------------------------------------------*/
    
            // expose html5
            window.html5 = html5;
    
            // shiv the document
            shivDocument(document);
    
        }(this, document));
        /*>>shiv*/
    
        // Assign private properties to the return object with prefix
        Modernizr._version      = version;
    
        // expose these for the plugin API. Look in the source for how to join() them against your input
        /*>>prefixes*/
        Modernizr._prefixes     = prefixes;
        /*>>prefixes*/
        /*>>domprefixes*/
        Modernizr._domPrefixes  = domPrefixes;
        Modernizr._cssomPrefixes  = cssomPrefixes;
        /*>>domprefixes*/
    
        /*>>mq*/
        // Modernizr.mq tests a given media query, live against the current state of the window
        // A few important notes:
        //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
        //   * A max-width or orientation query will be evaluated against the current state, which may change later.
        //   * You must specify values. Eg. If you are testing support for the min-width media query use:
        //       Modernizr.mq('(min-width:0)')
        // usage:
        // Modernizr.mq('only screen and (max-width:768)')
        Modernizr.mq            = testMediaQuery;
        /*>>mq*/
    
        /*>>hasevent*/
        // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
        // Modernizr.hasEvent('gesturestart', elem)
        Modernizr.hasEvent      = isEventSupported;
        /*>>hasevent*/
    
        /*>>testprop*/
        // Modernizr.testProp() investigates whether a given style property is recognized
        // Note that the property names must be provided in the camelCase variant.
        // Modernizr.testProp('pointerEvents')
        Modernizr.testProp      = function(prop){
            return testProps([prop]);
        };
        /*>>testprop*/
    
        /*>>testallprops*/
        // Modernizr.testAllProps() investigates whether a given style property,
        //   or any of its vendor-prefixed variants, is recognized
        // Note that the property names must be provided in the camelCase variant.
        // Modernizr.testAllProps('boxSizing')
        Modernizr.testAllProps  = testPropsAll;
        /*>>testallprops*/
    
    
        /*>>teststyles*/
        // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
        // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
        Modernizr.testStyles    = injectElementWithStyles;
        /*>>teststyles*/
    
    
        /*>>prefixed*/
        // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
        // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'
    
        // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
        // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
        //
        //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
    
        // If you're trying to ascertain which transition end event to bind to, you might do something like...
        //
        //     var transEndEventNames = {
        //       'WebkitTransition' : 'webkitTransitionEnd',
        //       'MozTransition'    : 'transitionend',
        //       'OTransition'      : 'oTransitionEnd',
        //       'msTransition'     : 'MSTransitionEnd',
        //       'transition'       : 'transitionend'
        //     },
        //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
    
        Modernizr.prefixed      = function(prop, obj, elem){
          if(!obj) {
            return testPropsAll(prop, 'pfx');
          } else {
            // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
            return testPropsAll(prop, obj, elem);
          }
        };
        /*>>prefixed*/
    
    
        /*>>cssclasses*/
        // Remove "no-js" class from <html> element, if it exists:
        docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
    
                                // Add the new classes to the <html> element.
                                (enableClasses ? ' js ' + classes.join(' ') : '');
        /*>>cssclasses*/
    
        return Modernizr;
    
    })(this, this.document);
    ;
    (function (root, factory) {
      if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define([], function () {
          return (root['Chartist'] = factory());
        });
      } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
      } else {
        root['Chartist'] = factory();
      }
    }(this, function () {
    
    /* Chartist.js 0.9.4
     * Copyright © 2015 Gion Kunz
     * Free to use under the WTFPL license.
     * http://www.wtfpl.net/
     */
    /**
     * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
     *
     * @module Chartist.Core
     */
    var Chartist = {
      version: '0.9.4'
    };
    
    (function (window, document, Chartist) {
      'use strict';
    
      /**
       * Helps to simplify functional style code
       *
       * @memberof Chartist.Core
       * @param {*} n This exact value will be returned by the noop function
       * @return {*} The same value that was provided to the n parameter
       */
      Chartist.noop = function (n) {
        return n;
      };
    
      /**
       * Generates a-z from a number 0 to 26
       *
       * @memberof Chartist.Core
       * @param {Number} n A number from 0 to 26 that will result in a letter a-z
       * @return {String} A character from a-z based on the input number n
       */
      Chartist.alphaNumerate = function (n) {
        // Limit to a-z
        return String.fromCharCode(97 + n % 26);
      };
    
      /**
       * Simple recursive object extend
       *
       * @memberof Chartist.Core
       * @param {Object} target Target object where the source will be merged into
       * @param {Object...} sources This object (objects) will be merged into target and then target is returned
       * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
       */
      Chartist.extend = function (target) {
        target = target || {};
    
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          for (var prop in source) {
            if (typeof source[prop] === 'object' && source[prop] !== null && !(source[prop] instanceof Array)) {
              target[prop] = Chartist.extend({}, target[prop], source[prop]);
            } else {
              target[prop] = source[prop];
            }
          }
        });
    
        return target;
      };
    
      /**
       * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
       *
       * @memberof Chartist.Core
       * @param {String} str
       * @param {String} subStr
       * @param {String} newSubStr
       * @return {String}
       */
      Chartist.replaceAll = function(str, subStr, newSubStr) {
        return str.replace(new RegExp(subStr, 'g'), newSubStr);
      };
    
      /**
       * Converts a string to a number while removing the unit if present. If a number is passed then this will be returned unmodified.
       *
       * @memberof Chartist.Core
       * @param {String|Number} value
       * @return {Number} Returns the string as number or NaN if the passed length could not be converted to pixel
       */
      Chartist.stripUnit = function(value) {
        if(typeof value === 'string') {
          value = value.replace(/[^0-9\+-\.]/g, '');
        }
    
        return +value;
      };
    
      /**
       * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
       *
       * @memberof Chartist.Core
       * @param {Number} value
       * @param {String} unit
       * @return {String} Returns the passed number value with unit.
       */
      Chartist.ensureUnit = function(value, unit) {
        if(typeof value === 'number') {
          value = value + unit;
        }
    
        return value;
      };
    
      /**
       * This is a wrapper around document.querySelector that will return the query if it's already of type Node
       *
       * @memberof Chartist.Core
       * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
       * @return {Node}
       */
      Chartist.querySelector = function(query) {
        return query instanceof Node ? query : document.querySelector(query);
      };
    
      /**
       * Functional style helper to produce array with given length initialized with undefined values
       *
       * @memberof Chartist.Core
       * @param length
       * @return {Array}
       */
      Chartist.times = function(length) {
        return Array.apply(null, new Array(length));
      };
    
      /**
       * Sum helper to be used in reduce functions
       *
       * @memberof Chartist.Core
       * @param previous
       * @param current
       * @return {*}
       */
      Chartist.sum = function(previous, current) {
        return previous + (current ? current : 0);
      };
    
      /**
       * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
       *
       * @memberof Chartist.Core
       * @param {Number} factor
       * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
       */
      Chartist.mapMultiply = function(factor) {
        return function(num) {
          return num * factor;
        };
      };
    
      /**
       * Add helper to be used in `Array.map` for adding a addend to each value of an array.
       *
       * @memberof Chartist.Core
       * @param {Number} addend
       * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
       */
      Chartist.mapAdd = function(addend) {
        return function(num) {
          return num + addend;
        };
      };
    
      /**
       * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
       *
       * @memberof Chartist.Core
       * @param arr
       * @param cb
       * @return {Array}
       */
      Chartist.serialMap = function(arr, cb) {
        var result = [],
            length = Math.max.apply(null, arr.map(function(e) {
              return e.length;
            }));
    
        Chartist.times(length).forEach(function(e, index) {
          var args = arr.map(function(e) {
            return e[index];
          });
    
          result[index] = cb.apply(null, args);
        });
    
        return result;
      };
    
      /**
       * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
       *
       * @memberof Chartist.Core
       * @param {Number} value The value that should be rounded with precision
       * @param {Number} [digits] The number of digits after decimal used to do the rounding
       * @returns {number} Rounded value
       */
      Chartist.roundWithPrecision = function(value, digits) {
        var precision = Math.pow(10, digits || Chartist.precision);
        return Math.round(value * precision) / precision;
      };
    
      /**
       * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
       *
       * @memberof Chartist.Core
       * @type {number}
       */
      Chartist.precision = 8;
    
      /**
       * A map with characters to escape for strings to be safely used as attribute values.
       *
       * @memberof Chartist.Core
       * @type {Object}
       */
      Chartist.escapingMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#039;'
      };
    
      /**
       * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
       * If called with null or undefined the function will return immediately with null or undefined.
       *
       * @memberof Chartist.Core
       * @param {Number|String|Object} data
       * @return {String}
       */
      Chartist.serialize = function(data) {
        if(data === null || data === undefined) {
          return data;
        } else if(typeof data === 'number') {
          data = ''+data;
        } else if(typeof data === 'object') {
          data = JSON.stringify({data: data});
        }
    
        return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
          return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
        }, data);
      };
    
      /**
       * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
       *
       * @memberof Chartist.Core
       * @param {String} data
       * @return {String|Number|Object}
       */
      Chartist.deserialize = function(data) {
        if(typeof data !== 'string') {
          return data;
        }
    
        data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
          return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
        }, data);
    
        try {
          data = JSON.parse(data);
          data = data.data !== undefined ? data.data : data;
        } catch(e) {}
    
        return data;
      };
    
      /**
       * Create or reinitialize the SVG element for the chart
       *
       * @memberof Chartist.Core
       * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
       * @param {String} width Set the width of the SVG element. Default is 100%
       * @param {String} height Set the height of the SVG element. Default is 100%
       * @param {String} className Specify a class to be added to the SVG element
       * @return {Object} The created/reinitialized SVG element
       */
      Chartist.createSvg = function (container, width, height, className) {
        var svg;
    
        width = width || '100%';
        height = height || '100%';
    
        // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
        // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
        Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
          return svg.getAttributeNS('http://www.w3.org/2000/xmlns/', Chartist.xmlNs.prefix);
        }).forEach(function removePreviousElement(svg) {
          container.removeChild(svg);
        });
    
        // Create svg object with width and height or use 100% as default
        svg = new Chartist.Svg('svg').attr({
          width: width,
          height: height
        }).addClass(className).attr({
          style: 'width: ' + width + '; height: ' + height + ';'
        });
    
        // Add the DOM node to our container
        container.appendChild(svg._node);
    
        return svg;
      };
    
    
      /**
       * Reverses the series, labels and series data arrays.
       *
       * @memberof Chartist.Core
       * @param data
       */
      Chartist.reverseData = function(data) {
        data.labels.reverse();
        data.series.reverse();
        for (var i = 0; i < data.series.length; i++) {
          if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
            data.series[i].data.reverse();
          } else if(data.series[i] instanceof Array) {
            data.series[i].reverse();
          }
        }
      };
    
      /**
       * Convert data series into plain array
       *
       * @memberof Chartist.Core
       * @param {Object} data The series object that contains the data to be visualized in the chart
       * @param {Boolean} reverse If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
       * @param {Boolean} multi Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
       * @return {Array} A plain array that contains the data to be visualized in the chart
       */
      Chartist.getDataArray = function (data, reverse, multi) {
        // If the data should be reversed but isn't we need to reverse it
        // If it's reversed but it shouldn't we need to reverse it back
        // That's required to handle data updates correctly and to reflect the responsive configurations
        if(reverse && !data.reversed || !reverse && data.reversed) {
          Chartist.reverseData(data);
          data.reversed = !data.reversed;
        }
    
        // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
        // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
        function recursiveConvert(value) {
          if(Chartist.isFalseyButZero(value)) {
            // This is a hole in data and we should return undefined
            return undefined;
          } else if((value.data || value) instanceof Array) {
            return (value.data || value).map(recursiveConvert);
          } else if(value.hasOwnProperty('value')) {
            return recursiveConvert(value.value);
          } else {
            if(multi) {
              var multiValue = {};
    
              // Single series value arrays are assumed to specify the Y-Axis value
              // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
              // If multi is a string then it's assumed that it specified which dimension should be filled as default
              if(typeof multi === 'string') {
                multiValue[multi] = Chartist.getNumberOrUndefined(value);
              } else {
                multiValue.y = Chartist.getNumberOrUndefined(value);
              }
    
              multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
              multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
    
              return multiValue;
    
            } else {
              return Chartist.getNumberOrUndefined(value);
            }
          }
        }
    
        return data.series.map(recursiveConvert);
      };
    
      /**
       * Converts a number into a padding object.
       *
       * @memberof Chartist.Core
       * @param {Object|Number} padding
       * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
       * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
       */
      Chartist.normalizePadding = function(padding, fallback) {
        fallback = fallback || 0;
    
        return typeof padding === 'number' ? {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        } : {
          top: typeof padding.top === 'number' ? padding.top : fallback,
          right: typeof padding.right === 'number' ? padding.right : fallback,
          bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
          left: typeof padding.left === 'number' ? padding.left : fallback
        };
      };
    
      Chartist.getMetaData = function(series, index) {
        var value = series.data ? series.data[index] : series[index];
        return value ? Chartist.serialize(value.meta) : undefined;
      };
    
      /**
       * Calculate the order of magnitude for the chart scale
       *
       * @memberof Chartist.Core
       * @param {Number} value The value Range of the chart
       * @return {Number} The order of magnitude
       */
      Chartist.orderOfMagnitude = function (value) {
        return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
      };
    
      /**
       * Project a data length into screen coordinates (pixels)
       *
       * @memberof Chartist.Core
       * @param {Object} axisLength The svg element for the chart
       * @param {Number} length Single data value from a series array
       * @param {Object} bounds All the values to set the bounds of the chart
       * @return {Number} The projected data length in pixels
       */
      Chartist.projectLength = function (axisLength, length, bounds) {
        return length / bounds.range * axisLength;
      };
    
      /**
       * Get the height of the area in the chart for the data series
       *
       * @memberof Chartist.Core
       * @param {Object} svg The svg element for the chart
       * @param {Object} options The Object that contains all the optional values for the chart
       * @return {Number} The height of the area in the chart for the data series
       */
      Chartist.getAvailableHeight = function (svg, options) {
        return Math.max((Chartist.stripUnit(options.height) || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
      };
    
      /**
       * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
       *
       * @memberof Chartist.Core
       * @param {Array} data The array that contains the data to be visualized in the chart
       * @param {Object} options The Object that contains the chart options
       * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
       * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
       */
      Chartist.getHighLow = function (data, options, dimension) {
        // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
        options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
    
        var highLow = {
            high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
            low: options.low === undefined ? Number.MAX_VALUE : +options.low
          };
        var findHigh = options.high === undefined;
        var findLow = options.low === undefined;
    
        // Function to recursively walk through arrays and find highest and lowest number
        function recursiveHighLow(data) {
          if(data === undefined) {
            return undefined;
          } else if(data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
              recursiveHighLow(data[i]);
            }
          } else {
            var value = dimension ? +data[dimension] : +data;
    
            if (findHigh && value > highLow.high) {
              highLow.high = value;
            }
    
            if (findLow && value < highLow.low) {
              highLow.low = value;
            }
          }
        }
    
        // Start to find highest and lowest number recursively
        if(findHigh || findLow) {
          recursiveHighLow(data);
        }
    
        // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
        // used to generate the chart. This is useful when the chart always needs to contain the position of the
        // invisible reference value in the view i.e. for bipolar scales.
        if (options.referenceValue || options.referenceValue === 0) {
          highLow.high = Math.max(options.referenceValue, highLow.high);
          highLow.low = Math.min(options.referenceValue, highLow.low);
        }
    
        // If high and low are the same because of misconfiguration or flat data (only the same value) we need
        // to set the high or low to 0 depending on the polarity
        if (highLow.high <= highLow.low) {
          // If both values are 0 we set high to 1
          if (highLow.low === 0) {
            highLow.high = 1;
          } else if (highLow.low < 0) {
            // If we have the same negative value for the bounds we set bounds.high to 0
            highLow.high = 0;
          } else {
            // If we have the same positive value for the bounds we set bounds.low to 0
            highLow.low = 0;
          }
        }
    
        return highLow;
      };
    
      /**
       * Checks if the value is a valid number or string with a number.
       *
       * @memberof Chartist.Core
       * @param value
       * @returns {Boolean}
       */
      Chartist.isNum = function(value) {
        return !isNaN(value) && isFinite(value);
      };
    
      /**
       * Returns true on all falsey values except the numeric value 0.
       *
       * @memberof Chartist.Core
       * @param value
       * @returns {boolean}
       */
      Chartist.isFalseyButZero = function(value) {
        return !value && value !== 0;
      };
    
      /**
       * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
       *
       * @memberof Chartist.Core
       * @param value
       * @returns {*}
       */
      Chartist.getNumberOrUndefined = function(value) {
        return isNaN(+value) ? undefined : +value;
      };
    
      /**
       * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return undefined.
       *
       * @param value
       * @param dimension
       * @returns {*}
       */
      Chartist.getMultiValue = function(value, dimension) {
        if(Chartist.isNum(value)) {
          return +value;
        } else if(value) {
          return value[dimension || 'y'] || 0;
        } else {
          return 0;
        }
      };
    
      /**
       * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
       *
       * @memberof Chartist.Core
       * @param {Number} num An integer number where the smallest factor should be searched for
       * @returns {Number} The smallest integer factor of the parameter num.
       */
      Chartist.rho = function(num) {
        if(num === 1) {
          return num;
        }
    
        function gcd(p, q) {
          if (p % q === 0) {
            return q;
          } else {
            return gcd(q, p % q);
          }
        }
    
        function f(x) {
          return x * x + 1;
        }
    
        var x1 = 2, x2 = 2, divisor;
        if (num % 2 === 0) {
          return 2;
        }
    
        do {
          x1 = f(x1) % num;
          x2 = f(f(x2)) % num;
          divisor = gcd(Math.abs(x1 - x2), num);
        } while (divisor === 1);
    
        return divisor;
      };
    
      /**
       * Calculate and retrieve all the bounds for the chart and return them in one array
       *
       * @memberof Chartist.Core
       * @param {Number} axisLength The length of the Axis used for
       * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
       * @param {Number} scaleMinSpace The minimum projected length a step should result in
       * @param {Boolean} onlyInteger
       * @return {Object} All the values to set the bounds of the chart
       */
      Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
        var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
            high: highLow.high,
            low: highLow.low
          };
    
        bounds.valueRange = bounds.high - bounds.low;
        bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
        bounds.step = Math.pow(10, bounds.oom);
        bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
        bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
        bounds.range = bounds.max - bounds.min;
        bounds.numberOfSteps = Math.round(bounds.range / bounds.step);
    
        // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
        // If we are already below the scaleMinSpace value we will scale up
        var length = Chartist.projectLength(axisLength, bounds.step, bounds);
        var scaleUp = length < scaleMinSpace;
        var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;
    
        // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
        if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
          bounds.step = 1;
        } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
          // If step 1 was too small, we can try the smallest factor of range
          // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
          // is larger than the scaleMinSpace we should go for it.
          bounds.step = smallestFactor;
        } else {
          // Trying to divide or multiply by 2 and find the best step value
          while (true) {
            if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
              bounds.step *= 2;
            } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
              bounds.step /= 2;
              if(onlyInteger && bounds.step % 1 !== 0) {
                bounds.step *= 2;
                break;
              }
            } else {
              break;
            }
    
            if(optimizationCounter++ > 1000) {
              throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
            }
          }
        }
    
        // Narrow min and max based on new step
        newMin = bounds.min;
        newMax = bounds.max;
        while(newMin + bounds.step <= bounds.low) {
          newMin += bounds.step;
        }
        while(newMax - bounds.step >= bounds.high) {
          newMax -= bounds.step;
        }
        bounds.min = newMin;
        bounds.max = newMax;
        bounds.range = bounds.max - bounds.min;
    
        bounds.values = [];
        for (i = bounds.min; i <= bounds.max; i += bounds.step) {
          bounds.values.push(Chartist.roundWithPrecision(i));
        }
    
        return bounds;
      };
    
      /**
       * Calculate cartesian coordinates of polar coordinates
       *
       * @memberof Chartist.Core
       * @param {Number} centerX X-axis coordinates of center point of circle segment
       * @param {Number} centerY X-axis coordinates of center point of circle segment
       * @param {Number} radius Radius of circle segment
       * @param {Number} angleInDegrees Angle of circle segment in degrees
       * @return {Number} Coordinates of point on circumference
       */
      Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
      };
    
      /**
       * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
       *
       * @memberof Chartist.Core
       * @param {Object} svg The svg element for the chart
       * @param {Object} options The Object that contains all the optional values for the chart
       * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
       * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
       */
      Chartist.createChartRect = function (svg, options, fallbackPadding) {
        var hasAxis = !!(options.axisX || options.axisY);
        var yAxisOffset = hasAxis ? options.axisY.offset : 0;
        var xAxisOffset = hasAxis ? options.axisX.offset : 0;
        // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
        var width = svg.width() || Chartist.stripUnit(options.width) || 0;
        var height = svg.height() || Chartist.stripUnit(options.height) || 0;
        var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);
    
        // If settings were to small to cope with offset (legacy) and padding, we'll adjust
        width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
        height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
    
        var chartRect = {
          padding: normalizedPadding,
          width: function () {
            return this.x2 - this.x1;
          },
          height: function () {
            return this.y1 - this.y2;
          }
        };
    
        if(hasAxis) {
          if (options.axisX.position === 'start') {
            chartRect.y2 = normalizedPadding.top + xAxisOffset;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
          } else {
            chartRect.y2 = normalizedPadding.top;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
          }
    
          if (options.axisY.position === 'start') {
            chartRect.x1 = normalizedPadding.left + yAxisOffset;
            chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
          } else {
            chartRect.x1 = normalizedPadding.left;
            chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
          }
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        }
    
        return chartRect;
      };
    
      /**
       * Creates a grid line based on a projected value.
       *
       * @memberof Chartist.Core
       * @param position
       * @param index
       * @param axis
       * @param offset
       * @param length
       * @param group
       * @param classes
       * @param eventEmitter
       */
      Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
        var positionalData = {};
        positionalData[axis.units.pos + '1'] = position;
        positionalData[axis.units.pos + '2'] = position;
        positionalData[axis.counterUnits.pos + '1'] = offset;
        positionalData[axis.counterUnits.pos + '2'] = offset + length;
    
        var gridElement = group.elem('line', positionalData, classes.join(' '));
    
        // Event for grid draw
        eventEmitter.emit('draw',
          Chartist.extend({
            type: 'grid',
            axis: axis,
            index: index,
            group: group,
            element: gridElement
          }, positionalData)
        );
      };
    
      /**
       * Creates a label based on a projected value and an axis.
       *
       * @memberof Chartist.Core
       * @param position
       * @param length
       * @param index
       * @param labels
       * @param axis
       * @param axisOffset
       * @param labelOffset
       * @param group
       * @param classes
       * @param useForeignObject
       * @param eventEmitter
       */
      Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
        var labelElement;
        var positionalData = {};
    
        positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
        positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
        positionalData[axis.units.len] = length;
        positionalData[axis.counterUnits.len] = axisOffset - 10;
    
        if(useForeignObject) {
          // We need to set width and height explicitly to px as span will not expand with width and height being
          // 100% in all browsers
          var content = '<span class="' + classes.join(' ') + '" style="' +
            axis.units.len + ': ' + Math.round(positionalData[axis.units.len]) + 'px; ' +
            axis.counterUnits.len + ': ' + Math.round(positionalData[axis.counterUnits.len]) + 'px">' +
            labels[index] + '</span>';
    
          labelElement = group.foreignObject(content, Chartist.extend({
            style: 'overflow: visible;'
          }, positionalData));
        } else {
          labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
        }
    
        eventEmitter.emit('draw', Chartist.extend({
          type: 'label',
          axis: axis,
          index: index,
          group: group,
          element: labelElement,
          text: labels[index]
        }, positionalData));
      };
    
      /**
       * Helper to read series specific options from options object. It automatically falls back to the global option if
       * there is no option in the series options.
       *
       * @param {Object} series Series object
       * @param {Object} options Chartist options object
       * @param {string} key The options key that should be used to obtain the options
       * @returns {*}
       */
      Chartist.getSeriesOption = function(series, options, key) {
        if(series.name && options.series && options.series[series.name]) {
          var seriesOptions = options.series[series.name];
          return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
        } else {
          return options[key];
        }
      };
    
      /**
       * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
       *
       * @memberof Chartist.Core
       * @param {Object} options Options set by user
       * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
       * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
       * @return {Object} The consolidated options object from the defaults, base and matching responsive options
       */
      Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
        var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;
    
        function updateCurrentOptions(preventChangedEvent) {
          var previousOptions = currentOptions;
          currentOptions = Chartist.extend({}, baseOptions);
    
          if (responsiveOptions) {
            for (i = 0; i < responsiveOptions.length; i++) {
              var mql = window.matchMedia(responsiveOptions[i][0]);
              if (mql.matches) {
                currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
              }
            }
          }
    
          if(eventEmitter && !preventChangedEvent) {
            eventEmitter.emit('optionsChanged', {
              previousOptions: previousOptions,
              currentOptions: currentOptions
            });
          }
        }
    
        function removeMediaQueryListeners() {
          mediaQueryListeners.forEach(function(mql) {
            mql.removeListener(updateCurrentOptions);
          });
        }
    
        if (!window.matchMedia) {
          throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
        } else if (responsiveOptions) {
    
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);
            mql.addListener(updateCurrentOptions);
            mediaQueryListeners.push(mql);
          }
        }
        // Execute initially so we get the correct options
        updateCurrentOptions(true);
    
        return {
          removeMediaQueryListeners: removeMediaQueryListeners,
          getCurrentOptions: function getCurrentOptions() {
            return Chartist.extend({}, currentOptions);
          }
        };
      };
    
    }(window, document, Chartist));
    ;/**
     * Chartist path interpolation functions.
     *
     * @module Chartist.Interpolation
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      Chartist.Interpolation = {};
    
      /**
       * This interpolation function does not smooth the path and the result is only containing lines and no curves.
       *
       * @memberof Chartist.Interpolation
       * @return {Function}
       */
      Chartist.Interpolation.none = function() {
        return function none(pathCoordinates, valueData) {
          var path = new Chartist.Svg.Path();
          // We need to assume that the first value is a "hole"
          var hole = true;
    
          for(var i = 1; i < pathCoordinates.length; i += 2) {
            var data = valueData[(i - 1) / 2];
    
            // If the current value is undefined we should treat it as a hole start
            if(data.value === undefined) {
              hole = true;
            } else {
              // If this value is valid we need to check if we're coming out of a hole
              if(hole) {
                // If we are coming out of a hole we should first make a move and also reset the hole flag
                path.move(pathCoordinates[i - 1], pathCoordinates[i], false, data);
                hole = false;
              } else {
                path.line(pathCoordinates[i - 1], pathCoordinates[i], false, data);
              }
            }
          }
    
          return path;
        };
      };
    
      /**
       * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
       *
       * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
       *
       * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
       *
       * @example
       * var chart = new Chartist.Line('.ct-chart', {
       *   labels: [1, 2, 3, 4, 5],
       *   series: [[1, 2, 8, 1, 7]]
       * }, {
       *   lineSmooth: Chartist.Interpolation.simple({
       *     divisor: 2
       *   })
       * });
       *
       *
       * @memberof Chartist.Interpolation
       * @param {Object} options The options of the simple interpolation factory function.
       * @return {Function}
       */
      Chartist.Interpolation.simple = function(options) {
        var defaultOptions = {
          divisor: 2
        };
        options = Chartist.extend({}, defaultOptions, options);
    
        var d = 1 / Math.max(1, options.divisor);
    
        return function simple(pathCoordinates, valueData) {
          var path = new Chartist.Svg.Path();
          var hole = true;
    
          for(var i = 2; i < pathCoordinates.length; i += 2) {
            var prevX = pathCoordinates[i - 2];
            var prevY = pathCoordinates[i - 1];
            var currX = pathCoordinates[i];
            var currY = pathCoordinates[i + 1];
            var length = (currX - prevX) * d;
            var prevData = valueData[(i / 2) - 1];
            var currData = valueData[i / 2];
    
            if(prevData.value === undefined) {
              hole = true;
            } else {
    
              if(hole) {
                path.move(prevX, prevY, false, prevData);
              }
    
              if(currData.value !== undefined) {
                path.curve(
                  prevX + length,
                  prevY,
                  currX - length,
                  currY,
                  currX,
                  currY,
                  false,
                  currData
                );
    
                hole = false;
              }
            }
          }
    
          return path;
        };
      };
    
      /**
       * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
       *
       * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
       *
       * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
       *
       * @example
       * var chart = new Chartist.Line('.ct-chart', {
       *   labels: [1, 2, 3, 4, 5],
       *   series: [[1, 2, 8, 1, 7]]
       * }, {
       *   lineSmooth: Chartist.Interpolation.cardinal({
       *     tension: 1
       *   })
       * });
       *
       * @memberof Chartist.Interpolation
       * @param {Object} options The options of the cardinal factory function.
       * @return {Function}
       */
      Chartist.Interpolation.cardinal = function(options) {
        var defaultOptions = {
          tension: 1
        };
    
        options = Chartist.extend({}, defaultOptions, options);
    
        var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
    
        // This function will help us to split pathCoordinates and valueData into segments that also contain pathCoordinates
        // and valueData. This way the existing functions can be reused and the segment paths can be joined afterwards.
        // This functionality is necessary to treat "holes" in the line charts
        function splitIntoSegments(pathCoordinates, valueData) {
          var segments = [];
          var hole = true;
    
          for(var i = 0; i < pathCoordinates.length; i += 2) {
            // If this value is a "hole" we set the hole flag
            if(valueData[i / 2].value === undefined) {
              hole = true;
            } else {
              // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
              if(hole) {
                segments.push({
                  pathCoordinates: [],
                  valueData: []
                });
                // As we have a valid value now, we are not in a "hole" anymore
                hole = false;
              }
    
              // Add to the segment pathCoordinates and valueData
              segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
              segments[segments.length - 1].valueData.push(valueData[i / 2]);
            }
          }
    
          return segments;
        }
    
        return function cardinal(pathCoordinates, valueData) {
          // First we try to split the coordinates into segments
          // This is necessary to treat "holes" in line charts
          var segments = splitIntoSegments(pathCoordinates, valueData);
    
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          if(segments.length > 1) {
            var paths = [];
            // For each segment we will recurse the cardinal function
            segments.forEach(function(segment) {
              paths.push(cardinal(segment.pathCoordinates, segment.valueData));
            });
            // Join the segment path data into a single path and return
            return Chartist.Svg.Path.join(paths);
          } else {
            // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
            // segment
            pathCoordinates = segments[0].pathCoordinates;
            valueData = segments[0].valueData;
    
            // If less than two points we need to fallback to no smoothing
            if(pathCoordinates.length <= 4) {
              return Chartist.Interpolation.none()(pathCoordinates, valueData);
            }
    
            var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;
    
            for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
              var p = [
                {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
                {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
                {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
                {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
              ];
              if (z) {
                if (!i) {
                  p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
                } else if (iLen - 4 === i) {
                  p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
                } else if (iLen - 2 === i) {
                  p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
                  p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
                }
              } else {
                if (iLen - 4 === i) {
                  p[3] = p[2];
                } else if (!i) {
                  p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
                }
              }
    
              path.curve(
                (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
                (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
                (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
                (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
                p[2].x,
                p[2].y,
                false,
                valueData[(i + 2) / 2]
              );
            }
    
            return path;
          }
        };
      };
    
      /**
       * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
       *
       * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
       *
       * @example
       * var chart = new Chartist.Line('.ct-chart', {
       *   labels: [1, 2, 3, 4, 5],
       *   series: [[1, 2, 8, 1, 7]]
       * }, {
       *   lineSmooth: Chartist.Interpolation.step({
       *     postpone: true
       *   })
       * });
       *
       * @memberof Chartist.Interpolation
       * @param options
       * @returns {Function}
       */
      Chartist.Interpolation.step = function(options) {
        var defaultOptions = {
          postpone: true
        };
    
        options = Chartist.extend({}, defaultOptions, options);
    
        return function step(pathCoordinates, valueData) {
          var path = new Chartist.Svg.Path();
          var hole = true;
    
          for (var i = 2; i < pathCoordinates.length; i += 2) {
            var prevX = pathCoordinates[i - 2];
            var prevY = pathCoordinates[i - 1];
            var currX = pathCoordinates[i];
            var currY = pathCoordinates[i + 1];
            var prevData = valueData[(i / 2) - 1];
            var currData = valueData[i / 2];
    
            // If last point is a "hole"
            if(prevData.value === undefined) {
              hole = true;
            } else {
              // If last point is not a "hole" but we just came back out of a "hole" we need to move first
              if(hole) {
                path.move(prevX, prevY, false, prevData);
              }
    
              // If the current point is also not a hole we can draw the step lines
              if(currData.value !== undefined) {
                if(options.postpone) {
                  // If postponed we should draw the step line with the value of the previous value
                  path.line(currX, prevY, false, prevData);
                } else {
                  // If not postponed we should draw the step line with the value of the current value
                  path.line(prevX, currY, false, currData);
                }
                // Line to the actual point (this should only be a Y-Axis movement
                path.line(currX, currY, false, currData);
                // Reset the "hole" flag as previous and current point have valid values
                hole = false;
              }
            }
          }
    
          return path;
        };
      };
    
    }(window, document, Chartist));
    ;/**
     * A very basic event module that helps to generate and catch events.
     *
     * @module Chartist.Event
     */
    /* global Chartist */
    (function (window, document, Chartist) {
      'use strict';
    
      Chartist.EventEmitter = function () {
        var handlers = [];
    
        /**
         * Add an event handler for a specific event
         *
         * @memberof Chartist.Event
         * @param {String} event The event name
         * @param {Function} handler A event handler function
         */
        function addEventHandler(event, handler) {
          handlers[event] = handlers[event] || [];
          handlers[event].push(handler);
        }
    
        /**
         * Remove an event handler of a specific event name or remove all event handlers for a specific event.
         *
         * @memberof Chartist.Event
         * @param {String} event The event name where a specific or all handlers should be removed
         * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
         */
        function removeEventHandler(event, handler) {
          // Only do something if there are event handlers with this name existing
          if(handlers[event]) {
            // If handler is set we will look for a specific handler and only remove this
            if(handler) {
              handlers[event].splice(handlers[event].indexOf(handler), 1);
              if(handlers[event].length === 0) {
                delete handlers[event];
              }
            } else {
              // If no handler is specified we remove all handlers for this event
              delete handlers[event];
            }
          }
        }
    
        /**
         * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
         *
         * @memberof Chartist.Event
         * @param {String} event The event name that should be triggered
         * @param {*} data Arbitrary data that will be passed to the event handler callback functions
         */
        function emit(event, data) {
          // Only do something if there are event handlers with this name existing
          if(handlers[event]) {
            handlers[event].forEach(function(handler) {
              handler(data);
            });
          }
    
          // Emit event to star event handlers
          if(handlers['*']) {
            handlers['*'].forEach(function(starHandler) {
              starHandler(event, data);
            });
          }
        }
    
        return {
          addEventHandler: addEventHandler,
          removeEventHandler: removeEventHandler,
          emit: emit
        };
      };
    
    }(window, document, Chartist));
    ;/**
     * This module provides some basic prototype inheritance utilities.
     *
     * @module Chartist.Class
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      function listToArray(list) {
        var arr = [];
        if (list.length) {
          for (var i = 0; i < list.length; i++) {
            arr.push(list[i]);
          }
        }
        return arr;
      }
    
      /**
       * Method to extend from current prototype.
       *
       * @memberof Chartist.Class
       * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
       * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
       * @return {Function} Constructor function of the new class
       *
       * @example
       * var Fruit = Class.extend({
         * color: undefined,
         *   sugar: undefined,
         *
         *   constructor: function(color, sugar) {
         *     this.color = color;
         *     this.sugar = sugar;
         *   },
         *
         *   eat: function() {
         *     this.sugar = 0;
         *     return this;
         *   }
         * });
       *
       * var Banana = Fruit.extend({
         *   length: undefined,
         *
         *   constructor: function(length, sugar) {
         *     Banana.super.constructor.call(this, 'Yellow', sugar);
         *     this.length = length;
         *   }
         * });
       *
       * var banana = new Banana(20, 40);
       * console.log('banana instanceof Fruit', banana instanceof Fruit);
       * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
       * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
       * console.log(banana.sugar);
       * console.log(banana.eat().sugar);
       * console.log(banana.color);
       */
      function extend(properties, superProtoOverride) {
        var superProto = superProtoOverride || this.prototype || Chartist.Class;
        var proto = Object.create(superProto);
    
        Chartist.Class.cloneDefinitions(proto, properties);
    
        var constr = function() {
          var fn = proto.constructor || function () {},
            instance;
    
          // If this is linked to the Chartist namespace the constructor was not called with new
          // To provide a fallback we will instantiate here and return the instance
          instance = this === Chartist ? Object.create(proto) : this;
          fn.apply(instance, Array.prototype.slice.call(arguments, 0));
    
          // If this constructor was not called with new we need to return the instance
          // This will not harm when the constructor has been called with new as the returned value is ignored
          return instance;
        };
    
        constr.prototype = proto;
        constr.super = superProto;
        constr.extend = this.extend;
    
        return constr;
      }
    
      // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
      function cloneDefinitions() {
        var args = listToArray(arguments);
        var target = args[0];
    
        args.splice(1, args.length - 1).forEach(function (source) {
          Object.getOwnPropertyNames(source).forEach(function (propName) {
            // If this property already exist in target we delete it first
            delete target[propName];
            // Define the property with the descriptor from source
            Object.defineProperty(target, propName,
              Object.getOwnPropertyDescriptor(source, propName));
          });
        });
    
        return target;
      }
    
      Chartist.Class = {
        extend: extend,
        cloneDefinitions: cloneDefinitions
      };
    
    }(window, document, Chartist));
    ;/**
     * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
     *
     * @module Chartist.Base
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
      // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
      // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
      // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
      // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
      // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
      /**
       * Updates the chart which currently does a full reconstruction of the SVG DOM
       *
       * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
       * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
       * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
       * @memberof Chartist.Base
       */
      function update(data, options, override) {
        if(data) {
          this.data = data;
          // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
          this.eventEmitter.emit('data', {
            type: 'update',
            data: this.data
          });
        }
    
        if(options) {
          this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);
    
          // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
          // Otherwise we re-create the optionsProvider at this point
          if(!this.initializeTimeoutId) {
            this.optionsProvider.removeMediaQueryListeners();
            this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
          }
        }
    
        // Only re-created the chart if it has been initialized yet
        if(!this.initializeTimeoutId) {
          this.createChart(this.optionsProvider.getCurrentOptions());
        }
    
        // Return a reference to the chart object to chain up calls
        return this;
      }
    
      /**
       * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
       *
       * @memberof Chartist.Base
       */
      function detach() {
        // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
        // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
        if(!this.initializeTimeoutId) {
          window.removeEventListener('resize', this.resizeListener);
          this.optionsProvider.removeMediaQueryListeners();
        } else {
          window.clearTimeout(this.initializeTimeoutId);
        }
    
        return this;
      }
    
      /**
       * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
       *
       * @memberof Chartist.Base
       * @param {String} event Name of the event. Check the examples for supported events.
       * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
       */
      function on(event, handler) {
        this.eventEmitter.addEventHandler(event, handler);
        return this;
      }
    
      /**
       * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
       *
       * @memberof Chartist.Base
       * @param {String} event Name of the event for which a handler should be removed
       * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
       */
      function off(event, handler) {
        this.eventEmitter.removeEventHandler(event, handler);
        return this;
      }
    
      function initialize() {
        // Add window resize listener that re-creates the chart
        window.addEventListener('resize', this.resizeListener);
    
        // Obtain current options based on matching media queries (if responsive options are given)
        // This will also register a listener that is re-creating the chart based on media changes
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        // Register options change listener that will trigger a chart update
        this.eventEmitter.addEventHandler('optionsChanged', function() {
          this.update();
        }.bind(this));
    
        // Before the first chart creation we need to register us with all plugins that are configured
        // Initialize all relevant plugins with our chart object and the plugin options specified in the config
        if(this.options.plugins) {
          this.options.plugins.forEach(function(plugin) {
            if(plugin instanceof Array) {
              plugin[0](this, plugin[1]);
            } else {
              plugin(this);
            }
          }.bind(this));
        }
    
        // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
        this.eventEmitter.emit('data', {
          type: 'initial',
          data: this.data
        });
    
        // Create the first chart
        this.createChart(this.optionsProvider.getCurrentOptions());
    
        // As chart is initialized from the event loop now we can reset our timeout reference
        // This is important if the chart gets initialized on the same element twice
        this.initializeTimeoutId = undefined;
      }
    
      /**
       * Constructor of chart base class.
       *
       * @param query
       * @param data
       * @param defaultOptions
       * @param options
       * @param responsiveOptions
       * @constructor
       */
      function Base(query, data, defaultOptions, options, responsiveOptions) {
        this.container = Chartist.querySelector(query);
        this.data = data;
        this.defaultOptions = defaultOptions;
        this.options = options;
        this.responsiveOptions = responsiveOptions;
        this.eventEmitter = Chartist.EventEmitter();
        this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
        this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
        this.resizeListener = function resizeListener(){
          this.update();
        }.bind(this);
    
        if(this.container) {
          // If chartist was already initialized in this container we are detaching all event listeners first
          if(this.container.__chartist__) {
            this.container.__chartist__.detach();
          }
    
          this.container.__chartist__ = this;
        }
    
        // Using event loop for first draw to make it possible to register event listeners in the same call stack where
        // the chart was created.
        this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
      }
    
      // Creating the chart base class
      Chartist.Base = Chartist.Class.extend({
        constructor: Base,
        optionsProvider: undefined,
        container: undefined,
        svg: undefined,
        eventEmitter: undefined,
        createChart: function() {
          throw new Error('Base chart type can\'t be instantiated!');
        },
        update: update,
        detach: detach,
        on: on,
        off: off,
        version: Chartist.version,
        supportsForeignObject: false
      });
    
    }(window, document, Chartist));
    ;/**
     * Chartist SVG module for simple SVG DOM abstraction
     *
     * @module Chartist.Svg
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      var svgNs = 'http://www.w3.org/2000/svg',
        xmlNs = 'http://www.w3.org/2000/xmlns/',
        xhtmlNs = 'http://www.w3.org/1999/xhtml';
    
      Chartist.xmlNs = {
        qualifiedName: 'xmlns:ct',
        prefix: 'ct',
        uri: 'http://gionkunz.github.com/chartist-js/ct'
      };
    
      /**
       * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
       *
       * @memberof Chartist.Svg
       * @constructor
       * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
       * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
       * @param {String} className This class or class list will be added to the SVG element
       * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
       * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
       */
      function Svg(name, attributes, className, parent, insertFirst) {
        // If Svg is getting called with an SVG element we just return the wrapper
        if(name instanceof Element) {
          this._node = name;
        } else {
          this._node = document.createElementNS(svgNs, name);
    
          // If this is an SVG element created then custom namespace
          if(name === 'svg') {
            this._node.setAttributeNS(xmlNs, Chartist.xmlNs.qualifiedName, Chartist.xmlNs.uri);
          }
        }
    
        if(attributes) {
          this.attr(attributes);
        }
    
        if(className) {
          this.addClass(className);
        }
    
        if(parent) {
          if (insertFirst && parent._node.firstChild) {
            parent._node.insertBefore(this._node, parent._node.firstChild);
          } else {
            parent._node.appendChild(this._node);
          }
        }
      }
    
      /**
       * Set attributes on the current SVG element of the wrapper you're currently working on.
       *
       * @memberof Chartist.Svg
       * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
       * @param {String} ns If specified, the attributes will be set as namespace attributes with ns as prefix.
       * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
       */
      function attr(attributes, ns) {
        if(typeof attributes === 'string') {
          if(ns) {
            return this._node.getAttributeNS(ns, attributes);
          } else {
            return this._node.getAttribute(attributes);
          }
        }
    
        Object.keys(attributes).forEach(function(key) {
          // If the attribute value is undefined we can skip this one
          if(attributes[key] === undefined) {
            return;
          }
    
          if(ns) {
            this._node.setAttributeNS(ns, [Chartist.xmlNs.prefix, ':', key].join(''), attributes[key]);
          } else {
            this._node.setAttribute(key, attributes[key]);
          }
        }.bind(this));
    
        return this;
      }
    
      /**
       * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
       *
       * @memberof Chartist.Svg
       * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
       * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
       * @param {String} [className] This class or class list will be added to the SVG element
       * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
       * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
       */
      function elem(name, attributes, className, insertFirst) {
        return new Chartist.Svg(name, attributes, className, this, insertFirst);
      }
    
      /**
       * Returns the parent Chartist.SVG wrapper object
       *
       * @memberof Chartist.Svg
       * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
       */
      function parent() {
        return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
      }
    
      /**
       * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
       *
       * @memberof Chartist.Svg
       * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
       */
      function root() {
        var node = this._node;
        while(node.nodeName !== 'svg') {
          node = node.parentNode;
        }
        return new Chartist.Svg(node);
      }
    
      /**
       * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
       *
       * @memberof Chartist.Svg
       * @param {String} selector A CSS selector that is used to query for child SVG elements
       * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
       */
      function querySelector(selector) {
        var foundNode = this._node.querySelector(selector);
        return foundNode ? new Chartist.Svg(foundNode) : null;
      }
    
      /**
       * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
       *
       * @memberof Chartist.Svg
       * @param {String} selector A CSS selector that is used to query for child SVG elements
       * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
       */
      function querySelectorAll(selector) {
        var foundNodes = this._node.querySelectorAll(selector);
        return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
      }
    
      /**
       * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
       *
       * @memberof Chartist.Svg
       * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
       * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
       * @param {String} [className] This class or class list will be added to the SVG element
       * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
       * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
       */
      function foreignObject(content, attributes, className, insertFirst) {
        // If content is string then we convert it to DOM
        // TODO: Handle case where content is not a string nor a DOM Node
        if(typeof content === 'string') {
          var container = document.createElement('div');
          container.innerHTML = content;
          content = container.firstChild;
        }
    
        // Adding namespace to content element
        content.setAttribute('xmlns', xhtmlNs);
    
        // Creating the foreignObject without required extension attribute (as described here
        // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
        var fnObj = this.elem('foreignObject', attributes, className, insertFirst);
    
        // Add content to foreignObjectElement
        fnObj._node.appendChild(content);
    
        return fnObj;
      }
    
      /**
       * This method adds a new text element to the current Chartist.Svg wrapper.
       *
       * @memberof Chartist.Svg
       * @param {String} t The text that should be added to the text element that is created
       * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
       */
      function text(t) {
        this._node.appendChild(document.createTextNode(t));
        return this;
      }
    
      /**
       * This method will clear all child nodes of the current wrapper object.
       *
       * @memberof Chartist.Svg
       * @return {Chartist.Svg} The same wrapper object that got emptied
       */
      function empty() {
        while (this._node.firstChild) {
          this._node.removeChild(this._node.firstChild);
        }
    
        return this;
      }
    
      /**
       * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
       *
       * @memberof Chartist.Svg
       * @return {Chartist.Svg} The parent wrapper object of the element that got removed
       */
      function remove() {
        this._node.parentNode.removeChild(this._node);
        return this.parent();
      }
    
      /**
       * This method will replace the element with a new element that can be created outside of the current DOM.
       *
       * @memberof Chartist.Svg
       * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
       * @return {Chartist.Svg} The wrapper of the new element
       */
      function replace(newElement) {
        this._node.parentNode.replaceChild(newElement._node, this._node);
        return newElement;
      }
    
      /**
       * This method will append an element to the current element as a child.
       *
       * @memberof Chartist.Svg
       * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
       * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
       * @return {Chartist.Svg} The wrapper of the appended object
       */
      function append(element, insertFirst) {
        if(insertFirst && this._node.firstChild) {
          this._node.insertBefore(element._node, this._node.firstChild);
        } else {
          this._node.appendChild(element._node);
        }
    
        return this;
      }
    
      /**
       * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
       *
       * @memberof Chartist.Svg
       * @return {Array} A list of classes or an empty array if there are no classes on the current element
       */
      function classes() {
        return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
      }
    
      /**
       * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
       *
       * @memberof Chartist.Svg
       * @param {String} names A white space separated list of class names
       * @return {Chartist.Svg} The wrapper of the current element
       */
      function addClass(names) {
        this._node.setAttribute('class',
          this.classes(this._node)
            .concat(names.trim().split(/\s+/))
            .filter(function(elem, pos, self) {
              return self.indexOf(elem) === pos;
            }).join(' ')
        );
    
        return this;
      }
    
      /**
       * Removes one or a space separated list of classes from the current element.
       *
       * @memberof Chartist.Svg
       * @param {String} names A white space separated list of class names
       * @return {Chartist.Svg} The wrapper of the current element
       */
      function removeClass(names) {
        var removedClasses = names.trim().split(/\s+/);
    
        this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
          return removedClasses.indexOf(name) === -1;
        }).join(' '));
    
        return this;
      }
    
      /**
       * Removes all classes from the current element.
       *
       * @memberof Chartist.Svg
       * @return {Chartist.Svg} The wrapper of the current element
       */
      function removeAllClasses() {
        this._node.setAttribute('class', '');
    
        return this;
      }
    
      /**
       * "Save" way to get property value from svg BoundingBox.
       * This is a workaround. Firefox throws an NS_ERROR_FAILURE error if getBBox() is called on an invisible node.
       * See [NS_ERROR_FAILURE: Component returned failure code: 0x80004005](http://jsfiddle.net/sym3tri/kWWDK/)
       *
       * @memberof Chartist.Svg
       * @param {SVGElement} node The svg node to
       * @param {String} prop The property to fetch (ex.: height, width, ...)
       * @returns {Number} The value of the given bbox property
       */
      function getBBoxProperty(node, prop) {
        try {
          return node.getBBox()[prop];
        } catch(e) {}
    
        return 0;
      }
    
      /**
       * Get element height with fallback to svg BoundingBox or parent container dimensions:
       * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
       *
       * @memberof Chartist.Svg
       * @return {Number} The elements height in pixels
       */
      function height() {
        return this._node.clientHeight || Math.round(getBBoxProperty(this._node, 'height')) || this._node.parentNode.clientHeight;
      }
    
      /**
       * Get element width with fallback to svg BoundingBox or parent container dimensions:
       * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
       *
       * @memberof Chartist.Core
       * @return {Number} The elements width in pixels
       */
      function width() {
        return this._node.clientWidth || Math.round(getBBoxProperty(this._node, 'width')) || this._node.parentNode.clientWidth;
      }
    
      /**
       * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
       * **An animations object could look like this:**
       * ```javascript
       * element.animate({
       *   opacity: {
       *     dur: 1000,
       *     from: 0,
       *     to: 1
       *   },
       *   x1: {
       *     dur: '1000ms',
       *     from: 100,
       *     to: 200,
       *     easing: 'easeOutQuart'
       *   },
       *   y1: {
       *     dur: '2s',
       *     from: 0,
       *     to: 100
       *   }
       * });
       * ```
       * **Automatic unit conversion**
       * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
       * **Guided mode**
       * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
       * If guided mode is enabled the following behavior is added:
       * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
       * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
       * - The animate element will be forced to use `fill="freeze"`
       * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
       * - After the animation the element attribute value will be set to the `to` value of the animation
       * - The animate element is deleted from the DOM
       *
       * @memberof Chartist.Svg
       * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
       * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
       * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
       * @return {Chartist.Svg} The current element where the animation was added
       */
      function animate(animations, guided, eventEmitter) {
        if(guided === undefined) {
          guided = true;
        }
    
        Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
    
          function createAnimate(animationDefinition, guided) {
            var attributeProperties = {},
              animate,
              timeout,
              easing;
    
            // Check if an easing is specified in the definition object and delete it from the object as it will not
            // be part of the animate element attributes.
            if(animationDefinition.easing) {
              // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
              easing = animationDefinition.easing instanceof Array ?
                animationDefinition.easing :
                Chartist.Svg.Easing[animationDefinition.easing];
              delete animationDefinition.easing;
            }
    
            // If numeric dur or begin was provided we assume milli seconds
            animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
            animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');
    
            if(easing) {
              animationDefinition.calcMode = 'spline';
              animationDefinition.keySplines = easing.join(' ');
              animationDefinition.keyTimes = '0;1';
            }
    
            // Adding "fill: freeze" if we are in guided mode and set initial attribute values
            if(guided) {
              animationDefinition.fill = 'freeze';
              // Animated property on our element should already be set to the animation from value in guided mode
              attributeProperties[attribute] = animationDefinition.from;
              this.attr(attributeProperties);
    
              // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
              // which needs to be in ms aside
              timeout = Chartist.stripUnit(animationDefinition.begin || 0);
              animationDefinition.begin = 'indefinite';
            }
    
            animate = this.elem('animate', Chartist.extend({
              attributeName: attribute
            }, animationDefinition));
    
            if(guided) {
              // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
              setTimeout(function() {
                // If beginElement fails we set the animated attribute to the end position and remove the animate element
                // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
                // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
                try {
                  animate._node.beginElement();
                } catch(err) {
                  // Set animated attribute to current animated value
                  attributeProperties[attribute] = animationDefinition.to;
                  this.attr(attributeProperties);
                  // Remove the animate element as it's no longer required
                  animate.remove();
                }
              }.bind(this), timeout);
            }
    
            if(eventEmitter) {
              animate._node.addEventListener('beginEvent', function handleBeginEvent() {
                eventEmitter.emit('animationBegin', {
                  element: this,
                  animate: animate._node,
                  params: animationDefinition
                });
              }.bind(this));
            }
    
            animate._node.addEventListener('endEvent', function handleEndEvent() {
              if(eventEmitter) {
                eventEmitter.emit('animationEnd', {
                  element: this,
                  animate: animate._node,
                  params: animationDefinition
                });
              }
    
              if(guided) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties);
                // Remove the animate element as it's no longer required
                animate.remove();
              }
            }.bind(this));
          }
    
          // If current attribute is an array of definition objects we create an animate for each and disable guided mode
          if(animations[attribute] instanceof Array) {
            animations[attribute].forEach(function(animationDefinition) {
              createAnimate.bind(this)(animationDefinition, false);
            }.bind(this));
          } else {
            createAnimate.bind(this)(animations[attribute], guided);
          }
    
        }.bind(this));
    
        return this;
      }
    
      Chartist.Svg = Chartist.Class.extend({
        constructor: Svg,
        attr: attr,
        elem: elem,
        parent: parent,
        root: root,
        querySelector: querySelector,
        querySelectorAll: querySelectorAll,
        foreignObject: foreignObject,
        text: text,
        empty: empty,
        remove: remove,
        replace: replace,
        append: append,
        classes: classes,
        addClass: addClass,
        removeClass: removeClass,
        removeAllClasses: removeAllClasses,
        height: height,
        width: width,
        animate: animate
      });
    
      /**
       * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
       *
       * @memberof Chartist.Svg
       * @param {String} feature The SVG 1.1 feature that should be checked for support.
       * @return {Boolean} True of false if the feature is supported or not
       */
      Chartist.Svg.isSupported = function(feature) {
        return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
      };
    
      /**
       * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
       *
       * @memberof Chartist.Svg
       */
      var easingCubicBeziers = {
        easeInSine: [0.47, 0, 0.745, 0.715],
        easeOutSine: [0.39, 0.575, 0.565, 1],
        easeInOutSine: [0.445, 0.05, 0.55, 0.95],
        easeInQuad: [0.55, 0.085, 0.68, 0.53],
        easeOutQuad: [0.25, 0.46, 0.45, 0.94],
        easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
        easeInCubic: [0.55, 0.055, 0.675, 0.19],
        easeOutCubic: [0.215, 0.61, 0.355, 1],
        easeInOutCubic: [0.645, 0.045, 0.355, 1],
        easeInQuart: [0.895, 0.03, 0.685, 0.22],
        easeOutQuart: [0.165, 0.84, 0.44, 1],
        easeInOutQuart: [0.77, 0, 0.175, 1],
        easeInQuint: [0.755, 0.05, 0.855, 0.06],
        easeOutQuint: [0.23, 1, 0.32, 1],
        easeInOutQuint: [0.86, 0, 0.07, 1],
        easeInExpo: [0.95, 0.05, 0.795, 0.035],
        easeOutExpo: [0.19, 1, 0.22, 1],
        easeInOutExpo: [1, 0, 0, 1],
        easeInCirc: [0.6, 0.04, 0.98, 0.335],
        easeOutCirc: [0.075, 0.82, 0.165, 1],
        easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
        easeInBack: [0.6, -0.28, 0.735, 0.045],
        easeOutBack: [0.175, 0.885, 0.32, 1.275],
        easeInOutBack: [0.68, -0.55, 0.265, 1.55]
      };
    
      Chartist.Svg.Easing = easingCubicBeziers;
    
      /**
       * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
       * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
       *
       * @memberof Chartist.Svg
       * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
       * @constructor
       */
      function SvgList(nodeList) {
        var list = this;
    
        this.svgElements = [];
        for(var i = 0; i < nodeList.length; i++) {
          this.svgElements.push(new Chartist.Svg(nodeList[i]));
        }
    
        // Add delegation methods for Chartist.Svg
        Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
          return ['constructor',
              'parent',
              'querySelector',
              'querySelectorAll',
              'replace',
              'append',
              'classes',
              'height',
              'width'].indexOf(prototypeProperty) === -1;
        }).forEach(function(prototypeProperty) {
          list[prototypeProperty] = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            list.svgElements.forEach(function(element) {
              Chartist.Svg.prototype[prototypeProperty].apply(element, args);
            });
            return list;
          };
        });
      }
    
      Chartist.Svg.List = Chartist.Class.extend({
        constructor: SvgList
      });
    }(window, document, Chartist));
    ;/**
     * Chartist SVG path module for SVG path description creation and modification.
     *
     * @module Chartist.Svg.Path
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      /**
       * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
       *
       * @memberof Chartist.Svg.Path
       * @type {Object}
       */
      var elementDescriptions = {
        m: ['x', 'y'],
        l: ['x', 'y'],
        c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
      };
    
      /**
       * Default options for newly created SVG path objects.
       *
       * @memberof Chartist.Svg.Path
       * @type {Object}
       */
      var defaultOptions = {
        // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
        accuracy: 3
      };
    
      function element(command, params, pathElements, pos, relative, data) {
        var pathElement = Chartist.extend({
          command: relative ? command.toLowerCase() : command.toUpperCase()
        }, params, data ? { data: data } : {} );
    
        pathElements.splice(pos, 0, pathElement);
      }
    
      function forEachParam(pathElements, cb) {
        pathElements.forEach(function(pathElement, pathElementIndex) {
          elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
            cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
          });
        });
      }
    
      /**
       * Used to construct a new path object.
       *
       * @memberof Chartist.Svg.Path
       * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
       * @param {Object} options Options object that overrides the default objects. See default options for more details.
       * @constructor
       */
      function SvgPath(close, options) {
        this.pathElements = [];
        this.pos = 0;
        this.close = close;
        this.options = Chartist.extend({}, defaultOptions, options);
      }
    
      /**
       * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
       * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
       */
      function position(pos) {
        if(pos !== undefined) {
          this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
          return this;
        } else {
          return this.pos;
        }
      }
    
      /**
       * Removes elements from the path starting at the current position.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} count Number of path elements that should be removed from the current position.
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function remove(count) {
        this.pathElements.splice(this.pos, count);
        return this;
      }
    
      /**
       * Use this function to add a new move SVG path element.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} x The x coordinate for the move element.
       * @param {Number} y The y coordinate for the move element.
       * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
       * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function move(x, y, relative, data) {
        element('M', {
          x: +x,
          y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
      }
    
      /**
       * Use this function to add a new line SVG path element.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} x The x coordinate for the line element.
       * @param {Number} y The y coordinate for the line element.
       * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
       * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function line(x, y, relative, data) {
        element('L', {
          x: +x,
          y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
      }
    
      /**
       * Use this function to add a new curve SVG path element.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
       * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
       * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
       * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
       * @param {Number} x The x coordinate for the target point of the curve element.
       * @param {Number} y The y coordinate for the target point of the curve element.
       * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
       * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function curve(x1, y1, x2, y2, x, y, relative, data) {
        element('C', {
          x1: +x1,
          y1: +y1,
          x2: +x2,
          y2: +y2,
          x: +x,
          y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
      }
    
      /**
       * Use this function to add a new non-bezier curve SVG path element.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} rx The radius to be used for the x-axis of the arc.
       * @param {Number} ry The radius to be used for the y-axis of the arc.
       * @param {Number} xAr Defines the orientation of the arc
       * @param {Number} lAf Large arc flag
       * @param {Number} sf Sweep flag
       * @param {Number} x The x coordinate for the target point of the curve element.
       * @param {Number} y The y coordinate for the target point of the curve element.
       * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
       * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
        element('A', {
          rx: +rx,
          ry: +ry,
          xAr: +xAr,
          lAf: +lAf,
          sf: +sf,
          x: +x,
          y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
      }
    
      /**
       * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
       *
       * @memberof Chartist.Svg.Path
       * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function parse(path) {
        // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
        var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
          .replace(/([0-9])([A-Za-z])/g, '$1 $2')
          .split(/[\s,]+/)
          .reduce(function(result, element) {
            if(element.match(/[A-Za-z]/)) {
              result.push([]);
            }
    
            result[result.length - 1].push(element);
            return result;
          }, []);
    
        // If this is a closed path we remove the Z at the end because this is determined by the close option
        if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
          chunks.pop();
        }
    
        // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
        // For example {command: 'M', x: '10', y: '10'}
        var elements = chunks.map(function(chunk) {
            var command = chunk.shift(),
              description = elementDescriptions[command.toLowerCase()];
    
            return Chartist.extend({
              command: command
            }, description.reduce(function(result, paramName, index) {
              result[paramName] = +chunk[index];
              return result;
            }, {}));
          });
    
        // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
        var spliceArgs = [this.pos, 0];
        Array.prototype.push.apply(spliceArgs, elements);
        Array.prototype.splice.apply(this.pathElements, spliceArgs);
        // Increase the internal position by the element count
        this.pos += elements.length;
    
        return this;
      }
    
      /**
       * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
       *
       * @memberof Chartist.Svg.Path
       * @return {String}
       */
      function stringify() {
        var accuracyMultiplier = Math.pow(10, this.options.accuracy);
    
        return this.pathElements.reduce(function(path, pathElement) {
            var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
              return this.options.accuracy ?
                (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
                pathElement[paramName];
            }.bind(this));
    
            return path + pathElement.command + params.join(',');
          }.bind(this), '') + (this.close ? 'Z' : '');
      }
    
      /**
       * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
       * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function scale(x, y) {
        forEachParam(this.pathElements, function(pathElement, paramName) {
          pathElement[paramName] *= paramName[0] === 'x' ? x : y;
        });
        return this;
      }
    
      /**
       * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
       *
       * @memberof Chartist.Svg.Path
       * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
       * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function translate(x, y) {
        forEachParam(this.pathElements, function(pathElement, paramName) {
          pathElement[paramName] += paramName[0] === 'x' ? x : y;
        });
        return this;
      }
    
      /**
       * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
       * The method signature of the callback function looks like this:
       * ```javascript
       * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
       * ```
       * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
       *
       * @memberof Chartist.Svg.Path
       * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
       * @return {Chartist.Svg.Path} The current path object for easy call chaining.
       */
      function transform(transformFnc) {
        forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
          var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
          if(transformed || transformed === 0) {
            pathElement[paramName] = transformed;
          }
        });
        return this;
      }
    
      /**
       * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
       *
       * @memberof Chartist.Svg.Path
       * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
       * @return {Chartist.Svg.Path}
       */
      function clone(close) {
        var c = new Chartist.Svg.Path(close || this.close);
        c.pos = this.pos;
        c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
          return Chartist.extend({}, pathElement);
        });
        c.options = Chartist.extend({}, this.options);
        return c;
      }
    
      /**
       * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
       *
       * @memberof Chartist.Svg.Path
       * @param {String} command The command you'd like to use to split the path
       * @return {Array<Chartist.Svg.Path>}
       */
      function splitByCommand(command) {
        var split = [
          new Chartist.Svg.Path()
        ];
    
        this.pathElements.forEach(function(pathElement) {
          if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
            split.push(new Chartist.Svg.Path());
          }
    
          split[split.length - 1].pathElements.push(pathElement);
        });
    
        return split;
      }
    
      /**
       * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
       *
       * @memberof Chartist.Svg.Path
       * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
       * @param {boolean} close If the newly created path should be a closed path
       * @param {Object} options Path options for the newly created path.
       * @return {Chartist.Svg.Path}
       */
    
      function join(paths, close, options) {
        var joinedPath = new Chartist.Svg.Path(close, options);
        for(var i = 0; i < paths.length; i++) {
          var path = paths[i];
          for(var j = 0; j < path.pathElements.length; j++) {
            joinedPath.pathElements.push(path.pathElements[j]);
          }
        }
        return joinedPath;
      }
    
      Chartist.Svg.Path = Chartist.Class.extend({
        constructor: SvgPath,
        position: position,
        remove: remove,
        move: move,
        line: line,
        curve: curve,
        arc: arc,
        scale: scale,
        translate: translate,
        transform: transform,
        parse: parse,
        stringify: stringify,
        clone: clone,
        splitByCommand: splitByCommand
      });
    
      Chartist.Svg.Path.elementDescriptions = elementDescriptions;
      Chartist.Svg.Path.join = join;
    }(window, document, Chartist));
    ;/* global Chartist */
    (function (window, document, Chartist) {
      'use strict';
    
      var axisUnits = {
        x: {
          pos: 'x',
          len: 'width',
          dir: 'horizontal',
          rectStart: 'x1',
          rectEnd: 'x2',
          rectOffset: 'y2'
        },
        y: {
          pos: 'y',
          len: 'height',
          dir: 'vertical',
          rectStart: 'y2',
          rectEnd: 'y1',
          rectOffset: 'x1'
        }
      };
    
      function Axis(units, chartRect, ticks, options) {
        this.units = units;
        this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
        this.chartRect = chartRect;
        this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
        this.gridOffset = chartRect[units.rectOffset];
        this.ticks = ticks;
        this.options = options;
      }
    
      function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
        var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
        var projectedValues = this.ticks.map(this.projectValue.bind(this));
        var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
    
        projectedValues.forEach(function(projectedValue, index) {
          var labelOffset = {
            x: 0,
            y: 0
          };
    
          // TODO: Find better solution for solving this problem
          // Calculate how much space we have available for the label
          var labelLength;
          if(projectedValues[index + 1]) {
            // If we still have one label ahead, we can calculate the distance to the next tick / label
            labelLength = projectedValues[index + 1] - projectedValue;
          } else {
            // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
            // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
            // still be visible inside of the chart padding.
            labelLength = Math.max(this.axisLength - projectedValue, 30);
          }
    
          // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
          if(!labelValues[index] && labelValues[index] !== 0) {
            return;
          }
    
          // Transform to global coordinates using the chartRect
          // We also need to set the label offset for the createLabel function
          if(this.units.pos === 'x') {
            projectedValue = this.chartRect.x1 + projectedValue;
            labelOffset.x = chartOptions.axisX.labelOffset.x;
    
            // If the labels should be positioned in start position (top side for vertical axis) we need to set a
            // different offset as for positioned with end (bottom)
            if(chartOptions.axisX.position === 'start') {
              labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
            } else {
              labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
            }
          } else {
            projectedValue = this.chartRect.y1 - projectedValue;
            labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);
    
            // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
            // different offset as for positioned with end (right side)
            if(chartOptions.axisY.position === 'start') {
              labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
            } else {
              labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
            }
          }
    
          if(axisOptions.showGrid) {
            Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
              chartOptions.classNames.grid,
              chartOptions.classNames[this.units.dir]
            ], eventEmitter);
          }
    
          if(axisOptions.showLabel) {
            Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
              chartOptions.classNames.label,
              chartOptions.classNames[this.units.dir],
              chartOptions.classNames[axisOptions.position]
            ], useForeignObject, eventEmitter);
          }
        }.bind(this));
      }
    
      Chartist.Axis = Chartist.Class.extend({
        constructor: Axis,
        createGridAndLabels: createGridAndLabels,
        projectValue: function(value, index, data) {
          throw new Error('Base axis can\'t be instantiated!');
        }
      });
    
      Chartist.Axis.units = axisUnits;
    
    }(window, document, Chartist));
    ;/**
     * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
     * **Options**
     * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
     * ```javascript
     * var options = {
     *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
     *   high: 100,
     *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
     *   low: 0,
     *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
     *   scaleMinSpace: 20,
     *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
     *   onlyInteger: true,
     *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
     *   referenceValue: 5
     * };
     * ```
     *
     * @module Chartist.AutoScaleAxis
     */
    /* global Chartist */
    (function (window, document, Chartist) {
      'use strict';
    
      function AutoScaleAxis(axisUnit, data, chartRect, options) {
        // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
        var highLow = options.highLow || Chartist.getHighLow(data.normalized, options, axisUnit.pos);
        this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
        this.range = {
          min: this.bounds.min,
          max: this.bounds.max
        };
    
        Chartist.AutoScaleAxis.super.constructor.call(this,
          axisUnit,
          chartRect,
          this.bounds.values,
          options);
      }
    
      function projectValue(value) {
        return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
      }
    
      Chartist.AutoScaleAxis = Chartist.Axis.extend({
        constructor: AutoScaleAxis,
        projectValue: projectValue
      });
    
    }(window, document, Chartist));
    ;/**
     * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
     * **Options**
     * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
     * ```javascript
     * var options = {
     *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
     *   high: 100,
     *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
     *   low: 0,
     *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
     *   divisor: 4,
     *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
     *   ticks: [1, 10, 20, 30]
     * };
     * ```
     *
     * @module Chartist.FixedScaleAxis
     */
    /* global Chartist */
    (function (window, document, Chartist) {
      'use strict';
    
      function FixedScaleAxis(axisUnit, data, chartRect, options) {
        var highLow = options.highLow || Chartist.getHighLow(data.normalized, options, axisUnit.pos);
        this.divisor = options.divisor || 1;
        this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
          return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
        }.bind(this));
        this.range = {
          min: highLow.low,
          max: highLow.high
        };
    
        Chartist.FixedScaleAxis.super.constructor.call(this,
          axisUnit,
          chartRect,
          this.ticks,
          options);
    
        this.stepLength = this.axisLength / this.divisor;
      }
    
      function projectValue(value) {
        return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
      }
    
      Chartist.FixedScaleAxis = Chartist.Axis.extend({
        constructor: FixedScaleAxis,
        projectValue: projectValue
      });
    
    }(window, document, Chartist));
    ;/**
     * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
     * **Options**
     * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
     * ```javascript
     * var options = {
     *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
     *   ticks: ['One', 'Two', 'Three'],
     *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
     *   stretch: true
     * };
     * ```
     *
     * @module Chartist.StepAxis
     */
    /* global Chartist */
    (function (window, document, Chartist) {
      'use strict';
    
      function StepAxis(axisUnit, data, chartRect, options) {
        Chartist.StepAxis.super.constructor.call(this,
          axisUnit,
          chartRect,
          options.ticks,
          options);
    
        this.stepLength = this.axisLength / (options.ticks.length - (options.stretch ? 1 : 0));
      }
    
      function projectValue(value, index) {
        return this.stepLength * index;
      }
    
      Chartist.StepAxis = Chartist.Axis.extend({
        constructor: StepAxis,
        projectValue: projectValue
      });
    
    }(window, document, Chartist));
    ;/**
     * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
     *
     * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
     *
     * @module Chartist.Line
     */
    /* global Chartist */
    (function(window, document, Chartist){
      'use strict';
    
      /**
       * Default options in line charts. Expand the code view to see a detailed list of options with comments.
       *
       * @memberof Chartist.Line
       */
      var defaultOptions = {
        // Options for X-Axis
        axisX: {
          // The offset of the labels to the chart area
          offset: 30,
          // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
          position: 'end',
          // Allows you to correct label positioning on this axis by positive or negative x and y offset.
          labelOffset: {
            x: 0,
            y: 0
          },
          // If labels should be shown or not
          showLabel: true,
          // If the axis grid should be drawn or not
          showGrid: true,
          // Interpolation function that allows you to intercept the value from the axis label
          labelInterpolationFnc: Chartist.noop,
          // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
          type: undefined
        },
        // Options for Y-Axis
        axisY: {
          // The offset of the labels to the chart area
          offset: 40,
          // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
          position: 'start',
          // Allows you to correct label positioning on this axis by positive or negative x and y offset.
          labelOffset: {
            x: 0,
            y: 0
          },
          // If labels should be shown or not
          showLabel: true,
          // If the axis grid should be drawn or not
          showGrid: true,
          // Interpolation function that allows you to intercept the value from the axis label
          labelInterpolationFnc: Chartist.noop,
          // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
          type: undefined,
          // This value specifies the minimum height in pixel of the scale steps
          scaleMinSpace: 20,
          // Use only integer values (whole numbers) for the scale steps
          onlyInteger: false
        },
        // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
        width: undefined,
        // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
        height: undefined,
        // If the line should be drawn or not
        showLine: true,
        // If dots should be drawn or not
        showPoint: true,
        // If the line chart should draw an area
        showArea: false,
        // The base for the area chart that will be used to close the area shape (is normally 0)
        areaBase: 0,
        // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
        lineSmooth: true,
        // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
        low: undefined,
        // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
        high: undefined,
        // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
        chartPadding: {
          top: 15,
          right: 15,
          bottom: 5,
          left: 10
        },
        // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
        fullWidth: false,
        // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
        reverseData: false,
        // Override the class names that get used to generate the SVG structure of the chart
        classNames: {
          chart: 'ct-chart-line',
          label: 'ct-label',
          labelGroup: 'ct-labels',
          series: 'ct-series',
          line: 'ct-line',
          point: 'ct-point',
          area: 'ct-area',
          grid: 'ct-grid',
          gridGroup: 'ct-grids',
          vertical: 'ct-vertical',
          horizontal: 'ct-horizontal',
          start: 'ct-start',
          end: 'ct-end'
        }
      };
    
      /**
       * Creates a new chart
       *
       */
      function createChart(options) {
        var data = {
          raw: this.data,
          normalized: Chartist.getDataArray(this.data, options.reverseData, true)
        };
    
        // Create new svg object
        this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
        // Create groups for labels, grid and series
        var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
        var seriesGroup = this.svg.elem('g');
        var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
    
        var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
        var axisX, axisY;
    
        if(options.axisX.type === undefined) {
          axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
            ticks: data.raw.labels,
            stretch: options.fullWidth
          }));
        } else {
          axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, options.axisX);
        }
    
        if(options.axisY.type === undefined) {
          axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
            high: Chartist.isNum(options.high) ? options.high : options.axisY.high,
            low: Chartist.isNum(options.low) ? options.low : options.axisY.low
          }));
        } else {
          axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, options.axisY);
        }
    
        axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
        axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    
        // Draw the series
        data.raw.series.forEach(function(series, seriesIndex) {
          var seriesElement = seriesGroup.elem('g');
    
          // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
          seriesElement.attr({
            'series-name': series.name,
            'meta': Chartist.serialize(series.meta)
          }, Chartist.xmlNs.uri);
    
          // Use series class from series data or if not set generate one
          seriesElement.addClass([
            options.classNames.series,
            (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
          ].join(' '));
    
          var pathCoordinates = [],
            pathData = [];
    
          data.normalized[seriesIndex].forEach(function(value, valueIndex) {
            var p = {
              x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized[seriesIndex]),
              y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized[seriesIndex])
            };
            pathCoordinates.push(p.x, p.y);
            pathData.push({
              value: value,
              valueIndex: valueIndex,
              meta: Chartist.getMetaData(series, valueIndex)
            });
          }.bind(this));
    
          var seriesOptions = {
            lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
            showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
            showLine: Chartist.getSeriesOption(series, options, 'showLine'),
            showArea: Chartist.getSeriesOption(series, options, 'showArea'),
            areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
          };
    
          var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
            seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.cardinal() : Chartist.Interpolation.none());
          // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
          // index, value and meta data
          var path = smoothing(pathCoordinates, pathData);
    
          // If we should show points we need to create them now to avoid secondary loop
          // Points are drawn from the pathElements returned by the interpolation function
          // Small offset for Firefox to render squares correctly
          if (seriesOptions.showPoint) {
    
            path.pathElements.forEach(function(pathElement) {
              var point = seriesElement.elem('line', {
                x1: pathElement.x,
                y1: pathElement.y,
                x2: pathElement.x + 0.01,
                y2: pathElement.y
              }, options.classNames.point).attr({
                'value': [pathElement.data.value.x, pathElement.data.value.y].filter(function(v) {
                    return v;
                  }).join(','),
                'meta': pathElement.data.meta
              }, Chartist.xmlNs.uri);
    
              this.eventEmitter.emit('draw', {
                type: 'point',
                value: pathElement.data.value,
                index: pathElement.data.valueIndex,
                meta: pathElement.data.meta,
                series: series,
                seriesIndex: seriesIndex,
                axisX: axisX,
                axisY: axisY,
                group: seriesElement,
                element: point,
                x: pathElement.x,
                y: pathElement.y
              });
            }.bind(this));
          }
    
          if(seriesOptions.showLine) {
            var line = seriesElement.elem('path', {
              d: path.stringify()
            }, options.classNames.line, true);
    
            this.eventEmitter.emit('draw', {
              type: 'line',
              values: data.normalized[seriesIndex],
              path: path.clone(),
              chartRect: chartRect,
              index: seriesIndex,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: line
            });
          }
    
          // Area currently only works with axes that support a range!
          if(seriesOptions.showArea && axisY.range) {
            // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
            // the area is not drawn outside the chart area.
            var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);
    
            // We project the areaBase value into screen coordinates
            var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);
    
            // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
            path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
              // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
              return pathSegment.pathElements.length > 1;
            }).map(function convertToArea(solidPathSegments) {
              // Receiving the filtered solid path segments we can now convert those segments into fill areas
              var firstElement = solidPathSegments.pathElements[0];
              var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];
    
              // Cloning the solid path segment with closing option and removing the first move command from the clone
              // We then insert a new move that should start at the area base and draw a straight line up or down
              // at the end of the path we add an additional straight line to the projected area base value
              // As the closing option is set our path will be automatically closed
              return solidPathSegments.clone(true)
                .position(0)
                .remove(1)
                .move(firstElement.x, areaBaseProjected)
                .line(firstElement.x, firstElement.y)
                .position(solidPathSegments.pathElements.length + 1)
                .line(lastElement.x, areaBaseProjected);
    
            }).forEach(function createArea(areaPath) {
              // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
              // and adding the created DOM elements to the correct series group
              var area = seriesElement.elem('path', {
                d: areaPath.stringify()
              }, options.classNames.area, true).attr({
                'values': data.normalized[seriesIndex]
              }, Chartist.xmlNs.uri);
    
              // Emit an event for each area that was drawn
              this.eventEmitter.emit('draw', {
                type: 'area',
                values: data.normalized[seriesIndex],
                path: areaPath.clone(),
                series: series,
                seriesIndex: seriesIndex,
                axisX: axisX,
                axisY: axisY,
                chartRect: chartRect,
                index: seriesIndex,
                group: seriesElement,
                element: area
              });
            }.bind(this));
          }
        }.bind(this));
    
        this.eventEmitter.emit('created', {
          bounds: axisY.bounds,
          chartRect: chartRect,
          axisX: axisX,
          axisY: axisY,
          svg: this.svg,
          options: options
        });
      }
    
      /**
       * This method creates a new line chart.
       *
       * @memberof Chartist.Line
       * @param {String|Node} query A selector query string or directly a DOM element
       * @param {Object} data The data object that needs to consist of a labels and a series array
       * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
       * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
       * @return {Object} An object which exposes the API for the created chart
       *
       * @example
       * // Create a simple line chart
       * var data = {
       *   // A labels array that can contain any sort of values
       *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
       *   // Our series array that contains series objects or in this case series data arrays
       *   series: [
       *     [5, 2, 4, 2, 0]
       *   ]
       * };
       *
       * // As options we currently only set a static size of 300x200 px
       * var options = {
       *   width: '300px',
       *   height: '200px'
       * };
       *
       * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
       * new Chartist.Line('.ct-chart', data, options);
       *
       * @example
       * // Use specific interpolation function with configuration from the Chartist.Interpolation module
       *
       * var chart = new Chartist.Line('.ct-chart', {
       *   labels: [1, 2, 3, 4, 5],
       *   series: [
       *     [1, 1, 8, 1, 7]
       *   ]
       * }, {
       *   lineSmooth: Chartist.Interpolation.cardinal({
       *     tension: 0.2
       *   })
       * });
       *
       * @example
       * // Create a line chart with responsive options
       *
       * var data = {
       *   // A labels array that can contain any sort of values
       *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
       *   // Our series array that contains series objects or in this case series data arrays
       *   series: [
       *     [5, 2, 4, 2, 0]
       *   ]
       * };
       *
       * // In adition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
       * var responsiveOptions = [
       *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
       *     showPoint: false,
       *     axisX: {
       *       labelInterpolationFnc: function(value) {
       *         // Will return Mon, Tue, Wed etc. on medium screens
       *         return value.slice(0, 3);
       *       }
       *     }
       *   }],
       *   ['screen and (max-width: 640px)', {
       *     showLine: false,
       *     axisX: {
       *       labelInterpolationFnc: function(value) {
       *         // Will return M, T, W etc. on small screens
       *         return value[0];
       *       }
       *     }
       *   }]
       * ];
       *
       * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
       *
       */
      function Line(query, data, options, responsiveOptions) {
        Chartist.Line.super.constructor.call(this,
          query,
          data,
          defaultOptions,
          Chartist.extend({}, defaultOptions, options),
          responsiveOptions);
      }
    
      // Creating line chart type in Chartist namespace
      Chartist.Line = Chartist.Base.extend({
        constructor: Line,
        createChart: createChart
      });
    
    }(window, document, Chartist));
    ;/**
     * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
     *
     * @module Chartist.Bar
     */
    /* global Chartist */
    (function(window, document, Chartist){
      'use strict';
    
      /**
       * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
       *
       * @memberof Chartist.Bar
       */
      var defaultOptions = {
        // Options for X-Axis
        axisX: {
          // The offset of the chart drawing area to the border of the container
          offset: 30,
          // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
          position: 'end',
          // Allows you to correct label positioning on this axis by positive or negative x and y offset.
          labelOffset: {
            x: 0,
            y: 0
          },
          // If labels should be shown or not
          showLabel: true,
          // If the axis grid should be drawn or not
          showGrid: true,
          // Interpolation function that allows you to intercept the value from the axis label
          labelInterpolationFnc: Chartist.noop,
          // This value specifies the minimum width in pixel of the scale steps
          scaleMinSpace: 30,
          // Use only integer values (whole numbers) for the scale steps
          onlyInteger: false
        },
        // Options for Y-Axis
        axisY: {
          // The offset of the chart drawing area to the border of the container
          offset: 40,
          // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
          position: 'start',
          // Allows you to correct label positioning on this axis by positive or negative x and y offset.
          labelOffset: {
            x: 0,
            y: 0
          },
          // If labels should be shown or not
          showLabel: true,
          // If the axis grid should be drawn or not
          showGrid: true,
          // Interpolation function that allows you to intercept the value from the axis label
          labelInterpolationFnc: Chartist.noop,
          // This value specifies the minimum height in pixel of the scale steps
          scaleMinSpace: 20,
          // Use only integer values (whole numbers) for the scale steps
          onlyInteger: false
        },
        // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
        width: undefined,
        // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
        height: undefined,
        // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
        high: undefined,
        // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
        low: undefined,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false,
        // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
        chartPadding: {
          top: 15,
          right: 15,
          bottom: 5,
          left: 10
        },
        // Specify the distance in pixel of bars in a group
        seriesBarDistance: 15,
        // If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
        stackBars: false,
        // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
        horizontalBars: false,
        // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
        distributeSeries: false,
        // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
        reverseData: false,
        // Override the class names that get used to generate the SVG structure of the chart
        classNames: {
          chart: 'ct-chart-bar',
          horizontalBars: 'ct-horizontal-bars',
          label: 'ct-label',
          labelGroup: 'ct-labels',
          series: 'ct-series',
          bar: 'ct-bar',
          grid: 'ct-grid',
          gridGroup: 'ct-grids',
          vertical: 'ct-vertical',
          horizontal: 'ct-horizontal',
          start: 'ct-start',
          end: 'ct-end'
        }
      };
    
      /**
       * Creates a new chart
       *
       */
      function createChart(options) {
        var data = {
          raw: this.data,
          normalized: options.distributeSeries ? Chartist.getDataArray(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y').map(function(value) {
            return [value];
          }) : Chartist.getDataArray(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y')
        };
    
        var highLow;
    
        // Create new svg element
        this.svg = Chartist.createSvg(
          this.container,
          options.width,
          options.height,
          options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
        );
    
        // Drawing groups in correct order
        var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
        var seriesGroup = this.svg.elem('g');
        var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
    
        if(options.stackBars) {
          // If stacked bars we need to calculate the high low from stacked values from each series
          var serialSums = Chartist.serialMap(data.normalized, function serialSums() {
            return Array.prototype.slice.call(arguments).map(function(value) {
              return value;
            }).reduce(function(prev, curr) {
              return {
                x: prev.x + curr.x || 0,
                y: prev.y + curr.y || 0
              };
            }, {x: 0, y: 0});
          });
    
          highLow = Chartist.getHighLow([serialSums], Chartist.extend({}, options, {
            referenceValue: 0
          }), options.horizontalBars ? 'x' : 'y');
        } else {
          highLow = Chartist.getHighLow(data.normalized, Chartist.extend({}, options, {
            referenceValue: 0
          }), options.horizontalBars ? 'x' : 'y');
        }
        // Overrides of high / low from settings
        highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
        highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
    
        var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    
        var valueAxis,
          labelAxisTicks,
          labelAxis,
          axisX,
          axisY;
    
        // We need to set step count based on some options combinations
        if(options.distributeSeries && options.stackBars) {
          // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
          // use only the first label for the step axis
          labelAxisTicks = data.raw.labels.slice(0, 1);
        } else {
          // If distributed series are enabled but stacked bars aren't, we should use the series labels
          // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
          // as the bars are normalized
          labelAxisTicks = data.raw.labels;
        }
    
        // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
        if(options.horizontalBars) {
          if(options.axisX.type === undefined) {
            valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
              highLow: highLow,
              referenceValue: 0
            }));
          } else {
            valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
              highLow: highLow,
              referenceValue: 0
            }));
          }
    
          if(options.axisY.type === undefined) {
            labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data, chartRect, {
              ticks: labelAxisTicks
            });
          } else {
            labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, options.axisY);
          }
        } else {
          if(options.axisX.type === undefined) {
            labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data, chartRect, {
              ticks: labelAxisTicks
            });
          } else {
            labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, options.axisX);
          }
    
          if(options.axisY.type === undefined) {
            valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
              highLow: highLow,
              referenceValue: 0
            }));
          } else {
            valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
              highLow: highLow,
              referenceValue: 0
            }));
          }
        }
    
        // Projected 0 point
        var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
        // Used to track the screen coordinates of stacked bars
        var stackedBarValues = [];
    
        labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
        valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    
        // Draw the series
        data.raw.series.forEach(function(series, seriesIndex) {
          // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
          var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
          // Half of the period width between vertical grid lines used to position bars
          var periodHalfLength;
          // Current series SVG element
          var seriesElement;
    
          // We need to set periodHalfLength based on some options combinations
          if(options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
            // which is the series count and divide by 2
            periodHalfLength = labelAxis.axisLength / data.normalized.length / 2;
          } else if(options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
            // length by 2
            periodHalfLength = labelAxis.axisLength / 2;
          } else {
            // On regular bar charts we should just use the series length
            periodHalfLength = labelAxis.axisLength / data.normalized[seriesIndex].length / 2;
          }
    
          // Adding the series group to the series element
          seriesElement = seriesGroup.elem('g');
    
          // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
          seriesElement.attr({
            'series-name': series.name,
            'meta': Chartist.serialize(series.meta)
          }, Chartist.xmlNs.uri);
    
          // Use series class from series data or if not set generate one
          seriesElement.addClass([
            options.classNames.series,
            (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
          ].join(' '));
    
          data.normalized[seriesIndex].forEach(function(value, valueIndex) {
            var projected,
              bar,
              previousStack,
              labelAxisValueIndex;
    
            // We need to set labelAxisValueIndex based on some options combinations
            if(options.distributeSeries && !options.stackBars) {
              // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
              // on the step axis for label positioning
              labelAxisValueIndex = seriesIndex;
            } else if(options.distributeSeries && options.stackBars) {
              // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
              // 0 for projection on the label step axis
              labelAxisValueIndex = 0;
            } else {
              // On regular bar charts we just use the value index to project on the label step axis
              labelAxisValueIndex = valueIndex;
            }
    
            // We need to transform coordinates differently based on the chart layout
            if(options.horizontalBars) {
              projected = {
                x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized[seriesIndex]),
                y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized[seriesIndex])
              };
            } else {
              projected = {
                x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized[seriesIndex]),
                y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized[seriesIndex])
              }
            }
    
            // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
            // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
            // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
            // add any automated positioning.
            if(labelAxis instanceof Chartist.StepAxis) {
              // Offset to center bar between grid lines, but only if the step axis is not stretched
              if(!labelAxis.options.stretch) {
                projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
              }
              // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
              projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
            }
    
            // Enter value in stacked bar values used to remember previous screen value for stacking up bars
            previousStack = stackedBarValues[valueIndex] || zeroPoint;
            stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);
    
            // Skip if value is undefined
            if(value === undefined) {
              return;
            }
    
            var positions = {};
            positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
            positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            positions[labelAxis.counterUnits.pos + '1'] = options.stackBars ? previousStack : zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = options.stackBars ? stackedBarValues[valueIndex] : projected[labelAxis.counterUnits.pos];
    
            // Limit x and y so that they are within the chart rect
            positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
            positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
            positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
            positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
    
            // Create bar element
            bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
              'value': [value.x, value.y].filter(function(v) {
                return v;
              }).join(','),
              'meta': Chartist.getMetaData(series, valueIndex)
            }, Chartist.xmlNs.uri);
    
            this.eventEmitter.emit('draw', Chartist.extend({
              type: 'bar',
              value: value,
              index: valueIndex,
              meta: Chartist.getMetaData(series, valueIndex),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              group: seriesElement,
              element: bar
            }, positions));
          }.bind(this));
        }.bind(this));
    
        this.eventEmitter.emit('created', {
          bounds: valueAxis.bounds,
          chartRect: chartRect,
          axisX: axisX,
          axisY: axisY,
          svg: this.svg,
          options: options
        });
      }
    
      /**
       * This method creates a new bar chart and returns API object that you can use for later changes.
       *
       * @memberof Chartist.Bar
       * @param {String|Node} query A selector query string or directly a DOM element
       * @param {Object} data The data object that needs to consist of a labels and a series array
       * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
       * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
       * @return {Object} An object which exposes the API for the created chart
       *
       * @example
       * // Create a simple bar chart
       * var data = {
       *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
       *   series: [
       *     [5, 2, 4, 2, 0]
       *   ]
       * };
       *
       * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
       * new Chartist.Bar('.ct-chart', data);
       *
       * @example
       * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
       * new Chartist.Bar('.ct-chart', {
       *   labels: [1, 2, 3, 4, 5, 6, 7],
       *   series: [
       *     [1, 3, 2, -5, -3, 1, -6],
       *     [-5, -2, -4, -1, 2, -3, 1]
       *   ]
       * }, {
       *   seriesBarDistance: 12,
       *   low: -10,
       *   high: 10
       * });
       *
       */
      function Bar(query, data, options, responsiveOptions) {
        Chartist.Bar.super.constructor.call(this,
          query,
          data,
          defaultOptions,
          Chartist.extend({}, defaultOptions, options),
          responsiveOptions);
      }
    
      // Creating bar chart type in Chartist namespace
      Chartist.Bar = Chartist.Base.extend({
        constructor: Bar,
        createChart: createChart
      });
    
    }(window, document, Chartist));
    ;/**
     * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
     *
     * @module Chartist.Pie
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';
    
      /**
       * Default options in line charts. Expand the code view to see a detailed list of options with comments.
       *
       * @memberof Chartist.Pie
       */
      var defaultOptions = {
        // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
        width: undefined,
        // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
        height: undefined,
        // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
        chartPadding: 5,
        // Override the class names that are used to generate the SVG structure of the chart
        classNames: {
          chartPie: 'ct-chart-pie',
          chartDonut: 'ct-chart-donut',
          series: 'ct-series',
          slicePie: 'ct-slice-pie',
          sliceDonut: 'ct-slice-donut',
          label: 'ct-label'
        },
        // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
        startAngle: 0,
        // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
        total: undefined,
        // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
        donut: false,
        // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
        donutWidth: 60,
        // If a label should be shown or not
        showLabel: true,
        // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
        labelOffset: 0,
        // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
        labelPosition: 'inside',
        // An interpolation function for the label value
        labelInterpolationFnc: Chartist.noop,
        // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
        labelDirection: 'neutral',
        // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
        reverseData: false
      };
    
      /**
       * Determines SVG anchor position based on direction and center parameter
       *
       * @param center
       * @param label
       * @param direction
       * @return {string}
       */
      function determineAnchorPosition(center, label, direction) {
        var toTheRight = label.x > center.x;
    
        if(toTheRight && direction === 'explode' ||
          !toTheRight && direction === 'implode') {
          return 'start';
        } else if(toTheRight && direction === 'implode' ||
          !toTheRight && direction === 'explode') {
          return 'end';
        } else {
          return 'middle';
        }
      }
    
      /**
       * Creates the pie chart
       *
       * @param options
       */
      function createChart(options) {
        var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle,
          dataArray = Chartist.getDataArray(this.data, options.reverseData);
    
        // Create SVG.js draw
        this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
        // Calculate charting rect
        chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
        // Get biggest circle radius possible within chartRect
        radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
        // Calculate total of all series to get reference value or use total reference from optional options
        totalDataSum = options.total || dataArray.reduce(function(previousValue, currentValue) {
          return previousValue + currentValue;
        }, 0);
    
        // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
        // Unfortunately this is not possible with the current SVG Spec
        // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
        radius -= options.donut ? options.donutWidth / 2  : 0;
    
        // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
        // if regular pie chart it's half of the radius
        if(options.labelPosition === 'outside' || options.donut) {
          labelRadius = radius;
        } else if(options.labelPosition === 'center') {
          // If labelPosition is center we start with 0 and will later wait for the labelOffset
          labelRadius = 0;
        } else {
          // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
          // slice
          labelRadius = radius / 2;
        }
        // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
        labelRadius += options.labelOffset;
    
        // Calculate end angle based on total sum and current data value and offset with padding
        var center = {
          x: chartRect.x1 + chartRect.width() / 2,
          y: chartRect.y2 + chartRect.height() / 2
        };
    
        // Check if there is only one non-zero value in the series array.
        var hasSingleValInSeries = this.data.series.filter(function(val) {
          return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
        }).length === 1;
    
        //if we need to show labels we create the label group now
        if(options.showLabel) {
          labelsGroup = this.svg.elem('g', null, null, true);
        }
    
        // Draw the series
        // initialize series groups
        for (var i = 0; i < this.data.series.length; i++) {
          var series = this.data.series[i];
          seriesGroups[i] = this.svg.elem('g', null, null, true);
    
          // If the series is an object and contains a name or meta data we add a custom attribute
          seriesGroups[i].attr({
            'series-name': series.name
          }, Chartist.xmlNs.uri);
    
          // Use series class from series data or if not set generate one
          seriesGroups[i].addClass([
            options.classNames.series,
            (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(i))
          ].join(' '));
    
          var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
          // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
          // with Z and use 359.99 degrees
          if(endAngle - startAngle === 360) {
            endAngle -= 0.01;
          }
    
          var start = Chartist.polarToCartesian(center.x, center.y, radius, startAngle - (i === 0 || hasSingleValInSeries ? 0 : 0.2)),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
    
          // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
          var path = new Chartist.Svg.Path(!options.donut)
            .move(end.x, end.y)
            .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);
    
          // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
          if(!options.donut) {
            path.line(center.x, center.y);
          }
    
          // Create the SVG path
          // If this is a donut chart we add the donut class, otherwise just a regular slice
          var pathElement = seriesGroups[i].elem('path', {
            d: path.stringify()
          }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);
    
          // Adding the pie series value to the path
          pathElement.attr({
            'value': dataArray[i],
            'meta': Chartist.serialize(series.meta)
          }, Chartist.xmlNs.uri);
    
          // If this is a donut, we add the stroke-width as style attribute
          if(options.donut) {
            pathElement.attr({
              'style': 'stroke-width: ' + (+options.donutWidth) + 'px'
            });
          }
    
          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'slice',
            value: dataArray[i],
            totalDataSum: totalDataSum,
            index: i,
            meta: series.meta,
            series: series,
            group: seriesGroups[i],
            element: pathElement,
            path: path.clone(),
            center: center,
            radius: radius,
            startAngle: startAngle,
            endAngle: endAngle
          });
    
          // If we need to show labels we need to add the label for this slice now
          if(options.showLabel) {
            // Position at the labelRadius distance from center and between start and end angle
            var labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2),
              interpolatedValue = options.labelInterpolationFnc(this.data.labels ? this.data.labels[i] : dataArray[i], i);
    
            if(interpolatedValue || interpolatedValue === 0) {
              var labelElement = labelsGroup.elem('text', {
                dx: labelPosition.x,
                dy: labelPosition.y,
                'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
              }, options.classNames.label).text('' + interpolatedValue);
    
              // Fire off draw event
              this.eventEmitter.emit('draw', {
                type: 'label',
                index: i,
                group: labelsGroup,
                element: labelElement,
                text: '' + interpolatedValue,
                x: labelPosition.x,
                y: labelPosition.y
              });
            }
          }
    
          // Set next startAngle to current endAngle. Use slight offset so there are no transparent hairline issues
          // (except for last slice)
          startAngle = endAngle;
        }
    
        this.eventEmitter.emit('created', {
          chartRect: chartRect,
          svg: this.svg,
          options: options
        });
      }
    
      /**
       * This method creates a new pie chart and returns an object that can be used to redraw the chart.
       *
       * @memberof Chartist.Pie
       * @param {String|Node} query A selector query string or directly a DOM element
       * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
       * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
       * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
       * @return {Object} An object with a version and an update method to manually redraw the chart
       *
       * @example
       * // Simple pie chart example with four series
       * new Chartist.Pie('.ct-chart', {
       *   series: [10, 2, 4, 3]
       * });
       *
       * @example
       * // Drawing a donut chart
       * new Chartist.Pie('.ct-chart', {
       *   series: [10, 2, 4, 3]
       * }, {
       *   donut: true
       * });
       *
       * @example
       * // Using donut, startAngle and total to draw a gauge chart
       * new Chartist.Pie('.ct-chart', {
       *   series: [20, 10, 30, 40]
       * }, {
       *   donut: true,
       *   donutWidth: 20,
       *   startAngle: 270,
       *   total: 200
       * });
       *
       * @example
       * // Drawing a pie chart with padding and labels that are outside the pie
       * new Chartist.Pie('.ct-chart', {
       *   series: [20, 10, 30, 40]
       * }, {
       *   chartPadding: 30,
       *   labelOffset: 50,
       *   labelDirection: 'explode'
       * });
       *
       * @example
       * // Overriding the class names for individual series as well as a name and meta data.
       * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
       * // to a ct:meta attribute.
       * new Chartist.Pie('.ct-chart', {
       *   series: [{
       *     value: 20,
       *     name: 'Series 1',
       *     className: 'my-custom-class-one',
       *     meta: 'Meta One'
       *   }, {
       *     value: 10,
       *     name: 'Series 2',
       *     className: 'my-custom-class-two',
       *     meta: 'Meta Two'
       *   }, {
       *     value: 70,
       *     name: 'Series 3',
       *     className: 'my-custom-class-three',
       *     meta: 'Meta Three'
       *   }]
       * });
       */
      function Pie(query, data, options, responsiveOptions) {
        Chartist.Pie.super.constructor.call(this,
          query,
          data,
          defaultOptions,
          Chartist.extend({}, defaultOptions, options),
          responsiveOptions);
      }
    
      // Creating pie chart type in Chartist namespace
      Chartist.Pie = Chartist.Base.extend({
        constructor: Pie,
        createChart: createChart,
        determineAnchorPosition: determineAnchorPosition
      });
    
    }(window, document, Chartist));
    
    return Chartist;
    
    }));
    ;
    /*!
     * Bootstrap v3.3.5 (http://getbootstrap.com)
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under the MIT license
     */
    if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
    d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
    /**
     * Owl carousel
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     * @todo Lazy Load Icon
     * @todo prevent animationend bubling
     * @todo itemsScaleUp
     * @todo Test Zepto
     * @todo stagePadding calculate wrong active classes
     */
    ;(function($, window, document, undefined) {
    
        var drag, state, e;
    
        /**
         * Template for status information about drag and touch events.
         * @private
         */
        drag = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        };
    
        /**
         * Template for some status informations.
         * @private
         */
        state = {
            isTouch: false,
            isScrolling: false,
            isSwiping: false,
            direction: false,
            inMotion: false
        };
    
        /**
         * Event functions references.
         * @private
         */
        e = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        };
    
        /**
         * Creates a carousel.
         * @class The Owl Carousel.
         * @public
         * @param {HTMLElement|jQuery} element - The element to create the carousel for.
         * @param {Object} [options] - The options
         */
        function Owl(element, options) {
    
            /**
             * Current settings for the carousel.
             * @public
             */
            this.settings = null;
    
            /**
             * Current options set by the caller including defaults.
             * @public
             */
            this.options = $.extend({}, Owl.Defaults, options);
    
            /**
             * Plugin element.
             * @public
             */
            this.$element = $(element);
    
            /**
             * Caches informations about drag and touch events.
             */
            this.drag = $.extend({}, drag);
    
            /**
             * Caches some status informations.
             * @protected
             */
            this.state = $.extend({}, state);
    
            /**
             * @protected
             * @todo Must be documented
             */
            this.e = $.extend({}, e);
    
            /**
             * References to the running plugins of this carousel.
             * @protected
             */
            this._plugins = {};
    
            /**
             * Currently suppressed events to prevent them from beeing retriggered.
             * @protected
             */
            this._supress = {};
    
            /**
             * Absolute current position.
             * @protected
             */
            this._current = null;
    
            /**
             * Animation speed in milliseconds.
             * @protected
             */
            this._speed = null;
    
            /**
             * Coordinates of all items in pixel.
             * @todo The name of this member is missleading.
             * @protected
             */
            this._coordinates = [];
    
            /**
             * Current breakpoint.
             * @todo Real media queries would be nice.
             * @protected
             */
            this._breakpoint = null;
    
            /**
             * Current width of the plugin element.
             */
            this._width = null;
    
            /**
             * All real items.
             * @protected
             */
            this._items = [];
    
            /**
             * All cloned items.
             * @protected
             */
            this._clones = [];
    
            /**
             * Merge values of all items.
             * @todo Maybe this could be part of a plugin.
             * @protected
             */
            this._mergers = [];
    
            /**
             * Invalidated parts within the update process.
             * @protected
             */
            this._invalidated = {};
    
            /**
             * Ordered list of workers for the update process.
             * @protected
             */
            this._pipe = [];
    
            $.each(Owl.Plugins, $.proxy(function(key, plugin) {
                this._plugins[key[0].toLowerCase() + key.slice(1)]
                    = new plugin(this);
            }, this));
    
            $.each(Owl.Pipe, $.proxy(function(priority, worker) {
                this._pipe.push({
                    'filter': worker.filter,
                    'run': $.proxy(worker.run, this)
                });
            }, this));
    
            this.setup();
            this.initialize();
        }
    
        /**
         * Default options for the carousel.
         * @public
         */
        Owl.Defaults = {
            items: 3,
            loop: false,
            center: false,
    
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            freeDrag: false,
    
            margin: 0,
            stagePadding: 0,
    
            merge: false,
            mergeFit: true,
            autoWidth: false,
    
            startPosition: 0,
            rtl: false,
    
            smartSpeed: 250,
            fluidSpeed: false,
            dragEndSpeed: false,
    
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: window,
            responsiveClass: false,
    
            fallbackEasing: 'swing',
    
            info: false,
    
            nestedItemSelector: false,
            itemElement: 'div',
            stageElement: 'div',
    
            // Classes and Names
            themeClass: 'owl-theme',
            baseClass: 'owl-carousel',
            itemClass: 'owl-item',
            centerClass: 'center',
            activeClass: 'active'
        };
    
        /**
         * Enumeration for width.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Width = {
            Default: 'default',
            Inner: 'inner',
            Outer: 'outer'
        };
    
        /**
         * Contains all registered plugins.
         * @public
         */
        Owl.Plugins = {};
    
        /**
         * Update pipe.
         */
        Owl.Pipe = [ {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current = this._items && this._items[this.relative(this._current)];
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                var cached = this._clones,
                    clones = this.$stage.children('.cloned');
    
                if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
                    this.$stage.children('.cloned').remove();
                    this._clones = [];
                }
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                var i, n,
                    clones = this._clones,
                    items = this._items,
                    delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
    
                for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                    if (delta > 0) {
                        this.$stage.children().eq(items.length + clones.length - 1).remove();
                        clones.pop();
                        this.$stage.children().eq(0).remove();
                        clones.pop();
                    } else {
                        clones.push(clones.length / 2);
                        this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
                        clones.push(items.length - 1 - (clones.length - 1) / 2);
                        this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
                    }
                }
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var rtl = (this.settings.rtl ? 1 : -1),
                    width = (this.width() / this.settings.items).toFixed(3),
                    coordinate = 0, merge, i, n;
    
                this._coordinates = [];
                for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                    merge = this._mergers[this.relative(i)];
                    merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
                    coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
    
                    this._coordinates.push(coordinate);
                }
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
                    'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                    'padding-left': this.settings.stagePadding || '',
                    'padding-right': this.settings.stagePadding || ''
                };
    
                this.$stage.css(css);
    
                css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
                css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;
    
                if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
                    for (i = 0, n = this._coordinates.length; i < n; i++) {
                        css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                        this.$stage.children().eq(i).css(css);
                    }
                } else {
                    this.$stage.children().css(css);
                }
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current && this.reset(this.$stage.children().index(cache.current));
            }
        }, {
            filter: [ 'position' ],
            run: function() {
                this.animate(this.coordinates(this._current));
            }
        }, {
            filter: [ 'width', 'position', 'items', 'settings' ],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    padding = this.settings.stagePadding * 2,
                    begin = this.coordinates(this.current()) + padding,
                    end = begin + this.width() * rtl,
                    inner, outer, matches = [], i, n;
    
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    inner = this._coordinates[i - 1] || 0;
                    outer = Math.abs(this._coordinates[i]) + padding * rtl;
    
                    if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                        || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                        matches.push(i);
                    }
                }
    
                this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
                this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
    
                if (this.settings.center) {
                    this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
                    this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
                }
            }
        } ];
    
        /**
         * Initializes the carousel.
         * @protected
         */
        Owl.prototype.initialize = function() {
            this.trigger('initialize');
    
            this.$element
                .addClass(this.settings.baseClass)
                .addClass(this.settings.themeClass)
                .toggleClass('owl-rtl', this.settings.rtl);
    
            // check support
            this.browserSupport();
    
            if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
                var imgs, nestedSelector, width;
                imgs = this.$element.find('img');
                nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
                width = this.$element.children(nestedSelector).width();
    
                if (imgs.length && width <= 0) {
                    this.preloadAutoWidthImages(imgs);
                    return false;
                }
            }
    
            this.$element.addClass('owl-loading');
    
            // create stage
            this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
                .wrap('<div class="owl-stage-outer">');
    
            // append stage
            this.$element.append(this.$stage.parent());
    
            // append content
            this.replace(this.$element.children().not(this.$stage.parent()));
    
            // set view width
            this._width = this.$element.width();
    
            // update view
            this.refresh();
    
            this.$element.removeClass('owl-loading').addClass('owl-loaded');
    
            // attach generic events
            this.eventsCall();
    
            // attach generic events
            this.internalEvents();
    
            // attach custom control events
            this.addTriggerableEvents();
    
            this.trigger('initialized');
        };
    
        /**
         * Setups the current settings.
         * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
         * @todo Support for media queries by using `matchMedia` would be nice.
         * @public
         */
        Owl.prototype.setup = function() {
            var viewport = this.viewport(),
                overwrites = this.options.responsive,
                match = -1,
                settings = null;
    
            if (!overwrites) {
                settings = $.extend({}, this.options);
            } else {
                $.each(overwrites, function(breakpoint) {
                    if (breakpoint <= viewport && breakpoint > match) {
                        match = Number(breakpoint);
                    }
                });
    
                settings = $.extend({}, this.options, overwrites[match]);
                delete settings.responsive;
    
                // responsive class
                if (settings.responsiveClass) {
                    this.$element.attr('class', function(i, c) {
                        return c.replace(/\b owl-responsive-\S+/g, '');
                    }).addClass('owl-responsive-' + match);
                }
            }
    
            if (this.settings === null || this._breakpoint !== match) {
                this.trigger('change', { property: { name: 'settings', value: settings } });
                this._breakpoint = match;
                this.settings = settings;
                this.invalidate('settings');
                this.trigger('changed', { property: { name: 'settings', value: this.settings } });
            }
        };
    
        /**
         * Updates option logic if necessery.
         * @protected
         */
        Owl.prototype.optionsLogic = function() {
            // Toggle Center class
            this.$element.toggleClass('owl-center', this.settings.center);
    
            // if items number is less than in body
            if (this.settings.loop && this._items.length < this.settings.items) {
                this.settings.loop = false;
            }
    
            if (this.settings.autoWidth) {
                this.settings.stagePadding = false;
                this.settings.merge = false;
            }
        };
    
        /**
         * Prepares an item before add.
         * @todo Rename event parameter `content` to `item`.
         * @protected
         * @returns {jQuery|HTMLElement} - The item container.
         */
        Owl.prototype.prepare = function(item) {
            var event = this.trigger('prepare', { content: item });
    
            if (!event.data) {
                event.data = $('<' + this.settings.itemElement + '/>')
                    .addClass(this.settings.itemClass).append(item)
            }
    
            this.trigger('prepared', { content: event.data });
    
            return event.data;
        };
    
        /**
         * Updates the view.
         * @public
         */
        Owl.prototype.update = function() {
            var i = 0,
                n = this._pipe.length,
                filter = $.proxy(function(p) { return this[p] }, this._invalidated),
                cache = {};
    
            while (i < n) {
                if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                    this._pipe[i].run(cache);
                }
                i++;
            }
    
            this._invalidated = {};
        };
    
        /**
         * Gets the width of the view.
         * @public
         * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
         * @returns {Number} - The width of the view in pixel.
         */
        Owl.prototype.width = function(dimension) {
            dimension = dimension || Owl.Width.Default;
            switch (dimension) {
                case Owl.Width.Inner:
                case Owl.Width.Outer:
                    return this._width;
                default:
                    return this._width - this.settings.stagePadding * 2 + this.settings.margin;
            }
        };
    
        /**
         * Refreshes the carousel primarily for adaptive purposes.
         * @public
         */
        Owl.prototype.refresh = function() {
            if (this._items.length === 0) {
                return false;
            }
    
            var start = new Date().getTime();
    
            this.trigger('refresh');
    
            this.setup();
    
            this.optionsLogic();
    
            // hide and show methods helps here to set a proper widths,
            // this prevents scrollbar to be calculated in stage width
            this.$stage.addClass('owl-refresh');
    
            this.update();
    
            this.$stage.removeClass('owl-refresh');
    
            this.state.orientation = window.orientation;
    
            this.watchVisibility();
    
            this.trigger('refreshed');
        };
    
        /**
         * Save internal event references and add event based functions.
         * @protected
         */
        Owl.prototype.eventsCall = function() {
            // Save events references
            this.e._onDragStart = $.proxy(function(e) {
                this.onDragStart(e);
            }, this);
            this.e._onDragMove = $.proxy(function(e) {
                this.onDragMove(e);
            }, this);
            this.e._onDragEnd = $.proxy(function(e) {
                this.onDragEnd(e);
            }, this);
            this.e._onResize = $.proxy(function(e) {
                this.onResize(e);
            }, this);
            this.e._transitionEnd = $.proxy(function(e) {
                this.transitionEnd(e);
            }, this);
            this.e._preventClick = $.proxy(function(e) {
                this.preventClick(e);
            }, this);
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onThrottledResize = function() {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onResize = function() {
            if (!this._items.length) {
                return false;
            }
    
            if (this._width === this.$element.width()) {
                return false;
            }
    
            if (this.trigger('resize').isDefaultPrevented()) {
                return false;
            }
    
            this._width = this.$element.width();
    
            this.invalidate('width');
    
            this.refresh();
    
            this.trigger('resized');
        };
    
        /**
         * Checks for touch/mouse drag event type and add run event handlers.
         * @protected
         */
        Owl.prototype.eventsRouter = function(event) {
            var type = event.type;
    
            if (type === "mousedown" || type === "touchstart") {
                this.onDragStart(event);
            } else if (type === "mousemove" || type === "touchmove") {
                this.onDragMove(event);
            } else if (type === "mouseup" || type === "touchend") {
                this.onDragEnd(event);
            } else if (type === "touchcancel") {
                this.onDragEnd(event);
            }
        };
    
        /**
         * Checks for touch/mouse drag options and add necessery event handlers.
         * @protected
         */
        Owl.prototype.internalEvents = function() {
            var isTouch = isTouchSupport(),
                isTouchIE = isTouchSupportIE();
    
            if (this.settings.mouseDrag){
                this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
                this.$stage.on('dragstart', function() { return false });
                this.$stage.get(0).onselectstart = function() { return false };
            } else {
                this.$element.addClass('owl-text-select-on');
            }
    
            if (this.settings.touchDrag && !isTouchIE){
                this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
            }
    
            // catch transitionEnd event
            if (this.transitionEndVendor) {
                this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
            }
    
            // responsive
            if (this.settings.responsive !== false) {
                this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
            }
        };
    
        /**
         * Handles touchstart/mousedown event.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragStart = function(event) {
            var ev, isTouchEvent, pageX, pageY, animatedPos;
    
            ev = event.originalEvent || event || window.event;
    
            // prevent right click
            if (ev.which === 3 || this.state.isTouch) {
                return false;
            }
    
            if (ev.type === 'mousedown') {
                this.$stage.addClass('owl-grab');
            }
    
            this.trigger('drag');
            this.drag.startTime = new Date().getTime();
            this.speed(0);
            this.state.isTouch = true;
            this.state.isScrolling = false;
            this.state.isSwiping = false;
            this.drag.distance = 0;
    
            pageX = getTouches(ev).x;
            pageY = getTouches(ev).y;
    
            // get stage position left
            this.drag.offsetX = this.$stage.position().left;
            this.drag.offsetY = this.$stage.position().top;
    
            if (this.settings.rtl) {
                this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
                    + this.settings.margin;
            }
    
            // catch position // ie to fix
            if (this.state.inMotion && this.support3d) {
                animatedPos = this.getTransformProperty();
                this.drag.offsetX = animatedPos;
                this.animate(animatedPos);
                this.state.inMotion = true;
            } else if (this.state.inMotion && !this.support3d) {
                this.state.inMotion = false;
                return false;
            }
    
            this.drag.startX = pageX - this.drag.offsetX;
            this.drag.startY = pageY - this.drag.offsetY;
    
            this.drag.start = pageX - this.drag.startX;
            this.drag.targetEl = ev.target || ev.srcElement;
            this.drag.updatedX = this.drag.start;
    
            // to do/check
            // prevent links and images dragging;
            if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
                this.drag.targetEl.draggable = false;
            }
    
            $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
        };
    
        /**
         * Handles the touchmove/mousemove events.
         * @todo Simplify
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragMove = function(event) {
            var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
    
            if (!this.state.isTouch) {
                return;
            }
    
            if (this.state.isScrolling) {
                return;
            }
    
            ev = event.originalEvent || event || window.event;
    
            pageX = getTouches(ev).x;
            pageY = getTouches(ev).y;
    
            // Drag Direction
            this.drag.currentX = pageX - this.drag.startX;
            this.drag.currentY = pageY - this.drag.startY;
            this.drag.distance = this.drag.currentX - this.drag.offsetX;
    
            // Check move direction
            if (this.drag.distance < 0) {
                this.state.direction = this.settings.rtl ? 'right' : 'left';
            } else if (this.drag.distance > 0) {
                this.state.direction = this.settings.rtl ? 'left' : 'right';
            }
            // Loop
            if (this.settings.loop) {
                if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
                    this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
                } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
                    this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
                }
            } else {
                // pull
                minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
                maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
                pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
                this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
            }
    
            // Lock browser if swiping horizontal
    
            if ((this.drag.distance > 8 || this.drag.distance < -8)) {
                if (ev.preventDefault !== undefined) {
                    ev.preventDefault();
                } else {
                    ev.returnValue = false;
                }
                this.state.isSwiping = true;
            }
    
            this.drag.updatedX = this.drag.currentX;
    
            // Lock Owl if scrolling
            if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
                this.state.isScrolling = true;
                this.drag.updatedX = this.drag.start;
            }
    
            this.animate(this.drag.updatedX);
        };
    
        /**
         * Handles the touchend/mouseup events.
         * @protected
         */
        Owl.prototype.onDragEnd = function(event) {
            var compareTimes, distanceAbs, closest;
    
            if (!this.state.isTouch) {
                return;
            }
    
            if (event.type === 'mouseup') {
                this.$stage.removeClass('owl-grab');
            }
    
            this.trigger('dragged');
    
            // prevent links and images dragging;
            this.drag.targetEl.removeAttribute("draggable");
    
            // remove drag event listeners
    
            this.state.isTouch = false;
            this.state.isScrolling = false;
            this.state.isSwiping = false;
    
            // to check
            if (this.drag.distance === 0 && this.state.inMotion !== true) {
                this.state.inMotion = false;
                return false;
            }
    
            // prevent clicks while scrolling
    
            this.drag.endTime = new Date().getTime();
            compareTimes = this.drag.endTime - this.drag.startTime;
            distanceAbs = Math.abs(this.drag.distance);
    
            // to test
            if (distanceAbs > 3 || compareTimes > 300) {
                this.removeClick(this.drag.targetEl);
            }
    
            closest = this.closest(this.drag.updatedX);
    
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(closest);
            this.invalidate('position');
            this.update();
    
            // if pullDrag is off then fire transitionEnd event manually when stick
            // to border
            if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
                this.transitionEnd();
            }
    
            this.drag.distance = 0;
    
            $(document).off('.owl.dragEvents');
        };
    
        /**
         * Attaches `preventClick` to disable link while swipping.
         * @protected
         * @param {HTMLElement} [target] - The target of the `click` event.
         */
        Owl.prototype.removeClick = function(target) {
            this.drag.targetEl = target;
            $(target).on('click.preventClick', this.e._preventClick);
            // to make sure click is removed:
            window.setTimeout(function() {
                $(target).off('click.preventClick');
            }, 300);
        };
    
        /**
         * Suppresses click event.
         * @protected
         * @param {Event} ev - The event arguments.
         */
        Owl.prototype.preventClick = function(ev) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            $(ev.target).off('click.preventClick');
        };
    
        /**
         * Catches stage position while animate (only CSS3).
         * @protected
         * @returns
         */
        Owl.prototype.getTransformProperty = function() {
            var transform, matrix3d;
    
            transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
            // var transform = this.$stage.css(this.vendorName + 'transform')
            transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
            matrix3d = transform.length === 16;
    
            return matrix3d !== true ? transform[4] : transform[12];
        };
    
        /**
         * Gets absolute position of the closest item for a coordinate.
         * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
         * @protected
         * @param {Number} coordinate - The coordinate in pixel.
         * @return {Number} - The absolute position of the closest item.
         */
        Owl.prototype.closest = function(coordinate) {
            var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
    
            if (!this.settings.freeDrag) {
                // check closest item
                $.each(coordinates, $.proxy(function(index, value) {
                    if (coordinate > value - pull && coordinate < value + pull) {
                        position = index;
                    } else if (this.op(coordinate, '<', value)
                        && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                        position = this.state.direction === 'left' ? index + 1 : index;
                    }
                    return position === -1;
                }, this));
            }
    
            if (!this.settings.loop) {
                // non loop boundries
                if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                    position = coordinate = this.minimum();
                } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                    position = coordinate = this.maximum();
                }
            }
    
            return position;
        };
    
        /**
         * Animates the stage.
         * @public
         * @param {Number} coordinate - The coordinate in pixels.
         */
        Owl.prototype.animate = function(coordinate) {
            this.trigger('translate');
            this.state.inMotion = this.speed() > 0;
    
            if (this.support3d) {
                this.$stage.css({
                    transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
                    transition: (this.speed() / 1000) + 's'
                });
            } else if (this.state.isTouch) {
                this.$stage.css({
                    left: coordinate + 'px'
                });
            } else {
                this.$stage.animate({
                    left: coordinate
                }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
                    if (this.state.inMotion) {
                        this.transitionEnd();
                    }
                }, this));
            }
        };
    
        /**
         * Sets the absolute position of the current item.
         * @public
         * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
         * @returns {Number} - The absolute position of the current item.
         */
        Owl.prototype.current = function(position) {
            if (position === undefined) {
                return this._current;
            }
    
            if (this._items.length === 0) {
                return undefined;
            }
    
            position = this.normalize(position);
    
            if (this._current !== position) {
                var event = this.trigger('change', { property: { name: 'position', value: position } });
    
                if (event.data !== undefined) {
                    position = this.normalize(event.data);
                }
    
                this._current = position;
    
                this.invalidate('position');
    
                this.trigger('changed', { property: { name: 'position', value: this._current } });
            }
    
            return this._current;
        };
    
        /**
         * Invalidates the given part of the update routine.
         * @param {String} part - The part to invalidate.
         */
        Owl.prototype.invalidate = function(part) {
            this._invalidated[part] = true;
        }
    
        /**
         * Resets the absolute position of the current item.
         * @public
         * @param {Number} position - The absolute position of the new item.
         */
        Owl.prototype.reset = function(position) {
            position = this.normalize(position);
    
            if (position === undefined) {
                return;
            }
    
            this._speed = 0;
            this._current = position;
    
            this.suppress([ 'translate', 'translated' ]);
    
            this.animate(this.coordinates(position));
    
            this.release([ 'translate', 'translated' ]);
        };
    
        /**
         * Normalizes an absolute or a relative position for an item.
         * @public
         * @param {Number} position - The absolute or relative position to normalize.
         * @param {Boolean} [relative=false] - Whether the given position is relative or not.
         * @returns {Number} - The normalized position.
         */
        Owl.prototype.normalize = function(position, relative) {
            var n = (relative ? this._items.length : this._items.length + this._clones.length);
    
            if (!$.isNumeric(position) || n < 1) {
                return undefined;
            }
    
            if (this._clones.length) {
                position = ((position % n) + n) % n;
            } else {
                position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
            }
    
            return position;
        };
    
        /**
         * Converts an absolute position for an item into a relative position.
         * @public
         * @param {Number} position - The absolute position to convert.
         * @returns {Number} - The converted position.
         */
        Owl.prototype.relative = function(position) {
            position = this.normalize(position);
            position = position - this._clones.length / 2;
            return this.normalize(position, true);
        };
    
        /**
         * Gets the maximum position for an item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.maximum = function(relative) {
            var maximum, width, i = 0, coordinate,
                settings = this.settings;
    
            if (relative) {
                return this._items.length - 1;
            }
    
            if (!settings.loop && settings.center) {
                maximum = this._items.length - 1;
            } else if (!settings.loop && !settings.center) {
                maximum = this._items.length - settings.items;
            } else if (settings.loop || settings.center) {
                maximum = this._items.length + settings.items;
            } else if (settings.autoWidth || settings.merge) {
                revert = settings.rtl ? 1 : -1;
                width = this.$stage.width() - this.$element.width();
                while (coordinate = this.coordinates(i)) {
                    if (coordinate * revert >= width) {
                        break;
                    }
                    maximum = ++i;
                }
            } else {
                throw 'Can not detect maximum absolute position.'
            }
    
            return maximum;
        };
    
        /**
         * Gets the minimum position for an item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.minimum = function(relative) {
            if (relative) {
                return 0;
            }
    
            return this._clones.length / 2;
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.items = function(position) {
            if (position === undefined) {
                return this._items.slice();
            }
    
            position = this.normalize(position, true);
            return this._items[position];
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.mergers = function(position) {
            if (position === undefined) {
                return this._mergers.slice();
            }
    
            position = this.normalize(position, true);
            return this._mergers[position];
        };
    
        /**
         * Gets the absolute positions of clones for an item.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
         */
        Owl.prototype.clones = function(position) {
            var odd = this._clones.length / 2,
                even = odd + this._items.length,
                map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
    
            if (position === undefined) {
                return $.map(this._clones, function(v, i) { return map(i) });
            }
    
            return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
        };
    
        /**
         * Sets the current animation speed.
         * @public
         * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
         * @returns {Number} - The current animation speed in milliseconds.
         */
        Owl.prototype.speed = function(speed) {
            if (speed !== undefined) {
                this._speed = speed;
            }
    
            return this._speed;
        };
    
        /**
         * Gets the coordinate of an item.
         * @todo The name of this method is missleanding.
         * @public
         * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
         * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
         */
        Owl.prototype.coordinates = function(position) {
            var coordinate = null;
    
            if (position === undefined) {
                return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                    return this.coordinates(index);
                }, this));
            }
    
            if (this.settings.center) {
                coordinate = this._coordinates[position];
                coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
            } else {
                coordinate = this._coordinates[position - 1] || 0;
            }
    
            return coordinate;
        };
    
        /**
         * Calculates the speed for a translation.
         * @protected
         * @param {Number} from - The absolute position of the start item.
         * @param {Number} to - The absolute position of the target item.
         * @param {Number} [factor=undefined] - The time factor in milliseconds.
         * @returns {Number} - The time in milliseconds for the translation.
         */
        Owl.prototype.duration = function(from, to, factor) {
            return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
        };
    
        /**
         * Slides to the specified item.
         * @public
         * @param {Number} position - The position of the item.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.to = function(position, speed) {
            if (this.settings.loop) {
                var distance = position - this.relative(this.current()),
                    revert = this.current(),
                    before = this.current(),
                    after = this.current() + distance,
                    direction = before - after < 0 ? true : false,
                    items = this._clones.length + this._items.length;
    
                if (after < this.settings.items && direction === false) {
                    revert = before + this._items.length;
                    this.reset(revert);
                } else if (after >= items - this.settings.items && direction === true) {
                    revert = before - this._items.length;
                    this.reset(revert);
                }
                window.clearTimeout(this.e._goToLoop);
                this.e._goToLoop = window.setTimeout($.proxy(function() {
                    this.speed(this.duration(this.current(), revert + distance, speed));
                    this.current(revert + distance);
                    this.update();
                }, this), 30);
            } else {
                this.speed(this.duration(this.current(), position, speed));
                this.current(position);
                this.update();
            }
        };
    
        /**
         * Slides to the next item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.next = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) + 1, speed);
        };
    
        /**
         * Slides to the previous item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.prev = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) - 1, speed);
        };
    
        /**
         * Handles the end of an animation.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.transitionEnd = function(event) {
    
            // if css2 animation then event object is undefined
            if (event !== undefined) {
                event.stopPropagation();
    
                // Catch only owl-stage transitionEnd event
                if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                    return false;
                }
            }
    
            this.state.inMotion = false;
            this.trigger('translated');
        };
    
        /**
         * Gets viewport width.
         * @protected
         * @return {Number} - The width in pixel.
         */
        Owl.prototype.viewport = function() {
            var width;
            if (this.options.responsiveBaseElement !== window) {
                width = $(this.options.responsiveBaseElement).width();
            } else if (window.innerWidth) {
                width = window.innerWidth;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                width = document.documentElement.clientWidth;
            } else {
                throw 'Can not detect viewport width.';
            }
            return width;
        };
    
        /**
         * Replaces the current content.
         * @public
         * @param {HTMLElement|jQuery|String} content - The new content.
         */
        Owl.prototype.replace = function(content) {
            this.$stage.empty();
            this._items = [];
    
            if (content) {
                content = (content instanceof jQuery) ? content : $(content);
            }
    
            if (this.settings.nestedItemSelector) {
                content = content.find('.' + this.settings.nestedItemSelector);
            }
    
            content.filter(function() {
                return this.nodeType === 1;
            }).each($.proxy(function(index, item) {
                item = this.prepare(item);
                this.$stage.append(item);
                this._items.push(item);
                this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
            }, this));
    
            this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    
            this.invalidate('items');
        };
    
        /**
         * Adds an item.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {HTMLElement|jQuery|String} content - The item content to add.
         * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
         */
        Owl.prototype.add = function(content, position) {
            position = position === undefined ? this._items.length : this.normalize(position, true);
    
            this.trigger('add', { content: content, position: position });
    
            if (this._items.length === 0 || position === this._items.length) {
                this.$stage.append(content);
                this._items.push(content);
                this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
            } else {
                this._items[position].before(content);
                this._items.splice(position, 0, content);
                this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
            }
    
            this.invalidate('items');
    
            this.trigger('added', { content: content, position: position });
        };
    
        /**
         * Removes an item by its position.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {Number} position - The relative position of the item to remove.
         */
        Owl.prototype.remove = function(position) {
            position = this.normalize(position, true);
    
            if (position === undefined) {
                return;
            }
    
            this.trigger('remove', { content: this._items[position], position: position });
    
            this._items[position].remove();
            this._items.splice(position, 1);
            this._mergers.splice(position, 1);
    
            this.invalidate('items');
    
            this.trigger('removed', { content: null, position: position });
        };
    
        /**
         * Adds triggerable events.
         * @protected
         */
        Owl.prototype.addTriggerableEvents = function() {
            var handler = $.proxy(function(callback, event) {
                return $.proxy(function(e) {
                    if (e.relatedTarget !== this) {
                        this.suppress([ event ]);
                        callback.apply(this, [].slice.call(arguments, 1));
                        this.release([ event ]);
                    }
                }, this);
            }, this);
    
            $.each({
                'next': this.next,
                'prev': this.prev,
                'to': this.to,
                'destroy': this.destroy,
                'refresh': this.refresh,
                'replace': this.replace,
                'add': this.add,
                'remove': this.remove
            }, $.proxy(function(event, callback) {
                this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
            }, this));
    
        };
    
        /**
         * Watches the visibility of the carousel element.
         * @protected
         */
        Owl.prototype.watchVisibility = function() {
    
            // test on zepto
            if (!isElVisible(this.$element.get(0))) {
                this.$element.addClass('owl-hidden');
                window.clearInterval(this.e._checkVisibile);
                this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
            }
    
            function isElVisible(el) {
                return el.offsetWidth > 0 && el.offsetHeight > 0;
            }
    
            function checkVisible() {
                if (isElVisible(this.$element.get(0))) {
                    this.$element.removeClass('owl-hidden');
                    this.refresh();
                    window.clearInterval(this.e._checkVisibile);
                }
            }
        };
    
        /**
         * Preloads images with auto width.
         * @protected
         * @todo Still to test
         */
        Owl.prototype.preloadAutoWidthImages = function(imgs) {
            var loaded, that, $el, img;
    
            loaded = 0;
            that = this;
            imgs.each(function(i, el) {
                $el = $(el);
                img = new Image();
    
                img.onload = function() {
                    loaded++;
                    $el.attr('src', img.src);
                    $el.css('opacity', 1);
                    if (loaded >= imgs.length) {
                        that.state.imagesLoaded = true;
                        that.initialize();
                    }
                };
    
                img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
            });
        };
    
        /**
         * Destroys the carousel.
         * @public
         */
        Owl.prototype.destroy = function() {
    
            if (this.$element.hasClass(this.settings.themeClass)) {
                this.$element.removeClass(this.settings.themeClass);
            }
    
            if (this.settings.responsive !== false) {
                $(window).off('resize.owl.carousel');
            }
    
            if (this.transitionEndVendor) {
                this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            }
    
            for ( var i in this._plugins) {
                this._plugins[i].destroy();
            }
    
            if (this.settings.mouseDrag || this.settings.touchDrag) {
                this.$stage.off('mousedown touchstart touchcancel');
                $(document).off('.owl.dragEvents');
                this.$stage.get(0).onselectstart = function() {};
                this.$stage.off('dragstart', function() { return false });
            }
    
            // remove event handlers in the ".owl.carousel" namespace
            this.$element.off('.owl');
    
            this.$stage.children('.cloned').remove();
            this.e = null;
            this.$element.removeData('owlCarousel');
    
            this.$stage.children().contents().unwrap();
            this.$stage.children().unwrap();
            this.$stage.unwrap();
        };
    
        /**
         * Operators to calculate right-to-left and left-to-right.
         * @protected
         * @param {Number} [a] - The left side operand.
         * @param {String} [o] - The operator.
         * @param {Number} [b] - The right side operand.
         */
        Owl.prototype.op = function(a, o, b) {
            var rtl = this.settings.rtl;
            switch (o) {
                case '<':
                    return rtl ? a > b : a < b;
                case '>':
                    return rtl ? a < b : a > b;
                case '>=':
                    return rtl ? a <= b : a >= b;
                case '<=':
                    return rtl ? a >= b : a <= b;
                default:
                    break;
            }
        };
    
        /**
         * Attaches to an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The event handler to attach.
         * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
         */
        Owl.prototype.on = function(element, event, listener, capture) {
            if (element.addEventListener) {
                element.addEventListener(event, listener, capture);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, listener);
            }
        };
    
        /**
         * Detaches from an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The attached event handler to detach.
         * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
         */
        Owl.prototype.off = function(element, event, listener, capture) {
            if (element.removeEventListener) {
                element.removeEventListener(event, listener, capture);
            } else if (element.detachEvent) {
                element.detachEvent('on' + event, listener);
            }
        };
    
        /**
         * Triggers an public event.
         * @protected
         * @param {String} name - The event name.
         * @param {*} [data=null] - The event data.
         * @param {String} [namespace=.owl.carousel] - The event namespace.
         * @returns {Event} - The event arguments.
         */
        Owl.prototype.trigger = function(name, data, namespace) {
            var status = {
                item: { count: this._items.length, index: this.current() }
            }, handler = $.camelCase(
                $.grep([ 'on', name, namespace ], function(v) { return v })
                    .join('-').toLowerCase()
            ), event = $.Event(
                [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );
    
            if (!this._supress[name]) {
                $.each(this._plugins, function(name, plugin) {
                    if (plugin.onTrigger) {
                        plugin.onTrigger(event);
                    }
                });
    
                this.$element.trigger(event);
    
                if (this.settings && typeof this.settings[handler] === 'function') {
                    this.settings[handler].apply(this, event);
                }
            }
    
            return event;
        };
    
        /**
         * Suppresses events.
         * @protected
         * @param {Array.<String>} events - The events to suppress.
         */
        Owl.prototype.suppress = function(events) {
            $.each(events, $.proxy(function(index, event) {
                this._supress[event] = true;
            }, this));
        }
    
        /**
         * Releases suppressed events.
         * @protected
         * @param {Array.<String>} events - The events to release.
         */
        Owl.prototype.release = function(events) {
            $.each(events, $.proxy(function(index, event) {
                delete this._supress[event];
            }, this));
        }
    
        /**
         * Checks the availability of some browser features.
         * @protected
         */
        Owl.prototype.browserSupport = function() {
            this.support3d = isPerspective();
    
            if (this.support3d) {
                this.transformVendor = isTransform();
    
                // take transitionend event name by detecting transition
                var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
                this.transitionEndVendor = endVendors[isTransition()];
    
                // take vendor name from transform name
                this.vendorName = this.transformVendor.replace(/Transform/i, '');
                this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
            }
    
            this.state.orientation = window.orientation;
        };
    
        /**
         * Get touch/drag coordinats.
         * @private
         * @param {event} - mousedown/touchstart event
         * @returns {object} - Contains X and Y of current mouse/touch position
         */
    
        function getTouches(event) {
            if (event.touches !== undefined) {
                return {
                    x: event.touches[0].pageX,
                    y: event.touches[0].pageY
                };
            }
    
            if (event.touches === undefined) {
                if (event.pageX !== undefined) {
                    return {
                        x: event.pageX,
                        y: event.pageY
                    };
                }
    
            if (event.pageX === undefined) {
                return {
                        x: event.clientX,
                        y: event.clientY
                    };
                }
            }
        }
    
        /**
         * Checks for CSS support.
         * @private
         * @param {Array} array - The CSS properties to check for.
         * @returns {Array} - Contains the supported CSS property name and its index or `false`.
         */
        function isStyleSupported(array) {
            var p, s, fake = document.createElement('div'), list = array;
            for (p in list) {
                s = list[p];
                if (typeof fake.style[s] !== 'undefined') {
                    fake = null;
                    return [ s, p ];
                }
            }
            return [ false ];
        }
    
        /**
         * Checks for CSS transition support.
         * @private
         * @todo Realy bad design
         * @returns {Number}
         */
        function isTransition() {
            return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
        }
    
        /**
         * Checks for CSS transform support.
         * @private
         * @returns {String} The supported property name or false.
         */
        function isTransform() {
            return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
        }
    
        /**
         * Checks for CSS perspective support.
         * @private
         * @returns {String} The supported property name or false.
         */
        function isPerspective() {
            return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
        }
    
        /**
         * Checks wether touch is supported or not.
         * @private
         * @returns {Boolean}
         */
        function isTouchSupport() {
            return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
        }
    
        /**
         * Checks wether touch is supported or not for IE.
         * @private
         * @returns {Boolean}
         */
        function isTouchSupportIE() {
            return window.navigator.msPointerEnabled;
        }
    
        /**
         * The jQuery Plugin for the Owl Carousel
         * @public
         */
        $.fn.owlCarousel = function(options) {
            return this.each(function() {
                if (!$(this).data('owlCarousel')) {
                    $(this).data('owlCarousel', new Owl(this, options));
                }
            });
        };
    
        /**
         * The constructor for the jQuery Plugin
         * @public
         */
        $.fn.owlCarousel.Constructor = Owl;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Lazy Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the lazy plugin.
         * @class The Lazy Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Lazy = function(carousel) {
    
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Already loaded items.
             * @protected
             * @type {Array.<jQuery>}
             */
            this._loaded = [];
    
            /**
             * Event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }
    
                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }
    
                    if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                        var settings = this._core.settings,
                            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                            i = ((settings.center && n * -1) || 0),
                            position = ((e.property && e.property.value) || this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function(i, v) { this.load(v) }, this);
    
                        while (i++ < n) {
                            this.load(clones / 2 + this._core.relative(position));
                            clones && $.each(this._core.clones(this._core.relative(position++)), load);
                        }
                    }
                }, this)
            };
    
            // set the default options
            this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
    
            // register event handler
            this._core.$element.on(this._handlers);
        }
    
        /**
         * Default options.
         * @public
         */
        Lazy.Defaults = {
            lazyLoad: false
        }
    
        /**
         * Loads all resources of an item at the specified position.
         * @param {Number} position - The absolute position of the item.
         * @protected
         */
        Lazy.prototype.load = function(position) {
            var $item = this._core.$stage.children().eq(position),
                $elements = $item && $item.find('.owl-lazy');
    
            if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
                return;
            }
    
            $elements.each($.proxy(function(index, element) {
                var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
    
                this._core.trigger('load', { element: $element, url: url }, 'lazy');
    
                if ($element.is('img')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        $element.css('opacity', 1);
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('src', url);
                } else {
                    image = new Image();
                    image.onload = $.proxy(function() {
                        $element.css({
                            'background-image': 'url(' + url + ')',
                            'opacity': '1'
                        });
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this);
                    image.src = url;
                }
            }, this));
    
            this._loaded.push($item.get(0));
        }
    
        /**
         * Destroys the plugin.
         * @public
         */
        Lazy.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this._core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        }
    
        $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * AutoHeight Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the auto height plugin.
         * @class The Auto Height Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoHeight = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function() {
                    if (this._core.settings.autoHeight) {
                        this.update();
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (this._core.settings.autoHeight && e.property.name == 'position'){
                        this.update();
                    }
                }, this),
                'loaded.owl.lazy': $.proxy(function(e) {
                    if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
                        === this._core.$stage.children().eq(this._core.current())) {
                        this.update();
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        AutoHeight.Defaults = {
            autoHeight: false,
            autoHeightClass: 'owl-height'
        };
    
        /**
         * Updates the view.
         */
        AutoHeight.prototype.update = function() {
            this._core.$stage.parent()
                .height(this._core.$stage.children().eq(this._core.current()).height())
                .addClass(this._core.settings.autoHeightClass);
        };
    
        AutoHeight.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Video Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the video plugin.
         * @class The Video Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Video = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Cache all video URLs.
             * @protected
             * @type {Object}
             */
            this._videos = {};
    
            /**
             * Current playing item.
             * @protected
             * @type {jQuery}
             */
            this._playing = null;
    
            /**
             * Whether this is in fullscreen or not.
             * @protected
             * @type {Boolean}
             */
            this._fullscreen = false;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'resize.owl.carousel': $.proxy(function(e) {
                    if (this._core.settings.video && !this.isInFullScreen()) {
                        e.preventDefault();
                    }
                }, this),
                'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                    if (this._playing) {
                        this.stop();
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    var $element = $(e.content).find('.owl-video');
                    if ($element.length) {
                        $element.css('display', 'none');
                        this.fetch($element, $(e.content));
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Video.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
    
            this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
                this.play(e);
            }, this));
        };
    
        /**
         * Default options.
         * @public
         */
        Video.Defaults = {
            video: false,
            videoHeight: false,
            videoWidth: false
        };
    
        /**
         * Gets the video ID and the type (YouTube/Vimeo only).
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {jQuery} item - The item containing the video.
         */
        Video.prototype.fetch = function(target, item) {
    
            var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
                id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
                width = target.attr('data-width') || this._core.settings.videoWidth,
                height = target.attr('data-height') || this._core.settings.videoHeight,
                url = target.attr('href');
    
            if (url) {
                id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
    
                if (id[3].indexOf('youtu') > -1) {
                    type = 'youtube';
                } else if (id[3].indexOf('vimeo') > -1) {
                    type = 'vimeo';
                } else {
                    throw new Error('Video URL not supported.');
                }
                id = id[6];
            } else {
                throw new Error('Missing video URL.');
            }
    
            this._videos[url] = {
                type: type,
                id: id,
                width: width,
                height: height
            };
    
            item.attr('data-video', url);
    
            this.thumbnail(target, this._videos[url]);
        };
    
        /**
         * Creates video thumbnail.
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {Object} info - The video info object.
         * @see `fetch`
         */
        Video.prototype.thumbnail = function(target, video) {
    
            var tnLink,
                icon,
                path,
                dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
                customTn = target.find('img'),
                srcType = 'src',
                lazyClass = '',
                settings = this._core.settings,
                create = function(path) {
                    icon = '<div class="owl-video-play-icon"></div>';
    
                    if (settings.lazyLoad) {
                        tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                    } else {
                        tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                    }
                    target.after(tnLink);
                    target.after(icon);
                };
    
            // wrap video content into owl-video-wrapper div
            target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
    
            if (this._core.settings.lazyLoad) {
                srcType = 'data-src';
                lazyClass = 'owl-lazy';
            }
    
            // custom thumbnail
            if (customTn.length) {
                create(customTn.attr(srcType));
                customTn.remove();
                return false;
            }
    
            if (video.type === 'youtube') {
                path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
                create(path);
            } else if (video.type === 'vimeo') {
                $.ajax({
                    type: 'GET',
                    url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
                    jsonp: 'callback',
                    dataType: 'jsonp',
                    success: function(data) {
                        path = data[0].thumbnail_large;
                        create(path);
                    }
                });
            }
        };
    
        /**
         * Stops the current video.
         * @public
         */
        Video.prototype.stop = function() {
            this._core.trigger('stop', null, 'video');
            this._playing.find('.owl-video-frame').remove();
            this._playing.removeClass('owl-video-playing');
            this._playing = null;
        };
    
        /**
         * Starts the current video.
         * @public
         * @param {Event} ev - The event arguments.
         */
        Video.prototype.play = function(ev) {
            this._core.trigger('play', null, 'video');
    
            if (this._playing) {
                this.stop();
            }
    
            var target = $(ev.target || ev.srcElement),
                item = target.closest('.' + this._core.settings.itemClass),
                video = this._videos[item.attr('data-video')],
                width = video.width || '100%',
                height = video.height || this._core.$stage.height(),
                html, wrap;
    
            if (video.type === 'youtube') {
                html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
                    + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
            } else if (video.type === 'vimeo') {
                html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
                    + '" height="' + height
                    + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
    
            item.addClass('owl-video-playing');
            this._playing = item;
    
            wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
                + html + '</div>');
            target.after(wrap);
        };
    
        /**
         * Checks whether an video is currently in full screen mode or not.
         * @todo Bad style because looks like a readonly method but changes members.
         * @protected
         * @returns {Boolean}
         */
        Video.prototype.isInFullScreen = function() {
    
            // if Vimeo Fullscreen mode
            var element = document.fullscreenElement || document.mozFullScreenElement
                || document.webkitFullscreenElement;
    
            if (element && $(element).parent().hasClass('owl-video-frame')) {
                this._core.speed(0);
                this._fullscreen = true;
            }
    
            if (element && this._fullscreen && this._playing) {
                return false;
            }
    
            // comming back from fullscreen
            if (this._fullscreen) {
                this._fullscreen = false;
                return false;
            }
    
            // check full screen mode and window orientation
            if (this._playing) {
                if (this._core.state.orientation !== window.orientation) {
                    this._core.state.orientation = window.orientation;
                    return false;
                }
            }
    
            return true;
        };
    
        /**
         * Destroys the plugin.
         */
        Video.prototype.destroy = function() {
            var handler, property;
    
            this._core.$element.off('click.owl.video');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Video = Video;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Animate Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the animate plugin.
         * @class The Navigation Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Animate = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Animate.Defaults, this.core.options);
            this.swapping = true;
            this.previous = undefined;
            this.next = undefined;
    
            this.handlers = {
                'change.owl.carousel': $.proxy(function(e) {
                    if (e.property.name == 'position') {
                        this.previous = this.core.current();
                        this.next = e.property.value;
                    }
                }, this),
                'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                    this.swapping = e.type == 'translated';
                }, this),
                'translate.owl.carousel': $.proxy(function(e) {
                    if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                        this.swap();
                    }
                }, this)
            };
    
            this.core.$element.on(this.handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Animate.Defaults = {
            animateOut: false,
            animateIn: false
        };
    
        /**
         * Toggles the animation classes whenever an translations starts.
         * @protected
         * @returns {Boolean|undefined}
         */
        Animate.prototype.swap = function() {
    
            if (this.core.settings.items !== 1 || !this.core.support3d) {
                return;
            }
    
            this.core.speed(0);
    
            var left,
                clear = $.proxy(this.clear, this),
                previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next),
                incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;
    
            if (this.core.current() === this.previous) {
                return;
            }
    
            if (outgoing) {
                left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
                previous.css( { 'left': left + 'px' } )
                    .addClass('animated owl-animated-out')
                    .addClass(outgoing)
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
            }
    
            if (incoming) {
                next.addClass('animated owl-animated-in')
                    .addClass(incoming)
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
            }
        };
    
        Animate.prototype.clear = function(e) {
            $(e.target).css( { 'left': '' } )
                .removeClass('animated owl-animated-out owl-animated-in')
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut);
            this.core.transitionEnd();
        }
    
        /**
         * Destroys the plugin.
         * @public
         */
        Animate.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Autoplay Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the autoplay plugin.
         * @class The Autoplay Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Autoplay = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
    
            this.handlers = {
                'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
                    this.autoplay();
                }, this),
                'play.owl.autoplay': $.proxy(function(e, t, s) {
                    this.play(t, s);
                }, this),
                'stop.owl.autoplay': $.proxy(function() {
                    this.stop();
                }, this),
                'mouseover.owl.autoplay': $.proxy(function() {
                    if (this.core.settings.autoplayHoverPause) {
                        this.pause();
                    }
                }, this),
                'mouseleave.owl.autoplay': $.proxy(function() {
                    if (this.core.settings.autoplayHoverPause) {
                        this.autoplay();
                    }
                }, this)
            };
    
            this.core.$element.on(this.handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Autoplay.Defaults = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            autoplaySpeed: false
        };
    
        /**
         * @protected
         * @todo Must be documented.
         */
        Autoplay.prototype.autoplay = function() {
            if (this.core.settings.autoplay && !this.core.state.videoPlay) {
                window.clearInterval(this.interval);
    
                this.interval = window.setInterval($.proxy(function() {
                    this.play();
                }, this), this.core.settings.autoplayTimeout);
            } else {
                window.clearInterval(this.interval);
            }
        };
    
        /**
         * Starts the autoplay.
         * @public
         * @param {Number} [timeout] - ...
         * @param {Number} [speed] - ...
         * @returns {Boolean|undefined} - ...
         * @todo Must be documented.
         */
        Autoplay.prototype.play = function(timeout, speed) {
            // if tab is inactive - doesnt work in <IE10
            if (document.hidden === true) {
                return;
            }
    
            if (this.core.state.isTouch || this.core.state.isScrolling
                || this.core.state.isSwiping || this.core.state.inMotion) {
                return;
            }
    
            if (this.core.settings.autoplay === false) {
                window.clearInterval(this.interval);
                return;
            }
    
            this.core.next(this.core.settings.autoplaySpeed);
        };
    
        /**
         * Stops the autoplay.
         * @public
         */
        Autoplay.prototype.stop = function() {
            window.clearInterval(this.interval);
        };
    
        /**
         * Pauses the autoplay.
         * @public
         */
        Autoplay.prototype.pause = function() {
            window.clearInterval(this.interval);
        };
    
        /**
         * Destroys the plugin.
         */
        Autoplay.prototype.destroy = function() {
            var handler, property;
    
            window.clearInterval(this.interval);
    
            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Navigation Plugin
     * @version 2.0.0
     * @author Artus Kolanowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the navigation plugin.
         * @class The Navigation Plugin
         * @param {Owl} carousel - The Owl Carousel.
         */
        var Navigation = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Indicates whether the plugin is initialized or not.
             * @protected
             * @type {Boolean}
             */
            this._initialized = false;
    
            /**
             * The current paging indexes.
             * @protected
             * @type {Array}
             */
            this._pages = [];
    
            /**
             * All DOM elements of the user interface.
             * @protected
             * @type {Object}
             */
            this._controls = {};
    
            /**
             * Markup for an indicator.
             * @protected
             * @type {Array.<String>}
             */
            this._templates = [];
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * Overridden methods of the carousel.
             * @protected
             * @type {Object}
             */
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            };
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                    }
                }, this),
                'add.owl.carousel': $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                    }
                }, this),
                'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.splice(e.position, 1);
                    }
                }, this),
                'change.owl.carousel': $.proxy(function(e) {
                    if (e.property.name == 'position') {
                        if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                            var current = this._core.current(),
                                maximum = this._core.maximum(),
                                minimum = this._core.minimum();
                            e.data = e.property.value > maximum
                                ? current >= maximum ? minimum : maximum
                                : e.property.value < minimum ? maximum : e.property.value;
                        }
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.property.name == 'position') {
                        this.draw();
                    }
                }, this),
                'refreshed.owl.carousel': $.proxy(function() {
                    if (!this._initialized) {
                        this.initialize();
                        this._initialized = true;
                    }
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
    
            // register event handlers
            this.$element.on(this._handlers);
        }
    
        /**
         * Default options.
         * @public
         * @todo Rename `slideBy` to `navBy`
         */
        Navigation.Defaults = {
            nav: false,
            navRewind: true,
            navText: [ 'prev', 'next' ],
            navSpeed: false,
            navElement: 'div',
            navContainer: false,
            navContainerClass: 'owl-nav',
            navClass: [ 'owl-prev', 'owl-next' ],
            slideBy: 1,
            dotClass: 'owl-dot',
            dotsClass: 'owl-dots',
            dots: true,
            dotsEach: false,
            dotData: false,
            dotsSpeed: false,
            dotsContainer: false,
            controlsClass: 'owl-controls'
        }
    
        /**
         * Initializes the layout of the plugin and extends the carousel.
         * @protected
         */
        Navigation.prototype.initialize = function() {
            var $container, override,
                options = this._core.settings;
    
            // create the indicator template
            if (!options.dotsData) {
                this._templates = [ $('<div>')
                    .addClass(options.dotClass)
                    .append($('<span>'))
                    .prop('outerHTML') ];
            }
    
            // create controls container if needed
            if (!options.navContainer || !options.dotsContainer) {
                this._controls.$container = $('<div>')
                    .addClass(options.controlsClass)
                    .appendTo(this.$element);
            }
    
            // create DOM structure for absolute navigation
            this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
                : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
    
            this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
                var index = $(e.target).parent().is(this._controls.$indicators)
                    ? $(e.target).index() : $(e.target).parent().index();
    
                e.preventDefault();
    
                this.to(index, options.dotsSpeed);
            }, this));
    
            // create DOM structure for relative navigation
            $container = options.navContainer ? $(options.navContainer)
                : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
    
            this._controls.$next = $('<' + options.navElement + '>');
            this._controls.$previous = this._controls.$next.clone();
    
            this._controls.$previous
                .addClass(options.navClass[0])
                .html(options.navText[0])
                .hide()
                .prependTo($container)
                .on('click', $.proxy(function(e) {
                    this.prev(options.navSpeed);
                }, this));
            this._controls.$next
                .addClass(options.navClass[1])
                .html(options.navText[1])
                .hide()
                .appendTo($container)
                .on('click', $.proxy(function(e) {
                    this.next(options.navSpeed);
                }, this));
    
            // override public methods of the carousel
            for (override in this._overrides) {
                this._core[override] = $.proxy(this[override], this);
            }
        }
    
        /**
         * Destroys the plugin.
         * @protected
         */
        Navigation.prototype.destroy = function() {
            var handler, control, property, override;
    
            for (handler in this._handlers) {
                this.$element.off(handler, this._handlers[handler]);
            }
            for (control in this._controls) {
                this._controls[control].remove();
            }
            for (override in this.overides) {
                this._core[override] = this._overrides[override];
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        }
    
        /**
         * Updates the internal state.
         * @protected
         */
        Navigation.prototype.update = function() {
            var i, j, k,
                options = this._core.settings,
                lower = this._core.clones().length / 2,
                upper = lower + this._core.items().length,
                size = options.center || options.autoWidth || options.dotData
                    ? 1 : options.dotsEach || options.items;
    
            if (options.slideBy !== 'page') {
                options.slideBy = Math.min(options.slideBy, options.items);
            }
    
            if (options.dots || options.slideBy == 'page') {
                this._pages = [];
    
                for (i = lower, j = 0, k = 0; i < upper; i++) {
                    if (j >= size || j === 0) {
                        this._pages.push({
                            start: i - lower,
                            end: i - lower + size - 1
                        });
                        j = 0, ++k;
                    }
                    j += this._core.mergers(this._core.relative(i));
                }
            }
        }
    
        /**
         * Draws the user interface.
         * @todo The option `dotData` wont work.
         * @protected
         */
        Navigation.prototype.draw = function() {
            var difference, i, html = '',
                options = this._core.settings,
                $items = this._core.$stage.children(),
                index = this._core.relative(this._core.current());
    
            if (options.nav && !options.loop && !options.navRewind) {
                this._controls.$previous.toggleClass('disabled', index <= 0);
                this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
            }
    
            this._controls.$previous.toggle(options.nav);
            this._controls.$next.toggle(options.nav);
    
            if (options.dots) {
                difference = this._pages.length - this._controls.$indicators.children().length;
    
                if (options.dotData && difference !== 0) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) {
                        html += this._templates[this._core.relative(i)];
                    }
                    this._controls.$indicators.html(html);
                } else if (difference > 0) {
                    html = new Array(difference + 1).join(this._templates[0]);
                    this._controls.$indicators.append(html);
                } else if (difference < 0) {
                    this._controls.$indicators.children().slice(difference).remove();
                }
    
                this._controls.$indicators.find('.active').removeClass('active');
                this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
            }
    
            this._controls.$indicators.toggle(options.dots);
        }
    
        /**
         * Extends event data.
         * @protected
         * @param {Event} event - The event object which gets thrown.
         */
        Navigation.prototype.onTrigger = function(event) {
            var settings = this._core.settings;
    
            event.page = {
                index: $.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: settings && (settings.center || settings.autoWidth || settings.dotData
                    ? 1 : settings.dotsEach || settings.items)
            };
        }
    
        /**
         * Gets the current page position of the carousel.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.current = function() {
            var index = this._core.relative(this._core.current());
            return $.grep(this._pages, function(o) {
                return o.start <= index && o.end >= index;
            }).pop();
        }
    
        /**
         * Gets the current succesor/predecessor position.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.getPosition = function(successor) {
            var position, length,
                options = this._core.settings;
    
            if (options.slideBy == 'page') {
                position = $.inArray(this.current(), this._pages);
                length = this._pages.length;
                successor ? ++position : --position;
                position = this._pages[((position % length) + length) % length].start;
            } else {
                position = this._core.relative(this._core.current());
                length = this._core.items().length;
                successor ? position += options.slideBy : position -= options.slideBy;
            }
            return position;
        }
    
        /**
         * Slides to the next item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.next = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        }
    
        /**
         * Slides to the previous item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.prev = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        }
    
        /**
         * Slides to the specified item or page.
         * @public
         * @param {Number} position - The position of the item or page.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
         */
        Navigation.prototype.to = function(position, speed, standard) {
            var length;
    
            if (!standard) {
                length = this._pages.length;
                $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
            } else {
                $.proxy(this._overrides.to, this._core)(position, speed);
            }
        }
    
        $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Hash Plugin
     * @version 2.0.0
     * @author Artus Kolanowski
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the hash plugin.
         * @class The Hash Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Hash = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Hash table for the hashes.
             * @protected
             * @type {Object}
             */
            this._hashes = {};
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function() {
                    if (this._core.settings.startPosition == 'URLHash') {
                        $(window).trigger('hashchange.owl.navigation');
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
                    this._hashes[hash] = e.content;
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Hash.Defaults, this._core.options);
    
            // register the event handlers
            this.$element.on(this._handlers);
    
            // register event listener for hash navigation
            $(window).on('hashchange.owl.navigation', $.proxy(function() {
                var hash = window.location.hash.substring(1),
                    items = this._core.$stage.children(),
                    position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
    
                if (!hash) {
                    return false;
                }
    
                this._core.to(position, false, true);
            }, this));
        }
    
        /**
         * Default options.
         * @public
         */
        Hash.Defaults = {
            URLhashListener: false
        }
    
        /**
         * Destroys the plugin.
         * @public
         */
        Hash.prototype.destroy = function() {
            var handler, property;
    
            $(window).off('hashchange.owl.navigation');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        }
    
        $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
    
    })(window.Zepto || window.jQuery, window, document);
    ;
    /**
     * Timeago is a jQuery plugin that makes it easy to support automatically
     * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
     *
     * @name timeago
     * @version 1.4.3
     * @requires jQuery v1.2.3+
     * @author Ryan McGeary
     * @license MIT License - http://www.opensource.org/licenses/mit-license.php
     *
     * For usage and examples, visit:
     * http://timeago.yarp.com/
     *
     * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
     */
    
    (function (factory) {
      if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
      } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
      } else {
        // Browser globals
        factory(jQuery);
      }
    }(function ($) {
      $.timeago = function(timestamp) {
        if (timestamp instanceof Date) {
          return inWords(timestamp);
        } else if (typeof timestamp === "string") {
          return inWords($.timeago.parse(timestamp));
        } else if (typeof timestamp === "number") {
          return inWords(new Date(timestamp));
        } else {
          return inWords($.timeago.datetime(timestamp));
        }
      };
      var $t = $.timeago;
    
      $.extend($.timeago, {
        settings: {
          refreshMillis: 60000,
          allowPast: true,
          allowFuture: false,
          localeTitle: false,
          cutoff: 0,
          autoDispose: true,
          strings: {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "ago",
            suffixFromNow: "from now",
            inPast: 'any moment now',
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years",
            wordSeparator: " ",
            numbers: []
          }
        },
    
        inWords: function(distanceMillis) {
          if(!this.settings.allowPast && ! this.settings.allowFuture) {
              throw 'timeago allowPast and allowFuture settings can not both be set to false.';
          }
    
          var $l = this.settings.strings;
          var prefix = $l.prefixAgo;
          var suffix = $l.suffixAgo;
          if (this.settings.allowFuture) {
            if (distanceMillis < 0) {
              prefix = $l.prefixFromNow;
              suffix = $l.suffixFromNow;
            }
          }
    
          if(!this.settings.allowPast && distanceMillis >= 0) {
            return this.settings.strings.inPast;
          }
    
          var seconds = Math.abs(distanceMillis) / 1000;
          var minutes = seconds / 60;
          var hours = minutes / 60;
          var days = hours / 24;
          var years = days / 365;
    
          function substitute(stringOrFunction, number) {
            var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
            var value = ($l.numbers && $l.numbers[number]) || number;
            return string.replace(/%d/i, value);
          }
    
          var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
            seconds < 90 && substitute($l.minute, 1) ||
            minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
            minutes < 90 && substitute($l.hour, 1) ||
            hours < 24 && substitute($l.hours, Math.round(hours)) ||
            hours < 42 && substitute($l.day, 1) ||
            days < 30 && substitute($l.days, Math.round(days)) ||
            days < 45 && substitute($l.month, 1) ||
            days < 365 && substitute($l.months, Math.round(days / 30)) ||
            years < 1.5 && substitute($l.year, 1) ||
            substitute($l.years, Math.round(years));
    
          var separator = $l.wordSeparator || "";
          if ($l.wordSeparator === undefined) { separator = " "; }
          return $.trim([prefix, words, suffix].join(separator));
        },
    
        parse: function(iso8601) {
          var s = $.trim(iso8601);
          s = s.replace(/\.\d+/,""); // remove milliseconds
          s = s.replace(/-/,"/").replace(/-/,"/");
          s = s.replace(/T/," ").replace(/Z/," UTC");
          s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
          s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
          return new Date(s);
        },
        datetime: function(elem) {
          var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
          return $t.parse(iso8601);
        },
        isTime: function(elem) {
          // jQuery's `is()` doesn't play well with HTML5 in IE
          return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
        }
      });
    
      // functions that can be called via $(el).timeago('action')
      // init is default when no action is given
      // functions are called with context of a single element
      var functions = {
        init: function(){
          var refresh_el = $.proxy(refresh, this);
          refresh_el();
          var $s = $t.settings;
          if ($s.refreshMillis > 0) {
            this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
          }
        },
        update: function(time){
          var parsedTime = $t.parse(time);
          $(this).data('timeago', { datetime: parsedTime });
          if($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
          refresh.apply(this);
        },
        updateFromDOM: function(){
          $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
          refresh.apply(this);
        },
        dispose: function () {
          if (this._timeagoInterval) {
            window.clearInterval(this._timeagoInterval);
            this._timeagoInterval = null;
          }
        }
      };
    
      $.fn.timeago = function(action, options) {
        var fn = action ? functions[action] : functions.init;
        if(!fn){
          throw new Error("Unknown function name '"+ action +"' for timeago");
        }
        // each over objects here and call the requested function
        this.each(function(){
          fn.call(this, options);
        });
        return this;
      };
    
      function refresh() {
        var $s = $t.settings;
    
        //check if it's still visible
        if($s.autoDispose && !$.contains(document.documentElement,this)){
          //stop if it has been removed
          $(this).timeago("dispose");
          return this;
        }
    
        var data = prepareData(this);
    
        if (!isNaN(data.datetime)) {
          if ( $s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
            $(this).text(inWords(data.datetime));
          }
        }
        return this;
      }
    
      function prepareData(element) {
        element = $(element);
        if (!element.data("timeago")) {
          element.data("timeago", { datetime: $t.datetime(element) });
          var text = $.trim(element.text());
          if ($t.settings.localeTitle) {
            element.attr("title", element.data('timeago').datetime.toLocaleString());
          } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
            element.attr("title", text);
          }
        }
        return element.data("timeago");
      }
    
      function inWords(date) {
        return $t.inWords(distance(date));
      }
    
      function distance(date) {
        return (new Date().getTime() - date.getTime());
      }
    
      // fix for IE6 suckage
      document.createElement("abbr");
      document.createElement("time");
    }));
    ;
    /**
     * author Remy Sharp
     * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
     */
    (function ($) {
        function getViewportHeight() {
            var height = window.innerHeight; // Safari, Opera
            var mode = document.compatMode;
    
            if ( (mode || !$.support.boxModel) ) { // IE, Gecko
                height = (mode == 'CSS1Compat') ?
                document.documentElement.clientHeight : // Standards
                document.body.clientHeight; // Quirks
            }
    
            return height;
        }
    
        $(window).scroll(function () {
            var vpH = getViewportHeight(),
                scrolltop = (document.documentElement.scrollTop ?
                    document.documentElement.scrollTop :
                    document.body.scrollTop),
                elems = [];
            
            // naughty, but this is how it knows which elements to check for
            $.each($.cache, function () {
                if (this.events && this.events.inview) {
                    elems.push(this.handle.elem);
                }
            });
    
            if (elems.length) {
                $(elems).each(function () {
                    var $el = $(this),
                        top = $el.offset().top,
                        height = $el.height(),
                        inview = $el.data('inview') || false;
    
                    if (scrolltop > (top + height) || scrolltop + vpH < top) {
                        if (inview) {
                            $el.data('inview', false);
                            $el.trigger('inview', [ false ]);                        
                        }
                    } else if (scrolltop < (top + height)) {
                        if (!inview) {
                            $el.data('inview', true);
                            $el.trigger('inview', [ true ]);
                        }
                    }
                });
            }
        });
        
        // kick the event to pick up any elements already in view.
        // note however, this only works if the plugin is included after the elements are bound to 'inview'
        $(function () {
            $(window).scroll();
        });
    })(jQuery);
    ;
    (function($){
        var debounce = function(func, threshold, exec){
            var timeout;
            return function debounced(){
                var obj = this, args = arguments;
                function delayed(){
                    if(!exec) func.apply(obj,args);
                    timeout = null;
                };
                if(timeout) clearTimeout(timeout);
                else if(exec) func.apply(obj, args);
                timeout = setTimeout(delayed, threshold || 100);
            };
        };
    
        $.fn.cement = function(options){
            var $this = $(this),
            defaults = {
                debug: false,
                columns: 4,
                columnMinWidth: 0,
                brickSelector: '> *',
                horizontalGutter: 5,
                verticalGutter: 5,
                transitionDuration: '0.2s',
                breakpoints: []
            };
    
            for(property in options){
                if(defaults.hasOwnProperty(property) !== options.hasOwnProperty(property)) {
                    console.log('CementJS doesn\'t support the ' + property + ' property.');
                    delete options[property];
                }
            }
    
            var _ = $.extend(defaults, options),
                PARAM_WIDTH = 'w',
                PARAM_HEIGHT = 'h';
    
            _.columnsMax = _.columns;
    
            if(_.breakpoints.length && _.breakpoints.length>0){
                _.breakpoints.sort(function(a,b){
                    return parseFloat(a.max_window_width) - parseFloat(b.max_window_width);
                });
            }
    
            _.transitionMS = parseFloat(_.transitionDuration.replace(/[^0-9\.]+/g,''));
            if(/s$/gi.test(_.transitionDuration)) _.transitionMS *= 1000;
    
            function refresh(event){
                if(_.debug){
                    console.group('cement :: refresh()');
                    console.log('containers: '+event.data.containers.length);
                    console.log('action: '+event.data.action);
                    console.groupEnd();
                }
    
                var wiwi = $(window).width();
    
                $(event.data.containers).each(function() {
                    var container = $(this);
    
                    // Set default values
                    if(container.css('position') === 'static')
                        container.css('position', 'relative');
                    container.css('box-sizing', 'border-box');
                    var paddingTop = parseInt(container.css('paddingTop').replace(/[^0-9-]/g, '')),
                        paddingLeft = parseInt(container.css('paddingLeft').replace(/[^0-9-]/g, '')),
                        paddingBottom = parseInt(container.css('paddingBottom').replace(/[^0-9-]/g, ''));
    
                    // Adapt the number of columns if the container is too tight
                    _.columns = _.columnsMax + 1;
                    var unit = 0;
                    do {
                        _.columns--;
                        unit = (container.width() - _.horizontalGutter * (_.columns - 1)) / _.columns
                    } while(unit < _.columnMinWidth && _.columns != 1);
    
                    // Set variables
                    var unit = (container.width() - _.horizontalGutter * (_.columns - 1)) / _.columns,
                        items = container.find(_.brickSelector),
                        matrix = new Array(_.columns + 1).join('0');
    
    
                    var tile = false;
                    if(_.breakpoints.length>0){
                        for(var x=0; x<_.breakpoints.length; x++){
                            var i = _.breakpoints[x];
                            if(wiwi<i.max_window_width){
                                tile = i.tile;
                                break;
                            }
                        }
                    }
    
                    // Iterate over items
                    var c = 0;
                    items.each(function() {
                        c++;
                        var item = $(this);
    
                        // Set default values
                        if(typeof item.data(PARAM_WIDTH) === 'undefined')
                            item.data(PARAM_WIDTH, 1);
                        if(typeof item.data(PARAM_HEIGHT) === 'undefined')
                            item.data(PARAM_HEIGHT, 1);
    
    
                        // Fix boundaries
                        if(typeof item.data(PARAM_WIDTH) + '-max' !== 'undefined') {
                            item.data(PARAM_WIDTH, item.data(PARAM_WIDTH + '-max'));
                        }
                        if(item.data(PARAM_WIDTH) > _.columns) {
                            item.data(PARAM_WIDTH + '-max', item.data(PARAM_WIDTH));
                            item.data(PARAM_WIDTH, _.columns);
                        }
    
                        if(typeof item.data(PARAM_WIDTH+'-og') === 'undefined')
                            item.data(PARAM_WIDTH+'-og', item.data(PARAM_WIDTH));
                        if(typeof item.data(PARAM_HEIGHT+'-og') === 'undefined')
                            item.data(PARAM_HEIGHT+'-og', item.data(PARAM_HEIGHT));
    
    
                        item.data(PARAM_WIDTH,item.data(PARAM_WIDTH+'-og'));
                        item.data(PARAM_HEIGHT,item.data(PARAM_HEIGHT+'-og'));
    
                        if(tile){
                            var i = {
                                w: item.data(PARAM_WIDTH),
                                h: item.data(PARAM_HEIGHT)
                            };
                            if(i.w<tile.width.min) item.data(PARAM_WIDTH,tile.width.min);
                            else if(i.w>tile.width.max) item.data(PARAM_WIDTH,tile.width.max);
    
                            if(i.h<tile.height.min) item.data(PARAM_HEIGHT,tile.height.min);
                            else if(i.h>tile.height.max) item.data(PARAM_HEIGHT,tile.height.max);
                        }
    
    
                        // Define position
                        var index = -1,
                            min = 0,
                            brick = Array.apply(
                                    null,
                                    new Array(item.data(PARAM_HEIGHT))
                                ).map(function() {
                                    return new Array(item.data(PARAM_WIDTH) + 1).join('1')
                                }).join(
                                    new Array(_.columns - item.data(PARAM_WIDTH) + 1).join('0')
                                ),
                            search = brick.replace(/0/g, '.').replace(/1/g, '0');
                        do {
                            // Search for an available place
                            var match = matrix.substr(min).match(search);
                            if(!match) {
                                // Not enough place ? Add a row
                                matrix += new Array(item.data(PARAM_WIDTH) + 1).join('0');
                            } else {
                                var index = match.index + min;
                                // Enough place ? Check if we're not at the end of a line
                                var line = matrix.substr(Math.floor(index / _.columns) * _.columns, _.columns) + '1';
                                if(line.indexOf(new Array(item.data(PARAM_WIDTH) + 1).join('0')) == -1) {
                                    // End of a line ? Search further
                                    matrix += new Array(4 - matrix.length % 4 + 1).join('0');
                                    min = (Math.floor(index / _.columns) + 1) * _.columns;
                                    index = -1;
                                }
                            }
                        } while(index == -1);
    
                        // Update matrix
                        var n = search.length,
                            prefix = matrix.substr(0, index),
                            segment = matrix.substr(index, n),
                            suffix = matrix.substr(index + n);
                        matrix = prefix;
                        for(var i = 0; i < n; i++) {
                            matrix += parseInt(segment.charAt(i)) || parseInt(brick.charAt(i));
                        }
                        matrix += suffix;
    
                        // Positioning element
                        var x = Math.floor(index / _.columns),
                            y = index % _.columns;
                        item.css({
                            'opacity': 1,
                            'position': 'absolute',
                            'transition-property': 'top, left, bottom, right',
                            'transition-duration': _.transitionDuration,
                            'top': (x * (unit + _.horizontalGutter) + paddingTop) + 'px',
                            'left': (y * (unit + _.verticalGutter) + paddingLeft) + 'px',
                            'width': (item.data(PARAM_WIDTH) * unit + _.horizontalGutter * (item.data(PARAM_WIDTH) - 1)) + 'px',
                            'height': (item.data(PARAM_HEIGHT) * unit + _.verticalGutter * (item.data(PARAM_HEIGHT) - 1)) + 'px',
                        });
                    });
    
                    // Update container height (avoid 0px height because of absolute potitioning)
                    setTimeout(function(){
                        var rows = Math.ceil(matrix.length / _.columns);
                        container.css('height', rows * unit + _.verticalGutter * (rows - 1) + paddingTop + paddingBottom);
                    },10);
    
                    container.off('DOMNodeRemoved DOMNodeInserted').one('DOMNodeRemoved DOMNodeInserted', function(e){
                        setTimeout(function(){
                            refresh({ data:{ containers:container, action:e.type } });
                        },_.transitionMS);
                    });
                });
            }
    
            //turn off window resize listener & reconfig
            $(window).off('resize').on('resize',
                debounce(function(e){
                    refresh({ data: { containers:$this, action:'resize' } });
                },50,false)
            );
    
            //kick it off
            refresh({ data: { containers:$this, action:'init' } });
            return $this;
        };
    })(jQuery);
    ;
    /*!
     * classie - class helper functions
     * from bonzo https://github.com/ded/bonzo
     * 
     * classie.has( elem, 'my-class' ) -> true/false
     * classie.add( elem, 'my-new-class' )
     * classie.remove( elem, 'my-unwanted-class' )
     * classie.toggle( elem, 'my-class' )
     */
    
    /*jshint browser: true, strict: true, undef: true */
    /*global define: false */
    
    ( function( window ) {
    
    'use strict';
    
    // class helper functions from bonzo https://github.com/ded/bonzo
    
    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    
    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }
    
    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }
    
    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
    
    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }
    
    })( window );
    ;
    /**
     * selectFx.js v1.0.0
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     * 
     * Copyright 2014, Codrops
     * http://www.codrops.com
     */
    ;( function( window ) {
        
        'use strict';
    
        /**
         * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
         */
        function hasParent( e, p ) {
            if (!e) return false;
            var el = e.target||e.srcElement||e||false;
            while (el && el != p) {
                el = el.parentNode||false;
            }
            return (el!==false);
        };
        
        /**
         * extend obj function
         */
        function extend( a, b ) {
            for( var key in b ) { 
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }
    
        /**
         * SelectFx function
         */
        function SelectFx( el, options ) {	
            this.el = el;
            this.options = extend( {}, this.options );
            extend( this.options, options );
            this._init();
        }
    
        /**
         * SelectFx options
         */
        SelectFx.prototype.options = {
            // if true all the links will open in a new tab.
            // if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
            newTab : true,
            // when opening the select element, the default placeholder (if any) is shown
            stickyPlaceholder : true,
            // callback when changing the value
            onChange : function( val ) { return false; }
        }
    
        /**
         * init function
         * initialize and cache some vars
         */
        SelectFx.prototype._init = function() {
            // check if we are using a placeholder for the native select box
            // we assume the placeholder is disabled and selected by default
            var selectedOpt = this.el.querySelector( 'option[selected]' );
            this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;
    
            // get selected option (either the first option with attr selected or just the first option)
            this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );
    
            // create structure
            this._createSelectEl();
    
            // all options
            this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
            
            // total options
            this.selOptsCount = this.selOpts.length;
            
            // current index
            this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
            
            // placeholder elem
            this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );
    
            // init events
            this._initEvents();
        }
    
        /**
         * creates the structure for the select element
         */
        SelectFx.prototype._createSelectEl = function() {
            var self = this, options = '', createOptionHTML = function(el) {
                var optclass = '', classes = '', link = '';
    
                if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
                    classes += 'cs-selected ';
                    this.foundSelected = true;
                }
                // extra classes
                if( el.getAttribute( 'data-class' ) ) {
                    classes += el.getAttribute( 'data-class' );
                }
                // link options
                if( el.getAttribute( 'data-link' ) ) {
                    link = 'data-link=' + el.getAttribute( 'data-link' );
                }
    
                if( classes !== '' ) {
                    optclass = 'class="' + classes + '" ';
                }
    
                return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
            };
    
            [].slice.call( this.el.children ).forEach( function(el) {
                if( el.disabled ) { return; }
    
                var tag = el.tagName.toLowerCase();
    
                if( tag === 'option' ) {
                    options += createOptionHTML(el);
                }
                else if( tag === 'optgroup' ) {
                    options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
                    [].slice.call( el.children ).forEach( function(opt) {
                        options += createOptionHTML(opt);
                    } )
                    options += '</ul></li>';
                }
            } );
    
            var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
            this.selEl = document.createElement( 'div' );
            this.selEl.className = this.el.className;
            this.selEl.tabIndex = this.el.tabIndex;
            this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
            this.el.parentNode.appendChild( this.selEl );
            this.selEl.appendChild( this.el );
        }
    
        /**
         * initialize the events
         */
        SelectFx.prototype._initEvents = function() {
            var self = this;
    
            // open/close select
            this.selPlaceholder.addEventListener( 'click', function() {
                self._toggleSelect();
            } );
    
            // clicking the options
            this.selOpts.forEach( function(opt, idx) {
                opt.addEventListener( 'click', function() {
                    self.current = idx;
                    self._changeOption();
                    // close select elem
                    self._toggleSelect();
                } );
            } );
    
            // close the select element if the target it´s not the select element or one of its descendants..
            document.addEventListener( 'click', function(ev) {
                var target = ev.target;
                if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
                    self._toggleSelect();
                }
            } );
    
            // keyboard navigation events
            this.selEl.addEventListener( 'keydown', function( ev ) {
                var keyCode = ev.keyCode || ev.which;
    
                switch (keyCode) {
                    // up key
                    case 38:
                        ev.preventDefault();
                        self._navigateOpts('prev');
                        break;
                    // down key
                    case 40:
                        ev.preventDefault();
                        self._navigateOpts('next');
                        break;
                    // space key
                    case 32:
                        ev.preventDefault();
                        if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                            self._changeOption();
                        }
                        self._toggleSelect();
                        break;
                    // enter key
                    case 13:
                        ev.stopPropagation();
                        ev.preventDefault();
                        if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                            self._changeOption();
                            self._toggleSelect();
                        }
                        break;
                    // esc key
                    case 27:
                        ev.preventDefault();
                        if( self._isOpen() ) {
                            self._toggleSelect();
                        }
                        break;
                }
            } );
        }
    
        /**
         * navigate with up/dpwn keys
         */
        SelectFx.prototype._navigateOpts = function(dir) {
            if( !this._isOpen() ) {
                this._toggleSelect();
            }
    
            var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
            
            if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
                // save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
                this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
                // remove focus class if any..
                this._removeFocus();
                // add class focus - track which option we are navigating
                classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
            }
        }
    
        /**
         * open/close select
         * when opened show the default placeholder if any
         */
        SelectFx.prototype._toggleSelect = function() {
            // remove focus class if any..
            this._removeFocus();
            
            if( this._isOpen() ) {
                if( this.current !== -1 ) {
                    // update placeholder text
                    this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
                }
                classie.remove( this.selEl, 'cs-active' );
            }
            else {
                if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
                    // everytime we open we wanna see the default placeholder text
                    this.selPlaceholder.textContent = this.selectedOpt.textContent;
                }
                classie.add( this.selEl, 'cs-active' );
            }
        }
    
        /**
         * change option - the new value is set
         */
        SelectFx.prototype._changeOption = function() {
            // if pre selected current (if we navigate with the keyboard)...
            if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
                this.current = this.preSelCurrent;
                this.preSelCurrent = -1;
            }
    
            // current option
            var opt = this.selOpts[ this.current ];
    
            // update current selected value
            this.selPlaceholder.textContent = opt.textContent;
            
            // change native select element´s value
            this.el.value = opt.getAttribute( 'data-value' );
    
            // remove class cs-selected from old selected option and add it to current selected option
            var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
            if( oldOpt ) {
                classie.remove( oldOpt, 'cs-selected' );
            }
            classie.add( opt, 'cs-selected' );
    
            // if there´s a link defined
            if( opt.getAttribute( 'data-link' ) ) {
                // open in new tab?
                if( this.options.newTab ) {
                    window.open( opt.getAttribute( 'data-link' ), '_blank' );
                }
                else {
                    window.location = opt.getAttribute( 'data-link' );
                }
            }
    
            // callback
            this.options.onChange( this.el.value );
        }
    
        /**
         * returns true if select element is opened
         */
        SelectFx.prototype._isOpen = function(opt) {
            return classie.has( this.selEl, 'cs-active' );
        }
    
        /**
         * removes the focus class from the option
         */
        SelectFx.prototype._removeFocus = function(opt) {
            var focusEl = this.selEl.querySelector( 'li.cs-focus' )
            if( focusEl ) {
                classie.remove( focusEl, 'cs-focus' );
            }
        }
    
        /**
         * add to global namespace
         */
        window.SelectFx = SelectFx;
    
    } )( window );;
    /**
     * stepsForm.js v1.0.0
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2014, Codrops
     * http://www.codrops.com
     */
    ;( function( window ) {
    
        'use strict';
    
        var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            support = { transitions : Modernizr.csstransitions };
    
        function extend( a, b ) {
            for( var key in b ) {
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }
    
        function stepsForm( el, options ) {
            this.el = el;
            this.options = extend( {}, this.options );
            extend( this.options, options );
            this._init();
        }
    
        // generates a unique id
        function randomID() {
            var id = Math.random().toString(36).substr(2, 9);
            if (document.getElementById(id)) {
                return randomID();
            }
            return id;
        }
    
        stepsForm.prototype.options = {
            onSubmit : function() { return false; }
        };
    
        stepsForm.prototype._init = function() {
            // current question
            this.current = 0;
    
            // questions
            this.questions = [].slice.call( this.el.querySelectorAll( 'ol.questions > li' ) );
            // total questions
            this.questionsCount = this.questions.length;
            // show first question
            classie.addClass( this.questions[0], 'current' );
    
            // next question control
            this.ctrlNext = this.el.querySelector( 'button.next' );
            this.ctrlNext.setAttribute( 'aria-label', 'Next' );
    
            // progress bar
            this.progress = this.el.querySelector( 'div.progress' );
            // set progressbar attributes
            this.progress.setAttribute( 'role', 'progressbar' );
            this.progress.setAttribute( 'aria-readonly', 'true' );
            this.progress.setAttribute( 'aria-valuemin', '0' );
            this.progress.setAttribute( 'aria-valuemax', '100' );
            this.progress.setAttribute( 'aria-valuenow', '0' );
    
            // question number status
            this.questionStatus = this.el.querySelector( 'span.number' );
            // give the questions status an id
            this.questionStatus.id = this.questionStatus.id || randomID();
            // associate "x / y" with the input via aria-describedby
            for (var i = this.questions.length - 1; i >= 0; i--) {
                var formElement = this.questions[i].querySelector( 'input, textarea, select' );
                formElement.setAttribute( 'aria-describedby', this.questionStatus.id );
            };
            // current question placeholder
            this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
            this.currentNum.innerHTML = Number( this.current + 1 );
            // total questions placeholder
            this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
            this.totalQuestionNum.innerHTML = this.questionsCount;
    
            // error message
            this.error = this.el.querySelector( 'span.error-message' );
    
            // checks for HTML5 Form Validation support
            // a cleaner solution might be to add form validation to the custom Modernizr script
            this.supportsHTML5Forms = typeof document.createElement("input").checkValidity === 'function';
    
            // init events
            this._initEvents();
        };
    
        stepsForm.prototype._initEvents = function() {
            var self = this,
                // first input
                firstElInput = this.questions[ this.current ].querySelector( 'input, textarea, select' ),
                // focus
                onFocusStartFn = function() {
                    firstElInput.removeEventListener( 'focus', onFocusStartFn );
                    classie.addClass( self.ctrlNext, 'show' );
                };
    
            // show the next question control first time the input gets focused
            firstElInput.addEventListener( 'focus', onFocusStartFn );
    
            // show next question
            this.ctrlNext.addEventListener( 'click', function( ev ) {
                ev.preventDefault();
                if(classie.hasClass(this,'final')) self._submit();
                else self._nextQuestion();
            } );
    
            // pressing enter will jump to next question
            this.el.addEventListener( 'keydown', function( ev ) {
                var keyCode = ev.keyCode || ev.which;
                // enter
                if( keyCode === 13 ) {
                    ev.preventDefault();
                    self._nextQuestion();
                }
            } );
        };
    
        stepsForm.prototype._nextQuestion = function() {
            if( !this._validate() ) {
                return false;
            }
    
            // checks HTML5 validation
            if ( this.supportsHTML5Forms ) {
                var input = this.questions[ this.current ].querySelector( 'input, textarea, select' );
                // clear any previous error messages
                input.setCustomValidity( '' );
    
                // checks input against the validation constraint
                if ( !input.checkValidity() ) {
                    // Optionally, set a custom HTML5 valiation message
                    // comment or remove this line to use the browser default message
                    input.setCustomValidity( 'Whoops, that\'s not an email address!' );
                    // display the HTML5 error message
                    this._showError( input.validationMessage );
                    // prevent the question from changing
                    return false;
                }
            }
    
            // check if form is filled
            if( this.current === this.questionsCount - 1 ) {
                this.isFilled = true;
            }
    
            // clear any previous error messages
            this._clearError();
    
            // current question
            var currentQuestion = this.questions[ this.current ];
    
            // increment current question iterator
            ++this.current;
    
            // update progress bar
            this._progress();
    
            if( !this.isFilled ) {
                // change the current question number/status
                this._updateQuestionNumber();
    
                // add class "show-next" to form element (start animations)
                classie.addClass( this.el, 'show-next' );
    
                // remove class "current" from current question and add it to the next one
                // current question
                var nextQuestion = this.questions[ this.current ];
                classie.removeClass( currentQuestion, 'current' );
                classie.addClass( nextQuestion, 'current' );
            }
    
            // after animation ends, remove class "show-next" from form element and change current question placeholder
            var self = this,
                onEndTransitionFn = function( ev ) {
                    if( support.transitions ) {
                        this.removeEventListener( transEndEventName, onEndTransitionFn );
                    }
                    if(self.isFilled){
                        for(var x=0; x<self.questions.length; x++){
                            classie.addClass(self.questions[x],'current');
                            classie.addClass(self.questions[x],'final');
                        }
                        classie.addClass(self.progress,'hidden');
                        self.ctrlNext.innerHTML = 'Submit';
                        classie.addClass(self.ctrlNext,'final');
                        //self._submit();
                    }
                    else {
                        classie.removeClass( self.el, 'show-next' );
                        self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
                        self.questionStatus.removeChild( self.nextQuestionNum );
                        // force the focus on the next input
                        nextQuestion.querySelector( 'input, textarea, select' ).focus();
                    }
                };
    
            if( support.transitions ) {
                this.progress.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
    
        // updates the progress bar by setting its width
        stepsForm.prototype._progress = function() {
            var currentProgress = this.current * ( 100 / this.questionsCount );
            this.progress.style.width = currentProgress + '%';
            // update the progressbar's aria-valuenow attribute
            this.progress.setAttribute('aria-valuenow', currentProgress);
        }
    
        // changes the current question number
        stepsForm.prototype._updateQuestionNumber = function() {
            // first, create next question number placeholder
            this.nextQuestionNum = document.createElement( 'span' );
            this.nextQuestionNum.className = 'number-next';
            this.nextQuestionNum.innerHTML = Number( this.current + 1 );
            // insert it in the DOM
            this.questionStatus.appendChild( this.nextQuestionNum );
        }
    
        // submits the form
        stepsForm.prototype._submit = function() {
            this.options.onSubmit( this.el );
        }
    
        // TODO (next version..)
        // the validation function
        stepsForm.prototype._validate = function() {
            // current question's input
            var ele = this.questions[ this.current ].querySelector( 'input, textarea, select' ),
                input = ele.value;
            if(ele.id=='q5') return true;
    
            if( input === '' ) {
                this._showError( 'EMPTYSTR' );
                return false;
            }
    
            return true;
        }
    
        // TODO (next version..)
        stepsForm.prototype._showError = function( err ) {
            var message = '';
            switch( err ) {
                case 'EMPTYSTR' :
                    message = 'Please fill the field before continuing';
                    break;
                case 'INVALIDEMAIL' :
                    message = 'Please fill a valid email address';
                    break;
                // ...
                default :
                    message = err;
            };
            this.error.innerHTML = message;
            classie.addClass( this.error, 'show' );
        }
    
        // clears/hides the current error message
        stepsForm.prototype._clearError = function() {
            classie.removeClass( this.error, 'show' );
        }
    
        // add to global namespace
        window.stepsForm = stepsForm;
    
    })( window );
    ;
    var debounce = function (func, threshold, exec) {
      var timeout;
      return function debounced() {
        var obj = this, args = arguments;
        function delayed() {
          if (!exec) func.apply(obj, args);
          timeout = null;
        };
        if (timeout) clearTimeout(timeout);
        else if (exec) func.apply(obj, args);
        timeout = setTimeout(delayed, threshold || 100);
      };
    }
    
    jQuery(document).ready(function ($) {
    
      //------------------------------------------------------------------------------
      // About page : Switching between the Culture and Leadership tabs
    
          jQuery(document).on('click','.cult-lead-tab:not(.chosen)',function(){
                      $(this).addClass('chosen').siblings().removeClass('chosen');
                      $('.cult-lead-tabcontent').toggleClass('shown');
                      $('.leadership').hasClass( 'shown' ) ? $('.cult-lead-tabs').addClass('alt-bkg') : $('.cult-lead-tabs').removeClass('alt-bkg');
    
      });
    
      if ($('#hpv').is('*')) {
        $('#hpv').siblings('.tag').addClass('hidden');
        $('#hpv').attr('src', 'https://player.vimeo.com/external/241219237.hd.mp4?s=8d6c6abdc3d963c0b4d66bbd44e2870b635b03a7&profile_id=175');
    
        if (typeof window.location.search !== 'undefined' && /debug/gi.test(window.location.search)) {
          $(document).on('click', 'video#hpv', function () {
            if (this.paused) this.play();
            else this.pause();
          });
        }
      }
      // Header Hide/Appear
    
    
      // -----------------------------------------------------------------------------
      // Main navigation
    
      jQuery(document).ready(function ($) {
        var MainNav = {
          breakpoint: 992,
          navHeader: $('.cd-header'),
          navTrigger: $('.cd-primary-nav-trigger'),
          menuIcon: $('.cd-menu-icon'),
          nav: $('.cd-primary-nav'),
          mainMenu: $('.cd-primary-nav #main-menu'),
          socialMenu: $('.cd-primary-nav .social'),
          transition: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
          init: function () {
            this.bindUIfunctions();
          },
    
          bindUIfunctions: function () {
            var obj = this;
            // Delegation
            $(document)
              .on('ready', function () {
                obj.defaultNavState();
              })
    
              .on('click', '.cd-primary-nav-trigger', function (e) {
                e.preventDefault();
                obj.openClosePrimaryNav();
              })
    
            $(window)
              .on('resize', function () {
                (!window.requestAnimationFrame)
                  ? obj.defaultNavState()
                  : this.requestAnimationFrame(function () {
                    obj.defaultNavState();
                  });
              })
    
              .on('scroll', function (e) {
                if ($('#navigation').hasClass('open') && !$('#navigation').hasClass('horizontal')) return;
                obj.makeNavHeaderSticky();
                obj.shortNavState();
              })
          },
    
          checkViewportWidth: function () {
            //check window width (scrollbar included)
            var e = window,
              a = 'inner';
            if (!('innerWidth' in window)) {
              a = 'client';
              e = document.documentElement || document.body;
            }
            if (e[a + 'Width'] >= this.breakpoint) {
              return true;
            } else {
              return false;
            }
          },
    
          defaultNavState: function () {
            var desktop = this.checkViewportWidth();
    
            if (this.navHeader.hasClass('menu-is-open')) return;
    
            if (desktop) {
              this.nav.addClass('open horizontal expended is-visible') && this.navTrigger.hide();
              if (this.nav.hasClass('short')) {
                this.navTrigger.show().removeClass('slide-out').addClass('slide-in');
              }
            } else {
              this.nav.removeClass().addClass('cd-primary-nav') && this.navTrigger.show();
              console.log('tablet');
            }
          },
    
          shortNavState: function () {
            var currentTop = $(window).scrollTop(),
              desktop = this.checkViewportWidth();
    
            if (desktop) {
              if (currentTop == 0 && this.nav.hasClass('short'))
                this.nav.addClass('expended').removeClass('short') && this.navTrigger.show().removeClass('slide-in').addClass('slide-out');
    
              else if (currentTop > 0 && !this.nav.hasClass('short'))
                this.nav.removeClass('expended').addClass("short") && this.navTrigger.show().removeClass('slide-out').addClass('slide-in');
            }
            else{
              console.log('no sliding');
              if (currentTop == 0 && this.nav.hasClass('short'))
                this.nav.addClass('expended').removeClass('short') && this.navTrigger.show().removeClass('slide-in').addClass('slide-out');
    
              else if (currentTop > 0 && !this.nav.hasClass('short'))
                this.nav.removeClass('expended').addClass("short") && this.navTrigger.show().removeClass('slide-out').addClass('slide-in');
            }
          },
    
          makeNavHeaderSticky: function () {
            var currentTop = $(window).scrollTop();
            if (currentTop == 0 && this.navHeader.hasClass('is-fixed'))
              this.navHeader.removeClass("is-fixed");
            else if (currentTop > 0 && !this.navHeader.hasClass('is-fixed'))
              this.navHeader.addClass("is-fixed");
          },
    
          openClosePrimaryNav: function () {
            var desktop = this.checkViewportWidth(),
              nav = this.nav,
              mainMenu = this.mainMenu;
            this.menuIcon.toggleClass('is-clicked');
            this.navHeader.toggleClass('menu-is-open');
            if (!desktop) {
              if (nav.hasClass('is-visible')) {
                nav.removeClass('is-visible').one(this.transition, function () {
                  $('body').removeClass('overflow-hidden');
                  nav.removeClass('open');
                });
              } else {
                nav.addClass('open is-visible').one(this.transition, function () {
                  $('body').addClass('overflow-hidden');
                });
              }
            } else {
              if (nav.hasClass('horizontal')) {
                nav.removeClass('horizontal');
                $('body').addClass('overflow-hidden');
                this.nav.after(MainNav.createExtraInfoSection());
              } else {
                nav.addClass('horizontal');
                $('body').removeClass('overflow-hidden');
                $('.extra-info').remove();
              }
            }
          },
    
          createExtraInfoSection: function () {
            var newMenuDiv = $('<div />', { class: 'extra-info' }),
              img = $('<img />',
                {
                  src: '/sites/all/themes/hy_stark/img/buildingInk.png',
                  class: 'extra-info__image',
                  alt: 'alt text here'
                }
              ),
              heading = $('<h3>', { class: 'extra-info__heading' }),
              headingContent = 'WHERE THE MAGIC HAPPENS.',
              copy = $('<p>', { class: 'extra-info__copy' }),
              copyContent = 'Here, the chemistry is simple. We mix together solid strategies and unique insights with strong creative thinking to arrive at our version of ROI (Return on Ideas). Yeah, we kind of geek-out over this stuff, sans any lab coats.';
    
            newMenuDiv.append(
              img, heading.append(headingContent), copy.append(copyContent)
            );
            return newMenuDiv;
          }
        }
    
        MainNav.init();
        // -----------------------------------------------------------------------------
        // Debouncer
    
        // -----------------------------------------------------------------------------
        // Debouncer implementation for Main Nav moveNavigation
    
        $(window).on('resize', debounce(function (e) {
          (!window.requestAnimationFrame)
            ? MainNav.defaultNavState()
            : window.requestAnimationFrame(function () { MainNav.defaultNavState(); });
        }, 100));
      });
    
      // -----------------------------------------------------------------------------
      // End of Main navigation
    
    
    
    
      //----------------------------------------------------------------------------
      // Initialize Owl Carousel
    
      if ($(window).width() < 768) {
        $('.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          margin: 0,
          stagePadding: 25,
          responsive: {
            0: {
              items: 1
            }
          }
        })
      }
    
      //----------------------------------------------------------------------------
      // Rise Up OnScroll event
    
      var riseUp = function () {
        var document = $(window).scrollTop(),
          d = $(window).height(),
          e = 0;
        $(".rise:not(.rise-in-view)").each(function () {
          var window = $(this);
          window.css("transition-delay", e + "ms");
          var f = parseInt(window.offset().top, 10);
          document + d >= f + 50 && (window.addClass("rise-in-view"), e += 75)
        })
      };
      $(window).on("ready load scroll resize content-change", function () {
        riseUp()
      })
    });
    
    //------------------------------------------------------------------------------
    // Initialize Materialize Select
    
    jQuery(document).ready(function () {
      jQuery('select').material_select();
    });
    
    //------------------------------------------------------------------------------
    // Client Modal
    
    jQuery(document).ready(function($) {
    
      $(document).on('click','.work-thumb__content',function(e){
        var ele = $(e.target);
        console.log(ele);
    
        if(!ele.hasClass('work-thumb__content-cta')){
          window.location = $(this).children('a').attr('href');
        }
      });
    
      //trigger the animation - open modal window
      $('[data-type="modal-trigger"]').on('click', function (ev) {
        ev.preventDefault();
    
    
    
    
    
        var actionBtn = $(this),
          scaleValue = retrieveScale(actionBtn.next('.hy-modal-bg'));
    
        actionBtn.addClass('to-circle');
        $('.hy-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
          animateLayer(actionBtn.next('.hy-modal-bg'), scaleValue, true);
          //$('body,html').animate({ scrollTop:$(this).parents('section.clients').offset().top-35 },200);
        });
    
        //if browser doesn't support transitions...
        if (actionBtn.parents('.no-csstransitions').length > 0) {
          animateLayer(actionBtn.next('.hy-modal-bg'), scaleValue, true);
          //$('body,html').animate({ scrollTop:$(this).parents('section.clients').offset().top-35 },200);
        }
      });
    
      //trigger the animation - close modal window
      $('.hy-section .hy-modal-close').on('click', function () {
        closeModal();
      });
    
      $(document).keyup(function (event) {
        if (event.which == '27') closeModal();
      });
    
      $(window).on('resize', function () {
        //on window resize - update cover layer dimention and position
        if ($('.hy-section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
      });
    
    
    
    
    
      function retrieveScale(btn) {
        var btnRadius = btn.width() / 2,
          left = btn.offset().left + btnRadius,
          top = btn.offset().top + btnRadius - $(window).scrollTop(),
          scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());
    
        btn.css('position', 'fixed').velocity({
          top: top - btnRadius,
          left: left - btnRadius,
          translateX: 0,
        }, 0);
    
        return scale;
      }
    
      function scaleValue(topValue, leftValue, radiusValue, windowW, windowH) {
        var maxDistHor = (leftValue > windowW / 2) ? leftValue : (windowW - leftValue),
          maxDistVert = (topValue > windowH / 2) ? topValue : (windowH - topValue);
        return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radiusValue);
      }
    
      function animateLayer(layer, scaleVal, bool) {
        layer.velocity({
          scale: scaleVal
        }, 0, function () {
          //   $('body').toggleClass('overflow-hidden', bool);
          (bool)
            ? layer.parents('.hy-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
            : layer.removeClass('is-visible').removeAttr('style').siblings('[data-type="modal-trigger"]').removeClass('to-circle');
        });
      }
    
      function updateLayer() {
        var layer = $('.hy-section.modal-is-visible').find('.hy-modal-bg'),
          layerRadius = layer.width() / 2,
          layerTop = layer.siblings('.trigger').offset().top + layerRadius - $(window).scrollTop(),
          layerLeft = layer.siblings('.trigger').offset().left + layerRadius,
          scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
    
        layer.velocity({
          top: layerTop - layerRadius,
          left: layerLeft - layerRadius,
          scale: scale,
        }, 0);
      }
    
      function closeModal() {
        var section = $('.hy-section.modal-is-visible');
        section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
          animateLayer(section.find('.hy-modal-bg'), 0, false);
        });
        //if browser doesn't support transitions...
        if (section.parents('.no-csstransitions').length > 0) animateLayer(section.find('.hy-modal-bg'), 1, false);
      }
    });
    
    // ------------------------------------------------------------------------------
    
    (function ($) {
      'use strict';
    
      Drupal.behaviors.hy_stark_time_ago_bv = {
        attach: function (context, settings) {
          $('time.timeago').timeago();
        }
      };
    
      Drupal.behaviors.hy_stark_masonry = {
        attach: function (context, settings) {
          var opts = {
            itemSelector: '.grid-item',
            'gutter': 36,
            columnWidth: 265,
            isFitWidth: true
          }, img = $('.grid-item img'), loaded = 0;
    
    
          if (img.length > 0) {
            img.each(function () {
              if ($(this).prop('complete')) {
                loaded++;
                if (loaded == img.length) $('.grid').masonry(opts);
              } else {
                $(this).load(function () {
                  loaded++;
                  if (loaded == img.length) $('.grid').masonry(opts);
                });
              }
            });
          } else $('.grid').masonry(opts);
    
        }
      };
    
      Drupal.behaviors.client_logo_nav = {
        attach: function (context, settings) {
          var hover_class = 'color';
          var nohover_class = 'greyscale';
          if (Modernizr.touch) {
            hover_class = 'greyscale';
            nohover_class = 'color';
          }
    
          // Init - For non-touch, should be no change - else touch, make all color
          $('.hy-section.client a.trigger img')
            .addClass(nohover_class);
    
          $('.hy-section.client a.trigger img')
            .on('mouseover', function () {
              $(this).addClass(hover_class);
              $(this).removeClass(nohover_class);
            })
            .on('mouseout', function () {
              $(this).addClass(nohover_class);
              $(this).removeClass(hover_class);
            });
    
          function setLogoNav(industryTypeTid, industryTypeName) {
            $('section.clients .logo').hide();
            $('section.clients .logo.' + industryTypeTid).show();
            $('section.clients .current-client-category').html(industryTypeName);
          }
    
          setLogoNav('industry-tid-9'); // -- Init with tid-9 == 'Featured'
    
          // -- Handler: Show Categories
          $('.category-list .industry-select').on('click', function (ev) {
            ev.preventDefault();
            setLogoNav($(this).attr('data-industry-type'), $(this).text());
            $('.hy-section .hy-modal-close').trigger('click');
          });
        } // attach
      }; // tracking_sizmek_buy_button
    
    
    })(jQuery);
    
    // -----------------------------------------------------------------------------
    
    /* global BackgroundCheck:false */
    // document.addEventListener('DOMContentLoaded', function () {
    //     BackgroundCheck.init({
    //         targets: 'header',
    //         images: '.item'
    //     });
    // });
    
    //------------------------------------------------------------------------------
    
    /*window.onload = function() {
        var theForm = document.getElementById( 'theForm' );
                    //disable form autocomplete
                    theForm.setAttribute( "autocomplete", "off" );
    
        new stepsForm( theForm, {
            onSubmit : function( form ) {
                // hide form
                classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
    
                // let's just simulate something...
                var messageEl = theForm.querySelector( '.final-message' );
                messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
                classie.addClass( messageEl, 'show' );
            }
        });
    };
    
    window.onload = function() {
        var formWrap = document.getElementById( 'fs-form-wrap' );
        new FForm( formWrap, {
            onReview : function() {
                classie.add( document.body, 'overview' ); // for demo purposes only
            }
        } );
    };*/
    
    
    
    
    var _about = {
      init: function () {
        if (window.location.pathname != '/about') return;
    
        this.listen();
      },
      listen: function () {
        jQuery(document).on('click', '.capability-list li a', function (e) {
          e.preventDefault();
          var root = jQuery(this);
          if (root.hasClass('active')) return;
    
          jQuery('.capability-list li.active').removeClass('active');
          root.parent().addClass('active');
          jQuery('.capability-list-data .capability').removeClass('active').eq(root.parent().index()).addClass('active');
    
        });
      }
    };
    
    var _hy_capabilities = {
      init: function () {
        if (window.location.pathname != '/capabilities') return;
    
        this.listen();
      },
      listen: function () {
        var $ = jQuery;
        $(document).on('click', '.capability-list li a', function (e) {
          e.preventDefault();
          var root = jQuery(this);
          if (root.hasClass('active')) return;
          $('.capability-list li.active').removeClass('active');
          root.parent().addClass('active');
          root.parent().parent().parent().addClass('engaged').delay(500).queue(function (next) {
            $('.capability-list-data').removeClass('unengaged');
            $('.capability-list-data .capability').hide().removeClass('active').eq(root.parent().index()).fadeIn('slow').addClass('active');
            next();
          });
        });
    
    
        $(document).on('click', '.disengage', function () {
          $('.capability-list').removeClass('engaged');
          $('.capability-list-data').addClass('unengaged');
        });
    
        $(document).on("mouseenter", ".capability-list ul li", function () {
          $(this).parent().addClass("logo-orange");
        });
        $(document).on("mouseout", ".capability-list ul li", function () {
          $(this).parent().removeClass("logo-orange");
        });
    
      }
    };
    
    
    jQuery(document).ready(function ($) {
      _about.init();
      _hy_capabilities.init();
    
    
    
    
      //--career form tracking
      $(document).on('submit', 'form.job-posting', function (e) {
        //e.preventDefault();
        try {
          dataLayer.push({
            'event': 'event_trigger',
            'event_category': 'Career Form',
            'event_action': 'Submit',
            'event_label': $(this).siblings('h1').text().replace(/^\s+|\s+$/g, '')
          });
        } catch (err) {
          console.log(err);
        }
      });
      //--career form tracking
    
      $(document).on('click', '.contact .form_category .form_option', function () {
        var section = $(this).parents('section'),
          item = $(this).attr('data-form'),
          root = section.find('form.' + item),
          form = document.querySelector('form.' + item);
    
        section.css('min-height', section.height());
        var form_category = jQuery(this).parents('.form_category');
        form_category.addClass('category-hide');
        setTimeout(function () {
          form_category.addClass('hidden');
        }, 500);
    
        root.removeClass('form-hidden');
        form.setAttribute('autocomplete', 'off');
        new stepsForm(form, {
          onSubmit: function (form) {
    
    
            var post = { category: $(form).attr('data-key') };
            $(form).find('.questions li.final').each(function () {
              var input = $(this).children().first();
              post[input.attr('data-key')] = input.val();
            });
    
            $.ajax({
              url: '/contact/submit', type: 'post', data: post,
              success: function (response) {
                dataLayer.push({
                  'event': 'event_trigger',
                  'event_category': 'Form',
                  'event_action': 'Submit',
                  'event_label': post.category
                });
              }
            });
    
    
            classie.addClass(form.querySelector('.simform-inner'), 'hide');
            var messageEl = form.querySelector('.final-message');
            messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
            classie.addClass(messageEl, 'show');
          }
        });
    
        /*root.css('min-height',root.height());
        $(this).parents('.form_category').addClass('hidden');
        root.find('form.'+item).removeClass('hidden');*/
        /*$(this).parents('.form_category').fadeOut(function(){
          root.find('form.'+item).fadeIn(250);
        },250);*/
      });
    
    
      _contact = {
        process: function (form) {
          var form = $(form);
          form.find('.questions li').addClass('current review');
          form.find('.controls, .submit').toggle();
          this.listen();
        },
        listen: function () {
          console.log('_contact listen');
          $(document).on('click', '.contact_global .submit', function (e) {
            e.preventDefault();
          });
        }
      }
    
    
    });
    //------------------------------------------------------------------------------
    // Special case for INPUT[FILE] element for Webform for Job Applications
    
    jQuery(document).ready(function () {
      jQuery('form.job-posting').on('submit', function (ev) {
        // -- Check if privacy policy is CHECKED as read
        if (!jQuery('#edit-submitted-privacy-policy-wrapper-i-have-read-and-understood-the-a-href-privacy-policy-target-blankprivacy-policy-a-1').prop('checked')) {
          ev.preventDefault();
          jQuery('.form-item.form-type-checkbox.form-item-submitted-privacy-policy-wrapper-i-have-read-and-understood-the-a-href-privacy-policy-target-blankprivacy-policy-a-read-privacy-policy label').css('color', '#b00');
        } else {
          jQuery('.form-item.form-type-checkbox.form-item-submitted-privacy-policy-wrapper-i-have-read-and-understood-the-a-href-privacy-policy-target-blankprivacy-policy-a-read-privacy-policy label').css('color', '');
        } // if..else
        // -- Do we actually have a resume FILE attached?
        if (jQuery('#edit-submitted-upload-your-cv-resume-upload').val() === '') {
          ev.preventDefault();
          jQuery('.form-managed-file.link.box').css('background-color', '#b00');
        } else {
          jQuery('.form-managed-file.link.box').css('background-color', '');
        } // if..else
      })
    });
    
    //------------------------------------------------------------------------------
    // Deorphan featured news item titles
    
    jQuery(document).ready(function () {
      jQuery('.news-feature h1 span').deOrphan();
    });
    
    
    //------------------------------------------------------------------------------
    // Animate hero text on HY Capabilities page
    
    jQuery(document).ready(function () {
    
      // function([string1, string2],target id,[color1,color2])
      consoleText(['Skeptical', 'Curious', 'Crafty', 'Nimble', 'Brave', 'Confident', 'Uncommon'], 'text');
    
      function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        if (!target) return false;
    
        target.setAttribute('style', 'color:' + colors[0])
    
        window.setInterval(function () {
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 120)
      }
    });
    
    
    // -----------------------------------------------------------------------------
    // Industry page/ .industry-showcase section behavior
    jQuery(document).ready(function ($) {
      var industryShowcase = {
    
        init: function () {
          if (!$('.industry-showcase').is('*')) return;
          this.bindUIfunctions();
        },
    
        bindUIfunctions: function () {
          var obj = this;
          // Delegation
          $(document)
          // NOTE: UNCOMMENT WHEN CONTENT IS AVAILABLE
    
          // .on('mouseover mouseout', '.industry-showcase__featured-thumbnail', function() {
          //      obj.toggleFeaturedThumbnailBkg(event, $(this));
          // })
          $(window)
            .on('load resize', function () {
              obj.freezeFeaturedThumbnailBkg();
            })
        },
    
        checkViewportWidth: function () {
          var breakpoint = 992;
          var e = window,
            a = 'inner';
          if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
          }
          if (e[a + 'Width'] >= breakpoint) {
            return true;
          } else {
            return false;
          }
        },
    
        freezeFeaturedThumbnailBkg: function () {
          var desktop = this.checkViewportWidth(),
            el = $('.industry-showcase__featured-thumbnail'),
            bkgAlt = el.attr('alt-bkg');
    
          if (!desktop) {
            el.css("background-image", "url(" + bkgAlt + ")");
          }
    
        },
    
        toggleFeaturedThumbnailBkg: function (event, el) {
          var bkgOrig = el.attr('orig-bkg'),
            bkgAlt = el.attr('alt-bkg');
    
          if (event.type == 'mouseover') {
            el.css("background-image", "url(" + bkgAlt + ")");
          }
          if (event.type == 'mouseout') {
            el.css("background-image", "url(" + bkgOrig + ")");
          }
        }
    
      }
    
      industryShowcase.init();
    });
    
    //-----------------------------------------------------------------------------
    // Industry page/ .industry-clients section behavior
    jQuery(document).ready(function ($) {
      var industryClients = {
    
        init: function () {
          if (!$('.industry-clients').is('*')) return;
          this.bindUIfunctions();
        },
    
        bindUIfunctions: function () {
          var obj = this;
          // Delegation
          $(document)
            .on('mouseover mouseout', '.industry-clients__client-logo', function () {
              obj.toggleLogoImg(event, $(this));
            })
        },
    
        toggleLogoImg: function (event, el) {
          var bkgOrig = el.attr('bkg-orig'),
            bkgHover = el.attr('bkg-hover');
    
          if (event.type == 'mouseover') {
            el.attr("src", bkgHover);
          }
          if (event.type == 'mouseout') {
            el.attr("src", bkgOrig);
          }
        }
      }
    
      industryClients.init();
    });
    
    //-----------------------------------------------------------------------------
    // Creative Work page
    jQuery(document).ready(function ($) {
      var creativeWork = {
        init: function () {
          $('.creative-card:odd').removeClass('alt');
        }
      }
      creativeWork.init();
    });
    
    // -----------------------------------------------------------------------------
    // Case Study template tabs behavior
    jQuery(document).ready(function ($) {
      var CaseStudyTabs = {
    
        init: function () {
          if (!$('.case-study--subnav-tabs').is('*')) return;
          this.bindUIfunctions();
        },
    
        bindUIfunctions: function () {
          var obj = this;
          // Delegation
          $(document)
            .ready(function () {
              obj.stopVimeoAutoplay();
            })
            .on('click', '.case-study--subnav-tabs .tab-link', function () {
              obj.switchTabs($(this), event);
            })
    
          $(window)
    
            .on('scroll', function () {
              obj.fixSubnav();
            })
        },
    
        switchTabs: function (el, e) {
          e.preventDefault();
          var section = el.attr("href"),
            currentTab = el.parent(),
            subnav = $('.case-study--subnav');
    
          $('.case-study--subnav-tabs .tab').removeClass('active');
          currentTab.addClass('active');
          $('html,body').delay(400).animate({ scrollTop: $(section).offset().top }, 'slow');
          CaseStudyTabs.fixSubnav();
        },
    
        fixSubnav: function () {
          var subnav = $('.case-study--subnav'),
            challengeSection = $('.case-study--challenge');
          if ($(window).scrollTop() >= subnav.offset().top && !subnav.hasClass('is-fixed')) {
            $('.cd-logo, .cd-primary-nav').hide();
            subnav.addClass('is-fixed');
            challengeSection.css({ paddingTop: subnav.height() });
          } else if ($(window).scrollTop() < challengeSection.offset().top && subnav.hasClass('is-fixed')) {
            subnav.removeClass('is-fixed');
            challengeSection.css({ paddingTop: 5 + '%' });
            $('.cd-logo, .cd-primary-nav').show();
          }
        },
    
        stopVimeoAutoplay: function () {
          var player = $('.approach-card--content-media .vimeo_js ');
          console.log(JSON.stringify(player));
    
    
        }
      }
    
      CaseStudyTabs.init();
    
    });
    
    
    //------------------------------------------------------------------------------
    //  Case Study template : Animating stats numbers
    
    jQuery(document).ready(function ($) {
      if (!$('#roi').is('*')) return false;
      var a = 0;
      $(window).scroll(function () {
        var oTop = $('#roi').offset().top - window.innerHeight / 2;
        if (a == 0 && $(window).scrollTop() > oTop) {
          var delay = 1000;
          $('.counter-value').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
    
            $({ countNum: $this.text() }).animate({
              countNum: countTo
            },
    
              {
                duration: 500,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  setTimeout(function () {
                    $this.addClass('is-animated');
                  }, delay);
                  delay += 1000;
                }
              });
          });
          a = 1;
        }
      });
    });
    
    
    jQuery(document).ready(function ($) {
      if ($('.the-work__container').length > 0) {
        var items = $('.the-work__container');
        items.cement({
          debug: /[\&\?]debug/gi.test(window.location.search),
          columns: 4,
          horizontalGutter: 0,
          verticalGutter: 0,
          breakpoints: [
            {
              max_window_width: 640,
              tile: {
                width: { max: 4, min: 4 },
                height: { max: 4, min: 3 }
              }
            },
            {
              max_window_width: 400,
              tile: {
                width: { max: 4, min: 4 },
                height: { max: 4, min: 4 }
              }
            }
          ]
        });
      }
    }, jQuery);
    
    // -----------------------------------------------------------------------------
    // New Home page case study panels behavior
    jQuery(document).ready(function ($) {
      var homePageCaseStudyPanels = {
    
        init: function () {
          if (!$('.home--case-studies .case-study .panel').is('*')) return;
          this.bindUIfunctions();
        },
    
        bindUIfunctions: function () {
          var obj = this;
          // Delegation
          $(document)
    
            .on('mouseenter mouseleave', '.home--case-studies .case-study', function () {
              obj.togglePanels(event, $(this));
            })
    
          $(window)
            .on('load resize', function () {
              obj.showFirstPanel();
            })
        },
    
        checkViewportWidth: function () {
          var breakpoint = 992;
          var e = window,
            a = 'inner';
          if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
          }
          if (e[a + 'Width'] >= breakpoint) {
            return true;
          } else {
            return false;
          }
        },
    
        showFirstPanel: function () {
          var desktop = this.checkViewportWidth(),
            firstPanels = $('.home--case-studies .case-study .panel:nth-of-type(1)');
    
            console.log(desktop);
    
          firstPanels.each(function (index, val) {
            var firstPanelImg = $(this).find('.panel-image'),
              firstPanelOgImg = firstPanelImg.attr('orig-bkg'),
              parentCaseStudy = $(this).closest('.case-study'),
              parentCaseStudyBkg = parentCaseStudy.css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
    
            if (!desktop) {
              $(this).addClass('is-shown');
              firstPanelImg.attr('src', parentCaseStudyBkg);
            }
            else if (desktop && !$(this).siblings().hasClass('is-shown')) {
              $(this).removeClass('is-shown');
              firstPanelImg.attr('src', firstPanelOgImg);
            }
    
          });
    
    
        },
    
        togglePanels: function (event, el) {
          var panels = el.find('.panel');
          var desktop = this.checkViewportWidth();
          console.log(desktop);
          if (desktop) {
            if (event.type == 'mouseover') {
              panels.toggleClass('is-shown');
            }
            if (event.type == 'mouseout') {
              panels.toggleClass('is-shown');
            }
          }
        }
    
      }
    
      homePageCaseStudyPanels.init();
    },jQuery);
    
    // jQuery(document).ready(function($) {
    //       if($('.capability-list-data').length==0) return;
    //
    //       $('.capability-list-data').slick({
    //              slidesToShow: 1,
    //              slidesToScroll: 1,
    //              arrows: false,
    //              fade: true,
    //              asNavFor: '.capability-list > ul'
    //       });
    //       $('.capability-list > ul').slick({
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             arrows: false,
    //             dots: false,
    //             centerMode: true,
    //             asNavFor: '.capability-list-data',
    //             focusOnSelect: true,
    //             variableWidth: false
    //       });
    // },jQuery);
    
    
    // accessibility featu
    jQuery(document).ready(function($) {
          $( ".work-grid .list-item a" ).focus(function() {
                var parent = $(this).parent();
                parent.siblings('.focused').removeClass('focused');
                parent.addClass('focused');
          });
    },jQuery);
    ;
    
    
    jQuery(document).ready(function($) {
          if(!$('#culture-carousel').is('*')) return false;
    
          jQuery(window).scroll(function() {
                var aTop = $('.counter-value').offset().top - window.innerHeight;
                if ($(window).scrollTop() > aTop) {
                      $('#culture-fact-counter .counter-value').each(function() {
                         var $this = $(this),
                           countTo = $this.attr('data-count');
                         $({
                           countNum: $this.text()
                         }).animate({
                             countNum: countTo
                           },
    
                           {
                             duration: 1500,
                             easing: 'swing',
                             step: function() {
                               $this.text(Math.floor(this.countNum));
                             },
                             complete: function() {
                               $this.text(this.countNum);
                             }
    
                           });
                      });
                }
          });
    
          //------------------------------------------------------------------------------
          //  About page : Animating fun fact numbers in Leadership tab
          jQuery(document).on('click','#leadership-tab',function(){
                var aTop = $('.counter-value').offset().top - window.innerHeight;
                if ($(window).scrollTop() > aTop) {
                      $('#leadership-fact-counter .counter-value').each(function() {
                         var $this = $(this),
                           countTo = $this.attr('data-count');
                         $({
                           countNum: $this.text()
                         }).animate({
                             countNum: countTo
                           },
    
                           {
                             duration: 1500,
                             easing: 'swing',
                             step: function() {
                               $this.text(Math.floor(this.countNum));
                             },
                             complete: function() {
                               $this.text(this.countNum);
                             }
    
                           });
                      });
                }
          });
    
    
          var selectedClass = "";
         $(".fil-cat").click(function(){
               $(".fil-cat").removeClass('active');
               $(this).addClass('active');
                selectedClass = $(this).attr("data-rel");
                $("#staff").fadeTo(100, 0.1);
                $("#staff div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
                setTimeout(function() {
                      $("."+selectedClass).fadeIn().addClass('scale-anm');
                      $("#staff").fadeTo(300, 1);
                }, 150);
         });
    
         $('#culture-carousel').carousel({
               interval: 2500,
               pause: null
         });
    });
    ;
    //console catcher
    (function(w,f,o,c,a){ if(!w[c]){ for(i=0;i<a.length;i++) o[a[i]]=f; w[c]=o; } })(window,function(){},{},'console',['warn','trace','timeEnd','time','profileEnd','profile','markTimeline','log','info','groupEnd','groupCollapsed','group','exception','error','dirxml','dir','debug','count','assert','clear','table','timeStamp']);
    
    //launcher
    !function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<d.length;t++)d[t].fn.call(window,d[t].ctx);d=[]}}function o(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var d=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(d.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",n)),c=!0)))}}("_launch",window);
    
    //vimeo
    var _vimeo = {
        debug: 		/([\?|&|#]debug)/.test(window.location.search) ? true : false,
        player:		{},
        origin:		'*',
    
        init: function(){
            try {
                var set = document.querySelectorAll('.vimeo_js');
                if(set.length==0) return;
    
                for(var i=0; i<set.length; i++){
                    var rid = 'vim'+(new Date()/1),
                        item = set[i],
                        frame = document.createElement('iframe'),
                        vid = item.getAttribute('vid');
    
                    frame.setAttribute('id',rid);
                    frame.setAttribute('src','https://player.vimeo.com/video/'+vid+'?player_id='+rid);
                    frame.setAttribute('frameborder',0);
                    item.appendChild(frame);
    
                    this.player[rid] = {
                        vid: vid,
                        frame: frame
                    };
    
                    //if(item.getAttribute('id')==null) continue;
                    //if(typeof this.player[item.getAttribute('id')]!=='undefined') continue;
                    //this.player[item.getAttribute('id')] = item;
                }
    
                if(window.addEventListener) window.addEventListener('message',this.message_received,false);
                else window.attachEvent('onmessage',this.message_received,false);
    
            } catch(error){
                console.log(error);
            }
        },
        post: function(id,action,value){
            var data = {
                method: action,
                value: typeof value!=='undefined' ? value : null
            }, message = JSON.stringify(data);
            this.player[id].frame.contentWindow.postMessage(message,this.origin);
        },
        message_received: function(event){
            if(!(/^https?:\/\/player.vimeo.com/).test(event.origin)) return false;
            if(this.origin==='*') this.origin = event.origin;
            var data = JSON.parse(event.data);
    
            if(typeof data.event=='undefined') return;
            if(data.event=='ready') _vimeo.ready(data.player_id);
            else if(data.event=='play') _vimeo.play(data);
            else if(data.event=='playProgress') _vimeo.progress(data);
            else if(data.event=='pause') _vimeo.pause(data.player_id);
            else if(data.event=='finish') _vimeo.finish(data);
        },
        ready: function(id){
            this.post(id,'addEventListener','play');
            this.post(id,'addEventListener','pause');
            this.post(id,'addEventListener','finish');
            this.post(id,'addEventListener','playProgress');
        },
        play: function(data){
            dataLayer.push({
                event: 'event_trigger',
                event_category: 'Vimeo',
                event_action: 'Play',
                event_label: this.uri(this.player[data.player_id].vid)
            });
    
        },
        progress: function(data){
            var iframe = this.player[data.player_id].frame, segment = [0.25,0.50,0.75],
                on = iframe.getAttribute('segment') ? parseFloat(iframe.getAttribute('segment')) : 0;
    
            if(data.data.percent>=segment[0]){
                for(var x=0; x<segment.length; x++){
                    if(on<segment[x] && data.data.percent>=segment[x]){
                        dataLayer.push({
                            event: 'event_trigger',
                            event_category: 'Vimeo',
                            event_action: 'Progress',
                            event_label: this.uri(data.player_id)+' - '+segment[x]*100+'%'
                        });
                        iframe.setAttribute('segment',segment[x]);
                    }
                }
            }
        },
        pause: function(id){
            //console.log('pause :: '+id);
        },
        finish: function(data){
            dataLayer.push({
                event: 'event_trigger',
                event_category: 'Vimeo',
                event_action: 'Finish',
                event_label: this.uri(data.player_id)
            });
        },
        uri: function(id){
            return 'https://vimeo.com/'+id.replace(/(vim_)(\d+)(_.*)/gi,'$2');
        }
    };
    
    
    //document ready launch
    _launch(function(){
        _vimeo.init();
    });
    ;
    /* -----------------------------------------------
    /* Author : Vincent Garreau  - vincentgarreau.com
    /* MIT license: http://opensource.org/licenses/MIT
    /* Demo / Generator : vincentgarreau.com/particles.js
    /* GitHub : github.com/VincentGarreau/particles.js
    /* How to use? : Check the GitHub README
    /* v2.0.0
    /* ----------------------------------------------- */
    var pJS = function(tag_id, params){
    
      var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
    
      /* particles.js variables with default values */
      this.pJS = {
        canvas: {
          el: canvas_el,
          w: canvas_el.offsetWidth,
          h: canvas_el.offsetHeight
        },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#fff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#fff'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: '',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 20,
            random: false,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000
            }
          },
          array: []
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab:{
              distance: 100,
              line_linked:{
                opacity: 1
              }
            },
            bubble:{
              distance: 200,
              size: 80,
              duration: 0.4
            },
            repulse:{
              distance: 200,
              duration: 0.4
            },
            push:{
              particles_nb: 4
            },
            remove:{
              particles_nb: 2
            }
          },
          mouse:{}
        },
        retina_detect: false,
        fn: {
          interact: {},
          modes: {},
          vendors:{}
        },
        tmp: {}
      };
    
      var pJS = this.pJS;
    
      /* params settings */
      if(params){
        Object.deepExtend(pJS, params);
      }
    
      pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
      };
    
    
      pJS.fn.retinaInit = function(){
    
        if(pJS.retina_detect && window.devicePixelRatio > 1){
          pJS.canvas.pxratio = window.devicePixelRatio;
          pJS.tmp.retina = true;
        }
        else{
          pJS.canvas.pxratio = 1;
          pJS.tmp.retina = false;
        }
    
        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
    
        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
    
      };
    
    
    
      /* ---------- pJS functions - canvas ------------ */
    
      pJS.fn.canvasInit = function(){
        pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
      };
    
      pJS.fn.canvasSize = function(){
    
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
    
        if(pJS && pJS.interactivity.events.resize){
    
          window.addEventListener('resize', function(){
    
              pJS.canvas.w = pJS.canvas.el.offsetWidth;
              pJS.canvas.h = pJS.canvas.el.offsetHeight;
    
              /* resize canvas */
              if(pJS.tmp.retina){
                pJS.canvas.w *= pJS.canvas.pxratio;
                pJS.canvas.h *= pJS.canvas.pxratio;
              }
    
              pJS.canvas.el.width = pJS.canvas.w;
              pJS.canvas.el.height = pJS.canvas.h;
    
              /* repaint canvas on anim disabled */
              if(!pJS.particles.move.enable){
                pJS.fn.particlesEmpty();
                pJS.fn.particlesCreate();
                pJS.fn.particlesDraw();
                pJS.fn.vendors.densityAutoParticles();
              }
    
            /* density particles enabled */
            pJS.fn.vendors.densityAutoParticles();
    
          });
    
        }
    
      };
    
    
      pJS.fn.canvasPaint = function(){
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
      };
    
      pJS.fn.canvasClear = function(){
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
      };
    
    
      /* --------- pJS functions - particles ----------- */
    
      pJS.fn.particle = function(color, opacity, position){
    
        /* size */
        this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if(pJS.particles.size.anim.enable){
          this.size_status = false;
          this.vs = pJS.particles.size.anim.speed / 100;
          if(!pJS.particles.size.anim.sync){
            this.vs = this.vs * Math.random();
          }
        }
    
        /* position */
        this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;
    
        /* check position  - into the canvas */
        if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
        else if(this.x < this.radius*2) this.x = this.x + this.radius;
        if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
        else if(this.y < this.radius*2) this.y = this.y + this.radius;
    
        /* check position - avoid overlap */
        if(pJS.particles.move.bounce){
          pJS.fn.vendors.checkOverlap(this, position);
        }
    
        /* color */
        this.color = {};
        if(typeof(color.value) == 'object'){
    
          if(color.value instanceof Array){
            var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
            this.color.rgb = hexToRgb(color_selected);
          }else{
            if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
              this.color.rgb = {
                r: color.value.r,
                g: color.value.g,
                b: color.value.b
              }
            }
            if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
              this.color.hsl = {
                h: color.value.h,
                s: color.value.s,
                l: color.value.l
              }
            }
          }
    
        }
        else if(color.value == 'random'){
          this.color.rgb = {
            r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
            g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
            b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
          }
        }
        else if(typeof(color.value) == 'string'){
          this.color = color;
          this.color.rgb = hexToRgb(this.color.value);
        }
    
        /* opacity */
        this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if(pJS.particles.opacity.anim.enable){
          this.opacity_status = false;
          this.vo = pJS.particles.opacity.anim.speed / 100;
          if(!pJS.particles.opacity.anim.sync){
            this.vo = this.vo * Math.random();
          }
        }
    
        /* animation - velocity for speed */
        var velbase = {}
        switch(pJS.particles.move.direction){
          case 'top':
            velbase = { x:0, y:-1 };
          break;
          case 'top-right':
            velbase = { x:0.5, y:-0.5 };
          break;
          case 'right':
            velbase = { x:1, y:-0 };
          break;
          case 'bottom-right':
            velbase = { x:0.5, y:0.5 };
          break;
          case 'bottom':
            velbase = { x:0, y:1 };
          break;
          case 'bottom-left':
            velbase = { x:-0.5, y:1 };
          break;
          case 'left':
            velbase = { x:-1, y:0 };
          break;
          case 'top-left':
            velbase = { x:-0.5, y:-0.5 };
          break;
          default:
            velbase = { x:0, y:0 };
          break;
        }
    
        if(pJS.particles.move.straight){
          this.vx = velbase.x;
          this.vy = velbase.y;
          if(pJS.particles.move.random){
            this.vx = this.vx * (Math.random());
            this.vy = this.vy * (Math.random());
          }
        }else{
          this.vx = velbase.x + Math.random()-0.5;
          this.vy = velbase.y + Math.random()-0.5;
        }
    
        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);
    
        this.vx_i = this.vx;
        this.vy_i = this.vy;
    
    
    
        /* if shape is image */
    
        var shape_type = pJS.particles.shape.type;
        if(typeof(shape_type) == 'object'){
          if(shape_type instanceof Array){
            var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
            this.shape = shape_selected;
          }
        }else{
          this.shape = shape_type;
        }
    
        if(this.shape == 'image'){
          var sh = pJS.particles.shape;
          this.img = {
            src: sh.image.src,
            ratio: sh.image.width / sh.image.height
          }
          if(!this.img.ratio) this.img.ratio = 1;
          if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
            pJS.fn.vendors.createSvgImg(this);
            if(pJS.tmp.pushing){
              this.img.loaded = false;
            }
          }
        }
    
    
    
      };
    
    
      pJS.fn.particle.prototype.draw = function() {
    
        var p = this;
    
        if(p.radius_bubble != undefined){
          var radius = p.radius_bubble;
        }else{
          var radius = p.radius;
        }
    
        if(p.opacity_bubble != undefined){
          var opacity = p.opacity_bubble;
        }else{
          var opacity = p.opacity;
        }
    
        if(p.color.rgb){
          var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
        }else{
          var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
        }
    
        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();
    
        switch(p.shape){
    
          case 'circle':
            pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
          break;
    
          case 'edge':
            pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
          break;
    
          case 'triangle':
            pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
          break;
    
          case 'polygon':
            pJS.fn.vendors.drawShape(
              pJS.canvas.ctx,
              p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
              p.y - radius / (2.66/3.5), // startY
              radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
              pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
              1 // sideCountDenominator
            );
          break;
    
          case 'star':
            pJS.fn.vendors.drawShape(
              pJS.canvas.ctx,
              p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
              p.y - radius / (2*2.66/3.5), // startY
              radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
              pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
              2 // sideCountDenominator
            );
          break;
    
          case 'image':
    
            function draw(){
              pJS.canvas.ctx.drawImage(
                img_obj,
                p.x-radius,
                p.y-radius,
                radius*2,
                radius*2 / p.img.ratio
              );
            }
    
            if(pJS.tmp.img_type == 'svg'){
              var img_obj = p.img.obj;
            }else{
              var img_obj = pJS.tmp.img_obj;
            }
    
            if(img_obj){
              draw();
            }
    
          break;
    
        }
    
        pJS.canvas.ctx.closePath();
    
        if(pJS.particles.shape.stroke.width > 0){
          pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
          pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
          pJS.canvas.ctx.stroke();
        }
    
        pJS.canvas.ctx.fill();
    
      };
    
    
      pJS.fn.particlesCreate = function(){
        for(var i = 0; i < pJS.particles.number.value; i++) {
          pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
        }
      };
    
      pJS.fn.particlesUpdate = function(){
    
        for(var i = 0; i < pJS.particles.array.length; i++){
    
          /* the particle */
          var p = pJS.particles.array[i];
    
          // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
          // var f = -BANG_SIZE / d;
          // if ( d < BANG_SIZE ) {
          //     var t = Math.atan2( dy, dx );
          //     p.vx = f * Math.cos(t);
          //     p.vy = f * Math.sin(t);
          // }
    
          /* move the particle */
          if(pJS.particles.move.enable){
            var ms = pJS.particles.move.speed/2;
            p.x += p.vx * ms;
            p.y += p.vy * ms;
          }
    
          /* change opacity status */
          if(pJS.particles.opacity.anim.enable) {
            if(p.opacity_status == true) {
              if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
              p.opacity += p.vo;
            }else {
              if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
              p.opacity -= p.vo;
            }
            if(p.opacity < 0) p.opacity = 0;
          }
    
          /* change size */
          if(pJS.particles.size.anim.enable){
            if(p.size_status == true){
              if(p.radius >= pJS.particles.size.value) p.size_status = false;
              p.radius += p.vs;
            }else{
              if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
              p.radius -= p.vs;
            }
            if(p.radius < 0) p.radius = 0;
          }
    
          /* change particle position if it is out of canvas */
          if(pJS.particles.move.out_mode == 'bounce'){
            var new_pos = {
              x_left: p.radius,
              x_right:  pJS.canvas.w,
              y_top: p.radius,
              y_bottom: pJS.canvas.h
            }
          }else{
            var new_pos = {
              x_left: -p.radius,
              x_right: pJS.canvas.w + p.radius,
              y_top: -p.radius,
              y_bottom: pJS.canvas.h + p.radius
            }
          }
    
          if(p.x - p.radius > pJS.canvas.w){
            p.x = new_pos.x_left;
            p.y = Math.random() * pJS.canvas.h;
          }
          else if(p.x + p.radius < 0){
            p.x = new_pos.x_right;
            p.y = Math.random() * pJS.canvas.h;
          }
          if(p.y - p.radius > pJS.canvas.h){
            p.y = new_pos.y_top;
            p.x = Math.random() * pJS.canvas.w;
          }
          else if(p.y + p.radius < 0){
            p.y = new_pos.y_bottom;
            p.x = Math.random() * pJS.canvas.w;
          }
    
          /* out of canvas modes */
          switch(pJS.particles.move.out_mode){
            case 'bounce':
              if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
              else if (p.x - p.radius < 0) p.vx = -p.vx;
              if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
              else if (p.y - p.radius < 0) p.vy = -p.vy;
            break;
          }
    
          /* events */
          if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
            pJS.fn.modes.grabParticle(p);
          }
    
          if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
            pJS.fn.modes.bubbleParticle(p);
          }
    
          if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
            pJS.fn.modes.repulseParticle(p);
          }
    
          /* interaction auto between particles */
          if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
            for(var j = i + 1; j < pJS.particles.array.length; j++){
              var p2 = pJS.particles.array[j];
    
              /* link particles */
              if(pJS.particles.line_linked.enable){
                pJS.fn.interact.linkParticles(p,p2);
              }
    
              /* attract particles */
              if(pJS.particles.move.attract.enable){
                pJS.fn.interact.attractParticles(p,p2);
              }
    
              /* bounce particles */
              if(pJS.particles.move.bounce){
                pJS.fn.interact.bounceParticles(p,p2);
              }
    
            }
          }
    
    
        }
    
      };
    
      pJS.fn.particlesDraw = function(){
    
        /* clear canvas */
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    
        /* update each particles param */
        pJS.fn.particlesUpdate();
    
        /* draw each particle */
        for(var i = 0; i < pJS.particles.array.length; i++){
          var p = pJS.particles.array[i];
          p.draw();
        }
    
      };
    
      pJS.fn.particlesEmpty = function(){
        pJS.particles.array = [];
      };
    
      pJS.fn.particlesRefresh = function(){
    
        /* init all */
        cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();
    
        /* restart */
        pJS.fn.vendors.start();
    
      };
    
    
      /* ---------- pJS functions - particles interaction ------------ */
    
      pJS.fn.interact.linkParticles = function(p1, p2){
    
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);
    
        /* draw a line between p1 and p2 if the distance between them is under the config distance */
        if(dist <= pJS.particles.line_linked.distance){
    
          var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;
    
          if(opacity_line > 0){
    
            /* style */
            var color_line = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
    
            /* path */
            pJS.canvas.ctx.beginPath();
            pJS.canvas.ctx.moveTo(p1.x, p1.y);
            pJS.canvas.ctx.lineTo(p2.x, p2.y);
            pJS.canvas.ctx.stroke();
            pJS.canvas.ctx.closePath();
    
          }
    
        }
    
      };
    
    
      pJS.fn.interact.attractParticles  = function(p1, p2){
    
        /* condensed particles */
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);
    
        if(dist <= pJS.particles.line_linked.distance){
    
          var ax = dx/(pJS.particles.move.attract.rotateX*1000),
              ay = dy/(pJS.particles.move.attract.rotateY*1000);
    
          p1.vx -= ax;
          p1.vy -= ay;
    
          p2.vx += ax;
          p2.vy += ay;
    
        }
    
    
      }
    
    
      pJS.fn.interact.bounceParticles = function(p1, p2){
    
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy),
            dist_p = p1.radius+p2.radius;
    
        if(dist <= dist_p){
          p1.vx = -p1.vx;
          p1.vy = -p1.vy;
    
          p2.vx = -p2.vx;
          p2.vy = -p2.vy;
        }
    
      }
    
    
      /* ---------- pJS functions - modes events ------------ */
    
      pJS.fn.modes.pushParticles = function(nb, pos){
    
        pJS.tmp.pushing = true;
    
        for(var i = 0; i < nb; i++){
          pJS.particles.array.push(
            new pJS.fn.particle(
              pJS.particles.color,
              pJS.particles.opacity.value,
              {
                'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
              }
            )
          )
          if(i == nb-1){
            if(!pJS.particles.move.enable){
              pJS.fn.particlesDraw();
            }
            pJS.tmp.pushing = false;
          }
        }
    
      };
    
    
      pJS.fn.modes.removeParticles = function(nb){
    
        pJS.particles.array.splice(0, nb);
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
    
      };
    
    
      pJS.fn.modes.bubbleParticle = function(p){
    
        /* on hover event */
        if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){
    
          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
              dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
              ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
    
          function init(){
            p.opacity_bubble = p.opacity;
            p.radius_bubble = p.radius;
          }
    
          /* mousemove - check ratio */
          if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
    
            if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
    
              /* size */
              if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){
    
                if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
                  var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
                  if(size >= 0){
                    p.radius_bubble = size;
                  }
                }else{
                  var dif = p.radius - pJS.interactivity.modes.bubble.size,
                      size = p.radius - (dif*ratio);
                  if(size > 0){
                    p.radius_bubble = size;
                  }else{
                    p.radius_bubble = 0;
                  }
                }
    
              }
    
              /* opacity */
              if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){
    
                if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
                  var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
                  if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                    p.opacity_bubble = opacity;
                  }
                }else{
                  var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
                  if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                    p.opacity_bubble = opacity;
                  }
                }
    
              }
    
            }
    
          }else{
            init();
          }
    
    
          /* mouseleave */
          if(pJS.interactivity.status == 'mouseleave'){
            init();
          }
    
        }
    
        /* on click event */
        else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){
    
    
          if(pJS.tmp.bubble_clicking){
            var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
                dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
                time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;
    
            if(time_spent > pJS.interactivity.modes.bubble.duration){
              pJS.tmp.bubble_duration_end = true;
            }
    
            if(time_spent > pJS.interactivity.modes.bubble.duration*2){
              pJS.tmp.bubble_clicking = false;
              pJS.tmp.bubble_duration_end = false;
            }
          }
    
    
          function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){
    
            if(bubble_param != particles_param){
    
              if(!pJS.tmp.bubble_duration_end){
                if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
                  if(p_obj_bubble != undefined) var obj = p_obj_bubble;
                  else var obj = p_obj;
                  if(obj != bubble_param){
                    var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                    if(id == 'size') p.radius_bubble = value;
                    if(id == 'opacity') p.opacity_bubble = value;
                  }
                }else{
                  if(id == 'size') p.radius_bubble = undefined;
                  if(id == 'opacity') p.opacity_bubble = undefined;
                }
              }else{
                if(p_obj_bubble != undefined){
                  var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                      dif = bubble_param - value_tmp;
                      value = bubble_param + dif;
                  if(id == 'size') p.radius_bubble = value;
                  if(id == 'opacity') p.opacity_bubble = value;
                }
              }
    
            }
    
          }
    
          if(pJS.tmp.bubble_clicking){
            /* size */
            process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
            /* opacity */
            process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
          }
    
        }
    
      };
    
    
      pJS.fn.modes.repulseParticle = function(p){
    
        if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
    
          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
              dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
    
          var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
              repulseRadius = pJS.interactivity.modes.repulse.distance,
              velocity = 100,
              repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
    
          var pos = {
            x: p.x + normVec.x * repulseFactor,
            y: p.y + normVec.y * repulseFactor
          }
    
          if(pJS.particles.move.out_mode == 'bounce'){
            if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
            if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
          }else{
            p.x = pos.x;
            p.y = pos.y;
          }
    
        }
    
    
        else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
    
          if(!pJS.tmp.repulse_finish){
            pJS.tmp.repulse_count++;
            if(pJS.tmp.repulse_count == pJS.particles.array.length){
              pJS.tmp.repulse_finish = true;
            }
          }
    
          if(pJS.tmp.repulse_clicking){
    
            var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);
    
            var dx = pJS.interactivity.mouse.click_pos_x - p.x,
                dy = pJS.interactivity.mouse.click_pos_y - p.y,
                d = dx*dx + dy*dy;
    
            var force = -repulseRadius / d * 1;
    
            function process(){
    
              var f = Math.atan2(dy,dx);
              p.vx = force * Math.cos(f);
              p.vy = force * Math.sin(f);
    
              if(pJS.particles.move.out_mode == 'bounce'){
                var pos = {
                  x: p.x + p.vx,
                  y: p.y + p.vy
                }
                if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                else if (pos.x - p.radius < 0) p.vx = -p.vx;
                if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                else if (pos.y - p.radius < 0) p.vy = -p.vy;
              }
    
            }
    
            // default
            if(d <= repulseRadius){
              process();
            }
    
            // bang - slow motion mode
            // if(!pJS.tmp.repulse_finish){
            //   if(d <= repulseRadius){
            //     process();
            //   }
            // }else{
            //   process();
            // }
    
    
          }else{
    
            if(pJS.tmp.repulse_clicking == false){
    
              p.vx = p.vx_i;
              p.vy = p.vy_i;
    
            }
    
          }
    
        }
    
      }
    
    
      pJS.fn.modes.grabParticle = function(p){
    
        if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){
    
          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
              dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
    
          /* draw a line between the cursor and the particle if the distance between them is under the config distance */
          if(dist_mouse <= pJS.interactivity.modes.grab.distance){
    
            var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;
    
            if(opacity_line > 0){
    
              /* style */
              var color_line = pJS.particles.line_linked.color_rgb_line;
              pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
              pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
              //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
    
              /* path */
              pJS.canvas.ctx.beginPath();
              pJS.canvas.ctx.moveTo(p.x, p.y);
              pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
              pJS.canvas.ctx.stroke();
              pJS.canvas.ctx.closePath();
    
            }
    
          }
    
        }
    
      };
    
    
    
      /* ---------- pJS functions - vendors ------------ */
    
      pJS.fn.vendors.eventsListeners = function(){
    
        /* events target element */
        if(pJS.interactivity.detect_on == 'window'){
          pJS.interactivity.el = window;
        }else{
          pJS.interactivity.el = pJS.canvas.el;
        }
    
    
        /* detect mouse pos - on hover / click event */
        if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){
    
          /* el on mousemove */
          pJS.interactivity.el.addEventListener('mousemove', function(e){
    
            if(pJS.interactivity.el == window){
              var pos_x = e.clientX,
                  pos_y = e.clientY;
            }
            else{
              var pos_x = e.offsetX || e.clientX,
                  pos_y = e.offsetY || e.clientY;
            }
    
            pJS.interactivity.mouse.pos_x = pos_x;
            pJS.interactivity.mouse.pos_y = pos_y;
    
            if(pJS.tmp.retina){
              pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
              pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
            }
    
            pJS.interactivity.status = 'mousemove';
    
          });
    
          /* el on onmouseleave */
          pJS.interactivity.el.addEventListener('mouseleave', function(e){
    
            pJS.interactivity.mouse.pos_x = null;
            pJS.interactivity.mouse.pos_y = null;
            pJS.interactivity.status = 'mouseleave';
    
          });
    
        }
    
        /* on click event */
        if(pJS.interactivity.events.onclick.enable){
    
          pJS.interactivity.el.addEventListener('click', function(){
    
            pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
            pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
            pJS.interactivity.mouse.click_time = new Date().getTime();
    
            if(pJS.interactivity.events.onclick.enable){
    
              switch(pJS.interactivity.events.onclick.mode){
    
                case 'push':
                  if(pJS.particles.move.enable){
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                  }else{
                    if(pJS.interactivity.modes.push.particles_nb == 1){
                      pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                    }
                    else if(pJS.interactivity.modes.push.particles_nb > 1){
                      pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                    }
                  }
                break;
    
                case 'remove':
                  pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                break;
    
                case 'bubble':
                  pJS.tmp.bubble_clicking = true;
                break;
    
                case 'repulse':
                  pJS.tmp.repulse_clicking = true;
                  pJS.tmp.repulse_count = 0;
                  pJS.tmp.repulse_finish = false;
                  setTimeout(function(){
                    pJS.tmp.repulse_clicking = false;
                  }, pJS.interactivity.modes.repulse.duration*1000)
                break;
    
              }
    
            }
    
          });
    
        }
    
    
      };
    
      pJS.fn.vendors.densityAutoParticles = function(){
    
        if(pJS.particles.number.density.enable){
    
          /* calc area */
          var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
          if(pJS.tmp.retina){
            area = area/(pJS.canvas.pxratio*2);
          }
    
          /* calc number of particles based on density area */
          var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
    
          /* add or remove X particles */
          var missing_particles = pJS.particles.array.length - nb_particles;
          if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
          else pJS.fn.modes.removeParticles(missing_particles);
    
        }
    
      };
    
    
      pJS.fn.vendors.checkOverlap = function(p1, position){
        for(var i = 0; i < pJS.particles.array.length; i++){
          var p2 = pJS.particles.array[i];
    
          var dx = p1.x - p2.x,
              dy = p1.y - p2.y,
              dist = Math.sqrt(dx*dx + dy*dy);
    
          if(dist <= p1.radius + p2.radius){
            p1.x = position ? position.x : Math.random() * pJS.canvas.w;
            p1.y = position ? position.y : Math.random() * pJS.canvas.h;
            pJS.fn.vendors.checkOverlap(p1);
          }
        }
      };
    
    
      pJS.fn.vendors.createSvgImg = function(p){
    
        /* set color to svg element */
        var svgXml = pJS.tmp.source_svg,
            rgbHex = /#([0-9A-F]{3,6})/gi,
            coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
              if(p.color.rgb){
                var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
              }else{
                var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
              }
              return color_value;
            });
    
        /* prepare to create img with colored svg */
        var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
            DOMURL = window.URL || window.webkitURL || window,
            url = DOMURL.createObjectURL(svg);
    
        /* create particle img obj */
        var img = new Image();
        img.addEventListener('load', function(){
          p.img.obj = img;
          p.img.loaded = true;
          DOMURL.revokeObjectURL(url);
          pJS.tmp.count_svg++;
        });
        img.src = url;
    
      };
    
    
      pJS.fn.vendors.destroypJS = function(){
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
      };
    
    
      pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){
    
        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0,0);
        for (var i = 0; i < sideCount; i++) {
          c.lineTo(sideLength,0);
          c.translate(sideLength,0);
          c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();
    
      };
    
      pJS.fn.vendors.exportImg = function(){
        window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
      };
    
    
      pJS.fn.vendors.loadImg = function(type){
    
        pJS.tmp.img_error = undefined;
    
        if(pJS.particles.shape.image.src != ''){
    
          if(type == 'svg'){
    
            var xhr = new XMLHttpRequest();
            xhr.open('GET', pJS.particles.shape.image.src);
            xhr.onreadystatechange = function (data) {
              if(xhr.readyState == 4){
                if(xhr.status == 200){
                  pJS.tmp.source_svg = data.currentTarget.response;
                  pJS.fn.vendors.checkBeforeDraw();
                }else{
                  console.log('Error pJS - Image not found');
                  pJS.tmp.img_error = true;
                }
              }
            }
            xhr.send();
    
          }else{
    
            var img = new Image();
            img.addEventListener('load', function(){
              pJS.tmp.img_obj = img;
              pJS.fn.vendors.checkBeforeDraw();
            });
            img.src = pJS.particles.shape.image.src;
    
          }
    
        }else{
          console.log('Error pJS - No image.src');
          pJS.tmp.img_error = true;
        }
    
      };
    
    
      pJS.fn.vendors.draw = function(){
    
        if(pJS.particles.shape.type == 'image'){
    
          if(pJS.tmp.img_type == 'svg'){
    
            if(pJS.tmp.count_svg >= pJS.particles.number.value){
              pJS.fn.particlesDraw();
              if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
              else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }else{
              //console.log('still loading...');
              if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }
    
          }else{
    
            if(pJS.tmp.img_obj != undefined){
              pJS.fn.particlesDraw();
              if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
              else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }else{
              if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }
    
          }
    
        }else{
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
    
      };
    
    
      pJS.fn.vendors.checkBeforeDraw = function(){
    
        // if shape is image
        if(pJS.particles.shape.type == 'image'){
    
          if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
            pJS.tmp.checkAnimFrame = requestAnimFrame(check);
          }else{
            //console.log('images loaded! cancel check');
            cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
            if(!pJS.tmp.img_error){
              pJS.fn.vendors.init();
              pJS.fn.vendors.draw();
            }
    
          }
    
        }else{
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
    
      };
    
    
      pJS.fn.vendors.init = function(){
    
        /* init canvas + particles */
        pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();
    
        /* particles.line_linked - convert hex colors to rgb */
        pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    
      };
    
    
      pJS.fn.vendors.start = function(){
    
        if(isInArray('image', pJS.particles.shape.type)){
          pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
          pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        }else{
          pJS.fn.vendors.checkBeforeDraw();
        }
    
      };
    
    
    
    
      /* ---------- pJS - start ------------ */
    
    
      pJS.fn.vendors.eventsListeners();
    
      pJS.fn.vendors.start();
    
    
    
    };
    
    /* ---------- global functions - vendors ------------ */
    
    Object.deepExtend = function(destination, source) {
      for (var property in source) {
        if (source[property] && source[property].constructor &&
         source[property].constructor === Object) {
          destination[property] = destination[property] || {};
          arguments.callee(destination[property], source[property]);
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    };
    
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
          window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    window.cancelRequestAnimFrame = ( function() {
      return window.cancelAnimationFrame         ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame    ||
        window.oCancelRequestAnimationFrame      ||
        window.msCancelRequestAnimationFrame     ||
        clearTimeout
    } )();
    
    function hexToRgb(hex){
      // By Tim Down - http://stackoverflow.com/a/5624139/3493650
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
         return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
    };
    
    function clamp(number, min, max) {
      return Math.min(Math.max(number, min), max);
    };
    
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
    
    
    /* ---------- particles.js functions - start ------------ */
    
    window.pJSDom = [];
    
    window.particlesJS = function(tag_id, params){
    
      //console.log(params);
    
      /* no string id? so it's object params, and set the id with default id */
      if(typeof(tag_id) != 'string'){
        params = tag_id;
        tag_id = 'particles-js';
      }
    
      /* no id? set the id to default id */
      if(!tag_id){
        tag_id = 'particles-js';
      }
    
      try {
          /* pJS elements */
          var pJS_tag = document.getElementById(tag_id),
                pJS_canvas_class = 'particles-js-canvas-el',
                exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
          }
          catch(error) {
                return;
          }
      /* remove canvas if exists into the pJS target tag */
      if(exist_canvas.length){
        while(exist_canvas.length > 0){
          pJS_tag.removeChild(exist_canvas[0]);
        }
      }
    
      /* create canvas element */
      var canvas_el = document.createElement('canvas');
      canvas_el.className = pJS_canvas_class;
    
      /* set size canvas */
      canvas_el.style.width = "100%";
      canvas_el.style.height = "100%";
    
      /* append canvas */
      var canvas = document.getElementById(tag_id).appendChild(canvas_el);
    
      /* launch particle.js */
      if(canvas != null){
        pJSDom.push(new pJS(tag_id, params));
      }
    
    };
    
    window.particlesJS.load = function(tag_id, path_config_json, callback){
    
      /* load json config */
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path_config_json);
      xhr.onreadystatechange = function (data) {
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            var params = JSON.parse(data.currentTarget.response);
            window.particlesJS(tag_id, params);
            if(callback) callback();
          }else{
            console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
            console.log('Error pJS - File config not found');
          }
        }
      };
      xhr.send();
    
    };
    ;
    /* -----------------------------------------------
    /* How to use? : Check the GitHub README
    /* ----------------------------------------------- */
    
    /* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
    /*
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('particles.js loaded - callback');
    });
    */
    
    /* Otherwise just put the config content (json): */
    jQuery(document).ready(function($){
    
          particlesJS('particles-js',
            {
              "particles": {
                "number": {
                  "value": 294,
                  "density": {
                    "enable": true,
                    "value_area": 1104.8066982851817
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 4
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.14430708547789706,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 160.3412060865523,
                  "color": "#000000",
                  "opacity": 0.1,
                  "width": 1
                },
                "move": {
                      "enable":true,
                       "speed":6,
                       "direction":"none",
                       "random":false,
                       "straight":false,
                       "out_mode":"out",
                       "bounce":false,
                       "attract":{
                          "enable":false,
                          "rotateX":600,
                          "rotateY":1200
                       }
                }
              },
              "interactivity": {
                    "detect_on":"canvas",
                   "events":{
                      "onhover":{
                         "enable":true,
                         "mode":"grab"
                      },
                      "onclick":{
                         "enable":true,
                         "mode":"push"
                      },
                      "resize":true
                   },
                   "modes":{
                      "grab":{
                         "distance":200,
                         "line_linked":{
                            "opacity":.2
                         }
                      },
                      "bubble":{
                         "distance":400,
                         "size":40,
                         "duration":2,
                         "opacity":8,
                         "speed":3
                      },
                      "repulse":{
                         "distance":200,
                         "duration":0.4
                      },
                      "push":{
                         "particles_nb":4
                      },
                      "remove":{
                         "particles_nb":2
                      }
                   }
                },
              "retina_detect": false,
            }
          );
    },jQuery);
    ;
    !function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
    ;
    