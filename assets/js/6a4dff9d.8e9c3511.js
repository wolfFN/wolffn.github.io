"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6181],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={title:"wsl"},s=void 0,u={unversionedId:"tools/ubuntu/wsl",id:"tools/ubuntu/wsl",title:"wsl",description:"\u78c1\u76d8\u7a7a\u95f4",source:"@site/docs/tools/ubuntu/wsl.md",sourceDirName:"tools/ubuntu",slug:"/tools/ubuntu/wsl",permalink:"/docs/tools/ubuntu/wsl",draft:!1,tags:[],version:"current",frontMatter:{title:"wsl"},sidebar:"tools",previous:{title:"Ubuntu",permalink:"/docs/tools/ubuntu/"},next:{title:"VS Code",permalink:"/docs/tools/tools/vscode"}},p={},c=[{value:"\u78c1\u76d8\u7a7a\u95f4",id:"\u78c1\u76d8\u7a7a\u95f4",level:2},{value:"wsl proxy",id:"wsl-proxy",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u78c1\u76d8\u7a7a\u95f4"},"\u78c1\u76d8\u7a7a\u95f4"),(0,a.kt)("p",null,"\u4e0d\u540c\u4e8e WSL1\uff0cWSL2 \u672c\u8d28\u4e0a\u662f\u865a\u62df\u673a\uff0c\u6240\u4ee5 Windows \u4f1a\u81ea\u52a8\u521b\u5efa vhdx \u540e\u7f00\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u4f5c\u4e3a\u5b58\u50a8\u3002\u8fd9\u4e2a vhdx \u540e\u7f00\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u7279\u70b9\u662f\u53ef\u4ee5\u81ea\u52a8\u6269\u5bb9\uff0c\u4f46\u662f\u4e00\u822c\u4e0d\u4f1a\u81ea\u52a8\u7f29\u5bb9\u3002\u4e00\u65e6\u6709\u5f88\u591a\u6587\u4ef6\u628a\u5b83\u201c\u6491\u5927\u201d\uff0c\u5373\u4f7f\u628a\u8fd9\u4e9b\u6587\u4ef6\u5220\u9664\u5b83\u4e5f\u4e0d\u4f1a\u81ea\u52a8\u201c\u7f29\u5c0f\u201d\u3002\u6240\u4ee5\u5220\u9664\u6587\u4ef6\u540e\u8fd8\u9700\u8981\u6211\u4eec\u624b\u52a8\u8fdb\u884c\u538b\u7f29\u624d\u80fd\u91ca\u653e\u78c1\u76d8\u7a7a\u95f4\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u64cd\u4f5c\u6b65\u9aa4\uff1a  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4f4d ext4.vhdx \u6587\u4ef6\u3002\u9ed8\u8ba4\u4f4d\u7f6e\u5982\u4e0b\uff0c\u66ff\u6362 user name \u4ee5\u53ca\u7248\u672c\u5373\u53ef",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\[user name]\\AppData\\Local\\Packages\\CanonicalGroupLimited.Ubuntu20.04LTS_79rhkp1fndgsc\\LocalState\\ext4.vhdx")),(0,a.kt)("li",{parentName:"ol"},"\u5173\u673a\u3002",(0,a.kt)("br",{parentName:"li"}),"Cmd \u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"wsl --shutdown")),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528 diskpart\uff0c\u5e76\u5728\u5176\u4e2d\u6267\u884c\u5bf9\u5e94\u547d\u4ee4\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8fd0\u884c\u7ba1\u7406\u8ba1\u7b97\u673a\u7684\u9a71\u52a8\u5668\u7684 DiskPart \u547d\u4ee4\ndiskpart\n# \u9009\u62e9\u865a\u62df\u78c1\u76d8\u6587\u4ef6\nselect vdisk file="[file path]"\n# \u538b\u7f29\u6587\u4ef6\ncompact vdisk\n# \u538b\u7f29\u5b8c\u6bd5\u540e\u5378\u8f7d\u78c1\u76d8\ndetach vdisk\n')),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/521747491"},"\u89e3\u51b3\u5220\u9664\u6587\u4ef6\u540e WSL2 \u78c1\u76d8\u7a7a\u95f4\u4e0d\u91ca\u653e\u7684\u95ee\u9898\n")),(0,a.kt)("h2",{id:"wsl-proxy"},"wsl proxy"),(0,a.kt)("p",null,"\u5728 wsl \u73af\u5883\u4e2d\uff0c\u914d\u7f6e\u4f7f\u7528\u5bbf\u4e3b\u673a(windows)\u4ee3\u7406\uff0c\u9996\u5148\uff0c\u8981\u5728windows\u9632\u706b\u5899\u4e2d\u521b\u5efa\u5165\u7ad9\u3001\u8fdb\u7ad9\u89c4\u5219\uff0c\u5c06\u5bbf\u4e3b\u673a\u4ee3\u7406\u8f6f\u4ef6\u7aef\u53e3(clash:7890)\u5f00\u653e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e4b\u540e\uff0c\u5728 ubuntu \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u83b7\u53d6 ip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/resolv.conf\n\n# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:\n# [network]\n# generateResolvConf = false\nnameserver 172.23.16.1\n")),(0,a.kt)("p",null,"\u4e8e\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5982\u4e0b\u811a\u672c\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"(\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),") \u4e2d\uff0c\u6bcf\u6b21\u542f\u52a8\u81ea\u52a8\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export windows_host=`cat /etc/resolv.conf|grep nameserver|awk \'{print $2}\'`\nexport ALL_PROXY=http://$windows_host:7890\nexport HTTP_PROXY=$ALL_PROXY\nexport http_proxy=$ALL_PROXY\nexport HTTPS_PROXY=$ALL_PROXY\nexport https_proxy=$ALL_PROXY\n\nif [ "`git config --global --get proxy.https`" != "http://$windows_host:7890" ]; then\n        git config --global proxy.https http://$windows_host:7890\nfi\n')),(0,a.kt)("p",null,"\u53ef\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u6821\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -vv www.google.com\n")))}f.isMDXComponent=!0}}]);