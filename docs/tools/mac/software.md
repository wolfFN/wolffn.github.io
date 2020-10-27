---
title: 其他软件
---

## 开发工具
1. [Dash](https://kapeli.com/dash): Mac专属文档查询工具.

1. 数据库：我个人开发使用`MySQL`以及`Sequel Pro`, 安装配置以及使用指南请参考[这篇文章](http://www.jianshu.com/p/2fab19d96eb8)。

1. [Charles](http://www.jianshu.com/p/8cef3406129c): 抓包/Mock工具，具体配置[点击查看](https://www.jianshu.com/p/8cef3406129c)。

## 常用软件
1. 浏览器: 日常上网灌水用Safari,占用内存小&省电; 干活用[chrome](https://www.google.com/chrome/index.html).

1. [Rescue Time](https://www.rescuetime.com/): 日常行为管理,可以分析出日常使用电脑时间分配.细化到软件/网站层面,对于提升工作效率还是很有意义的.

1. [sizeup](http://www.irradiatedsoftware.com/sizeup/): 窗口管理, 多/大显示器尤其实用.  
   * 备选：Divvy

1. [IINA](https://lhc70000.github.io/iina/zh-cn/) : 多媒体播放,mpv内核,开源软件,快速迭代中,强推.
1. [Transmission](https://transmissionbt.com/download/): BT下载.
1. [The Unarchiver](https://apps.apple.com/cn/app/the-unarchiver/id425424353?l=en&mt=12): 解压缩
1. [HandShaker](http://www.smartisan.com/apps/handshaker) : 情怀工匠精神锤出品,mac上管理安卓手机文件一把好手.  

   * 更新：锤子很久不更新了，现已改用[Airdroid](https://www.airdroid.com/zh-cn/)
1. [Typora](https://www.typora.io/) : MarkDown写作.Mac上面写作markdown的工具很多,此前一直使用网易云笔记的Markdown功能.客观说做的不错,加上同步很方便.这里郑重推荐Typora,win/Linux/Mac三平台通用,当前处于beta阶段,免费.
1. Welly: 论坛灌水, 北邮人 && 水木网友你们懂的。
   ```bash
   brew cask install welly
   ```
1. 阅读: [ClearView](https://itunes.apple.com/us/app/clearview/id557090104?mt=12)，略贵，但完美支持mobi,epub,pdf。
1. [Noizio](http://www.noiz.io/): 白噪音软件,可以组合多种常见白噪音,强推.
1. [Copia](http://www.dollaropath.com/copia/): 剪切板增强工具.  

   * 不知道为什么这么好用的工具竟然从app store删除了。忍痛买了Paste。

## 美化
这类软件属于没有无所谓，有了以后心情会好一些，所以推荐可以尝试下。
1. [Irvue](https://itunes.apple.com/cn/app/irvue-unsplash-wallpapers/id1039633667?mt=12): 自动获取 Unsplash 上的高质量无版权图片作为壁纸，并提供了其它一系列相关的功能，如对图片点赞、下载、加入黑名单等。  
   * 更新：升级10.14后，改用macOS自带的动态壁纸了。
1. [Wallpaper Wizard 2](https://itunes.apple.com/cn/app/wallpaper-wizard-2/id1266674560?mt=12&ign-mpt=uo%3D4): 也是壁纸应用，特点是提供一个很大的壁纸库用以挑选，之后更换自己事先挑选好的壁纸。
1. [Fliqlo](http://fliqlo.com/#about-screensaver): 屏保，极简时钟。
1. [rasmusnielsen](http://www.rasmusnielsen.dk/applewatch/): 屏保，拟物表盘。



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
