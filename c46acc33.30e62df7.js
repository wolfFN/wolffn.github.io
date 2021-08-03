(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),i=(a(0),a(197)),c={title:"Hapi"},o={unversionedId:"library/hapi",id:"library/hapi",isDocsHomePage:!1,title:"Hapi",description:"TODO",source:"@site/docs/library/hapi.md",slug:"/library/hapi",permalink:"/docs/library/hapi",version:"current",sidebar:"Library",previous:{title:"Node",permalink:"/docs/library/node"},next:{title:"sequelize",permalink:"/docs/library/sequelize"}},p=[{value:"TODO",id:"todo",children:[]},{value:"Boilerplates",id:"boilerplates",children:[]},{value:"\u6388\u6743",id:"\u6388\u6743",children:[{value:"scope",id:"scope",children:[]},{value:"acl",id:"acl",children:[]},{value:"rbac",id:"rbac",children:[]}]},{value:"More",id:"more",children:[]}],b={rightToc:p};function l(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"todo"},"TODO"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize"}),"https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize")),Object(i.b)("h1",{id:"lifecycle"},"Lifecycle"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Hapi LifeCircle.png",src:a(320).default})),Object(i.b)("h1",{id:"plugins"},"plugins"),Object(i.b)("p",null,"Methods and decorations do have different intended purposes. In short:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"plugins should utilize decorations to extend the framework with additional functionality/configuration."),Object(i.b)("li",{parentName:"ul"},"plugins should utilize methods in order to implement application business logic, reach out to external services, and interface with hapi's caching layer.")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/hapijs/vision/blob/master/lib/index.js"}),"vision")," providing the ability to configure a view manager and render templates using a view manager"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/outmoded/hapijs.com/blob/master/lib/github.js#L221-L247"}),"hapijs.com's services")," that reach out to github to render the API documentation and cache the result")),Object(i.b)("h2",{id:"boilerplates"},"Boilerplates"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rjmreis/hapi-api"}),"https://github.com/rjmreis/hapi-api")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 api/\n|   \u251c\u2500\u2500 handlers/\n|   |   \u2514\u2500\u2500 home.js   * Sample handler\n|   \u2514\u2500\u2500 index.js      * REST routes\n\u251c\u2500\u2500 config/\n|   \u251c\u2500\u2500 manifest.js   * Server configuration\n|   \u2514\u2500\u2500 secret.js     * Secret key\n\u251c\u2500\u2500 test/\n|   \u2514\u2500\u2500 api.js        * API test\n\u251c\u2500\u2500 server.js         * Server definition (uses the Glue plugin to read a manifest)\n\u251c\u2500\u2500 auth.js           * Auth strategies\n\u2514\u2500\u2500 package.json\n")),Object(i.b)("p",null,"\u4ee5 server.js \u4f5c\u4e3a\u5165\u53e3\uff0c\u914d\u5408 auth.js \u7684\u6388\u6743\u7b56\u7565\uff0c\u5c06\u5177\u4f53\u7684 api \u4e22\u5230 api \u76ee\u5f55\uff0c\u7ed3\u6784\u8fd8\u662f\u76f8\u5f53\u6e05\u6670\u7684\u3002 \xa0config \u548c test \u9075\u5faa\u4e86\u5927\u90e8\u5206\u6846\u67b6\u7684\u914d\u7f6e\uff0c\u6bd4\u8f83\u6709\u610f\u601d\u7684 config/secret.js\uff0cSecret key \u5728\u90e8\u7f72\u7684\u65f6\u5019\u9700\u8981\u914d\u7f6e\u7684\uff0c\u5f88\u591a\u6846\u67b6\u662f\u6ca1\u6709\u505a\u8fd9\u4e2a\u7684\u3002"),Object(i.b)("p",null,"\u4ece\u8fd9\u4e2a\u76ee\u5f55\u770b\uff0c\u6bd4\u8f83\u9002\u5408\u5fae\u670d\u52a1\u7c7b\u7684\u5c0f\u800c\u7f8e\u7684 api \u670d\u52a1\u3002"),Object(i.b)("h2",{id:"\u6388\u6743"},"\u6388\u6743"),Object(i.b)("h3",{id:"scope"},"scope"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.andyet.com/2015/06/16/harnessing-hapi-scopes/"}),"hapi scope blog"),Object(i.b)("br",{parentName:"p"}),"\n","",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec"}),"Authentication and Authorization")),Object(i.b)("h3",{id:"acl"},"acl"),Object(i.b)("p",null,"\u6bcf\u4e00\u9879\u8d44\u6e90\uff0c\u90fd\u914d\u6709\u4e00\u4e2a\u5217\u8868\uff0c\u8fd9\u4e2a\u5217\u8868\u8bb0\u5f55\u7684\u5c31\u662f\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u5bf9\u8fd9\u9879\u8d44\u6e90\u6267\u884c CRUD \u4e2d\u7684\u90a3\u4e9b\u64cd\u4f5c\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u5f53\u7cfb\u7edf\u8bd5\u56fe\u8bbf\u95ee\u8fd9\u9879\u8d44\u6e90\u65f6\uff0c\u4f1a\u9996\u5148\u68c0\u67e5\u8fd9\u4e2a\u5217\u8868\u4e2d\u662f\u5426\u6709\u5173\u4e8e\u5f53\u524d\u7528\u6237\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4ece\u800c\u786e\u5b9a\u5f53\u524d\u7528\u6237\u53ef\u5426\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/toymachiner62/hapi-authorization"}),"hapi-authorization")),Object(i.b)("h3",{id:"rbac"},"rbac"),Object(i.b)("p",null,"rbac \u662f\u628a\u7528\u6237\u6309\u89d2\u8272\u8fdb\u884c\u5f52\u7c7b\uff0c\u901a\u8fc7\u7528\u6237\u7684\u89d2\u8272\u6765\u786e\u5b9a\u7528\u6237\u80fd\u5426\u9488\u5bf9\u67d0\u9879\u8d44\u6e90\u8fdb\u884c\u67d0\u9879\u64cd\u4f5c\u3002 \xa0rbac \u76f8\u5bf9\u4e8e acl \u6700\u5927\u7684\u4f18\u52bf\u5c31\u662f\u5b83\u7b80\u5316\u4e86\u7528\u6237\u4e0e\u6743\u9650\u7684\u7ba1\u7406\uff0c\u901a\u8fc7\u5bf9\u7528\u6237\u8fdb\u884c\u5206\u7c7b\uff0c\u4f7f\u5f97\u89d2\u8272\u4e0e\u6743\u9650\u5173\u8054\u8d77\u6765\uff0c\u800c\u7528\u6237\u4e0e\u6743\u9650\u53d8\u6210\u4e86\u95f4\u63a5\u5173\u8054\u3002 \xa0rbac \u6a21\u578b\u4f7f\u5f97\u8bbf\u95ee\u63a7\u5236\uff0c\u7279\u522b\u662f\u5bf9\u7528\u6237\u7684\u6388\u6743\u7ba1\u7406\u53d8\u5f97\u975e\u5e38\u7b80\u5355\u548c\u6613\u4e8e\u7ef4\u62a4\uff0c\u56e0\u6b64\u6709\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/franciscogouveia/hapi-rbac"}),"hapi-rbac"),Object(i.b)("br",{parentName:"p"}),"\n","",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/franciscogouveia/hapi-rbac/blob/master/API.md"}),"API")),Object(i.b)("h2",{id:"more"},"More"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hapijs/lab"}),"lab")," - Node test utility.",Object(i.b)("br",{parentName:"p"}),"\n","",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/danielb2/blipp"}),"blipp")," - Simple hapi plugin to display the routes table at startup."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hapipal.com/"}),"https://hapipal.com/")))}l.isMDXComponent=!0},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(a),h=r,d=s["".concat(c,".").concat(h)]||s[h]||u[h]||i;return a?n.a.createElement(d,o(o({ref:t},b),{},{components:a})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},320:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/life-circle-29f16a656de7cd27ffcbccbc6846730a.png"}}]);