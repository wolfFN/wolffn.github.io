---
title: Delete
---

## Delete
```sql
DELETE FROM [table name] WHERE [condition];

-- 复制 table
CREATE TABLE sales_copy
SELECT * from sales;

-- 删除全部
DELETE FROM sales_copy;
-- 按条件删除
DELETE FROM sales_copy WHERE month=5;
-- 排序后删除
DELETE FROM sales_copy ORDER BY sales DESC LIMIT 3;
```