---
title: grep
---

### 命令语法
```bash
grep 'word' 文件名
grep 'word' 文件1 文件2 文件3
grep '字符串1 字符串2' 文件名
cat 某个文件 | grep '某个东西'
command  | grep '某个东西'
command 选项1 | grep '数据'
grep --color '数据' 文件名
```


### 在文件夹中查找包含内容的文件
```bash
grep 'filename' dir
```

在目录下查找含有 `filename` 的文件  
`-i` 强制忽略大小写  
`-r` 递归  
`-H` 输出文件名  
`-h` 禁止输出文件名


### grep在文件中查找内容
```bash
grep 'text' file
```

在`file`中查找 `text`  
`-w` 强制输出仅仅包含整个单词的行  
`-c` 统计匹配到的次数  
`-n` 显示行号  
`-v` 输出不包含匹配的项  
`fgrep` 文本模式(`"` 需要特殊处理)

`word1|word2` 搜索两个不同的单词，（`egrep`支持正则的省略语法)  
`--color` 强制以彩色输出  
`-l` 显示包含text的文件名(此时`file`是多个文件，例如`*.html`，`/path/*`)  
`-L` 显示不包含text的文件名
