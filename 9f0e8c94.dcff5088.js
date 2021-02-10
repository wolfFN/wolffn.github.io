(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{156:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(210)),i={title:"\u6761\u4ef6\u8bed\u53e5"},c={unversionedId:"snippets/js/conditional",id:"snippets/js/conditional",isDocsHomePage:!1,title:"\u6761\u4ef6\u8bed\u53e5",description:"Better Conditionals",source:"@site/docs/snippets/js/conditional.md",slug:"/snippets/js/conditional",permalink:"/docs/snippets/js/conditional",version:"current",sidebar:"snippets",next:{title:"\u5b9e\u7528\u51fd\u6570",permalink:"/docs/snippets/js/functions"}},l=[{value:"Array.includes",id:"arrayincludes",children:[]},{value:"Return Early",id:"return-early",children:[]},{value:"Use Default Function Parameters And Destructuring",id:"use-default-function-parameters-and-destructuring",children:[]},{value:"Favor Map/Object Literal than Switch Statement",id:"favor-mapobject-literal-than-switch-statement",children:[]},{value:"Array.filter, Array.every, Array.any",id:"arrayfilter-arrayevery-arrayany",children:[]}],s={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"better-conditionals"},"Better Conditionals"),Object(o.b)("h3",{id:"arrayincludes"},"Array.includes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function test(fruit) {\n    if (fruit == 'apple' || fruit == 'strawberry') {\n        console.log('red');\n    }\n}\n\nfunction test(fruit) {\n    // extract conditions to array\n    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];\n    if (redFruits.includes(fruit)) {\n        console.log('red');\n    }\n}\n")),Object(o.b)("h3",{id:"return-early"},"Return Early"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"/_ return early when invalid conditions found _/;\n\nfunction test(fruit, quantity) {\n    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];\n\n    if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early\n    if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red\n\n    console.log('red');\n\n    // condition 3: must be big quantity\n    if (quantity > 10) {\n        console.log('big quantity');\n    }\n}\n")),Object(o.b)("h3",{id:"use-default-function-parameters-and-destructuring"},"Use Default Function Parameters And Destructuring"),Object(o.b)("h3",{id:"favor-mapobject-literal-than-switch-statement"},"Favor Map/Object Literal than Switch Statement"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function test(color) {\n    // use switch case to find fruits in color\n    switch (color) {\n        case 'red':\n            return ['apple', 'strawberry'];\n        case 'yellow':\n            return ['banana', 'pineapple'];\n        case 'purple':\n            return ['grape', 'plum'];\n        default:\n            return [];\n    }\n}\n\n// use object literal to find fruits in color\nconst fruitColor = {\n    red: ['apple', 'strawberry'],\n    yellow: ['banana', 'pineapple'],\n    purple: ['grape', 'plum'],\n};\n\nfunction test(color) {\n    return fruitColor[color] || [];\n}\n\n// use Map to find fruits in color\nconst fruitColor = new Map()\n    .set('red', ['apple', 'strawberry'])\n    .set('yellow', ['banana', 'pineapple'])\n    .set('purple', ['grape', 'plum']);\n\nfunction test(color) {\n    return fruitColor.get(color) || [];\n}\n")),Object(o.b)("h3",{id:"arrayfilter-arrayevery-arrayany"},"Array.filter, Array.every, Array.any"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const fruits = [\n    { name: 'apple', color: 'red' },\n    { name: 'banana', color: 'yellow' },\n    { name: 'grape', color: 'purple' },\n];\n\nfunction test(color) {\n    // use Array filter to find fruits in color\n    return fruits.filter(f => f.color == color);\n}\n\nfunction test() {\n    // condition: short way, all fruits must be red\n    const isAllRed = fruits.every(f => f.color == 'red');\n    console.log(isAllRed); // false\n}\n\nfunction test() {\n    // condition: if any fruit is red\n    const isAnyRed = fruits.some(f => f.color == 'red');\n    console.log(isAnyRed); // true\n}\n")))}u.isMDXComponent=!0},210:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return y}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=t,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(y,c(c({ref:n},s),{},{components:r})):a.a.createElement(y,c({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);