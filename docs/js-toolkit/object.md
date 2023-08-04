# 对象

## chainGet

- 说明：

  链式获取对象属性

- 添加版本：1.1.0-beta.11

- 参数：

    - {Object} obj 检索对象
    - {string} chain 属性链（例如：a.b.c）
    - {*} [defaultValue=undefined] 默认值

- 返回值：

  {*} 

- 示例：

```js
 const obj = {
    a: {
      b: [
        {
          c: 1
        }
      ],
      c: 2
    }
  }
  const arr = [1, 2, 'a', {a: 1}, [{a: 1}]]
jstk.chainGet(obj, "a.b[0].c")
// 1
jstk.chainGet(obj, "a.b[0].d")
// undefined
jstk.chainGet(obj, "a.d.d",0)
// 0
jstk.chainGet(obj, "a['c']")
// 2
jstk.chainGet(obj, "a['d']",0)
// 0
jstk.chainGet(arr[3], "a")
// 1
```
