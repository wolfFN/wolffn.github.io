"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[8319],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],a={title:"life-circle"},c="\u751f\u547d\u5468\u671f",p={unversionedId:"library/react/life-circle",id:"library/react/life-circle",isDocsHomePage:!1,title:"life-circle",description:"\u5f85\u66f4\u65b0\uff0c\u6700\u597d\u80fd\u591f\u63d2\u5165\u56fe\u7247",source:"@site/docs/library/react/life-circle.md",sourceDirName:"library/react",slug:"/library/react/life-circle",permalink:"/docs/library/react/life-circle",tags:[],version:"current",frontMatter:{title:"life-circle"},sidebar:"Library",previous:{title:"diff",permalink:"/docs/library/react/diff"},next:{title:"Patterns",permalink:"/docs/library/react/patterns"}},u=[{value:"\u53ef\u590d\u7528\u7ec4\u4ef6",id:"\u53ef\u590d\u7528\u7ec4\u4ef6",children:[],level:2},{value:"\u8c03\u7528\u6d41\u7a0b\uff1a",id:"\u8c03\u7528\u6d41\u7a0b",children:[],level:2},{value:"Details",id:"details",children:[{value:"componentWillReceiveProps",id:"componentwillreceiveprops",children:[],level:4},{value:"shouldComponentUpdate",id:"shouldcomponentupdate",children:[],level:4},{value:"componentWillUpdate",id:"componentwillupdate",children:[],level:4},{value:"render",id:"render",children:[],level:4},{value:"componentDidUpdate",id:"componentdidupdate",children:[],level:4}],level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f85\u66f4\u65b0\uff0c\u6700\u597d\u80fd\u591f\u63d2\u5165\u56fe\u7247")),(0,i.kt)("h2",{id:"\u53ef\u590d\u7528\u7ec4\u4ef6"},"\u53ef\u590d\u7528\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u672c\u8d28\u4e3a\u6709\u9650\u72b6\u6001\u673a"),(0,i.kt)("h2",{id:"\u8c03\u7528\u6d41\u7a0b"},"\u8c03\u7528\u6d41\u7a0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"componentWillReceiveProps()\nshouldComponentUpdate()\ncomponentWillUpdate()\nrender()\ncomponentDidUpdate()\n")),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("h4",{id:"componentwillreceiveprops"},"componentWillReceiveProps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6",(0,i.kt)("inlineCode",{parentName:"li"},"render()"),"\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u7528\uff1aprops\u53d8\u5316\u65f6\uff0csetState()"),(0,i.kt)("li",{parentName:"ul"},"\u6b64\u65f6setState\u4e0d\u56de\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps"),"\uff0c\u4f1a\u5408\u5e76render\u3002")),(0,i.kt)("h4",{id:"shouldcomponentupdate"},"shouldComponentUpdate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5316\uff0c\u662f\u5426\u89e6\u53d1render"),(0,i.kt)("li",{parentName:"ul"},"React.PureComponent\uff0c\u6d45\u6bd4\u8f83"),(0,i.kt)("li",{parentName:"ul"},"render\u64cd\u4f5c\u865a\u62dfDOM\uff0c\u6027\u80fd\u5f00\u9500\u4e0d\u5927")),(0,i.kt)("h4",{id:"componentwillupdate"},"componentWillUpdate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0econstructor\u5173\u7cfb\uff1f"),(0,i.kt)("li",{parentName:"ul"},"server render\uff1f")),(0,i.kt)("h4",{id:"render"},"render"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6709Async"),(0,i.kt)("li",{parentName:"ul"},"Diff\u7b97\u6cd5")),(0,i.kt)("h4",{id:"componentdidupdate"},"componentDidUpdate"),(0,i.kt)("p",null,"\u7f51\u7edc\u8bf7\u6c42"),(0,i.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"mount\u4e0eupdate\u4e3a\u9012\u5f52\u6e32\u67d3\uff0c\u5177\u4f53\u4e3a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u7236will -> \u5b50will -> \u5b50did -> \u7236did",(0,i.kt)("br",{parentName:"p"}),"\n","componentWillMount,componentWillReceiveProps\u91cc\u9762\u7684setState\u5c06\u4f1a\u88ab\u5408\u5e76",(0,i.kt)("br",{parentName:"p"}),"\n","shouldComponentUpdate,componentWillUpdate\u4e2dsetState\u5c06\u5bfc\u81f4\u5faa\u73af\u8c03\u7528"))}m.isMDXComponent=!0}}]);