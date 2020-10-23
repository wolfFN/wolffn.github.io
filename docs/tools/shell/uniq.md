---
title: uniq
---

## 功能
查看或过滤文件(input)中重复的行。

## 命令参数
``` shell
uniq [-c | -d | -u] [-i] [-f num] [-s chars] [input_file [output_file]]
```

* `uniq` 命令读取指定的输入文件，比较相邻行，并将每个独特的行输出到指定的文件。
* 如果 `input_file` 是一个 `-` 或 未指定，则默认为 standard input。同理，如果 output_file 未指定，默认为 standard output.
* 相邻的重复行将不会被复制。但是 `uniq` 不会检测不相邻的行是否重复。所以在使用该命令前，有必要使用 `sort` 对 input 先进行排序。

参数含义如下：
* `-c, --count` 在每一行前加入 count，用一个空格隔开。
* `-d, --repeated` 只输出重复的行。
* `-u, --unique` 只输出未重复的行。
* `-i, --ignore-case` 忽略大小写
* `-f, --skip-fields=N` 忽略最初的 n 个 field。field 指的是由空格隔开的非空列，从 1 开始计数。
* `-s, --skip-chars=N` 忽略最初的 n 个 字符，从 1 开始计数。如果与 `-f` 同时使用，则会忽略 制定 field 后的指定个字符。


## 常见用法
### 统计各行在文件中的出现次数
``` shell
sort [file-name] | uniq -c
```

### 找出文件中重复的行
``` shell
sort [file-name] | uniq -d
```

### 集合操作

假设a和b是两个文件，里面每一行看作一个数据元素，且每一行都各不相同。
``` shell
# 并集
cat a b | sort | uniq > a_b.union

# 交集
cat a b | sort | uniq -d > a_b.intersect

# 差集
cat a_b.union b | sort | uniq -u > a_b.diff
```

### 在日志处理中的应用
假设 access.log 格式如下
```
[时间] [用户ID] [操作名称] [其它参数...]
```
结合前一节提到的集合操作，对日志进行一系列操作
``` shell
# 统计日活
cat access.log | awk '{print $2}' | sort | uniq | wc -l

# 访问 id 的集合文件
cat access.log | awk '{print $2}' | sort | uniq > access.log.uniq

# 收集7天的独立用户集合后，统计周活跃
# access.log.uniq.1, access.log.uniq.2, ... access.log.uniq.7
cat access.log.uniq.[1-7] | sort | uniq | wc -l

# 计算某一天的留存率，先求交集，然后计算交集占原用户的比例
cat access.log.uniq.[1-2] | sort | uniq -d > 2day_retention
```
