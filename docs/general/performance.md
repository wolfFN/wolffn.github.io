---
title: 性能
---

## [Core Web Vitals](https://web.dev/vitals/)

包含一系列能够衡量用户体验各个方面的指标，以及每个指标的目标阈值。当前版本(2020)主要关注三个方面: loading, interactivity, visual stability。主要指标以及参考性能(P75)如下：
![image.png](/img/docs/general-performance/core-web-vitals.svg)

- **[Largest Contentful Paint (LCP)](https://web.dev/lcp/)**： 显示最大内容元素所需时间， 用以衡量用户可感知的网站初次载入速度，以网页 viewport 最大 Element 载入为基准点。
- **[First Input Delay (FID)](https://web.dev/fid/)**：用以衡量网战交互的顺畅程度，定义为 TTI 的时间内第一个互动事件的开始时间与浏览器回应事件的时间差。
- **[Cumulative Layout Shift (CLS)](https://web.dev/cls/)**：用以衡量网页元素的视觉稳定性，量化非预期的的布局偏移累计。可以在 `chrome devtool` 的 `performance` 面板查看，当 CLS 较高时会被标记出来。

### 测量手段
除了 Google 提供的一些[可视化工具](https://web.dev/vitals-tools/)，我们还可以通过使用 [web-vitals](https://github.com/GoogleChrome/web-vitals) 在 Javascript 中直接获取数据。

```javascript
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

可视化工具情况如下：
![image.png](/img/docs/general-performance/Vitals-Tools-1.png)

### 其他常用指标

* First Contentful Paint（FCP），测量用户打开页面后浏览器呈现的第一个DOM内容所花费的时间（不包括iframe中任何内容）。
* Speed Index(SI)，衡量页面加载过程中内容从视觉上呈现的速度。
* Time to Interactive (TTI)，页面变为完全可以交互的状态所耗费的时间。
* Total Blocking Time (TBT)，衡量页面加载过程中阻塞用户操作的时长，总时间由FCP到TTI之间的所有长任务的阻塞时间相加得出。长任务（long task）的阻塞时间说明：执行时间超过50ms的任务都算做长任务，50ms之后的耗时便是阻塞时间，例如一个70ms的任务，其阻塞时间便为20ms。
* First Paint (FP)，页面导航与浏览器将网页的第一个像素渲染到屏幕上所用的时间，即任何与输入网页导航前屏幕上内容不同的渲染的时间。
* First Meaningful Paint（FMP），衡量用户何时能看到页面的主要内容。由于此指标定义依赖于特定浏览器的实现细节，无法实现标准化，计算结果也会因页面加载中的微小差异而产生不一样的结果，因此在核心指标中，被LCP所取代。
* First CPU Idle，测量页面变为能进行最低限度的交互所花费的时间。当页面准备好为用户输入时，First CPU Idle 和TTI都将开始进行测量，用户可以开始同页面进行交互时，发生First CPU Idle ，当用户能最大程度同页面交互时，发生TTI。被 TBT，TTI 取代。
* Time To First Byte(TTFB)，发出页面请求到接收到应答数据第一个字节的时间总和，首字节指的是收到的HTTP头的第一个字节。主要用于服务器方面的优化。
* `performance.timing` ，包含了页面相关的性能信息。



## 优化渲染性能

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