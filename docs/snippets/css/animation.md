---
title: 动画
---
## Loading

居中的 loading 动画，本质是将 12 张独立的图片，拼到一起，步进动画，共 12 步。  
(下面有一张图，loading.png，右键 -> `Open Image In New Tab` 进行查看)  
![loading.png](/img/docs/animation/loading.png)

```css
.loader {
    position: absolute;
    z-index: 10002;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .loader-img {
        width: 40px;
        height: 40px;
        background: url(/img/loading.png) 0 0 no-repeat;
        animation: loader 1s infinite steps(12);
        overflow: hidden;
    }
}

@keyframes loader {
    to {
        background-position: -480px 0;
    }
}
```

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
