---
title: 写给Javascript程序员的Jupyter Notebook使用指北
Tags: [jupyter-notebook, javascript]
---

>  [Jupyter Notebook](http://jupyter.org/)是一块所见即所得的画布，通过在浏览器上编辑代码，让开发人员实现展示与快速迭代的利器。项目最初给予python，通过安装插件，对Javascript也有良好的支持。

>  本文主要针对前端/Javascript工程师在安装、配置的过程进行记录。希望notebook能给我们的开发、研究工作带来便利。

<!--truncate-->

## python工程师
推荐专业的Python开发人员，安装`Anaconda`用以进行版本控制、包管理：
``` bash
brew cask install Anaconda
```

## 前端(Javascript)工程师
前端工程师使用notebook主要是为了运行js代码，所以没必要安装专业的`python`版本管理工具。直接通过`python3`以及`pip3安装即可`。具体安装方法如下：

#### 安装Jupyter Notebook
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
```

#### 安装对javascript的支持

``` bash 
# 安装对js的支持
npm i -g ijavascript
# 此时jupyter中还是没有对javascript的支持
# 手动进入ijavascript所在目录，执行一次.
cd /Users/[user-name]/.nvm/versions/node/v8.1.0/lib/node_modules/ijavascript/bin
./ijavascript.js

# 退出后再一次执行命令，就可以看到对js的支持了。
jupyter notebook
```

#### 使用npm package

如果`notebook`仅仅支持`javascript`，而不支持广大的`npm packages`，相信对于我们没什么实质意义。所幸，只需要在`my-notebooks`目录初始化npm，然后安装所需package即可支持。

```bash
npm init
npm i lodash -S
```

安装过后，效果如下：
![npm-support.png](/img/blog/Jupyter/npm-support.png)

#### 安装对ES6的支持

`ijavascript`作者创建了一个新包[jp-babel](https://github.com/n-riesco/jp-babel)来支持`ES6`。
与`ijavascript`一样，通过`npm`全局安装，再进入到其所在目录下的`bin`目录运行`jp-babel.js`一次即可。之后每次启动`jupytor notebook`，选择对应类型即可。如下图。

````bash
# 安装对ES6的支持
npm install -g jp-babel
# 与ijavascript一样，首次运行需要进入目录并执行
cd /Users/[user-name]/.nvm/versions/node/v8.1.0/lib/node_modules/ijavascript/bin/jp-babel
./jp-babel.js
````

![ES6-support.png](/img/blog/Jupyter/ES6-support.png)

运行效果如下图：

![es6-output.png](/img/blog/Jupyter/es6-output.png)



唯一不完美的是，输入代码后，使用快捷键`Control + Enter`运行代码，在第二次时就会报错。可能因为是默认使用了严格模式。
解决方案是先点击菜单上的`Kernel -> Interrupt`，然后再`Control + Enter`运行。当然，`Interrupt`也有快捷键，默认为`I,I`，如果使用不便（比如与`Vimium `插件冲突），在`Help -> Edit Keyboard Shortcuts`中可以进行修改。



## 结论

以上就是`Jupyter Notebook`的安装，以及对`Javascript`支持配置的完整过程。有了她，我们不仅能在文档中执行代码，还能以网页形式分享。同时，通过重现整个分析过程，并将说明文字、代码、图表、公式、结论都整合在一个文档中，与同行们进行有效沟通。