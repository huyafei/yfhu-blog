# 数组

## findEleOfObjArr

- 说明：

查找对象数组是否存在某元素 返回 -1或下标，可使用 findIndex() 代替

- 参数：

    - {Array\<Object\>} arr 对象数组
    - {string} attrName 查找的元素属性名
    - {*} attrVal 查找的元素属性的值

- 返回值：

  {number} 下标或-1

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"}
]
jstk.findEleOfObjArr(arr, 'type', "b")
// 1
jstk.findEleOfObjArr(arr, 'type', "d")
// -1
```

## uniqueArr

- 说明：

数组去重

- 参数：

    - @param {Array\<any\>} arr 数组（普通数组或对象数组都可以）

- 返回值：

  {*[]} 去重后的数组

- 示例：

```js
let arr = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  },
  {
    id: 4,
    name: "c"
  },
  {
    id: 3,
    name: "c"
  },
  {
    id: 4,
    name: "c",
    age: 28
  },
]
jstk.uniqueArr(arr)
//[{id: 1, name: 'a'},{id: 2, name: 'b'},{id: 3, name: 'c'},{id: 4, name: 'c'},{id: 4, name: 'c', age: 28}]
```

## uniqueObjArr

- 说明：

对象数组根据指定属性名称去重

- 参数：

    - {Array\<Object\>} arr 对象数组
    - {string} attrName 需要匹配去重的对象里属性名

- 返回值：

  {Array} 去重后的数组

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"},
  {type: "c"}
]
jstk.uniqueObjArr(arr, 'type')
// [{type: "a"},{type: "b"},{type: "c"}]
```

## joinEleOfObjArr

- 说明：

对象数组根据指定属性名称值返回逗号隔开字符串

- 参数：

    - {Object[]} arr 对象数组
    - {string} attrName 属性名
    - {string} sym 符号 默认 ','

- 返回值：

  {string} 符号拼接的字符串

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"}
]
jstk.joinEleOfObjArr(arr, 'type')
// a,b,c
jstk.joinEleOfObjArr(arr, 'type', '-')
// a-b-c
```
## forEach

- 说明：

自定义 forEach 函数

- 添加版本：2.0.0-beta.1

- 参数：

  - {any[]} array 数组
  - {Function} callback 回调函数
  - {Object} thisArg this指向

- 示例：

```js
let arr = [1, 2, 3]
jstk.forEach(arr, (item, index) => {
  console.log('--forEach--', item, index)
})
```

## map

- 说明：

自定义 map 函数

- 参数：

  - {any[]} arr 数组
  - {Function} fn 回调函数
  - {Object} thisObj this指向

- 返回值：

  {*[]}

- 示例：

```js
  const arr1 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  },
  {
    id: 4,
    name: "c"
  },
  {
    id: 3,
    name: "c"
  },
  {
    id: 4,
    name: "c",
    age: 28
  },
]
const _arr1 = jstk.map(arr1, (item, index) => {
  return {id: item.id, name: item.name}
})
console.log('--map--', _arr1)
```


## arrRemoveRepeat

- 说明：

普通数组去重

- 参数：

    - {Array\<string\|number\>} arr 普通数组

- 返回值：

  {(string\|number)[]} 去重后的数组

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
jstk.arrRemoveRepeat(arr)
// [1, 2, 4, 5, 'a', 'b']
```

## arrContains

- 说明：

判断一个元素是否在数组中

- 参数：

    - {(string|number)[]} arr 普通数组
    - {string|number} val 要查找的指定元素

- 返回值：

  {boolean} 布尔值

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrContains(1)
// true
```

## sort

- 说明：

排序

- 参数：

    - {number[]} arr number类型数组
    - {number} type 排序类型 1：从小到大 2：从大到小 3：随机，默认：1

- 返回值：

  {number[]} 排序后的数组

- 示例：

```js
const _sortArrr = sort([1, 2, 3, 2, 3, 4])
console.log(_sortArrr) // [1, 2, 2, 3, 3, 4]
```

## formArray

- 说明：

将类数组转换为数组的方法

- 参数：

    - {any[]} arr 类数组

- 返回值：

  {Array} 数组

- 示例：

```js
 const fun = function (a, b) {
  console.log(formArray(arguments))
}
fun(1, 2)
```

## arrMerge

- 说明：

数组合并，求两个数组(集合)的并集

- 参数：

    - {number[]} a 数组1
    - {number[]} b 数组2

- 返回值：

  {number[]} 返回并集数组

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
let arr2 = [1, 2, 3, 6, 7, 'b', 'c']
jstk.arrMerge(arr, arr2)
// [1, 2, 4, 5, 'a', 'b', 3, 6, 7, 'c']
```

