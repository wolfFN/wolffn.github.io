---
title: Table
---

## Database
```sql
# 查看有哪些db
show databases;

# 查看当前使用的是哪个 db
select database();

# 选择 db
use [database-name];

# 创建 db
CREATE DATABASE [new-database-name]; 
```

## Table

查看当前 db 中的 tables
```sql
SHOW TABLES;
```

### 创建 Table
``` sql
CREATE TABLE employee
(
    empid VARCHAR(10),
    name  VARCHAR(10),
    age   INT
);
```

### 查看 Table 结构
```sql
DESC employee;
```

### 批量插入数据
```sql
INSERT INTO employee (empid, name, age)
VALUES ('A101', '佐藤', 40),
       ('A102', '高桥', 28),
       ('A103', '中川', 20),
       ('A104', '渡边', 23),
       ('A105', '西泽', 35);
```

### 复制 Table
```sql
CREATE TABLE tb1A SELECT * from employee;
```

### 删除 Table
``` sql
DROP TABLE employee;
```


## 跨 DB 访问 Table
在使用use选择数据库的状态下也能够操作其他数据库中的表。这时可以像“数据库名.表名”这样把“数据库名”和“表名”用“.”连接起来。
```sql
DESC practice.employee;
```