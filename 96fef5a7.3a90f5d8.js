(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(210)),c={title:"npm"},i={unversionedId:"tools/shell/npm",id:"tools/shell/npm",isDocsHomePage:!1,title:"npm",description:"nvm \u4f7f\u7528\u963f\u91cc\u955c\u50cf",source:"@site/docs/tools/shell/npm.md",slug:"/tools/shell/npm",permalink:"/docs/tools/shell/npm",version:"current",sidebar:"tools",previous:{title:"uniq",permalink:"/docs/tools/shell/uniq"},next:{title:"\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/docs/tools/mac/system"}},p=[{value:"nvm \u4f7f\u7528\u963f\u91cc\u955c\u50cf",id:"nvm-\u4f7f\u7528\u963f\u91cc\u955c\u50cf",children:[]},{value:"npm\u4f7f\u7528\u963f\u91cc\u6e90",id:"npm\u4f7f\u7528\u963f\u91cc\u6e90",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"nvm-\u4f7f\u7528\u963f\u91cc\u955c\u50cf"},"nvm \u4f7f\u7528\u963f\u91cc\u955c\u50cf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node\n")),Object(a.b)("h3",{id:"npm\u4f7f\u7528\u963f\u91cc\u6e90"},"npm\u4f7f\u7528",Object(a.b)("a",{parentName:"h3",href:"https://npm.taobao.org/"},"\u963f\u91cc\u6e90")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm i [package-name] --registry=https://registry.npm.taobao.org\n")))}s.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);