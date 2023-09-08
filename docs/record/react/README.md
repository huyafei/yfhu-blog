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
const { createProxyMiddleware: proxy } = require("http-proxy-middleware"); // 新

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
        pathRewrite: { '^/api': '' } //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
      })

      //.... 可以有多个
  )
}
```
