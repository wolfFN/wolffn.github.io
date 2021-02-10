(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(210)),l={title:"\u5907\u4efd"},c={unversionedId:"tools/mysql/dump",id:"tools/mysql/dump",isDocsHomePage:!1,title:"\u5907\u4efd",description:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",source:"@site/docs/tools/mysql/dump.md",slug:"/tools/mysql/dump",permalink:"/docs/tools/mysql/dump",version:"current",sidebar:"tools",previous:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/docs/tools/mysql/operation"},next:{title:"\u62d6\u5ef6\u75c7",permalink:"/docs/tools/soft/delay"}},s=[{value:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",id:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93",children:[]},{value:"\u5907\u4efd\u81f3\u6587\u4ef6",id:"\u5907\u4efd\u81f3\u6587\u4ef6",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93"},"\u5907\u4efd\u81f3\u65b0\u6570\u636e\u5e93"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u9996\u5148\u521b\u5efa\u76ee\u6807\u6570\u636e\u5e93(ps: password \u4e0e -p \u4e4b\u95f4\u65e0\u7a7a\u683c)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p[password]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE `[newdb-bane]` DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u4f7f\u7528mysqldump\u53camysql\u7684\u547d\u4ee4\u7ec4\u5408\uff0c\u4e00\u6b21\u6027\u5b8c\u6210\u590d\u5236")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mysqldump [src-db] -u root -p[password] --add-drop-table| mysql [desc-db] -u root -p[password]\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u662f\u8fdc\u7a0b\uff0c\u6dfb\u52a0-h\u7b49\u53c2\u6570\u5373\u53ef\u3002")),Object(o.b)("h3",{id:"\u5907\u4efd\u81f3\u6587\u4ef6"},"\u5907\u4efd\u81f3\u6587\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"// \u5907\u4efd\u6240\u6709\u6570\u636e\u5e93\uff0c\u5176\u4e2d\uff0c-B \u8868\u793a\u5305\u542b\u521b\u5efa\u6570\u636e\u5e93\u7684\u8bed\u53e5\u3002\nmysqldump -u [user-name] -p[passwd] -A -B> [file-name].sql\n\n// \u5907\u4efd\u6307\u5b9a\u5e93\u3001\u8868\uff0c\u5176\u4e2d\uff0c\u8868\u53ef\u9009\uff0c\u53ef\u4ee5\u5e76\u5217\u591a\u4e2a\uff0c\u7a7a\u683c\u9694\u5f00\u3002\nmysqldump -u [user-name] -p[passwd] [db-name] [table-name] > [file-name].sql\n\n\n// \u6062\u590d\nmysqldump -u [user-name] -p[passwd] [db-name] < [file-name].sql\n")))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=u(n),b=r,d=i["".concat(l,".").concat(b)]||i[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);