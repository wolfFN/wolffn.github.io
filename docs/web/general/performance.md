---
title: 性能
---

### 优化渲染性能

如果你想优化你的应用，那么你需要关注五个主要方面。 这些是你可以控制的区域：

1. **JavaScript** — 当涉及渲染时，我们需要考虑 JavaScript 代码与页面上 DOM 元素交互的方式。 JavaScript 可以在 UI 中创建大量更改，尤其是在 SPA 中。
2. **样式计算** — 这是确定哪个 CSS 规则适用于基于匹配选择器的元素的过程。 一旦定义了规则，就会应用这些规则，并计算每个元素的最终样式。
3. **布局** — 一旦浏览器知道哪些规则适用于元素，就可以开始计算后者占用的空间以及它在浏览器屏幕上的位置。 Web 的布局模型定义了一个元素可以影响其他元素。 例如，`&lt;body&gt;` 的宽度会影响其子元素的宽度等等。 这一切都意味着布局过程是计算密集型的。 该绘图是在多个层次完成的。
4. **绘制** — 这是实际像素被填充的位置。 该过程包括绘制文本，颜色，图像，边框，阴影等 - 每个元素的每个视觉部分。
5. **组装** — 由于页面部件被划分为多层，因此需要按照正确的顺序将其绘制到屏幕上，以便页面正确渲染。 这非常重要，特别是对于重叠元素。

### 优化你的 JavaScript

JavaScript 经常触发浏览器中的视觉变化。 当建立一个 SPA 时更是如此。<br />
以下是关于 JavaScript 可以优化哪些部分以改善渲染的一些提示：

- 避免使用 `setTimeout` 或 `setInterval` 来进行视觉更新。 这些将在时间轴中的某个点调用回调，可能在最后阶段执行。 我们想要做的就是在画面开始时触发视觉变化，不要错过它。
- 将长时间运行的 JavacScript 计算移动到 Web Workers。[参考](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)
- 使用微任务在多个 frame 中引入 DOM 更改。 这是为了防止任务需要访问 DOM，Web Worker 无法访问该 DOM。 这基本上意味着你将一个大任务分解成更小的任务，并根据任务的性质在 requestAnimationFrame，setTimeout，setInterval 中运行它们。

### 优化你的 CSS

通过添加和删除元素，更改属性等来修改 DOM 将使浏览器重新计算元素样式，并且在很多情况下还会整个页面的布局或至少部分布局。<br />
要优化渲染，请考虑以下几点：

- 减少选择器的复杂性。 选择器的复杂性可能需要计算元素样式所需的时间的 50％以上，而构造样式本身的其余工作则需要花费超过 50％的时间。
- 减少样式计算必须改变的元素数量。 实质上，直接对几个元素进行样式更改，而不是使整个页面无效。

### 优化布局

浏览器的布局重新计算可能非常繁重。 考虑以下优化：

- 尽可能减少布局的数量。 当你更改样式时，浏览器会检查是否有任何更改要求重新计算布局。 对属性（如宽度，高度，左侧，顶部以及通常与几何相关的属性）的更改需要布局。 所以，尽量避免改变它们。
- 尽可能使用 flexbox 而不是之前的布局模型。因为它运行得更快并且能够为你的应用带来巨大的性能提升。
- 避免强制同步布局。 需要注意的是，在 JavaScript 运行时，前一帧中的所有旧布局值都是已知的，可供您查询。 如果你访问 box.offsetHeight 它不会是一个问题。 但是，如果您在访问该框之前更改了框的样式（例如，通过向该元素动态添加一些 CSS 类），浏览器必须先应用样式更改并运行布局。 这可能非常耗时且耗费资源，因此请尽可能避免。

### 优化绘制
这通常是所有任务中运行时间最长的，因此尽可能避免这种情况非常重要。 以下是我们可以做的事情：

- 避免更改 transforms 或者 opacity 这些触发绘制的属性。谨慎使用它。
- 如果你触发了一个布局，你将会触发一个绘制，因为改变几何形状会导致元素的视觉变化
- 通过图层提升和动画编排来减少绘制区域。



## General

### Using CDNs for External Resources
Browsers restrict the concurrent connection to a single domain to a specific number.  
File might have been cached  
High capacity infrastructure  

### Enable gzip Compression on the Web Server
Accept-Encoding  
Content-Encoding  

### Avoid Unnecessary Dependencies

### Use Web Workers for CPU Extensive Tasks

### SSR
performance  
SEO optimization  

### CSS Animation Instead of JavaScript Animation
1. Broken CSS rules and styles do not lead to errors of broken web pages.
2. CSS is quite cheap to interpret as it's declarative
3. The cost of loading a Javascript animation library is relatively high.
4. Javascript code can block the UI.