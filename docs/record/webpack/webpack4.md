# webpack4

## 五个核心概念

### entry

入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。
默认值是 ./src/index.js， 但你可以通过在 webpack configuration 中配置 entry 属性，来指定一个（或多个）不同的入口起点。

```js
// wenpack.config.js
module.exports = {
  // 单个入口
  // entry: './src/index.js',
  // 多个入口
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}
```

### output

输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。
主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中

```js
// wenpack.config.js
const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  }
}
```

### loader

Loader 让 webpack 能够去处理那些非 JavaScript 文件 (webpack 自身只理解
理解 JavaScript 和 JSON 文件，)
在 webpack 的配置中，loader 有两个属性：

1. test 属性，识别出哪些文件会被转换。
2. use 属性，定义出在进行转换时，应该使用哪个 loader。

```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{test: /\.txt$/, use: 'raw-loader'}],
  },
};
``` 

### plugin
插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，
一直到重新定义环境中的变量等
```js
  plugins: [
  new HtmlWebpackPlugin({
    title: 'Code Splitting'
  })
]
```

### mode
模式(Mode)指示 webpack 使用相应模式的配,通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。
```js
  mode: 'production'
```
