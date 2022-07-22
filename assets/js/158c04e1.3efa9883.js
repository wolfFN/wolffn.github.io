"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1968],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,x=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return t?r.createElement(x,a(a({ref:n},u),{},{components:t})):r.createElement(x,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3743:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=t(3117),i=t(102),l=(t(7294),t(3905)),a=["components"],o={title:"\u5feb\u6162\u6307\u9488"},c=void 0,p={unversionedId:"algorithm/application/double-pointer",id:"algorithm/application/double-pointer",title:"\u5feb\u6162\u6307\u9488",description:"141.\xa0Linked List Cycle",source:"@site/docs/algorithm/application/double-pointer.md",sourceDirName:"algorithm/application",slug:"/algorithm/application/double-pointer",permalink:"/docs/algorithm/application/double-pointer",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5feb\u6162\u6307\u9488"},sidebar:"algorithm",previous:{title:"\u4e8c\u5206\u67e5\u627e",permalink:"/docs/algorithm/application/binary-search"},next:{title:"\u6590\u6ce2\u90a3\u5207\u6570\u5217",permalink:"/docs/algorithm/application/fibonacci"}},u={},s=[{value:"141.\xa0Linked List Cycle",id:"141linked-list-cycle",level:2},{value:"142.Linked List Cycle II",id:"142linked-list-cycle-ii",level:2}],d={toc:s};function f(e){var n=e.components,o=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"141linked-list-cycle"},"141.\xa0Linked List Cycle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function (head) {\n    var p = head,\n        q = head;\n    while (q != null && q.next != null && q.next.next != null) {\n        p = p.next;\n        q = q.next.next;\n        if (p == q) {\n            return true;\n        }\n    }\n\n    return false;\n};\n")),(0,l.kt)("h2",{id:"142linked-list-cycle-ii"},"142.Linked List Cycle II"),(0,l.kt)("p",null,"\u8fd9\u9053\u9898\u7684\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148\u5feb\u6162\u6307\u9488\uff0c\u627e\u5230\u76f8\u9047\u70b9\uff0c\u786e\u8ba4\u6709\u73af\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u4e00\u4e2a\u6307\u9488\u7ee7\u7eed\u4ece\u76f8\u9047\u70b9\u524d\u8fdb\uff0c\u4e00\u4e2a\u65b0\u7684\u6307\u9488\uff0c\u4ece head \u51fa\u53d1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e24\u8005\u76f8\u9047\u70b9\uff0c\u4e3a\u7b2c\u4e00\u4e2a\u5165\u73af\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u8bc1\u660e\u5982\u4e0b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," \u5feb\u6162\u6307\u9488\u5728\u76f8\u9047\u70b9\u76f8\u9047\u65f6\uff0c\u4e8c\u8005\u8d70\u8fc7\u7684\u8ddd\u79bb\u5206\u522b\u4e3a\uff1a  \n x1 + x2 + k1 * (x2 + x3)  \n x1 + x2 + k2 * (x2 + x3)  \n \u7531\u4e8c\u8005\u901f\u5ea6\u53ef\u77e5\uff0c  \n 2 * ( x1 + x2 +\xa0k1 * (x2 + x3)) =\xa0x1 + x2 + k2 * (x2 + x3);  \n x1 + x2 + 2 * k1 *\xa0(x2 + x3) =\xa0 k2 * (x2 + x3);  \n x1 - x3\xa0+ 2 * k1 *\xa0(x2 + x3) =\xa0\xa0(k2 - 1 ) * (x2 + x3);  \n x1 - x3\xa0=\xa0\xa0(k2 - 2 * k1 - 1 ) * (x2 + x3);\n")),(0,l.kt)("p",null,"\u7531\u6b64\u53ef\u77e5\uff0cx1 - x3\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e8c\u6b21\u904d\u5386\u662f\u4e24\u4e2a\u6307\u9488\u8d70\u8fc7\u7684\u8ddd\u79bb\u5dee\uff0c\u6b63\u597d\u662f x2 + x3 \uff0c\u4e5f\u5c31\u662f\u73af\u7684\u957f\u5ea6\u7684\u6574\u6570\u500d\u3002\u7531\u6b64\uff0c\u4e24\u4e2a\u6307\u9488\u5fc5\u7136\u5728\u7b2c\u4e00\u4e2a\u5165\u73af\u7684\u8282\u70b9\u76f8\u9047\u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"20190108231208711.png",src:t(1569).Z,width:"1023",height:"407"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nconst detectCycle = function (head, pos) {\n    let p = head,\n        q = head;\n    while (q && q.next && q.next.next) {\n        p = p.next;\n        q = q.next.next;\n        if (p == q) {\n            while (head != p) {\n                p = p.next;\n                head = head.next;\n            }\n            return p;\n        }\n    }\n\n    return null;\n};\n")))}f.isMDXComponent=!0},1569:function(e,n,t){n.Z=t.p+"assets/images/sample-58cc8159045dc1ed9b6572530abe2cfc.png"}}]);