---
title: JSON in PostgreSQL
tags: [database, postgreSQL]
---

PostgreSQL 有许多存储、处理 JSON 数据的功能。本文将讲述：
* JSON 是什么，为什么值得使用。
* 创建一张 table 来储存 JSON。
* JSON 数据的增删改查
* 性能、校验、处理 JSON 数据的一些建议。
<!--truncate-->


## JSON 是什么
JSON 是 JavaScript Object Notation 的缩写，是一种格式化和储存数据的方式。与 HTMl 或 XML 类似，使用一种适合人类阅读的特定格式来展现数据，最初是为了程序能够使用数据来设计的。

### 为什么使用 jSON

因为需要一种灵活的结构。  
一个规范化的数据库结构，包含数据表、列、关系，适用于大多数情况。最近开发实践的改进,也意味着改变一个表并不像过去那样重要，所以一旦你的数据库投入生产，调整它是可能的。  
但如果你的需求，要求数据比较灵活，JSON 字段比较适合。  
一个典型的例子是，用户可能添加自定义属性。如果是规范化的数据库，这边需要修改表，或者创建一个实体属性(Entity Attribute)，或其他一些方法。  
如果使用 JSON 字段，增加、维护这些自定义属性将会变得十分容易。  
JSON 数据同样可以被 ORM 和代码处理。所以数据库不需要其他额外工作。


### JSON 数据的样式
对象：
``` json
{
  "id": "1",
  "username": "jsmith",
  "location": "United States"
}
```

包含数组：
```json
{
  "username": "jsmith",
  "location": "United States",
  "posts": [
    {
      "id":"1",
      "title":"Welcome"
    },
    {
      "id":"4",
      "title":"What started it all"
    }
  ]
}
```

## 创建 JSON 字段

### 两种类型
PostgreSQL 中有两种 JSON 的数据类型：JSON 和 JSONB。
* JSON 是常规 JSON 类型，在 9.2 版本中加入。
* JSONB 用来存储二进制 JSON，9.4 版本加入。

区别主要在于数据如何存储。JSONB 数据以二进制格式存储，更容易被处理。  
PostgreSQL 推荐在大多数情况下使用 JSONB 格式。

|  **Feature**   | **JSON**  | **JSONB** |
|  ----  | ----  | ---- |
|  存储  |  保持原状  |  以分解的二进制格式存储
| 支持全文索引  |  No  |  Yes  |
|  保留空格  |  Yse  |   No |
|  保留 key 的顺序  |  Yse  |  No  |
|  保留重复的 key  |  Yse  |   No(保留最后一个 key) |
优于存储结构的原因，JSONB 数据存储较慢（需要转换），但处理较快。  
本文将使用 JSONB 数据类型。大部分功能也同样适用于 JSON 类型。

### 创建 JSON 字段
```sql
CREATE TABLE product (
  id INT,
  product_name CHARACTER VARYING(200),
  attributes JSONB
);
```

attributes 是 JSONB 类型，所以要求传入的必须是有效的 JSON 数据。其他数据库需要校验，而 postgreSQL 不需要。

### Insert
```sql
INSERT INTO product (id, product_name, attributes)
VALUES (1, 'Chair','{"color":"brown", "material":"wood", "height":"60cm"}');
```

### Insert Array
```sql
INSERT INTO product (id, product_name, attributes)
VALUES (
  2, 
  'Desk',
  '{"color":"black", "material":"metal", "drawers":[{"side":"left", "height":"30cm"}, {"side":"left", "height":"40cm"}]}'
);
```

### JSON 函数
`JSONB_BUILD_OBJECT` 函数接收一系列值，以二进制格式创建 JSON 对象。
```sql
JSONB_BUILD_OBJECT('color', 'black', 'material', 'plastic')
```
结果：
```json
{"color": "black", "material": "plastic"}
```
使用 `JSONB_BUILD_OBJECT` 函数的好处是无需担心括号、冒号，引号、逗号等等。
```sql
INSERT INTO product (id, product_name, attributes)
VALUES (4, 'Small Table', JSONB_BUILD_OBJECT('color', 'black', 'material', 'plastic'));
```

其他一些帮助 insert JSON 的函数：
- to_json and to_jsonb
- array_to_json
- row_to_json
- json_build_array and jsonb_build_array
- json_object and jsonb_object

## Read and Filter

select 一个 JSON 字段很简单：
```sql
SELECT id,  
       product_name,  
       attributes  
FROM product;
```

### Select 单个属性
通过 `->` 来获取单个属性，`->>` 仅获取 value，无引号。如果没有对应字段，返回 null。
```sql
SELECT id,  
       product_name,  
       attributes -> 'color' AS color_key,  
	   attributes ->> 'color' AS color_value
FROM product;
```

### Select Array
`-> [index]` 获取指定元素，`#>>` 是另一种语法
```sql
SELECT id,  
       product_name,  
       attributes ->> 'drawers'      AS drawers,  
       attributes -> 'drawers' -> 1  AS drawer_value,  
       attributes #> '{drawers, 1}'  AS drawers_element,  
       attributes #>> '{drawers, 1}' AS drawers_text  
FROM product;
```

### Filtering
`LIKE` 不能使用。
```sql
SELECT id,  
       product_name,  
       attributes  
FROM product  
WHERE attributes = '{  
  "color": "brown",  "material": "wood",  "height": "60cm"}';
```

使用 `->>` 来对字符串进行筛选
```sql
SELECT id,  
       product_name,  
       attributes  
FROM product  
WHERE attributes ->> 'color' = 'brown';
```

### 拆分 JSON 到多行
`JSONB_EACH` 会把key value 对展示为元组，每个 key 占据一行。虽然这并没有什么卵用。
```sql
SELECT id,  
       product_name,  
       JSONB_EACH(attributes)  
FROM product;
```

`JSON_OBJECT_KEYS` 用以获取 JSON 字段的 key，也会拆分多行：
```sql
SELECT id,  
       product_name,  
       JSONB_OBJECT_KEYS(attributes)  
FROM product;
```

如果想要找到 包含指定 key 的行，或者是想统计 key 的数量，会很有帮助。
```sql
SELECT JSONB_OBJECT_KEYS(attributes) AS attr_key,  
       COUNT(*)  
FROM product  
GROUP BY JSONB_OBJECT_KEYS(attributes)  
ORDER BY COUNT(*) DESC;
```

### 检查 key 是否存在
`?` 可以用来检查 JSON 是否含有指定 key
```sql
SELECT id,  
       product_name,  
       attributes  
FROM product  
WHERE attributes ? 'drawers' = true;
```

## Update

### Insert new key
```sql
UPDATE product  
SET attributes = attributes || '{"width":"100cm"}'  
WHERE id = 1;
```

### JSONB_SET：更新已有 value
```sql
UPDATE product  
SET attributes = JSONB_SET(attributes, '{height}', '"75cm"')  
WHERE id = 1;
```

## Delete

### 删除指定行
```sql
DELETE FROM product
WHERE attributes ->> 'color' = 'brown';
```

### 删除 JSON 字段的指定属性
```sql
UPDATE product  
SET attributes = attributes - 'height'  
WHERE id = 1;
```

## Performance

### GIN 全文索引
GIN: Generalised Inverted Index. 
```sql
CREATE INDEX idx_prod_json ON product USING GIN(attributes);
```

## Tips
1. 不要因为可以，便使用。
2. 将 JSON 字段视为 black box。
3. 使用 PK 或其他字段来检索。

## Ref:
https://www.databasestar.com/postgresql-json/
