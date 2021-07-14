(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(197)),c={title:"\u89e3\u6784\u8d4b\u503c"},i={unversionedId:"javascript/destruct",id:"javascript/destruct",isDocsHomePage:!1,title:"\u89e3\u6784\u8d4b\u503c",description:"\u89e3\u6784\u8d4b\u503c(destructuring assignment)\u5e38\u88ab\u51fd\u6570\u7528\u6765\u89e3\u6790\u4f20\u5165\u7684\u53c2\u6570\uff0cReact \u4e2d\u7ecf\u5e38\u5e94\u7528\u3002",source:"@site/docs/javascript/destruct.md",slug:"/javascript/destruct",permalink:"/docs/javascript/destruct",version:"current",sidebar:"JavaScript",previous:{title:"Object",permalink:"/docs/javascript/object"},next:{title:"event-loop",permalink:"/docs/javascript/event-loop"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u89e3\u6784\u8d4b\u503c(destructuring assignment)\u5e38\u88ab\u51fd\u6570\u7528\u6765\u89e3\u6790\u4f20\u5165\u7684\u53c2\u6570\uff0cReact \u4e2d\u7ecf\u5e38\u5e94\u7528\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const person = {\n    name: 'Theo',\n    age: 24,\n};\nfunction introduce({ name, age }) {\n    console.log(`I'm ${name}, and I'm ${age} years old!`);\n}\nintroduce(person);\n// I'm Theo, and I'm 24 years old!\n")))}s.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);