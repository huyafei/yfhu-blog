# 文件

## getBlobType

- 说明：

根据文件名称（有文件类型） 查询对应blob type

- 参数：

    - {string} name 名称，例如："image/png"

- 返回值：

  {string|null} 对应 blob 类型

- 示例：

```js
jstk.getBlobType(".image/png")
// "text/xml"
```

## downloadFile

- 说明：

根据文件名称（带类型名称）和二进制数据流下载文件

- 参数：

    - {Blob} blobFile 二进制数据流
    - {string} fileName 文件名称

- 返回值：

  {boolean} 是否下载成功

- 示例：

```js
jstk.downloadFile("....", "a.png")
```
