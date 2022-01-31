---
title: Environment
---
## Miniconda
使用 `Miniconda` 来管理本地 python 版本以及依赖包。  
在[官网](https://docs.conda.io/en/latest/miniconda.html)安装对应安装包。

``` shell
# 校验
shasum -a 256 Miniconda3-latest-MacOSX-x86_64.sh

# 安装
sh Miniconda3-latest-MacOSX-x86_64.sh

# 默认激活环境
conda config --set auto_activate_base false
# 激活环境
conda activate base
# 关闭环境
conda deactivate

# 查看环境列表
conda env list
```

## Jupyter Notebook
``` shell
conda install notebook
jupyter notebook
```