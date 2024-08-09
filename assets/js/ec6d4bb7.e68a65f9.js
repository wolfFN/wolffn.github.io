"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6239],{3905:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return k}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=i(l),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return l?n.createElement(k,u(u({ref:t},s),{},{components:l})):n.createElement(k,u({ref:t},s))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,u=new Array(r);u[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<r;i++)u[i]=l[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},43085:function(e,t,l){l.r(t),l.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=l(87462),a=l(63366),r=(l(67294),l(3905)),u=["components"],o={title:"yt-dlp \u4e0b\u8f7d\u89c6\u9891",tags:["tools","youtube"]},p=void 0,i={permalink:"/blog/2023/11/24/yt-dlp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2023-11-24-yt-dlp.md",source:"@site/blog/2023-11-24-yt-dlp.md",title:"yt-dlp \u4e0b\u8f7d\u89c6\u9891",description:"\u7f18\u8d77",date:"2023-11-24T00:00:00.000Z",formattedDate:"November 24, 2023",tags:[{label:"tools",permalink:"/blog/tags/tools"},{label:"youtube",permalink:"/blog/tags/youtube"}],readingTime:2.425,hasTruncateMarker:!0,authors:[],frontMatter:{title:"yt-dlp \u4e0b\u8f7d\u89c6\u9891",tags:["tools","youtube"]},prevItem:{title:"how to think in writing",permalink:"/blog/2024/08/09/think-in-writing"},nextItem:{title:"Xcode \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e",permalink:"/blog/2023/11/12/xcode"}},s={authorsImageUrls:[]},c=[{value:"\u7f18\u8d77",id:"\u7f18\u8d77",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"\u4e0b\u8f7d\u6307\u5b9a\u683c\u5f0f\u89c6\u9891/\u97f3\u9891",id:"\u4e0b\u8f7d\u6307\u5b9a\u683c\u5f0f\u89c6\u9891\u97f3\u9891",level:4},{value:"\u4ec5\u4e0b\u8f7d\u5b57\u5e55",id:"\u4ec5\u4e0b\u8f7d\u5b57\u5e55",level:4},{value:"\u643a\u5e26\u6d4f\u89c8\u5668\u7f13\u5b58",id:"\u643a\u5e26\u6d4f\u89c8\u5668\u7f13\u5b58",level:4}],m={toc:c},d="wrapper";function k(e){var t=e.components,o=(0,a.Z)(e,u);return(0,r.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7f18\u8d77"},"\u7f18\u8d77"),(0,r.kt)("p",null,"\u6700\u8fd1 youtube \u5bf9\u4e8e\u4e0b\u8f7d\u5de5\u5177\u8fdb\u884c\u4e86\u9650\u901f, ",(0,r.kt)("inlineCode",{parentName:"p"},"youtube-dl")," \u4e0b\u8f7d\u4ec5\u6709\u51e0\u5341 k \u7684\u901f\u5ea6.  "),(0,r.kt)("p",null,"\u4e3a\u4e86\u7a81\u7834\u9650\u5236, \u627e\u5230\u4e00\u4e2a\u5f00\u6e90\u5de5\u5177, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp"},"yt-dlp"),". \u4e0d\u9650\u901f \u4e14 \u8bed\u6cd5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"youtube-dl")," \u76f8\u4f3c. \u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5176\u7528\u6cd5."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Mac \u76f4\u63a5\u7528 homebrew \u5373\u53ef\u5b89\u88c5\u3002\u5176\u4ed6\u7cfb\u7edf\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp/wiki/Installation"},"\u5b98\u65b9 wiki"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install yt-dlp\nbrew install ffmpeg\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"\u6700\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp [url]\n")),(0,r.kt)("p",null,"\u76f8\u5f53\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},'yt-dlp -f "bv*+ba/b" [url]'),", \u4e0b\u8f7d\u5e26\u542b\u97f3\u9891\u7684\u3001\u8d28\u91cf\u6700\u597d\u7684\u89c6\u9891\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4e0b\u8f7d\u6700\u597d\u7684\u89c6\u9891\u3001\u97f3\u9891\uff0c\u518d\u5408\u5e76\u3002"),(0,r.kt)("p",null,"\u5e26\u5b57\u5e55  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u4f73\u683c\u5f0f\u89c6\u9891 (webm \u6269\u5c55\u540d)"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u4f73\u683c\u5f0f\u97f3\u9891 (m4a \u6269\u5c55\u540d)"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5408\u5e76"),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u81ea\u52a8\u751f\u6210\u7684\u5b57\u5e55\uff0c\u4e0d\u5199\u5165\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp -f 'bv[ext=webm]+ba[ext=m4a]' --embed-metadata --merge-output-format mp4 --write-auto-subs [url]\n")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u4e0b\u8f7d\u5bf9\u5e94\u8bed\u8a00\u7684\u5b57\u5e55, \u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp -f 'bv[ext=webm]+ba[ext=m4a]' --embed-metadata --merge-output-format mp4 --sub-langs [lang-name] [url]\n")),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("h4",{id:"\u4e0b\u8f7d\u6307\u5b9a\u683c\u5f0f\u89c6\u9891\u97f3\u9891"},"\u4e0b\u8f7d\u6307\u5b9a\u683c\u5f0f\u89c6\u9891/\u97f3\u9891"),(0,r.kt)("p",null,"\u5217\u51fa\u89c6\u9891\u6240\u6709\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp -F [url]\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u5230\u683c\u5f0f\u5217\u8868\u5982\u4e0b:\n",(0,r.kt)("img",{alt:"image",src:l(92898).Z,width:"1892",height:"2376"})),(0,r.kt)("p",null,"\u5176\u4e2d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"248 \u4e3a\u8d28\u91cf\u6700\u597d\u7684\u89c6\u9891"),(0,r.kt)("li",{parentName:"ul"},"137 \u4e3a\u8d28\u91cf\u6700\u597d\u7684\uff0cavc \u7f16\u7801\u89c6\u9891\uff08mac \u53ef\u9884\u89c8\uff09"),(0,r.kt)("li",{parentName:"ul"},"399 \u4e3a\u8d28\u91cf\u6700\u597d\u7684\uff0cav01 \u7f16\u7801\u89c6\u9891\uff08mac \u53ef\u9884\u89c8\uff0c\u4e14\u4f53\u79ef\u66f4\u5c0f\uff09"),(0,r.kt)("li",{parentName:"ul"},"251 \u4e3a\u8d28\u91cf\u6700\u597d\u7684\u97f3\u9891"),(0,r.kt)("li",{parentName:"ul"},"140 \u4e3a\u8d28\u91cf\u6700\u597d\u7684 m4a \u683c\u5f0f\u97f3\u9891")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7d(\u4ec5\u89c6\u9891, \u65e0\u97f3\u9891):\nyt-dlp -f248 [url]\n\n# \u6307\u5b9a\u89c6\u9891248+\u6307\u5b9a\u97f3\u9891140\nyt-dlp -f248+140 [url]\n\n# \u6307\u5b9a\u89c6\u9891248+\u6700\u597d\u97f3\u9891\nyt-dlp -f248+137 [url]\n\n# mac \u53ef\u9884\u89c8\u7684, 1080P+\u6700\u597d\u97f3\u9891\nyt-dlp -f399+ba --merge-output-format mp4 [url]\n")),(0,r.kt)("h4",{id:"\u4ec5\u4e0b\u8f7d\u5b57\u5e55"},"\u4ec5\u4e0b\u8f7d\u5b57\u5e55"),(0,r.kt)("p",null,"\u83b7\u53d6\u5b57\u5e55\u5217\u8868: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp --list-subs [url]\n")),(0,r.kt)("p",null,"\u5f53\u5b57\u5e55\u5b58\u5728\u65f6\uff0c\u53ef\u4ee5\u5728\u5217\u8868\u7684\u7ed3\u5c3e\u770b\u5230\u5bf9\u5e94\u8bed\u8a00:\n",(0,r.kt)("img",{alt:"image",src:l(64438).Z,width:"1498",height:"238"})),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5bf9\u5e94\u8bed\u8a00\u7684\u5b57\u5e55, \u6b64\u5904\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"zh-CN"),":  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp --write-subs --sub-langs zh-CN --skip-download [url]\n")),(0,r.kt)("p",null,"\u5982\u679c\u89c6\u9891\u6ca1\u6709\u5bf9\u5e94\u8bed\u8a00\u7684\u5b57\u5e55, \u4e0b\u8f7d\u81ea\u52a8\u751f\u6210\u7684\u5b57\u5e55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yt-dlp --write-auto-subs --skip-download [url]\n")),(0,r.kt)("h4",{id:"\u643a\u5e26\u6d4f\u89c8\u5668\u7f13\u5b58"},"\u643a\u5e26\u6d4f\u89c8\u5668\u7f13\u5b58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--cookies-from-browser edge\n")))}k.isMDXComponent=!0},92898:function(e,t,l){t.Z=l.p+"assets/images/format-list-95e1a2d6f6540d540b7d0cf67bcfecde.webp"},64438:function(e,t,l){t.Z=l.p+"assets/images/subtitle-list-68da846abac43a35328b22aa1c8992ef.webp"}}]);