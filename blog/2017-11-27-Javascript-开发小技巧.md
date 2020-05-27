---
title: Javascript 开发小技巧
tags: [javascript]
---
*本文记录前端开发过程中，一些JS方面的技巧*

<!--truncate-->

1. `node.js`程序在chrome中调试
    ```bash
    node --inspect app.js
    ```
1. `await`并发
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
    async function asyncAwaitLoopsParallel () {
        const api = new Api()
        const user = await api.getUser()
        const friends = await api.getFriends(user.id)
        const friendPromises = friends.map(friend => api.getFriends(friend.id))
        const moreFriends = await Promise.all(friendPromises)
        console.log('asyncAwaitLoopsParallel', moreFriends)
    }

    ```
1. `sleep()`函数
    ```javascript
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function test() {
        console.log('Hello')
        await sleep(1000)
        console.log('world!')
    }

    return delay(10000).then(function (): Promise<any[]> {
        return Promise.all(start);
    })

    test()
    ```