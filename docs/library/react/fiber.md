---
title: Fiber
---

## What
React Fiber 是 react team 为了解决性能问题（执行超过 16ms，掉帧），对 reconciliation algorithm 的一次重写。在 react 16 版本引入后，作为 default reconciler。  

| Stack Reconciler | Fiber Reconciler |
| ----------- | ----- |
| 不可变 | 可变 |
| Tree of Objects | Tree of fiber nodes |
|   递归遍历    |    链表，父优先，dfs |

* 在 Stack Reconciler 中，Object 代表一个组件(如`<App />` )，用以表示一个组件实例或 DOM 节点及其 props。
* 在 Fiber Reconciler 中，可以将 a singer fiber 视作 a virtual stack frame.

## How
在 Stack Reconciler 中：
* React 通过遍历树来进行更新操作，过程由堆栈协调器控制。
* 当更新到达时，会放入事件队列，等待堆栈变空再执行。
* 遍历过程不可中断。若执行事件超过 16ms，则会引起掉帧。

Fiber 可视为虚拟堆栈帧（a virtual stack frame），由此具有 pause, resume, abort 的能力。  
于是手动调度成为可能，可以将其保存至内存，再需要时继续执行。  
此外，Concurrent 和 Error Boundary 也依赖于此架构。  

* 为不同类型的任务分配优先级，比如，animation 的优先级应当高于 data store
* 暂停执行，稍后回来
* 若不再需要，Abort
* 复用已完成的 work


## 核心实现
若某个任务执行时间超过当前帧剩余时间，则将其暂停，等待下一帧继续执行。  
React 通过 `MessageChannel` + `RequestAnimationFrame()` 模拟 `window.RequestIdleCallback()` 实现调度。原因如下：  
* `window.RequestIdleCallback()` 调用于重排，重绘之后，不符合需求。并且有兼容性问题。
* `RequestAnimationFrame()` 调用于重排，重绘之前
* `MessageChannel` 也是宏任务，但是由于 setTimeout 递归调用时，首次之后间隔会变成 4ms。在一帧仅有的 16ms 中不可接受。