## arrIntersect

- 说明：

获取两个数组相同元素，求两个数组(集合)的交集

- 参数：

    - {number[]} a 数组1
    - {number[]} b 数组2

- 返回值：

  {number[]} 返回交集数组

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
let arr2 = [1, 2, 3, 6, 7, 'b', 'c']
jstk.arrIntersect(arr, arr2)
// [1, 2, 'b']
```

## getIntersectOfObjArr

- 说明：

  根据指定属性名获取两个对象数组的交集

- 参数：
    - {Object[]} arr1 数组1
    - {Object[]} arr2 数组2
    - {string} attrName 指定属性名称 例如：'a'
- 返回值：

  {Object[]} 返回交集数组

- 示例：

```js
const arr1 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  }
]
const arr2 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 3,
    name: "c"
  }
]
jstk.getIntersectOfObjArr(arr1, arr2, 'id')
// [{id: 1,name: "a"},{id: 3,name: "c"}]
```

## getIntersectOfMultiObjArr

- 说明：

  根据指定属性名获取多个对象数组的交集

- 参数：
    - {Array\<Array\<Object\>\>} arr 数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
    - {string} attrName 指定属性名称 例如：'a'
- 返回值：

  {Object[]} 返回交集数组

- 示例：

```js
const arr1 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  }
]
const arr2 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 3,
    name: "c"
  }
]
const arr3 = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  }
]
const arr4 = [
  {
    id: 2,
    name: "b"
  },
  {
    id: 3,
    name: "c"
  }
]
const arr = [arr1, arr2, arr3, arr4]
const _arr = getIntersectOfMultiObjArr(arr, 'id')
// [{id: 3, name: 'c'}]
```

## arrRemoveEle

- 说明：

删除数组其中一个元素

- 参数：

    - {Array\<any\>} arr 数组
    - {any} ele 要删除的元素

- 返回值：

  {Array\<any\>} 返回删除后的数组

- 示例：

```js
let arr = ['a', 'b', 'c']
jstk.arrRemoveEle(arr, "b")
// ['a', 'c']
```

## arrEleCount

- 说明：

检测数组中指定元素出现的次数

- 参数：

    - {any[]} arr 数组
    - {any} val 元素

- 返回值：

  {number} 返回出现次数

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
jstk.arrEleCount(arr, 1)
// 2
```

## addTagToObjectArrayDuplicateData

- 说明：

对象数组重复数据添加标记

- 参数：

    - {Object[]} arr 对象数组
    - {string} attrName 指定属性名称 例如：'a'
    - {string} tagAttrName 标记属性名称 默认：'_xh' 值从1开始

- 返回值：

  {Object[]} 返回新的对象数组

- 示例：

```js
  const arr7 = [
  {
    "nodeStr": "div"
  }, {
    "nodeStr": "span"
  }, {
    "nodeStr": "p"
  }, {
    "nodeStr": "div"
  }, {
    "nodeStr": "div"
  }, {
    "nodeStr": "p"
  }, {
    "nodeStr": "span"
  }, {
    "nodeStr": "span"
  }]
console.log(addTagToObjectArrayDuplicateData(arr7, 'nodeStr', 'axh'))
// [
//   {nodeStr: 'div', axh: 1},
//   {nodeStr: 'span', axh: 1},
//   {nodeStr: 'p', axh: 1},
//   {nodeStr: 'div', axh: 2},
//   {nodeStr: 'div', axh: 3},
//   {nodeStr: 'p', axh: 2},
//   {nodeStr: 'span', axh: 2},
//   {nodeStr: 'span', axh: 3}
// ]
```
