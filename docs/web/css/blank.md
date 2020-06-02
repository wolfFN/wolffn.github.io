---
title: 幽灵空白👻
---

## 现象

期待在垂直方向，占据父元素全部高度的图片，下方出现神秘空白。

```html
<div class="wrap">
    <img
        src="http://s2.dgtle.com/forum/201902/02/235938osk6iixgamtake2t.jpg?imageView2/2/w/300/q/100"
        alt=""
    />
</div>
```

```css
div {
    background-color: red;
}
```

![image.png](/img/docs/blank/blank.png)

很容易认为是 img 标签后的换行，带来了空白字符。但是将 html 修改如下后，空白依旧存在。

```html
<div class="wrap">
    <img
        src="http://s2.dgtle.com/forum/201902/02/235938osk6iixgamtake2t.jpg?imageView2/2/w/300/q/100"
        alt=""
    />
</div>
```

## 成因

在图片后添加一个字符 x，发现很可能是 x 占据的空间，撑开了父级元素。

```html
<div class="wrap">
    <img
        src="http://s2.dgtle.com/forum/201902/02/235938osk6iixgamtake2t.jpg?imageView2/2/w/300/q/100"
        alt=""
    />
    <span>x</span>
</div>
```

![image.png](/img/docs/blank/blank-x.png)  
由此得知，图片和文字，基于父元素的基线对齐，而基线，是正常流中最后一个元素的基线。img 标签的基线在图片底部，而字符 x 的基线在字母底部。


## Solution

了解原理后，很容易想到解决方案

1. 父元素设置：`font-size: 0;`
1. 父元素设置：`line-height: 0;`
1. img 标签设置：`vertical-align:top/middle/bottom`
1. img `display: block;`，或者父元素，`display: flex;`
