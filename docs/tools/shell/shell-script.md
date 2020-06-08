---
title: Shell Script
---
### [常用命令](http://wolffn.github.io/blog/2016/08/26/Linux-Mac-Shell%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4)
#### 变量，字符串

```bash
# 声明变量, 注意不要留空格
x=12
y=hello
# 字符串拼接
echo $y" world!"
# 输出所有环境变量
set
```

#### 参数
通过`$1, $2...${10}...`的形式来使用参数
```bash
# 输出当前脚本的参数个数
echo "$#"
```

#### 返回值
程序返回值范围:`0-255`, 默认为`0`. 常见`error code`:<br />`1` general error<br />`2` 错误使用命令,比如,传入不恰当的参数<br />`127` command not found
```bash
# 退出,并返回
# 输出最近一条命令的返回值
echo $?
```

#### 函数
```bash
# 声明
myfunc() {
	echo  "in myfunc: ";
	echo  "first: "$1", second: "$2;
}
# 调用(无需括号)
myfunc;
# 调用，含参数
myfunc hello world;
```

- 使用参数方式与文件相同。区别在于函数通过`return`返回，而文件使用`exit`返回。
- 是对`.zshrc`的有力补充，因为可以接受参数。

