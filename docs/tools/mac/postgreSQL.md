---
title: PostgreSQL
---

# 安装

``` shell
brew install postgresql

psql -V

brew services start postgresql

# 启动
psql postgres
```

创建数据库
``` sql
CREATE USER nodejs WITH PASSWORD 'nodejs';
# CREATE USER nodejs WITH SUPERUSER PASSWORD 'nodejs';
CREATE DATABASE nodejs OWNER nodejs;
```