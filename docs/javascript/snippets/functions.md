---
title: 实用函数
---

## `node.js`程序在 chrome 中调试

    ```bash
    node --inspect app.js
    ```

## 创建数组

```javascript
Array.from({ length: 100 }, (v, i) => i);
// [0, 1, 2, .......99]
```

## Await 并发

```javascript
// 方法1
async function logInOrder(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });
    // 按次序输出
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}

// 方法2
async function asyncAwaitLoopsParallel() {
    const api = new Api();
    const user = await api.getUser();
    const friends = await api.getFriends(user.id);
    const friendPromises = friends.map(friend => api.getFriends(friend.id));
    const moreFriends = await Promise.all(friendPromises);
    console.log('asyncAwaitLoopsParallel', moreFriends);
}
```

## sleep

```javascript
await new Promise(r => setTimeout(r, 1000));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    console.log('Hello');
    await sleep(1000);
    console.log('world!');
}

return delay(10000).then(function () {
    return Promise.all(start);
});

test();
```

## 防抖

多次触发同一个动作、事件时，仅**最后一次**触发

```javascript
function debounce(method, time) {
    let timer = null;
    return function () {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            method.call(context);
        }, time);
    };
}
```

## 节流

多次触发同一个动作、事件时，按一定**时间间隔**触发

```javascript
function throttle(fn, delay) {
    let previous = Date.now();
    return function (param) {
        const context = this;
        const now = Date.now();
        if (now - previous > delay) {
            fn.call(context);
            previous = now;
        }
    };
}
```
