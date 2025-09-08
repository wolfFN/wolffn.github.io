---
title: 正则
---

## TODO:
JavaScript Regular Expressions for Regular People<br />[https://alligator.io/js/regular-expressions-for-regular-people/](https://alligator.io/js/regular-expressions-for-regular-people/)

贪婪和replace<br />https://segmentfault.com/a/1190000012211651

[https://mp.weixin.qq.com/s?__biz=MzI2NjA3NTc4Ng==&mid=2652079722&idx=1&sn=2bcd6d6b586b133a058adb07ef6d5155&chksm=f1748d8fc6030499bfe48541edb35a198c6067ec4aec4a82cdef167e152f5f24ebe6d8337e97](https://mp.weixin.qq.com/s?__biz=MzI2NjA3NTc4Ng==&mid=2652079722&idx=1&sn=2bcd6d6b586b133a058adb07ef6d5155&chksm=f1748d8fc6030499bfe48541edb35a198c6067ec4aec4a82cdef167e152f5f24ebe6d8337e97)
## 
## 基本形式：

/reg/<br />
i 忽略大小写<br />
g 全局<br />
m 多行

## 方法

serach 返回起始index<br />
replace 返回替换后的string

match

- g 多个返回值
- [值, index, input]<br />
test 检索，true of false<br />
exec
- value/null
- g 多次调用，向后进行(懒惰)

## 通配符

? 贪婪性<br />
[]  任何字符<br />
[^]  非<br />
(...|...|...)  任何选项<br />
. 单个字符<br />
\w 单词<br />
\d 数字<br />
\s 空白<br />
\r\n 换行符<br />
? 0或1个<br />
* 0或n<br />
+ 至少1<br />
^ 开始<br />
$ 结尾<br />
n\{x,y\}  x到y个n

