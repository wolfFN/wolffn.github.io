"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[2770],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2201:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Cache"},c=void 0,p={unversionedId:"general/cache",id:"general/cache",isDocsHomePage:!1,title:"Cache",description:"Defination",source:"@site/docs/general/cache.md",sourceDirName:"general",slug:"/general/cache",permalink:"/docs/general/cache",tags:[],version:"current",frontMatter:{title:"Cache"},sidebar:"General",previous:{title:"HTTPS",permalink:"/docs/general/https"},next:{title:"\u6027\u80fd",permalink:"/docs/general/performance"}},u=[{value:"Defination",id:"defination",children:[],level:2},{value:"\u5206\u7c7b",id:"\u5206\u7c7b",children:[],level:2},{value:"\u5982\u4f55\u5de5\u4f5c",id:"\u5982\u4f55\u5de5\u4f5c",children:[{value:"Html Meta Tags\u4e0eHttp Headers",id:"html-meta-tags\u4e0ehttp-headers",children:[],level:4},{value:"Expires",id:"expires",children:[],level:4},{value:"Cache-Control",id:"cache-control",children:[],level:4},{value:"Validators",id:"validators",children:[],level:4}],level:2},{value:"Tips",id:"tips",children:[],level:2},{value:"Reference:",id:"reference",children:[],level:2}],s={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"defination"},"Defination"),(0,l.kt)("p",null,"\u7f13\u5b58\u4f4d\u4e8eweb server \uff08\u53ef\u80fd\u662f\u4e00\u4e2a\u6216\u591a\u4e2a\uff09\u4e0e client\uff08\u540c\u6837\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u6216\u591a\u4e2a\uff09\u4e4b\u95f4\uff0c\u76d1\u6d4b\u8bf7\u6c42\uff0c\u4fdd\u5b58\u62f7\u8d1d\uff1b\u63a5\u4e0b\u6765\uff0c\u5982\u679c\u6709\u540c\u6837\u7684\u8bf7\u6c42\uff08url\uff09\uff0c\u76f4\u63a5\u8fd4\u56de\u62f7\u8d1d\uff0c\u907f\u514d\u518d\u6b21\u8bf7\u6c42\u670d\u52a1\u5668\u3002"),(0,l.kt)("h2",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Browser Caches",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5728\u786c\u76d8\uff0c\u4ec5\u4e3a\u5f53\u524d\u7528\u6237\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"Proxy Caches",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7531\u5927\u516c\u53f8\u6216ISP\uff08network administrators\uff09\u5728\u7f51\u7edc\u8282\u70b9\u90e8\u7f72\uff0c"))),(0,l.kt)("li",{parentName:"ul"},"Gateway Caches",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u670d\u52a1\uff08Webmasters\uff09\u90e8\u7f72\uff0c\u4ee3\u8868\u4e3aCDN")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u5de5\u4f5c"},"\u5982\u4f55\u5de5\u4f5c"),(0,l.kt)("h4",{id:"html-meta-tags\u4e0ehttp-headers"},"Html Meta Tags\u4e0eHttp Headers"),(0,l.kt)("p",null,"HTML Meta Tags\u7684\u65b9\u5f0f\u4ec5\u88ab\u4e00\u5c0f\u90e8\u5206\u6d4f\u89c8\u5668\u7f13\u5b58\u652f\u6301\uff0cproxy caches\u4e0d\u77e5\u9053\uff0c\u6240\u4ee5\u4e0d\u8981\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679cresponse's headers\u544a\u77e5Caches\u4e0d\u4fdd\u5b58\uff0c\u5219\u4e0d\u4fdd\u5b58"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bf7\u6c42\u7684\u662fauthenticated \u6216 secure(\u6bd4\u5982https)\u4fe1\u606f\uff0cshared caches\u4e0d\u4f1a\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u4ee5\u4e0b\u60c5\u51b5\uff0c\u5df2\u7f13\u5b58\u7684representation\u4f1a\u88ab\u89c6\u4f5cfresh\uff0c\u5373\u65e0\u9700\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u76f4\u63a5\u8fd4\u56de\u5ba2\u6237\u7aef\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6709\u7c7b\u4f3cexpiry time\u6216\u8005\u5176\u4ed6age-controlling header\uff0c\u4e14\u5904\u5728fresh period"),(0,l.kt)("li",{parentName:"ol"},"cache\u6700\u8fd1\u89c1\u5230\u8fc7\u8fd9\u4e2arepresentation\uff0c\u800c\u8be5\u8d44\u6e90\u6700\u8fd1\u7684\u66f4\u65b0\uff0c\u5728\u76f8\u5bf9\u5f88\u4e45\u4e4b\u524d\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u4e00\u4e2arepresentation\u8fc7\u671f\u65f6\uff0ccache\u4f1a\u8bf7\u6c42server\u8fdb\u884cvalidate\uff0c\u6216\u8005server\u4f1a\u544a\u77e5cache\uff0c\u7f13\u5b58\u662f\u5426\u53ef\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\uff0c\u6bd4\u5982\uff0c\u65ad\u7f51\uff0ccache\u53ef\u4ee5\u4e0d\u8bf7\u6c42server\uff0c\u76f4\u63a5\u8fd4\u56decache\u3002")),(0,l.kt)("h4",{id:"expires"},"Expires"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u57fa\u672c\u7684\u624b\u6bb5\uff0c\u544a\u77e5\u7f13\u5b58\uff0c\u5f53\u524drepresentation\u5728\u4ec0\u4e48\u65f6\u95f4\u8303\u56f4\u5185\u53ef\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e09\u79cd\u5f62\u5f0f\uff1a\u7edd\u5bf9\u65f6\u95f4\uff0c\u76f8\u5bf9\u4e8e\u6700\u540e\u4e00\u6b21\u83b7\u53d6\u7684\u65f6\u95f4\uff0c\u76f8\u5bf9\u4e8e\u6700\u540e\u4e00\u6b21\u4fee\u6539\u7684\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u5408\u4e8e\u9759\u6001\u56fe\u50cf\u7b49\uff0c\u4e0d\u592a\u6539\u53d8\u7684\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u552f\u4e00\u6709\u6548\u503c\uff0c\u662fGMT\u65f6\u533a\u7684Http date\u3002\u5176\u4ed6\u503c\u5747\u88ab\u89c6\u4e3a in the past\u3002")),(0,l.kt)("h4",{id:"cache-control"},"Cache-Control"),(0,l.kt)("p",null,"http1.1 \u4e2d\u5b9a\u4e49\uff0c\u53d6\u4ee3\u4e4b\u524d\u7684headers(Expires)\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"no-cache\uff1a\u5fc5\u987b\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u505a\u6821\u9a8c\u3002"),(0,l.kt)("li",{parentName:"ul"},"no-store\uff1a\u4e0d\u5141\u8bb8\u6d4f\u89c8\u5668\u548c\u4efb\u4f55\u4e2d\u95f4\u5a92\u4ecb\u5b58\u50a8\uff0c\u6bcf\u6b21\u90fd\u5fc5\u987b\u8bf7\u6c42\uff0c\u91cd\u65b0\u4e0b\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"public\uff1a\u5373\u4f7f\u662f\u5305\u542b\u8ba4\u8bc1\u5185\u5bb9\uff0c\u6216\u8005\u4e0d\u9002\u5408\u505aCache\u7684\u72b6\u6001\u7801\uff0c\u4f9d\u7136\u53ef\u4ee5\u7f13\u5b58\u3002\u4e00\u822c\u4e0d\u9700\u663e\u5f0f\u58f0\u660e\uff0cmax-age\u7b49\u540c\u6837\u610f\u5473\u7740\u53ef\u4ee5\u7f13\u5b58\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control: public, no-cache")," \u8868\u793a\uff0c\uff08proxy caches\u7b49\uff09\u5728\u91ca\u653e\u7f13\u5b58\u7684\u8d44\u6e90\u524d\uff0c\u5fc5\u987b\u63d0\u4ea4\u7528\u6237\u7684\u8ba4\u8bc1\u4fe1\u606f\u3002"))),(0,l.kt)("li",{parentName:"ul"},"private\uff1a\u5185\u5bb9\u4ec5\u5bf9\u5355\u4e2a\u7528\u6237\u53ef\u7f13\u5b58\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u53ef\u4ee5\u8fdb\u884c\u7f13\u5b58\uff0c\u800c\u4e2d\u95f4\u5a92\u4ecb\u4e0d\u53ef\u4ee5\u3002"),(0,l.kt)("li",{parentName:"ul"},"max-age\uff1a\u5185\u5bb9\u53ef\u4ee5\u590d\u7528\u7684\u6700\u5927\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3as\u3002")),(0,l.kt)("p",null,"\xa0 \xa0\xa0",(0,l.kt)("img",{alt:"image.png",src:a(3314).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"must-revalidate\uff1a\u544a\u8bc9\u6d4f\u89c8\u5668\u3001\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u672c\u5730\u526f\u672c\u8fc7\u671f\u524d\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u526f\u672c\uff1b\u672c\u5730\u526f\u672c\u4e00\u65e6\u8fc7\u671f\uff0c\u5fc5\u987b\u53bb\u6e90\u670d\u52a1\u5668\u8fdb\u884c\u6709\u6548\u6027\u6821\u9a8c\u3002Servers SHOULD send the must-revalidate directive if and only if failure to revalidate a request on the entity could result in incorrect operation, such as a silently unexecuted financial transaction.\xa0"),(0,l.kt)("li",{parentName:"ul"},"no-cache \u4e0e must-revalidate, max-age=0 \u7684\u533a\u522b\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8emust-revalidate\uff0c\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u670d\u52a1\u5668\u9a8c\u8bc1\u65f6\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u8bbf\u95ee\uff0c\u90a3\u4e48\u7f13\u5b58\u9700\u8981\u8fd4\u56de\u4e00\u4e2a504 Gateway Timeout\u7684\u9519\u8bef\uff08\u8fd9\u91cc\u5e94\u8be5\u662f\u50cfnginx\u8fd9\u6837\u7684\u4ee3\u7406\u6765\u8fd4\u56de\uff0c\u82e5\u662f\u6d4f\u89c8\u5668\u5982chrome\uff0c\u5c06\u76f4\u63a5\u662fERR_CONNECTION_REFUSED\uff0c\u5373\u65e0\u6cd5\u8bbf\u95ee\uff0c\u8fde\u63a5\u88ab\u62d2\u7edd\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8eno-cache\uff0c\u540c\u6837\u60c5\u51b5\uff0c\u5219\u4f1a\u7167\u6837\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u663e\u793a\u7ed9\u7528\u6237\uff08\u6709\u53ef\u80fd\u663e\u793a\u7684\u6bd4\u8f83\u65e7\u7684\u8d44\u6e90\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u4ee5must-revalidate\u7528\u5728\u5bf9\u4e8b\u52a1\u8981\u6c42\u6bd4\u8f83\u4e25\u82db\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff08\u6bd4\u5982\u652f\u4ed8\uff09\u3002")))),(0,l.kt)("h4",{id:"validators"},"Validators"),(0,l.kt)("p",null,"Last-modified/If-Modified-Since",(0,l.kt)("br",null),"ETag/If-not-match"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u8d2f\u7684Url"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u516c\u5171\u7684\u56fe\u7247\u5e93\uff0c\u6216\u8005\u5176\u4ed6\u8d44\u6e90\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e0d\u7ecf\u5e38\u53d8\u5316\u7684\u8d44\u6e90\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control: max-age")," \u8fdb\u884c\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u7ed9\u7ecf\u5e38\u66f4\u65b0\u7684\u9875\u9762\uff0c\u8bbe\u7f6e\u5408\u9002\u7684 max-age \u6216 expiration time\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u8d44\u6e90\uff0c\u5c24\u5176\u662f\u53ef\u4e0b\u8f7d\u7684\u6587\u4ef6\uff0c\u53d1\u751f\u6539\u53d8\uff0c\u6539\u53d8\u5176\u547d\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5bf9\u6587\u4ef6\u505a\u4e0d\u5fc5\u8981\u7684\u53d8\u66f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ec5\u5728\u5fc5\u987b\u5904\u4f7f\u7528cookie"),(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u5c11\u7684\u4f7f\u7528SSL"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://redbot.org/"},"REDbot"),"\u68c0\u6d4b\u4f60\u7684\u7f51\u9875")),(0,l.kt)("h2",{id:"reference"},"Reference:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mnot.net/cache_docs/"},"https://www.mnot.net/cache_docs/")))}m.isMDXComponent=!0},3314:function(e,t,a){t.Z=a.p+"assets/images/cache-ab6899d5f9cd9b4976ac5f388e0157fa.png"}}]);