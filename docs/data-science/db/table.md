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

# 删除 db
DELETE DATABASE [database-name];
```

## Table

查看当前 db 中的 tables
```sql
SHOW TABLES;
```

### 查看 Table 结构
```sql
DESC employee;
```

## CREATE
``` sql
CREATE TABLE employee
(
    empid VARCHAR(10),
    name  VARCHAR(10),
    age   INT
);
```

### 列属性
创建/更新列时，列名、数据类型后可插入以下内容
* PRIMARY KEY: 主键
* UNIQUE: 唯一键
* AUTO_INCREMENT: 自增，可与主键结合使用
* DEFAULT [default value]: 默认值

### INDEX
用于加速检索。在设置了主键的情况下，索引会自动创建。  
在相同值较多（重复值较多）的情况下，可能会对检索性能提升有限。  
对更新速度可能会有影响。当对创建了索引的表进行更新时，也需要对已经存在的索引信息进行维护。
```sql
CREATE INDEX [index name] on [table name] ([column name]);
-- example
CREATE INDEX id ON tb1A (empid);

-- 显示索引
SHOW INDEX FROM [table name];

-- 删除索引
DROP INDEX [index name] on [table name];
```


### 批量插入数据
```sql
INSERT INTO employee (empid, name, age)
VALUES ('A101', '佐藤', 40),
       ('A102', '高桥', 28),
       ('A103', '中川', 20),
       ('A104', '渡边', 23),
       ('A105', '西泽', 35);

-- 创建表格，并插入数据
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (empid VARCHAR(20),sales INT,month INT);
INSERT INTO sales VALUES ('A103',101,4);
INSERT INTO sales VALUES ('A102',54,5);
INSERT INTO sales VALUES ('A104',181,4);
INSERT INTO sales VALUES ('A101',184,4);
INSERT INTO sales VALUES ('A103', 17,5);
INSERT INTO sales VALUES ('A101',300,5);
INSERT INTO sales VALUES ('A102',205,6);
INSERT INTO sales VALUES ('A104', 93,5);
INSERT INTO sales VALUES ('A103', 12,6);
INSERT INTO sales VALUES ('A107', 87,6);

```


## 复制 Table
复制列结构和记录，然后创建新的表。这种方法不能复制 `AUTO_INCREMENT` 等属性。`AUTO_INCREMENT` 等属性需要在复制后再次进行设置。
```sql
CREATE TABLE [new table name] SELECT * from [source table name];
-- example
CREATE TABLE tb1A SELECT * from employee;

-- 复制部分数据
CREATE TABLE sales_copy
SELECT * from sales
ORDER BY sales DESC
LIMIT 4 OFFSET 1;
```

复制表的列结构，创建新表。这种方法虽然不会复制表中的记录，但是会复制 `AUTO_INCREMENT` 和 `PRIMARY KEY` 等列的属性。
```sql
CREATE TABLE [new table name] LIKE [source table name];
-- example
CREATE TABLE tb1B LIKE employee;
```

复制其他表的记录
```sql
INSERT INTO [table name] SELECT * from [source table name];
-- example
INSERT INTO tb1B SELECT * from employee;

-- 复制指定列
INSERT INTO [table name](column name) SELECT (column name) from [source table name];
-- example
INSERT INTO tb1B(empid) SELECT name from employee;
```


## ALTER

添加列
```sql
-- 添加列
ALTER TABLE [table name] ADD [column name] [data type];
-- example:
ALTER TABLE tb1A ADD birthday DATETIME;
```

修改列的数据类型
```sql
-- 修改列
ALTER TABLE [table name] MODIFY [column name] [data type];
-- example:
ALTER TABLE tb1A MODIFY name VARCHAR(100);
```

修改列的顺序  
```sql
ALTER TABLE tb1A ADD birthday DATETIME FIRST;
ALTER TABLE tb1A ADD birthday DATETIME AFTER name;

ALTER TABLE tb1A MODIFY birthday DATETIME FIRST;
ALTER TABLE tb1A MODIFY birthday DATETIME AFTER age;
```

## 修改列名
```sql
ALTER TABLE [table-name] CHANGE [column name] [new column name] [data type];
-- example
ALTER TABLE tb1A CHANGE birthday birth DATETIME;
```

## 删除列
```sql
ALTER TABLE [table-name] DROP [column name];
-- example
ALTER TABLE tb1A drop birthday;
```





## 删除 Table
``` sql
DROP TABLE tb1A;
-- 避免发生错误
DROP TABLE IF EXISTS tb1A;

-- 删除所有记录
DELETE FROM [table name];
```


## 跨 DB 访问 Table
在使用use选择数据库的状态下也能够操作其他数据库中的表。这时可以像“数据库名.表名”这样把“数据库名”和“表名”用“.”连接起来。
```sql
DESC practice.employee;
```