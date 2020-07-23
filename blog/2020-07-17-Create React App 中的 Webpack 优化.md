---
title: Create React App 中的 Webpack 优化
tags: [webpack]
---

Create React App 创建的工程，一段时间后，打包速度越来越慢。我对速度和打包体积做了初步的优化，本文记录大概过程。

<!--truncate-->

## 优化方式

比较主流的优化方式有如下几种：

1. `react-scripts` 提供了 `eject` 的方式，将其托管的 `webpack` 配置全部弹出。
    - 优点：完全掌控配置。
    - 缺点：代码包复杂度增加，而且是与业务逻辑无关的配置。
2. 自己维护一个包，替换 `react-scripts`
    - 优点：完全掌控配置，不会给业务代码包增加复杂度，且可以跨项目使用
    - 缺点：维护额外的包，发布等工作量
3. `react-app-rewired` + `customize-cra`，项目中替换部分配置
    - 优点：不需要额外围护代码包，与此同时不给业务代码包带来过多的额外内容。
    - 缺点：隔靴搔痒的感觉。一些深度侵入的配置改动会比较麻烦。

综上，方案 2 应该是最佳选择。考虑到优化带来的效果不明，以及 2 的前期额外投入，我们暂时先采取方案 3，待效果明显或遇到瓶颈后，切换方案 2 。

## rewired

安装依赖

```shell
npm i -D react-app-rewired customize-cra
```

根目录创建文件 `config-overrides.js`

```javascript
/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
};
```

修改 `package.json`

```json
/* package.json */
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```

## 测量手段

#### 打包体积

最终校验手段，可以看每次打包后的输出，也可以在 Devtool -> Networks 中看包大小。

优化过程中，我们引入 `BundleAnalyzerPlugin` 来查看 bundle 的组成。

```shell
npm i -D webpack-bundle-analyzer
```

```javascript
const { override, addWebpackPlugin } = require('customize-cra');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = override(addWebpackPlugin(new BundleAnalyzerPlugin()));
```

加入插件后，打包结束后会在 `127.0.0.0:8888` 通过可视化手段展示打包组成图。

#### 速度

通过 `time` 命令可以直观查看。

```shell
time npm run build
```

优化过程中，为了方便查看各个步骤所用时间，我们引入 `SpeedMeasurePlugin`。

```shell
npm i -D speed-measure-webpack-plugin
```

```javascript
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const useSMP = config => new SpeedMeasurePlugin().wrap(config);

module.exports = override(useSMP);
```

## SourceMap

[react-scripts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js) 中关于 `devtool` 的配置如下：

```javascript
devtool: isEnvProduction
  ? shouldUseSourceMap
    ? 'source-map'
    : false
  : isEnvDevelopment && 'cheap-module-source-map',
```

显然，在 prod 环境使用 source-map 意义不大。所以此处我们对该配置进行覆盖。

```javascript
const rewiredMap = config => {
    config.devtool =
        config.mode === 'development' ? 'cheap-module-source-map' : false;

    // only for debug in test env
    // config.devtool = 'source-map';
    return config;
};

module.exports = override(rewiredMap);
```

此外，如果未在项目中对 webpack 进行 override，通过对环境变量赋值也可以达到该目的。只需要修改 `package.json`。

```json
"build": "GENERATE_SOURCEMAP=false react-scripts build",
```

## HappyPack

[Happy Pack](https://github.com/amireh/happypack) 通过将打包过程并行，进行优化。由于该配置对已有配置侵入性比较强，我选择了`react-app-rewire-happy-pack` 来处理这一过程

```shell
npm i -D react-app-rewire-happy-pack
```

```javascript
const rewireHappyPackLoader = require('react-app-rewire-happy-pack');
const useHappyPack = config => rewireHappyPackLoader(config);

module.exports = override(useHappyPack);
```

遗憾的是，该步骤并未能压缩打包时间，反而加长了打包时间。初步推测可能 webpack 自己对该部分进行了优化，而该 package 已经很久没有新的发布，可能未适配 webpack 的更新。

社区还有其他一些并行打包方案，后续可以研究下。

## Externals

该配置主要是抽出项目中的依赖，将其在 html 中以 link 或 script 的形式引入。既降低了打包体积，又减少了打包时间。

首先找到这些依赖的打包版本。可以查看其官网，也可以直接去 cdn 网战找，推荐 [bootcdn](https://www.bootcdn.cn/)。

然后下载这些打包文件，发布到 cdn。如果个人项目，可以直接使用 bootcdn 的版本。公司项目，还是不要偷懒，发布到公司的 cdn 或者其他付费 cdn，避免依赖引起的可用性问题。

接下来，在 `public/index.html` 中添加链接。

```html
<link
    href="//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd.min.css"
    rel="stylesheet"
/>

<script src="//cdn.bootcdn.net/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>

<script src="//cdn.bootcdn.net/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>

<script src="//cdn.bootcdn.net/ajax/libs/redux/4.0.5/redux.min.js"></script>

<script src="//cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>

<script src="//cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
<script src="//cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/locale/zh-cn.min.js"></script>

<script src="//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd-with-locales.min.js"></script>
```

最后，override config

```javascript
const useExternal = config => {
    config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
        redux: 'Redux',
        lodash: '_',
        moment: 'moment',
        'moment/locale/zh-cn': 'moment.locale',
        antd: 'antd',
    };

    return config;
};

module.exports = override(useExternal);
```

`antd` 里面国际化相关的代码，还要做一点改动

```javascript
// import zhCN from 'antd/es/locale/zh_CN';
import { locales } from 'antd';

ReactDOM.render(
    <ConfigProvider locale={locales.zh_CN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root'),
);
```

经过这些操作后，打包时间大幅减少，bundle analyzer 中依赖所占比例也降低了很多。

该过程中，我发现了社区有一个 package，可以通过配置的方式增加 external。这样写法更优雅一些，同时打包时间还减少了。。。我实在是不知道为什么。

```shell
npm i -D html-webpack-externals-plugin
```

```javascript
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const externals = [
    {
        module: 'antd',
        entry:
            '//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd-with-locales.min.js',
        global: 'antd',
    },
    {
        module: 'antd-css',
        entry: '//cdn.bootcdn.net/ajax/libs/antd/4.3.4/antd.min.css',
    },
];

module.exports = override(
    addWebpackPlugin(new HtmlWebpackExternalsPlugin({ externals })),
);
```

## TODO

上述就是我的初步优化。属于比较粗糙的对最明显的步骤的优化，肉眼可见的速度优化，后续细节优化还需要进一步研究。
