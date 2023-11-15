---
title: JOIN
---

## Prerequisites
为了演示相关语法，需要先准备实验数据。  
已有 Table:  
```sql
-- employee
CREATE TABLE employee (empid VARCHAR(10), name VARCHAR(10), age INT);
INSERT INTO employee (empid, name, age)
VALUES ('A101', '佐藤', 40),
       ('A102', '高桥', 28),
       ('A103', '中川', 20),
       ('A104', '渡边', 23),
       ('A105', '西泽', 35);

-- sales
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (empid VARCHAR(20), sales INT, month INT);
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

创建新 Table
```sql
-- 其他营业所的 employee 
DROP TABLE IF EXISTS other_employee;
CREATE TABLE other_employee (empid VARCHAR(10), name VARCHAR(10), age INT);
INSERT INTO other_employee VALUES("A106", "中村", 26);
INSERT INTO other_employee VALUES("A107", "田中", 24);
INSERT INTO other_employee VALUES("A108", "铃木", 23);
INSERT INTO other_employee VALUES("A109", "村井", 25);
INSERT INTO other_employee VALUES("A110", "吉田", 27);

-- 营业员出生地
DROP TABLE IF EXISTS region_table;
CREATE TABLE region_table (empid varchar(10), region varchar(10));
INSERT into region_table values('A101', '东京都');
INSERT into region_table values('A102', '埼玉县');
INSERT into region_table values('A103', '神奈川县');
INSERT into region_table values('A104', '北海道');
INSERT into region_table values('A105', '静冈县');
```

## UNION
合并显示两张表的查询结果。
```sql
SELECT * FROM employee
UNION
SELECT * FROM other_employee;
```
也可以合并多张表，只需要继续在后面添加 `UNION` 以及 `SELECT`。  
同样可以添加筛选条件 `WHERE`。  

`UNION` 默认会合并重复记录。当数据量较大时，这项操作会产生额外的时间消耗。可以使用 `UNION ALL`，不进行合并操作。


## INNER JOIN
把两个 Table 通过某个连接键连接在一起处理，被称为连接（`JOIN`）。  
只有当连接键同时存在于两张表时，INNER JOIN 进行提取。  
```sql
SELECT employee.empid, name, sales
FROM employee
         JOIN sales
              ON employee.empid = sales.empid;
```

当两个表有相同 column 时，需要用 `tableName.columnName` 的形式。  
为了清晰表明 Table 的含义，可以使用 `AS` 做别名。  
如果 `ON` 做条件判断的 key 相同，可以使用 `USING`。  
也可以添加 `WHERE` 做筛选。
```sql
SELECT x.empid, x.name, y.sales
FROM employee as x
         JOIN sales as y
              USING (empid)
WHERE y.sales > 100;
```

`JOIN` 多个表。
```sql
SELECT employee.empid, name, sales, region
FROM employee
         JOIN sales USING (empid)
         JOIN region_table USING (empid);
```

## LEFT JOIN
与 INNER JOIN 相对，LEFT JOIN 与 RIGHT JOIN 均为 OUTER JOIN。  
LEFT JOIN 会提取所有左侧 Table 中的记录。当右侧 Table 列不存在对应键值时，仅存在于右侧 Table 中的列值将为 NULL。
```sql
SELECT employee.empid, name, sales
FROM employee
         LEFT JOIN sales USING (empid);
```

## RIGHT JOIN
RIGHT JOIN 会提取所有右侧 Table 中的记录。
```sql
SELECT employee.empid, name, sales
FROM employee
         RIGHT JOIN sales USING (empid);
```

## SELF JOIN
自连接是将数据表与自身连接。因为表明相同，所以必须使用 alias。  
表中的每一条记录，都会互相产生连接。比如，employee 表中当前有 5 条记录，自连接会，将会有 25 条记录。
```sql
SELECT *
FROM employee as a
         JOIN employee as b;
```

## 自连接用于排序
SELF JOIN 的结果的结果为：  

| empid | name | age  | empid | name | age  |
| :---- | :--- | :--- | :---- | :--- | :--- |
| A105  | 西泽 | 35   | A101  | 佐藤 | 40   |
| A104  | 渡边 | 23   | A101  | 佐藤 | 40   |
| A103  | 中川 | 20   | A101  | 佐藤 | 40   |
| A102  | 高桥 | 28   | A101  | 佐藤 | 40   |
| A101  | 佐藤 | 40   | A101  | 佐藤 | 40   |
| A105  | 西泽 | 35   | A102  | 高桥 | 28   |
| A104  | 渡边 | 23   | A102  | 高桥 | 28   |
| A103  | 中川 | 20   | A102  | 高桥 | 28   |
| A102  | 高桥 | 28   | A102  | 高桥 | 28   |
| A101  | 佐藤 | 40   | A102  | 高桥 | 28   |

……  

可见，左侧为表中全部记录按顺序排列，右侧为第一条数据，重复。之后，左侧再次全部记录按顺序排列，右侧为第二条数据……  
所以排序的思路为，对于右侧的一条数据，SELECT 左侧所有大于等于该数据(某一特定列)的值，GROUP BY 后做 COUNT。即可得到该记录该列在全部数据中的排名。

```sql
SELECT a.empid, a.name, a.age, COUNT(*)
FROM employee AS a
         JOIN employee AS b
WHERE a.age >= b.age
GROUP BY b.empid;
```
> 会遇到报错，与 ONLY_FULL_GROUP_BY 规则冲突。此时可以 
> * 去除 ONLY_FULL_GROUP_BY 模式，[参考](/docs/data/db/install-on-mac#only_full_group_by)
> * 给列名加 ANY_VALUE 函数。`ANY_VALUE(a.empid), ANY_VALUE(a.age)`

## 子查询
使用子查询可以完成两个阶段的处理：执行查询，然后使用检索到的记录进一步执行查询。  
许多使用了子查询的处理可以用其他方法取代，例如内连接。但是，子查询的处理方式更容易理解，处理效率也更高。  

查询 sales 最大的记录
```sql
SELECT * FROM sales
WHERE sales IN (SELECT MAX(sales) from sales);
```

查询 sales 大于平均数的记录
```sql
SELECT * FROM sales
WHERE sales >= (SELECT AVG(sales) from sales);
```

查询 employee 表中员工，对应 sales 表中 sales 大于 200 的记录
```sql
SELECT * FROM employee
WHERE empid IN (SELECT empid FROM sales WHERE sales > 200)
```

### EXIST
返回 employee 表中，有销售额的员工
```sql
SELECT * FROM employee
WHERE EXISTS(SELECT * FROM sales WHERE employee.empid = sales.empid)
```

返回 employee 表中，没有销售额的员工
```sql
SELECT * FROM employee
WHERE EXISTS(SELECT * FROM sales WHERE employee.empid = sales.empid)
```
