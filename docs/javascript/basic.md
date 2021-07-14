---
id: basic
title: Basic
sidebar_label: Basic
---

### Boolean
Bool值为false的情况：undefined，null，””，0，false  
null 是 undefined 的父类  

```javascript
null == undefined; // true
null === undefined; // false
```

  


## String
字母与数字互相转换  

```javascript
//97
'a'.charCodeAt(0) 

//a
String.fromCharCode(97) 
```


## 作用域
JS代码运行前，会进行预加载，变量的定义会前置  
仅 function内声明的变量为局部变量  
闭包：有权访问另一个函数作用域的变量的函数。  
当一个变量，仅有赋值，没有声明时，相当于给window(global)加了一个属性。  
> Best Practice：定义变量后，马上赋值  
变量赋值、函数传参，都是在传递栈区的值  


## ES6


```javascript
const Array / Object
```
在其词法作用域（lexical scope）结束前，不会被垃圾回收。  
  解构赋值，多行分布，像JSON缩进，有利于可读性。  

