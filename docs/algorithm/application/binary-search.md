---
title: 二分查找
---

:::tip 二分查找
思路很简单，细节是魔鬼。
:::

二分查找可以分为查找一个数，查找左边界，查找右边界三种情况。写代码很容易在区间开闭、mid +/- 1、返回值(左/右侧边界情况下)等细节出问题。

## 查找一个数

这是最简单的情况，我们采用闭区间来查找。终止条件是 找到 target 或 `low = high + 1`。  
因为采用的是闭区间，所以每次查找都不需要再考虑前一次的 mid ，所以 low / high 分别取 mid 的 前 / 后 一个元素。  
应用：[704. Binary Search](https://leetcode.com/problems/binary-search/)

```javascript
const search = (nums, target) => {
    let low = 0,
        high = nums.length - 1,
        mid;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        }
    }
    return -1;
};
```

## 查找左侧边界

查找第一个 >= target 的数。为了保持一致，我们继续采用闭区间。

-   若 nums[mid] >= target，high 取 mid 前一个元素
-   若 nums[mid] < target，low 取 mid 后一个元素
-   最后对 low 进行检查后，返回

如果是查找第一个 == target 的数，只需要改一下高亮行的判定条件。
`low > nums.length - 1 || nums[low] !== target`

应用：[35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)，可以看做，查找第一个 >= target 的数。

```javascript {15}
const search = (nums, target) => {
    let low = 0,
        high = nums.length - 1,
        mid;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] >= target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        }
    }

    if (low > nums.length - 1) {
        // 检查越界
        return -1;
    }
    return low;
};
```

## 查找右侧边界

查找最后一个 &lt;= target 的数。

-   若 nums[mid] &lt;= target，low 取 mid 后一个元素
-   若 nums[mid] > target，high 取 mid 前一个元素
-   最后对 high 进行检查后，返回

如果是查找最后一个 == target 的数，只需要改一下高亮行的判定条件。
`high < 0 || nums[high] !== target`

应用：[278. First Bad Version](https://leetcode.com/problems/first-bad-version/)

-   可以看做，查找第一个 isBadVersion，左边界问题
-   可以看做，查找最后一个 !isBadVersion，返回下一个元素。右边界问题。

```javascript {15}
const search = (nums, target) => {
    let low = 0,
        high = nums.length - 1,
        mid;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (high < 0) {
        return -1;
    }
    return high;
};
```
