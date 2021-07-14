# diff

# diff 算法

意义：将前端性能问题，回归到算法上面的优化探索  
render()：JS Object：Virtual DOM  
复杂度：O(n_n_n) -> O(n)  
两个假设：

1. 只比较类型相同的元素
2. 将 DOM 节点按照层级分解，跨层移动很少，只比较同层元素
3. 对同层、同类型元素，用 key 进行区分，结合 lastIndex，判断是否移动。  
   不同类型节点：  
   removeNode -> add Node  
   相同类型节点  
   replaceAttribute [id …]  
   Remove Style [color…]  
   Add Style  
   节点列表  
   Key  
   不要使用 index 作为 key
