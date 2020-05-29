---
title: Array
---

[数组方法对比](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651225575&idx=1&sn=b25f4e9aaf7ba48f97f7ee0e266edd39&chksm=bd49a4638a3e2d75e9df776fc6a2fc7cfc7c182867f92771367935e2cafce7cc18a078eb0f3c)


## 构造

```javascript
Array.from() // 类数组 Iterator
Array.of() // 取代Array()
```

[应用](https://www.yuque.com/wolffn/fe/functions#a897e817)



## 判断是否是数组

```javascript
Array.isArray();
Object.prototype.toString.call();
```


## 遍历

```javascript
// 遍历键名
for (const i in arr) // 会遍历非数字键键名（不包含length）
// 遍历数字键键值
for (const i of arr)
// 无返回值，无法中断
arr.forEach(i => {
	console.log(i);
});
```


## 查找元素

```javascript
indexOf(value, startIndex)
lastIndexOf()
includes(value) //推荐：直观，返回bool值，支持NaN
find(function(i){...}) // 返回值
findIndex(function(i){...}) // 返回index
```

> Trick: 在查找一个元素时， `find` 可以被用来取代 for 循环。


## 

## 元素操作
| 方法名 | 对数组的操作 | 是否修改原数组 | 返回值 |
| :--- | :---: | ---: | :--- |
| push | 尾部插入新值 | 是 | 新插入的值 |
| pop | 删除最后一个值 | 是 | 删除的值 |
| shift | 删除第一个值 | 是 | 删除的值 |
| unshift | 在头部插入新值 | 是 | 操作完成后，数组的长度 |


注：如果需要删除某一个/几个指定位置的值，参考`splice`方法


## 数组操作

| 方法名 | 对数组的操作 | 是否修改原数组 | 返回值 |
| :--- | :---: | ---: | :--- |
| reverse | 逆序 | 是 | 逆序后的数组 |
| slice(start, end) | 截取子数组，从start到end前一个,end为负则从后数 | 否 | 截取的数组，shallow copy |
| splice(start, count, new...) | 删除/替换数组中元素 | 是 | 数组中被删除的元素 |


```javascript
// 复制
arr2 = arr1.concat();
arr2 = [...arr1];

// 合并
arr2.push(...arr1)
arr2.concat(arr1)
[...arr2, ...arr1]

// 解构
[a, ...rest] = list
[...'hello']


// 拼接
arr.toString() // 数组元素以 , 拼接
join('')

// 填充
arr.fill('xx')

// 排序
// 直接修改原数组，返回值大于0时，调换顺序
arr.sort((a, b) => a - b) // 从小到大
```


## 函数式方法

均不修改原数组

```javascript
filter 返回过滤后的新数组
some 一个符合，返回true
every 全部符合，返回true
map 返回新数组
reduce/reduceRight(function(累计, 当前, 当前index, 原arr){...}, 指定初始值)
```

找一个元素，使用 find 方法
```javascript
const users = [
    {
        id: 1,
        name: 'Leno'
    },
    {
        id: 2,
        name: 'Bellerin'
    },
    {
        id: 9,
        name: 'Lakazette'
    },
    {
        id: 10,
        name: 'Ozil'
    },
    {
        id: 14,
        name: 'Aubameyang'
    }
];

const user = users.find(u => u.id === 10);
console.log(user);
```


## TODO

```javascript
copyWithin
flat
```

