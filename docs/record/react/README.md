# React

## 配置代理

### 方式一

在 `package.json` 中配置 `proxy`,这种只能配置一个代理

```json
{
  "proxy": "https://dev.example.com"
}
```

### 方式二

在 `src` 下新建 `setupProxy.js` 文件，内容如下：

```js
// 配置代理
// const proxy  = require("http-proxy-middleware"); // 旧
const {createProxyMiddleware: proxy} = require("http-proxy-middleware"); // 新

// 配置代理
module.exports = function (app) {
  app.use(
      proxy('/api', {  //api是需要转发的请求(所有带有/api前缀的请求都会转发给9000)
        target: 'http://localhost:9000', //配置转发目标地址(能返回数据的服务器地址)
        changeOrigin: true, //控制服务器接收到的请求头中host字段的值
        /*
          changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:9000
          changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
          changeOrigin默认值为false，但我们一般将changeOrigin值设为true
        */
        pathRewrite: {'^/api': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
      })

      //.... 可以有多个
  )
}
```

## 修改webpack配置
:::tip
以下配置是使用create-app-react创建的项目。 
[Create React App 入门及 webpack 配置](https://segmentfault.com/a/1190000039850941#item-5)
:::

### 方式一 项目自带

#### 使用 eject 命令（不推荐）

使用 `npm run eject` 暴露 webpack 配置文件，完成命令之后，项目根目录会新增config与scripts 文件夹，
在config里面可以找到webpack.config.js文件

**备注**

1. `eject` 命令是 `create-app-react` 创建项目后在`package.json`里面提供了这个命令
2. 该操作不可逆，不推荐使用

### 方式二 第三方插件修改

#### 使用 react-app-rewired

1. 在项目中安装 `react-app-rewired`

    ```shell
    npm install react-app-rewired --save-dev
    ```

2. 在项目根目录下创建 `config-overrides.js` 文件（支持自定义文件路径）

    ```js
   /* config-overrides.js */
    module.exports = function override(config, env) {
    // 对 config 进行修改
    config.mode = 'development';
    
    // 返回新的 config 
    return config;
    }
    ```
3. 修改 package.json 中 `scripts` 命令
    ```json
    "scripts": {
     - "start": "react-scripts start",
     + "start": "react-app-rewired start",
     - "build": "react-scripts build",
     + "build": "react-app-rewired build",
     - "test": "react-scripts test",
     + "test": "react-app-rewired test",
       "eject": "react-scripts eject"
    }

    ```
* 自定义 `config-overrides.js` 文件路径

  ```json
  /* package.json */
  {
  ...
  "config-overrides-path": "src/app", // src/app/config-overrides.js
  ...
  }
  ```

#### 使用 `customize-cra`

`react-app-rewired` 使用的是原生配置webpack写法，修改webpack配置的方式全部放在 override() 一个方法中， 不够模块化。
`customized-cra` 提供了一些 helper 方法，可以将每一个独立的修改放到单独的函数中，再串行执行这些函数。

`customize-cra` 依赖于 `react-app-rewired` 库，通过 `config-overrides.js` 来修改底层的 webpack，babel等配置。

1. 安装 `customize-cra` `react-app-rewired `
    ```shell
    npm install customize-cra react-app-rewired -D
    ```
2. 在项目根目录下创建 `config-overrides.js` 文件
   [api doc](https://github.com/arackaf/customize-cra/blob/HEAD/api.md)
    ```js
      const {override, addWebpackAlias,fixBabelImports,addWebpackPlugin,setWebpackOptimizationSplitChunks} = require("customize-cra");
      const path = require("path");
    
      module.exports = override(
         // 添加别名 
         addWebpackAlias({
            page: path.resolve(__dirname, "src/page"),
         }),
         // 模块化导入
         fixBabelImports('antd', {
            "libraryName": "antd",
            libraryDirectory: 'es',
            "style": true,
         }),
         // 添加插件
         // addWebpackPlugin({}),
         // addWebpackPlugin(new WebpackPlugin()),
         setWebpackOptimizationSplitChunks({
            maxSize: 1024 * 1024 * 3,
            minChunks: 2,
         })
      );
    ```


## 配置less

1. 安装
      ```shell
         npm install less less-loader -S
      ```
2. webpack 配置
   参考`customize-cra`的[api doc中addLessLoader](https://github.com/arackaf/customize-cra/blob/master/api.md#addlessloaderloaderoptions)配置（会报PostCSS Loader 错误，下面有处理方式）
    ```js
    const { override, addLessLoader, adjustStyleLoaders } = require("customize-cra");

    module.exports = override(
      addLessLoader({
         lessOptions: {
            strictMath: true,
            noIeCompat: true,
            modifyVars: {
               "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
            },
            cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
            cssModules: {
               localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
            },
         },
      }),
      // 处理 PostCSS Loader 报错
      adjustStyleLoaders(({ use: [, , postcss] }) => {
         const postcssOptions = postcss.options;
         postcss.options = { postcssOptions };
      })
    );

    ```
