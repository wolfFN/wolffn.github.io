"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1471],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u6027\u80fd"},p=void 0,u={unversionedId:"library/react/react-performance",id:"library/react/react-performance",title:"\u6027\u80fd",description:"Reduce Bundle Size",source:"@site/docs/library/react/react-performance.md",sourceDirName:"library/react",slug:"/library/react/react-performance",permalink:"/docs/library/react/react-performance",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6027\u80fd"},sidebar:"Library",previous:{title:"Basic",permalink:"/docs/library/react/basic"},next:{title:"Render",permalink:"/docs/library/react/render"}},s={},c=[{value:"Reduce Bundle Size",id:"reduce-bundle-size",level:2},{value:"Avoid Re-rendering",id:"avoid-re-rendering",level:2},{value:"Avoid Context",id:"avoid-context",level:3},{value:"Unique Key for Iteration",id:"unique-key-for-iteration",level:3},{value:"Throttling and Debouncing Events",id:"throttling-and-debouncing-events",level:3},{value:"Avoid Inline Function",id:"avoid-inline-function",level:3},{value:"\u51cf\u5c11\u6e32\u67d3\u6b21\u6570",id:"\u51cf\u5c11\u6e32\u67d3\u6b21\u6570",level:3},{value:"useMemo, useCallback \uff0c\u907f\u514d\u5c5e\u6027\u6539\u53d8\u4ee5\u53ca\u6602\u8d35\u8ba1\u7b97",id:"usememo-usecallback-\u907f\u514d\u5c5e\u6027\u6539\u53d8\u4ee5\u53ca\u6602\u8d35\u8ba1\u7b97",level:3},{value:"\u964d\u4f4e\u6e32\u67d3\u7684\u590d\u6742\u5ea6",id:"\u964d\u4f4e\u6e32\u67d3\u7684\u590d\u6742\u5ea6",level:2},{value:"Avoid Side Effects in Render",id:"avoid-side-effects-in-render",level:3},{value:"React Fragments",id:"react-fragments",level:3},{value:"Avoid Inline Style",id:"avoid-inline-style",level:3},{value:"\u865a\u62df\u5217\u8868",id:"\u865a\u62df\u5217\u8868",level:3},{value:"\u6761\u4ef6\u8bed\u53e5",id:"\u6761\u4ef6\u8bed\u53e5",level:3},{value:"Error Boundaries",id:"error-boundaries",level:3},{value:"Immutable Data Structures for Components",id:"immutable-data-structures-for-components",level:3},{value:"Tools",id:"tools",level:2}],d={toc:c},m="wrapper";function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"reduce-bundle-size"},"Reduce Bundle Size"),(0,o.kt)("p",null,"Code Splitting, Lazy Loading, load on the fly",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Lazy")," \u7528\u4ee5\u8fdb\u884c\u61d2\u52a0\u8f7d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," \u63d0\u4f9b loading state\uff0c\u7528\u4ee5\u4f18\u5316\u5ef6\u8fdf\u4f53\u9a8c\u3002  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { lazy, Suspense } from 'react';\nconst OtherComponent = lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n    return (\n        <Suspense fallback={<div>Loading...</div>}>\n            <OtherComponent />\n        </Suspense>\n    );\n}\n")),(0,o.kt)("h2",{id:"avoid-re-rendering"},"Avoid Re-rendering"),(0,o.kt)("p",null,"\u89e6\u53d1 re-render \u7684\u60c5\u51b5\uff1aprops \u548c state \u53d1\u751f\u6539\u53d8\u3002\u6240\u4ee5\u6211\u4eec\u80fd\u505a\u7684\uff0c\u56f4\u7ed5\u4ee5\u4e0b\u4e24\u70b9\u5c55\u5f00  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u51cf\u5c11 props \u548c state \u7684\u6539\u53d8\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6539\u53d8\u3002  "),(0,o.kt)("li",{parentName:"ol"},"\u7cbe\u786e\u5224\u65ad\u6539\u53d8\u7684\u5185\u5bb9\uff0c\u5bf9\u65e0\u5173\u6539\u53d8\u4e0d\u4f5c\u54cd\u5e94\u3002  ")),(0,o.kt)("h3",{id:"avoid-context"},"Avoid Context"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Context API")," \u7684\u66f4\u65b0\u53ef\u4ee5\u7a7f\u900f ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," \u7684\u6bd4\u5bf9\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6 Context \u7684 Value \u53d8\u52a8\uff0c\u6240\u6709\u4f9d\u8d56\u8be5 Context \u7684\u7ec4\u4ef6\u4f1a\u5168\u90e8 forceUpdate\u3002  "),(0,o.kt)("h3",{id:"unique-key-for-iteration"},"Unique Key for Iteration"),(0,o.kt)("p",null,"\u9664\u975e\u5b8c\u5168\u9759\u6001\u7684 List\uff0c\u5426\u5219\u4e0d\u53ef\u4f7f\u7528 index \u4f5c\u4e3a key\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b8c\u5168\u9759\u6001 List\uff0c\u6307\u7684\u662f\u4e0d\u4f1a\u8fdb\u884c\u63d2\u5165\u3001\u5220\u9664\u3001\u6392\u5e8f\uff0c\u7b49\u7b49\u64cd\u4f5c\u7684 List\u3002  "),(0,o.kt)("h3",{id:"throttling-and-debouncing-events"},"Throttling and Debouncing Events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Throttling"),": delaying function execution.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"use case"),": page scrolling, infinite scroll.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Debouncing"),": ignoring the event handler call until the calls have stopped for a certain amount of time.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"use case"),": auto complete input  "),(0,o.kt)("p",null,"\u63a8\u8350 Lib: lodash, throttle-debounce."),(0,o.kt)("h3",{id:"avoid-inline-function"},"Avoid Inline Function"),(0,o.kt)("p",null,"we should bind function in constructor instead of use inline function. \u4e8c\u8005\u533a\u522b\u5982\u4e0b\uff1a  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"binding: prototype property of the class  "),(0,o.kt)("li",{parentName:"ul"},"arrow function: object instance  ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u6709\u4e89\u8bae\uff0c\u6709\u6d4b\u8bd5\u8868\u660e\u5728\u9ad8\u7248\u672c\u4e2d\u4e8c\u8005\u6027\u80fd\u65e0\u663e\u8457\u5dee\u5f02\u3002  ")))),(0,o.kt)("h3",{id:"\u51cf\u5c11\u6e32\u67d3\u6b21\u6570"},"\u51cf\u5c11\u6e32\u67d3\u6b21\u6570"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4e8c\u79cd\u65b9\u6cd5\u90fd\u662f\u901a\u8fc7\u5bf9 props \u8fdb\u884c\u6d45\u5bf9\u6bd4(",(0,o.kt)("inlineCode",{parentName:"p"},"shallow comparison"),") \uff0c\u4ee5\u53ca\u5b9a\u5236\u5bf9\u6bd4\u529f\u80fd\uff0c\u6765\u51cf\u5c11 rerender \u6b21\u6570\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Function Components: React.memo()\uff0c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u8bb0\u4f4f\u5bf9\u4e8e\u786e\u5b9a\u7684 props\uff0c\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\uff0c\u76f4\u63a5\u590d\u7528\uff1b\u3001"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e props \u7684\u6539\u53d8\uff0c\u8fdb\u884c shallow comparison\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5b9a\u5236 comparator (previousProps, nextProps) \u21d2 true or false"))),(0,o.kt)("li",{parentName:"ul"},"Class Components: PureComponent",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6982\u5ff5\u7c7b\u4f3c\u7eaf\u51fd\u6570\uff0c\u76f8\u540c\u7684 props \u548c state\uff0c\u76f8\u540c\u7684 output\u3002"),(0,o.kt)("li",{parentName:"ul"},"extends PureComponent\uff0cshouldComponentUpdate \u4e2d\u8fdb\u884c\u4e86 shallow comparison"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u5236 props/state \u5bf9\u6bd4\uff1a shouldComponentUpdate(nextProps, nextState)")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// only rerenders if props change\nconst MyComponent = React.memo(function MyComponent(props) {}, areEqual);\n\nfunction areEqual(prevProps, nextProps) {\n    /*\n      return true if passing nextProps to render would return\n      the same result as passing prevProps to render,\n      otherwise return false\n      */\n}\n")),(0,o.kt)("h3",{id:"usememo-usecallback-\u907f\u514d\u5c5e\u6027\u6539\u53d8\u4ee5\u53ca\u6602\u8d35\u8ba1\u7b97"},"useMemo, useCallback \uff0c\u907f\u514d\u5c5e\u6027\u6539\u53d8\u4ee5\u53ca\u6602\u8d35\u8ba1\u7b97"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).\nconst memoizedCallback = useCallback(() => {\n    doSomething(a, b);\n}, [a, b]);\n\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n\nuseCallback(fn, deps);\n// is equivalent to \nuseMemo(() => fn, deps);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useRef")," \u6301\u4e45\u5316\u4fdd\u5b58\u53d8\u91cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const debouncedFetchOptions = useRef(_.debounce(fetchOptions, 500));\nuseEffect(() => {\n    debouncedFetchOptions.current(id, searchContent);\n}, [id, searchContent]);\n")),(0,o.kt)("h2",{id:"\u964d\u4f4e\u6e32\u67d3\u7684\u590d\u6742\u5ea6"},"\u964d\u4f4e\u6e32\u67d3\u7684\u590d\u6742\u5ea6"),(0,o.kt)("p",null,"\u5927\u6982\u6709\u4e09\u4e2a\u601d\u8def  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u8ba1\u7b97\u590d\u6742\u6027\uff0c\u51cf\u5c11\u8ba1\u7b97\u91cf"),(0,o.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u8ba1\u7b97\u7684\u590d\u6742\u5ea6")),(0,o.kt)("h3",{id:"avoid-side-effects-in-render"},"Avoid Side Effects in Render"),(0,o.kt)("p",null,"\u4fdd\u8bc1 render: pure function. setState, query DOM \u4e4b\u7c7b\u7684\u4e0d\u8981\u505a"),(0,o.kt)("h3",{id:"react-fragments"},"React Fragments"),(0,o.kt)("p",null,"\u51cf\u5c11\u8282\u70b9\u6570"),(0,o.kt)("h3",{id:"avoid-inline-style"},"Avoid Inline Style"),(0,o.kt)("p",null,"\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5d4c\u5957 styled-components\uff0c\u8fc7\u591a\u7684\u5d4c\u5957 DOM \u8282\u70b9\u5f88\u6d88\u8017\u8ba1\u7b97\u6027\u80fd",(0,o.kt)("br",{parentName:"p"}),"\n","\u6e32\u67d3\u6027\u80fd\uff1aCSS > \u5927\u90e8\u5206CSS-in-js > inline style\n",(0,o.kt)("img",{alt:"image.png",src:n(9909).Z,width:"1280",height:"739"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(70300).Z,width:"1200",height:"742"})),(0,o.kt)("h3",{id:"\u865a\u62df\u5217\u8868"},"\u865a\u62df\u5217\u8868"),(0,o.kt)("p",null,"\u53ea\u6e32\u67d3\u5f53\u524dwindow \u53ef\u89c1\u5143\u7d20\uff0c\u63a8\u8350 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bvaughn/react-window"},"react-window"),"  "),(0,o.kt)("h3",{id:"\u6761\u4ef6\u8bed\u53e5"},"\u6761\u4ef6\u8bed\u53e5"),(0,o.kt)("p",null,"\u56fa\u5b9a\u7684\u90e8\u5206\uff0c\u4e0d\u8981\u5199\u8fdb\u6761\u4ef6\u8bed\u53e5  "),(0,o.kt)("h3",{id:"error-boundaries"},"Error Boundaries"),(0,o.kt)("p",null,"getDerivedStateFromError",(0,o.kt)("br",{parentName:"p"}),"\n","componentDidCatch  "),(0,o.kt)("h3",{id:"immutable-data-structures-for-components"},"Immutable Data Structures for Components"),(0,o.kt)("p",null,"\u6709\u5229\u4e8e React \u5feb\u901f\u7cbe\u786e\u5730\u5bf9 props \u6539\u53d8\u8fdb\u884c\u5224\u65ad\u3002\u7f3a\u70b9\u662f\u4e3b\u6d41 Lib \u9700\u8981\u4e00\u5b9a\u7684\u5fc3\u667a\u8d1f\u62c5\u3002  "),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("p",null,"React Devtool Profiler  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Highlight updates when components render."),(0,o.kt)("li",{parentName:"ul"},"Record why each component rendered while profiling.")),(0,o.kt)("p",null,"\u6253\u5f00\u8bb0\u5f55\u540e\uff0c\u53ef\u4ee5\u9488\u5bf9 Commit List \u5bf9\u7ec4\u4ef6\u7684\u6e32\u67d3\u60c5\u51b5\u6709\u4e00\u4e2a\u6df1\u5165\u7684\u4e86\u89e3\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u7070\u8272\uff1a\u672a\u91cd\u65b0\u6e32\u67d3",(0,o.kt)("br",{parentName:"p"}),"\n","\u6d88\u8017\u65f6\u95f4\uff1a\u9ed1\u8272>\u9ec4\u8272>\u7eff\u8272",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(61218).Z,width:"808",height:"316"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(97448).Z,width:"830",height:"258"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(57816).Z,width:"2934",height:"1654"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(87243).Z,width:"2882",height:"2016"}),"\n",(0,o.kt)("img",{alt:"image.png",src:n(33339).Z,width:"2938",height:"1618"})))}f.isMDXComponent=!0},61218:function(e,t,n){t.Z=n.p+"assets/images/config-general-56c9f89a891a44c63f52046f77b848dc.png"},97448:function(e,t,n){t.Z=n.p+"assets/images/config-profiler-b0665ae7617f13bccd72d64a49eea089.png"},57816:function(e,t,n){t.Z=n.p+"assets/images/flamegraph-1st-commit-055be1e98cfc7d959fdcd7bd7cd96499.png"},87243:function(e,t,n){t.Z=n.p+"assets/images/flamegraph-color-20a5f2a430d7fb94ef3f48f3d8fa6c09.png"},33339:function(e,t,n){t.Z=n.p+"assets/images/flamegraph-detail-bb2abd7bd6da56d6d670cc6e6a636477.png"},9909:function(e,t,n){t.Z=n.p+"assets/images/styled-components-74228ce05ae1e4139216f24076f9e560.webp"},70300:function(e,t,n){t.Z=n.p+"assets/images/styped-comopnents-comparison-097e2efc9bc65fd2f7caa757cd4df4c2.webp"}}]);