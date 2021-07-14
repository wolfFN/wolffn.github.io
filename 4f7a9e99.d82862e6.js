(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),l=(t(0),t(197)),i={title:"uniq"},c={unversionedId:"tools/shell/uniq",id:"tools/shell/uniq",isDocsHomePage:!1,title:"uniq",description:"\u529f\u80fd",source:"@site/docs/tools/shell/uniq.md",slug:"/tools/shell/uniq",permalink:"/docs/tools/shell/uniq",version:"current",sidebar:"tools",previous:{title:"awk",permalink:"/docs/tools/shell/awk"},next:{title:"npm",permalink:"/docs/tools/shell/npm"}},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u547d\u4ee4\u53c2\u6570",id:"\u547d\u4ee4\u53c2\u6570",children:[]},{value:"\u5e38\u89c1\u7528\u6cd5",id:"\u5e38\u89c1\u7528\u6cd5",children:[{value:"\u7edf\u8ba1\u5404\u884c\u5728\u6587\u4ef6\u4e2d\u7684\u51fa\u73b0\u6b21\u6570",id:"\u7edf\u8ba1\u5404\u884c\u5728\u6587\u4ef6\u4e2d\u7684\u51fa\u73b0\u6b21\u6570",children:[]},{value:"\u627e\u51fa\u6587\u4ef6\u4e2d\u91cd\u590d\u7684\u884c",id:"\u627e\u51fa\u6587\u4ef6\u4e2d\u91cd\u590d\u7684\u884c",children:[]},{value:"\u96c6\u5408\u64cd\u4f5c",id:"\u96c6\u5408\u64cd\u4f5c",children:[]},{value:"\u5728\u65e5\u5fd7\u5904\u7406\u4e2d\u7684\u5e94\u7528",id:"\u5728\u65e5\u5fd7\u5904\u7406\u4e2d\u7684\u5e94\u7528",children:[]}]}],u={rightToc:o};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),Object(l.b)("p",null,"\u67e5\u770b\u6216\u8fc7\u6ee4\u6587\u4ef6(input)\u4e2d\u91cd\u590d\u7684\u884c\u3002"),Object(l.b)("h2",{id:"\u547d\u4ee4\u53c2\u6570"},"\u547d\u4ee4\u53c2\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"uniq [-c | -d | -u] [-i] [-f num] [-s chars] [input_file [output_file]]\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"uniq")," \u547d\u4ee4\u8bfb\u53d6\u6307\u5b9a\u7684\u8f93\u5165\u6587\u4ef6\uff0c\u6bd4\u8f83\u76f8\u90bb\u884c\uff0c\u5e76\u5c06\u6bcf\u4e2a\u72ec\u7279\u7684\u884c\u8f93\u51fa\u5230\u6307\u5b9a\u7684\u6587\u4ef6\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(l.b)("inlineCode",{parentName:"li"},"input_file")," \u662f\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"-")," \u6216 \u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a standard input\u3002\u540c\u7406\uff0c\u5982\u679c output_file \u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a standard output."),Object(l.b)("li",{parentName:"ul"},"\u76f8\u90bb\u7684\u91cd\u590d\u884c\u5c06\u4e0d\u4f1a\u88ab\u590d\u5236\u3002\u4f46\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"uniq")," \u4e0d\u4f1a\u68c0\u6d4b\u4e0d\u76f8\u90bb\u7684\u884c\u662f\u5426\u91cd\u590d\u3002\u6240\u4ee5\u5728\u4f7f\u7528\u8be5\u547d\u4ee4\u524d\uff0c\u6709\u5fc5\u8981\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"sort")," \u5bf9 input \u5148\u8fdb\u884c\u6392\u5e8f\u3002")),Object(l.b)("p",null,"\u53c2\u6570\u542b\u4e49\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-c, --count")," \u5728\u6bcf\u4e00\u884c\u524d\u52a0\u5165 count\uff0c\u7528\u4e00\u4e2a\u7a7a\u683c\u9694\u5f00\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-d, --repeated")," \u53ea\u8f93\u51fa\u91cd\u590d\u7684\u884c\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-u, --unique")," \u53ea\u8f93\u51fa\u672a\u91cd\u590d\u7684\u884c\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-i, --ignore-case")," \u5ffd\u7565\u5927\u5c0f\u5199"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-f, --skip-fields=N")," \u5ffd\u7565\u6700\u521d\u7684 n \u4e2a field\u3002field \u6307\u7684\u662f\u7531\u7a7a\u683c\u9694\u5f00\u7684\u975e\u7a7a\u5217\uff0c\u4ece 1 \u5f00\u59cb\u8ba1\u6570\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-s, --skip-chars=N")," \u5ffd\u7565\u6700\u521d\u7684 n \u4e2a \u5b57\u7b26\uff0c\u4ece 1 \u5f00\u59cb\u8ba1\u6570\u3002\u5982\u679c\u4e0e ",Object(l.b)("inlineCode",{parentName:"li"},"-f")," \u540c\u65f6\u4f7f\u7528\uff0c\u5219\u4f1a\u5ffd\u7565 \u5236\u5b9a field \u540e\u7684\u6307\u5b9a\u4e2a\u5b57\u7b26\u3002")),Object(l.b)("h2",{id:"\u5e38\u89c1\u7528\u6cd5"},"\u5e38\u89c1\u7528\u6cd5"),Object(l.b)("h3",{id:"\u7edf\u8ba1\u5404\u884c\u5728\u6587\u4ef6\u4e2d\u7684\u51fa\u73b0\u6b21\u6570"},"\u7edf\u8ba1\u5404\u884c\u5728\u6587\u4ef6\u4e2d\u7684\u51fa\u73b0\u6b21\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"sort [file-name] | uniq -c\n")),Object(l.b)("h3",{id:"\u627e\u51fa\u6587\u4ef6\u4e2d\u91cd\u590d\u7684\u884c"},"\u627e\u51fa\u6587\u4ef6\u4e2d\u91cd\u590d\u7684\u884c"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"sort [file-name] | uniq -d\n")),Object(l.b)("h3",{id:"\u96c6\u5408\u64cd\u4f5c"},"\u96c6\u5408\u64cd\u4f5c"),Object(l.b)("p",null,"\u5047\u8bbea\u548cb\u662f\u4e24\u4e2a\u6587\u4ef6\uff0c\u91cc\u9762\u6bcf\u4e00\u884c\u770b\u4f5c\u4e00\u4e2a\u6570\u636e\u5143\u7d20\uff0c\u4e14\u6bcf\u4e00\u884c\u90fd\u5404\u4e0d\u76f8\u540c\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# \u5e76\u96c6\ncat a b | sort | uniq > a_b.union\n\n# \u4ea4\u96c6\ncat a b | sort | uniq -d > a_b.intersect\n\n# \u5dee\u96c6\ncat a_b.union b | sort | uniq -u > a_b.diff\n")),Object(l.b)("h3",{id:"\u5728\u65e5\u5fd7\u5904\u7406\u4e2d\u7684\u5e94\u7528"},"\u5728\u65e5\u5fd7\u5904\u7406\u4e2d\u7684\u5e94\u7528"),Object(l.b)("p",null,"\u5047\u8bbe access.log \u683c\u5f0f\u5982\u4e0b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"[\u65f6\u95f4] [\u7528\u6237ID] [\u64cd\u4f5c\u540d\u79f0] [\u5176\u5b83\u53c2\u6570...]\n")),Object(l.b)("p",null,"\u7ed3\u5408\u524d\u4e00\u8282\u63d0\u5230\u7684\u96c6\u5408\u64cd\u4f5c\uff0c\u5bf9\u65e5\u5fd7\u8fdb\u884c\u4e00\u7cfb\u5217\u64cd\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# \u7edf\u8ba1\u65e5\u6d3b\ncat access.log | awk '{print $2}' | sort | uniq | wc -l\n\n# \u8bbf\u95ee id \u7684\u96c6\u5408\u6587\u4ef6\ncat access.log | awk '{print $2}' | sort | uniq > access.log.uniq\n\n# \u6536\u96c67\u5929\u7684\u72ec\u7acb\u7528\u6237\u96c6\u5408\u540e\uff0c\u7edf\u8ba1\u5468\u6d3b\u8dc3\n# access.log.uniq.1, access.log.uniq.2, ... access.log.uniq.7\ncat access.log.uniq.[1-7] | sort | uniq | wc -l\n\n# \u8ba1\u7b97\u67d0\u4e00\u5929\u7684\u7559\u5b58\u7387\uff0c\u5148\u6c42\u4ea4\u96c6\uff0c\u7136\u540e\u8ba1\u7b97\u4ea4\u96c6\u5360\u539f\u7528\u6237\u7684\u6bd4\u4f8b\ncat access.log.uniq.[1-2] | sort | uniq -d > 2day_retention\n")))}b.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,O=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return t?a.a.createElement(O,c(c({ref:n},u),{},{components:t})):a.a.createElement(O,c({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);