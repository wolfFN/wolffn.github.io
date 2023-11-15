"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[613],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89260:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],u={title:"Update"},i=void 0,l={unversionedId:"data/db/update",id:"data/db/update",title:"Update",description:"Update",source:"@site/docs/data/db/update.md",sourceDirName:"data/db",slug:"/data/db/update",permalink:"/docs/data/db/update",draft:!1,tags:[],version:"current",frontMatter:{title:"Update"},sidebar:"Database",previous:{title:"Select",permalink:"/docs/data/db/select"},next:{title:"Delete",permalink:"/docs/data/db/delete"}},p={},s=[{value:"Update",id:"update",level:2}],d={toc:s},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE [table name] SET [column name]=[value] WHERE [condition];\n\n-- \u6dfb\u52a0\u65b0\u5217\nALTER TABLE sales ADD remark VARCHAR(100);\n\n-- \u5982\u679c\u6ca1\u6709 where\uff0c\u4f1a\u6709\u8b66\u544a\nUPDATE sales SET remark='\u65e0\u7279\u6b8a\u8bb0\u5f55';\n-- \u5927\u4e8e 100 \u5206\u7684\u8bbe\u7f6e\u4e3a\u4f18\u79c0\nUPDATE sales SET remark='\u4f18\u79c0' WHERE sales>=100;\n-- \u6700\u540e\u4e09\u540d\uff0c\u8bbe\u7f6e\u4e3a\u52a0\u6cb9\nUPDATE sales SET remark='\u52a0\u6cb9' ORDER BY sales LIMIT 3;\n\n-- \u79fb\u9664\u5217 remark\nALTER TABLE sales DROP remark;\n")))}m.isMDXComponent=!0}}]);