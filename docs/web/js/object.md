---
title: Object
---
# 继承 inherit

原型继承机制。  
构造函数：任意Javascript函数，自动拥有prototype。原型对象是类的唯一标识。

```javascript
function F(params) {
    console.log(params);
}
var o = new F();
console.log(o.constructor === F);
// true
console.log(o instanceof F);
// true
console.log(F.prototype.isPrototypeOf(o));
// true
console.log(o.constructor);
// [Function: F]
console.log(Object.getPrototypeOf(o));
// F {}
```

`Object`本质上是 key-value 对，从原型对象继承属性(inherited property)。
其中，key 可写、可枚举、可配置（constructor除外）。
`prototype`，用来给原型对象添加方法。
`instanceof()`，不检测对象是否由`F`初始化而来，检测对象是否继承自`F.prototype`。

### Object 的三个属性

##### prototype

Object共有三种创建方式，对应的prototype分别是：

1. 直接量，Object.prototype
2. new Object()，构造函数的prototype
3. Object.create()，构造函数

```javascript
var o = {};
console.log(Object.getPrototypeOf(o) == Object.prototype);
// true
o = new F();
console.log(Object.getPrototypeOf(o) == F.prototype);
// true
o = Object.create(F);
console.log(Object.getPrototypeOf(o) == F);
// true
```

##### 类属性

`toString()`

##### 可扩展性

所有内置对象，以及自定义对象，均可扩展

```javascript
Object.isExtensible()    preventExtensions()
Object.isSealed()    seal()
Object.isFrozen()    freeze()
// 序列化
JSON.stringify()    parse()
```

### 查询

1. Object.key
2. Object["key"]

### Example

```javascript
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (callback) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            callback(x);
        }
    },
    toString: function() {
        return "(" + this.from + " " + this.to + ")"
    }
}

var r = new Range(1, 6);
console.log(r.includes(2));
// true
r.foreach(console.log);
// 1, 2, 3, 4, 5, 6
console.log(r.toString());
// (1, 6)
```

### TODO ES6 Class

