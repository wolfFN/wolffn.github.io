"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[8628],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28984:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},u="Sequelize",c={unversionedId:"library/sequelize",id:"library/sequelize",title:"Sequelize",description:"Nested eager loading",source:"@site/docs/library/sequelize.md",sourceDirName:"library",slug:"/library/sequelize",permalink:"/docs/library/sequelize",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Library",previous:{title:"Hapi",permalink:"/docs/library/hapi"},next:{title:"Basic",permalink:"/docs/library/react/basic"}},s={},p=[{value:"Nested eager loading",id:"nested-eager-loading",level:2},{value:"Refenences",id:"refenences",level:2}],f={toc:p},d="wrapper";function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sequelize"},"Sequelize"),(0,o.kt)("h2",{id:"nested-eager-loading"},"Nested eager loading"),(0,o.kt)("p",null,"sequelize eager loading \u65f6\uff0c\u4f20\u5165 where \u4f1a\u53d8\u6210 Inner join\uff0c\u6b64\u65f6\u4f20\u5165 require: false \uff0c\u4f1a\u53d8\u6210 left join \u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-usage.html"},"https://sequelize.org/v5/manual/models-usage.html")),(0,o.kt)("h2",{id:"refenences"},"Refenences"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000003987871"},"MySQL vs Sequelize")))}m.isMDXComponent=!0}}]);