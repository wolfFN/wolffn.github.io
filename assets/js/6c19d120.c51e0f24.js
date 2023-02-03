"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6027],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return N}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=m(n),N=l,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||r;return n?a.createElement(s,p(p({ref:t},o),{},{components:n})):a.createElement(s,p({ref:t},o))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),p=["components"],i={title:"Select"},d=void 0,m={unversionedId:"data-science/db/select",id:"data-science/db/select",title:"Select",description:"Select",source:"@site/docs/data-science/db/select.md",sourceDirName:"data-science/db",slug:"/data-science/db/select",permalink:"/docs/data-science/db/select",draft:!1,tags:[],version:"current",frontMatter:{title:"Select"},sidebar:"Database",previous:{title:"Data Type",permalink:"/docs/data-science/db/data-type"},next:{title:"Update",permalink:"/docs/data-science/db/update"}},o={},u=[{value:"Select",id:"select",level:2},{value:"alias",id:"alias",level:2},{value:"DISTINCT \u53bb\u91cd",id:"distinct-\u53bb\u91cd",level:2},{value:"WHERE",id:"where",level:2},{value:"LIKE",id:"like",level:2},{value:"AND OR",id:"and-or",level:2},{value:"LIMIT",id:"limit",level:2},{value:"CASE WHEN",id:"case-when",level:2},{value:"ORDER BY",id:"order-by",level:2},{value:"GROUP BY",id:"group-by",level:2},{value:"HAVING",id:"having",level:3},{value:"WHERE",id:"where-1",level:3},{value:"ORDER BY",id:"order-by-1",level:3},{value:"\u6267\u884c\u987a\u5e8f",id:"\u6267\u884c\u987a\u5e8f",level:3},{value:"\u8fd0\u7b97",id:"\u8fd0\u7b97",level:2},{value:"\u5b57\u7b26\u4e32\u64cd\u4f5c",id:"\u5b57\u7b26\u4e32\u64cd\u4f5c",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u7edf\u8ba1 count",id:"\u7edf\u8ba1-count",level:3}],k={toc:u};function N(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"select"},"Select"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6240\u6709\u5217\nSELECT * FROM [table name];\n-- \u6307\u5b9a\u5217\nSELECT [column name 1], [column name 2] FROM [table name];\n")),(0,r.kt)("p",null,"SELECT\u547d\u4ee4\u8fd8\u80fd\u7528\u4e8e\u663e\u793a\u4e0e\u6570\u636e\u5e93\u65e0\u5173\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select '\u65e0\u5173';\n")),(0,r.kt)("h2",{id:"alias"},"alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AS")," \u7528\u6765\u5728\u8f93\u51fa\u7ed3\u679c\u4e2d\uff0c\u7ed9\u5217\u91cd\u547d\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empid AS \u5de5\u53f7, name as \u59d3\u540d, age AS \u5e74\u9f84\nFROM employee;\n")),(0,r.kt)("h2",{id:"distinct-\u53bb\u91cd"},"DISTINCT \u53bb\u91cd"),(0,r.kt)("h2",{id:"where"},"WHERE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM employee WHERE age > 30;\n")),(0,r.kt)("h2",{id:"like"},"LIKE"),(0,r.kt)("p",null,"\u6a21\u7cca\u67e5\u8be2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- % \u4efb\u610f\u5b57\u7b26\u4e32\nSELECT * FROM employee WHERE empid LIKE 'A1%';\nSELECT * FROM employee WHERE empid NOT LIKE '%1';\n-- _ \u4efb\u610f\u5b57\u7b26\nSELECT * FROM employee WHERE empid LIKE 'A10_';\n")),(0,r.kt)("h2",{id:"and-or"},"AND OR"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," \u6df7\u5408\u4f7f\u7528\u65f6\uff0c\u4f1a\u4f18\u5148\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"AND"),"\u3002\u5982\u679c\u60f3\u5148\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," ,\u6211\u4eec\u9700\u8981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," \u628a\u60f3\u8981\u4f18\u5148\u5904\u7406\u7684\u5185\u5bb9\u62ec\u8d77\u6765\u3002"),(0,r.kt)("h2",{id:"limit"},"LIMIT"),(0,r.kt)("p",null,"\u9650\u5236\u8bb0\u5f55\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM employee LIMIT 3;\n")),(0,r.kt)("h2",{id:"case-when"},"CASE WHEN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empid, sales,\n    CASE\n        WHEN sales >= 100 THEN '\u9ad8'\n        WHEN sales >= 50 THEN '\u4e2d\u7b49'\n        ELSE '\u4f4e' \n    END AS \u8bc4\u4ef7\nFROM sales;\n")),(0,r.kt)("h2",{id:"order-by"},"ORDER BY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u9ed8\u8ba4\u4e3a\u5347\u5e8f\nSELECT * FROM employee ORDER BY age (ASC);\n\n-- \u964d\u5e8f\nSELECT * FROM employee ORDER BY age DESC;\n\n-- \u6700\u5927\u76843\u4e2a\nSELECT * FROM employee ORDER BY age DESC LIMIT 3;\n\n-- \u964d\u5e8f\u6392\u5217\uff0c\u7b2c2\u4e2a\u548c\u7b2c3\u4e2a\nSELECT * FROM employee ORDER BY age DESC LIMIT 2 OFFSET 1;\n")),(0,r.kt)("h2",{id:"group-by"},"GROUP BY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6bcf\u4e2a empid\uff0c\u4ec5\u663e\u793a\u4e00\u4e2a\u503c\nSELECT * FROM sales GROUP BY empid;\n\n-- \u6bcf\u4e2a empid \u51fa\u73b0\u6b21\u6570\nSELECT empid, COUNT(*) AS \u4e2a\u6570 FROM sales GROUP BY empid;\n\n-- \u6bcf\u4e2a empid, sales \u603b\u548c\nSELECT empid, SUM(sales) AS \u5408\u8ba1\nFROM sales\nGROUP BY empid;\n")),(0,r.kt)("h3",{id:"having"},"HAVING"),(0,r.kt)("p",null,"\u5148\u5206\u7ec4\uff0c\u518d\u9009\u53d6\u8bb0\u5f55\u3002\n\u663e\u793a\u5217 sales \u603b\u548c\u5927\u4e8e\u7b49\u4e8e 200 \u7684 empid\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empid, SUM(sales) AS \u5408\u8ba1\nFROM sales\nGROUP BY empid\nHAVING SUM(sales) >= 200;\n")),(0,r.kt)("h3",{id:"where-1"},"WHERE"),(0,r.kt)("p",null,"\u5148\u9009\u53d6\u8bb0\u5f55\uff0c\u518d\u5206\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empid, AVG(sales) AS \u5408\u8ba1\nFROM sales\nWHERE sales > 50\nGROUP BY empid;\n")),(0,r.kt)("h3",{id:"order-by-1"},"ORDER BY"),(0,r.kt)("p",null,"\u6392\u5e8f\u4f1a\u5728 SELECT\uff0cGROUP BY \u4e4b\u540e\u8fdb\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empid, AVG(sales) AS \u5408\u8ba1\nFROM sales\nGROUP BY empid\nORDER BY AVG(sales);\n")),(0,r.kt)("h3",{id:"\u6267\u884c\u987a\u5e8f"},"\u6267\u884c\u987a\u5e8f"),(0,r.kt)("p",null,"\u524d\u9762\u4ecb\u7ecd\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," \u5728\u4f7f\u7528\u65b9\u6cd5\u4e0a\u7684\u533a\u522b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u901a\u5e38\u4f1a\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u63cf\u8ff0\u3002\u201c\uff5e\u201d\u90e8\u5206\u662f\u53ef\u9009\u7684\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \uff5e FROM \uff5e WHERE \uff5e GROUP BY \uff5e HAVING \uff5e ORDER BY \uff5e\n")),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u5b9e\u9645\u7684\u6267\u884c\u987a\u5e8f\u5374\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"FROM \uff5e\u2192 WHERE \uff5e\u2192 GROUP BY \uff5e\u2192 HAVING \uff5e\u2192 SELECT \uff5e\u2192 ORDER BY \uff5e\n")),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5206\u7ec4\u4e4b\u524d\u4f1a\u5148\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),"\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," \u6267\u884c\u7684\u5bf9\u8c61\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5206\u7ec4\u540e\u7684\u7ed3\u679c\u3002\u53e6\u5916\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u91cd\u65b0\u6392\u5217\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u7b97"},"\u8fd0\u7b97"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DIV"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9664\uff0c\u7ed3\u679c\u53d6\u6574\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%, MOD"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u4f59")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"=, >, <, >=, <="),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f0f\u542b\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7b49\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")," IN ",(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:null},"A \u5728 B \u4fe9\u8868\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")," NOT IN ",(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:null},"A  \u4e0d\u5728 B \u4fe9\u8868\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")," BETWEEN ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," AND ",(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:null},"A \u4ecb\u4e8e B \u4e0e C \u4e4b\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")," NOT BETWEEN ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," AND ",(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:null},"A \u4e0d\u5728 B \u4e0e C \u4e4b\u95f4")))),(0,r.kt)("h2",{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c"},"\u5b57\u7b26\u4e32\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8fde\u63a5\u5b57\u7b26\u4e32\nSELECT CONCAT(empid, ' ', name, '\u5148\u751f') FROM employee;\n-- \u6700\u53f3\u8fb9 2 \u4e2a\u5b57\u7b26\nSELECT RIGHT(empid, 2) FROM employee;\n-- \u6700\u5de6\u8fb9 2 \u4e2a\u5b57\u7b26\nSELECT RIGHT(empid, 2) FROM employee;\n-- \u7b2c\u4e8c\u4e2a\u5b57\u7b26\u5f00\u59cb\u7684\u4e09\u4e2a\u5b57\u7b26\nSELECT SUBSTRING(empid, 2, 3) FROM employee;\n-- \u91cd\u590d\nSELECT REPEAT('.', age) FROM employee;\n-- \u53cd\u8fc7\u6765\nSELECT REVERSE(name) FROM employee;\n")),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AVG"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u5747\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c42\u548c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u03c0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NOW"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7248\u672c\nSELECT VERSION();\n-- \u6570\u636e\u5e93\nSELECT DATABASE();\n-- \u5f53\u524d\u7528\u6237\nSELECT USER();\n-- \u5b57\u7b26\u7684\u7f16\u7801\nSELECT CHARSET([\u5b57\u7b26]);\n")),(0,r.kt)("h3",{id:"\u7edf\u8ba1-count"},"\u7edf\u8ba1 count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT driver_id, COUNT(driver_id) AS TRIP_COUNT\nFROM trips\nWHERE driver_id IN ('1', '2', '3')\nGROUP BY driver_id;\n")))}N.isMDXComponent=!0}}]);