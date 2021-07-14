(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{197:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return t?i.a.createElement(f,c(c({ref:n},p),{},{components:t})):i.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},255:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/sample-58cc8159045dc1ed9b6572530abe2cfc.png"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(197)),l={title:"\u5feb\u6162\u6307\u9488"},c={unversionedId:"algorithm/application/double-pointer",id:"algorithm/application/double-pointer",isDocsHomePage:!1,title:"\u5feb\u6162\u6307\u9488",description:"141.\xa0Linked List Cycle",source:"@site/docs/algorithm/application/double-pointer.md",slug:"/algorithm/application/double-pointer",permalink:"/docs/algorithm/application/double-pointer",version:"current",sidebar:"algorithm",previous:{title:"\u4e8c\u5206\u67e5\u627e",permalink:"/docs/algorithm/application/binary-search"},next:{title:"\u6590\u6ce2\u90a3\u5207\u6570\u5217",permalink:"/docs/algorithm/application/fibonacci"}},o=[{value:"141.\xa0Linked List Cycle",id:"141-linked-list-cycle",children:[]},{value:"142.Linked List Cycle II",id:"142linked-list-cycle-ii",children:[]}],p={rightToc:o};function u(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"141-linked-list-cycle"},"141.\xa0Linked List Cycle"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function (head) {\n    var p = head,\n        q = head;\n    while (q != null && q.next != null && q.next.next != null) {\n        p = p.next;\n        q = q.next.next;\n        if (p == q) {\n            return true;\n        }\n    }\n\n    return false;\n};\n")),Object(a.b)("h2",{id:"142linked-list-cycle-ii"},"142.Linked List Cycle II"),Object(a.b)("p",null,"\u8fd9\u9053\u9898\u7684\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u9996\u5148\u5feb\u6162\u6307\u9488\uff0c\u627e\u5230\u76f8\u9047\u70b9\uff0c\u786e\u8ba4\u6709\u73af\uff1b"),Object(a.b)("li",{parentName:"ol"},"\u6b64\u65f6\u4e00\u4e2a\u6307\u9488\u7ee7\u7eed\u4ece\u76f8\u9047\u70b9\u524d\u8fdb\uff0c\u4e00\u4e2a\u65b0\u7684\u6307\u9488\uff0c\u4ece head \u51fa\u53d1\u3002"),Object(a.b)("li",{parentName:"ol"},"\u4e24\u8005\u76f8\u9047\u70b9\uff0c\u4e3a\u7b2c\u4e00\u4e2a\u5165\u73af\u8282\u70b9\u3002")),Object(a.b)("p",null,"\u8bc1\u660e\u5982\u4e0b\uff1a  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{})," \u5feb\u6162\u6307\u9488\u5728\u76f8\u9047\u70b9\u76f8\u9047\u65f6\uff0c\u4e8c\u8005\u8d70\u8fc7\u7684\u8ddd\u79bb\u5206\u522b\u4e3a\uff1a  \n x1 + x2 + k1 * (x2 + x3)  \n x1 + x2 + k2 * (x2 + x3)  \n \u7531\u4e8c\u8005\u901f\u5ea6\u53ef\u77e5\uff0c  \n 2 * ( x1 + x2 +\xa0k1 * (x2 + x3)) =\xa0x1 + x2 + k2 * (x2 + x3);  \n x1 + x2 + 2 * k1 *\xa0(x2 + x3) =\xa0 k2 * (x2 + x3);  \n x1 - x3\xa0+ 2 * k1 *\xa0(x2 + x3) =\xa0\xa0(k2 - 1 ) * (x2 + x3);  \n x1 - x3\xa0=\xa0\xa0(k2 - 2 * k1 - 1 ) * (x2 + x3);\n")),Object(a.b)("p",null,"\u7531\u6b64\u53ef\u77e5\uff0cx1 - x3\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e8c\u6b21\u904d\u5386\u662f\u4e24\u4e2a\u6307\u9488\u8d70\u8fc7\u7684\u8ddd\u79bb\u5dee\uff0c\u6b63\u597d\u662f x2 + x3 \uff0c\u4e5f\u5c31\u662f\u73af\u7684\u957f\u5ea6\u7684\u6574\u6570\u500d\u3002\u7531\u6b64\uff0c\u4e24\u4e2a\u6307\u9488\u5fc5\u7136\u5728\u7b2c\u4e00\u4e2a\u5165\u73af\u7684\u8282\u70b9\u76f8\u9047\u3002  "),Object(a.b)("p",null,Object(a.b)("img",{alt:"20190108231208711.png",src:t(255).default})),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nconst detectCycle = function (head, pos) {\n    let p = head,\n        q = head;\n    while (q && q.next && q.next.next) {\n        p = p.next;\n        q = q.next.next;\n        if (p == q) {\n            while (head != p) {\n                p = p.next;\n                head = head.next;\n            }\n            return p;\n        }\n    }\n\n    return null;\n};\n")))}u.isMDXComponent=!0}}]);