# Url

## getUrlParam

- 说明：

获取当前url地址栏指定参数

- 参数：

    - {string} name 参数名

- 返回值：

  {string|null}

- 示例：

```js
// http://localhost/examples/index.html?name=张三&age=18
jstk.getUrlParam('name')
// 张三
jstk.getUrlParam('sex')
// null
```

## delParamsUrl

- 说明：

删除指定url地址上指定参数

- 参数：

    - {string} url url地址
    - {string} name 参数名

- 返回值：

  {string|*} 返回新的url地址

- 示例：

```js
jstk.delParamsUrl('http://localhost/examples/index.html?name=张三&age=18', 'name')
// http://localhost/examples/index.html?age=18
```

## getAllParamsOfUrl

- 说明：

获取指定url地址上所有参数

- 参数：

    - {string|null} url url地址

- 返回值：

  {Object} 参数对象

- 示例：

```js
// http://localhost/examples/index.html?name=张三&age=18
jstk.getAllParamsOfUrl('name')
// {name: '张三', age: '18'}
```
