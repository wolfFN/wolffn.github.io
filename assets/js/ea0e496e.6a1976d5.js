"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[3310],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],l={title:"Object"},i="\u7ee7\u627f inherit",p={unversionedId:"javascript/object",id:"javascript/object",title:"Object",description:"\u539f\u578b\u7ee7\u627f\u673a\u5236\u3002",source:"@site/docs/javascript/object.md",sourceDirName:"javascript",slug:"/javascript/object",permalink:"/docs/javascript/object",draft:!1,tags:[],version:"current",frontMatter:{title:"Object"},sidebar:"JavaScript",previous:{title:"Array",permalink:"/docs/javascript/array"},next:{title:"\u89e3\u6784\u8d4b\u503c",permalink:"/docs/javascript/destruct"}},s={},u=[{value:"Object \u7684\u4e09\u4e2a\u5c5e\u6027",id:"object-\u7684\u4e09\u4e2a\u5c5e\u6027",level:3},{value:"prototype",id:"prototype",level:5},{value:"\u7c7b\u5c5e\u6027",id:"\u7c7b\u5c5e\u6027",level:5},{value:"\u53ef\u6269\u5c55\u6027",id:"\u53ef\u6269\u5c55\u6027",level:5},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:3},{value:"Example",id:"example",level:3},{value:"TODO ES6 Class",id:"todo-es6-class",level:3}],f={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ee7\u627f-inherit"},"\u7ee7\u627f inherit"),(0,a.kt)("p",null,"\u539f\u578b\u7ee7\u627f\u673a\u5236\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6784\u9020\u51fd\u6570\uff1a\u4efb\u610fJavascript\u51fd\u6570\uff0c\u81ea\u52a8\u62e5\u6709prototype\u3002\u539f\u578b\u5bf9\u8c61\u662f\u7c7b\u7684\u552f\u4e00\u6807\u8bc6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function F(params) {\n    console.log(params);\n}\nvar o = new F();\nconsole.log(o.constructor === F);\n// true\nconsole.log(o instanceof F);\n// true\nconsole.log(F.prototype.isPrototypeOf(o));\n// true\nconsole.log(o.constructor);\n// [Function: F]\nconsole.log(Object.getPrototypeOf(o));\n// F {}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"\u672c\u8d28\u4e0a\u662f key-value \u5bf9\uff0c\u4ece\u539f\u578b\u5bf9\u8c61\u7ee7\u627f\u5c5e\u6027(inherited property)\u3002\n\u5176\u4e2d\uff0ckey \u53ef\u5199\u3001\u53ef\u679a\u4e3e\u3001\u53ef\u914d\u7f6e\uff08constructor\u9664\u5916\uff09\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"prototype"),"\uff0c\u7528\u6765\u7ed9\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"instanceof()"),"\uff0c\u4e0d\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"F"),"\u521d\u59cb\u5316\u800c\u6765\uff0c\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u7ee7\u627f\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"F.prototype"),"\u3002"),(0,a.kt)("h3",{id:"object-\u7684\u4e09\u4e2a\u5c5e\u6027"},"Object \u7684\u4e09\u4e2a\u5c5e\u6027"),(0,a.kt)("h5",{id:"prototype"},"prototype"),(0,a.kt)("p",null,"Object\u5171\u6709\u4e09\u79cd\u521b\u5efa\u65b9\u5f0f\uff0c\u5bf9\u5e94\u7684prototype\u5206\u522b\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u91cf\uff0cObject.prototype"),(0,a.kt)("li",{parentName:"ol"},"new Object()\uff0c\u6784\u9020\u51fd\u6570\u7684prototype"),(0,a.kt)("li",{parentName:"ol"},"Object.create()\uff0c\u6784\u9020\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var o = {};\nconsole.log(Object.getPrototypeOf(o) == Object.prototype);\n// true\no = new F();\nconsole.log(Object.getPrototypeOf(o) == F.prototype);\n// true\no = Object.create(F);\nconsole.log(Object.getPrototypeOf(o) == F);\n// true\n")),(0,a.kt)("h5",{id:"\u7c7b\u5c5e\u6027"},"\u7c7b\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toString()")),(0,a.kt)("h5",{id:"\u53ef\u6269\u5c55\u6027"},"\u53ef\u6269\u5c55\u6027"),(0,a.kt)("p",null,"\u6240\u6709\u5185\u7f6e\u5bf9\u8c61\uff0c\u4ee5\u53ca\u81ea\u5b9a\u4e49\u5bf9\u8c61\uff0c\u5747\u53ef\u6269\u5c55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.isExtensible()    preventExtensions()\nObject.isSealed()    seal()\nObject.isFrozen()    freeze()\n// \u5e8f\u5217\u5316\nJSON.stringify()    parse()\n")),(0,a.kt)("h3",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Object.key"),(0,a.kt)("li",{parentName:"ol"},"Object",'["key"]')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function Range(from, to) {\n    this.from = from;\n    this.to = to;\n}\n\nRange.prototype = {\n    includes: function(x) {\n        return this.from <= x && x <= this.to;\n    },\n    foreach: function (callback) {\n        for (var x = Math.ceil(this.from); x <= this.to; x++) {\n            callback(x);\n        }\n    },\n    toString: function() {\n        return "(" + this.from + " " + this.to + ")"\n    }\n}\n\nvar r = new Range(1, 6);\nconsole.log(r.includes(2));\n// true\nr.foreach(console.log);\n// 1, 2, 3, 4, 5, 6\nconsole.log(r.toString());\n// (1, 6)\n')),(0,a.kt)("h3",{id:"todo-es6-class"},"TODO ES6 Class"))}d.isMDXComponent=!0}}]);