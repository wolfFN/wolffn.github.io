---
title: life-circle
---

# 生命周期

> 待更新，最好能够插入图片

## 可复用组件

本质为有限状态机

## 调用流程：

```javascript
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
```

## Details

#### componentWillReceiveProps

- 父组件`render()`时触发
- 常用：props变化时，setState()
- 此时setState不回触发`componentWillReceiveProps`，会合并render。

#### shouldComponentUpdate

- 优化，是否触发render
- React.PureComponent，浅比较
- render操作虚拟DOM，性能开销不大

#### componentWillUpdate

- 与constructor关系？
- server render？

#### render

- 不要有Async
- Diff算法

#### componentDidUpdate

网络请求

## 注意

mount与update为递归渲染，具体为：  
父will -> 子will -> 子did -> 父did  
componentWillMount,componentWillReceiveProps里面的setState将会被合并  
shouldComponentUpdate,componentWillUpdate中setState将导致循环调用

