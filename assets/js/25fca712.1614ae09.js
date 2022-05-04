"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1829],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||p;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6741:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),p=(t(7294),t(3905)),o=["components"],l={title:"Nx"},c=void 0,i={unversionedId:"library/nx",id:"library/nx",isDocsHomePage:!1,title:"Nx",description:"\u521b\u5efa monorepo",source:"@site/docs/library/nx.md",sourceDirName:"library",slug:"/library/nx",permalink:"/docs/library/nx",tags:[],version:"current",frontMatter:{title:"Nx"},sidebar:"Library",next:{title:"Node",permalink:"/docs/library/node"}},s=[{value:"\u521b\u5efa monorepo",id:"\u521b\u5efa-monorepo",children:[{value:"\u6dfb\u52a0 nest app",id:"\u6dfb\u52a0-nest-app",children:[],level:3},{value:"\u6dfb\u52a0\u4e00\u4e2a ts app",id:"\u6dfb\u52a0\u4e00\u4e2a-ts-app",children:[],level:3},{value:"\u5220\u9664\u4e00\u4e2a app",id:"\u5220\u9664\u4e00\u4e2a-app",children:[],level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[],level:3}],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u521b\u5efa-monorepo"},"\u521b\u5efa monorepo"),(0,p.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," \u4f5c\u4e3a\u9884\u8bbe\u3002\u4f1a\u9ed8\u8ba4\u751f\u6210\u4e00\u4e2a\u57fa\u4e8e react \u7684 app.",(0,p.kt)("br",{parentName:"p"}),"\n","preset \u8fd8\u53ef\u4ee5\u4e3a core, ts, react-native, next, nest, etc."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-nx-workspace --preset=react\n")),(0,p.kt)("h3",{id:"\u6dfb\u52a0-nest-app"},"\u6dfb\u52a0 nest app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5 nest plugin\nnpm install -D @nrwl/nest\n\n# \u5728\u5f53\u524d monorepo \u4e2d\u6dfb\u52a0\u4e00\u4e2a nest app\nnx g @nrwl/nest:app [my-nest-app]\n")),(0,p.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a-ts-app"},"\u6dfb\u52a0\u4e00\u4e2a ts app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @nrwl/node:app [my-ts-app]\n")),(0,p.kt)("h3",{id:"\u5220\u9664\u4e00\u4e2a-app"},"\u5220\u9664\u4e00\u4e2a app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate remove [app-name]\n# same\nnx g rm [app-name]\n\n")),(0,p.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u8fd0\u884c\u547d\u4ee4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"nx serve [app-name]"),"\u3002\u4e5f\u53ef\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  ...\n  "my-web:start": "nx serve my-web",\n  "my-nest-app:start": "nx serve my-nest-app",\n  "my-ts-app:start": "nx serve my-ts-app"\n}\n')))}m.isMDXComponent=!0}}]);