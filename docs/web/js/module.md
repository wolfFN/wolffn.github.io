---
title: 模块化
---

## Read

[如何学习前端模块化知识？ - 知乎](https://www.zhihu.com/question/37011441)  
[彻底搞清楚 javascript 中的 require、import 和 export - 最骚的就是你 - 博客园](https://www.cnblogs.com/libin-1/p/7127481.html)  
[JavaScript 模块化开发的演进历程 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000011081338)  
[Javascript 模块化编程（一）：模块的写法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)  
[Javascript 模块化指北 - 掘金](https://juejin.im/post/5b6c222a6fb9a04fde5af4ee)  
[https://github.com/seajs/seajs/issues/547](https://github.com/seajs/seajs/issues/547)  
[https://huangxuan.me/js-module-7day/#/](https://huangxuan.me/js-module-7day/#/)  
[JS/TS 的 import 和 export 用法小结 - Midqiu - SegmentFault 思否](https://segmentfault.com/a/1190000017419857)  
[ESM 原理](https://segmentfault.com/a/1190000014318751#articleHeader2)

## CommonJS

Node 实现模块依赖所采用的规范，采用同步加载模块的策略。

CommonJS 最开始是 Mozilla 的工程师于 2009 年开始的一个项目，它的目的是让浏览器之外的 JavaScript （比如服务器端或者桌面端）能够通过模块化的方式来开发和协作。

在 CommonJS 的规范中，每个 JavaScript 文件就是一个独立的模块上下文（module context），在这个上下文中默认创建的属性都是私有的。也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。

如果想在多个文件分享变量，有两种方式

1. 生命为 global 对象的属性，显然，大家都可以给 global 加属性，会产生冲突。
1. 通过 module.exports 对象来暴露对外的接口，这是推荐的做法，module 是 CommonJS 中预先定义好的对象，就像 global 一样。

如下，创建一个最简单的模块：

```javascript
function myModule() {
    this.hello = function () {
        return 'hello!';
    };

    this.goodbye = function () {
        return 'goodbye!';
    };
}

module.exports = myModule;
```

其他代码，通过 require 引用：

```javascript
var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'
```

## AMD

Asynchronous Module Definition， 异步模块方案，主要用在浏览器端。

使用方式：调用 define 函数，传入两个参数：

-   第一个参数是一个数组，数组中有两个字符串也就是需要依赖的模块名称或路径。**AMD 会以一种非阻塞的方式，通过 appendChild 将这两个模块插入到 DOM 中。在两个模块都加载成功之后，define 会调用第二个参数中的回调函数，一般是函数主体。**
-   第二个参数也就是回调函数，函数接受了两个参数，正好跟前一个数组里面的两个模块名一一对应。因为这里只是一种参数注入，所以我们使用自己喜欢的名称也是完全没问题的。

define 既是一种引用模块的方式，也是定义模块的方式。可以同时引用模块，并定义模块。

```javascript
// 引用模块
define(['myModule', 'myOtherModule'], function (myModule, myOtherModule) {
    console.log(myModule.hello());
});

// 调用模块
define([], function () {
    return {
        hello: function () {
            console.log('hello');
        },
        goodbye: function () {
            console.log('goodbye');
        },
    };
});
```

# UMD

对于需要同时支持 AMD 和 CommonJS 的模块而言，可以使用 UMD（Universal Module Definition）。<br />在执行 UMD 规范时，会优先判断是当前环境是否支持 AMD 环境，然后再检验是否支持 CommonJS 环境，否则认为当前环境为浏览器环境（window）。

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['myModule', 'myOtherModule'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('myModule'), require('myOtherModule'));
    } else {
        // Browser globals (Note: root is window)
        root.returnExports = factory(root.myModule, root.myOtherModule);
    }
})(this, function (myModule, myOtherModule) {
    // Methods
    function notHelloOrGoodbye() {} // A private method
    function hello() {} // A public method because it's returned (see below)
    function goodbye() {} // A public method because it's returned (see below)

    // Exposed public methods
    return {
        hello: hello,
        goodbye: goodbye,
    };
});
```

# ES6 Module

ES6 引入了原生的模块功能，兼顾了规范、语法简约性和异步加载功能，同时支持循环依赖。

```javascript
// lib/counter.js
export let counter = 1;

export function increment() {
    counter++;
}

export function decrement() {
    counter--;
}

// src/main.js
import * as counter from '../../counter';

console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
```

部分导出、命名冲突处理：

```javascript
import { detectCats } from 'kittydar.js';
//or
import { detectCats, Kittydar } from 'kittydar.js';
//or
import { flip as flipOmelet } from 'eggs.js';
import { flip as flipHouse } from 'real-estate.js';
```


### 待深入

> import 进来的模块对于调用它的模块来是说是一个活的只读视图，而不是像 CommonJS 一样是一个内存的拷贝。
