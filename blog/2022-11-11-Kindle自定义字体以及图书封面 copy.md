---
title: Kindle自定义字体、封面，导出笔记
tags: [reading]
---

着实不懂 Amazon 为什么要把 kindle 服务撤出中国。虽然 kindle oasis 已经有点老，国内电纸书也有百花齐放的架势，但最纯粹的阅读体验(握持、屏幕)，还无能出其右者。  
本文主要记录如何自定义字体以及封面，以应导出笔记。以应对 kindle 服务撤出后的深度阅读诉求。
<!--truncate-->

## 自定义字体
Kindle 支持 OpenType（OTF）和 TrueType（TTF）格式的字体，并且支持字体集，例如，常规、斜体、粗体，粗斜体等每种样式各为一个文件。  
只需将自己喜欢的字体放入 Kindle 根目录下 `fonts` 文件夹中即可。  
![fonts-folder.png](/img/blog/kindle/fonts-folder.png)  

此外，有些 mobi 格式不支持自定义字体，可以转换为 azw3 格式。或者在 epub 转换为 mobi 格式时，移除样式。

![trans-to-mobi.png](/img/blog/kindle/trans-to-mobi.png)  


## 自定义封面
当 Kindle 成功为电子书从亚马逊服务器抓取封面图片后，会存放到 Kindle 根目录下的 system/thumbnails 文件夹中，封面图片有着类似下面这样的文件名：
```
thumbnail_B00A72WGE4_EBOK_portrait.jpg
```
在 mac 下，默认不显示隐藏文件。使用快捷键 `Cmd + Shift + .` 即可切换。  
只需将图片替换即可。
![cover.png](/img/blog/kindle/cover.png)  

## 笔记
我主要用两个网站
1. [Clippings](https://www.clippings.io/zh/)。以前一直用这个网站。需要注册账号。好处是可以把笔记存在云端。缺点是现在导出加了限制，会限制字数。
2. [漫步 Kindle](https://www.wanderplan.net/kindle)。现在主要用这个网站。无需注册账号，自动合并笔记，很强大。到处笔记后自己存储即可。
