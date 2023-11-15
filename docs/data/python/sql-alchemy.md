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

`DML` INSERT

## Connection
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

### Result
以下几种方式均可用以遍历查询结果
``` python
with engine.connect() as conn:
    result = conn.execute(text("SELECT * from some_table"))
    print(result.all())

    result = conn.execute(text("SELECT * from some_table"))
    for x, y in result:
        print(x,y)

    result = conn.execute(text("SELECT * from some_table"))
    for row in result:
        print(row.x, row.y)

    result = conn.execute(text("SELECT * from some_table"))
    for row in result:
        print(row[0], row[1])


    result = conn.execute(text("SELECT * from some_table"))
    for dict_row in result.mappings():
        print(dict_row['x'], dict_row['y'])
```

### 传递参数
为避免 `SQL` 注入攻击，在使用 `SQL` 文本时，对于 `python` 字面量，即使是非字符串，类似数字、日期，也不可直接(以格式化字符串的方式)传入 `string` 中。应当使用如下方式：
``` python
with engine.connect() as conn:
    result = conn.execute(
        text("SELECT * from some_table WHERE y > :y"),
        {"y": 2}
    )
    print(result.all())
```
多个参数：
``` python
with engine.begin() as conn:
    conn.execute(
        text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
        [{"x": 11, "y": 12}, {"x": 13, "y": 14}]
    )

with engine.begin() as conn:
    conn.execute(
        text("DELETE FROM some_table WHERE x = :x"),
        [{"x": 11 }, {"x": 13 }]
    )
```

此外还可以用 `bindparam` 在 `text()` 方法中绑定参数：
``` python
from sqlalchemy.orm import Session
stmt = text("SELECT x, y FROM some_table WHERE y > :y ORDER BY x, y").bindparams(y=6)
with Session(engine) as session:
    result = session.execute(stmt)
```
此例中 `Session` 与 `Connection` 类似，主要在 `ORM` 中使用。

## MetaData
我们使用 `MetaData` 代指表示 `Database` 概念的 `python object`。比如，`Table`, `Column`。  
  
