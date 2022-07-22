"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[534],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"Data Type"},p=void 0,l={unversionedId:"data-science/db/data-type",id:"data-science/db/data-type",title:"Data Type",description:"\u5e38\u7528\u7c7b\u578b",source:"@site/docs/data-science/db/data-type.md",sourceDirName:"data-science/db",slug:"/data-science/db/data-type",permalink:"/docs/data-science/db/data-type",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Type"},sidebar:"Database",previous:{title:"Table",permalink:"/docs/data-science/db/table"},next:{title:"Select",permalink:"/docs/data-science/db/select"}},u={},d=[{value:"\u5e38\u7528\u7c7b\u578b",id:"\u5e38\u7528\u7c7b\u578b",level:2}],s={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e38\u7528\u7c7b\u578b"},"\u5e38\u7528\u7c7b\u578b"),(0,o.kt)("p",null,"\u6574\u6570\u6570\u636e\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"INT")," \u7c7b\u578b\uff1b",(0,o.kt)("br",{parentName:"p"}),"\n","\u5305\u542b\u5c0f\u6570\u70b9\u7684\u6570\u636e\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"DOUBLE")," \u7c7b\u578b\u3002  "),(0,o.kt)("p",null,"\u957f\u5ea6\u4e0d\u8d85\u8fc7255\u4e2a\u5b57\u7b26\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR"),"\uff1b",(0,o.kt)("br",{parentName:"p"}),"\n","\u8d85\u8fc7255\u4e2a\u5b57\u7b26\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"TEXT"),"\u3002  "),(0,o.kt)("p",null,"\u65e5\u671f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"DATE"),"\uff1b\n\u65f6\u95f4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"TIME"),"\uff1b\n\u65e5\u671f\u548c\u65f6\u95f4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"DATETIME"),"\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," \u4e2d\uff0c\u65e5\u671f\u4e0e\u65f6\u95f4\u7c7b\u578b\u7684\u6570\u636e\u9700\u8981\u4f7f\u7528\u5355\u5f15\u53f7 ",(0,o.kt)("inlineCode",{parentName:"p"},"'")," \u6216\u8005\u53cc\u5f15\u53f7 ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," \u62ec\u8d77\u6765\u3002  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65e5\u671f\u5fc5\u987b\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD")," \u7684\u683c\u5f0f\u8f93\u5165\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u5fc5\u987b\u4ee5",(0,o.kt)("inlineCode",{parentName:"li"},"HH\uff1aMM\uff1aSS"),"\u7684\u683c\u5f0f\u8f93\u5165\u3002")))}f.isMDXComponent=!0}}]);