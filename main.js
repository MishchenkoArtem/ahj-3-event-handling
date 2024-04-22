(()=>{"use strict";var t={509:(t,r,e)=>{var n=e(9985),o=e(3691),i=TypeError;t.exports=function(t){if(n(t))return t;throw new i(o(t)+" is not a function")}},3550:(t,r,e)=>{var n=e(598),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw new i("Can't set "+o(t)+" as a prototype")}},5027:(t,r,e)=>{var n=e(8999),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw new i(o(t)+" is not an object")}},7612:(t,r,e)=>{var n=e(2960).forEach,o=e(6834)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4328:(t,r,e)=>{var n=e(5290),o=e(7578),i=e(6310),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2960:(t,r,e)=>{var n=e(4071),o=e(8844),i=e(4413),a=e(690),u=e(6310),c=e(7120),s=o([].push),f=function(t){var r=1===t,e=2===t,o=3===t,f=4===t,p=6===t,l=7===t,v=5===t||p;return function(y,g,h,b){for(var d,x,m=a(y),S=i(m),w=u(S),_=n(g,h),O=0,E=b||c,L=r?E(y,w):e||l?E(y,0):void 0;w>O;O++)if((v||O in S)&&(x=_(d=S[O],O,m),t))if(r)L[O]=x;else if(x)switch(t){case 3:return!0;case 5:return d;case 6:return O;case 2:s(L,d)}else switch(t){case 4:return!1;case 7:s(L,d)}return p?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},6834:(t,r,e)=>{var n=e(3689);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},5271:(t,r,e)=>{var n=e(2297),o=e(9429),i=e(8999),a=e(4201)("species"),u=Array;t.exports=function(t){var r;return n(t)&&(r=t.constructor,(o(r)&&(r===u||n(r.prototype))||i(r)&&null===(r=r[a]))&&(r=void 0)),void 0===r?u:r}},7120:(t,r,e)=>{var n=e(5271);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},6648:(t,r,e)=>{var n=e(8844),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},926:(t,r,e)=>{var n=e(3043),o=e(9985),i=e(6648),a=e(4201)("toStringTag"),u=Object,c="Arguments"===i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=u(t),a))?e:c?i(r):"Object"===(n=i(r))&&o(r.callee)?"Arguments":n}},8758:(t,r,e)=>{var n=e(6812),o=e(9152),i=e(2474),a=e(2560);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||c(t,p,s(r,p))}}},5773:(t,r,e)=>{var n=e(7697),o=e(2560),i=e(5684);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},5684:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},1880:(t,r,e)=>{var n=e(9985),o=e(2560),i=e(8702),a=e(5014);t.exports=function(t,r,e,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:r;if(n(e)&&i(e,s,u),u.global)c?t[r]=e:a(r,e);else{try{u.unsafe?t[r]&&(c=!0):delete t[r]}catch(t){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},5014:(t,r,e)=>{var n=e(9037),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},7697:(t,r,e)=>{var n=e(3689);t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6420:(t,r,e)=>{var n=e(9037),o=e(8999),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},6338:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},3265:(t,r,e)=>{var n=e(6420)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},71:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:(t,r,e)=>{var n,o,i=e(9037),a=e(71),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},2739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:(t,r,e)=>{var n=e(9037),o=e(2474).f,i=e(5773),a=e(1880),u=e(5014),c=e(8758),s=e(5266);t.exports=function(t,r){var e,f,p,l,v,y=t.target,g=t.global,h=t.stat;if(e=g?n:h?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in r){if(l=r[f],p=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(g?f:y+(h?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},3689:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},4071:(t,r,e)=>{var n=e(6576),o=e(509),i=e(7215),a=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},7215:(t,r,e)=>{var n=e(3689);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:(t,r,e)=>{var n=e(7215),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},1236:(t,r,e)=>{var n=e(7697),o=e(6812),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},2743:(t,r,e)=>{var n=e(8844),o=e(509);t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}}},6576:(t,r,e)=>{var n=e(6648),o=e(8844);t.exports=function(t){if("Function"===n(t))return o(t)}},8844:(t,r,e)=>{var n=e(7215),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},6058:(t,r,e)=>{var n=e(9037),o=e(9985);t.exports=function(t,r){return arguments.length<2?(e=n[t],o(e)?e:void 0):n[t]&&n[t][r];var e}},4849:(t,r,e)=>{var n=e(509),o=e(981);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},9037:function(t,r,e){var n=function(t){return t&&t.Math===Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||n("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:(t,r,e)=>{var n=e(8844),o=e(690),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},7248:t=>{t.exports={}},8506:(t,r,e)=>{var n=e(7697),o=e(3689),i=e(6420);t.exports=!n&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:(t,r,e)=>{var n=e(8844),o=e(3689),i=e(6648),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?u(t,""):a(t)}:a},3457:(t,r,e)=>{var n=e(9985),o=e(8999),i=e(9385);t.exports=function(t,r,e){var a,u;return i&&n(a=r.constructor)&&a!==e&&o(u=a.prototype)&&u!==e.prototype&&i(t,u),t}},6738:(t,r,e)=>{var n=e(8844),o=e(9985),i=e(4091),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},618:(t,r,e)=>{var n,o,i,a=e(9834),u=e(9037),c=e(8999),s=e(5773),f=e(6812),p=e(4091),l=e(2713),v=e(7248),y="Object already initialized",g=u.TypeError,h=u.WeakMap;if(a||p.state){var b=p.state||(p.state=new h);b.get=b.get,b.has=b.has,b.set=b.set,n=function(t,r){if(b.has(t))throw new g(y);return r.facade=t,b.set(t,r),r},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var d=l("state");v[d]=!0,n=function(t,r){if(f(t,d))throw new g(y);return r.facade=t,s(t,d,r),r},o=function(t){return f(t,d)?t[d]:{}},i=function(t){return f(t,d)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw new g("Incompatible receiver, "+t+" required");return e}}}},2297:(t,r,e)=>{var n=e(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},9985:t=>{var r="object"==typeof document&&document.all;t.exports=void 0===r&&void 0!==r?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t}},9429:(t,r,e)=>{var n=e(8844),o=e(3689),i=e(9985),a=e(926),u=e(6058),c=e(6738),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.test(s),g=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},h=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,c(t))}catch(t){return!0}};h.sham=!0,t.exports=!p||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?h:g},5266:(t,r,e)=>{var n=e(3689),o=e(9985),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e===f||e!==s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},981:t=>{t.exports=function(t){return null==t}},8999:(t,r,e)=>{var n=e(9985);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},598:(t,r,e)=>{var n=e(8999);t.exports=function(t){return n(t)||null===t}},3931:t=>{t.exports=!1},734:(t,r,e)=>{var n=e(6058),o=e(9985),i=e(3622),a=e(9525),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,u(t))}},6310:(t,r,e)=>{var n=e(3126);t.exports=function(t){return n(t.length)}},8702:(t,r,e)=>{var n=e(8844),o=e(3689),i=e(9985),a=e(6812),u=e(7697),c=e(1236).CONFIGURABLE,s=e(6738),f=e(618),p=f.enforce,l=f.get,v=String,y=Object.defineProperty,g=n("".slice),h=n("".replace),b=n([].join),d=u&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),x=String(String).split("String"),m=t.exports=function(t,r,e){"Symbol("===g(v(r),0,7)&&(r="["+h(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!a(t,"name")||c&&t.name!==r)&&(u?y(t,"name",{value:r,configurable:!0}):t.name=r),d&&e&&a(e,"arity")&&t.length!==e.arity&&y(t,"length",{value:e.arity});try{e&&a(e,"constructor")&&e.constructor?u&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=p(t);return a(n,"source")||(n.source=b(x,"string"==typeof r?r:"")),t};Function.prototype.toString=m((function(){return i(this)&&l(this).source||s(this)}),"toString")},8828:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},2560:(t,r,e)=>{var n=e(7697),o=e(8506),i=e(5648),a=e(5027),u=e(8360),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";r.f=n?i?function(t,r,e){if(a(t),r=u(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=f(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:l in e?e[l]:n[l],enumerable:p in e?e[p]:n[p],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=u(r),a(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},2474:(t,r,e)=>{var n=e(7697),o=e(2615),i=e(9556),a=e(5684),u=e(5290),c=e(8360),s=e(6812),f=e(8506),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=c(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},2741:(t,r,e)=>{var n=e(4948),o=e(2739).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},7518:(t,r)=>{r.f=Object.getOwnPropertySymbols},3622:(t,r,e)=>{var n=e(8844);t.exports=n({}.isPrototypeOf)},4948:(t,r,e)=>{var n=e(8844),o=e(6812),i=e(5290),a=e(4328).indexOf,u=e(7248),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},9556:(t,r)=>{var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},9385:(t,r,e)=>{var n=e(2743),o=e(5027),i=e(3550);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},5073:(t,r,e)=>{var n=e(3043),o=e(926);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},5899:(t,r,e)=>{var n=e(2615),o=e(9985),i=e(8999),a=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!i(u=n(e,t)))return u;if(o(e=t.valueOf)&&!i(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!i(u=n(e,t)))return u;throw new a("Can't convert object to primitive value")}},9152:(t,r,e)=>{var n=e(6058),o=e(8844),i=e(2741),a=e(7518),u=e(5027),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},496:(t,r,e)=>{var n=e(9037);t.exports=n},4684:(t,r,e)=>{var n=e(981),o=TypeError;t.exports=function(t){if(n(t))throw new o("Can't call method on "+t);return t}},2713:(t,r,e)=>{var n=e(3430),o=e(4630),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:(t,r,e)=>{var n=e(9037),o=e(5014),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},3430:(t,r,e)=>{var n=e(3931),o=e(4091);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.35.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"})},1435:(t,r,e)=>{var n=e(8844),o=e(4684),i=e(4327),a=e(6350),u=n("".replace),c=RegExp("^["+a+"]+"),s=RegExp("(^|[^"+a+"])["+a+"]+$"),f=function(t){return function(r){var e=i(o(r));return 1&t&&(e=u(e,c,"")),2&t&&(e=u(e,s,"$1")),e}};t.exports={start:f(1),end:f(2),trim:f(3)}},146:(t,r,e)=>{var n=e(3615),o=e(3689),i=e(9037).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},3648:(t,r,e)=>{var n=e(8844);t.exports=n(1..valueOf)},7578:(t,r,e)=>{var n=e(8700),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5290:(t,r,e)=>{var n=e(4413),o=e(4684);t.exports=function(t){return n(o(t))}},8700:(t,r,e)=>{var n=e(8828);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},3126:(t,r,e)=>{var n=e(8700),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},690:(t,r,e)=>{var n=e(4684),o=Object;t.exports=function(t){return o(n(t))}},8732:(t,r,e)=>{var n=e(2615),o=e(8999),i=e(734),a=e(4849),u=e(5899),c=e(4201),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=a(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw new s("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},8360:(t,r,e)=>{var n=e(8732),o=e(734);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},3043:(t,r,e)=>{var n={};n[e(4201)("toStringTag")]="z",t.exports="[object z]"===String(n)},4327:(t,r,e)=>{var n=e(926),o=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},3691:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},4630:(t,r,e)=>{var n=e(8844),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},9525:(t,r,e)=>{var n=e(146);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:(t,r,e)=>{var n=e(7697),o=e(3689);t.exports=n&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:(t,r,e)=>{var n=e(9037),o=e(9985),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:(t,r,e)=>{var n=e(9037),o=e(3430),i=e(6812),a=e(4630),u=e(146),c=e(9525),s=n.Symbol,f=o("wks"),p=c?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:p("Symbol."+t)),f[t]}},6350:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9288:(t,r,e)=>{var n=e(9989),o=e(3931),i=e(7697),a=e(9037),u=e(496),c=e(8844),s=e(5266),f=e(6812),p=e(3457),l=e(3622),v=e(734),y=e(8732),g=e(3689),h=e(2741).f,b=e(2474).f,d=e(2560).f,x=e(3648),m=e(1435).trim,S="Number",w=a[S],_=u[S],O=w.prototype,E=a.TypeError,L=c("".slice),j=c("".charCodeAt),T=function(t){var r,e,n,o,i,a,u,c,s=y(t,"number");if(v(s))throw new E("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=m(s),43===(r=j(s,0))||45===r){if(88===(e=j(s,2))||120===e)return NaN}else if(48===r){switch(j(s,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=L(s,2)).length,u=0;u<a;u++)if((c=j(i,u))<48||c>o)return NaN;return parseInt(i,n)}return+s},N=s(S,!w(" 0o1")||!w("0b1")||w("+0x1")),P=function(t){var r,e=arguments.length<1?0:w(function(t){var r=y(t,"number");return"bigint"==typeof r?r:T(r)}(t));return l(O,r=this)&&g((function(){x(r)}))?p(Object(e),this,P):e};P.prototype=O,N&&!o&&(O.constructor=P),n({global:!0,constructor:!0,wrap:!0,forced:N},{Number:P});var I=function(t,r){for(var e,n=i?h(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;n.length>o;o++)f(r,e=n[o])&&!f(t,e)&&d(t,e,b(r,e))};o&&_&&I(u[S],_),(N||o)&&I(u[S],w)},228:(t,r,e)=>{var n=e(3043),o=e(1880),i=e(5073);n||o(Object.prototype,"toString",i,{unsafe:!0})},7522:(t,r,e)=>{var n=e(9037),o=e(6338),i=e(3265),a=e(7612),u=e(5773),c=function(t){if(t&&t.forEach!==a)try{u(t,"forEach",a)}catch(r){t.forEach=a}};for(var s in o)o[s]&&c(n[s]&&n[s].prototype);c(i)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{e(228),e(7522),e(9288);var t,r=document.querySelectorAll(".counter__span"),n=document.querySelectorAll(".playing-field__box"),o=(document.querySelector(".playing-field__image"),document.querySelector(".popup")),i=document.querySelector(".popup__heading"),a=document.querySelector(".popup__button"),u=function(t){var r=(t.textContent+=1).split("").reduce((function(t,r){return Number(t)+Number(r)}),0);return t.textContent=r};a.addEventListener("click",(function(){o.classList.remove("popup_opened"),r[0].textContent=0,r[1].textContent=0})),t=document.querySelectorAll(".playing-field__box"),setInterval((function(){var r,e=(r=t)[Math.floor(Math.random()*r.length)];e.classList.contains("playing-field__image")||(t.forEach((function(t){t.classList.remove("playing-field__image"),t.classList.remove("playing-field__image_change_cursor")})),e.classList.add("playing-field__image"))}),1e3),n.forEach((function(t){t.addEventListener("click",(function(){t.classList.contains("playing-field__image")&&t.classList.add("playing-field__image_change_cursor")}))})),n.forEach((function(t){t.addEventListener("click",(function(){t.classList.contains("playing-field__image")?(u(r[0]),"5"===r[0].textContent&&(o.classList.add("popup_opened"),i.textContent="Победа")):(u(r[1]),"5"===r[1].textContent&&(o.classList.add("popup_opened"),i.textContent="Поражение"))}))}))})()})();
//# sourceMappingURL=main.js.map