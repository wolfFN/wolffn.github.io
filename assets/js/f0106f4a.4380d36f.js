"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[2340],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||i;return t?r.createElement(u,o(o({ref:n},c),{},{components:t})):r.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99767:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Animation"},s=void 0,p={unversionedId:"css/animation",id:"css/animation",title:"Animation",description:"Loading",source:"@site/docs/css/animation.md",sourceDirName:"css",slug:"/css/animation",permalink:"/docs/css/animation",draft:!1,tags:[],version:"current",frontMatter:{title:"Animation"},sidebar:"CSS",previous:{title:"\u5916\u8fb9\u8ddd\u5408\u5e76",permalink:"/docs/css/margin"},next:{title:"TRICKS",permalink:"/docs/css/snippets/tricks"}},c={},g=[{value:"Loading",id:"loading",level:2},{value:"Performance",id:"performance",level:2},{value:"Triggers (css triggers)",id:"triggers-css-triggers",level:3},{value:"will-change",id:"will-change",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"\u4f18\u5316\u5de5\u5177",id:"\u4f18\u5316\u5de5\u5177",level:3},{value:"Performance \u9762\u677f",id:"performance-\u9762\u677f",level:4},{value:"\u5f00\u542f Performance Monitor \u4e0e Rendering",id:"\u5f00\u542f-performance-monitor-\u4e0e-rendering",level:3},{value:"Rendering \u9762\u677f\u6253\u5f00 fps meter",id:"rendering-\u9762\u677f\u6253\u5f00-fps-meter",level:3},{value:"Performance Monitor \u524d\u540e\u5bf9\u6bd4",id:"performance-monitor-\u524d\u540e\u5bf9\u6bd4",level:3}],m={toc:g},d="wrapper";function u(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"loading"},"Loading"),(0,i.kt)("p",null,"\u5c45\u4e2d\u7684 loading \u52a8\u753b\uff0c\u672c\u8d28\u662f\u5c06 12 \u5f20\u72ec\u7acb\u7684\u56fe\u7247\uff0c\u62fc\u5230\u4e00\u8d77\uff0c\u6b65\u8fdb\u52a8\u753b\uff0c\u5171 12 \u6b65\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","(\u4e0b\u9762\u6709\u4e00\u5f20\u56fe\uff0cloading.png\uff0c\u53f3\u952e -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Open Image In New Tab")," \u8fdb\u884c\u67e5\u770b)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"loading.png",src:t(68842).Z,width:"480",height:"40"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".loader {\n    position: absolute;\n    z-index: 10002;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    .loader-img {\n        width: 40px;\n        height: 40px;\n        background: url(/img/loading.png) 0 0 no-repeat;\n        animation: loader 1s infinite steps(12);\n        overflow: hidden;\n    }\n}\n\n@keyframes loader {\n    to {\n        background-position: -480px 0;\n    }\n}\n")),(0,i.kt)("h2",{id:"performance"},"Performance"),(0,i.kt)("h3",{id:"triggers-css-triggers"},"Triggers (",(0,i.kt)("a",{parentName:"h3",href:"https://csstriggers.com/"},"css triggers"),")"),(0,i.kt)("p",null,"\u9ad8\u5c42\u66f4\u52a0 taxing\uff0c\u6bcf\u6b21\u89e6\u53d1\u9ad8\u5c42\uff0c\u90fd\u4f1a\u89e6\u53d1\u4e0b\u5c42\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Layout",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CSS properties that affect other elements will affect the layout."),(0,i.kt)("li",{parentName:"ul"},"width, margin, padding, border ..."))),(0,i.kt)("li",{parentName:"ul"},"Paint",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the process of filling in pixels"))),(0,i.kt)("li",{parentName:"ul"},"Composite",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Correctly orders parts of the page onto the screen"),(0,i.kt)("li",{parentName:"ul"},"Opacity, Transform")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tirggers.png",src:t(20389).Z,width:"1093",height:"167"}),"\n",(0,i.kt)("img",{alt:"tirggers.png",src:t(33234).Z,width:"744",height:"540"})),(0,i.kt)("h3",{id:"will-change"},"will-change"),(0,i.kt)("p",null,"\u63d0\u524d\u544a\u77e5\u6d4f\u89c8\u5668\uff0c\u8be5 css \u5c5e\u6027\u53ef\u80fd\u4f1a\u6539\u53d8\uff0c\u4ee5\u8ba9\u6d4f\u89c8\u5668\u63d0\u524d\u4f18\u5316\u3002\u53ef\u4ee5\u7528 JS \u6765\u589e\u52a0\u3001\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"will-change")," \u5c5e\u6027"),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u53ef\u80fd\uff0c\u5c3d\u91cf\u4f7f\u7528\u4ec5\u89e6\u53d1 ",(0,i.kt)("inlineCode",{parentName:"li"},"composite")," \u7684 css \u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u5728\u62e5\u6709\u8bb8\u591a DOM \u8282\u70b9\u7684\u9875\u9762\u8fdb\u884c\u52a8\u753b\uff0c\u6216\u8fc7\u5ea6\u52a8\u753b"),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u540c\u65f6\u5bf9\u591a\u4e2a\u5c5e\u6027\u8fdb\u884c\u52a8\u753b"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540e\u7eed\u4f1a\u5c55\u793a\u7684\u5143\u7d20\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"opacity: 0")),(0,i.kt)("li",{parentName:"ul"},"\u9002\u5f53\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"will-change")),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u6eda\u52a8\u65f6\u89e6\u53d1\u52a8\u753b\uff1b\u4e0e\u6b64\u76f8\u53cd\uff0c\u5e94\u5f53\u7b49\u5f85\u9875\u9762\u5230\u8fbe\u67d0\u4e00\u4e2a\u7279\u5b9a\u70b9\u65f6\uff0c\u89e6\u53d1\u52a8\u753b\u3002")),(0,i.kt)("h3",{id:"\u4f18\u5316\u5de5\u5177"},"\u4f18\u5316\u5de5\u5177"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Chrome devtools")," \u63d0\u4f9b\u4e86\u5de5\u5177\u4f9b\u6211\u4eec\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u6b64\u5904\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"margin")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," \u4e24\u4e2a\u5c5e\u6027\u4e3a\u4f8b\uff0c\u8bb0\u5f55\u4e00\u6b21\u4f18\u5316\u8fc7\u7a0b\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9875\u9762\u7b54\u9898\u7ed3\u6784\u4e3a\u4e09\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," \u5f80\u590d\u8fd0\u52a8\uff0c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u66ff\u6362\u52a8\u753b\u7c7b\u3002\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b\uff0c\u5b8c\u6574\u4ee3\u7801\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wolfFN/WEB-Demos/tree/master/animation"},"\u53c2\u8003\u4ee3\u7801")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<button>Make it Smooth</button>\n\n<div class=\"container\">\n    <div class=\"card\">\n        <h1>ani 1</h1>\n    </div>\n    <div class=\"card\">\n        <h1>ani 2</h1>\n    </div>\n    <div class=\"card\">\n        <h1>ani 3</h1>\n    </div>\n</div>\n\n<script>\n    const btn = document.querySelector('button');\n    btn.addEventListener('click', () => {\n        document\n            .querySelectorAll('.card')\n            .forEach(card => card.classList.add('newAnim'));\n    });\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".card {\n    background: white;\n    margin: 60px 0;\n    padding: 60px;\n    border-top: 5px solid rgb(0, 110, 255);\n    animation: anim 1s infinite alternate;\n}\n\n.newAnim {\n    animation: anim2 1s infinite alternate;\n}\n\n@keyframes anim {\n    from {\n        margin-left: 0;\n    }\n    to {\n        margin-left: 300px;\n    }\n}\n\n@keyframes anim2 {\n    from {\n        transform: translateX(0);\n    }\n    to {\n        transform: translateX(300px);\n    }\n}\n")),(0,i.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("h4",{id:"performance-\u9762\u677f"},"Performance \u9762\u677f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6b64\u5904\u53ef\u4ee5\u5bf9\u9875\u9762\u8fdb\u884c\u8bb0\u5f55\uff0c\u9996\u5148\u6253\u5f00 cpu throttle"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"cpu-throttle.png",src:t(91907).Z,width:"1216",height:"206"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 Performance \u9762\u677f\u8bb0\u5f55\u6027\u80fd\uff0c\u4e0b\u56fe\u53ef\u89c1\u70b9\u51fb\u6309\u94ae\u524d\u540e\u5bf9\u6bd4"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"performance.png",src:t(46787).Z,width:"1060",height:"528"})))),(0,i.kt)("h3",{id:"\u5f00\u542f-performance-monitor-\u4e0e-rendering"},"\u5f00\u542f Performance Monitor \u4e0e Rendering"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"more-tools.png",src:t(76559).Z,width:"772",height:"996"})),(0,i.kt)("h3",{id:"rendering-\u9762\u677f\u6253\u5f00-fps-meter"},"Rendering \u9762\u677f\u6253\u5f00 fps meter"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rendering-fps-meter.png",src:t(19342).Z,width:"1048",height:"560"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u4e3a\u70b9\u51fb\u6309\u94ae\u524d\u540e\u5bf9\u6bd4\n",(0,i.kt)("img",{alt:"fps-1.png",src:t(99103).Z,width:"742",height:"714"}),(0,i.kt)("img",{alt:"fps-2.png",src:t(30451).Z,width:"740",height:"838"}))),(0,i.kt)("h3",{id:"performance-monitor-\u524d\u540e\u5bf9\u6bd4"},"Performance Monitor \u524d\u540e\u5bf9\u6bd4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cpu-1.png",src:t(36355).Z,width:"790",height:"442"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cpu-2.png",src:t(5773).Z,width:"730",height:"298"})))}u.isMDXComponent=!0},36355:function(e,n,t){n.Z=t.p+"assets/images/cpu-1-4861004ab6ae3d306b42058ec4c4367d.png"},5773:function(e,n,t){n.Z=t.p+"assets/images/cpu-2-3949373f885df91c3e8d21f301110597.png"},91907:function(e,n,t){n.Z=t.p+"assets/images/cpu-throttle-c52f7ab5013f0d88a96475f91162d600.png"},99103:function(e,n,t){n.Z=t.p+"assets/images/fps-1-b85bbede20e31e975037d7aff3430fb4.png"},30451:function(e,n,t){n.Z=t.p+"assets/images/fps-2-2338fdcc2d15a55b6615d1152ac20a00.png"},68842:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAAoCAMAAAARxtnKAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMABQwSFBsJDjQXghlpIKKHnCVPSze70peMLte3XWZRdm1GPOyz8jBCKejMV2FU5qZ6rL/33s9xw6m7cTMAABCZSURBVHjarJhpl7I4EIUh7LsIyo6IuC+46///ZVMk0Dh0nWk/zD1nzvja16SsJ1eScL+V3u8p94WOj8fxG5+XJN43vrVtr7/x+Y7jf+OLns/oG5+bpu43Pmk+l77xCVEkfOOTNU3+yicIX/l4Qviv6ru/33fhC99uudx94VOqOK6Uv31kNJmMyBc+x7adL3zy03Ge8he+fVHsv/Dx6zxf81/4It+Pvum0JknaV0BE8asFQ0D/WVgRbDiQtX2/txZ9R+Yx30F3qW+6WEypL7JnPOI7Pulfpcl0OqFLfxMUmM870L9qdZLUGo2UfsB85ZH+VQxHo1CkFTyPmG+1FmhfZro+o6+kg8djyV0pdAGmppnSV9qxxHyGRfHL8/F4Tl8J6xXmIwLPAKsqA6ysXHRFEeZrANNXsmWgQGTmawC3rwhmm9lRD5hFGV2vxe12Vf4FmCgK8kUO9/uFNG1rADdolPj9Pv/27a+voPEZDWCj8V1vtwL5Ba9rvSlIs5PEbhCSy/1++O0rw7BofEIDWGh8weu6/+1bQSD5T8CyXtcewvd4pIEkDWDS+IowLBG+vr/hPwHzEPkVwhd49YBp5I9HF+HLAtkD5je+byDgFIX0gNvII4TP73es9IBZ5DHCo+VpaX4C5hWiIMYw3sXpJ+DZ+/2+IBNPqkn+CdiECUa/faYd2PNPwClMECILxtGd8hNwDhMgC2tuZmb0CXgOE5i/fWru5e4n4BImQBaMq6q+9gk4ggnmyC+pZEjkE7ALE6jII0uk/e8Ba76qYgsB2s9/AiYwAfJbfYH2zz4ByzAB9kjcL0+Lh/YBGPxYgr14N03EHrB2ghmQxK0nVWILPWDtsTgtkQaWNgBTesBiMt3FHpJMB4CRHrBgJ9VkjQCB/qdyD1gBv+0je6bcG8/5HjABv7NCwKkMWAdYTmECDIhkALAeMD8fe7mEJlgUesDUrwpYghkwBpj6DQkJ3AHaf9I+AIMfTTCfQMLOHWAWYNRnA4CiB+zABDse8YWT6pr2gM8wfIL5zpCwvAdcwAKyMV8GCVv3gNNrNQkRH5ebWeH3gHMY/oz5SgCw6QGvYfgM820gwlIP2C8yM8d8IgBQesAbWEAlYqMASA9YggBvEBuLcA9YgeFFjMcOADg9YEIXEKb54rSIrRYwGmCmcrqbXqVuk+UuYPwx5vOTKqkNBhjsMQw/x3zRCIhpHWDpCsOjjXF1XT8LHWCjhuF9zGdBwg5KB1gD+yjCfNrYG3ukAyycYXgIJh7hFd8BVg4wPLQHjbBh8B1g4sHwGubjRUqsBcyvugDjEe4A84aBBRg0BgALlwFmdpHHt9E1ZCzkpAX4pWb9EBn3BfCQPHNGA9jgAhh+wqM+HR6SBac1gDUuhMFrfOInZCzlhGYXLXBnGDzAfSlkzOsAFzC4jvs8iHDJKQ1ghUth8CeHyocIRx1gDwZPcZ/rq77VAS4hwB7mYk9hAYjR9RBBgH3cp9AIt4AtGNzFfTJETG4Bs8FxHhNAEDDALMDKwHAI2TGiPG23d4u/wJ6Jp3a+nUdmvv2ZnQPV3ePxkrjR7RZw7g1GL/ttPYj3THbciKqquhicc787nHXfbk8lm+5yltm5Z7+iPjcYjQKRm71eM056PR47lU03Knh27pm79IXFIpzVdcYZFxg8YtOFB+ZzVYnte7Msgwjvw3DPic3YLjvHnvesQMMVGBBvPPZkbv18rlmALVaW6TEfEWT2fxZh9XhUIcAwuMHK2peDBhmgBhksB9KMLbCy5iv+3w0SW2TtclAJ2xSo7GvK50v7hVpkmkbasVnZrtGea0d7xg0Q3FyIpCJ/BlgWSHfuiWN2hxTcFtsVp6Sp0gwO9vYZr9FXx+tkEtJF6cTTx4YjeU44FQavWfXdqWpu2/aZ7lZm16Ry4bt6hFttF7AcQPmu2/WVjuNk9OmTwT4LIrJey9zmMY0ddv+1XN4Kdu4xzdyiFTi6bnCy78ucWyXXGbv/imN2qnKPeV4a9L3CzESOjyLoNuywMhrXcDK5HjmQ5vvqRmAb6fFYAALQWEPXnSOd7Qzlz9tzj8R2K5bfQOAliefEzCxorzYZlF+yGynKi0UYIPBCQ288ZltoKzfNYtWdexhihUGQZbp4fIuuujLP4VTVnkp2OXsK05DxzX9GG2Bho/q+xs61yyW7I6zhE2rr6wIsi1J3qtLvu108DQCd9do6fP/7QIsSQRo1Pq9VNUl0KFa67Gatjw9uscXwdkviUAcQmyeg04LK7HzO9gW+9eTdyKa4QmiqnsK7oj7ad77Z7iIB/HqxPJ1uAcOVZabpwbtCoXtc6zOrQANswTTe7e46RXP0IDa+CA3cZ2Xn2490Ef6mJ5Oquj5bXCAX2kDW44hr5emFANieEPigPnS4JIluYDeq1fnKbK/AGCmUrod0SRBNBClso6t0vmi8JtApzzSzrFh3uBhiCA3pfJbanLJFHwLvHelCsGmL6AHh4ymp0B2Z4qog32JxPJ2Wi7qEMeJb0HEjbMstSBJbEiD3Ek8B8c6xIP1crw5vtz6tYJIA4momcYrVm1wYheIlCqta0m1okh1kGoTgXz63flNNaVu1wtEbxEcRetT7LIVzgxPgXSyvNN/CvmmSma0VWJa9D5an5ewA7zS+0LKVdT4GxF4TNqH3weqUZhXgTSYBLVveqFSWzPGk90FYtQzKDka2LrGbCNoko9nhyL0P/ikedVp6oXW/cT+Iex/hoaKsqdzcs3JYkyizDx8QJ6rXVJ6vFbo0pm+qegADrJZKtaHlbK7LBSA+Be6/uFG8Bl2cWjsNSRNA/IgvArKhB7xyV8rRvgLia6AMfG3lP+Gfh4AY+kQG54iYFn6aKd3l44z1SR5M+7ptAe/DJK1vlRZNDvZD3yV+AN4k7XzuHBCPf90YK8EV8F7to9z6tMhvcrAZ+IhOyw7n3TyEIdYGPpmtzFn584XbRv2+5Qa8RbrqfHyXg+EtNy177rY+ZXaijYrFgW9Dy45+uJkPQLy9vYSBT2N4P1dvcY0f04c1MNKqyWdLD/UkSarh8b3D2/tyQDwaaYMD5Ru0cD4+TebnpleDL+JuF9tlfNY+fP7BhBgPvogFJcfXov80hNODx+p40EGpSpJJffj4NC+tml4NFowGJdth/ulTml4ZA8Big/c8/5yFUMQDn5BB0Qe/8/WIh+2DknOPxZJJchZv0GawYBq8K4n/qPgcL6FZ7oCb0azKwRnXOr8eM344M+AdvCcVl8pE9vPy8JCZBqP9r/PVbRkMiha9s+4Nfc72Hg6KFspDVg59s8frbA1Kjjx4rg5kVpdCGpRsrVRr6NuPglQbzCEYhjL0efrZG6YLEJOhr8wOpfB3r+B57UVkEIZgeQuGPCx1ZcmDMIT3rTP0KUbzXBlK2iBHLOSgabiID7tHsJD7Xxc7PSLXkshnFQ25ZEJ8REBOshJSM0HuSLTveiAJ3/k0hfuqWQLB7sCR7yYjNa/+qIVoVCL3h2RRAInCnz6BSvnLxyuE6k+fzPSnrxX3jfF7H/d/SbCopL99Esgy/vIpktFI+8u3HtlU9UzG702ZeN8JmTLMRwSFiY+eM6Y95pOJzMS7+5RpziO24Pqius6l9ZxJxXxOdWlUXUohauVivrM9YvJlrZWAMTVDp1HorGShFRrCdNZqw5NWMubzsgOTm8ZbqlOtIL5yzORJx92UaUQQX1S2Er1qwuRgEbE2LpPC2ZOE6VUiA0qdBKdrUe0jPk1k0pSnozOFEZbaTnJamEyFi1yLvzslsDFmOiJrv7wtmd41bIyZfIScf4+Z7oEmdUKIrF4Tppf+s7Q1ZMFsapupLkgnBfG5ocMUpqd3pz3yk9814+nBxpjplv/2icec6ejDwYfpPkfS/dMM938CLP6/gNf/sGs3K21GURiF8QuG1jalAaEtLdQEEcEI6kC8/ytT9s7nQw7y6sCReMYH/Nl4zF5rPczn/I0D/hEH/OV5wL/jgP/czQO+eeOAv8cBr54HfPXKgM/2A96804Dnsw5PdEO1RZ/3eqKX+YmmGvv83cYn+ujk/LbPaXyij+5//upzkZ/o3X4gJ5f5ib7+f99nnZ/oza5+xt2/VX6in7xHn28vPdHO5bbGtj1d5Cf6eL0/0+eHrI/+Icuf/yp9LM9rjd9DXmvcy2vNi7HflNcuXyOvXe7ltcvFsHaFtcbaFdYaa1dYW8PaZW3NaxcwkRdrYCIv1sBEBifARIYBwEQGJ8BEBifARAYnvpcMToCJDE6AiQxOgKcMToCnDE6gxYzGoMWMxqDFjD6hxYw+ocWMPqHFjD6hxYw+ocWMPqHFjD6hxYw+oeOMPqHjjD7JgQy3yYEMt8mBLC/IgSwvyIEsL8iBLC/IgSwvyIEsL8iBLC/IgSwvyJ8sL8ifLC/ovdJxdNegp+i91nF0Fz016L3+v0lj0Y+D3lse3KMfB703/D+kHwe9V/doSvpx0Ht13KMfB71XOo7OpB8HvVf36Ez68VDvHejWr8tBP9K3pVvpzEE/0rcHunUx6EeCnlAnrAlmgp5QJ6wJZoKeUCesBQQEPaFOWAsICHpCXZAgICDoCXVBgoCAoCfUBQkCAoKeUBckCAgIesGEIEFAQNALJgQJAgIBhmBCkCAgEGAIJgQJAgKJzZzEVMIiOZGISGwqiamERXIiEZHYVBJTCYvkRAIksakkphKWTk4kQBIbSUynKT1+CZDEppOYvicpkgBJbCqJqURJUiQBkthUElOJUidFEiCJjeRp2mwmSZEESGJTyVMlSpIiCZCEqpKnTpSOKymSAEmo5uSpEqVOiiRAIjlRW0doy4rGRF5zJCdqqwhNNNaRl0hujtqmitBEYxq1iuREbRWhicY0ahXJido6QhMFVsQnkhO1VYTWUeAc8fkGRG0dGT62cwcnCkVBEEVXE8Pkn6nSUpzNNQE1AEEo3uLDPS0KvIjPHxC1/T8jQ1HgRXwiOdHiRYaiQBHfRXKixYsMRYEivosgRYsXGYoCRXwXQYoWLzJcFLiIL7LUZaSyz85Sl5HKPjtLXUYq++wsdRmp7LOz1GWkst7OUpeRyno7S10mLOvtLHWZsKy3s+NlwrLezo6XCct6OzteJizr7ex4mbCs901YvoGF2x2Wb2DhdoflC8GF2x2Wb2BPuMPyDdxhvge8gYX5HZYv9Bfmd1i+0F+Y/wYO/L0khzC/4cBCf2F+w4ENLMxvOLDQX5jfNATlQC+Shmxg9KJpyAZGL5qGbGD0omnIBkZrmoZsYLQmacgGRmuahqA6aE3RH1QHrUn6s4HRmqY/GxitafqzgdGaxl0GhqcKdxkYnircZWB4qnCXgeGpwl0G9oQLdxkYjqsHbGA4rnCXgeG4wnsGhuMK7xkYjiu8Z2A4rvCegeG45JkGxh+LZxoYfyyeaWD8sXimgfHH4pkG9oSDZxoYb60HbGC8NXmmgfHW4rcGxluL3xoYby1+a2C8tfitgfHWAtYGBpgLWBsYYC5gbWCAuYC1gQHmAtYGBtQLWBsYUC9gbWBAvYC1gQH1AvQGBtQL0BsYUC9Ab2BAvQC9gQH1OpHgpIETBHkiwcBOENSJBAM7QVAnEgzsBEGcSDCwz5g8kWDgPjHh5wZ2YiJOJDhZ4cREnMBwssKJiTiB4WSFExN5AsPJCicm+gSGge/ExO8oydcenfm+s0KffTbqAZ9POXvXo6ucAAAAAElFTkSuQmCC"},76559:function(e,n,t){n.Z=t.p+"assets/images/more-tools-95332e81688548a5b37b1beae145b114.png"},46787:function(e,n,t){n.Z=t.p+"assets/images/performance-68231aec5ef1dfd26c1c11f354c36b35.png"},19342:function(e,n,t){n.Z=t.p+"assets/images/rendering-fps-meter-6c2b20cc653e516de5eb3b84b44b25a5.png"},20389:function(e,n,t){n.Z=t.p+"assets/images/triggers-detail-ba49e67fdaea99a9a084e6d0cb9f1e8d.png"},33234:function(e,n,t){n.Z=t.p+"assets/images/triggers-fe7b729b472fa8ea7d4d12a83c5f4f92.png"}}]);