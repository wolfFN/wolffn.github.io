---
title: 子字符串查找
---

## 定义

> 给定一段长度为 `N` 的文本和一个长度为 `M` 的模式(pattern)字符串，在文本中找到一个和该模式相符的子字符串。

`子字符串查找` 是字符串的一种基本操作。解决该问题的算法在扩展后，可以应用在查找子字符串，统计字符串出现次数，查找上下文等算法中。
大多数情况下，模式（M 可能为 100 或 1000）相对于文本（N 可能为 100 万或 10 亿）是很短的，所以一般会对模式进行预处理来支持在文本中的快速查找。

## 暴力算法

最符合直觉的解决方案是 BF（Brute Force）算法，从第一位开始，逐个按位匹配，不相等时，移动下一位，继续匹配。最坏情况下运行时间与 `MN` 成正比，实际运行情况一般与 `M+N` 成正比。

```javascript
const bf = function (str, pat) {
    const N = str.length;
    const M = pat.length;
    for (let i = 0; i <= N - M; i++) {
        let j;
        for (j = 0; j < M; j++) {
            if (pat[j] !== str[i + j]) {
                break;
            }
        }
        if (j === M) {
            return i;
        }
    }
    return -1;
};

// 另一种是实现，对于后续算法研究有指导意义。
// i 和 j 不匹配时，j 回退至模式的开头，i 回退至该次匹配开始位置的下次一个字符
const bf2 = function (str, pat) {
    let i, j;
    const N = str.length;
    const M = pat.length;
    for (i = 0, j = 0; i < N && j < M; i++) {
        if (str[i] === pat[j]) {
            j++;
        } else {
            i -= j;
            j = 0;
        }
    }
    if (j === M) {
        return i - M;
    }

    return -1;
};
```

## KMP（Knuth-Morris-Pratt）

KMP 算法的基本思想是当出现不匹配时，已经知道了一部分文本的内容（因为在匹配失败之前，它们已经和模式向匹配），利用这些信息，避免将指针回退到这些已知字符之前。也就是在暴力算法的第二种实现中，总是能将 j 设置为某一个值，以使 i 不会退。  
我们使用一个二维数组 `dfa[][]`（确定有限状态机）来记录匹配失败时，j 应该回退多远。对于位于位置 i 的字符 c ，dfa[c][j] 表示应该和位于 i+1 的字符比较的模式字符的位置。此时只需要将 j 设置为 dfa[c][j]，并将 i 加 1。  
由此可知，dfa[pat[j]][j]， 总是 j+1。也就是说，第 i 个字符和第 j 个字符匹配时，将 i 和 j 分别加 1，然后继续比较。

#### 构造 DFA

我们用 X 表示重启位置，例如，对于模式字符串 `ABABAC`，可知当 j=4 不匹配时，可回退到 j=2 时的状态。

-   将 dfa[][x] 复制到 dfa[][j]（对于匹配失败的情况）
-   将 dfa[pat[j]][j] 设置为 j+1（对于匹配成功的情况）
-   更新 X

以上是《算法(第 4 版)》中的做法，原算法对字符 c 的 256 种可能都进行了处理。我进行了一些改进：

-   当模式字符串中不包含当前字符 c 时，只需要在下一位继续比较，i=i+1，j=0。
-   生成 dfa 时，只需要对 `Object.values(pat)` 中的 keys 进行处理。
-   对于任意一个 key，如果出现在位置 j=0 ，那么
    -   如果 key === pat[0]，dfa[keys[i]][0] = 1
    -   否则 dfa[keys[i]][0] = 0

```javascript
const genDFA = pat => {
    const keys = Array.from(new Set(Object.values(pat)));
    const dfa = {};
    const M = pat.length;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === pat[0]) {
            dfa[keys[i]] = [1];
        } else {
            dfa[keys[i]] = [0];
        }
    }

    for (let X = 0, j = 1; j < M; j++) {
        for (let i = 0; i < keys.length; i++) {
            if (!dfa[keys[i]]) {
                dfa[keys[i]] = [];
            }
            dfa[keys[i]][j] = dfa[keys[i]][X];
        }
        dfa[pat[j]][j] = j + 1;
        X = dfa[pat[j]][X];
    }
    return dfa;
};

const kmp = (str, pat) => {
    const dfa = genDFA(pat);
    let i, j;
    const N = str.length;
    const M = pat.length;

    for (i = 0, j = 0; i < N && j < M; i++) {
        j = dfa[str[i]] ? dfa[str[i]][j] || 0 : 0;
    }
    if (j === M) {
        return i - M;
    }
    return -1;
};
```
