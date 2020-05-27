---
title: Mac配置MySQL以及Squel Pro
tags: [mac, mysql, tools]
---
> 为了响应`nodejs`的大红大紫，最近应用其实现了一些server端的功能。数据库方面选择了老少咸宜的`MySQL`。今后肯定还会有相关应用需求。特此记录`Mac`系统下如何安装、配置`MySQL`及其管理工具`Squel Pro`。

<!--truncate-->

### Why MySQL
数据库有很多，为什么么我选择了`MySQL`呢。
- 关系型数据库 or NoSQL
   近年来NoSQL大红大紫，其中佼佼者`mongoDB`更是方便易用。二者的优劣细节讨论起来恐怕不是一篇文章能够搞定的。此处大概总结如下：
   - 适合使用SQL开发的项目：
      可以预先定义逻辑相关的离散数据的需求
      数据一致性是必要的
      具有良好的开发者经验和技术支持的标准的成熟技术
   - 适合使用NoSQL开发的项目：
      不相关，不确定和逐步发展的数据需求
      更简单或者更宽松的能够快速开始编程的项目
      速度和可扩展性至关重要的

由于我们的需求比较明确，关系比较固定，并且业务量不大，速度要求不高。相反对于逻辑要求比较严格，所以选择传统的关系型数据库。

- Why MySQL
  确定了使用关系型数据库，这个问题反而容易解决了，直接随大流`MySQL`似乎成了绝大多数人的选择。我个人总结原因如下：
      1. 开源，免费。
      2. 主流，速度快，性能足够。
      3. 用户多，社区活跃。
      4. 配套工具多，简单易用。

### 安装MySQL
1. `Homebrew`
  可以选择官网下载安装，但是命令行毕竟方便太多了，如果没有`homebrew`，请打开Terminal，使用以下命令安装。
   ```bash
   # 安装homebrew
   ruby -e "$(curl -fsSL  https://raw.githubusercontent.com/Homebrew/install/master/install)"
   # 验证安装正确
   brew doctor
   ```
2. 安装`MySQL`
   ```bash
   brew install mysql
   ```
   此时注意到提示如下，所以先启动服务，再运行相关命令：
   > We’ve installed your MySQL database without a root password. To secure it run: 
   > mysql_secure_installation
3. 启动`MySQL`服务
   ```bash
   mysql.server start
   ```
4. 按提示`mysql_secure_installation `，设置用户名以及密码
   ```bash
   mysql_secure_installation
   ```
   这里按照提示一步一步设置就可以了，主要包括，选定密码强度，设置密码，确认密码，是否删除无密码用户，是否允许远程root登录，删除自带test数据库。
5. 登录测试一下
   ```bash
   mysql -u root -p
   ```

### MySQL基本命令
虽然作为FE，我们最终选择了图形化管理工具`Squel Pro`，但是一些基本的命令还是需要掌握的。应用场景还是很多，比如，只是想做一个快速校验，或者是在他人电脑上，以及远程登录数据库时。

1. 基本命令
   ```sql
   // 查看有哪些数据库
   show databases;
   // 查看当前使用的是哪个数据库
   select database();
   // 选择数据库
   use [database-name];
   // 显示数据库中的tables
   show tables;
   // 建立数据库
   CREATE DATABASE [new-database-name]; 
   ```

2. 新建用户。
   ```sql
   // 给localhost创建用户nodejs，并将密码设置为nodejs
   CREATE USER 'nodejs'@'%' identified by 'nodejs';
   // 将用户权限信息从数据表同步到内存（此命令可以避免重启mysql服务）
   FLUSH PRIVILEGES;
   ```

3. 授予权限。
   接下来我们为当前应用创建一个名为nodejs的数据库，并将其权限全部赋予user nodejs.
   ```sql
   CREATE DATABASE nodejs; 
   GRANT ALL PRIVILEGES ON nodejs.* TO 'nodejs'@'%' IDENTIFIED BY 'nodejs';
   ```

4. 查找本地`my.conf`位置
   ``` bash
   sudo /usr/libexec/locate.updatedb
   # 可能要等待几分钟，然后继续
   $ locate my.cnf
   ```
5. 只允许本地访问(v5.7.21)，若允许远程访问，则注释掉该行。
   ``` json
   [mysqld]
   bind-address = 127.0.0.1
   ```







### Sequel Pro


![Sequel Pro.png](/img/blog/mac-mysql/sequel-pro.png)

登陆后软件界面如上图所示。可以简单看到如下功能：
1. 左上角数据库选择，可以管理数据库
2. 左侧栏`TABLES`，可以管理数据表
3. 中间主要区域，可以管理数据表中数据。
4. 右上角`Users`，可以管理用户。
5. 右上角`Console`，可以方便运行Mysql命令。

##### 安装
[官网](http://www.sequelpro.com/)下载安装包后运行即可。
##### 登录
界面如下，输入`Host`,`Username`,`Password`即可登录。此处建议使用新建的nodejs用户登录管理`nodejs`数据库。除建立新用户、给新用户授予权限外，为安全原因，不建议使用`root`用户。
![login.png](/img/blog/mac-mysql/login.png)

##### 使用
登陆后点击右上角，可以看到选择数据库，新建数据库等等信息，就可以开始查看、管理数据库了。由于工具本身图形界面做的重点突出使用方便，此处不再赘述。

![choose database.png](/img/blog/mac-mysql/choose-database.png)