---
title: Linux-Mac-Shell常用命令
tags: [shell, linux, mac, tools]
---

> 工欲善其事，必先利其器。无论是做哪一方面开发的程序员，都免不了和shell打交道，不管是基于Linux的服务器、开发机，还是Mac。

> 本文主要记录一些Shell命令的基本用法，作为参考/查询手册，随时更新、完善。更多技巧以及详细解释将后续以专题形式持续更新。

<!--truncate-->

## 命令行操作技巧
### 光标移动
> 注意：Mac系统下Terminal以及Iterm下，使用Alt相关功能，需要单独设置。  

1. `ctrl + a`   移动至行首
1. `ctrl + e`   移动至行尾
1. `alt + f`    向后移动一个单词
1. `alt + b`    向前移动一个单词
1. `alt + 左键`  直接移动到点击位置


### 编辑
1. `ctrl + k`   删除至行尾
1. `ctrl + u`   删除至行首
1. `ctrl + w`   删除前一个单词
1. `ctrl + y`   粘贴删除的内容  

应用示例：输入命令时，发现忘记在最前面输入`sudo`，可进行如下操作：
`ctrl + u`，输入`sudo`，`ctrl + y`

### 其他  
1. `ctrl + x + e`   x,e依次输入，进入编辑器中编辑命令
1. `alt + .`   上一条命令的参数

## 常用命令

1.  `ls` 查看当前目录下的文件
2.  `cd` 进入某目录
    `cd -` 跳转回前一目录
    `cd ~` 进入当前用户个人目录
3.  `pwd` 输出当前所在路径
4.  `mkdir` 新建文件夹
5.  `touch` 新建文件
6.  `find` 查找文件
7.  `ln` 建立链接
8.  `du` 查看目录大小
9.  `cal` 显示日历
10.  `date` 显示当前日期、时间



## 文件传输类

1.  `mv` 移动文件/重命名
  1.  `cp [File Name] [Destination]` 拷贝文件
  2.  `cp -R [File Name] [Destination]`递归拷贝（主要用于文件夹）
2.  `scp` 远程拷贝，除了需要在远程地址的目录前加入`user@host:`形式的地址信息外，命令用法与copy一致
3.  `ftp` 启动ftp服务。

## 压缩与解压缩
 `tar` 打包压缩
`-c` 归档文件
`-x` 解压缩文件
`-v` 显示压缩/解压缩过程
`-j` bzip2压缩文件
`-z` gzip压缩文件
`-f` 使用档名
`tar -cvf` 只打包，不压缩
`tar -zcvf` 打包，并用gzip压缩
`tar -jcvf` 打包，并用bzip2压缩

解压缩时，只需将上述命令中`c`换成`x`即可。

## 系统命令类

1.  `whoami` 显示当前操作用户
2.  `hostname` 显示主机名
3.  `uname` 显示系统信息
4.  `top` 动态显示当前耗费资源最多进程信息
5.  `ps` 显示瞬间进程状态 `ps aux`
6.  `kill` 杀死进程（top/ps查看进程id后，`kill [id]`）
7.  `netstat`显示网络状态信息
8.  `which [command]` 查看命令所在路径
    `export [VAR]="xxx"`为系统变量赋值
    `alias [short]=[long]` 为命令设定别名
9.  `du -sh *` 带有单位显示目录信息
10.  `df` 查看磁盘大小
    ` df -h` 带有单位显示磁盘信息
  1. `ps`是Process Status的缩写，查看系统进程状态。为我们提供了进程的一次性的查看，它所提供的查看结果并不动态连续的；如果想对进程时间监控，应该用`top`工具。

    `ps -ef`用标准的格式显示进程，是比较常用的一种命令，后面管道接`grep`，查看确切进程状态，之后结合`kill`命令，杀死进程。

## 文本操作类
这是比较重要的一节，后面会专门写文章介绍这些概念，这里只作为一个目录。
1.  `cat` 查看文件内容
2.  `head` 查看文件头部内容
    `tail` 查看文件尾部内容
3.  `more/less`分页显示文件内容
4.  `grep` 在文本文件中查找某个字符串
  1. `sed`管道命令，以行为单位进行处理
  2. `awk`管道命令，以列为单位进行处理
5.  `|` 管道
6.  `> >>` 重定向。其中，`>` 为覆盖，`>>` 为追加。

## 包管理(ubuntu)

此处主要介绍ubuntu包管理概念，大多数Mac用户使用Brew，原理类似，具体命令参考帮助文档即可。

```bash
sudo apt-get update 更新软件源信息
sudo apt-get upgrade 更新已安装的包
sudo apt-get dist-upgrade 升级系统（慎重！！！）
sudo apt-get install 安装软件
sudo apt-get -f install   修复安装
sudo apt-get remove 删除软件
sudo apt-get remove --purge 删除软件以及配置文件
sudo apt-get autoremove 自动删除（未删除的依赖）
sudo apt-get clean && sudo apt-get autoclean 清理无用的包
```

## 权限管理
1.  `chmod` 更改权限
2.  `chown` 更改文件的用户及用户组




## 进阶
### [Grep](http://wolffn.github.io/docs/tools/shell/grep)  
### [AWK](http://wolffn.github.io/docs/tools/shell/awk)  
### [Shell Script](http://wolffn.github.io/docs/tools/shell/shell-script)  