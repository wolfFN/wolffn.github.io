---
title: Proxy
---

## Terminal
Clash
``` shell
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

Shadowsocks
``` shell
export https_proxy=http://127.0.0.1:1087 http_proxy=http://127.0.0.1:1087
```

查看代理
``` shell
echo $http_proxy $https_proxy $all_proxy
```

取消代理
``` shell
unset http_proxy https_proxy all_proxy
```

## Git
Clash
``` shell
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890
```

配置 ssh 使用代理, `vi ~/.gitconfig`  
```
Host github.com
ProxyCommand connect -H 127.0.0.1:7890 %h %p
HostName %h
Port 22
User git
IdentityFile  ~/.ssh/id_rsa 
IdentitiesOnly yes
```

Shadowsocks
``` shell
git config --global http.proxy http://127.0.0.1:1087 
git config --global https.proxy https://127.0.0.1:1087
```

查看代理
``` shell
git config --global  --get http.proxy
git config --global  --get https.proxy

vi ~/.gitrc
```

取消代理
``` shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## Yarn
Clash
``` shell
yarn config set proxy http://127.0.0.1:7890
yarn config set https-proxy http://127.0.0.1:7890
```

Shadowsocks
``` shell
yarn config set proxy http://127.0.0.1:1087
yarn config set https-proxy http://127.0.0.1:1087
```

查看代理
``` shell
yarn config list

vi ~/.yarnrc
```

取消代理
``` shell
yarn config delete proxy
yarn config delete https-proxy
```

## NPM
Clash
``` shell
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

Shadowsocks
``` shell
npm config set proxy http://127.0.0.1:1087
npm config set https-proxy http://127.0.0.1:1087
```

查看代理
``` shell
npm config list

vi ~/.npmrc
```

取消代理
``` shell
npm config delete proxy
npm config delete https-proxy
```
