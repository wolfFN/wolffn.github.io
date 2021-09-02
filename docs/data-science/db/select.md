---
title: Select
---

## Select
``` sql
-- 所有列
SELECT * FROM [table name];
-- 指定列
SELECT [column name 1], [column name 2] FROM [table name];
```

SELECT命令还能用于显示与数据库无关的值
``` sql
select '无关';
```

## alias
`AS` 用来在输出结果中，给列重命名
```sql
SELECT empid AS 工号, name as 姓名, age AS 年龄
FROM employee;
```

## DISTINCT 去重


## WHERE
``` sql
SELECT * FROM employee WHERE age > 30;
```

## LIKE
模糊查询
```sql
-- % 任意字符串
SELECT * FROM employee WHERE empid LIKE 'A1%';
SELECT * FROM employee WHERE empid NOT LIKE '%1';
-- _ 任意字符
SELECT * FROM employee WHERE empid LIKE 'A10_';
```

## AND OR
当 `AND` 和 `OR` 混合使用时，会优先处理 `AND`。如果想先处理 `OR` ,我们需要用 `()` 把想要优先处理的内容括起来。

## LIMIT
限制记录数
```sql
SELECT * FROM employee LIMIT 3;
```


## CASE WHEN
``` sql
SELECT empid, sales,
    CASE
        WHEN sales >= 100 THEN '高'
        WHEN sales >= 50 THEN '中等'
        ELSE '低' 
    END AS 评价
FROM tb;
```


## ORDER BY
```sql
-- 默认为升序
SELECT * FROM employee ORDER BY age (ASC);

-- 降序
SELECT * FROM employee ORDER BY age DESC;

-- 最大的3个
SELECT * FROM employee ORDER BY age DESC LIMIT 3;

-- 降序排列，第2个和第3个
SELECT * FROM employee ORDER BY age DESC LIMIT 2 OFFSET 1;
```

## GROUP BY
```sql
-- 每个 empid，仅显示一个值
SELECT * FROM tb GROUP BY empid;

-- 每个 empid 出现次数
SELECT empid, COUNT(*) AS 个数 FROM tb GROUP BY empid;

-- 每个 empid, sales 总和
SELECT empid, SUM(sales) AS 合计
FROM tb
GROUP BY empid;
```

### HAVING
先分组，再选取记录。
显示列 sales 总和大于等于 200 的 empid。
```sql
SELECT empid, SUM(sales) AS 合计
FROM tb
GROUP BY empid
HAVING SUM(sales) >= 200;
```

### WHERE
先选取记录，再分组
```sql
SELECT empid, AVG(sales) AS 合计
FROM tb
WHERE sales > 50
GROUP BY empid;
```

### ORDER BY
排序会在 SELECT，GROUP BY 之后进行
```sql
SELECT empid, AVG(sales) AS 合计
FROM tb
GROUP BY empid
ORDER BY AVG(sales);
```

### 执行顺序
前面介绍了 `WHERE` 和 `HAVING` 在使用方法上的区别。  
使用 `GROUP BY`、`ORDER BY` 和 `HAVING` 的 `SELECT` 语句通常会按照如下方式描述。“～”部分是可选的。  
```sql
SELECT ～ FROM ～ WHERE ～ GROUP BY ～ HAVING ～ ORDER BY ～
```
但是，实际的执行顺序却是下面这样的。
```sql
FROM ～→ WHERE ～→ GROUP BY ～→ HAVING ～→ SELECT ～→ ORDER BY ～
```
也就是说，在通过 `GROUP BY` 分组之前会先执行 `WHERE`，而 `HAVING` 执行的对象是 `GROUP BY` 分组后的结果。另外，可以看到 `ORDER BY` 重新排列了 `SELECT` 的结果。





## 运算
| 运算符                      | 含义               |
| --------------------------- | ------------------ |
| +                           | 加                 |
| -                           | 减                 |
| *                           | 乘                 |
| /                           | 除                 |
| DIV                         | 除，结果取整数     |
| %, MOD                      | 取余               |
| =, >, <, >=, <=             | 等式含义           |
| `<>`                        | 不等于             |
| `A` IN `B`                  | A 在 B 俩表中      |
| `A` NOT IN `B`              | A  不在 B 俩表中   |
| `A` BETWEEN `B` AND `C`     | A 介于 B 与 C 之间 |
| `A` NOT BETWEEN `B` AND `C` | A 不在 B 与 C 之间 |


## 字符串操作
```sql
-- 连接字符串
SELECT CONCAT(empid, ' ', name, '先生') FROM employee;
-- 最右边 2 个字符
SELECT RIGHT(empid, 2) FROM employee;
-- 最左边 2 个字符
SELECT RIGHT(empid, 2) FROM employee;
-- 第二个字符开始的三个字符
SELECT SUBSTRING(empid, 2, 3) FROM employee;
-- 重复
SELECT REPEAT('.', age) FROM employee;
-- 反过来
SELECT REVERSE(name) FROM employee;
```




## 函数
| 函数名 | 含义   |
| ------ | ------ |
| AVG    | 平均数 |
| SUM    | 求和   |
| COUNT  | 计数   |
| PI     | π      |
| COUNT  | 计数   |
| NOW    | 时间   |

```sql
-- 版本
SELECT VERSION();
-- 数据库
SELECT DATABASE();
-- 当前用户
SELECT USER();
-- 字符的编码
SELECT CHARSET([字符]);
```

