---
title: wsl
---

## 磁盘空间
不同于 WSL1，WSL2 本质上是虚拟机，所以 Windows 会自动创建 vhdx 后缀的虚拟磁盘文件作为存储。这个 vhdx 后缀的虚拟磁盘文件特点是可以自动扩容，但是一般不会自动缩容。一旦有很多文件把它“撑大”，即使把这些文件删除它也不会自动“缩小”。所以删除文件后还需要我们手动进行压缩才能释放磁盘空间。  
操作步骤：  
1. 定位 ext4.vhdx 文件。默认位置如下，替换 user name 以及版本即可  
`C:\Users\[user name]\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04LTS_79rhkp1fndgsc\LocalState\ext4.vhdx`
2. 关机。  
Cmd 中执行 `wsl --shutdown`
3. 调用 diskpart，并在其中执行对应命令：
```bash
# 运行管理计算机的驱动器的 DiskPart 命令
diskpart
# 选择虚拟磁盘文件
select vdisk file="[file path]"
# 压缩文件
compact vdisk
# 压缩完毕后卸载磁盘
detach vdisk
```
参考：[解决删除文件后 WSL2 磁盘空间不释放的问题
](https://zhuanlan.zhihu.com/p/521747491)


## wsl proxy
当前最佳实践是，wsl2 采用网络镜像模式，复用宿主机网络。  
WSL 全局设置位于 `C:\Users\<UserName>\.wslconfig`, [参考](https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config#wslconfig)。具体步骤如下：
1. 编辑或新建 .wslconfig, 添加如下内容
  ```
  [experimental]
  autoMemoryReclaim=gradual  
  networkingMode=mirrored
  dnsTunneling=true
  firewall=true
  autoProxy=true
  ```
1. 命令行(管理员模式)关闭 wsl: 
  ```shell
  wsl --shutdown
  ```
1. 打开 wsl，测试代理是否 ok。
  ```shell
  curl -vv www.google.com
  ```

### Github
1. 对于 github，可编辑/新建如下文件 `~/.ssh/config`，配置如下：
  ```
  Host github.com
  ProxyCommand connect -H 127.0.0.1:7890 %h %p
  HostName %h
  Port 22
  User git
  IdentityFile  ~/.ssh/id_rsa 
  IdentitiesOnly yes
  ```
1. 如果没有 connect 命令，先安装：
  ```shell
  sudo apt-get install connect-proxy
  ```
1. 校验。
  ```shell
  ssh -T git@github.com
  ```



### Archive
> 早期方法，现已废弃  

在 wsl 环境中，配置使用宿主机(windows)代理，首先，要在windows防火墙中创建入站、进站规则，将宿主机代理软件端口(clash:7890)开放。  
之后，在 ubuntu 中，可以通过如下命令获取 ip

```shell
cat /etc/resolv.conf

# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:
# [network]
# generateResolvConf = false
nameserver 172.23.16.1
```

于是，我们可以将如下脚本添加到 `~/.zshrc`(或者`~/.bashrc`) 中，每次启动自动设置代理。
```shell
export windows_host=`cat /etc/resolv.conf|grep nameserver|awk '{print $2}'`
export ALL_PROXY=http://$windows_host:7890
export HTTP_PROXY=$ALL_PROXY
export http_proxy=$ALL_PROXY
export HTTPS_PROXY=$ALL_PROXY
export https_proxy=$ALL_PROXY

if [ "`git config --global --get proxy.https`" != "http://$windows_host:7890" ]; then
        git config --global proxy.https http://$windows_host:7890
fi
```

可通过如下方式校验：
```shell
curl -vv www.google.com
```