可以用于创建/删除 `Table`。不过一般应用于 `test suites`，或者小型/简单应用。对于需要长期维护的 `database schema`， 推荐使用专门的 `schema management tool`，比如 [Alembic](https://alembic.sqlalchemy.org/)。

``` python
from sqlalchemy import MetaData, Table, Column, Integer, String, ForeignKey
metadata_obj = MetaData()

user_table = Table(
    "user_account",
    metadata_obj,
    Column('id', Integer, primary_key=True),
    Column('name', String(30)),
    Column('fullname', String(50))
)

address_table = Table(
    "address",
    metadata_obj,
    Column('id', Integer, primary_key=True),
    Column('user_id', ForeignKey('user_account.id'), nullable=False),
    Column('email_address', String(30), nullable=False)
)

# 执行创建操作
metadata_obj.create_all(engine)
```

我们可以省略作为 `ForeignKey` 的 `Column` 的 `datatype`，将会自动从对应 `Column` 获取。  
`Column objects` 存储于 `Table.c`，这里也可以查询 `Constraints`：
``` python
user_table.c.name
# Column('name', String(length=30), table=<user_account>)
user_table.c.keys()
# ['id', 'name', 'fullname']

user_table.primary_key
# PrimaryKeyConstraint(Column('id', Integer(), table=<user_account>, primary_key=True, nullable=False))

address_table.foreign_keys
# {ForeignKey('user_account.id')}

address_table.foreign_key_constraints
```

### ORM 模式
在 `ORM` 模式下，`Metadata Object` 存储于 `register` 中。 所有的 `mapped class` 都应继承 `declarative base`。  
``` python
from sqlalchemy.orm import registry, declarative_base, relationship
mapper_registry = registry() 
# 获取 Base 有两种方式，推荐后者。
# Base = mapper_registry.generate_base()
Base = declarative_base()

class User(Base):
    __tablename__ = 'user_account'

    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    fullname = Column(String(50))

    addresses = relationship("Address", back_populates="user")

    def __repr__(self):
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

class Address(Base):
    __tablename__ = 'address'

    id = Column(Integer, primary_key=True)
    email_address = Column(String(30), nullable=False)
    user_id = Column(Integer, ForeignKey('user_account.id'))

    user = relationship("User", back_populates="addresses")

    def __repr__(self):
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"


# metadata 位于 mapper_registry.metadata 或 Base.metadata，推荐后者
# mapper_registry.metadata.create_all(engine)
Base.metadata.create_all(engine)
```

`User.__table__` 用以存储 `Table` 相关信息。  
``` python
User.__table__
# Table('user_account', MetaData(), Column('id', Integer(), table=<user_account>, primary_key=True, nullable=False), Column('name', String(length=30), table=<user_account>), Column('fullname', String(), table=<user_account>), schema=None)
```

`__repr__()` 是一个可选方法，用于格式化显示 `mapped class` 的信息。
``` python
sandy = User(name="sandy", fullname="Sandy Cheeks")
sandy
# User(id=None, name='sandy', fullname='Sandy Cheeks')
```

### Table Reflection
之前 `Metadata` 的相关内容，都是用来向 `Database` 提交 `DDL` 语句的。`Reflection` 是相反操作：用来从 `Database` 获取相关信息。
``` python
some_table = Table("some_table", metadata_obj, autoload_with=engine)
some_table
# Table('some_table', MetaData(), Column('x', INTEGER(), table=<some_table>), Column('y', INTEGER(), table=<some_table>), schema=None)
```

## Data - Core

### INSERT
`INSERT` 语句由 `insert()` 方法构成。
``` python
from sqlalchemy import insert

stmt = insert(user_table).values(name='spongebob', fullname="Spongebob Squarepants")

print(stmt)
# INSERT INTO user_account (name, fullname) VALUES (:name, :fullname)
complied = stmt.compile()
complied.params
# {'name': 'spongebob', 'fullname': 'Spongebob Squarepants'}

with engine.begin() as conn:
    result = conn.execute(stmt)
    print(result.inserted_primary_key)


with engine.begin() as conn:
    conn.execute(
        insert(user_table),
        [
            {"name": "sandy", "fullname": "Sandy Cheeks"},
            {"name": "patrick", "fullname": "Patrick Star"}
        ]
    )
```


### SELECT
``` python
from sqlalchemy import select
stmt = select(user_table).where(user_table.c.name == 'spongebob')

print(stmt)
# SELECT user_account.id, user_account.name, user_account.fullname 
# FROM user_account 
# WHERE user_account.name = :name_1

# 传入需要的列
print(select(user_table.c.name, user_table.c.fullname))
# SELECT user_account.name, user_account.fullname 
# FROM user_account

with engine.connect() as conn:
    for row in conn.execute(stmt):
        print(row)
        # (1, 'spongebob', 'Spongebob Squarepants')

# label() 创建别名
stmt = (
    select(
        ("Username: " + user_table.c.name).label("username"),
    ).order_by(user_table.c.name)

# literal_column 创建文本列
stmt = (
    select(
        literal_column("'some phrase'").label("p"), user_table.c.name
    ).order_by(user_table.c.name)
```

#### WHERE
对于简单的 `equal` 表达式，可以选择 `filter_by` 方法。
``` python
print(
    select(address_table.c.email_address).
    where(user_table.c.name == 'squidward').
    where(address_table.c.user_id == user_table.c.id)
)

print(
    select(address_table.c.email_address).
    where(
         user_table.c.name == 'squidward',
         address_table.c.user_id == user_table.c.id
    )
)

from sqlalchemy import and_, or_
print(
    select(Address.email_address).
    where(
        and_(
            or_(User.name == 'squidward', User.name == 'sandy'),
            Address.user_id == User.id
        )
    )
)


print(
    select(User).filter_by(name='spongebob', fullname='Spongebob Squarepants')
)
# SELECT user_account.id, user_account.name, user_account.fullname 
# FROM user_account 
# WHERE user_account.name = :name_1 AND user_account.fullname = :fullname_1
```

#### JOIN
``` python
print(
    select(user_table.c.name, address_table.c.email_address).
    join_from(user_table, address_table)
)

print(
    select(user_table.c.name, address_table.c.email_address).
    join(address_table)
)

# SELECT user_account.name, address.email_address 
# FROM user_account JOIN address ON user_account.id = address.user_id
``` 

### UPDATE
``` python
from sqlalchemy import update
stmt = (
    update(user_table).where(user_table.c.name == 'patrick').
    values(fullname='Patrick the Star')
)
print(stmt)
# UPDATE user_account SET fullname=:fullname WHERE user_account.name = :name_1

with engine.begin() as conn:
    result = conn.execute(stmt)
    print(result.rowcount)


from sqlalchemy import bindparam
stmt = (
  update(user_table).
  where(user_table.c.name == bindparam('oldname')).
  values(name=bindparam('newname'))
)
with engine.begin() as conn:
  conn.execute(
      stmt,
      [
         {'oldname':'jack', 'newname':'ed'},
         {'oldname':'wendy', 'newname':'mary'},
         {'oldname':'jim', 'newname':'jake'},
      ]
  )
```

### DELETE
``` python
from sqlalchemy import delete
stmt = delete(user_table).where(user_table.c.name == 'patrick')
print(stmt)
# DELETE FROM user_account WHERE user_account.name = :name_1

delete_stmt = (
   delete(user_table).
   where(user_table.c.id == address_table.c.user_id).
   where(address_table.c.email_address == 'patrick@aol.com')
 )
from sqlalchemy.dialects import mysql
print(delete_stmt.compile(dialect=mysql.dialect()))
# DELETE FROM user_account USING user_account, address WHERE user_account.id = address.user_id AND address.email_address = %s
```



## Data - ORM
### INSERT
通过 `__init__()` 方法（optional），我们可以创建一个 `User` 实例。  
`session.new` 查看 pending objects.
``` python
from sqlalchemy.orm import Session

# 无需提供 primary key, auto-incrementing 会提供
squidward = User(name="squidward", fullname="Squidward Tentacles")
krabs = User(name="ehkrabs", fullname="Eugene H. Krabs")

session = Session(engine)
session.add(squidward)
session.add(krabs)
session.new
# IdentitySet([User(id=None, name='squidward', fullname='Squidward Tentacles'), User(id=None, name='ehkrabs', fullname='Eugene H. Krabs')])

# create new transaction or push changes into current transaction
# transaction remains open 
# optional, 因为默认 autoflush
session.flush()

# flush 之后，数据进入 persistent state，加入到 identity map 中
squidward.id
# 25

# Session.get() 从 identity map 中获取数据，如果没有，则 SELECT
session.get(User, 25)

# commit transaction. Session.commit(), Session.rollback(), or Session.close()
session.commit()

# release all connections
session.close()
```


### SELECT
`ORM` 模式下，`row` 只有一个元素，即当前 `mapped class` 的实例(`Entity`)。
``` python
from sqlalchemy.orm import Session
stmt = select(User).where(User.name == 'spongebob')
with Session(engine) as session:
    for row in session.execute(stmt):
        print(row)
        # (User(id=1, name='spongebob', fullname='Spongebob Squarepants'),)

session.execute(select(User)).first()
session.execute(select(User.name, User.fullname)).first()
```

### UPDATE
``` python
sandy = session.execute(select(User).filter_by(name="sandy")).scalar_one()
sandy
# User(id=10, name='sandy', fullname='Sandy Cheeks')

sandy.fullname = "Sandy Squirrel"
sandy in session.dirty
# True

# 任何 SELECT 都会触发 autoflush
sandy_fullname = session.execute(
    select(User.fullname).where(User.id == 10)
).scalar_one()

sandy in session.dirty
# False

session.commit()


# ORM-enabled 模式，会更新 identity
session.execute(
    update(User).
    where(User.name == "sandy").
    values(fullname="Sandy Squirrel Extraordinaire")
    # execution_options(synchronize_session="fetch")
)
```

### DELETE
``` python
ehkrabs = session.get(User, 26)
session.delete(ehkrabs)
session.commit()

# ORM-enabled 模式
session.execute(delete(User).where(User.name == "squidward"))
```
