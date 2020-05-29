---
title: Basic
---

## TODO
[css小技巧](https://zxpsuper.github.io/Demo/advanced_front_end/css/cssTips.html)


## Flex

main-axis  
cross-axis

#### container属性

```css
flex-direction: row, row-reverse, column, column-reverse;
flex-wrap: nowrap, wrap, wrap-reverse;
flex-flow: [direction]||wrap;
justify-content: flex-start/end, center, space-between/around;
align-items: baseline, stretch;
align-content: 多根轴线对齐方式
```

#### item属性

```css
order: 排列顺序
flex-grow: 放大比例
flex-shrink：缩小比例
flex-basis：分配前占据main axis空间 auto
flex: auto/none
align-self: auto，继承父级align-item
若父级无align-item，则为stretch
```

## 页面可见性

```javascript
document.visibilityState
```

可能的值：hidden, visible, prerender, preview  
可以用于控制视频、音频自动播放。

## import link

`import` 引用它的CSS加载之后，再进行加载，权重低于link

## Javascript Style

无法读取样式表中的样式

## Viewport

手机浏览器窗口  
width/height  
device-width  
initial-scale 初始缩放比例  
maximum/minimum-scale  
user-scalable  
clientWidth/Height， content+padding  
offsetTop/Left，距离父容器左上角  
scrollTop/Left，滚动过得。

## Element.getBoundingClientRect()

方法返回元素的大小及其相对于视口的位置。  
Element.getBoundingClientRect().left/right/top/bottom  
左上/右下与viewport的距离


