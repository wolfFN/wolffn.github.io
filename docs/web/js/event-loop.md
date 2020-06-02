---
Title: Event loop
---

## Overview

宿主环境(`Hosting Environment`)，比如浏览器、`Node.js`，提供 `WEB APIs`。当这些 `WEB API` 触发之时，将 `Task` 加入 `Callback Queue`。  
当 `Call Stack` 为空时，`Event Loop`将 `Callback Queue` 中的 `Task`，加入到 `Call Stack`中。每次加入的`Task`，称之为一个`Tick`。  
JS 引擎(`JS Engine`)，执行 `Call Stack` 中的`Tasks`。  

![event-loop-overview.png](/img/docs/event-loop/event-loop-overview.png)

## Job Queue

由上文可以看出，`Event Loop`，是`Hosting Environment`提供的功能。`ES6`中，由于`Promise`机制引入标准，`Event Loop`成为`JS engine`的一部分，而不再仅仅是 `Hosting Environment` 的职责。  
`JS Engine` 将 `Job Queue` 加到当前 `Tick` 的最后。优先于下一个`Tick`，也就是`Callback Queue`中的 code。"later, but as soon as possible."  
很多文章，将此类任务，称之为微任务（`MicroTask`）。为了区分，`Event Loop` 中的`Task`，成为宏任务（`MacroTask`）。  

## WEB APIs

事件（event），用户交互（user interaction），脚本（script），渲染（rendering），网络（networking）等。  

```javascript
MacroTask
script(整体代码), setTimeout, setInterval, setImmediate（node 独有）, I/O, UI rendering

MicroTask
process.nextTick（node 独有）, Promises, Object.observe(废弃), MutationObserver
```

## 实现

根据上下文的不同，`Event loop`也有不同的实现：

-   `Node.js`使用了 libuv 库来实现 Event loop;
-   浏览器中，`html`规范定义了`Event loop`，具体的实现则交给不同的厂商去完成。

### Browser

同一个 context 中，总的执行顺序为：同步代码—>microTask—>macroTask。  
浏览器中，一个事件循环里有很多个来自不同任务源的任务队列（task queues），每一个任务队列里的任务是严格按照先进先出的顺序执行的。但是，因为浏览器自己调度的关系，不同任务队列的任务的执行顺序是不确定的。大体步骤如下：

1. 浏览器会不断从`Task`队列(`Callback Queue`)中按顺序取`Task`执行
2. 每执行完一个`Task`都会检查`Microtask`队列是否为空（执行完一个`Task`的具体标志是`Call Stack`为空）
3. 如果不为空则会一次性执行完所有`Microtask`。
4. 然后再进入下一个循环去 task 队列中取下一个`Task`执行，以此类推。  

![event-loop-browser.png](/img/docs/event-loop/event-loop-browser.png)

### Node.js

`Node.js`的`Event Loop`分为 6 个阶段，它们会按照顺序反复运行，分别如下：

1. `timers`：执行`setTimeout()` 和 `setInterval()`中到期的`Callback`。
2. `I/O callbacks`：上一轮循环中有少数的`I/O callback`会被延迟到这一轮的这一阶段执行
3. `idle, prepare`：队列的移动，仅内部使用
4. `poll`：最为重要的阶段，执行`I/O callback`，在适当的条件下会阻塞在这个阶段
5. `check`：执行`setImmediate`的`callback`
6. `close callbacks`：执行`close`事件的`callback`，例如`socket.on("close", func)`  
   不同于浏览器的是，在每个阶段完成后，而不是`MacroTask`任务完成后，`microTask`队列就会被执行。这就导致了同样的代码在不同的上下文环境下会出现不同的结果。

另外需要注意的是，如果在`timers`阶段执行时创建了`setImmediate`则会在此轮循环的`check`阶段执行，如果在`timers`阶段创建了`setTimeout`，由于`timers`已取出完毕，则会进入下轮循环，`check`阶段创建`timers`任务同理。

![event-loop-node.png](/img/docs/event-loop/event-loop-node.png)

### 执行顺序差别

```javascript
setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

浏览器输出：
time1
promise1
time2
promise2

Node输出：
time1
time2
promise1
promise2
```

浏览器：两个`setTimeout`作为两个`MacroTask`, 所以先输出`timer1, promise1`，再输出`timer2，promise2`。  
Node：最初`timer1`和`timer2`就在`timers`阶段中。开始时首先进入`timers`阶段，执行`timer1`的回调函数，打印`timer1`，并将`promise1.then`回调放入`microtask`队列，同样的步骤执行`timer2`，打印`timer2`；  
至此，`timer`阶段执行结束，`event loop`进入下一个阶段之前，执行`microtask`队列的所有任务，依次打印`promise1、promise2`。

```javascript
setImmediate(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
})
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)
Node输出：
timer1               timer2
promise1    或者     promise2
timer2               timer1
promise2             promise1
```

按理说`setTimeout(fn,0)`应该比`setImmediate(fn)`快，应该只有第二种结果，为什么会出现两种结果呢？  
这是因为`Node`做不到 0 毫秒，最少也需要 1 毫秒。实际执行的时候，进入事件循环以后，有可能到了 1 毫秒，也可能还没到 1 毫秒，取决于系统当时的状况。如果没到 1 毫秒，那么 `timers` 阶段就会跳过，进入 `check` 阶段，先执行`setImmediate`的回调函数。  
另外，如果已经过了`Timer`阶段，那么`setImmediate`会比`setTimeout`更快，例如：

```javascript
const fs = require('fs');
fs.readFile('test.js', () => {
    setTimeout(() => console.log(1));
    setImmediate(() => console.log(2));
});
```

上面代码会先进入 `I/O callbacks` 阶段，然后是 `check` 阶段，最后才是 `timers` 阶段。因此，`setImmediate` 才会早于 `setTimeout` 执行。

### `process.nextTick`优先于`Promise`

```javascript
setTimeout(() => console.log(1));
setImmediate(() => console.log(2));
Promise.resolve().then(() => console.log(3));
process.nextTick(() => console.log(4));
输出结果：4 3 1 2或者4 3 2 1
```

`microTask`优于`macroTask`运行，所以先输出下面两个;  
而在`Node`中`process.nextTick`比`Promise`更加优先，所以 4 在 3 前;  
而根据我们之前所说的`Node`没有绝对意义上的 0ms，所以 1, 2 的顺序不固定。

## 并发

通过单线程事件循环实现  
等待条件以及竞态条件实现：

```javascript
// gate
if (a && b) {
    // do something here
}
if (!a) {
    // do something here
}
```

不要使用 Synchronous Ajax Request。  
async function expression，用于匿名函数，立即执行函数。
