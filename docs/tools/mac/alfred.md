---
title: Alfred
---

# Skills

## 文件查找

hotkey: **space**
Cmd + Enter，show in finder
Shift 预览

## 计算器

![calculator.png](/img/docs/alfred/calculator.png)

# Preference

## General

-   Alfred Hotkey:      `ctrl + space`
-   Where are you:     `China`

## Features

### Web Search

取消勾选不常用的搜索  
勾选 Only show enabled searches  
定制搜索：

```javascript
https://www.baidu.com/s?wd={query}
https://www.douban.com/search?q={query}
```

[一些链接](https://sspai.com/post/43973)

### Default Results

Fallbacks: Setup fallback results（窗口右下方）。
可以将 Web Search 新增自定义项目，添加到这里，并修改顺序等等。

### Web Bookmarks

勾选 Google Chrome Bookmarks  
Open Bookmarks in bookmark’s source browser

### Terminal

Application: Custom

``` applescript
on alfred_script(q)
	if application "iTerm2" is running or application "iTerm" is running then
		run script "
			on run {q}
				tell application \"iTerm\"
					activate
					try
						select first window
						set onlywindow to false
					on error
						create window with default profile
						select first window
						set onlywindow to true
					end try
					tell the first window
						if onlywindow is false then
							create tab with default profile
						end if
						tell current session to write text q
					end tell
				end tell
			end run
		" with parameters {q}
	else
		run script "
			on run {q}
				tell application \"iTerm\"
					activate
					try
						select first window
					on error
						create window with default profile
						select first window
					end try
					tell the first window
						tell current session to write text q
					end tell
				end tell
			end run
		" with parameters {q}
	end if
end alfred_script
```

## Workflow

[http://www.packal.org/](http://www.packal.org/)

百度网盘：     全部文件 > software > Mac > Alfred Workflows

#### Dash

hot key: dash  
[https://www.alfredapp.com/blog/productivity/dash-quicker-api-documentation-search/](https://www.alfredapp.com/blog/productivity/dash-quicker-api-documentation-search/)

#### Eudic

hot key:  
[http://www.packal.org/workflow/eudic-tool](http://www.packal.org/workflow/eudic-tool)
