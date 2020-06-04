---
title: 开发环境配置
---

[Mac 开发环境配置](https://wolffn.github.io/blog/2017/11/15/Mac%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/)  

### 卸载剩余

```bash
~/Library/Application Support/(应用程序名称)
~/Library/Preferences/(应用程序名称)
~/Library/Caches/(应用程序名称)
```

### 快捷键

`Control + F2` 选择左上角菜单栏
`Control + F3` 选择 dock 栏
`Cmd + Shift + G`   前往路径
`Cmd + del`     删除文件
`Cmd + alt + Esc`   任务管理器
`Cmd + alt + V`     剪切后粘贴（notes 中格式粘贴，需配合 `Cmd + alt + c`）
`Cmd + alt + D`     隐藏/显示 Docker
`Cmd + alt + shift + 4`     截屏

### 键盘、触摸板失灵

重启后按 Cmd + R
然后使用内置键盘，触摸板。如果此时还无效，那么硬件问题。

### CheckSum

```bash
// 关闭
defaults write com.apple.frameworks.diskimages skip-verify -bool YES
// 开启
defaults write com.apple.frameworks.diskimages skip-verify -bool NO
```

### killall Dock

```bash
sudo lsof -n -P | grep LISTEN/8080
ps aux
```

### Iterm

-   ⌘ + 数字: 切换标签页，⌘ + 方向键 按方向切换标签页
-   ⌘ + enter: 切换全屏
-   ⌘ + d: 垂直分屏
-   ⌘ + shift + d: 水平分屏。
-   ⌘ + ] 和 ⌘ + [ 在最近使用的分屏直接切换。
-   ⌘ + opt + 方向键   切换到指定位置的分屏。
-   ⌘ + t :新的标签页
-   ⌘ + r:清屏

### Paste 使用技巧

##### 搜索

`Cmd + f`   或者直接输入
输入 application name，content type，或结合二者

##### "Paste as Plain Text"

选中待粘贴项目后，Shift + Enter

##### 永久存放

拖动至特定 Pinboard
`Cmd + [,]`  Pinboard 之间移动

##### Direct Paste

设置中开启
双击
Cmd + 1-9
