---
title: 基本操作
---

### 登录

```bash
mysql -u root -p
-u username -p password
```

### 基本操作

```sql
show databases;        查看有哪些数据库
select database();     查看当前使用的是哪个数据库
use xxx；              选择数据库

show databases xxx;
show tables;

CREATE DATABASE nodejs;    创建数据库。
```

### 新建用户

```sql
insert into mysql.user(Host,User,Password)
values("localhost", "phplamp", password("1234"));
//  刷新系统权限表
flush privileges;
```

这样就创建了一个名为：phplamp   密码为：1234   的用户。<br />或者：

```sql
create user 'nodejs'@'%' identified by 'nodejs';
FLUSH PRIVILEGES;
```

### 为用户授权

```sql
// 首先为用户创建一个数据库(phplampDB)
mysql>create database phplampDB;

// 授权phplamp用户拥有phplamp数据库的所有权限。
grant all privileges on phplampDB.* to phplamp@localhost identified by '1234';
// 或者
GRANT ALL PRIVILEGES ON nodejs.* TO 'nodejs'@'%' IDENTIFIED BY 'nodejs';
// mysql 8
GRANT ALL PRIVILEGES ON nodejs.* TO `nodejs`@`%`;

// 刷新系统权限表
flush privileges;
```

如果想指定部分权限给一用户，可以这样来写:

```sql
grant select,update on phplampDB.* to phplamp@localhost identified by '1234';
//刷新系统权限表。
mysql> flush privileges;
```

### 删除用户

```sql
DELETE FROM mysql.user WHERE User="phplamp" and Host="localhost";
flush privileges;
```

### 修改指定用户密码

```sql
update mysql.user set password=password('新密码') where User="phplamp" and Host="localhost";
flush privileges;
```

## 参考

1. [21 分钟 MySQL 基础入门](https://segmentfault.com/a/1190000006876419)
1. [30 分钟 SQL 指南](https://segmentfault.com/p/1210000011760973/read)
1. [新手 MySQL 工程师必备命令速查手册](http://dbaplus.cn/news-11-2055-1.html)
