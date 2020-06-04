---
title: Ubuntu
---

> 追随大家的脚步撸了腾云讯的羊毛，准备在上面自己开发点服务玩玩。本文主要记录折腾配置环境的过程。留作日后查看。

## 系统选择

对于这台云主机，我的定位是**折腾**，也就是说，自己业余时间在上面开发一些玩具性质的东西，如果做得好，作为一个`side project`。既然不是专业的服务，所以不想在环境配置上面浪费太多时间。`ubuntu`的优点在于：

1. 教程比较多
1. 我个人比较熟悉。

所以主机一到手，我就将`centOS`重装为`ubuntu`。

## 新建账户

第一步是建立一个非 root 用户，用以日常操作。

```bash
# 创建用户
sudo useradd [user-name]

# 修改密码
sudo passwd [user-name]

# 创建用户文件夹
sudo mkdir /home/[user-name]

# 修改用户文件夹所有者
sudo chown [user-name] /home/[user-name]

# 将新创建的用户添加到sudo组。其中: a表示添加，G指定组名
sudo usermod -aG sudo [user-name]

# 查看默认shell
ls -l /bin/sh

# 在弹出的踢实况选否，干掉dash(在配置新shell之后，可选)
sudo dpkg-reconfigure dash
```

## zsh

```bash
# 查看是否有zsh
cat /etc/shells

# 安装zsh
sudo apt-get install zsh

# 修改默认shell为zsh
chsh -s /bin/zsh

# 安装git
sudo apt-get install git

# 安装oh-my-zsh
sudo wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

## nvm

我主要想折腾 nodejs、graphQL 相关内容，所以最重要的环境就是 nodejs。这里通过 nvm 的方式进行安装。

```bash
sudo wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
nvm install 10
```

## Nginx

如果访问 github 速度慢，可以去[官网](http://tengine.taobao.org/download_cn.html)下载

```bash
# 下载 Tengine：
git clone https://github.com/alibaba/tengine.git

# 依赖
apt-get install libpcre3 libpcre3-dev
apt-get install zlib1g-dev
apt-get install openssl libssl-dev

# 编译安装，进入代码目录
./configure --with-http_v2_module
make
sudo make install

# 运行：
# Tengine 配置与 nginx 基本一致，可执行程序位于 /usr/local/nginx/sbin 目录下。
/usr/local/nginx/sbin/nginx -s start
/usr/local/nginx/sbin/nginx -s reload
/usr/local/nginx/sbin/nginx -s stop
```

## MySQL

真正让我把过程记录下来的原因，就是因为 MySQL。因为平时数据库用得少，所以不熟悉，安装、配置也确实比其他麻烦一些。至于为什么选择 MySQL，可以参见我 Mac 环境下配置 MySQL 的那篇 blog。

-   安装：

```bash
# 可选版本: mysql-server-5.7
sudo apt-get install mysql-server

# 安装过程会提示输入root用户的密码
# 服务启动后端口查询
netstat -anp | grep mysql
```

-   服务管理

```bash
# 服务状态
sudo service mysql status

# 启动
service mysql start

# 停止
service mysql stop

# 重启
service mysql restart
```

-   几个重要目录：
    1. 数据库目录：/var/lib/mysql/
    1. 配置文件：
        1. /usr/share/mysql（命令及配置文件）
        1. /etc/mysql（如：my.cnf）
    1. 相关命令：/usr/bin(mysqladmin mysqldump 等命令) 和/usr/sbin
    1. 启动脚本：/etc/rc.d/init.d/（启动脚本文件 mysql 的
-   修改默认编码为 utf-8

```bash
 # sql环境下，查看编码
show variables like 'character%';

# 编辑配置文件
vi /etc/mysql/cdonf.d/mysql.cnf
```

然后输入以下内容，保存，重启服务即可。

```shell
[mysql]
default-character-set=utf8
[mysqld]
character-set-server=utf8
```

-   卸载

```bash
# 首先使用以下命令删除MySQL服务器：
sudo apt-get remove mysql-server

# 然后，删除随MySQL服务器自动安装的任何其他软件：
sudo apt-get autoremove

# 卸载其他组件：
sudo apt-get remove <<package-name>>

# 查看从MySQL APT存储库安装的软件包列表：
dpkg -l | grep mysql | grep ii
```

-   允许远程访问
    <br />即使只是自己折腾玩的服务器，也不该允许`root`用户远程访问数据库。所以此处我们先建立用户，然后授予给用户一个 database 的权限，然后再开放远程访问。

```bash
# 给localhost创建用户nodejs，并将密码设置为nodejs。
# 此处 % 代表任意IP地址。如果想限制，则可输入任意ip或者localhost
CREATE USER 'nodejs'@'%' identified by 'nodejs';

# 创建新的数据库，并将权限全部赋予nodejs用户
CREATE DATABASE nodejs;
GRANT ALL PRIVILEGES ON nodejs.* TO 'nodejs'@'%' IDENTIFIED BY 'nodejs';

# 最后将用户权限信息从数据表同步到内存（此命令可以避免重启mysql服务）
FLUSH PRIVILEGES;
```

-   接下来需要修改云主机上的 mysql 配置，允许远程访问

```bash
vi /etc/mysql/mysql.conf.d/mysqld.cnf

# 注释掉该行：
bind-address = 127.0.0.1

# 重启服务
service mysql restart
```

-   最后一步是修改腾云讯控制台的权限  
    控制台 -> 安全组 -> 选择希望修改的安全组最后的“操作 -> 修改规则” -> 添加规则 ->  
    类型：自定义；来源：0.0.0.0/0；协议端口：TCP:3306；策略：允许；备注：mysql。  
    保存即可。此时便可以使用图形化工具远程连接数据库。
