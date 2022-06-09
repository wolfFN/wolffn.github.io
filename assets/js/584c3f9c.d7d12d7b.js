"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[348],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8897:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"Basic"},c=void 0,p={unversionedId:"css/basic",id:"css/basic",isDocsHomePage:!1,title:"Basic",description:"TODO",source:"@site/docs/css/basic.md",sourceDirName:"css",slug:"/css/basic",permalink:"/docs/css/basic",tags:[],version:"current",frontMatter:{title:"Basic"},sidebar:"CSS",next:{title:"\u5e7d\u7075\u7a7a\u767d\ud83d\udc7b",permalink:"/docs/css/blank"}},s=[{value:"TODO",id:"todo",children:[],level:2},{value:"Flex",id:"flex",children:[{value:"container\u5c5e\u6027",id:"container\u5c5e\u6027",children:[],level:4},{value:"item\u5c5e\u6027",id:"item\u5c5e\u6027",children:[],level:4}],level:2},{value:"\u9875\u9762\u53ef\u89c1\u6027",id:"\u9875\u9762\u53ef\u89c1\u6027",children:[],level:2},{value:"import link",id:"import-link",children:[],level:2},{value:"Javascript Style",id:"javascript-style",children:[],level:2},{value:"Viewport",id:"viewport",children:[],level:2},{value:"Element.getBoundingClientRect()",id:"elementgetboundingclientrect",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zxpsuper.github.io/Demo/advanced_front_end/css/cssTips.html"},"css\u5c0f\u6280\u5de7")),(0,a.kt)("h2",{id:"flex"},"Flex"),(0,a.kt)("p",null,"main-axis",(0,a.kt)("br",{parentName:"p"}),"\n","cross-axis"),(0,a.kt)("h4",{id:"container\u5c5e\u6027"},"container\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"flex-direction: row, row-reverse, column, column-reverse;\nflex-wrap: nowrap, wrap, wrap-reverse;\nflex-flow: [direction]||wrap;\njustify-content: flex-start/end, center, space-between/around;\nalign-items: baseline, stretch;\nalign-content: \u591a\u6839\u8f74\u7ebf\u5bf9\u9f50\u65b9\u5f0f\n")),(0,a.kt)("h4",{id:"item\u5c5e\u6027"},"item\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"order: \u6392\u5217\u987a\u5e8f\nflex-grow: \u653e\u5927\u6bd4\u4f8b\nflex-shrink\uff1a\u7f29\u5c0f\u6bd4\u4f8b\nflex-basis\uff1a\u5206\u914d\u524d\u5360\u636emain axis\u7a7a\u95f4 auto\nflex: auto/none\nalign-self: auto\uff0c\u7ee7\u627f\u7236\u7ea7align-item\n\u82e5\u7236\u7ea7\u65e0align-item\uff0c\u5219\u4e3astretch\n")),(0,a.kt)("h2",{id:"\u9875\u9762\u53ef\u89c1\u6027"},"\u9875\u9762\u53ef\u89c1\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"document.visibilityState\n")),(0,a.kt)("p",null,"\u53ef\u80fd\u7684\u503c\uff1ahidden, visible, prerender, preview",(0,a.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u7528\u4e8e\u63a7\u5236\u89c6\u9891\u3001\u97f3\u9891\u81ea\u52a8\u64ad\u653e\u3002"),(0,a.kt)("h2",{id:"import-link"},"import link"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u5f15\u7528\u5b83\u7684CSS\u52a0\u8f7d\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u52a0\u8f7d\uff0c\u6743\u91cd\u4f4e\u4e8elink"),(0,a.kt)("h2",{id:"javascript-style"},"Javascript Style"),(0,a.kt)("p",null,"\u65e0\u6cd5\u8bfb\u53d6\u6837\u5f0f\u8868\u4e2d\u7684\u6837\u5f0f"),(0,a.kt)("h2",{id:"viewport"},"Viewport"),(0,a.kt)("p",null,"\u624b\u673a\u6d4f\u89c8\u5668\u7a97\u53e3",(0,a.kt)("br",{parentName:"p"}),"\n","width/height",(0,a.kt)("br",{parentName:"p"}),"\n","device-width",(0,a.kt)("br",{parentName:"p"}),"\n","initial-scale \u521d\u59cb\u7f29\u653e\u6bd4\u4f8b",(0,a.kt)("br",{parentName:"p"}),"\n","maximum/minimum-scale",(0,a.kt)("br",{parentName:"p"}),"\n","user-scalable",(0,a.kt)("br",{parentName:"p"}),"\n","clientWidth/Height\uff0c content+padding",(0,a.kt)("br",{parentName:"p"}),"\n","offsetTop/Left\uff0c\u8ddd\u79bb\u7236\u5bb9\u5668\u5de6\u4e0a\u89d2",(0,a.kt)("br",{parentName:"p"}),"\n","scrollTop/Left\uff0c\u6eda\u52a8\u8fc7\u5f97\u3002"),(0,a.kt)("h2",{id:"elementgetboundingclientrect"},"Element.getBoundingClientRect()"),(0,a.kt)("p",null,"\u65b9\u6cd5\u8fd4\u56de\u5143\u7d20\u7684\u5927\u5c0f\u53ca\u5176\u76f8\u5bf9\u4e8e\u89c6\u53e3\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Element.getBoundingClientRect().left/right/top/bottom",(0,a.kt)("br",{parentName:"p"}),"\n","\u5de6\u4e0a/\u53f3\u4e0b\u4e0eviewport\u7684\u8ddd\u79bb"))}d.isMDXComponent=!0}}]);