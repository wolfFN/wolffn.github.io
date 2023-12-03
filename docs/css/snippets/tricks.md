---
title: TRICKS
---

## 检测是否支持某个样式属性
```js
const root = document.documentElement;
if ('text-shadow' in root.style) {
    // add style
}
```

## 文字折线

```css
/*
 * 省略文字...
 */
.ellipsis(@w:auto) {
    width: @w;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

/*
 * 显示line行文字,后面...隐藏
 */
.ellipsisLn(@line) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: @line;
}
```

## 聊天边框小三角

```css
body {
    margin: 0;
}
.container {
    position: relative;
    width: 200px;
    height: 50px;
    margin-top: 10px;
    background-color: red;
}
.container:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: red;
    top: -20px;
    left: 20px;
}
```
