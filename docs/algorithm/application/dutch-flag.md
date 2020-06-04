---
title: 荷兰国旗问题
---

[荷兰国旗问题](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)  可以看做是快排的变种，伪代码如下：

```basic
procedure three-way-partition(A : array of values, mid : value):
    i ← 0
    j ← 0
    k ← size of A

    while j < k:
        if A[j] < mid:
            swap A[i] and A[j]
            i ← i + 1
            j ← j + 1
        else if A[j] > mid:
            k ← k - 1
            swap A[j] and A[k]
        else:
            j ← j + 1
```

### 应用

[leetcode 75 Sort Colors](https://leetcode.com/problems/sort-colors/submissions/)

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0,
        j = 0,
        k = nums.length - 1;
    while (j <= k) {
        if (nums[j] < 1) {
            swap(nums, i, j);
            i++;
            j++;
        } else if (nums[j] > 1) {
            swap(nums, j, k);
            k--;
        } else {
            j++;
        }
    }
    return nums;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
```
