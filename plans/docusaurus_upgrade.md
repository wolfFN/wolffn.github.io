# Docusaurus 升级计划文档 (v2 to v3)

## 项目概述
本文档记录了将博客网站从 Docusaurus v2.4.3 升级到 v3.8.1 的计划，以及后续从 yarn 切换到 pnpm 的步骤。

## 当前状态
- 当前版本: Docusaurus v3.8.1
- 之前版本: Docusaurus v2.4.3
- Node.js 版本: v22.18.0 (兼容)
- React 版本: v18.2.0
- 包管理器: pnpm

## 升级策略
采用分阶段升级策略，降低风险并便于问题排查：

### 第一阶段：Docusaurus v2 升级到 v3
1. 修复 MDX 内容问题
2. 更新核心依赖项
3. 处理破坏性变更
4. 全面测试验证

### 第二阶段：包管理器从 yarn 切换到 pnpm
1. 安装 pnpm
2. 迁移依赖配置
3. 验证功能正常

## 详细升级步骤

### 第一阶段：Docusaurus v2 → v3

#### 1. 准备工作
- 运行 `npx docusaurus-mdx-checker` 识别内容问题
- 备份当前网站代码和数据

#### 2. 修复 MDX 内容（已识别的 8 个问题文件）
1. blog/2010-01-01-welcome.md - 无效的 JSX 语法
2. blog/2016-01-22-github-hexo搭建博客过程全纪录.md - 无效的 JSX 语法
3. blog/2018-03-31-效率至上-一文带你真正走进vim.md - 未闭合的大括号
4. blog/2022-10-09-introduction-to-database-design.md - 无效的 JSX 元素名称
5. docs/algorithm/application/binary-search.md - 无效的 JSX 属性
6. docs/data/db/select.md - 无效的 JSX 元素名称
7. docs/general/security.md - 无效的 JSX 元素名称 (中文逗号)
8. docs/javascript/regex.md - 缺少变量声明

#### 3. 更新依赖项
```
@docusaurus/core: ^2.4.1 → ^3.8.1
@docusaurus/preset-classic: ^2.4.1 → ^3.8.1
@docusaurus/theme-mermaid: ^2.4.1 → ^3.8.1
react: ^16.8.4 → ^18.2.0
react-dom: ^16.8.4 → ^18.2.0
```

#### 4. 处理破坏性变更
- 更新 React 导入语法 (v18 变更)
- 更新 prism-react-renderer 使用方式
- 检查并更新 admonitions 语法
- 验证自定义 CSS 兼容性

#### 5. 测试验证
- 运行开发服务器 `pnpm start`
- 测试构建过程 `pnpm build`
- 验证所有页面和功能正常
- 检查移动端显示效果

### 第二阶段：yarn → pnpm 切换

#### 1. 准备工作
- 安装 pnpm (如果尚未安装)
- 确保 Docusaurus v3 运行稳定

#### 2. 迁移步骤
- 删除 yarn.lock 文件
- 删除 node_modules 目录
- 运行 `pnpm import` 从 package.json 生成 pnpm-lock.yaml
- 更新 package.json 中的脚本（如果需要）

#### 3. 验证
- 运行 `pnpm install` 安装依赖
- 测试开发服务器 `pnpm start`
- 测试构建过程 `pnpm build`
- 验证所有功能正常

## 已完成的升级工作

### MDX 内容修复
所有 8 个识别出的 MDX 问题文件均已修复：
1. ✅ blog/2010-01-01-welcome.md - 修复了无效的 JSX 语法
2. ✅ blog/2016-01-22-github-hexo搭建博客过程全纪录.md - 修复了无效的 JSX 语法
3. ✅ blog/2018-03-31-效率至上-一文带你真正走进vim.md - 修复了未闭合的大括号
4. ✅ blog/2022-10-09-introduction-to-database-design.md - 修复了无效的 JSX 元素名称
5. ✅ docs/algorithm/application/binary-search.md - 修复了无效的 JSX 属性
6. ✅ docs/data/db/select.md - 修复了无效的 JSX 元素名称
7. ✅ docs/general/security.md - 修复了无效的 JSX 元素名称 (中文逗号)
8. ✅ docs/javascript/regex.md - 修复了缺少变量声明的问题

### 依赖项更新
所有核心依赖项已成功更新到 v3 版本：
- @docusaurus/core: ^2.4.1 → ^3.8.1
- @docusaurus/preset-classic: ^2.4.1 → ^3.8.1
- @docusaurus/theme-mermaid: ^2.4.1 → ^3.8.1
- react: ^16.8.4 → ^18.2.0
- react-dom: ^16.8.4 → ^18.2.0

### 破坏性变更处理
- ✅ 更新了 React 导入语法以兼容 v18
- ✅ 更新了 prism-react-renderer 使用方式
- ✅ 验证了自定义 CSS 兼容性

### 测试验证
- ✅ 开发服务器正常启动并运行
- ✅ 构建过程成功完成
- ✅ 所有页面和功能正常显示
- ✅ 文档和博客内容正确渲染

## 风险与缓解措施

### 风险 1：升级后内容显示异常
- 缓解措施：逐个修复 MDX 问题文件，确保每个文件都能正确编译

### 风险 2：依赖冲突
- 缓解措施：逐个更新依赖项，解决版本冲突问题

### 风险 3：自定义组件不兼容
- 缓解措施：检查所有自定义组件和页面，按需更新

