"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5218],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54952:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"TRICKS"},s=void 0,l={unversionedId:"css/snippets/tricks",id:"css/snippets/tricks",title:"TRICKS",description:"\u68c0\u6d4b\u662f\u5426\u652f\u6301\u67d0\u4e2a\u6837\u5f0f\u5c5e\u6027",source:"@site/docs/css/snippets/tricks.md",sourceDirName:"css/snippets",slug:"/css/snippets/tricks",permalink:"/docs/css/snippets/tricks",draft:!1,tags:[],version:"current",frontMatter:{title:"TRICKS"},sidebar:"CSS",previous:{title:"Animation",permalink:"/docs/css/animation"}},p={},u=[{value:"\u68c0\u6d4b\u662f\u5426\u652f\u6301\u67d0\u4e2a\u6837\u5f0f\u5c5e\u6027",id:"\u68c0\u6d4b\u662f\u5426\u652f\u6301\u67d0\u4e2a\u6837\u5f0f\u5c5e\u6027",level:2},{value:"\u6587\u5b57\u6298\u7ebf",id:"\u6587\u5b57\u6298\u7ebf",level:2},{value:"\u804a\u5929\u8fb9\u6846\u5c0f\u4e09\u89d2",id:"\u804a\u5929\u8fb9\u6846\u5c0f\u4e09\u89d2",level:2}],d={toc:u},f="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u68c0\u6d4b\u662f\u5426\u652f\u6301\u67d0\u4e2a\u6837\u5f0f\u5c5e\u6027"},"\u68c0\u6d4b\u662f\u5426\u652f\u6301\u67d0\u4e2a\u6837\u5f0f\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const root = document.documentElement;\nif ('text-shadow' in root.style) {\n    // add style\n}\n")),(0,i.kt)("h2",{id:"\u6587\u5b57\u6298\u7ebf"},"\u6587\u5b57\u6298\u7ebf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/*\n * \u7701\u7565\u6587\u5b57...\n */\n.ellipsis(@w:auto) {\n    width: @w;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-wrap: normal;\n}\n\n/*\n * \u663e\u793aline\u884c\u6587\u5b57,\u540e\u9762...\u9690\u85cf\n */\n.ellipsisLn(@line) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: @line;\n}\n")),(0,i.kt)("h2",{id:"\u804a\u5929\u8fb9\u6846\u5c0f\u4e09\u89d2"},"\u804a\u5929\u8fb9\u6846\u5c0f\u4e09\u89d2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    margin: 0;\n}\n.container {\n    position: relative;\n    width: 200px;\n    height: 50px;\n    margin-top: 10px;\n    background-color: red;\n}\n.container:before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    border-bottom-color: red;\n    top: -20px;\n    left: 20px;\n}\n")))}m.isMDXComponent=!0}}]);