"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"Bellman-Ford"},c=void 0,u={unversionedId:"algorithm/graphs/bellman-ford",id:"algorithm/graphs/bellman-ford",title:"Bellman-Ford",description:"\u8d1d\u5c14\u66fc-\u798f\u7279\u7b97\u6cd5\uff0c\u7528\u4ee5\u6c42\u89e3\u56fe\u6700\u77ed\u8def\u5f84\u95ee\u9898\u3002",source:"@site/docs/algorithm/graphs/bellman-ford.md",sourceDirName:"algorithm/graphs",slug:"/algorithm/graphs/bellman-ford",permalink:"/docs/algorithm/graphs/bellman-ford",draft:!1,tags:[],version:"current",frontMatter:{title:"Bellman-Ford"},sidebar:"algorithm",previous:{title:"\u5e76\u67e5\u96c6",permalink:"/docs/algorithm/graphs/union-find"},next:{title:"Dijkstra",permalink:"/docs/algorithm/graphs/dijkstra"}},s={},p=[{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8d1d\u5c14\u66fc-\u798f\u7279\u7b97\u6cd5\uff0c\u7528\u4ee5\u6c42\u89e3\u56fe\u6700\u77ed\u8def\u5f84\u95ee\u9898\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316 costs\uff0c\u8d77\u59cb\u70b9 0\uff0c\u5176\u4f59\u65e0\u7a77\u5927\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u6761\u8fb9\uff0c\u6839\u636e\u8fb9\u7684\u6743\u91cd\uff0c\u548c\u4e24\u7aef\u8282\u70b9\u7684 cost\uff0c\u5206\u522b\uff08\u65e0\u5411\u56fe\uff09\u8ba1\u7b97\u65b0\u7684 cost\uff0c\u5982\u679c\u53d8\u5c0f\uff0c\u5219\u66f4\u65b0\uff0c\u540c\u65f6\u8bb0\u5f55\u65b0 cost \u7684\u524d\u4e00\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u6240\u6709\u8282\u70b9\u6267\u884c\u4e0a\u8ff0\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u590d 2\uff0c3 \u6b65\u9aa4\uff0c \u76f4\u81f3\u4e0d\u518d\u66f4\u65b0\u3002\u6700\u591a\u4e3a N - 1 \u6b21\uff0cN \u4e3a\u8282\u70b9\u603b\u6570\u3002")),(0,a.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/network-delay-time/"},"Leetcode 743. Network Delay Time"),"\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[][]} times\n * @param {number} N\n * @param {number} K\n * @return {number}\n */\nvar networkDelayTime = function (times, N, K) {\n    const costs = Array(N + 1).fill(Infinity);\n    costs[0] = 0;\n    costs[K] = 0;\n\n    let updated = true;\n    while (N-- && updated) {\n        updated = false;\n        for (const [u, v, w] of times) {\n            if (costs[u] === Infinity) {\n                continue;\n            }\n            if (costs[u] + w < costs[v]) {\n                costs[v] = costs[u] + w;\n                updated = true;\n            }\n        }\n    }\n\n    const max = Math.max(...costs);\n    return max === Infinity ? -1 : max;\n};\n")))}f.isMDXComponent=!0}}]);