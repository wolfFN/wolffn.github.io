(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(197)),c={title:"JS \u52a8\u753b"},i={unversionedId:"javascript/snippets/animation",id:"javascript/snippets/animation",isDocsHomePage:!1,title:"JS \u52a8\u753b",description:"JS \u52a8\u753b",source:"@site/docs/javascript/snippets/animation.md",slug:"/javascript/snippets/animation",permalink:"/docs/javascript/snippets/animation",version:"current",sidebar:"JavaScript",previous:{title:"\u5b9e\u7528\u51fd\u6570",permalink:"/docs/javascript/snippets/functions"}},p=[{value:"JS \u52a8\u753b",id:"js-\u52a8\u753b",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"js-\u52a8\u753b"},"JS \u52a8\u753b"),Object(o.b)("p",null,"\u9996\u5148\u63a8\u8350\u4e00\u4e2a\u5f3a\u5927\u7684\u52a8\u753b\u5e93\uff1a",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://animejs.com/documentation/"}),"Anime.js"),"\u3002\u901a\u8fc7\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"Anime.js"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u5927\u90e8\u5206\u5e38\u89c1\u52a8\u753b\u6548\u679c\u3002"),Object(o.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5c06",Object(o.b)("inlineCode",{parentName:"p"},"current"),"\u79fb\u52a8\u5230",Object(o.b)("inlineCode",{parentName:"p"},"target"),"\uff0c\u5e76\u6709\u4e00\u5b9a\u52a8\u753b\u6548\u679c\u7684\u4f8b\u5b50\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const currentX = parseInt(document.getElementById('current').style.left, 10);\nconst currentY = parseInt(document.getElementById('current').style.top, 10);\nconst targetX = parseInt(document.getElementById('target').style.left, 10);\nconst targetY = parseInt(document.getElementById('target').style.top, 10);\nanime({\n    targets: target,\n    translateX: [{ value: targetX - currentX, duration: 1200 }],\n    translateY: [{ value: targetY - currentY, duration: 1200 }],\n    direction: 'alternate',\n    rotate: '0.2turn',\n    scale: {\n        value: 2,\n    },\n    // backgroundColor: '#FFF',\n    duration: 1200,\n    complete: () => {\n        this.energy -= 100;\n        this.minusEnergy();\n    },\n});\n")))}u.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);