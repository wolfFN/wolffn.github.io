"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5408],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5285:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],i={title:"\u5b89\u5168"},c=void 0,u={unversionedId:"general/security",id:"general/security",title:"\u5b89\u5168",description:"sql \u6ce8\u5165",source:"@site/docs/general/security.md",sourceDirName:"general",slug:"/general/security",permalink:"/docs/general/security",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b89\u5168"},sidebar:"General",previous:{title:"\u6027\u80fd",permalink:"/docs/general/performance"}},p={},s=[{value:"sql \u6ce8\u5165",id:"sql-\u6ce8\u5165",level:2},{value:"XSS",id:"xss",level:2},{value:"CSRF",id:"csrf",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sql-\u6ce8\u5165"},"sql \u6ce8\u5165"),(0,o.kt)("p",null,"\u6821\u9a8c\u8f93\u5165\uff0c\u4e0d\u62fc\u63a5 SQL",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0d\u7528 root\uff0c\u52a0\u5bc6/hash"),(0,o.kt)("h2",{id:"xss"},"XSS"),(0,o.kt)("p",null,"\u6076\u610f html/js\uff0c\u83b7\u53d6 cookie",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"<>;")," \u505a\u8fc7\u6ee4\uff0cencode",(0,o.kt)("br",{parentName:"p"}),"\n","cookie \u4e0d\u5305\u542b\u9690\u79c1",(0,o.kt)("br",{parentName:"p"}),"\n","cookie\u3001ip \u7ed1\u5b9a",(0,o.kt)("br",{parentName:"p"}),"\n","Set-Cookie\uff0cHttpOnly"),(0,o.kt)("p",null,"Cross-Site Scripting (XSS) \u662f\u4e00\u79cd\u6ce8\u5165\u7c7b\u653b\u51fb\uff0c\u5176\u624b\u6bb5\u662f\u5c06\u6076\u610f\u811a\u672c\u6ce8\u5165\u5230\u826f\u6027\u3001\u5065\u5eb7\u7684\u7f51\u7ad9\u4e2d\u3002\u901a\u5e38\u53d1\u751f\u5728\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u901a\u8fc7\u4e00\u4e2a\u4e0d\u53d7\u4fe1\u4efb\u7684\u6765\u6e90\uff08\u6700\u5e38\u89c1\u7684\u662f\u7f51\u7edc\u8bf7\u6c42\uff09\u8fdb\u5165\u7f51\u9875\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u88ab\u5305\u542b\u5728\u52a8\u6001\u5185\u5bb9\u4e2d\uff0c\u5728\u6ca1\u6709\u9a8c\u8bc1\u6076\u610f\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\u88ab\u53d1\u9001\u7ed9\u7f51\u7edc\u7528\u6237\u3002")),(0,o.kt)("p",null,"\u53d1\u9001\u7ed9\u7f51\u7edc\u6d4f\u89c8\u5668\u7684\u6076\u610f\u5185\u5bb9\u901a\u5e38\u4ee5 JavaScript \u7247\u6bb5\u7684\u5f62\u5f0f\u51fa\u73b0\uff0c\u4f46\u4e5f\u53ef\u80fd\u5305\u62ec HTML\u3001Flash \u6216\u6d4f\u89c8\u5668\u53ef\u80fd\u6267\u884c\u7684\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u7684\u4ee3\u7801\u3002\u7406\u8bba\u4e0a\uff0c\u57fa\u4e8e XSS \u7684\u653b\u51fb\u79cd\u7c7b\u51e0\u4e4e\u662f\u65e0\u9650\u7684\uff0c\u4f46\u901a\u5e38\u4e3a\u5411\u653b\u51fb\u8005\u4f20\u8f93\u79c1\u4eba\u6570\u636e\uff0c\u5982 cookie \u6216\u5176\u4ed6\u4f1a\u8bdd\u4fe1\u606f\uff0c\u5c06\u53d7\u5bb3\u8005\u91cd\u5b9a\u5411\u5230\u7531\u653b\u51fb\u8005\u63a7\u5236\u7684\u7f51\u9875\u5185\u5bb9\uff0c\u6216\u4ee5\u8106\u5f31\u7f51\u7ad9\u4e3a\u5e4c\u5b50\u5728\u7528\u6237\u7684\u673a\u5668\u4e0a\u6267\u884c\u5176\u4ed6\u6076\u610f\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"XSS \u7684\u4e3b\u8981\u5206\u7c7b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53cd\u5c04\u5f0f\uff0cReflected XSS Attacks",(0,o.kt)("br",{parentName:"p"}),"\n","\u5f53\u7528\u6237\u7684\u8f93\u5165\u88ab web \u7a0b\u5e8f\u7acb\u5373\u65f6\uff0c\uff08\u53ef\u80fd\u662f\u9519\u8bef\u4fe1\u606f\u3001\u641c\u7d22\u7ed3\u679c\u6216\u4efb\u4f55\u5176\u4ed6\u54cd\u5e94\uff09\uff0cserver \u8fd4\u56de\u7684\u5185\u5bb9\u5305\u542b\u8bf7\u6c42\u4e2d\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u6240\u63d0\u4f9b\u7684\u8f93\u5165\uff0c\u6d4f\u89c8\u5668\u52a0\u8f7d\u8fd9\u4e9b\u5371\u9669\u7684\u6570\u636e\u540e\uff0c\u5373\u906d\u5230\u653b\u51fb\u3002\u533a\u522b\u4e8e\u5b58\u50a8\u5f0f\uff0c\u6b64\u65f6\u670d\u52a1\u5668\u6ca1\u6709\u6c38\u4e45\u5730\u5b58\u50a8\u7528\u6237\u63d0\u4f9b\u7684\u6570\u636e\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u63d0\u4f9b\u7684\u6570\u636e\u751a\u81f3\u53ef\u80fd\u6c38\u8fdc\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\uff08\u89c1\u4e0b\u6587\u57fa\u4e8eDOM\u7684XSS\uff09\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b58\u50a8\u5f0f\uff0cStored XSS Attacks",(0,o.kt)("br",{parentName:"p"}),"\n","\u6307\u7528\u6237\u8f93\u5165\u88ab\u5b58\u50a8\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a\uff0c\u5982\u6570\u636e\u5e93\u3001\u4fe1\u606f\u8bba\u575b\u3001\u8bbf\u95ee\u8005\u65e5\u5fd7\u3001\u8bc4\u8bba\u680f\u7b49\u3002\u7136\u540e\uff0c\u53d7\u5bb3\u8005\u52a0\u8f7d\u8fd9\u4e9b\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4ece\u800c\u906d\u5230\u5176\u653b\u51fb\u3002\u6b64\u5916\uff0c\u968f\u7740 HTML5 \u548c\u5176\u4ed6\u6d4f\u89c8\u5668\u6280\u672f\u7684\u51fa\u73b0\uff0c\u5371\u9669\u7684\u6570\u636e\u53ef\u4ee5\u6c38\u4e45\u5730\u5b58\u50a8\u6d4f\u89c8\u5668\u4e2d\uff0c\u5982 HTML5 \u6570\u636e\u5e93\uff0c\u6839\u672c\u4e0d\u4f1a\u88ab\u53d1\u9001\u5230\u670d\u52a1\u5668\u4e0a\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u57fa\u4e8eDOM\u7684XSS\uff0cDOM Based XSS\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u8fd9\u79cd\u7c7b\u578b\u4e0d\u5982\u524d\u4e24\u8005\u77e5\u540d\uff0c\u6307\u6574\u4e2a\u6570\u636e\u6d41\u90fd\u53d1\u751f\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u5373\u6570\u636e\u6e90\u5728 DOM \u4e2d\uff0c\u76ee\u7684\u5730\u4e5f\u5728 DOM \u4e2d\uff0c\u4ece\u672a\u79bb\u5f00\u6d4f\u89c8\u5668\u3002\u4f8b\u5982\uff0c\u6e90\uff08\u6076\u610f\u6570\u636e\u88ab\u8bfb\u53d6\u7684\u5730\u65b9\uff09\u53ef\u4ee5\u662f\u9875\u9762\u7684URL\uff08\u5982document.location.href\uff09\uff0c\u4e5f\u53ef\u4ee5\u662fHTML\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u800c\u76ee\u7684\u5730\u662f\u5bfc\u81f4\u6267\u884c\u6076\u610f\u6570\u636e\u7684\u654f\u611f\u65b9\u6cd5\u8c03\u7528\uff08\u5982document.write\uff09\u3002"))),(0,o.kt)("h2",{id:"csrf"},"CSRF"))}m.isMDXComponent=!0}}]);