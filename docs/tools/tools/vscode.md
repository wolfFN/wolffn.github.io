---
title: VS Code
---

## Debug with Chrome

打断点一般两种形式:

1. 代码中加入 `debugger`. 缺点是需要重新 build,可能会浪费时间. 此外增加了对代码的额外修改.
1. devtools Source 面板中定位代码, 添加断点. 缺点是定位麻烦.

比上述两种方式更方便的形式是直接在 vs code 中打断点, 步骤如下:

1. vs code 中添加 debug 配置

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "attach",
            "name": "Attach to browser",
            "port": 9222,
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

1. 使用如下命令启动 Chrome:

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

1. vs code, run and debug 界面, 点击 Start Debugging, 或 F5.

## 美化设置

Theme: `Cobalt2 Theme Official`，对眼睛最好  
字体：`Source Code Pro`  
字体：`Fira Code`，配合 `editor.fontLigatures`

`cursor`一系列相关选项，设置光标效果

## 格式化设置
prettier 使用 .editorconfig 作为配置, 在 package.json 加入:
```json
"prettier": {
  "editorconfig": true
},
```

## 全局命令

`cmd + shift + p` 进入命令

## 界面操作

`Side Bar` -> `explorer上右键`，选择想看到的  
`cmd + b` toggle sidebar  
`cmd + J` toggle bottom screen  
`cmd + k, z` toggle zen mode  
`cmd + 1/2` 在打开的窗口间切换，当一个窗口拉到最大时，切换时将自动将 focus 窗口最大化

## 文件操作

`cmd + p` 打开文件  
`ctrl + tab` 选择最近编辑的文件打开  
`cmd + |` 或 `cmd + 左键点击文件` 在另一个侧栏打开  
`cmd + |`，terminal 中也有效  
`cmd + k, m` 选择编程语言

## 导航

`cmd + 悬停`                 show defination  
`F12` `cmd ＋ 左键`       Go To Defination  
`Alt + F12`                 Peek Defination  
`shift + F12`             Go To Reference  
`cmd + u` , `ctrl + 0`  返回鼠标上一个位置  
`cmd + alt + 左键`      在另一个侧栏打开  
`cmd + shift + o`     Symbol 导航  
`cmd + t`                      多文件中定位 Symbol  
`cmd + p ?/@/@:/:行号`          提示、符号间导航、分类符号间导航、跳转到行号  
`cmd + shift + f`                  全局搜索

## 代码格式化

`alt + shift + f` 代码格式化  
`Cmd + k, Cmd + f` 局部代码格式化

## 选择

`cmd + shift +[ ]` 折叠／展开代码  
`cmd + K, cmd + 0` 折叠全部  
`cmd + K, cmd + J` 展开全部  
`cmd + K, cmd + 1-5` 不同 level 的折叠  
`cmd + shift + ctrl + 上下` 区域选择代码 ?  
`F2` 重构名称

## 整行操作

`cmd + i` 选择当前行  
`alt + shift + 上下` 复制整行  
`alt + 上下` 移动整行  
`cmd + shift + K` 删除整行

## 多行编辑

`alt + 左键`  
`cmd + alt + 方向键上下`   
`alt + shift + 鼠标拖拽`  
`cmd + shift + l` 选中所有相同的单词  
选择某内容后，`cmd + d`  逐个选中相同内容  
`cmd + k, cmd + d`  选择下一个相同内容  
`ctrl + j` 合并多行

### 区块选择

`ctrl + cmd + shift + left/right` 区块选择

## Git

`cmd + shift + p` 进入命令行，输入 git + space  
`cmd + enter` git 提交  
`> GitHD: View History`，等相关命令

## 技巧

1. 驼峰法补全：`ua` => `userAccount`
2. [代码折叠](https://code.visualstudio.com/updates/v1_17#_folding-regions)

```javascript
   // #region X
   ...
   // #endregion X

```

3. `css`文件中，选择器上面悬停，显示对应的 DOM 节点；颜色上面悬停，显示颜色选择器。
4. `cmd + shift + m` 查看错误／警告
    1. `F8` 遍历错误信息
    1. `shift + F8` 遍历错误信息
5. `cmd + k, v` markdown preview
6. `emmet`  技巧：
    1. config -> `emmet.includeLanguages`
    1. 空`html`文件中，`! + Tab`，自动生成 html 模板
    1. `html` -> `img标签`，命令：upodate image size，自动生成图片尺寸，对网络图片也有效
7. `Package.json`中，输入包名，可以自动检索 npm 网站并提示；输入版本号时，`ctrl + space`进行提示。
8. `side bar`  中选中两个文件， `右键`  -> `Compare selected`

## 命令行打开

```bash
# open code with current directory
code .
# open the current directory in the most recently used code window
code -r .
# create a new window
code -n
# change the language
code --locale=es
# open diff editor
code --diff <file1> <file2>
# see help options
code --help
# disable all extensions
code --disable-extensions .
```
