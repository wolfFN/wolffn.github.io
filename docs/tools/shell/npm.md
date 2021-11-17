---
title: npm && yarn
---
### nvm 使用阿里镜像

```bash
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
```

### npm使用[阿里源](https://npm.taobao.org/)

```bash
npm i [package-name] --registry=https://registry.npmmirror.com

npm config set registry https://registry.npmmirror.com

yarn config set registry https://registry.npmmirror.com

yarn config delete registry
```

