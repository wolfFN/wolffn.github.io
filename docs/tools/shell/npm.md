---
title: npm && yarn
---
### nvm 使用阿里镜像

```bash
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
```

### n 使用阿里镜像

```bash
export N_NODE_MIRROR=https://npmmirror.com/mirrors/node/
```


### npm使用[阿里源](https://npmmirror.com/)

```bash
npm i [package-name] --registry=https://registry.npmmirror.com

npm config set registry https://registry.npmmirror.com

yarn config set registry https://registry.npmmirror.com

yarn config delete registry
```

