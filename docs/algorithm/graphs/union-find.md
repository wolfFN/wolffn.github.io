---
title: 并查集
---

《算法》第四版第一章，第一个案例，完整展示了迭代式改进让算法效率越来越高的过程。

## 问题定义

输入一列整数对，其中每个整数都表示一个某种类型的对象，一对整数 `p, q` 可以被理解为 `p 和 q 是相连的`。  
:::tip 相连  
相连是一种等价关系，具有自反性、对称性、传递性  
:::
等价关系能够将对象分为多个等价类。在这里，当且仅当两个对象相连时，他们才属于同一个等价类。  
编写一个程序，过滤掉序列中所有无意义的整数对（两个整数均来自同一个等价类中）。

## API

为了说明问题，我们做如下定义：

-   将对象称为`触点`
-   将整数对称为`连接`
-   将等价类称为`连通分量`，或简称`分量`

设计如下 API 来封装所需的基本操作：

-   初始化
-   连接两个触点
-   判断包含某个触点的分量
-   判断两个触点是否在同一个分量之中
-   返回所有分量的数量

```javascript
class QuickFind {
    // 初始化
    constructor() {}
    // 返回所有分量的数量
    count() {}
    // 判断包含某个触点的分量
    find() {}
    // 判断两个触点是否在同一个分量之中
    connected(p, q) {}
    // 连接两个触点
    union(p, q) {}
}
```

## 实现

后续将讨论若干实现，均根据触点为索引的数组 `_unionMap` 来确定两个触点是否存在于相同的联通分量中。

### QuickFind

一种方法是保证当且仅当 `p` 和 `q` 节点在 `_unionMap` 中的值相同时，二者是连通的。这意味着：

-   对于 `connected`，只需判断 `_unionMap[p] === _unionMap[q]`
-   对于 `union(p, q)`，当 `p, q` 未连通时，需要遍历整个数组，将所有和 `_unionMap[p]` 节点相等的元素的值变为 `_unionMap[q]` 的值。

完整实现如下：

```javascript
class QuickFind {
    _count = 0;
    _unionMap = [];

    constructor(length) {
        this._count = length;
        this._unionMap = Array.from({ length }, (v, i) => i);
    }

    count() {
        return this._count;
    }

    find(p) {
        return this._unionMap[p];
    }

    connected(p, q) {
        return this.find[p] === this.find[q];
    }

    union(p, q) {
        const pId = this.find(p);
        const qId = this.find(q);
        if (pId === qId) {
            return;
        }
        for (let i = 0; i < this._unionMap.length; i++) {
            if (this.find(i) === pId) {
                this._unionMap[i] = qId;
            }
        }
        this._count--;
    }
}
```

#### 复杂度分析

1. 每次 `find()` 只需要访问数组 1 次。 `connected()`需要访问数组两次。
1. `union()` 需要先调用两次 `find()` 检查是否相等，之后检查 `_unionMap` 中的 N 个元素，并改变他们中的 1 到 N-1 个元素的值。故整个 `union()` 操作访问数组的次数在 (N+3) 到 (2N-1) 之间。
1. 对于 N 个节点，假设最后得到了一个连通分量，那么至少需要调用 N-1 次 `union()` ，即至少 (N+3)(N-1) ~ N\*N 次数组访问。故复杂度为平方级别。

### Quick Union

该算法重点提高 `union()` 操作的速度，与 `Quick Find` 算法是互补的。我们将 `_unionMap` 赋予新的含义，用以存储 `链接` ：每个触点对应的 `_unionMap` 元素都是同一个分量中另一个触点的名称。

-   `find()` 方法需要寻找到根触点，即链接指向自己的触点
-   `union()` 只需要将一个根触点链接到另一个根据点即可。
    实现如下：

```javascript  {16,22,31}
class QuickUnion {
    _count = 0;
    _unionMap = [];

    constructor(length) {
        this._count = length;
        this._unionMap = Array.from({ length }, (v, i) => i);
    }

    count() {
        return this._count;
    }

    find(p) {
        while (this._unionMap[p] !== p) {
            p = this._unionMap[p];
        }
        return p;
    }

    connected(p, q) {
        return this.find[p] === this.find[q];
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        this._unionMap[pRoot] = qRoot;
        this._count--;
    }
}
```

#### 复杂度分析

最好的情况，可能只需要 1 次数组访问，但是最坏的情况（N 个触点全部处于同一个集合之中，且树的高度为 N-1），算法复杂度依旧是平方级别的。

### 加权 Quick Union

为了避免出现 Quick Union 中最坏情况，记录每一棵树的大小，并总是将较小的树连接到较大的树上。

```javascript {4,9,34-40}
class WeightedQuickUnion {
    _count = 0;
    _unionMap = [];
    _size = [];

    constructor(length) {
        this._count = length;
        this._unionMap = Array.from({ length }, (v, i) => i);
        this._size = Array.from({ length }, (v, i) => i);
    }

    count() {
        return this._count;
    }

    find(p) {
        while (this._unionMap[p] !== p) {
            p = this._unionMap[p];
        }
        return p;
    }

    connected(p, q) {
        return this.find[p] === this.find[q];
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }

        if (this._size[pRoot] < this._size[qRoot]) {
            this._unionMap[pRoot] = qRoot;
            this._size[pRoot] += this._size[qRoot];
        } else {
            this._unionMap[qRoot] = pRoot;
            this._size[qRoot] += this._size[pRoot];
        }

        this._count--;
    }
}
```

#### 复杂度分析

此改进可以保证被归并的树，节点数为 2 的 n 次幂时，高度总是 n。且当我们合并两棵包含 2 的 n 次幂个节点的树时，得到的树包含 2 的(n+1)次幂个节点，且高度为 n+1 。由此可知，加权 quick-union 算法能够保证对数级别的性能。

### 进一步改进

可以通过压缩路径，进一步改进该算法。即为`find()`方法添加一个循环，将在路径上遇到的所有节点，都链接到根节点。由此得到一棵完全扁平化的树。最简单改进方法如下：（不能保证完全扁平，但能保证高度小于 3）

```javascript {3,4}
find(p) {
    while (this._unionMap[p] !== p) {
        // path compression
        this._unionMap[p] = this._unionMap[this._unionMap[p]];
        p = this._unionMap[p];
    }
    return p;
}
```
