---
title: SQLAlchemy
---

SQLAlchemy 由两部分组成：
* `Core` 基础架构，作为 `database toolkit`。提供的工具用于管理与数据库的连接，查询数据库并与结果交互，以及SQL语句的程序化构建。
* `ORM` 构建于 `Core` 基础之上，提供可选的关系映射（object relational mapping ）能力。它扩展了 `Core` 的 SQL 表达式语言，允许用用户定义的对象来组成和调用SQL查询。

安装依赖
``` shell
conda install sqlalchemy pymysql
```

引入 SQLAlchemy 并查询版本
``` python
import sqlalchemy
sqlalchemy.__version__

# 1.4.27
```

## 名词解释
`DDL` 是SQL的子集，指的是其中 `schema-level` 的操作，比如，`Table` 的创建、修改或删除。由于许多数据库使用事务性的 `DDL` （在 `COMMIT` 之前不生效），所以，类似 `CREATE TABLE` 这样的 `DDL` 应放到一个以 `COMMIT` 结束的事务块中。

## 建立连接
通过 `create_engine` 创建连接。格式如下：  
``` shell
[DB]+[DBAPI]://[user-name]:[password]@[database-location]/[database-name]
```
比如，通过 `pymysql` 连接到 `localhost:3306` 的 `mysql`, 用户名 `nodejs`，密码 `nodejs`，数据库名 `nodejs`：

``` python
from sqlalchemy import create_engine,text
engine = create_engine(
    "mysql+pymysql://nodejs:nodejs@localhost:3306/nodejs", echo=True, future=True)
```
其中，`echo` 参数用于调试，`future` 参数用于支持未来版本的 SQLAlchemy。

## Transaction
从使用的角度来看，`engine` 的目的在于提供一个与数据库连接的 `Connection`。`Connection` 代表了一个与数据库连接的资源，我们希望把这个对象的使用范围限制在一个特定的上下文中，而做到这一点的最好方法是 `Python context manager form`，也就是 `with` 语句。

### text()
`text` 是 SQLAlchemy 中的简单结构，它允许我们将SQL语句写成文本SQL。属于一种例外用法。

``` python
# 创建 Table
# "commit as you go"
with engine.connect() as conn:
    conn.execute(text("CREATE TABLE some_table (x int, y int)"))
    conn.commit()

# 插入数据
# "begin once"
with engine.begin() as conn:
    conn.execute(
        text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
        [{"x": 1, "y": 1}, {"x": 2, "y": 4}]
    )

# 查询
with engine.connect() as conn:
    result = conn.execute(text("SELECT * from some_table"))
    print(result.all())


# 删除 Table
with engine.connect() as conn:
    conn.execute(text("DROP TABLE IF EXISTS some_table"))
    conn.commit()
```

### Commit
上述代码展示了两种 Commit 的方式：
* `commit as you go`，使用 `engine.connect()` 连接，并在结尾处 `conn.commit()`。
* `begin once`。使用 `engine.begin()`，无需显式 commit。这是比较推荐的方式。




