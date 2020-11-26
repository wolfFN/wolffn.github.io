---
title: Git
---

Git 使用 SHA-1 算法计算数据的校验和，通过对文件的内容或目录的结构计算出一个 SHA-1 哈希值，作为指纹字符串。

## SSH KEY

生成 ssh key, 并上传至 Github/ 其他托管平台  
生成 ssh key: (此处以 github 为例,其他平台类似)

```bash
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
# Generating public/private rsa key pair...
# 三次回车即可生成 ssh key
```

查看你的 public key，并把他添加到 Github

```bash
cat ~/.ssh/id_rsa.pub
# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
```

校验登录:

```bash
ssh -T git@github.com
# Attempts to ssh to GitHub
# 输入 yes
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

## 配置用户名密码
```
// 为单个项目配置
git config user.email "wolffn@xxx.com"
git config user.name wolfFN

// 全局配置
git config --global user.email "wolffn@xxx.com"
git config --global user.name "theox"

```

## Usage:

```bash
git commit --amend # 追加commit
git commit -a # 自动commit tracked的文件
git ci # 缩写

# fetch 命令只是将远端的数据拉到本地仓库，并不自动合并到当前工作分支
git fetch [remote-name]
git mergetool #调用图形化合并工具。

git remote show [remote-name] # 查看某个远程仓库的详细信息
git remote show origin # 显示远程信息
git remote -v	# 列出remote
git remote set-url	[url]	# update origin

git merge --squash [branch-name] # 合并为一次commit
git branch -D [branch-name] # 删除本地分支

git push origin :[branch-name] # 删除远程分支
git remote prune origin # 删除远程分支残留 refs/remotes/origin/[branch-name]



git diff --cached/staged # 查看已暂存的文件改动
git mv [old] [new] # 移动文件
git rm [file-name] # 删除文件
git rm --cached [file-name] # 不再追踪文件
```

### stash

```bash
git stash save [message]
git stash save -u # include untracked files

git stash apply
git stash apply stash@{1}
git stash pop # 应用后删除该stash

git stash drop stash@{1} # 删除指定
git stash clear # 清除所有
```

### 撤销、修改 commit

```bash
# 撤销某一次提交，并生成新的提交历史。commit-hash是希望撤销的commit
git revert [commit-hash]
git revert HEAD
git revert HEAD~[n]
# 撤销连续的n次commit
git revert -n [older-commit-hash]^..[newer-commit-hash]

# 撤销某一次提交，移除对应提交历史。commit-hash对应希望撤销的前一次commit
git reset [commit-hash]
git reset HEAD~[n]
# 取消暂存
git reset HEAD [file-name]
```

```bash
# 查看某次commit之后的几次commit,commit-hash对应前一个commit节点
git rebase -i [commit-hash]
# 同样效果，查看最近n次提交
git rebase -i head～[n]
```

1. pick：简写 p，启用该 commit；
1. reword：简写 r，使用该 commit，但是修改提交信息，修改后可以继续编辑后面的提交信息；
1. edit：简写 e，使用 commit，停止合并该 commit；
1. squash：简写 s，使用该 commit，并将该 commit 并入前一 commit；
1. drop：简写 d，移除该 commit；

由此可见，只需将希望合并的 commit 前面的`pick`修改为`s`，即可合并提交。

### Init

> Create a new repository on the command line

```bash
touch README.md
git init
git add README.md
git commit -m "first commit"
```

> Push an existing repository from the command line

```bash
git remote add origin https://github.com/wolfFN/hehe.git
git push -u origin master
```

## Other commands

git branch －no-merged    查看尚未合并的分支

git branch －v      查看各个分支最后一个提交对象的信息。

git branch －-merged      查看已经合并的分支。

git branch [branch-name]      创建一个新的分支

git checkout [branch-name]      切换到其他分支

git checkout -b [branch-name]       创建,  切换到一个新的分支

git merge [branch-name]       合并（如果无其他改动，直接移动 head 指针，也称快进）

git merge master      主干有变动，将其合并至当前分支

git status      查看合并时产生的冲突

手动修改完冲突后， git add filename      标记为已解决状态。 最后 git commit 提交修改。

git push 远程仓库名 分支名<br />将本地分支推送至远程服务器。

git rebase master 衍合<br />先在自己的一个分支里进行开发，当准备向主项目提交补丁的时候，根据最新的 origin/master  进行一次衍合操作然后再提交，这样维护者就不需要做任何整合工作

git rebase [主分支][特性分支]    命令会先取出特性分支  server，然后在主分支  master  上重演

git rebase --onto master server client<br />“取出 client 分支，找出 client 分支和 server 分支的共同祖先之后的变化，然后把它们在 master 上重演一遍”。

一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行衍合操作。
