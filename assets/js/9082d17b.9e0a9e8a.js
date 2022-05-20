"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7485],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2285:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"\u8377\u5170\u56fd\u65d7\u95ee\u9898"},l=void 0,u={unversionedId:"algorithm/application/dutch-flag",id:"algorithm/application/dutch-flag",isDocsHomePage:!1,title:"\u8377\u5170\u56fd\u65d7\u95ee\u9898",description:"\u8377\u5170\u56fd\u65d7\u95ee\u9898\xa0 \u53ef\u4ee5\u770b\u505a\u662f\u5feb\u6392\u7684\u53d8\u79cd\uff0c\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a",source:"@site/docs/algorithm/application/dutch-flag.md",sourceDirName:"algorithm/application",slug:"/algorithm/application/dutch-flag",permalink:"/docs/algorithm/application/dutch-flag",tags:[],version:"current",frontMatter:{title:"\u8377\u5170\u56fd\u65d7\u95ee\u9898"},sidebar:"algorithm",previous:{title:"\u6590\u6ce2\u90a3\u5207\u6570\u5217",permalink:"/docs/algorithm/application/fibonacci"},next:{title:"Leetcode \u70ed\u95e8300",permalink:"/docs/algorithm/application/leetcode-hot-300"}},p=[{value:"\u5e94\u7528",id:"\u5e94\u7528",children:[],level:3}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dutch_national_flag_problem"},"\u8377\u5170\u56fd\u65d7\u95ee\u9898"),"\xa0 \u53ef\u4ee5\u770b\u505a\u662f\u5feb\u6392\u7684\u53d8\u79cd\uff0c\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-basic"},"procedure three-way-partition(A : array of values, mid : value):\n    i \u2190 0\n    j \u2190 0\n    k \u2190 size of A\n\n    while j < k:\n        if A[j] < mid:\n            swap A[i] and A[j]\n            i \u2190 i + 1\n            j \u2190 j + 1\n        else if A[j] > mid:\n            k \u2190 k - 1\n            swap A[j] and A[k]\n        else:\n            j \u2190 j + 1\n")),(0,a.kt)("h3",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-colors/submissions/"},"leetcode 75 Sort Colors")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar sortColors = function (nums) {\n    let i = 0,\n        j = 0,\n        k = nums.length - 1;\n    while (j <= k) {\n        if (nums[j] < 1) {\n            swap(nums, i, j);\n            i++;\n            j++;\n        } else if (nums[j] > 1) {\n            swap(nums, j, k);\n            k--;\n        } else {\n            j++;\n        }\n    }\n    return nums;\n};\n\nconst swap = (arr, i, j) => {\n    let temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n};\n")))}m.isMDXComponent=!0}}]);