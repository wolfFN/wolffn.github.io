(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{158:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),i=(t(0),t(197)),o={},c={unversionedId:"library/sequelize",id:"library/sequelize",isDocsHomePage:!1,title:"sequelize",description:"Sequelize",source:"@site/docs/library/sequelize.md",slug:"/library/sequelize",permalink:"/docs/library/sequelize",version:"current",sidebar:"Library",previous:{title:"Hapi",permalink:"/docs/library/hapi"},next:{title:"Basic",permalink:"/docs/library/react/basic"}},l=[{value:"Nested eager loading",id:"nested-eager-loading",children:[]},{value:"Refenences",id:"refenences",children:[]}],u={rightToc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sequelize"},"Sequelize"),Object(i.b)("h2",{id:"nested-eager-loading"},"Nested eager loading"),Object(i.b)("p",null,"sequelize eager loading \u65f6\uff0c\u4f20\u5165 where \u4f1a\u53d8\u6210 Inner join\uff0c\u6b64\u65f6\u4f20\u5165 require: false \uff0c\u4f1a\u53d8\u6210 left join \u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u53c2\u8003\uff1a",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sequelize.org/v5/manual/models-usage.html"}),"https://sequelize.org/v5/manual/models-usage.html")),Object(i.b)("h2",{id:"refenences"},"Refenences"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000003987871"}),"MySQL vs Sequelize")))}s.isMDXComponent=!0},197:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return t?a.a.createElement(d,c(c({ref:r},u),{},{components:t})):a.a.createElement(d,c({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);