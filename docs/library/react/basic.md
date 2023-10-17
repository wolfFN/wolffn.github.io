---
title: Basic
---
## TODO:
### Hooks
[https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)<br />[https://scotch.io/tutorials/getting-started-with-react-hooks#toc-what-is-this-usestate-syntax-](https://scotch.io/tutorials/getting-started-with-react-hooks#toc-what-is-this-usestate-syntax-)

## 实用工具
- [React Dev Inspector](https://github.com/zthxxx/react-dev-inspector): 组件定位工具. 项目引入后, 在浏览器通过快捷键 `Ctrl + Cmd + Shift + C` 跳转到 编辑器 对应组件文件.  
- [React Inspector](https://chrome.google.com/webstore/detail/react-inspector/gkkcgbepkkhfnnjolcaggogkjodmlpkh): 定位组件的浏览器插件.  

## 项目工程思想

- 项目规模维度
- 小：自顶向下
- 大：字底向上，便于编写测试。
- 实现维度
- 首先，实现静态版本：码代码。
- 然后，添加交互：思考逻辑。

## 组件属性

组件属性可以分为三类：普通属性、`props`以及`state`。`props`和`state`可以看做特殊的属性。其中：

- 普通属性主要为与渲染无关的变量、方法。
- `props`为只读、不可变并且与渲染有关的变量。
- `state`为可变并且与渲染有关的变量。

## setState

#### setState合并

1. 调用`setState()`：标记为dirty
2. 事件循环结束：合并执行  
`setState()`第二个参数为一个回调函数，在`setState()`执行完成，开始重新渲染时调用。  
对于数组，使用`concat, filter, map`方法。

## DOM事件

根节点代理

## 组件类型

#### 容器型组件和展示型组件

- 容器型组件
- 负责处理业务逻辑
- 网络、数据处理后，以`props`的形式传递至子组件
- 子组件通过调用父组件提供的方法，同步props变化
- 展示型组件
- 负责渲染
- 强内聚性，只关心获取props后如何渲染

#### 受控组件和非受控组件

