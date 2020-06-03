---
title: react-router
---

Declarative Composabilty 声明式可组合型  
Router -> 容器，保持 location 同步  
去掉生命周期  
Router -> componentWillMount，注册监听 url，回调中 setState

```html
<link /> -> <a></a>
```

拦截默认行为，执行：`history.pushState()`  
history/createBrowserHistory，updateLocation  
前进、后退：监听 popState  
开发时，Server 段路由都需要映射到入口，以避免刷新问题。
