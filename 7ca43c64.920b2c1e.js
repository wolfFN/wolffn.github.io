(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),c=(n(0),n(197)),o={title:"\u5907\u4efd"},p={unversionedId:"data-science/db/dump",id:"data-science/db/dump",isDocsHomePage:!1,title:"\u5907\u4efd",description:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",source:"@site/docs/data-science/db/dump.md",slug:"/data-science/db/dump",permalink:"/docs/data-science/db/dump",version:"current",sidebar:"Database",previous:{title:"Table",permalink:"/docs/data-science/db/operation"},next:{title:"PostgreSQL",permalink:"/docs/data-science/db/postgreSQL"}},l=[{value:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",id:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",children:[]},{value:"\u5907\u4efd\u81f3\u6587\u4ef6",id:"\u5907\u4efd\u81f3\u6587\u4ef6",children:[]}],s={rightToc:l};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93"},"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u9996\u5148\u521b\u5efa\u76ee\u6807\u6570\u636e\u5e93(ps: password \u4e0e -p \u4e4b\u95f4\u65e0\u7a7a\u683c)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mysql -u root -p[password]\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE DATABASE `[newdb-bane]` DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528mysqldump\u53camysql\u7684\u547d\u4ee4\u7ec4\u5408\uff0c\u4e00\u6b21\u6027\u5b8c\u6210\u590d\u5236")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mysqldump [src-db] -u root -p[password] --add-drop-table| mysql [desc-db] -u root -p[password]\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u662f\u8fdc\u7a0b\uff0c\u6dfb\u52a0-h\u7b49\u53c2\u6570\u5373\u53ef\u3002")),Object(c.b)("h3",{id:"\u5907\u4efd\u81f3\u6587\u4ef6"},"\u5907\u4efd\u81f3\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"// \u5907\u4efd\u6240\u6709\u6570\u636e\u5e93\uff0c\u5176\u4e2d\uff0c-B \u8868\u793a\u5305\u542b\u521b\u5efa\u6570\u636e\u5e93\u7684\u8bed\u53e5\u3002\nmysqldump -u [user-name] -p[passwd] -A -B> [file-name].sql\n\n// \u5907\u4efd\u6307\u5b9a\u5e93\u3001\u8868\uff0c\u5176\u4e2d\uff0c\u8868\u53ef\u9009\uff0c\u53ef\u4ee5\u5e76\u5217\u591a\u4e2a\uff0c\u7a7a\u683c\u9694\u5f00\u3002\nmysqldump -u [user-name] -p[passwd] [db-name] [table-name] > [file-name].sql\n\n\n// \u6062\u590d\nmysqldump -u [user-name] -p[passwd] [db-name] < [file-name].sql\n")))}i.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);