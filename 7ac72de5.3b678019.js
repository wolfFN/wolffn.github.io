(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),p=(n(0),n(210)),c={title:"\u8bb0\u4e00\u6b21\u5bf9Koa.js middleware\u7684\u6e90\u7801\u8d21\u732e",tags:["javascript","node","koa"]},l={permalink:"/blog/2018/07/06/\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2018-07-06-\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e.md",source:"@site/blog/2018-07-06-\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e.md",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u7b14\u8005\u5728\u4f7f\u7528\u5f00\u6e90Node.js web\u6846\u67b6Koa.js\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u5c0fbug\uff0c\u4e3a\u4fee\u590d\u6b64Bug\u67e5\u627eKoa\u53ca\u5176middleware\u6e90\u7801\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u6700\u7ec8\u53d1\u8d77Pull Request\u5e76\u88ab\u91c7\u7eb3\u7684\u8fc7\u7a0b\u3002",date:"2018-07-06T00:00:00.000Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"koa",permalink:"/blog/tags/koa"}],title:"\u8bb0\u4e00\u6b21\u5bf9Koa.js middleware\u7684\u6e90\u7801\u8d21\u732e",readingTime:1.445,truncated:!0,prevItem:{title:"\u300a\u5b50\u5f39\u7b14\u8bb0\u300b\u884c\u52a8\u6307\u5357",permalink:"/blog/2019/05/20/\u300a\u5b50\u5f39\u7b14\u8bb0\u300b\u884c\u52a8\u6307\u5357"},nextItem:{title:"\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter Notebook\u4f7f\u7528\u6307\u5317",permalink:"/blog/2018/06/14/\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter-Notebook\u4f7f\u7528\u6307\u5317"}},b=[{value:"\u7f18\u8d77",id:"\u7f18\u8d77",children:[]},{value:"\u95ee\u9898",id:"\u95ee\u9898",children:[]},{value:"\u5f52\u56e0",id:"\u5f52\u56e0",children:[]},{value:"\u521d\u6b21\u5c1d\u8bd5",id:"\u521d\u6b21\u5c1d\u8bd5",children:[]},{value:"\u6df1\u5165\u6e90\u7801\u63a2\u7d22",id:"\u6df1\u5165\u6e90\u7801\u63a2\u7d22",children:[]},{value:"Pull Request",id:"pull-request",children:[]},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",children:[]}],o={toc:b};function i(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u7b14\u8005\u5728\u4f7f\u7528\u5f00\u6e90Node.js web\u6846\u67b6Koa.js\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u5c0fbug\uff0c\u4e3a\u4fee\u590d\u6b64Bug\u67e5\u627eKoa\u53ca\u5176middleware\u6e90\u7801\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u6700\u7ec8\u53d1\u8d77Pull Request\u5e76\u88ab\u91c7\u7eb3\u7684\u8fc7\u7a0b\u3002")),Object(p.b)("h2",{id:"\u7f18\u8d77"},"\u7f18\u8d77"),Object(p.b)("p",null,"\u4e8b\u60c5\u7684\u8d77\u56e0\u662f\u8fd9\u6837\u7684\uff0c\u5728\u6211\u521a\u5165\u804c\u5f53\u524d\u516c\u53f8\u65f6\uff0c\u7531\u4e8e\u56e2\u961f\u7ec4\u4ef6\u4e0d\u4e45\uff0c\u5f00\u53d1\u4eba\u5458\u5c1a\u672a\u914d\u5907\u671f\u6743\uff0c\u5c24\u5176\u7f3a\u4e4f\u670d\u52a1\u7aef(",Object(p.b)("inlineCode",{parentName:"p"},"Java"),")\u5f00\u53d1\u4eba\u5458\uff1b\u800c\u6070\u597d\u6709\u4e00\u4e2a\u5bf9\u5185\u89c6\u9891\u670d\u52a1\u7684\u9700\u6c42\u6bd4\u8f83\u7d27\u6025\uff0c\u6240\u4ee5\u672c\u4eba\u867d\u7136\u662f\u4e00\u540d\uff08\u8d44\u6df1\uff09\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u4f9d\u7136\u4e3b\u52a8\u627f\u62c5\u8d77\u4e86",Object(p.b)("inlineCode",{parentName:"p"},"Server"),"\u7aef\u5f00\u53d1\u7684\u8d23\u4efb\u3002\u9879\u76ee\u6700\u7ec8\u9009\u62e9",Object(p.b)("inlineCode",{parentName:"p"},"FE"),"\u4eec\u6700\u7231\u7684",Object(p.b)("inlineCode",{parentName:"p"},"Node.js"),"\u8fdb\u884c\u5f00\u53d1\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"web"),"\u6846\u67b6\u5219\u9009\u62e9\u4e86",Object(p.b)("inlineCode",{parentName:"p"},"Koa.js"),"\u3002"),Object(p.b)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Service"),"\u4e2d\u6709\u4e00\u4e2a\u529f\u80fd\u662f\u4e3a\u751f\u6210\u7684\u89c6\u9891\u63d0\u4f9b\u4e0b\u8f7d\u529f\u80fd\u3002\u56e0\u4e3a\u4ec5\u662f\u5185\u90e8\u4eba\u5458\u4e0b\u8f7d\uff0c\u52a0\u4e0a\u6bcf\u5929\u90fd\u8981\u751f\u6210\uff0c\u6240\u4ee5\u51b3\u5b9a\u76f4\u63a5\u5728\u5b58\u50a8\u5728\u670d\u52a1\u5668\uff0c\u7136\u540e\u63d0\u4f9b\u94fe\u63a5\u4f9b\u7528\u6237\u4e0b\u8f7d\u3002"),Object(p.b)("p",null,"\u4e8e\u662f\u5728\u670d\u52a1\u7aef\u9009\u62e9\u4e2d\u95f4\u4ef6",Object(p.b)("inlineCode",{parentName:"p"},"koa-static"),"\uff0c\u714e\u86cb\u8bbe\u7f6e\u4e00\u4e0b\u7f13\u5b58\u5373\u53ef\u3002\u4e3b\u8981\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst serve = require('koa-static');\n\nconst app = new Koa();\napp.use(\n    serve(path.join(__dirname + '/dist'), {\n        extensions: ['mp4'],\n        maxage: 1000 * 60 * 60 * 24 * 100\n    })\n);\n")),Object(p.b)("p",null,"\u7f51\u9875\u90e8\u5206\u63d0\u4f9b\u4e00\u4e2a\u4e0b\u8f7d\u6309\u94ae\uff0c\u91c7\u7528",Object(p.b)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\u52a0",Object(p.b)("inlineCode",{parentName:"p"},"download"),"\uff0c\u5916\u9762\u5957",Object(p.b)("inlineCode",{parentName:"p"},"button"),"\u7684\u5f62\u5f0f\uff0c\u4ee3\u7801\u5982\u4e0b\uff08vue\uff09\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-html"},'<button><a :href="video.outputPath" download>\u4e0b\u8f7d</a></button>\n')),Object(p.b)("p",null,"\u4e8e\u662f\uff0c\u529f\u80fd\u5b8c\u6210\uff0c\u987a\u5229\u4e0a\u7ebf\uff0c\u8fd0\u8425\u5c0fmm\u4eec\u6548\u7387\u63d0\u5347\uff0c\u9f50\u58f0\u5938\u8d5e\uff0c\u5b8c\u6ee1\u89e3\u51b3\u3002"),Object(p.b)("p",null,"\u672c\u96c6\u5b8c\u3002"),Object(p.b)("hr",null),Object(p.b)("p",null,"\u5982\u679c\u751f\u6d3b\u662f\u7ae5\u8bdd\u6545\u4e8b\uff0c\u90a3\u4e48\u4e0a\u9762\u4fbf\u662f\u7ed3\u5c40\u3002\u53ef\u60dc\uff0c\u751f\u6d3b\u4e0d\u662f\u7ae5\u8bdd\u3002"),Object(p.b)("p",null,"\u5927\u6982\u5728\u4eca\u5e74\uff082018\uff092\u6708\u5de6\u53f3\uff0c\u5ffd\u7136\u5927\u5bb6\u53cd\u6620\uff0c",Object(p.b)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6309\u94ae"),"\u4e0d\u80fd\u7528\u4e86\uff0c\u70b9\u51fb\u540e\uff0c\u90fd\u662f\u76f4\u63a5\u5728\u65b0\u7684",Object(p.b)("inlineCode",{parentName:"p"},"Tab"),"\u9875\u6253\u5f00\u94fe\u63a5\u3002"),Object(p.b)("h2",{id:"\u5f52\u56e0"},"\u5f52\u56e0"),Object(p.b)("p",null,"\u9047\u5230bug\u540e\uff0c\u7b2c\u4e00\u53cd\u5e94\u662f\u5206\u6790\uff0c\u80fd\u7528 -> \u4e0d\u80fd\u7528 \u7684\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u751f\u4e86\u4ec0\u4e48\u3002\u7ecf\u8fc7\u5927\u81f4\u5224\u65ad\uff0c\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\u662f",Object(p.b)("inlineCode",{parentName:"p"},"chrome"),"\u81ea\u52a8\u5347\u7ea7\u540e\uff0c\u5bf9",Object(p.b)("inlineCode",{parentName:"p"},"download"),"\u7684\u652f\u6301\u53d1\u751f\u4e86\u53d8\u5316\u3002"),Object(p.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u7684\u7b2c\u4e00\u53cd\u5e94\u662f\uff0c\u662f\u4e0d\u662f",Object(p.b)("inlineCode",{parentName:"p"},"download"),"\u5c5e\u6027\u6ca1\u6709\u7528\u597d\u5462\u3002\u4e8e\u662f\u53bb\u641c\u4e86\u641c\u6807\u51c6\uff0c\u7136\u540e\u5c1d\u8bd5\u7ed9\u8d4b\u503c\uff0c\u7ed3\u679c\u53d1\u73b0\u4e00\u6837\u662f\u4e0d\u884c\u3002"),Object(p.b)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u5ffd\u7136\u60f3\u5230\uff0c\u53ef\u4ee5\u53bb\u770b\u770b\u522b\u7684\u7f51\u7ad9\uff0c\u662f\u5426\u6709\u540c\u6837\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u600e\u4e48\u505a\u7684\u3002"),Object(p.b)("p",null,"\u627e\u4e86\u597d\u4e45\u4e4b\u540e\uff0c\u53d1\u73b0\u4e86\u4e00\u4e2a\u7f51\u7ad9\uff0c\u89c6\u9891\u8fd8\u53ef\u4ee5\u4e0b\u8f7d\uff0c\u4e8e\u662f\u5728",Object(p.b)("inlineCode",{parentName:"p"},"chrome Develop Tools"),"\u7684",Object(p.b)("inlineCode",{parentName:"p"},"Network"),"\u9762\u677f\u4e0b\uff0c\u82e6\u82e6\u5bfb\u627e\u5dee\u5f02\u3002\u7ec8\u4e8e\u53d1\u73b0\uff0c\u5728",Object(p.b)("inlineCode",{parentName:"p"},"Response Header"),"\u7684",Object(p.b)("inlineCode",{parentName:"p"},"Content-Type"),"\u4e2d\u5b58\u5728\u5dee\u5f02\u3002\u6211\u7684\u8bf7\u6c42\u60c5\u51b5\u5982\u4e0b\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{alt:"content-type-mp4",src:n(324).default})),Object(p.b)("p",null,"\u800c\u53ef\u4ee5\u4e0b\u8f7d\u7684\u89c6\u9891\u8bf7\u6c42\uff0c\u5185\u5bb9\u5219\u662f\uff1a",Object(p.b)("inlineCode",{parentName:"p"},"Content-Type: video/mpeg4"),"\u3002\u4e8e\u662f\u6211\u6000\u7591\uff0c\u662f\u4e0d\u662f\u6d4f\u89c8\u5668\u628a\u81ea\u5df1\u80fd\u591f\u8bc6\u522b\u7684\u6269\u5c55\u540d\u76f4\u63a5\u6253\u5f00\uff0c\u4e0d\u80fd\u8bc6\u522b\u7684\u5219\u8fdb\u884c\u4fdd\u5b58\u64cd\u4f5c\u3002\u90a3\u4e48\u63a5\u4e0b\u6765\u8981\u505a\u7684\u4e8b\u60c5\u5c31\u7b80\u5355\u4e86\uff1a\u4fee\u6539\u6211\u4eec\u7684\u54cd\u5e94\u5934\u3002"),Object(p.b)("h2",{id:"\u521d\u6b21\u5c1d\u8bd5"},"\u521d\u6b21\u5c1d\u8bd5"),Object(p.b)("p",null,"\u5bf9\u4e8e",Object(p.b)("inlineCode",{parentName:"p"},"npm"),"\u5b89\u88c5\u7684package\uff0c\u4e2a\u4eba\u5efa\u8bae\u76f4\u63a5\u53bb",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm\u5b98\u7f51"),"\u641c\u7d22\uff0c\u4e00\u822c\u90fd\u4f1a\u63d0\u4f9b\u6e90\u7801\u5730\u5740\uff0c\u6587\u6863\u5730\u5740\u3002"),Object(p.b)("p",null,"\u4e8e\u662f\u76f4\u63a5\u8fdb\u5165npm\u5b98\u7f51\uff0c\u641c\u7d22",Object(p.b)("inlineCode",{parentName:"p"},"koa-static"),"\uff0c\u8fdb\u5165",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/koa-static"},"\u8be5package\u4e3b\u9875"),"\uff0c\u53d1\u73b0\u5982\u4e0b\u5185\u5bb9\uff1a"),Object(p.b)("blockquote",null,Object(p.b)("ul",{parentName:"blockquote"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/koajs/send#setheaders"},"setHeaders")," Function to set custom headers on response."))),Object(p.b)("p",null,"\u65e2\u7136\u5b98\u65b9\u76f4\u63a5\u63d0\u4f9b\u4e86\u529f\u80fd\uff0c\u90a3\u4e48\u4e8b\u60c5\u597d\u529e\u4e86\uff0c\u76f4\u63a5\u52a0\u4e0a\u5427\u3002"),Object(p.b)("p",null,"\u4fee\u6539Server\u7aef\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"app.use(\n    serve(path.join(__dirname + '/dist'), {\n        extensions: ['mp4'],\n        maxage: 1000 * 60 * 60 * 24 * 100,\n        setHeaders: function (res) {\n            res.setHeader('Content-Type', 'video/mpeg4');\n        }\n    })\n);\n")),Object(p.b)("p",null,"\u6b22\u5929\u6d17\u5730\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u5237\u65b0\u91cd\u8bd5\uff0c\u7ed3\u679c\u5462\uff0c\u65e0\u6548\uff01"),Object(p.b)("h2",{id:"\u6df1\u5165\u6e90\u7801\u63a2\u7d22"},"\u6df1\u5165\u6e90\u7801\u63a2\u7d22"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u67f4\u72ac\u5c41\u80a1\u4e00\u6c89\uff0c\u53d1\u73b0\u4e8b\u60c5\u5e76\u4e0d\u7b80\u5355  ")),Object(p.b)("p",null,Object(p.b)("img",{alt:"\u67f4\u72ac\u5c41\u80a1\u4e00\u6c89\uff0c\u53d1\u73b0\u4e8b\u60c5\u5e76\u4e0d\u7b80\u5355",src:n(325).default})),Object(p.b)("p",null,"\u6587\u6863\u6551\u4e0d\u4e86\u6211\u4eec\uff0c\u53ea\u80fd\u53bb\u770b\u6e90\u7801\u4e86\u3002\u597d\u5728\u8fd9\u4e9b\u4e2d\u95f4\u4ef6\u4e00\u822c\u90fd\u77ed\u5c0f\u7cbe\u608d\u5e76\u4e14\u903b\u8f91\u4e25\u8c28\uff0c\u8bfb\u4e00\u8bfb\u8fd8\u662f\u5f88\u6709\u4ef7\u503c\u7684\u3002"),Object(p.b)("p",null,"\u5bf9\u4e8enode/js\u7684\u9879\u76ee\uff0c\u7528\u5230\u7684package\uff0c\u76f4\u63a5\u6253\u5f00\u9879\u76ee\u76ee\u5f55\u4e0b\u7684",Object(p.b)("inlineCode",{parentName:"p"},"node_modules"),"\u627e\u5230\u5bf9\u5e94\u76ee\u5f55\u9605\u8bfb\u5c31\u53ef\u4ee5\u4e86\uff0c\u5341\u5206\u65b9\u4fbf\u3002PS\uff1a\u5927\u591a\u6570package\u5165\u53e3\u5728\u76ee\u5f55\u4e0b\u7684\t",Object(p.b)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\u3002"),Object(p.b)("p",null,"\u6253\u5f00",Object(p.b)("inlineCode",{parentName:"p"},"node_modules/koa-static/index.js"),"\u540e\uff0c\u53d1\u73b0",Object(p.b)("inlineCode",{parentName:"p"},"koa-static"),"\u76f4\u63a5\u628a\u4f20\u5165\u7684",Object(p.b)("inlineCode",{parentName:"p"},"options"),"\u539f\u5c01\u4e0d\u52a8\u4f20\u9012\u7ed9\u4e86",Object(p.b)("inlineCode",{parentName:"p"},"koa-send"),"\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"function serve (root, opts) {\n    ......\ndone = await send(ctx, ctx.path, opts)\n")),Object(p.b)("p",null,"\u4e8e\u662f\u7ee7\u7eed\uff0c\u6253\u5f00",Object(p.b)("inlineCode",{parentName:"p"},"node_modules/koa-send/index.js"),"\uff0c\u4ed4\u7ec6\u9605\u8bfb\u4ee3\u7801\uff0c\u53d1\u73b0\u5bf9options\u4e2d\u7684",Object(p.b)("inlineCode",{parentName:"p"},"setHeaders"),"\u5904\u7406\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"// \u6b64\u5904\u4e3a\u4e00\u4e2aAssertion\uff0c\u82e5setHeaders\u4e0d\u662f\u51fd\u6570\uff0c\u76f4\u63a5\u629b\u51fa\u9519\u8bef\nconst setHeaders = opts.setHeaders\nif (setHeaders && typeof setHeaders !== 'function') {\n    throw new TypeError('option setHeaders must be function')\n}\n......\n// \u5982\u679c\u662f\u51fd\u6570\uff0c\u5219\u5c06\u5176\u52a0\u5165\u5230reponse header\nif (setHeaders) setHeaders(ctx.res, path, stats)\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u5173\u4e8eAssertion\u53ef\u4ee5\u591a\u8bf4\u4e00\u53e5\uff0c\u65ad\u8a00\u662f\u7f16\u7a0b\u4e2d\u5f88\u4f7f\u7528\u7684\u4e00\u79cd\u6280\u5de7\uff0c\u4e0d\u7ba1\u662f\u5f00\u53d1\u3001\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u5feb\u901f\u53d1\u73b0\u9519\u8bef\uff0c\u8fd8\u662f\u7ebf\u4e0a\u7684\u9632\u5fa1\u6027\u7f16\u7a0b\u3002\u5728\u300a\u4ee3\u7801\u5927\u5168\u300b\u7b49\u7ecf\u5178\u4e66\u7c4d\u4e2d\u90fd\u6709\u4ecb\u7ecd\uff0c\u63a8\u8350\u5927\u5bb6\u9605\u8bfb\u76f8\u5173\u7ae0\u8282\u3002")),Object(p.b)("p",null,"\u8fd9\u4e48\u770b\u6ca1\u95ee\u9898\u554a\uff0c\u4f20\u5165\u7684config\u5e94\u8be5\u90fd\u4f7f\u7528\u4e86\u554a\u3002\u4e8e\u662f\u7ee7\u7eed\u5f80\u4e0b\u8bfb\uff0c\u53d1\u73b0\u7384\u673a\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"ctx.type = type(path, encodingExt)\n...\n\n/**\n * File type.\n */\nfunction type (file, ext) {\n  return ext !== '' ? extname(basename(file, ext)) : extname(file)\n}\n")),Object(p.b)("p",null,"\u539f\u6765\uff0c\u5728setHeader\u4e4b\u540e\uff0c\u6e90\u4ee3\u7801\u53c8\u6839\u636e\u6587\u4ef6\u6269\u5c55\u540d\uff0c\u4fee\u6539\u4e86\u5176content-type\u3002\u4e3a\u4e86\u9a8c\u8bc1\u81ea\u5df1\u7684\u60f3\u6cd5\uff0c\u6211\u7b80\u5355\u4fee\u6539\u8fd9\u91cc\u7684\u4ee3\u7801\uff0c\u8fdb\u884c\u5c1d\u8bd5\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"if (!ctx.type) ctx.type = type(path, encodingExt)\n")),Object(p.b)("p",null,"\u91cd\u542f\u670d\u52a1\uff0c\u5237\u65b0\u540e\uff0c\u53d1\u73b0\u6548\u679c\u5982\u4e0b\uff1a\n",Object(p.b)("img",{alt:"content-type-mpeg4",src:n(326).default})),Object(p.b)("p",null,"\u679c\u7136ok\u4e86\u3002"),Object(p.b)("h2",{id:"pull-request"},"Pull Request"),Object(p.b)("p",null,"\u65e2\u7136\u6298\u817e\u4e86\u8fd9\u4e48\u4e00\u5927\u5708\uff0c\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u4e8e\u662f\u6211\u51b3\u5b9a\u4e00\u4e0d\u505a\u4e8c\u4e0d\u4f11\uff0c\u76f4\u63a5\u7ed9",Object(p.b)("inlineCode",{parentName:"p"},"koa-send"),"\u5f00\u6e90\u9879\u76eePull Request\uff0c\u5982\u679c\u88ab\u91c7\u7eb3\uff0c\u8fd8\u7b97\u662f\u7ed9\u5f00\u6e90\u5c4a\u505a\u4e86Contribution\u3002"),Object(p.b)("p",null,"\u8fc7\u7a0b\u5f88\u7b80\u5355\uff0c\u5230\u9879\u76ee\u4e3b\u9875\uff0cfork\u9879\u76ee\u3002\u5230\u81ea\u5df1\u4e3b\u9875\uff0c\u628afork\u7684\u9879\u76eecheckout\u5230\u672c\u5730\uff0c\u4fee\u6539\u4ee3\u7801\uff0ccommit, push\u3002"),Object(p.b)("p",null,"\u4fee\u6539\u7684\u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u6ce8\u610f\uff0c\u8fd9\u4e9b\u5f00\u6e90\u9879\u76ee\u4e00\u822c\u4f1a\u6709\u5f88\u91cd\u89c6\u6d4b\u8bd5\uff0c\u6240\u4ee5\u5982\u679c\u6709UT\uff0c\u4e00\u5b9a\u8bb0\u5f97\u6dfb\u52a0\u7528\u4f8b\u3002\u6211\u7684\u4ee3\u7801\u5177\u4f53\u5982\u4e0b\uff08\u63d0\u4ea4\u5185\u5bb9\u4e0d\u5305\u542b\u6ce8\u91ca\uff09\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},"// \u5220\u9664\u539f\u6765\u4ee3\u7801\uff1actx.type = type(path, encodingExt)\nif (!ctx.type) ctx.type = type(path, encodingExt)\n\n// \u6dfb\u52a0Test Case\nit('should set the Content-Type', function (done) {\n    const app = new Koa()\n\n    app.use(async (ctx) => {\n      await send(ctx, '/test/fixtures/user.json')\n    })\n\n    request(app.listen())\n    .get('/')\n    .expect('Content-Type', /application\\/json/)\n    .end(done)\n})\n")),Object(p.b)("p",null,"\u7136\u540e\u5230\u8fd8\u662f\u5230\u81ea\u5df1fork\u7684\u9879\u76ee\u4e2d\uff0c\u9009\u62e9\u7b2c\u4e8c\u4e2aTab\uff1a",Object(p.b)("inlineCode",{parentName:"p"},"Pull requests"),"\uff0c\u7136\u540e\u70b9\u51fb",Object(p.b)("inlineCode",{parentName:"p"},"New pull request"),"\u6309\u94ae\uff0c\u9009\u62e9\u81ea\u5df1\u60f3\u63d0\u4ea4\u7684\u5206\u652f\u5373\u53ef\u3002"),Object(p.b)("p",null,Object(p.b)("img",{alt:"pull-request",src:n(327).default})),Object(p.b)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),Object(p.b)("p",null,"\u53d1\u8d77\u8bf7\u6c42\u540e\uff0c\u9879\u76ee\u7ef4\u62a4\u8005\u6109\u5feb\u7684\u91c7\u7eb3\u4e86\uff0c\u4e8e\u662f\u6211\u4e5f\u6709\u4e86\u5bf9",Object(p.b)("inlineCode",{parentName:"p"},"Node.js"),"\u751f\u6001\u5f00\u6e90\u5708\u7684\u7b2c\u4e00\u6b21\u8d21\u732e\uff0c\u5fc3\u91cc\u8fd8\u662f\u5f88\u9ad8\u5174\u7684\u3002"),Object(p.b)("p",null,"Pull Request\u7684\u5730\u5740\u5728",Object(p.b)("a",{parentName:"p",href:"https://github.com/koajs/send/pull/105"},"\u8fd9\u91cc"),"\u3002"),Object(p.b)("p",null,"\u8fd9\u4ef6\u4e8b\u60c5\u4e5f\u7ed9\u6211\u5e26\u6765\u4e86\u4e00\u5b9a\u7684\u601d\u8003\uff0c\u6574\u7406\u540e\uff0c\u7ed3\u8bba\u5982\u4e0b\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5199\u4ee3\u7801\uff0c\u89e3\u51b3\u95ee\u9898\uff0c\u662f\u5145\u6ee1\u5feb\u4e50\u7684\uff0c\u80fd\u591f\u7ed9\u6211\u4eec\u5e26\u6765\u6ee1\u8db3\u611f\u3002"),Object(p.b)("li",{parentName:"ol"},"\u8ba4\u771f\u8c03\u7814\uff0c\u9605\u8bfb\u6587\u6863\uff0c\u751a\u81f3\u6df1\u5165\u6e90\u7801\uff0c\u95ee\u9898\u603b\u5f52\u662f\u53ef\u4ee5\u89e3\u51b3\u7684\u3002"),Object(p.b)("li",{parentName:"ol"},"\u6211\u53d1\u73b0\u8fd9\u4e9b\u5f00\u6e90\u9879\u76ee\u5176\u5b9e\u90fd\u6709issue\uff0c\u5e76\u4e14\u6709\u4e9b\u7ef4\u62a4\u8005\u4e5f\u516c\u5f00\u8bf4\u4e86",Object(p.b)("inlineCode",{parentName:"li"},"pull request is welcomed"),"\uff0c\u6240\u4ee5\u6709\u65f6\u95f4\u53ef\u4ee5\u591a\u8bfb\u4e00\u4e9b\u6e90\u7801\uff0c\u627e\u673a\u4f1a\u591a\u505a\u4e00\u4e9b\u8d21\u732e\u3002")),Object(p.b)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u8fd9\u6b21\u4fee\u590dbug\u3001\u8d21\u732e\u6e90\u7801\u7684\u5168\u8fc7\u7a0b\u4ee5\u53ca\u7ed9\u6211\u5e26\u6765\u7684\u601d\u8003\u3002\u53ea\u505a\u4e86\u4e00\u70b9\u5c0f\u5c0f\u7684\u5de5\u4f5c\uff0c\u8c22\u8c22\u5927\u5bb6\u3002"))}i.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=i(n),d=a,j=s["".concat(c,".").concat(d)]||s[d]||u[d]||p;return n?r.a.createElement(j,l(l({ref:t},o),{},{components:n})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,c=new Array(p);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<p;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/content-type-mp4-92fc757e446b0e1961e299b87c316411.jpg"},325:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dogs-d2766e48b9e7857d259ec329f275423b.jpeg"},326:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/content-type-mpeg4-d0de5b42eba4a86994b237a729a55003.jpg"},327:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pull-request-06c81a492093cddb6c83cf272cb3a8f5.jpg"}}]);