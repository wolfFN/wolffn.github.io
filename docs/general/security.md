---
title: 安全
---

## sql 注入

校验输入，不拼接 SQL  
不用 root，加密/hash

## XSS

恶意 html/js，获取 cookie  
`<>;` 做过滤，encode  
cookie 不包含隐私  
cookie、ip 绑定  
Set-Cookie，HttpOnly

## CSRF
