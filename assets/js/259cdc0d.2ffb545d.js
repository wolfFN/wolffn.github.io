"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1154],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(k,p(p({ref:n},s),{},{components:t})):a.createElement(k,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4645:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),p=["components"],c={title:"Create React App \u4e2d\u7684 Webpack \u4f18\u5316",tags:["webpack"]},o=void 0,i={permalink:"/blog/2020/07/17/Create React App \u4e2d\u7684 Webpack \u4f18\u5316",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-07-17-Create React App \u4e2d\u7684 Webpack \u4f18\u5316.md",source:"@site/blog/2020-07-17-Create React App \u4e2d\u7684 Webpack \u4f18\u5316.md",title:"Create React App \u4e2d\u7684 Webpack \u4f18\u5316",description:"Create React App \u521b\u5efa\u7684\u5de5\u7a0b\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u6253\u5305\u901f\u5ea6\u8d8a\u6765\u8d8a\u6162\u3002\u6211\u5bf9\u901f\u5ea6\u548c\u6253\u5305\u4f53\u79ef\u505a\u4e86\u521d\u6b65\u7684\u4f18\u5316\uff0c\u672c\u6587\u8bb0\u5f55\u5927\u6982\u8fc7\u7a0b\u3002",date:"2020-07-17T00:00:00.000Z",formattedDate:"July 17, 2020",tags:[{label:"webpack",permalink:"/blog/tags/webpack"}],readingTime:6.225,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Create React App \u4e2d\u7684 Webpack \u4f18\u5316",tags:["webpack"]},prevItem:{title:"\u3010\u8f6c\u8f7d\u301130\u6761\u7f16\u7a0b\u540d\u8a00\u4f73\u53e5",permalink:"/blog/2020/10/07/30\u6761\u7f16\u7a0b\u540d\u8a00\u4f73\u53e5"},nextItem:{title:"QCon\u4e0a\u6d772019\u89c1\u95fb",permalink:"/blog/2019/10/23/QCon\u4e0a\u6d772019\u89c1\u95fb"}},s={authorsImageUrls:[]},u=[{value:"\u4f18\u5316\u65b9\u5f0f",id:"\u4f18\u5316\u65b9\u5f0f",level:2},{value:"rewired",id:"rewired",level:2},{value:"\u6d4b\u91cf\u624b\u6bb5",id:"\u6d4b\u91cf\u624b\u6bb5",level:2},{value:"\u6253\u5305\u4f53\u79ef",id:"\u6253\u5305\u4f53\u79ef",level:4},{value:"\u901f\u5ea6",id:"\u901f\u5ea6",level:4},{value:"SourceMap",id:"sourcemap",level:2},{value:"HappyPack",id:"happypack",level:2},{value:"Externals",id:"externals",level:2},{value:"TODO",id:"todo",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create React App \u521b\u5efa\u7684\u5de5\u7a0b\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u6253\u5305\u901f\u5ea6\u8d8a\u6765\u8d8a\u6162\u3002\u6211\u5bf9\u901f\u5ea6\u548c\u6253\u5305\u4f53\u79ef\u505a\u4e86\u521d\u6b65\u7684\u4f18\u5316\uff0c\u672c\u6587\u8bb0\u5f55\u5927\u6982\u8fc7\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u4f18\u5316\u65b9\u5f0f"},"\u4f18\u5316\u65b9\u5f0f"),(0,l.kt)("p",null,"\u6bd4\u8f83\u4e3b\u6d41\u7684\u4f18\u5316\u65b9\u5f0f\u6709\u5982\u4e0b\u51e0\u79cd\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"react-scripts")," \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"eject")," \u7684\u65b9\u5f0f\uff0c\u5c06\u5176\u6258\u7ba1\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack")," \u914d\u7f6e\u5168\u90e8\u5f39\u51fa\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u5b8c\u5168\u638c\u63a7\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4ee3\u7801\u5305\u590d\u6742\u5ea6\u589e\u52a0\uff0c\u800c\u4e14\u662f\u4e0e\u4e1a\u52a1\u903b\u8f91\u65e0\u5173\u7684\u914d\u7f6e\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5df1\u7ef4\u62a4\u4e00\u4e2a\u5305\uff0c\u66ff\u6362 ",(0,l.kt)("inlineCode",{parentName:"li"},"react-scripts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u5b8c\u5168\u638c\u63a7\u914d\u7f6e\uff0c\u4e0d\u4f1a\u7ed9\u4e1a\u52a1\u4ee3\u7801\u5305\u589e\u52a0\u590d\u6742\u5ea6\uff0c\u4e14\u53ef\u4ee5\u8de8\u9879\u76ee\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u7ef4\u62a4\u989d\u5916\u7684\u5305\uff0c\u53d1\u5e03\u7b49\u5de5\u4f5c\u91cf"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"react-app-rewired")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"customize-cra"),"\uff0c\u9879\u76ee\u4e2d\u66ff\u6362\u90e8\u5206\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u4e0d\u9700\u8981\u989d\u5916\u56f4\u62a4\u4ee3\u7801\u5305\uff0c\u4e0e\u6b64\u540c\u65f6\u4e0d\u7ed9\u4e1a\u52a1\u4ee3\u7801\u5305\u5e26\u6765\u8fc7\u591a\u7684\u989d\u5916\u5185\u5bb9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u9694\u9774\u6414\u75d2\u7684\u611f\u89c9\u3002\u4e00\u4e9b\u6df1\u5ea6\u4fb5\u5165\u7684\u914d\u7f6e\u6539\u52a8\u4f1a\u6bd4\u8f83\u9ebb\u70e6\u3002")))),(0,l.kt)("p",null,"\u7efc\u4e0a\uff0c\u65b9\u6848 2 \u5e94\u8be5\u662f\u6700\u4f73\u9009\u62e9\u3002\u8003\u8651\u5230\u4f18\u5316\u5e26\u6765\u7684\u6548\u679c\u4e0d\u660e\uff0c\u4ee5\u53ca 2 \u7684\u524d\u671f\u989d\u5916\u6295\u5165\uff0c\u6211\u4eec\u6682\u65f6\u5148\u91c7\u53d6\u65b9\u6848 3\uff0c\u5f85\u6548\u679c\u660e\u663e\u6216\u9047\u5230\u74f6\u9888\u540e\uff0c\u5207\u6362\u65b9\u6848 2 \u3002"),(0,l.kt)("h2",{id:"rewired"},"rewired"),(0,l.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D react-app-rewired customize-cra\n")),(0,l.kt)("p",null,"\u6839\u76ee\u5f55\u521b\u5efa\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"config-overrides.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/* config-overrides.js */\n\nmodule.exports = function override(config, env) {\n    //do stuff with the webpack config...\n    return config;\n};\n")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'/* package.json */\n"scripts": {\n  "start": "react-app-rewired start",\n  "build": "react-app-rewired build",\n  "test": "react-app-rewired test",\n  "eject": "react-scripts eject"\n}\n')),(0,l.kt)("h2",{id:"\u6d4b\u91cf\u624b\u6bb5"},"\u6d4b\u91cf\u624b\u6bb5"),(0,l.kt)("h4",{id:"\u6253\u5305\u4f53\u79ef"},"\u6253\u5305\u4f53\u79ef"),(0,l.kt)("p",null,"\u6700\u7ec8\u6821\u9a8c\u624b\u6bb5\uff0c\u53ef\u4ee5\u770b\u6bcf\u6b21\u6253\u5305\u540e\u7684\u8f93\u51fa\uff0c\u4e5f\u53ef\u4ee5\u5728 Devtool -> Networks \u4e2d\u770b\u5305\u5927\u5c0f\u3002"),(0,l.kt)("p",null,"\u4f18\u5316\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5f15\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleAnalyzerPlugin")," \u6765\u67e5\u770b bundle \u7684\u7ec4\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D webpack-bundle-analyzer\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { override, addWebpackPlugin } = require('customize-cra');\n\nconst BundleAnalyzerPlugin = require('webpack-bundle-analyzer')\n    .BundleAnalyzerPlugin;\n\nmodule.exports = override(addWebpackPlugin(new BundleAnalyzerPlugin()));\n")),(0,l.kt)("p",null,"\u52a0\u5165\u63d2\u4ef6\u540e\uff0c\u6253\u5305\u7ed3\u675f\u540e\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.0:8888")," \u901a\u8fc7\u53ef\u89c6\u5316\u624b\u6bb5\u5c55\u793a\u6253\u5305\u7ec4\u6210\u56fe\u3002"),(0,l.kt)("h4",{id:"\u901f\u5ea6"},"\u901f\u5ea6"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"time")," \u547d\u4ee4\u53ef\u4ee5\u76f4\u89c2\u67e5\u770b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"time npm run build\n")),(0,l.kt)("p",null,"\u4f18\u5316\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u67e5\u770b\u5404\u4e2a\u6b65\u9aa4\u6240\u7528\u65f6\u95f4\uff0c\u6211\u4eec\u5f15\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"SpeedMeasurePlugin"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D speed-measure-webpack-plugin\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');\nconst useSMP = config => new SpeedMeasurePlugin().wrap(config);\n\nmodule.exports = override(useSMP);\n")),(0,l.kt)("h2",{id:"sourcemap"},"SourceMap"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js"},"react-scripts")," \u4e2d\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"devtool")," \u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"devtool: isEnvProduction\n  ? shouldUseSourceMap\n    ? 'source-map'\n    : false\n  : isEnvDevelopment && 'cheap-module-source-map',\n")),(0,l.kt)("p",null,"\u663e\u7136\uff0c\u5728 prod \u73af\u5883\u4f7f\u7528 source-map \u610f\u4e49\u4e0d\u5927\u3002\u6240\u4ee5\u6b64\u5904\u6211\u4eec\u5bf9\u8be5\u914d\u7f6e\u8fdb\u884c\u8986\u76d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const rewiredMap = config => {\n    config.devtool =\n        config.mode === 'development' ? 'cheap-module-source-map' : false;\n\n    // only for debug in test env\n    // config.devtool = 'source-map';\n    return config;\n};\n\nmodule.exports = override(rewiredMap);\n")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u672a\u5728\u9879\u76ee\u4e2d\u5bf9 webpack \u8fdb\u884c override\uff0c\u901a\u8fc7\u5bf9\u73af\u5883\u53d8\u91cf\u8d4b\u503c\u4e5f\u53ef\u4ee5\u8fbe\u5230\u8be5\u76ee\u7684\u3002\u53ea\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"build": "GENERATE_SOURCEMAP=false react-scripts build",\n')),(0,l.kt)("h2",{id:"happypack"},"HappyPack"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/amireh/happypack"},"Happy Pack")," \u901a\u8fc7\u5c06\u6253\u5305\u8fc7\u7a0b\u5e76\u884c\uff0c\u8fdb\u884c\u4f18\u5316\u3002\u7531\u4e8e\u8be5\u914d\u7f6e\u5bf9\u5df2\u6709\u914d\u7f6e\u4fb5\u5165\u6027\u6bd4\u8f83\u5f3a\uff0c\u6211\u9009\u62e9\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"react-app-rewire-happy-pack")," \u6765\u5904\u7406\u8fd9\u4e00\u8fc7\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D react-app-rewire-happy-pack\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const rewireHappyPackLoader = require('react-app-rewire-happy-pack');\nconst useHappyPack = config => rewireHappyPackLoader(config);\n\nmodule.exports = override(useHappyPack);\n")),(0,l.kt)("p",null,"\u9057\u61be\u7684\u662f\uff0c\u8be5\u6b65\u9aa4\u5e76\u672a\u80fd\u538b\u7f29\u6253\u5305\u65f6\u95f4\uff0c\u53cd\u800c\u52a0\u957f\u4e86\u6253\u5305\u65f6\u95f4\u3002\u521d\u6b65\u63a8\u6d4b\u53ef\u80fd webpack \u81ea\u5df1\u5bf9\u8be5\u90e8\u5206\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u800c\u8be5 package \u5df2\u7ecf\u5f88\u4e45\u6ca1\u6709\u65b0\u7684\u53d1\u5e03\uff0c\u53ef\u80fd\u672a\u9002\u914d webpack \u7684\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u793e\u533a\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u5e76\u884c\u6253\u5305\u65b9\u6848\uff0c\u540e\u7eed\u53ef\u4ee5\u7814\u7a76\u4e0b\u3002"),(0,l.kt)("h2",{id:"externals"},"Externals"),(0,l.kt)("p",null,"\u8be5\u914d\u7f6e\u4e3b\u8981\u662f\u62bd\u51fa\u9879\u76ee\u4e2d\u7684\u4f9d\u8d56\uff0c\u5c06\u5176\u5728 html \u4e2d\u4ee5 link \u6216 script \u7684\u5f62\u5f0f\u5f15\u5165\u3002\u65e2\u964d\u4f4e\u4e86\u6253\u5305\u4f53\u79ef\uff0c\u53c8\u51cf\u5c11\u4e86\u6253\u5305\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u627e\u5230\u8fd9\u4e9b\u4f9d\u8d56\u7684\u6253\u5305\u7248\u672c\u3002\u53ef\u4ee5\u67e5\u770b\u5176\u5b98\u7f51\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u53bb cdn \u7f51\u6218\u627e\uff0c\u63a8\u8350 ",(0,l.kt)("a",{parentName:"p",href:"https://www.bootcdn.cn/"},"bootcdn"),"\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u4e0b\u8f7d\u8fd9\u4e9b\u6253\u5305\u6587\u4ef6\uff0c\u53d1\u5e03\u5230 cdn\u3002\u5982\u679c\u4e2a\u4eba\u9879\u76ee\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 bootcdn \u7684\u7248\u672c\u3002\u516c\u53f8\u9879\u76ee\uff0c\u8fd8\u662f\u4e0d\u8981\u5077\u61d2\uff0c\u53d1\u5e03\u5230\u516c\u53f8\u7684 cdn \u6216\u8005\u5176\u4ed6\u4ed8\u8d39 cdn\uff0c\u907f\u514d\u4f9d\u8d56\u5f15\u8d77\u7684\u53ef\u7528\u6027\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"public/index.html")," \u4e2d\u6dfb\u52a0\u94fe\u63a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link\n    href="//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd.min.css"\n    rel="stylesheet"\n/>\n\n<script src="//cdn.bootcdn.net/ajax/libs/react/16.12.0/umd/react.production.min.js"><\/script>\n\n<script src="//cdn.bootcdn.net/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"><\/script>\n\n<script src="//cdn.bootcdn.net/ajax/libs/redux/4.0.5/redux.min.js"><\/script>\n\n<script src="//cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.min.js"><\/script>\n\n<script src="//cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/moment.min.js"><\/script>\n<script src="//cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/locale/zh-cn.min.js"><\/script>\n\n<script src="//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd-with-locales.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u6700\u540e\uff0coverride config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const useExternal = config => {\n    config.externals = {\n        react: 'React',\n        'react-dom': 'ReactDOM',\n        redux: 'Redux',\n        lodash: '_',\n        moment: 'moment',\n        'moment/locale/zh-cn': 'moment.locale',\n        antd: 'antd',\n    };\n\n    return config;\n};\n\nmodule.exports = override(useExternal);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"antd")," \u91cc\u9762\u56fd\u9645\u5316\u76f8\u5173\u7684\u4ee3\u7801\uff0c\u8fd8\u8981\u505a\u4e00\u70b9\u6539\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// import zhCN from 'antd/es/locale/zh_CN';\nimport { locales } from 'antd';\n\nReactDOM.render(\n    <ConfigProvider locale={locales.zh_CN}>\n        <App />\n    </ConfigProvider>,\n    document.getElementById('root'),\n);\n")),(0,l.kt)("p",null,"\u7ecf\u8fc7\u8fd9\u4e9b\u64cd\u4f5c\u540e\uff0c\u6253\u5305\u65f6\u95f4\u5927\u5e45\u51cf\u5c11\uff0cbundle analyzer \u4e2d\u4f9d\u8d56\u6240\u5360\u6bd4\u4f8b\u4e5f\u964d\u4f4e\u4e86\u5f88\u591a\u3002"),(0,l.kt)("p",null,"\u8be5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u53d1\u73b0\u4e86\u793e\u533a\u6709\u4e00\u4e2a package\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\u589e\u52a0 external\u3002\u8fd9\u6837\u5199\u6cd5\u66f4\u4f18\u96c5\u4e00\u4e9b\uff0c\u540c\u65f6\u6253\u5305\u65f6\u95f4\u8fd8\u51cf\u5c11\u4e86\u3002\u3002\u3002\u6211\u5b9e\u5728\u662f\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D html-webpack-externals-plugin\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');\n\nconst externals = [\n    {\n        module: 'antd',\n        entry:\n            '//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd-with-locales.min.js',\n        global: 'antd',\n    },\n    {\n        module: 'antd-css',\n        entry: '//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd.min.css',\n    },\n];\n\nmodule.exports = override(\n    addWebpackPlugin(new HtmlWebpackExternalsPlugin({ externals })),\n);\n")),(0,l.kt)("h2",{id:"todo"},"TODO"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u5c31\u662f\u6211\u7684\u521d\u6b65\u4f18\u5316\u3002\u5c5e\u4e8e\u6bd4\u8f83\u7c97\u7cd9\u7684\u5bf9\u6700\u660e\u663e\u7684\u6b65\u9aa4\u7684\u4f18\u5316\uff0c\u8089\u773c\u53ef\u89c1\u7684\u901f\u5ea6\u4f18\u5316\uff0c\u540e\u7eed\u7ec6\u8282\u4f18\u5316\u8fd8\u9700\u8981\u8fdb\u4e00\u6b65\u7814\u7a76\u3002"))}m.isMDXComponent=!0}}]);