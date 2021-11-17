"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5408],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5285:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"\u5b89\u5168"},l=void 0,u={unversionedId:"general/security",id:"general/security",isDocsHomePage:!1,title:"\u5b89\u5168",description:"sql \u6ce8\u5165",source:"@site/docs/general/security.md",sourceDirName:"general",slug:"/general/security",permalink:"/docs/general/security",tags:[],version:"current",frontMatter:{title:"\u5b89\u5168"},sidebar:"General",previous:{title:"\u6027\u80fd",permalink:"/docs/general/performance"}},p=[{value:"sql \u6ce8\u5165",id:"sql-\u6ce8\u5165",children:[],level:2},{value:"XSS",id:"xss",children:[],level:2},{value:"CSRF",id:"csrf",children:[],level:2}],s={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sql-\u6ce8\u5165"},"sql \u6ce8\u5165"),(0,a.kt)("p",null,"\u6821\u9a8c\u8f93\u5165\uff0c\u4e0d\u62fc\u63a5 SQL",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0d\u7528 root\uff0c\u52a0\u5bc6/hash"),(0,a.kt)("h2",{id:"xss"},"XSS"),(0,a.kt)("p",null,"\u6076\u610f html/js\uff0c\u83b7\u53d6 cookie",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<>;")," \u505a\u8fc7\u6ee4\uff0cencode",(0,a.kt)("br",{parentName:"p"}),"\n","cookie \u4e0d\u5305\u542b\u9690\u79c1",(0,a.kt)("br",{parentName:"p"}),"\n","cookie\u3001ip \u7ed1\u5b9a",(0,a.kt)("br",{parentName:"p"}),"\n","Set-Cookie\uff0cHttpOnly"),(0,a.kt)("h2",{id:"csrf"},"CSRF"))}f.isMDXComponent=!0}}]);