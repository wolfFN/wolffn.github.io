---
title: 备份
---
### 备份至新数据库
1. 首先创建目标数据库(ps: password 与 -p 之间无空格)
```bash
mysql -u root -p[password]
```

```sql
CREATE DATABASE `[newdb-bane]` DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;
```

2. 使用mysqldump及mysql的命令组合，一次性完成复制
```bash
mysqldump [src-db] -u root -p[password] --add-drop-table| mysql [desc-db] -u root -p[password]
```

3. 如果其中一个是远程，添加-h等参数即可。

### 备份至文件

```bash
// 备份所有数据库，其中，-B 表示包含创建数据库的语句。
mysqldump -u [user-name] -p[passwd] -A -B> [file-name].sql

// 备份指定库、表，其中，表可选，可以并列多个，空格隔开。
mysqldump -u [user-name] -p[passwd] [db-name] [table-name] > [file-name].sql


// 恢复
mysqldump -u [user-name] -p[passwd] [db-name] < [file-name].sql
```

