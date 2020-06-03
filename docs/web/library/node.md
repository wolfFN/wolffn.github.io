---
title: Node
---


## TODO
log模块：[https://www.npmjs.com/package/winston](https://www.npmjs.com/package/winston)



#### 多线程
v10.5.0 引入多线程支持。  
[https://segmentfault.com/a/1190000018660861](https://segmentfault.com/a/1190000018660861)

```javascript
const worker = require('worker_threads');
```

People may argue that modules like cluster or child_process enabled the use of threads a long time ago. Well, yes and no.  
The cluster module can create multiple node instances with one master process routing incoming requests between them. Clustering an application allows us to effectively multiply the server’s throughput; however, we can’t spawn a separate thread with the cluster module.  
People tend to use tools like PM2 to cluster their applications as opposed to doing it manually inside their own code, but if you’re interested, you can read my post on how to use the cluster module.The child_process module can spawn any executable regardless of whether it’s JavaScript. It is pretty similar, but it lacks several important features that worker_threads has.  
Specifically, thread workers are more lightweight and share the same process ID as their parent threads. They can also share memory with their parent threads, which allows them to avoid serializing big payloads of data and, as a result, send the data back and forth much more efficiently.

[https://medium.freecodecamp.org/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276](https://medium.freecodecamp.org/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276)





#### Basic
底层libuv，多线程  

stub Unit Test


#### 全局错误处理：

```javascript
process.on('unhandledRejection', handler);
process.on('uncaughtException', handler);
```


