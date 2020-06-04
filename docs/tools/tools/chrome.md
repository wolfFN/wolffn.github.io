---
title: Chrome
---

## 显示跨域Cookie
chrome，network面板中有时会见到以下提示，尤其常见于跨域请求的时候。  
`provisional headers are shown`   
带来的坏处是，我们在chrome中，无法看到header里面携带的信息，尤其是cookie。  
原因是chrome 启用了一项称为 `site isolation` 的技术。

针对 chrome v72 以上的版本的解决办法：  
打开 `chrome://flags/` 然后禁用如下三个选项：

- Disable site isolation
- Enable network service
- Runs network service in-process


![image.png](/img/docs/chrome/site-isolation.png)
