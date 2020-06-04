---
title: Bellman-Ford
---
贝尔曼-福特算法，用以求解图最短路径问题。  
步骤如下：

1. 初始化 costs，起始点 0，其余无穷大。
1. 选择一条边，根据边的权重，和两端节点的 cost，分别（无向图）计算新的 cost，如果变小，则更新，同时记录新 cost 的前一个节点。
1. 对所有节点执行上述操作。
1. 重复 2，3 步骤， 直至不再更新。最多为 N - 1 次，N 为节点总数。

## 应用

[Leetcode 743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)，代码如下：

```javascript
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
    const costs = Array(N + 1).fill(Infinity);
    costs[0] = 0;
    costs[K] = 0;

    let updated = true;
    while (N-- && updated) {
        updated = false;
        for (const [u, v, w] of times) {
            if (costs[u] === Infinity) {
                continue;
            }
            if (costs[u] + w < costs[v]) {
                costs[v] = costs[u] + w;
                updated = true;
            }
        }
    }

    const max = Math.max(...costs);
    return max === Infinity ? -1 : max;
};
```
