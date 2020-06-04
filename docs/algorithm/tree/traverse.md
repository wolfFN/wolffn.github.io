---
title: 遍历
---

树的遍历主要分前、中、后序，每种遍历都可以分别用递归（recursion）和循环（iteration）来实现。

## Pre-order
root -> left -> right  
[Leetcode 144](https://leetcode.com/problems/binary-tree-preorder-traversal/)

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursion
function preorderTraversal(root) {
    const result = [];
    pre(root, result);
    return result;
};

function pre(node, result) {
    if (!node) {
        return;
    }
    result.push(node.val);
    pre(node.left, result);
    pre(node.right, result);
}

// Iteration
function preorderTraversal(root) {
    const stack = [root];
    const result = [];
    let node;
    while (node = stack.pop()) {
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    
    return result;
};

```


## In-order
left -> root -> right  
[Leetcode 94](https://leetcode.com/problems/binary-tree-inorder-traversal/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursion
var inorderTraversal = function(root) {
    const result = [];
    inoder(root, result);
    return result;
};

const inoder = function(node, result) {
    if (!node) {
        return;
    }
    inoder(node.left, result);
    result.push(node.val);
    inoder(node.right, result);
};


// Iteration
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    while (root || stack.length()) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }

    return result;
};


```

## Post-order
left -> right -> root  
[Leetcode 145](https://leetcode.com/problems/binary-tree-postorder-traversal/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


// Recursion
var postorderTraversal = function(root) {
    const result = [];
    postorder(root, result);
    return result;
};

const postorder = function(node, result) {
    if (!node) {
        return;
    }
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.val);
}

// Iteration
var postorderTraversal = function(root) {
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();

        if (!node) {
            continue;
        }

        result.unshift(node.val);
        stack.push(node.left);
        stack.push(node.right);
    }
    return result;
};

```

