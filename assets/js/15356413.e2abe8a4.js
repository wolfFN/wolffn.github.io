"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6010],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46802:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"Fiber"},u=void 0,c={unversionedId:"library/react/fiber",id:"library/react/fiber",title:"Fiber",description:"What",source:"@site/docs/library/react/fiber.md",sourceDirName:"library/react",slug:"/library/react/fiber",permalink:"/docs/library/react/fiber",draft:!1,tags:[],version:"current",frontMatter:{title:"Fiber"},sidebar:"Library",previous:{title:"Patterns",permalink:"/docs/library/react/patterns"},next:{title:"react-router",permalink:"/docs/library/react/react-router"}},p={},m=[{value:"What",id:"what",level:2},{value:"How",id:"how",level:2},{value:"\u6838\u5fc3\u5b9e\u73b0",id:"\u6838\u5fc3\u5b9e\u73b0",level:2}],s={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what"},"What"),(0,l.kt)("p",null,"React Fiber \u662f react team \u4e3a\u4e86\u89e3\u51b3\u6027\u80fd\u95ee\u9898\uff08\u6267\u884c\u8d85\u8fc7 16ms\uff0c\u6389\u5e27\uff09\uff0c\u5bf9 reconciliation algorithm \u7684\u4e00\u6b21\u91cd\u5199\u3002\u5728 react 16 \u7248\u672c\u5f15\u5165\u540e\uff0c\u4f5c\u4e3a default reconciler\u3002  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stack Reconciler"),(0,l.kt)("th",{parentName:"tr",align:null},"Fiber Reconciler"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u53d8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u53d8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tree of Objects"),(0,l.kt)("td",{parentName:"tr",align:null},"Tree of fiber nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9012\u5f52\u904d\u5386"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94fe\u8868\uff0c\u7236\u4f18\u5148\uff0cdfs")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 Stack Reconciler \u4e2d\uff0cObject \u4ee3\u8868\u4e00\u4e2a\u7ec4\u4ef6(\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"<App />")," )\uff0c\u7528\u4ee5\u8868\u793a\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u6216 DOM \u8282\u70b9\u53ca\u5176 props\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Fiber Reconciler \u4e2d\uff0c\u53ef\u4ee5\u5c06 a singer fiber \u89c6\u4f5c a virtual stack frame.")),(0,l.kt)("h2",{id:"how"},"How"),(0,l.kt)("p",null,"\u5728 Stack Reconciler \u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React \u901a\u8fc7\u904d\u5386\u6811\u6765\u8fdb\u884c\u66f4\u65b0\u64cd\u4f5c\uff0c\u8fc7\u7a0b\u7531\u5806\u6808\u534f\u8c03\u5668\u63a7\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u66f4\u65b0\u5230\u8fbe\u65f6\uff0c\u4f1a\u653e\u5165\u4e8b\u4ef6\u961f\u5217\uff0c\u7b49\u5f85\u5806\u6808\u53d8\u7a7a\u518d\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e0d\u53ef\u4e2d\u65ad\u3002\u82e5\u6267\u884c\u4e8b\u4ef6\u8d85\u8fc7 16ms\uff0c\u5219\u4f1a\u5f15\u8d77\u6389\u5e27\u3002")),(0,l.kt)("p",null,"Fiber \u53ef\u89c6\u4e3a\u865a\u62df\u5806\u6808\u5e27\uff08a virtual stack frame\uff09\uff0c\u7531\u6b64\u5177\u6709 pause, resume, abort \u7684\u80fd\u529b\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e8e\u662f\u624b\u52a8\u8c03\u5ea6\u6210\u4e3a\u53ef\u80fd\uff0c\u53ef\u4ee5\u5c06\u5176\u4fdd\u5b58\u81f3\u5185\u5b58\uff0c\u518d\u9700\u8981\u65f6\u7ee7\u7eed\u6267\u884c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b64\u5916\uff0cConcurrent \u548c Error Boundary \u4e5f\u4f9d\u8d56\u4e8e\u6b64\u67b6\u6784\u3002  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7\uff0c\u6bd4\u5982\uff0canimation \u7684\u4f18\u5148\u7ea7\u5e94\u5f53\u9ad8\u4e8e data store"),(0,l.kt)("li",{parentName:"ul"},"\u6682\u505c\u6267\u884c\uff0c\u7a0d\u540e\u56de\u6765"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u518d\u9700\u8981\uff0cAbort"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u7528\u5df2\u5b8c\u6210\u7684 work")),(0,l.kt)("h2",{id:"\u6838\u5fc3\u5b9e\u73b0"},"\u6838\u5fc3\u5b9e\u73b0"),(0,l.kt)("p",null,"\u82e5\u67d0\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u5f53\u524d\u5e27\u5269\u4f59\u65f6\u95f4\uff0c\u5219\u5c06\u5176\u6682\u505c\uff0c\u7b49\u5f85\u4e0b\u4e00\u5e27\u7ee7\u7eed\u6267\u884c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","React \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageChannel")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestAnimationFrame()")," \u6a21\u62df ",(0,l.kt)("inlineCode",{parentName:"p"},"window.RequestIdleCallback()")," \u5b9e\u73b0\u8c03\u5ea6\u3002\u539f\u56e0\u5982\u4e0b\uff1a  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.RequestIdleCallback()")," \u8c03\u7528\u4e8e\u91cd\u6392\uff0c\u91cd\u7ed8\u4e4b\u540e\uff0c\u4e0d\u7b26\u5408\u9700\u6c42\u3002\u5e76\u4e14\u6709\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RequestAnimationFrame()")," \u8c03\u7528\u4e8e\u91cd\u6392\uff0c\u91cd\u7ed8\u4e4b\u524d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MessageChannel")," \u4e5f\u662f\u5b8f\u4efb\u52a1\uff0c\u4f46\u662f\u7531\u4e8e setTimeout \u9012\u5f52\u8c03\u7528\u65f6\uff0c\u9996\u6b21\u4e4b\u540e\u95f4\u9694\u4f1a\u53d8\u6210 4ms\u3002\u5728\u4e00\u5e27\u4ec5\u6709\u7684 16ms \u4e2d\u4e0d\u53ef\u63a5\u53d7\u3002")))}f.isMDXComponent=!0}}]);