---
title: FFmpeg
---

[FFmpeg](https://ffmpeg.org/) 是一个完整的、跨平台的音频和视频录制、转换和流媒体解决方案。
> 本文中默认环境为 macOS。 其他系统可能需要替换对应编码。

## 安装
```shell
brew install ffmpeg
```

## 基本使用

最基本的格式转换，只需要指定 input, output。
``` shell
ffmpeg -i input.avi output.mp4
```

## 查看视频编码
``` shell
# 视频编码
ffprobe -v error -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 input.mp4

# 音频编码
ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of default=nokey=1:noprint_wrappers=1 input.mp4

# 全部信息
ffprobe -hide_banner -stats -i input.mp4
```



## 将视频转化为 h265 编码
`h265` 编码能够大大减小文件体积。
``` shell
ffmpeg -i input.mp4 -c:v libx265 -tag:v hvc1 output-h265.mp4
```
其中
* `-c:v libx265` 指定视频编码为 `libx265`
* `-tag:v hvc1` 给视频加入 编码tag，便于 OS 识别。

在 macOS 中，如果没有对应标签，系统将无法预览视频。如下命令，可以快速给视频添加tag：
```shell
ffmpeg -i input.mp4 -vcodec copy -acodec copy -tag:v hvc1 output.mp4
```
其中，`-vcodec copy` 和 `-acodec copy` 分别表示，复制视频、音频编码。这样能够获得更快的视频转换速度。


## 时间
截取从 66s 开始，一共30s的视频。如果不指定 `-t`，默认截取到视频结束。
```shell
ffmpeg -ss 66 -t 30 -i input.mp4 -c:v libx265 -tag:v hvc1 output.mp4
```
剪掉视频的前 30s, 剩余部分编码保持不变。
```shell
ffmpeg -ss 30 -i hmn-586-c.mp4 -vcodec copy -acodec copy output.mp4
```
## 解压缩视频
在对视频进行处理时，有时候会遇到音频丢帧的的情况。我个人猜测是由于帧间压缩引起的。下面的命令将视频、音频编码皆转化为 raw 格式，还原帧间压缩，能够预防下一步处理时出错。  
其中，`-y` 表示对后续弹出提示一律默认 `yes`。比如是否覆盖现有文件。
```shell
ffmpeg -i input.mp4 -acodec pcm_s16le -vcodec rawvideo -y output.avi
```

## 调整分辨率
`-s` 后接参数 `width`x`height`
``` shell
ffmpeg  -i input.mp4 -s 480x320 output.mp4
```
## 视频处理
`-filter:v` 为视频过滤器，可以对视频进行进一步的处理。`-vf` 为其缩写。  
以下命令为将视频转换为 240*320 分辨率。
```shell
ffmpeg -i input.mp4 -vf scale='240:320':force_original_aspect_ratio=increase,crop='240:320' output.mp4
```

`force_original_aspect_ratio`：保持视频宽高比的方法，可以使用如下值：
* disable——不保持宽高比；
* decrease——需要的时候降低宽或者高；
* increase——需要的时候提高宽或者高。





## 使用显卡处理
使用 GPU 硬件加速后基本不会有 CPU 占用, 速度会很快，但是压缩率比较差。
```shell
ffmpeg -hwaccel videotoolbox -i input.mp4 -c:v hevc_videotoolbox -b:v 6000K  -tag:v hvc1 output.mp4
```
其中  
* `-hwaccel videotoolbox` 表示使用 macOS 的 videotoolbox 硬件编码器
* `hevc_videotoolbox` 表示使用 `hevc` (h265) 编码器,  `h264` 为 `h264_videotoolbox`
* `-b:v` 指定目标视频码率, 可以使用类似 13M, 6000K 之类的值。 使用 GPU 进行编码貌似会令 -crf 参数无效, 如果不指定码率的话, 视频画质将会惨不忍睹.
