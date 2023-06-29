# Http

## _ajax

- 说明：

XMLHttpRequest 简易封装成 ajax 请求

- 参数：

    - {Object} setting 配置
    - {String} setting.method 请求方式
    - {String} setting.url 请求地址
    - {Boolean} setting.async 是否异步
    - {String} setting.dataType 解析方式
    - {Object} setting.params 参数
    - {Object} setting.data 参数
    - {Object} setting.headers 请求头设置
    - {Object} setting.auth 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(同源才允许)
      omit都不允许
    - {string} setting.auth.username 用户名
    - {string} setting.auth.password 密码
    - {Function} setting.success 请求成功回调
    - {Function} setting.error 请求失败回调

- 示例：

```js
jstk._ajax({
  method: "post", // 请求方式
  url: "http://baidu.com",  // 请求地址
  async: true, // 是否异步
  dataType: "JSON", // 解析方式
  data: { // 参数
    name: "zs"
  },
  success: function (res) { // 请求成功回调
    console.log(res)
  },
  error: function (err) { // 请求失败回调
    console.log(err)
  }
})
```

## _fetch

- 说明：

封装 fetch 请求

- 参数：

    - {string} url 请求地址
    - {Object} setting 配置
    - {string} setting.method 请求方式
    - {Object} setting.headers 请求头设置
    - {string} setting.credentials 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(
      同源才允许)omit都不允许
    - {Object} setting.body 设置请求主体信息(只有post系列请求才可以设置,get系列请求会报错,格式有要求:
      json字符串,URLENCODED格式字符串,普通字符串,FormData格式对象,Buffer/bolb格式...不能是普通对象,并且要根据请求主体的数据格式,配置相关的请求头(
      Content-Type)
    - {string} setting.mode 可以设置 cors, no-cors, same-origin
    - {string} setting.redirect 可以设置 follow, error, manual
    - {string} setting.cache 可以设置 default, reload, no-cache

- 返回值：

  {Promise\<unknown\>} 返回 Promise 对象

- 示例：

```js
jstk._fetch("http://baidu.com", {
  method: "post",
  headers: {
    "Content-Type": "application/json" // 设置请求头
  },
  credentials: "include",
  // body: JSON.stringify({name:123}),
  mode: 'no-cors',
  redirect: 'follow',
  cache: 'default',
  dataType: 'json',
  data: {
    name: "zs"
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```
