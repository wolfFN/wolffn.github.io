---
title: Update
---

## Update
```sql
UPDATE [table name] SET [column name]=[value] WHERE [condition];

-- 添加新列
ALTER TABLE sales ADD remark VARCHAR(100);

-- 如果没有 where，会有警告
UPDATE sales SET remark='无特殊记录';
-- 大于 100 分的设置为优秀
UPDATE sales SET remark='优秀' WHERE sales>=100;
-- 最后三名，设置为加油
UPDATE sales SET remark='加油' ORDER BY sales LIMIT 3;

-- 移除列 remark
ALTER TABLE sales DROP remark;
```