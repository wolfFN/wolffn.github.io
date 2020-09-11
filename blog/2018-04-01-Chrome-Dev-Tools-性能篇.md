---
title: 'Chrome Dev Tools---[性能篇]'
tags: [chrome, tools]
---
> 本文主要记录Chrome Dev Tools 关于性能调优的使用方法。基础用法请参见[基础篇](//wolffn.github.io/blog/2017/11/15/Chrome-Dev-Tools-%E5%9F%BA%E7%A1%80%E7%AF%87/)  

<!--truncate-->
## Performance
- 与`loading`相对,是`running`的性能,找出页面性能瓶颈,建议:
  - 在`隐身模式下`使用.
  - `Capture Settings`->`20x slowdown`(for mobile)
- 右键 -> `Save profile`/ `Load profile`
- `Record`结果分析:
  - `FPS`出现红色时,说明丢帧严重,绿色越高,性能越好.
  - `CPU`与底部的`Summary`相呼应,当该栏被颜色填满时，说明`CPU`满负荷.
  - 鼠标悬浮于`FPS`,`CPU`,`NET`上面时,可以看到放大的screenshot
  - 鼠标悬浮于`Frames`,查看FPS,不应高于60.
  - `Frames`中,点击某一帧,`Summary`中显示Screenshot,点击可放大;此时若开启`Enable advanced paint instrumentation`,会显示`Layer`
  - `Interactions`:用户交互事件
  - `Cmd + Shift + p`->`show rendering`,显示`Rendering` Tab
  - `Overview`上点击、按住并移动鼠标,来聚焦某一个时间段.(或者使用W A S D键)
- 找出瓶颈`bottleneck`
  - `Summary`中,`Rendering`是否过多->减少`Rendiering`
  - `Memory`勾选后显示内存使用情况
  - `Network`,左侧线:request sent之前的事件;浅色:request sent,waiting;深色:content download;右侧线:等待主进程.
  - 展开`Main`,`x`:时间,越宽说明运行时间越长;`y`:callstack.
  - `Main`中,Shift+鼠标选择区域,可以看到具体时间
  - `Main`中,颜色随机分配,深黄色`Scriping`,紫色`Rendering`,
  - `Main`中,事件右上角红色三角,说明很可能有性能问题.
  - 点击`Main`中的事件,`Summary`中会显示详情,`reveal`跳转至相应code
  - `console`旁边有`rendering`.`Paint Flashing` `layer borders` `scrolling performance issues`
  - 在调用栈最底层的紫色事件(Layout),放大后很可能也有红色三角,点击,再从`Summary`跳转至对应代码,可以发现右侧又事件,指示出强制重绘的事件.
  - [事件类型参考](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/performance-reference)
- 查看调用栈,分析性能
  - 三个Tab均展示选中事件
  - 右侧`Show Heaviest Stack`
  - `call tree`查找哪一个`root activity`消耗了最多的时间
  - `bottom up`展示直接消耗时间的事件
  - `event log`按调用顺序展示,`filter`选择事件类型

## Memory

- Menu -> More tools -> Task manager 打开任务管理器
  - 右键点击表格标题 -> 启用JavaScript memory
  - `Memory`列表示原生内存，`JavaScript Memory`表示JS堆。
- 内存术语
  - 对象可通过两种方式占用内存：
    - 直接通过对象自身占用，对象自身占用内存大小在分析结果中表现为`Shadow Size`。
    - 通过保持对其他对象的引用隐式占用。对象本身、连同其无法从**GC根**到达的相关对象一起删除后释放的内存大小，在分析结果中表现为`Retained Size`。
  - `Distance`是指该内存节点与GC 根之间的距离。如果相同类型的几乎所有对象的距离都相同，只有少数对象的距离偏大，则有必要进行调查。
- Devtools -> Performance面板 -> 启用Memory复选框
  - 在记录时点击Collect garbage，可以强制垃圾回收。
  - Overview窗格中HEAP图表表示JS堆
  - 最下方窗格为JS HEAP、Documents、Nodes、Listeners、GPU Memory
- 使用堆快照，发现已从DOM Tree分离节点的内存泄漏。
  - 选择`Take Heap Snapshot `，然后点击`Take Heap Snapshot`按钮。
  - 执行一段时间后，从左侧面板选择该快照，快照名字下方显示JS对象总大小。
  - Summary视图显示按构造函数名称分组的对象，Containment 视图提供了对象结构视图，有助于分析全局命名空间 (window) 中引用的对象以找出是什么让它们始终如影随形。使用此视图可以分析闭包以及在较低级别深入了解您的对象。
  - 在`Summary`视图的 **Class filter** 文本框中键入 `Detached`，搜索已分离的 DOM 树。
  - 展开三角符号，以黄色突出显示的节点具有 JavaScript 代码对它们的直接引用。
  - 点击黄色节点，在 **Object** 窗格中，可以看到与正在引用该节点的代码相关的更多信息。 
- 使用分配时间线确定 JS 堆内存泄漏
  - 选择`Record Allocation Timeline`单选按钮，按`Start`按钮，执行您怀疑导致内存泄漏的操作。完成后，按`stop recording`按钮。
  - 点击记录的profile文件查看，选择展现形式为`Chart`。分配时间线上的蓝色竖线表示新内存分配。
  - 点击下方内容，可以查看具体代码。
- 按函数调查内存分配
  - 选择Record Allocation Profiler 类型，可以按照 JavaScript 函数查看内存分配。
  - 点击`start`按钮，执行期望观察的操作，完成后点击`stop`。
  - Profile默认视图为 **Heavy (Bottom Up)**，将分配了最多内存的函数显示在最上方。
- 发现频繁垃圾回收
  - 如果感觉页面经常暂停，则可能存在垃圾回收问题。
  - 在任务管理器中，**Memory** 或 **JavaScript Memory** 值频繁上升和下降表示存在频繁的垃圾回收。
  - 在`Timeline`记录中，JS 堆或节点计数图表频繁上升和下降指示存在频繁的垃圾回收。


## Application

- storage: 查看local storage,session storage,IndexedDB,Web SQL,
- Application Cache: 查看通过Application Cache API创建的资源和规则
- Cache Storage: 查看Service Worker相关缓存
- Clear Storage: 删除缓存
- Cookies: 查看、删除cookie,不可修改
- Frame: 安框架组织Resources
  - 右键->复制链接、在新页面中打开、保存、在Network中查看
