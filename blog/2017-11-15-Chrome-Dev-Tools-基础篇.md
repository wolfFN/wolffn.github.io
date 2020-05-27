---
title: 'Chrome Dev Tools---[基础篇]'
tags: [chrome, tools]
---
Chrome Dev Tools 是每一位前端工程师开发调试的必备利器，称之为FE的瑞士军刀也毫不为过。然而，每每当发现一些自己不知道的用法时，我们经常会觉得，自己只是掌握了其强大功能的九牛一毛。为了能够让她发挥出最大功效，首先，我们应当了解她更多的使用方法；然后，在开发中合适的场景下，刻意练习使用；最后，熟练掌握那些之前不了解的功能，并为我所为用，最大提升效率。
> 本文翻译自[谷歌官方文档](https://developers.google.com/web/tools/chrome-devtools)，主要介绍了Elements, Console, Sources, Network四个Tab页面下的功能。敬请期待`Chrome Dev Tools 性能篇`

<!--truncate-->

## Elements
- 进入：
	1. `Cmd + Alt + c` inspect，点击想观察的节点
	1.  console中`inspect(DOM)`，`DOM`为想观察的节点。
- 遍历节点：
	1. 鼠标点击
	1. 在DOM节点中，上下箭头跳转，向右箭头，展开折叠的节点。向左箭头，折叠打开的节点。
- 编辑节点
	 `F2` -> Edit as HTML. `ctrl+enter`保存更改，`Esc`退出更改，不保存.
- 编辑 DOM 节点名称或属性
	1. 直接在节点名或属性上双击
	1. 选中突出节点，`Enter`,然后`Tab`选择.
	1. 右键,`Edit/Add Attribute`.
- 点击并拖动,可以移动DOM节点.
- 右键->`Scroll into view`,滚动页面使节点在视口中显示.
- 断点调试
	1. 右键节点->`break on`，可以对该节点的子树修改、属性修改、节点移除三种事件添加断点
	1. 右侧`DOM Breakpoints`,管理**DOM断点**.
	1. Event Listener
		1. Ancestors 显示祖先节点的事件侦听器。
		1. 每个Event Listener包含两个属性
			- handler, `右键` -> `Show Function Definition`
			- useCapture, addEventListener函数中`useCapture`的值(bool).
			- Framework listeners, 框架事件监听器. 

- **Styles**，位于面板左侧，主要是样式相关内容
	- 页面底端的Computed 可以编辑，修改。
	- 点击`Styles`中的文件名->跳转到Source->右键，Local Modifications.
	- `Inherited from <NODE>`,点击`<NODE>`可以跳转到该DOM节点。
	- 灰色条目不是已定义规则，而是在运行时计算的规则。
	- 鼠标悬停在 CSS 选择器上可以查看受该选择器影响的所有元素。
	- 点击右上角`.cls`,可以查看、增加、删除class。
	- 点击(并长按)右上角`+`按钮，(选择要向哪一个样式表)添加一个新的 CSS 规则。
	- 点击右上角`:hov`，或在元素上点击右键，启用/删除伪类。
	- 点击css属性进行修改，tab跳转；Alt/ /Shift/Shift+Fn + 上/下，增减0.1,1,10,100。
	- 鼠标悬停到样式表上面，此时右下角出现三个点，移动过去，此时有`color`,`background-color`等快捷方式。
	- 点击`color`声明左侧带颜色的小正方形，打开`color-picker`。



## Console
- 进入: `Cmd + Alt + J`
- 编辑时，输入`Shift + Enter`实现换行，而不会直接运行。
- Settings -> General -> Console -> 
	- Hide network messages/ Log XMLHttpRequests/ Preserve log / Enable custom formatters
	- Show timestamps 展开消息堆叠.

#### Console API
- Ctrl + L/ `clear()` /`console.clear()` 清空console.
- 右键 -> Save As 保存console输出.
- 日志组按组输出,可嵌套:
    ```javascript
    console.group("Group Name")
    console.groupCollapsed("Group Name")//默认折叠
    console.groupEnd()
    ```
- 计时器,时间戳,*在Timeline上有标注*
    ```javascript
    console.time("name");
    console.timeEnd("name");
    // 向Timeline添加一个标记
    console.timeStamp("Adding result");
    ```
- 断言,在console中可跳转到代码对应位置.
    ```javascript
    console.assert(a < 500, "a > 500!");
    ```
- 堆栈追踪&&错误处理
    ```javascript
    // 追踪堆栈
    try {
        // some code here
    } cache(e) {
        console.log(e.stack);
    }
    // 打印跟踪调用栈
    console.trace();
    // 处理运行时异常
    window.onerror = function(message, url, line){
        console.log("window.onerror was invoked with message = " + message + ", url = " + url + ", line = " + line);
    }
    ```
- 字符串替换 `%s %d %f %o(DOM节点) %O(js对象) %c 样式`。不过有了ES6以后，推荐使用更加方便、灵活的模板字符串
- 添加cpu配置文件.将会添加到`Profiles`面板中
    ```javascript
    console.profile("label");
    console.profileEnd();
    ```
- 其他特殊用法
    ```javascript
    // DOM元素格式化为JS对象
    console.dir(document.body);
    // 输出object子级元素xml
    console.dirxml(object);

    // 将Object,Array输出
    console.table([{a:1, b:2, c:3}, {a:"foo", b:false, c:undefined}]);
    console.table([[1,2,3], [2,3,4]]);
    console.table(family, ["firstName", "lastName", "age"]);

    // 记录相同字符串传入的次数(多用于统计函数调用次数)
    console.count("Login called for user " + user);
    ```
#### Command Line API
- ↑ / ↓切换查看表达式 

- 选择元素
  ```javascript
  $('code') // document.querySelector()
  $$('figure') // document.querySelectorAll()
  $x('html/body/p') // 返回与指定xpath匹配的数组元素
  $0 - 4 // 返回最近访问过的5个元素,$0为最新的一个
  ```

- 监听事件, 查看时间监听器(`Elements`->`Event Listener`中也可以查看)
  ```javascript
  monitorEvents(document.body, "click"); // 监听事件
  unmonitorEvents(document.body); // 取消监听
  getEventListeners(document); // 返回在指定对象上注册的事件侦听器
  ```

- 复制:将指定对象的字符串表示形式复制到剪贴板.
  ```javascript
  copy(object);
  copy($0);
  ```
- 调试函数
  ```javascript
  debug(fn); // 调用fn时开始调试
  undebug(fn); // 停止调试

  monitor(function); // console中将输出函数调用,以及传入的参数
  unmonitor(function); // 停止监控
  ```
- 在`Elements`中打开指定元素/对象/函数.
  ```javascript
  inspect(DOM);
  inspect(object/function);
  ```
- 查看对象
  ```javascript
  keys(object);
  values(object);
  ```

## Sources
- 添加断点
   - 添加`Event`断点:
	`Source标签`->右侧`Event Listener Breakpoints `->`Mouse`->`click`
   - `DOM`断点.Elements 面板中，对DOM节点右键，Break On...
   - `XHR`断点
   - 异常断点:右上角`Pause on exceptions`
   - 条件断点
	```javascript
	//  当DOM元素满足某个条件进行断点，同时查看这个元素
	elem.hasAttribute('class') && inspect(elem);
	```
- 在编辑器中行首右键,`continue to here`
- 检测变量值
  - `Watch`->`+`,添加希望检测的表达式,比如,a,typeof a
  - `Scope`窗格,在脚本暂停时,会显示当前变量
- log变量值
  - 右键 -> `Add logpoint`
- 右上角`Deactivate breakpoints`,启动/忽略全部断点
- `Call Stack`调用堆栈
   - 在`Call Stack`中右键,`Restart Frame`
   - `Async`,提高完整的异步函数调用堆栈的可视性
   - 使用非匿名函数,提高堆栈可读性
- 将第三方脚本添加入黑箱:
   - 在已打开的文件中,右键->`Blackbox Script`
   - 在`Call Stack`中,右键->`Blackbox Script`
   - `Settings`->`Blockboxing`->`add pattern`,下拉菜单中,`Blackbox`黑箱,`Disabled`阻止执行
- 实时编辑:编辑器中修改代码->`Cmd + s`，继续运行代码
- `Threads`,切换线程
- `Source Map`, `Settings`中开启
- `Snippets` 编写代码，运行结果输出到`console`

## Network
- 面板中，蓝线标志`DOMContentLoaded`事件，红线标志`load`事件。
- `Http1.0/1.1`下,`chrome`最多支持对同一个`domain`6个`TCP`请求
- Shift + 光标移动到request上面，此时绿色标志该请求的发起者，红色标志该请求的依赖项。
- 摄像机按钮，`Capture Screenshots`，再次刷新页面时，可以在时间轴上方看到对应屏幕状态。
- `disable cache`,`throttle`,`Offline`,`hide data urls`
- 右键->`clear browser cache`
- 右键表格header -> 添加/移除显示列
- `header`:`Use large request rows`,`Show overview`
- 右键request->`copy response`->console中`copy({})`->得到格式化的JSON
- - 右键request->`block request` 在drawer中,查看被block的request
- 右键`XHR request` -> `reply XHR`
- `Summary`: request数量,大小,时间
- Filter
  - 空格隔开:并
  - `domain`,`has-response-header`,`is`(is:running),`larger-than`,`method`,`mime-type`,`mixed-content`,`scheme`,`set-cookie-domain`,`set-cookie-name`,`set-cookie-value`,`status-code`
- Timing含义:
  Queuing: 排队时间.
  Stalled: http请求建立到发出去. 
  Proxy Negotiation、DNS Lookup
  Initial Connection/Connecting: 建立链接花费时间。TCP握手移机重试.
  SSL: 建立SSL链接花费时间.
  Request sent: 发起请求的时间.
  Waiting (Time to first byte (TTFB)): 发起请求到接受第一个字节数据.
  Content Download: 获取响应数据的时间.
