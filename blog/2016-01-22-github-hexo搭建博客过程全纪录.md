---
title: github+hexo搭建博客过程全纪录
tags: [blog, hexo, github]
---

*本文记录mac上搭建hexo+github blog的全过程*

<!-- truncate -->

## 1.准备篇

- 安装git
若已经安装xcode，（在app store下载安装），只需选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。
若未安装，打开terminal，输入以下命令，安装homebrew
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
然后通过homebrew安装git
```
brew install git
```

- 安装node
- 安装npm
- 注册github
登录官网 <http://github.com/>注册，并在邮箱中**确认注册**。
- 建立github仓库 username.github.io
项目名称必须为username.github.io，username与注册时的用户名**完全相同**，在该项目的setting中，找到GitHub Pages一项，根据提示开启“automatic page generator”

- 上传rsa key 至github


## 2.安装Hexo
注：以下采用npm安装。如未翻墙，请在每条命令后面加入如下代码：

```
--disturl=http://registry.npm.taobao.org/mirrors/node --registry=http://registry.npm.taobao.org
```

```
npm install hexo -g --save
```
建立目录，初始化hexo
```
mkdir blog
cd blog
hexo init
npm install
```
## 3.发表文章至github

配置_config.yml

```
deploy:
    type: git
    repo: git@github.com:username/usernema.github.io.git
    branch: master
```

重中之重：每个冒号之后都要有 ** 一个空格 ** ，否则后面的步骤会静默失败，这真是让人抓狂。

发布新文章
```
hexo new "title"
```
生成静态页面
```
hexo generate
```
启动本地服务器
```
hexo server
```
部署至github
```
hexo deploy
```
清空缓存
```
hexo clean
```

## 4.修改主题  
- 在github上寻找喜欢的主题，将其目录拷贝到themes目录下。
- 修改_config.yml中theme为新主题名称。

推荐[Next主题](https://github.com/iissnan/hexo-theme-next)，[文档](http://theme-next.iissnan.com/getting-started.html)。

** 最后建议将blog目录的code同样提交至github，保存。**
