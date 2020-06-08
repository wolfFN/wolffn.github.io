---
title: 系统设置
---


## OS X 系统设置
1. 触摸板
   1. Trackpad: `System Preferences` -> `Trackpad`
   2. `Point & Click `-> `Tap to click`.
   3. `Point & Click`  ->  `Look up & data detectors` -> `Tap with three fingers`
   4. `System Preferences` -> `Accessibility` -> `Mouse & Trackpad` -> `Trackpad Options` -> `Enable Dragging` -> `three finger drag`
   > 10.15后，Dragging 选项在 `Accessibility` -> `Pointer Control` -> `Trackpad Options` -> `Enable Dragging` -> `three finger drag`


1. 键盘: `System Preferences` -> `Keyboard`
   1. touchbar后不再需要。把 F1-F12 改成标准功能键：` Use all F1, F2, etc. keys as standard function keys`.
   2. `Shortcuts`->`All controls`.
1. Dock: `System Preference` -> `Dock`
   1. 移除不常用的APP
   2. 移动到左侧: `Position on screen` : `left`
   3. 不重复显示已打开应用，选中如下两项：
      * `Minimize windows into application icon`      
      * Show indicators for open applications`
1. `Finder` -> `Preference`->`General`
   1. `Show these items on the desktop` -> 仅保留`External disks`
   2. `New Finder windows show` -> `user name`
   3. `Tags` 全部移除
   4. `SideBar` 仅保留必须，`workspace`文件夹可以拖动进入 SideBar
   5. 最后一个Tab，`Advanced` -> `When performing a search` : `Search the Current Folder`
1. 取消自动更新: `App Store`  -> `Preference` -> `Automatically check for updates`
1. `Dictionary -> Preferences`,  添加 `牛津英汉汉英词典` `现代汉语规范词典`.
1. 菜单上显示音量控制图标:`System Preference` -> `Sound` -> `Show volume in menu bar`
1. 菜单上显示蓝牙图标: `System Preference` -> `BlueTooth` -> `Show BlueTooth in menu bar`
1. 移除Guest用户: `System Preference` -> `Users&Groups` -> `Guest User` -> `Allow guests to log in this computer`
1. 输入法快捷键: `Keyboard` -> `Shortcuts` -> `Input Sources/Spotlight`.
1. 找回`open any where`选项.
   ```bash
   sudo spctl --master-disable
   ```
1. 打开子像素抗锯齿，解决vscode字体太细问题
   ```bash
   defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO
   ```
1. 热区锁屏:`Desktop && Screen Saver` -> `Screen Saver` -> `Hot Corners`. 右下角选择：`Put Display to Sleep`。左下角选择：`Desktop`
1. `~/.vimrc`:

   ``` bash
   syntax on
   syntax enable
   set nu
   set hlsearch
   set ruler
   set cursorline
   ```

1. [一键开启 HiDPI](https://github.com/xzhih/one-key-hidpi/blob/master/README-zh.md)
