---
title: awk
---

### 用途
- 文本处理
- 输出格式化的文本报表
- 执行算数运算
- 执行字符串操作等等

### 处理流程
![image.png](/img/docs/awk/process.png)

### 基本语法格式
awk命令依次读取文件的每一行内容，然后进行处理。awk 使用一对单引号来表示 一些可执行的脚本代码，在可执行脚本代码里面，使用一对花括号来表示一段可执行代码块，可以同时存在多个代码块。 awk 的每个花括号内同时又可以有多个指令，每一个指令用分号分隔。

```shell
awk [options] 'program' file
```

其中：

1. Options 表示一些可选的参数选项，可选。
2. Program 表示awk的可执行代码脚本。
3. file表示要处理的文件，可以通过空格，间隔输入多个文件。

### Options
`-F` , 指定分隔符；  
结合`[]`，指定多个分隔符  
如下例，同时使用两侧小括号作为分隔符
```shell
awk -F '[()]' '{print $1, $2, $3}' some.log
```

`-f`, 指定文件，从中读取 program
```shell
awk -f command.awk marks.txt
```
   
`-v` 在程序开始之前给变量赋值  
`--dump-variables[=file]` 选项，输出排好序的全局变量列表和它们最终的值到文件中，默认的文件是 awkvars.out。

### 变量

```shell
$0		// 当前行
$1 $2 $n		// 第n列
NR		// 行号
NF		// 当前行的列数
$NF		// 最后一列
$(NF-1)		// 倒数第二列
FS	//awk的输入分隔符,默认为空格和"\t"
OFS		//输出分隔符, 默认为空格, ','代表

FILENAME		// 文件名，操作多个文件时使用
ENVIRON // 环境变量
awk 'BEGIN { print ENVIRON["USER"] }'
```


### Program

```shell
// fruit.txt
peach    100   Mar  1997   China
Lemon    150   Jan  1986   America
Pear     240   Mar  1990   Janpan
avocado  120   Feb  2008   china
```


```shell
// BEGIN END
awk 'BEGIN {print "Start read file"} {print $0} END {print "End file"}' /etc/passwd

// 格式化输出
awk '{print $1 "\t" $2 "\t" $3}' fruit.txt

// 声明和使用变量
awk '{msg="hello world"; print msg}' /etc/passwd

// 输出中，修改列值，仅在此次print中有效
awk '{$2 = "***"; print $0}' fruit.txt

// 条件
awk '$2 < 150 {print $0}' fruit.txt
awk '{if ($2 < 150) print $0}' fruit.txt

awk 'length($1)>4' fruit.txt

// 正则
awk '/^pea/{print $0}' fruit.txt

// 重定向 > 覆盖，>> 追加
awk '/^pea/{print $0}' fruit.txt > tmp
awk '/^pea/{print $0}' fruit.txt >> tmp
```



