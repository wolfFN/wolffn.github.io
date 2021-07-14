---
title: JS 动画
---

## JS 动画

首先推荐一个强大的动画库：[Anime.js](https://animejs.com/documentation/)。通过使用`Anime.js`，我们可以实现大部分常见动画效果。

下面是一个将`current`移动到`target`，并有一定动画效果的例子。

```javascript
const currentX = parseInt(document.getElementById('current').style.left, 10);
const currentY = parseInt(document.getElementById('current').style.top, 10);
const targetX = parseInt(document.getElementById('target').style.left, 10);
const targetY = parseInt(document.getElementById('target').style.top, 10);
anime({
    targets: target,
    translateX: [{ value: targetX - currentX, duration: 1200 }],
    translateY: [{ value: targetY - currentY, duration: 1200 }],
    direction: 'alternate',
    rotate: '0.2turn',
    scale: {
        value: 2,
    },
    // backgroundColor: '#FFF',
    duration: 1200,
    complete: () => {
        this.energy -= 100;
        this.minusEnergy();
    },
});
```
