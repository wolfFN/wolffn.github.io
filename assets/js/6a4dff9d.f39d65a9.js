"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6181],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"wsl"},p=void 0,s={unversionedId:"tools/ubuntu/wsl",id:"tools/ubuntu/wsl",title:"wsl",description:"\u78c1\u76d8\u7a7a\u95f4",source:"@site/docs/tools/ubuntu/wsl.md",sourceDirName:"tools/ubuntu",slug:"/tools/ubuntu/wsl",permalink:"/docs/tools/ubuntu/wsl",draft:!1,tags:[],version:"current",frontMatter:{title:"wsl"},sidebar:"tools",previous:{title:"Ubuntu",permalink:"/docs/tools/ubuntu/"},next:{title:"Operation",permalink:"/docs/tools/ubuntu/operation"}},u={},c=[{value:"\u78c1\u76d8\u7a7a\u95f4",id:"\u78c1\u76d8\u7a7a\u95f4",level:2},{value:"wsl proxy",id:"wsl-proxy",level:2},{value:"Github",id:"github",level:3},{value:"Archive",id:"archive",level:3}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u78c1\u76d8\u7a7a\u95f4"},"\u78c1\u76d8\u7a7a\u95f4"),(0,o.kt)("p",null,"\u4e0d\u540c\u4e8e WSL1\uff0cWSL2 \u672c\u8d28\u4e0a\u662f\u865a\u62df\u673a\uff0c\u6240\u4ee5 Windows \u4f1a\u81ea\u52a8\u521b\u5efa vhdx \u540e\u7f00\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u4f5c\u4e3a\u5b58\u50a8\u3002\u8fd9\u4e2a vhdx \u540e\u7f00\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u7279\u70b9\u662f\u53ef\u4ee5\u81ea\u52a8\u6269\u5bb9\uff0c\u4f46\u662f\u4e00\u822c\u4e0d\u4f1a\u81ea\u52a8\u7f29\u5bb9\u3002\u4e00\u65e6\u6709\u5f88\u591a\u6587\u4ef6\u628a\u5b83\u201c\u6491\u5927\u201d\uff0c\u5373\u4f7f\u628a\u8fd9\u4e9b\u6587\u4ef6\u5220\u9664\u5b83\u4e5f\u4e0d\u4f1a\u81ea\u52a8\u201c\u7f29\u5c0f\u201d\u3002\u6240\u4ee5\u5220\u9664\u6587\u4ef6\u540e\u8fd8\u9700\u8981\u6211\u4eec\u624b\u52a8\u8fdb\u884c\u538b\u7f29\u624d\u80fd\u91ca\u653e\u78c1\u76d8\u7a7a\u95f4\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u64cd\u4f5c\u6b65\u9aa4\uff1a  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4f4d ext4.vhdx \u6587\u4ef6\u3002\u9ed8\u8ba4\u4f4d\u7f6e\u5982\u4e0b\uff0c\u66ff\u6362 user name \u4ee5\u53ca\u7248\u672c\u5373\u53ef",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Users\\[user name]\\AppData\\Local\\Packages\\CanonicalGroupLimited.Ubuntu20.04LTS_79rhkp1fndgsc\\LocalState\\ext4.vhdx")),(0,o.kt)("li",{parentName:"ol"},"\u5173\u673a\u3002",(0,o.kt)("br",{parentName:"li"}),"Cmd \u4e2d\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"wsl --shutdown")),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528 diskpart\uff0c\u5e76\u5728\u5176\u4e2d\u6267\u884c\u5bf9\u5e94\u547d\u4ee4\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8fd0\u884c\u7ba1\u7406\u8ba1\u7b97\u673a\u7684\u9a71\u52a8\u5668\u7684 DiskPart \u547d\u4ee4\ndiskpart\n# \u9009\u62e9\u865a\u62df\u78c1\u76d8\u6587\u4ef6\nselect vdisk file="[file path]"\n# \u538b\u7f29\u6587\u4ef6\ncompact vdisk\n# \u538b\u7f29\u5b8c\u6bd5\u540e\u5378\u8f7d\u78c1\u76d8\ndetach vdisk\n')),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/521747491"},"\u89e3\u51b3\u5220\u9664\u6587\u4ef6\u540e WSL2 \u78c1\u76d8\u7a7a\u95f4\u4e0d\u91ca\u653e\u7684\u95ee\u9898\n")),(0,o.kt)("h2",{id:"wsl-proxy"},"wsl proxy"),(0,o.kt)("p",null,"\u5f53\u524d\u6700\u4f73\u5b9e\u8df5\u662f\uff0cwsl2 \u91c7\u7528\u7f51\u7edc\u955c\u50cf\u6a21\u5f0f\uff0c\u590d\u7528\u5bbf\u4e3b\u673a\u7f51\u7edc\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","WSL \u5168\u5c40\u8bbe\u7f6e\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<UserName>\\.wslconfig"),", ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config#wslconfig"},"\u53c2\u8003"),"\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u6216\u65b0\u5efa .wslconfig, \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[experimental]\nautoMemoryReclaim=gradual  \nnetworkingMode=mirrored\ndnsTunneling=true\nfirewall=true\nautoProxy=true\n"))),(0,o.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c(\u7ba1\u7406\u5458\u6a21\u5f0f)\u5173\u95ed wsl: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wsl --shutdown\n"))),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 wsl\uff0c\u6d4b\u8bd5\u4ee3\u7406\u662f\u5426 ok\u3002",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -vv www.google.com\n")))),(0,o.kt)("h3",{id:"github"},"Github"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e github\uff0c\u53ef\u7f16\u8f91/\u65b0\u5efa\u5982\u4e0b\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/config"),"\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Host github.com\nProxyCommand connect -H 127.0.0.1:7890 %h %p\nHostName %h\nPort 22\nUser git\nIdentityFile  ~/.ssh/id_rsa \nIdentitiesOnly yes\n"))),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709 connect \u547d\u4ee4\uff0c\u5148\u5b89\u88c5\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install connect-proxy\n"))),(0,o.kt)("li",{parentName:"ol"},"\u6821\u9a8c\u3002",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -T git@github.com\n")))),(0,o.kt)("h3",{id:"archive"},"Archive"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u65e9\u671f\u65b9\u6cd5\uff0c\u73b0\u5df2\u5e9f\u5f03  ")),(0,o.kt)("p",null,"\u5728 wsl \u73af\u5883\u4e2d\uff0c\u914d\u7f6e\u4f7f\u7528\u5bbf\u4e3b\u673a(windows)\u4ee3\u7406\uff0c\u9996\u5148\uff0c\u8981\u5728windows\u9632\u706b\u5899\u4e2d\u521b\u5efa\u5165\u7ad9\u3001\u8fdb\u7ad9\u89c4\u5219\uff0c\u5c06\u5bbf\u4e3b\u673a\u4ee3\u7406\u8f6f\u4ef6\u7aef\u53e3(clash:7890)\u5f00\u653e\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e4b\u540e\uff0c\u5728 ubuntu \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u83b7\u53d6 ip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/resolv.conf\n\n# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:\n# [network]\n# generateResolvConf = false\nnameserver 172.23.16.1\n")),(0,o.kt)("p",null,"\u4e8e\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5982\u4e0b\u811a\u672c\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"(\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),") \u4e2d\uff0c\u6bcf\u6b21\u542f\u52a8\u81ea\u52a8\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export windows_host=`cat /etc/resolv.conf|grep nameserver|awk \'{print $2}\'`\nexport ALL_PROXY=http://$windows_host:7890\nexport HTTP_PROXY=$ALL_PROXY\nexport http_proxy=$ALL_PROXY\nexport HTTPS_PROXY=$ALL_PROXY\nexport https_proxy=$ALL_PROXY\n\nif [ "`git config --global --get proxy.https`" != "http://$windows_host:7890" ]; then\n        git config --global proxy.https http://$windows_host:7890\nfi\n')),(0,o.kt)("p",null,"\u53ef\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u6821\u9a8c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -vv www.google.com\n")))}f.isMDXComponent=!0}}]);