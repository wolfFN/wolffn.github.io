"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7112],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return i}});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var E=t.createContext({}),o=function(e){var n=t.useContext(E),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},u=function(e){var n=o(e.components);return t.createElement(E.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,E=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(a),i=l,T=c["".concat(E,".").concat(i)]||c[i]||m[i]||r;return a?t.createElement(T,p(p({ref:n},u),{},{components:a})):t.createElement(T,p({ref:n},u))}));function i(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=c;var s={};for(var E in n)hasOwnProperty.call(n,E)&&(s[E]=n[E]);s.originalType=e,s.mdxType="string"==typeof e?e:l,p[1]=s;for(var o=2;o<r;o++)p[o]=a[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4783:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return E},default:function(){return i},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var t=a(3117),l=a(102),r=(a(7294),a(3905)),p=["components"],s={title:"Table"},E=void 0,o={unversionedId:"data-science/db/table",id:"data-science/db/table",title:"Table",description:"Database",source:"@site/docs/data-science/db/table.md",sourceDirName:"data-science/db",slug:"/data-science/db/table",permalink:"/docs/data-science/db/table",draft:!1,tags:[],version:"current",frontMatter:{title:"Table"},sidebar:"Database",previous:{title:"\u5907\u4efd",permalink:"/docs/data-science/db/dump"},next:{title:"Data Type",permalink:"/docs/data-science/db/data-type"}},u={},m=[{value:"Database",id:"database",level:2},{value:"Table",id:"table",level:2},{value:"\u67e5\u770b Table \u7ed3\u6784",id:"\u67e5\u770b-table-\u7ed3\u6784",level:3},{value:"CREATE",id:"create",level:2},{value:"\u5217\u5c5e\u6027",id:"\u5217\u5c5e\u6027",level:3},{value:"INDEX",id:"index",level:3},{value:"\u6279\u91cf\u63d2\u5165\u6570\u636e",id:"\u6279\u91cf\u63d2\u5165\u6570\u636e",level:3},{value:"\u590d\u5236 Table",id:"\u590d\u5236-table",level:2},{value:"ALTER",id:"alter",level:2},{value:"\u4fee\u6539\u5217\u540d",id:"\u4fee\u6539\u5217\u540d",level:2},{value:"\u5220\u9664\u5217",id:"\u5220\u9664\u5217",level:2},{value:"\u5220\u9664 Table",id:"\u5220\u9664-table",level:2},{value:"\u8de8 DB \u8bbf\u95ee Table",id:"\u8de8-db-\u8bbf\u95ee-table",level:2}],c={toc:m};function i(e){var n=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# \u67e5\u770b\u6709\u54ea\u4e9bdb\nshow databases;\n\n# \u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684\u662f\u54ea\u4e2a db\nselect database();\n\n# \u9009\u62e9 db\nuse [database-name];\n\n# \u521b\u5efa db\nCREATE DATABASE [new-database-name]; \n\n# \u5220\u9664 db\nDELETE DATABASE [database-name];\n")),(0,r.kt)("h2",{id:"table"},"Table"),(0,r.kt)("p",null,"\u67e5\u770b\u5f53\u524d db \u4e2d\u7684 tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES;\n")),(0,r.kt)("h3",{id:"\u67e5\u770b-table-\u7ed3\u6784"},"\u67e5\u770b Table \u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESC employee;\n")),(0,r.kt)("h2",{id:"create"},"CREATE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employee\n(\n    empid VARCHAR(10),\n    name  VARCHAR(10),\n    age   INT\n);\n")),(0,r.kt)("h3",{id:"\u5217\u5c5e\u6027"},"\u5217\u5c5e\u6027"),(0,r.kt)("p",null,"\u521b\u5efa/\u66f4\u65b0\u5217\u65f6\uff0c\u5217\u540d\u3001\u6570\u636e\u7c7b\u578b\u540e\u53ef\u63d2\u5165\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PRIMARY KEY: \u4e3b\u952e"),(0,r.kt)("li",{parentName:"ul"},"UNIQUE: \u552f\u4e00\u952e"),(0,r.kt)("li",{parentName:"ul"},"AUTO_INCREMENT: \u81ea\u589e\uff0c\u53ef\u4e0e\u4e3b\u952e\u7ed3\u5408\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"DEFAULT ","[default value]",": \u9ed8\u8ba4\u503c")),(0,r.kt)("h3",{id:"index"},"INDEX"),(0,r.kt)("p",null,"\u7528\u4e8e\u52a0\u901f\u68c0\u7d22\u3002\u5728\u8bbe\u7f6e\u4e86\u4e3b\u952e\u7684\u60c5\u51b5\u4e0b\uff0c\u7d22\u5f15\u4f1a\u81ea\u52a8\u521b\u5efa\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u76f8\u540c\u503c\u8f83\u591a\uff08\u91cd\u590d\u503c\u8f83\u591a\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u5bf9\u68c0\u7d22\u6027\u80fd\u63d0\u5347\u6709\u9650\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5bf9\u66f4\u65b0\u901f\u5ea6\u53ef\u80fd\u4f1a\u6709\u5f71\u54cd\u3002\u5f53\u5bf9\u521b\u5efa\u4e86\u7d22\u5f15\u7684\u8868\u8fdb\u884c\u66f4\u65b0\u65f6\uff0c\u4e5f\u9700\u8981\u5bf9\u5df2\u7ecf\u5b58\u5728\u7684\u7d22\u5f15\u4fe1\u606f\u8fdb\u884c\u7ef4\u62a4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [index name] on [table name] ([column name]);\n-- example\nCREATE INDEX id ON tb1A (empid);\n\n-- \u663e\u793a\u7d22\u5f15\nSHOW INDEX FROM [table name];\n\n-- \u5220\u9664\u7d22\u5f15\nDROP INDEX [index name] on [table name];\n")),(0,r.kt)("h3",{id:"\u6279\u91cf\u63d2\u5165\u6570\u636e"},"\u6279\u91cf\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO employee (empid, name, age)\nVALUES ('A101', '\u4f50\u85e4', 40),\n       ('A102', '\u9ad8\u6865', 28),\n       ('A103', '\u4e2d\u5ddd', 20),\n       ('A104', '\u6e21\u8fb9', 23),\n       ('A105', '\u897f\u6cfd', 35);\n\n-- \u521b\u5efa\u8868\u683c\uff0c\u5e76\u63d2\u5165\u6570\u636e\nDROP TABLE IF EXISTS sales;\nCREATE TABLE sales (empid VARCHAR(20),sales INT,month INT);\nINSERT INTO sales VALUES ('A103',101,4);\nINSERT INTO sales VALUES ('A102',54,5);\nINSERT INTO sales VALUES ('A104',181,4);\nINSERT INTO sales VALUES ('A101',184,4);\nINSERT INTO sales VALUES ('A103', 17,5);\nINSERT INTO sales VALUES ('A101',300,5);\nINSERT INTO sales VALUES ('A102',205,6);\nINSERT INTO sales VALUES ('A104', 93,5);\nINSERT INTO sales VALUES ('A103', 12,6);\nINSERT INTO sales VALUES ('A107', 87,6);\n\n")),(0,r.kt)("h2",{id:"\u590d\u5236-table"},"\u590d\u5236 Table"),(0,r.kt)("p",null,"\u590d\u5236\u5217\u7ed3\u6784\u548c\u8bb0\u5f55\uff0c\u7136\u540e\u521b\u5efa\u65b0\u7684\u8868\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u80fd\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," \u7b49\u5c5e\u6027\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," \u7b49\u5c5e\u6027\u9700\u8981\u5728\u590d\u5236\u540e\u518d\u6b21\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [new table name] SELECT * from [source table name];\n-- example\nCREATE TABLE tb1A SELECT * from employee;\n\n-- \u590d\u5236\u90e8\u5206\u6570\u636e\nCREATE TABLE sales_copy\nSELECT * from sales\nORDER BY sales DESC\nLIMIT 4 OFFSET 1;\n")),(0,r.kt)("p",null,"\u590d\u5236\u8868\u7684\u5217\u7ed3\u6784\uff0c\u521b\u5efa\u65b0\u8868\u3002\u8fd9\u79cd\u65b9\u6cd5\u867d\u7136\u4e0d\u4f1a\u590d\u5236\u8868\u4e2d\u7684\u8bb0\u5f55\uff0c\u4f46\u662f\u4f1a\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," \u7b49\u5217\u7684\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [new table name] LIKE [source table name];\n-- example\nCREATE TABLE tb1B LIKE employee;\n")),(0,r.kt)("p",null,"\u590d\u5236\u5176\u4ed6\u8868\u7684\u8bb0\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [table name] SELECT * from [source table name];\n-- example\nINSERT INTO tb1B SELECT * from employee;\n\n-- \u590d\u5236\u6307\u5b9a\u5217\nINSERT INTO [table name](column name) SELECT (column name) from [source table name];\n-- example\nINSERT INTO tb1B(empid) SELECT name from employee;\n")),(0,r.kt)("h2",{id:"alter"},"ALTER"),(0,r.kt)("p",null,"\u6dfb\u52a0\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6dfb\u52a0\u5217\nALTER TABLE [table name] ADD [column name] [data type];\n-- example:\nALTER TABLE tb1A ADD birthday DATETIME;\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5217\u7684\u6570\u636e\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4fee\u6539\u5217\nALTER TABLE [table name] MODIFY [column name] [data type];\n-- example:\nALTER TABLE tb1A MODIFY name VARCHAR(100);\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5217\u7684\u987a\u5e8f  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tb1A ADD birthday DATETIME FIRST;\nALTER TABLE tb1A ADD birthday DATETIME AFTER name;\n\nALTER TABLE tb1A MODIFY birthday DATETIME FIRST;\nALTER TABLE tb1A MODIFY birthday DATETIME AFTER age;\n")),(0,r.kt)("h2",{id:"\u4fee\u6539\u5217\u540d"},"\u4fee\u6539\u5217\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [table-name] CHANGE [column name] [new column name] [data type];\n-- example\nALTER TABLE tb1A CHANGE birthday birth DATETIME;\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u5217"},"\u5220\u9664\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [table-name] DROP [column name];\n-- example\nALTER TABLE tb1A drop birthday;\n")),(0,r.kt)("h2",{id:"\u5220\u9664-table"},"\u5220\u9664 Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE tb1A;\n-- \u907f\u514d\u53d1\u751f\u9519\u8bef\nDROP TABLE IF EXISTS tb1A;\n\n-- \u5220\u9664\u6240\u6709\u8bb0\u5f55\nDELETE FROM [table name];\n")),(0,r.kt)("h2",{id:"\u8de8-db-\u8bbf\u95ee-table"},"\u8de8 DB \u8bbf\u95ee Table"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528use\u9009\u62e9\u6570\u636e\u5e93\u7684\u72b6\u6001\u4e0b\u4e5f\u80fd\u591f\u64cd\u4f5c\u5176\u4ed6\u6570\u636e\u5e93\u4e2d\u7684\u8868\u3002\u8fd9\u65f6\u53ef\u4ee5\u50cf\u201c\u6570\u636e\u5e93\u540d.\u8868\u540d\u201d\u8fd9\u6837\u628a\u201c\u6570\u636e\u5e93\u540d\u201d\u548c\u201c\u8868\u540d\u201d\u7528\u201c.\u201d\u8fde\u63a5\u8d77\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESC practice.employee;\n")))}i.isMDXComponent=!0}}]);