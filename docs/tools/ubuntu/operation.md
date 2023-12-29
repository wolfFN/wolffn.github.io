---
title: Operation
---

## 查看端口监听

``` shell
sudo su
netstat -tpln
```

## 查看指定端口占用
``` shell
lsof -i :[port]

# 比如, 3306 端口
lsof -i :3306
```
