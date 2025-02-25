---
title: 应用软件
---

## 基础软件
1. [搜狗输入法](https://pinyin.sogou.com/mac/)
1. [Logitech Options](https://www.logitech.com.cn/zh-cn/product/options)
1. [Edge](https://www.microsoft.com/zh-cn/edge?form=MA13FJ)
1. [Chrome](https://www.google.com/intl/zh-CN/chrome/)

## 效率工具
1. [Paste](https://pasteapp.io/)：剪切板增强工具。
1. [Rectangle](https://rectangleapp.com/)：窗口管理， 多/大显示器尤其实用。
1. [Hidden Bar](https://apps.apple.com/cn/app/hidden-bar/id1452453066?mt=12)：隐藏状态栏图标。
   * [Ice](https://github.com/jordanbaird/Ice), 刘海屏选择，展开菜单放在状态栏下方，避免被刘海屏遮住。
1. [Raycast](https://www.raycast.com/): 快捷启动工具。
1. [Snipaste](https://zh.snipaste.com/)：截图工具。
   * [CleanShot](https://cleanshot.com/): 功能更强大，可以买断付费。


## 开发工具
1. [Dash](https://kapeli.com/dash)：Mac专属文档查询工具。
1. 数据库：我个人开发使用`MySQL`以及`Sequel Pro`， 安装配置以及使用指南请参考[这篇文章](http://www.jianshu.com/p/2fab19d96eb8)。
1. [Charles](http://www.jianshu.com/p/8cef3406129c)：抓包/Mock工具，具体配置[点击查看](https://www.jianshu.com/p/8cef3406129c)。
1. [OrbStack](https://orbstack.dev/): Docker 桌面客户端。
1. [Pearcleaner](https://github.com/alienator88/Pearcleaner): 系统清理工具，CleanMyMac 开源平替。优势是对开发环境清理的支持更好，分条目列出各个环境及其目录。

## 常用软件
1. [Obsidian](https://obsidian.md/)：笔记软件。
1. [欧路词典](https://www.eudic.net/v4/en/app/eudic)。
1. [The Unarchiver](https://apps.apple.com/cn/app/the-unarchiver/id425424353?l=en&mt=12)：解压缩
1. [LocalSend](https://localsend.org/zh-CN): 局域网文件传输工具。
1. [TinkerTool](https://www.bresink.com/osx/TinkerTool.html)：进阶系统配置工具。最有用的一个配置是 Dock 快速显示、隐藏。
1. [MonitorControl](https://github.com/MonitorControl/MonitorControl): 键盘控制显示器亮度、音量。

## 其他
1. [IINA](https://iina.io/)：多媒体播放，mpv内核，开源软件，快速迭代中，强推。\
1. [ImageOptim](https://imageoptim.com/mac)，图片压缩，有点是操作简单方便，缺点是直接在文件上修改。
1. [Spark](https://sparkmailapp.com/zh)：邮件客户端。
1. [PDF Expert](https://pdfexpert.com/zh)。
1. [Jane Reader](https://janereader.com/)：极致的 epub 阅读体验，支持各种自定义。
1. [ClearView](https://itunes.apple.com/us/app/clearview/id557090104?mt=12)：阅读工具，略贵，但完美支持mobi，epub，pdf。
1. [NTFS For Mac](https://www.ntfsformac.cn/)：读写 NTFS 文件格式的存储设备。
1. [Noizio](http://www.noiz.io/)：白噪音软件，可以组合多种常见白噪音，强推。
1. [Take a break](https://apps.apple.com/us/app/take-a-break-timer-reminder/id1457158844?mt=12)：每20分钟站起来走走
1. [Rescue Time](https://www.rescuetime.com/)：日常行为管理，可以分析出日常使用电脑时间分配.细化到软件/网站层面，对于提升工作效率还是很有意义的。
1. [HandShaker](http://www.smartisan.com/apps/handshaker)：情怀工匠精神锤出品，mac上管理安卓手机文件一把好手.  
   * 更新：推荐使用上文提到过的 LocalSend
   * 锤子很久不更新了，可改用[Airdroid](https://www.airdroid.com/zh-cn/) 以及 [Android File Transfer](https://www.android.com/filetransfer/)
1. Welly: 论坛灌水， 北邮人 && 水木网友你们懂的。
   ```bash
   brew cask install welly
   ```


## 美化
这类软件属于没有无所谓，有了以后心情会好一些，所以推荐可以尝试下。
1. [Irvue](https://itunes.apple.com/cn/app/irvue-unsplash-wallpapers/id1039633667?mt=12)：自动获取 Unsplash 上的高质量无版权图片作为壁纸，并提供了其它一系列相关的功能，如对图片点赞、下载、加入黑名单等。  
   * 更新：升级10.14后，改用macOS自带的动态壁纸了。
1. [Wallpaper Wizard 2](https://itunes.apple.com/cn/app/wallpaper-wizard-2/id1266674560?mt=12&ign-mpt=uo%3D4)：也是壁纸应用，特点是提供一个很大的壁纸库用以挑选，之后更换自己事先挑选好的壁纸。
1. [Fliqlo](http://fliqlo.com/#about-screensaver)：屏保，极简时钟。
1. [rasmusnielsen](http://www.rasmusnielsen.dk/applewatch/)：屏保，拟物表盘。



## 其他日常使用技巧
1. 微信免登陆
   ```bash
   git clone https://github.com/Sunnyyoung/WeChatTweak-macOS.git
   cd WeChatTweak-macOS
   sudo make install
   ```
   重启微信后，修改Preference。
   ![wechat-config.png](/img/blog/Mac/wechat-config.png)

2. 清除软件卸载残留
   ``` bash
   # Mac完全卸载软件
    ~/Library/Application Support/(应用程序名称)
    ~/Library/Preferences/(应用程序名称)
    ~/Library/Caches/(应用程序名称)
   ```
3. 简单翻墙:下载可用hosts 替换`/etc/hosts`
