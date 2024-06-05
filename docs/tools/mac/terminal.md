---
title: 命令行
---

1. Homebrew, 期间会自动安装`Command Line Tools`
   ``` bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew doctor #验证安装正确
   # 以下为常用命令
   brew install [package] 		# 安装包
   brew uninstall [package] 	# 卸载包
   brew outdated 						# 列出过时的软件
   brew upgrade 							# 更新过时的软件(全部或指定)
   brew update 							# 升级homebrew在服务器端上的包目录

   brew list 					# 列出所有安装的包
   brew home [name]		# 访问官网
   brew cleanup [name]	# 清理旧版本缓存，name可选，若不指定，则清理所有
   brew cleanup -n			# 列出可以清理的应用，但不进行操作
   brew info 					# 安装包信息检索

   # 服务管理
   brew services list  # 查看使用brew安装的服务列表
   brew services run formula|--all  # 启动服务（仅启动不注册）
   brew services start formula|--all  # 启动服务，并注册
   brew services stop formula|--all   # 停止服务，并取消注册
   brew services restart formula|--all  # 重启服务，并注册
   brew services cleanup  # 清除已卸载应用的无用的配置
   ```

   若命令长时间不执行，且未弹出`Command Line Tools`的许可请求
   ``` bash 
   # 手动安装 command line tools
   xcode-select --install
   ```

2. iterm2

   ``` bash
   brew cask install iterm2
   ```
   Config:
   1. `Preference` -> `Appearance` -> `General` -> `Theme` -> `Minimal`
   2. `Preference` -> `Appearance` -> `Tabs` -> unselect `Stretch tabs to fill bar`
   3. `Preference` -> `Profiles` -> `Duplicate Profile` -> `set as default`
   4. `Preference` -> `Profiles` -> Choose your profile -> `Keys` -> 选中两个Esc
   ![mac-iterm-alt.png](/img/blog/Mac/mac-iterm-alt.png)
   1. `Preference` -> `Profiles` -> `General` -> `Working Directory` -> `Reuse Previous session's directory`
   2. `Window` -> `Transparency / Blur`
   3. 禁止tab之间共享history，使用`zsh`，在`~/.zshrc`输入以下内容：
      ``` bash
      unsetopt inc_append_history
      unsetopt share_history
      ```
   4. 下载[主题配色](https://iterm2colorschemes.com/)，推荐：Gruvbox Dark，Snazzy，Solarized Dark Higher Contrast，ayu
   5. 支持 sz, rz: [iTerm2-zmodem](https://github.com/robberphex/iTerm2-zmodem)

3. [Oh My Zsh](http://ohmyz.sh/)
   ``` bash
   zsh --version # 查看版本
   brew install zsh
   chsh -s /bin/zsh

   brew install wget
   wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - |sh
   ```

   ```
   推荐插件，主题：
   ​``` bash
   plugins=(git textmate ruby autojump osx mvn gradle)
   ZSH_THEME="robbyrussell"
   # ZSH_THEME="agnoster"
   # ZSH_THEME="ys"
   # ZSH_THEME="avit"
   ```

4. [n](https://github.com/tj/n): Node.js （交互式）版本管理工具  
   安装
   ```bash
   brew install n
   ```

   在 `.zshrc` 中添加路径信息。
   ```bash
   # n
   export N_PREFIX=$HOME/.n
   export PATH=$N_PREFIX/bin:$PATH
   ```

   ```bash
   # 查看版本
   n ls
   n ls-remote lts
   n ls-remote --all

   # 安装 nodejs
   n 12.22.12
   n lts

   # 进入交互界面，选择版本
   n

   # 删除指定版本
   n rm 16.14.2
   # 删除全部缓存版本
   n prune
   ```

5. [nvm](https://github.com/creationix/nvm/blob/master/README.md)  
   对比 `n` ，缺点是一定程度上拖慢 `terminal` 的速度。优点是当使用全局模块时，对不同版本 `Node.js` 的沙箱机制。
    安装:  
    [最新命令地址](https://github.com/nvm-sh/nvm#installing-and-updating)
   ``` bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
   # 将以下内容添加到 ~/.zshrc
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
   # 重新加载 ~/.zshrc
   source ~/.zshrc
   ```
   常用命令:
   ``` bash
   nvm install 8                              # 安装v8,同样可以 6.10, 0.10.35等
   nvm ls                                     # 列出已安装版本
   nvm alias default 6                        # 使用v6
   nvm current                                # 查看当前版本
   nvm run 0.10.32 app.js                     # 使用 v0.10.32 运行 app.js
   nvm uninstall 6                            # 删除 v6
   ```

6. [vs code](https://code.visualstudio.com/): 文本编辑器,不喜欢IDE的推荐使用,巨硬出品,好评!
   推荐插件: vscode-icon,  Code Runner
   推荐主题: `One Dark Pro`
   运行VS code并打开命令面板（ ⇧⌘P ），然后输入` shell command` 找到:
   ``` bash
    Install 'code' command in PATH
   ```
7. [Jupyter Notebook](http://jupyter.org/) : 
   Jupyter Notebook是一块所见即所得的画布，通过在浏览器上编辑代码，让开发人员实现展示与快速迭代的利器。项目最初给予python，通过安装插件，对Javascript也有良好的支持。

   本文仅涉及最基本安装，更多对`Javascript`的支持(es6, npm package)可以参考：[写给Javascript程序员的Jupyter Notebook使用指北](http://wolffn.github.io/2018/06/14/%E5%86%99%E7%BB%99Javascript%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84Jupyter-Notebook%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8C%97/)

   ``` bash
   # 首先安装python3
   brew install python3
   python3 --version # 确认安装成功
   pip3 --version # 确认pip3安装成功
   pip3 install jupyter notebook 
   # 此时已经安装成功，但是还没有对js的支持。
   # 进入你希望存储notebook文件的目录，即可运行
   cd ~/workspace/
   mkdir my-notebooks
   jupyter notebook
   
   # 安装对js的支持
   npm i -g ijavascript
   # 此时jupyter中还是没有对javascript的支持
   # 手动进入ijavascript所在目录，执行一次.
   cd /Users/[user-name]/.nvm/versions/node/v8.1.0/lib/node_modules/ijavascript/bin
   ./ijavascript.js
   
   # 退出后再一次执行命令，就可以看到对js的支持了。
   jupyter notebook
   ```

8. [mactop](https://github.com/context-labs/mactop)
   命令行性能监控工具，用以监控 m 系列芯片性能占用。
   ```shell
   # 安装
   brew install mactop

   # 使用
   sudo mactop
   ```
