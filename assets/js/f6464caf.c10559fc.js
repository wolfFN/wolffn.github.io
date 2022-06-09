"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[4977],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return h}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=c(n),h=l,m=g["".concat(s,".").concat(h)]||g[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},i),{},{components:n})):r.createElement(m,a({ref:t},i))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return g}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],p={title:"Proxy"},s=void 0,c={unversionedId:"tools/shell/proxy",id:"tools/shell/proxy",isDocsHomePage:!1,title:"Proxy",description:"Terminal",source:"@site/docs/tools/shell/proxy.md",sourceDirName:"tools/shell",slug:"/tools/shell/proxy",permalink:"/docs/tools/shell/proxy",tags:[],version:"current",frontMatter:{title:"Proxy"},sidebar:"tools",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/tools/shell/commands"},next:{title:"npm && yarn",permalink:"/docs/tools/shell/npm"}},i=[{value:"Terminal",id:"terminal",children:[],level:2},{value:"Git",id:"git",children:[],level:2},{value:"Yarn",id:"yarn",children:[],level:2},{value:"NPM",id:"npm",children:[],level:2}],u={toc:i};function g(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"terminal"},"Terminal"),(0,o.kt)("p",null,"Clash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890\n")),(0,o.kt)("p",null,"Shadowsocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export https_proxy=http://127.0.0.1:1087 http_proxy=http://127.0.0.1:1087\n")),(0,o.kt)("p",null,"\u67e5\u770b\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo $http_proxy $https_proxy $all_proxy\n")),(0,o.kt)("p",null,"\u53d6\u6d88\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unset http_proxy https_proxy all_proxy\n")),(0,o.kt)("h2",{id:"git"},"Git"),(0,o.kt)("p",null,"Clash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global http.proxy http://127.0.0.1:7890 \ngit config --global https.proxy https://127.0.0.1:7890\n")),(0,o.kt)("p",null,"Shadowsocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global http.proxy http://127.0.0.1:1087 \ngit config --global https.proxy https://127.0.0.1:1087\n")),(0,o.kt)("p",null,"\u67e5\u770b\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global  --get http.proxy\ngit config --global  --get https.proxy\n\nvi ~/.gitrc\n")),(0,o.kt)("p",null,"\u53d6\u6d88\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global --unset http.proxy\ngit config --global --unset https.proxy\n")),(0,o.kt)("h2",{id:"yarn"},"Yarn"),(0,o.kt)("p",null,"Clash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn config set proxy http://127.0.0.1:7890\nyarn config set https-proxy http://127.0.0.1:7890\n")),(0,o.kt)("p",null,"Shadowsocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn config set proxy http://127.0.0.1:1087\nyarn config set https-proxy http://127.0.0.1:1087\n")),(0,o.kt)("p",null,"\u67e5\u770b\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn config list\n\nvi ~/.yarnrc\n")),(0,o.kt)("p",null,"\u53d6\u6d88\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn config delete proxy\nyarn config delete https-proxy\n")),(0,o.kt)("h2",{id:"npm"},"NPM"),(0,o.kt)("p",null,"Clash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set proxy http://127.0.0.1:7890\nnpm config set https-proxy http://127.0.0.1:7890\n")),(0,o.kt)("p",null,"Shadowsocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set proxy http://127.0.0.1:1087\nnpm config set https-proxy http://127.0.0.1:1087\n")),(0,o.kt)("p",null,"\u67e5\u770b\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm config list\n\nvi ~/.npmrc\n")),(0,o.kt)("p",null,"\u53d6\u6d88\u4ee3\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm config delete proxy\nnpm config delete https-proxy\n")))}g.isMDXComponent=!0}}]);