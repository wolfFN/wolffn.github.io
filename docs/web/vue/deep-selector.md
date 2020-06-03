---
title: Deep Selector
---

`vue`中，`css`样式通过`<style>`标签实现。当` <style>标签添加``scoped `属性时，其中的`css`样式将只作用于当前组件。类似如下代码：

```html
<style>
    /* global styles */
</style>

<style scoped>
    /* local styles */
</style>
```

实现原理则是通过`PostCSS`对代码进行转变：给当前组件添加类似`data-v-f3f3eg9`的属性，同时`style`中的`css`代码添加属性选择器。

```html
<style scoped>
    .example {
        color: red;
    }
</style>

<template>
    <div class="example">hi</div>
</template>
```

转变为：

```html
<style>
    .example[data-v-f3f3eg9] {
        color: red;
    }
</style>

<template>
    <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

这样做的好处，是把样式的影响局限在当前组件内，以避免污染全局环境。唯一不足，就是子组件只有根元素被打上了父组件的属性。也就是说，子组件除根节点外，其他节点都不受父组件`scoped`样式影响，所以我们没法直接在`scoped`中修改子组件的样式。  
然而，我们有时候会希望，把对某个组件的样式修改，局限于其父组件内部，以避免影响全局。方法之一，可以使用`sass/less`的嵌套`css`结构，父组件加一个`class`，在该`class`选择器内对子组件样式进行修改。然而，总归是不够 elegant.  
幸好幸好，`vue`在[12.2.0 版本](https://github.com/vuejs/vue-loader/releases/tag/v12.2.0)引入了`Deep Selector`这个功能。通过使用该功能，可以很好地实现我们局限于当前组件内部，修改其子组件样式而不至影响全局样式的目的。

```html
<style scoped>
    .a >>> .b {
        /* ... */
    }
</style>
```

会被编译为：

```css
.a[data-v-f3f3eg9] .b {
    /* ... */
}
```

> 参考：[https://vue-loader.vuejs.org/guide/scoped-css.html](https://vue-loader.vuejs.org/guide/scoped-css.html)
