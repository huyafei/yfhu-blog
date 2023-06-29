# 存储

## setLocal

- 说明：

设置 localStorage

- 参数：

    - {string} key key值
    - {any} val value值

- 示例：

```js
jstk.setLocal("name", "zhangsan")
```

## getLocal

- 说明：

获取 localStorage

- 参数：

    - {string} key key值

- 返回值：

  {any}

- 示例：

```js
jstk.getLocal("name")
// "zhangsan"
```

## removeLocal

- 说明：

清除某个 localStorage

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeLocal("name")
```

## clearLocal

- 说明：

清除所有 localStorage

- 示例：

```js
jstk.clearLocal()
```

## setSession

- 说明：

设置 sessionStorage

- 参数：

    - {string} key key值
    - {any} val 值

- 示例：

```js
jstk.setSession("name", "zhangsan")
```

## getSession

- 说明：

获取 sessionStorage

- 参数：

    - {string} key key值

- 返回值：

  {any} value值

- 示例：

```js
jstk.getSession("name")
// "zhangsan"
```

## removeSession

- 说明：

清除某个 sessionStorage

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeSession("name")
```

## clearSession

- 说明：

清除所有 sessionStorage

- 示例：

```js
jstk.clearSession()
```

## setCookie

- 说明：

设置 cookie

- 参数：

    - {string} key key值
    - {any} value value值
    - {Object} options 配置
    - {number} options.expires 过期时间，单位：秒
    - {string} options.domain 域名
    - {string} options.path 路径

- 示例：

```js
jstk.setCookie("name", "zhangsan", {
  expires: 3600,
  path: "/",
  domain: "www.baidu.com"
})
```

## getCookie

- 说明：

获取 cookie

- 参数：

    - {string} key key值

- 返回值：

  {string|string} value值

- 示例：

```js
jstk.getCookie("name")
```

## removeCookie

- 说明：

删除某个 cookie

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeCookie("name")
```

