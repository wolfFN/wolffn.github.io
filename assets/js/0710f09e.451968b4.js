"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9747],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return N}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),k=r,N=c["".concat(p,".").concat(k)]||c[k]||u[k]||o;return t?a.createElement(N,i(i({ref:n},m),{},{components:t})):a.createElement(N,i({ref:n},m))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},42909:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"\u547d\u4ee4\u884c"},p=void 0,s={unversionedId:"tools/mac/terminal",id:"tools/mac/terminal",title:"\u547d\u4ee4\u884c",description:"1. Homebrew, \u671f\u95f4\u4f1a\u81ea\u52a8\u5b89\u88c5Command Line Tools",source:"@site/docs/tools/mac/terminal.md",sourceDirName:"tools/mac",slug:"/tools/mac/terminal",permalink:"/docs/tools/mac/terminal",draft:!1,tags:[],version:"current",frontMatter:{title:"\u547d\u4ee4\u884c"},sidebar:"tools",previous:{title:"\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/docs/tools/mac/system"},next:{title:"\u5e94\u7528\u8f6f\u4ef6",permalink:"/docs/tools/mac/software"}},m={},c=[],u={toc:c},k="wrapper";function N(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.kt)(k,(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Homebrew, \u671f\u95f4\u4f1a\u81ea\u52a8\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"Command Line Tools")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\nbrew doctor #\u9a8c\u8bc1\u5b89\u88c5\u6b63\u786e\n# \u4ee5\u4e0b\u4e3a\u5e38\u7528\u547d\u4ee4\nbrew install [package]      # \u5b89\u88c5\u5305\nbrew uninstall [package]    # \u5378\u8f7d\u5305\nbrew outdated                       # \u5217\u51fa\u8fc7\u65f6\u7684\u8f6f\u4ef6\nbrew upgrade                            # \u66f4\u65b0\u8fc7\u65f6\u7684\u8f6f\u4ef6(\u5168\u90e8\u6216\u6307\u5b9a)\nbrew update                             # \u5347\u7ea7homebrew\u5728\u670d\u52a1\u5668\u7aef\u4e0a\u7684\u5305\u76ee\u5f55\n\nbrew list                   # \u5217\u51fa\u6240\u6709\u5b89\u88c5\u7684\u5305\nbrew home [name]        # \u8bbf\u95ee\u5b98\u7f51\nbrew cleanup [name] # \u6e05\u7406\u65e7\u7248\u672c\u7f13\u5b58\uff0cname\u53ef\u9009\uff0c\u82e5\u4e0d\u6307\u5b9a\uff0c\u5219\u6e05\u7406\u6240\u6709\nbrew cleanup -n         # \u5217\u51fa\u53ef\u4ee5\u6e05\u7406\u7684\u5e94\u7528\uff0c\u4f46\u4e0d\u8fdb\u884c\u64cd\u4f5c\nbrew info                   # \u5b89\u88c5\u5305\u4fe1\u606f\u68c0\u7d22\n\n# \u670d\u52a1\u7ba1\u7406\nbrew services list  # \u67e5\u770b\u4f7f\u7528brew\u5b89\u88c5\u7684\u670d\u52a1\u5217\u8868\nbrew services run formula|--all  # \u542f\u52a8\u670d\u52a1\uff08\u4ec5\u542f\u52a8\u4e0d\u6ce8\u518c\uff09\nbrew services start formula|--all  # \u542f\u52a8\u670d\u52a1\uff0c\u5e76\u6ce8\u518c\nbrew services stop formula|--all   # \u505c\u6b62\u670d\u52a1\uff0c\u5e76\u53d6\u6d88\u6ce8\u518c\nbrew services restart formula|--all  # \u91cd\u542f\u670d\u52a1\uff0c\u5e76\u6ce8\u518c\nbrew services cleanup  # \u6e05\u9664\u5df2\u5378\u8f7d\u5e94\u7528\u7684\u65e0\u7528\u7684\u914d\u7f6e\n')),(0,o.kt)("p",{parentName:"li"},"\u82e5\u547d\u4ee4\u957f\u65f6\u95f4\u4e0d\u6267\u884c\uff0c\u4e14\u672a\u5f39\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"Command Line Tools"),"\u7684\u8bb8\u53ef\u8bf7\u6c42"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u624b\u52a8\u5b89\u88c5 command line tools\nxcode-select --install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"iterm2"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew cask install iterm2\n")),(0,o.kt)("p",{parentName:"li"},"Config:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Appearance")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"General")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Theme")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Minimal")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Appearance")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs")," -> unselect ",(0,o.kt)("inlineCode",{parentName:"li"},"Stretch tabs to fill bar")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Profiles")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Duplicate Profile")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"set as default")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Profiles")," -> Choose your profile -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Keys")," -> \u9009\u4e2d\u4e24\u4e2aEsc\n",(0,o.kt)("img",{alt:"mac-iterm-alt.png",src:t(54131).Z,width:"1019",height:"572"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Profiles")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"General")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Working Directory")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Reuse Previous session's directory")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Window")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Transparency / Blur")),(0,o.kt)("li",{parentName:"ol"},"\u7981\u6b62tab\u4e4b\u95f4\u5171\u4eabhistory\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"zsh"),"\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"~/.zshrc"),"\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unsetopt inc_append_history\nunsetopt share_history\n"))),(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://iterm2colorschemes.com/"},"\u4e3b\u9898\u914d\u8272"),"\uff0c\u63a8\u8350\uff1aGruvbox Dark\uff0cSnazzy\uff0cSolarized Dark Higher Contrast\uff0cayu"),(0,o.kt)("li",{parentName:"ol"},"export\u811a\u672c\u4e0b\uff0c\u4f7f\u7528sz,rz\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"export LC_CTYPE=en_US")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://ohmyz.sh/"},"Oh My Zsh")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zsh --version # \u67e5\u770b\u7248\u672c\nbrew install zsh\nchsh -s /bin/zsh\n\nbrew install wget\nwget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - |sh\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\u63a8\u8350\u63d2\u4ef6\uff0c\u4e3b\u9898\uff1a\n\u200b``` bash\nplugins=(git textmate ruby autojump osx mvn gradle)\nZSH_THEME="robbyrussell"\n# ZSH_THEME="agnoster"\n# ZSH_THEME="ys"\n# ZSH_THEME="avit"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tj/n"},"n"),": Node.js \uff08\u4ea4\u4e92\u5f0f\uff09\u7248\u672c\u7ba1\u7406\u5de5\u5177",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b89\u88c5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install n\n")),(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," \u4e2d\u6dfb\u52a0\u8def\u5f84\u4fe1\u606f\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# n\nexport N_PREFIX=$HOME/.n\nexport PATH=$N_PREFIX/bin:$PATH\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7248\u672c\nn ls\nn ls-remote lts\nn ls-remote --all\n\n# \u5b89\u88c5 nodejs\nn 12.22.12\nn lts\n\n# \u8fdb\u5165\u4ea4\u4e92\u754c\u9762\uff0c\u9009\u62e9\u7248\u672c\nn\n\n# \u5220\u9664\u6307\u5b9a\u7248\u672c\nn rm 16.14.2\n# \u5220\u9664\u5168\u90e8\u7f13\u5b58\u7248\u672c\nn prune\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm/blob/master/README.md"},"nvm"),(0,o.kt)("br",{parentName:"p"}),"\n","\u5bf9\u6bd4 ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \uff0c\u7f3a\u70b9\u662f\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u62d6\u6162 ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," \u7684\u901f\u5ea6\u3002\u4f18\u70b9\u662f\u5f53\u4f7f\u7528\u5168\u5c40\u6a21\u5757\u65f6\uff0c\u5bf9\u4e0d\u540c\u7248\u672c ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7684\u6c99\u7bb1\u673a\u5236\u3002\n\u5b89\u88c5:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash\n# \u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230 ~/.zshrc\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm\n# \u91cd\u65b0\u52a0\u8f7d ~/.zshrc\nsource ~/.zshrc\n')),(0,o.kt)("p",{parentName:"li"},"\u5e38\u7528\u547d\u4ee4:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install 8                              # \u5b89\u88c5v8,\u540c\u6837\u53ef\u4ee5 6.10, 0.10.35\u7b49\nnvm ls                                     # \u5217\u51fa\u5df2\u5b89\u88c5\u7248\u672c\nnvm alias default 6                        # \u4f7f\u7528v6\nnvm current                                # \u67e5\u770b\u5f53\u524d\u7248\u672c\nnvm run 0.10.32 app.js                     # \u4f7f\u7528 v0.10.32 \u8fd0\u884c app.js\nnvm uninstall 6                            # \u5220\u9664 v6\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"vs code"),": \u6587\u672c\u7f16\u8f91\u5668,\u4e0d\u559c\u6b22IDE\u7684\u63a8\u8350\u4f7f\u7528,\u5de8\u786c\u51fa\u54c1,\u597d\u8bc4!\n\u63a8\u8350\u63d2\u4ef6: vscode-icon,  Code Runner\n\u63a8\u8350\u4e3b\u9898: ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro"),"\n\u8fd0\u884cVS code\u5e76\u6253\u5f00\u547d\u4ee4\u9762\u677f\uff08 \u21e7\u2318P \uff09\uff0c\u7136\u540e\u8f93\u5165",(0,o.kt)("inlineCode",{parentName:"p"}," shell command")," \u627e\u5230:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," Install 'code' command in PATH\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://jupyter.org/"},"Jupyter Notebook")," :\nJupyter Notebook\u662f\u4e00\u5757\u6240\u89c1\u5373\u6240\u5f97\u7684\u753b\u5e03\uff0c\u901a\u8fc7\u5728\u6d4f\u89c8\u5668\u4e0a\u7f16\u8f91\u4ee3\u7801\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5c55\u793a\u4e0e\u5feb\u901f\u8fed\u4ee3\u7684\u5229\u5668\u3002\u9879\u76ee\u6700\u521d\u7ed9\u4e88python\uff0c\u901a\u8fc7\u5b89\u88c5\u63d2\u4ef6\uff0c\u5bf9Javascript\u4e5f\u6709\u826f\u597d\u7684\u652f\u6301\u3002"),(0,o.kt)("p",{parentName:"li"},"\u672c\u6587\u4ec5\u6d89\u53ca\u6700\u57fa\u672c\u5b89\u88c5\uff0c\u66f4\u591a\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"Javascript"),"\u7684\u652f\u6301(es6, npm package)\u53ef\u4ee5\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://wolffn.github.io/2018/06/14/%E5%86%99%E7%BB%99Javascript%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84Jupyter-Notebook%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8C%97/"},"\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter Notebook\u4f7f\u7528\u6307\u5317")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9996\u5148\u5b89\u88c5python3\nbrew install python3\npython3 --version # \u786e\u8ba4\u5b89\u88c5\u6210\u529f\npip3 --version # \u786e\u8ba4pip3\u5b89\u88c5\u6210\u529f\npip3 install jupyter notebook \n# \u6b64\u65f6\u5df2\u7ecf\u5b89\u88c5\u6210\u529f\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709\u5bf9js\u7684\u652f\u6301\u3002\n# \u8fdb\u5165\u4f60\u5e0c\u671b\u5b58\u50a8notebook\u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u5373\u53ef\u8fd0\u884c\ncd ~/workspace/\nmkdir my-notebooks\njupyter notebook\n\n# \u5b89\u88c5\u5bf9js\u7684\u652f\u6301\nnpm i -g ijavascript\n# \u6b64\u65f6jupyter\u4e2d\u8fd8\u662f\u6ca1\u6709\u5bf9javascript\u7684\u652f\u6301\n# \u624b\u52a8\u8fdb\u5165ijavascript\u6240\u5728\u76ee\u5f55\uff0c\u6267\u884c\u4e00\u6b21.\ncd /Users/[user-name]/.nvm/versions/node/v8.1.0/lib/node_modules/ijavascript/bin\n./ijavascript.js\n\n# \u9000\u51fa\u540e\u518d\u4e00\u6b21\u6267\u884c\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u5bf9js\u7684\u652f\u6301\u4e86\u3002\njupyter notebook\n")))))}N.isMDXComponent=!0},54131:function(e,n,t){n.Z=t.p+"assets/images/mac-iterm-alt-d208b4eee6ec2b14b4c0ff1a020fc5ad.png"}}]);