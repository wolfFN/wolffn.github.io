---
title: Nx
---

## 创建 monorepo
这里使用 `react` 作为预设。会默认生成一个基于 react 的 app.  
preset 还可以为 core, ts, react-native, next, nest, etc.
``` shell
npx create-nx-workspace --preset=react
```

### 添加 nest app
``` shell
# 安装 nest plugin
npm install -D @nrwl/nest

# 在当前 monorepo 中添加一个 nest app
nx g @nrwl/nest:app [my-nest-app]
```

### 添加一个 ts app
``` shell
nx generate @nrwl/node:app [my-ts-app]
```

### 删除一个 app
``` shell
nx generate remove [app-name]
# same
nx g rm [app-name]

```

### 运行
默认运行命令为 `nx serve [app-name]`。也可以 `package.json` 中添加如下内容：
``` json
"scripts": {
  ...
  "my-web:start": "nx serve my-web",
  "my-nest-app:start": "nx serve my-nest-app",
  "my-ts-app:start": "nx serve my-ts-app"
}
```