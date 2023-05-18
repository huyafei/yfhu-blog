# API

## Number

### randomNum

- 说明：

  根据区间获取随机整数(包含最大值、最大值)

- 参数：

    - {number} min 最小值，默认：0
    - {number} max 最大值，默认：1

- 返回值：

  {number}

- 示例：

```js
jstk.randomNum(0, 100)
// 79
```

### numberToChinese

- 说明：

  将阿拉伯数字翻译成中文大写数字

- 参数：

    - {number|string} num 数字

- 返回值：

    - {string}

- 示例：

```js
jstk.numberToChinese(31415926)
// 三仟一百四十一萬五仟九百二十六
```

### numberCurrencyToChinese

- 说明：

将阿拉伯数字数字金额转为中文大写金额

- 参数：

    - {number|string} num 数字金额

- 返回值：

  {string}

- 示例：

```js
jstk.numberCurrencyToChinese(31415926)
// 叁仟壹佰肆拾壹万伍仟玖佰贰拾陆元整
```

### thousandSeparator

- 说明：

将数字千分位分割

- 参数：

    - {number|string} num 数字

- 返回值：

  {*|string}

- 示例：

```js
jstk.thousandSeparator(31415926)
// 31,415,926
```

#### numberFormatter

- 说明：

数字格式化

- 参数：

  - {number} num 数字
  - {number} digits 保留小数位数

- 返回值：

  {string}

- 示例：

```js
jstk.numberFormatter(31415926) // 31M
```

#### timeAgo

- 说明：

以前时间距离当前时间的时间差

- 参数：

  - {Date|number} time 时间对象或时间戳
  - {Object} opt 选项配置，可选 默认值：{d: 'day', h: 'hour', m: 'minute'}

- 返回值：

  {string}

- 示例：

```js
// 假设当前时间为 2023-5-18
jstk.timeAgo(new Date('2023-5-17'))
// 1day
```


## String

### strHideCode

- 说明：

字符串脱敏

- 参数：

    - {string} str 需要脱敏字符串
    - {number} startIndex 脱敏起始位置
    - {number} endIndex 脱敏结束位置

- 返回值：

  {string} 已脱敏字符串

- 示例：

```js
jstk.strHideCode("这是一段文字", 2, 4)
// 这是**文字
```

### strTrim

- 说明：

字符串去除空格

- 参数：

    - {string} str 需要去除空格的字符串
    - {number} type 类型, 1:所有空格 2:前后空格 (默认)  3:前空格 4:后空格

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
let str = " 这是 一段 文字 "
jstk.strTrim(str, 1)
// 这是一段文字
jstk.strTrim(str, 2)
// 这是 一段 文字
jstk.strTrim(str, 3)
// 这是 一段 文字
jstk.strTrim(str, 4)
//  这是 一段 文字
```

#### uppercaseFirst

- 说明：

英文字母大写转换

- 参数：

  - {string} str

- 返回值：

  {string}

- 示例：

```js
jstk.uppercaseFirst('userName') // UserName
```


### strEnChangeCase

- 说明：

英文字母大小写转换，如果是驼峰命名也会转换

- 参数：

    - {string} str 需要转换的英文字符串
    - {number} type 类型, 1:首字母大写 (默认) 2:首页母小写 3:大小写转换 4:全部大写 5:全部小写

- 返回值：

  {string|*} 已转换的英文字符串

- 示例：

```js
jstk.strEnChangeCase(str, 1)
// This Is A Text
jstk.strEnChangeCase('UserName', 1)
// Username
jstk.strEnChangeCase(str, 2)
// tHIS iS a tEXT
jstk.strEnChangeCase(str, 3)
// tHIS IS A TEXT
jstk.strEnChangeCase(str, 4)
// THIS IS A TEXT
jstk.strEnChangeCase(str, 5)
// this is a text
```

### strFilterHtmlTag

- 说明：

过滤 html代码(把 <、> 和 & 转换)

- 参数：

    - {string} str html字符串

- 返回值：

  {string}

- 示例：

```js
let str = "<div>这是一段文字</div>";
jstk.strFilterHtmlTag(str)
// &lt;div&gt;这是一段文字&lt;/div&gt;
```

### randomCode

- 说明：

生成随机验证码

- 参数：

    - {number} length 随机验证码的长度，默认4位
    - {string|number} checkCode 当前随机码（防止重复）

- 返回值：

  {string}

- 示例：

```js
jstk.randomCode()
// F1Fo
```

## Array

### findEleOfObjArr

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

### uniqueArr

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

### uniqueObjArr

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

### joinEleOfObjArr

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

### arrRemoveRepeat

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

### arrContains

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

### each

- 说明：

自定义 each 函数

- 参数：

    - {any[]} arr 数组
    - {Function} fn 回调函数

- 示例：

```js
let arr = [1, 2, 3]
jstk.each(arr, (item, index) => {
  console.log('--each--', item, index)
})
```

### map

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

### sort

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

### formArray

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

### arrMerge

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

### arrIntersect

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

### getIntersectOfObjArr

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

### getIntersectOfMultiObjArr

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

### arrRemoveEle

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

### arrEleCount

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

#### addTagToObjectArrayDuplicateData

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

## Date

### formatDate

- 说明：

格式化日期

- 参数：

    - {Date|string|number} time 时间戳或日期对象
    - {string} format 格式，年(YYYY) 月(MM) 日(DD) 时(hh) 分(mm) 秒(ss) 星期(WW), 默认: YYYY-MM-DD hh:mm:ss

- 返回值：

  {string|null} 格式化后的日期

- 示例：

```js
jstk.formatDate()
// 2023-04-18 17:21:11 
jstk.formatDate('2020-9-9', 'YYYY/M/D h:m:s WW')
// 2020/9/9 0:0:0 星期三
```

### getTimeSlot

- 说明：

根据步长获取时间间隔

- 参数：

    - {number} step 间隔 单位：分钟

- 返回值：

  {string[]} 时间间隔数组

- 示例：

```js
jstk.getTimeSlot(240)
// ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
```

### formatHMS

- 说明：

秒转时分秒

- 参数：

    - {number} s 秒数
    - {Array\<string\>} format 格式 默认：["时", "分", "秒"]，可以自定义例如：["h", "m "s"]

- 返回值：

  {string} x时x分x秒

- 示例：

```js
jstk.formatHMS(7200)
// 2时0分0秒
```

### getDays

- 说明：

根据指定时间获取指定长度的天数集合

- 参数：

    - {Date|string} time 时间
    - {number} len 长度
    - {number} dir 方向 1: 前几天; 2: 后几天; 3:前后几天 (默认)

- 返回值：

  {string[]} 日期集合

- 示例：

```js
// 当前 2022-6-15
jstk.getDays(new Date(), 3, 1)
// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15']
jstk.getDays(new Date(), 3, 2)
// ['2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']
jstk.getDays(new Date(), 3, 3)
// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']
```

### getMonthOfDays

- 说明：

  获得某年某月天数

- 参数：

    - {number} year 年份
    - {number} month 月份

- 返回值：

  {number} 天数

- 示例：

```js
jstk.getMonthOfDays(2022, 6)
// 30
```

### getYearOfDays

- 说明：

获取某年天数

- 参数：

    - {number|string|Date} time 年份或new Date()格式

- 返回值：

  {number} 天数

- 示例：

```js
jstk.getYearOfDays(2022)
// 365
```

### getMonths

- 说明：

根据指定时间获取指定长度的月份集合

- 参数：

    - {Date|string|number} time 时间
    - {number} len 长度
    - {number} dir 1: 前几个月; 2: 后几个月; 3:前后几个月 (默认)

- 返回值：

  {string[]} 月份集合

- 示例：

```js
jstk.getMonths('2022-3', 4, 1)
// ['2021-12', '2022-1', '2022-2', '2022-3']
jstk.getMonths('2022-3', 4, 2)
// ['2022-3', '2022-4', '2022-5', '2022-6']
jstk.getMonths('2022-3', 4, 3)
// ['2021-12', '2022-1', '2022-2', '2022-3', '2021-3', '2021-4', '2021-5', '2021-6']
```

### getQuarterStartMonth

- 说明：

根据指定时间获得该季度的开始月份

- 参数：

    - {Date|string|number} date 时间 Date|‘2022-12-20’| 时间戳

- 返回值：

  {number} 月份

- 示例：

```js
// 2021-01-01
jstk.getQuarterStartMonth()
// 1
```

### getDayOfYear

- 说明：

获取某个日期是当年中的第几天

- 参数：

    - {Date|String} date 时间,默认当前时间

- 返回值：

  {number} 天数

- 示例：

```js
jstk.getDayOfYear('2022-6-15')
// 165
```

### getDayOfYearWeek

- 说明：

获取某个日期在这一年的第几周

- 参数：

    - {Date|String} time 时间,默认当前时间

- 返回值：

  {number} 周数

- 示例：

```js
jstk.getDayOfYearWeek('2022-6-15')
// 24
```

### getWeekStartDate

- 说明：

获得本周、上周、下周的开始日期

- 参数：

    - {number} type 类型 -1:上周 0:本周(默认)  1:下周

- 返回值：

  {string} 日期

- 示例：

```js
// 当前2022-06-16
jstk.getWeekStartDate(-1)
// 2022-06-06
jstk.getWeekStartDate(0)
// 2022-06-13
jstk.getWeekStartDate(1)
// 2022-06-20
```

### getWeekEndDate

- 说明：

获得本周、上周、下周的结束日期

- 参数：

    - {number} type -1:上周 0:本周(default)  1:下周

- 返回值：

  {string} 日期

- 示例：

```js
getWeekEndDate() // 2023-04-23
```

### getMonthStartDate

- 说明：

获得本月或指定月份的开始日期

- 参数：

    - {string|number} y 年
    - {string|number} m 月

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getMonthStartDate(2022, 6)
// 2022-06-01

```

### getMonthEndDate

- 说明：

获得本月或指定月份的结束日期

- 参数：

    - {string|number} y 年
    - {string|number} m 月

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getMonthEndDate(2022, 6)
// 2022-06-30
```

### getQuarterStartDate

- 说明：

获得本季度的开始日期

- 参数：

    -

- 返回值：

  {string} 日期

- 示例：

```js
// 2022-06-17
jstk.getQuarterStartDate()
// 2022-04-01
```

### getQuarterEndDate

- 说明：

获得本季度的结束日期

- 参数：

    -

- 返回值：

  {string} 日期

- 示例：

```js
// 2022-6-16
jstk.getQuarterEndDate()
// 2022-06-30
```

### getYearStartDate

- 说明：

获得本年的开始日期

- 参数：

    -

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getYearStartDate()
// 2022-01-01
```

### getYearEndDate

- 说明：

获得本年的结束日期

- 参数：

    -

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getYearEndDate()
// 2022-12-31
```

### getFirstOrLastDayOfYear

- 说明：

获取指定年份的第一天或最后一天

- 参数：

    - {string|number} year 年份
    - {number} type 类型 -1：第一天,1：最后一天，默认：-1

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getFirstOrLastDayOfYear(2022)
// 2022-01-01
jstk.getFirstOrLastDayOfYear(2022, 1)
// 2022-12-31
```

### doHandleMonth

- 说明：

月份补零

- 参数：

    - {string|number} month 月份

- 返回值：

  {string} 月份

- 示例：

```js
doHandleMonth(2) // 02
```

### getBeforeDate

- 说明：

获取近三天、近一周、近一个月日期（包含当天）

- 参数：

    - {number} len 天数 1：当天 默认 3：近三天 7：近7天，30：近30天

- 返回值：

  {string} 日期

- 示例：

```js
// 2022-6-17
jstk.getBeforeDate()
// 2022-6-17
jstk.getBeforeDate(3)
// 2022-06-15
jstk.getBeforeDate(7)
// 2022-06-11
jstk.getBeforeDate(30)
// 2022-05-19
```

## Function

### debounce

- 说明：

函数防抖

- 参数：

    - {Function} fun 需要被防抖的函数
    - {number} wait  防抖的时间（毫秒） 默认：500
    - {boolean} immediate  是否立即执行 默认：true

- 返回值：

  {Function} 返回新的 debounced（防抖动）函数

- 示例：

```html

<button onclick="debounceEvent()">防抖</button>
<script>
	const debounceEvent = jstk.debounce(function () {
		console.log('防抖成功')
	}, 1000, true)
</script>
```

### throttle

- 说明：

函数节流

- 参数：

    - {Function} fun 需要被节流的函数
    - {number} wait 节流的时间（毫秒） 默认：500

- 返回值：

  {Function} 返回一个新的函数

- 示例：

```html

<button onclick="throttleEvent()">节流</button>
<script>
	const throttleEvent = jstk.throttle(function () {
		console.log('节流成功')
	}, 1000)
</script>
```

## Math

### add

- 说明：

两个数相加

- 参数：

    - {number} a 第一个数
    - {number} b 第二个数

- 返回值：

  {string} 相加后的数字

- 示例：

```js
jstk.add(0.4, 0.1)
// 0.5
```

### subtract

- 说明：

两个数相减

- 参数：

    - {number} a 第一个数
    - {number} b 第二个数

- 返回值：

  {string} 相减后的数字

- 示例：

```js
jstk.subtract(0.4, 0.1)
// 0.3
```

### multiply

- 说明：

两个数相乘

- 参数：

    - {number} a 第一个数
    - {number} b 第二个数

- 返回值：

  {string} 相乘后的数字

- 示例：

```js
jstk.multiply(0.4, 0.1)
// 0.04
```

### divide

- 说明：

两个相除

- 参数：

    - {number} a 第一个数
    - {number} b 第二个数

- 返回值：

  {string} 相除后的数字

- 示例：

```js
jstk.divide(8, 2)
// 4
```

### sum

- 说明：

数组求和

- 参数：

    - {number[]} arr 数组

- 返回值：

  {string} 和

- 示例：

```js
let arr = [1, 2, 3]
jstk.sum(arr)
// 6
```

### average

- 说明：

求数组中数值平均值

- 参数：

    - {number[]} arr 数组

- 返回值：

  {number} 平均值

- 示例：

```js
let arr = [1, 2, 3]
jstk.average(arr)
// 2
```

### max

- 说明：

获取数组中最大值

- 参数：

    - {number[]} arr 数组

- 返回值：

  {number} 最大值

- 示例：

```js
let arr = [1, 2, 3]
jstk.max(arr)
// 3
```

### min

- 说明：

获取数组中取最小值

- 参数：

    - {number[]}  arr 数组

- 返回值：

  {number} 最小值

- 示例：

```js
let arr = [1, 2, 3]
jstk.max(arr)
// 1
```

### ceil

- 说明：

向上取整

- 参数：

    - {number} num 数字 默认：0
    - {number} precision 精度 默认：0

- 返回值：

  {string} 向上取整后的数字

- 示例：

```js
jstk.ceil("23.321523", 2)
// 23.33
```

### floor

- 说明：

向下取整

- 参数：

    - {number} num 数字 默认：0
    - {number} precision 精度 默认：0

- 返回值：

  {string} 向下取整后的数字

- 示例：

```js
jstk.floor("23.321523", 2)
// 23.32
```

### decimal

- 说明：

保留小数点后几位，不考虑四舍五入

- 参数：

    - {number} num 数值 默认：0
    - {number} precision 精度 默认：0

- 返回值：

  {number} 保留小数点后几位的数字

- 示例：

```js
jstk.decimal("23.321523", 2)
// 23.32
jstk.decimal("23", 2)
// 23
```

### round

- 说明：

保留小数点后几位，四舍五入

- 参数：

  - {number|string} num 数值
  - {number} precision 保留小数位数，默认保留3位小数

- 返回值：

  {number} 保留小数点后几位的数字

- 示例：

```js
round(3.1415926, 3) // 3.142
```


## Url

### getUrlParam

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

### delParamsUrl

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

### getAllParamsOfUrl

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

## Http

### _ajax

- 说明：

XMLHttpRequest 简易封装成 ajax 请求

- 参数：

    - {Object} setting  配置 
    - {String} setting.method 请求方式
    - {String} setting.url 请求地址
    - {Boolean} setting.async 是否异步
    - {String} setting.dataType 解析方式
    - {Object} setting.params 参数
    - {Object} setting.data 参数
    - {Object} setting.headers 请求头设置
    - {Object} setting.auth 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(同源才允许)omit都不允许
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

### _fetch

- 说明：

封装 fetch 请求

- 参数：

    - {string} url 请求地址
    - {Object} setting  配置
    - {string} setting.method 请求方式
    - {Object} setting.headers 请求头设置
    - {string} setting.credentials 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(同源才允许)omit都不允许
    - {Object} setting.body 设置请求主体信息(只有post系列请求才可以设置,get系列请求会报错,格式有要求:json字符串,URLENCODED格式字符串,普通字符串,FormData格式对象,Buffer/bolb格式...不能是普通对象,并且要根据请求主体的数据格式,配置相关的请求头(Content-Type)
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

## Inspect

### isType

- 说明：

类型判断

- 参数：

    - {string} type 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol
    - {any} val 值

- 返回值：

  {boolean} 是否符合类型

- 示例：

```js
isType("String", "123")
// true
```

### isString

- 说明：

判断是否字符串

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isString('123')
// true
jstk.isString(123)
// false

```

### isNumber

- 说明：

判断是否数字

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isNumber(123)
// true
jstk.isNumber("123")
// false
```

### isBoolean

- 说明：

判断是否 boolean

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isBoolean(true)
// true
jstk.isBoolean(123)
// false
```

### isFunction

- 说明：

判断是否函数

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isFunction(() => {
})
// true
```

### isNull

- 说明：

判断是否为 null

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isNull(null)
// true
```

### isUndefined

- 说明：

判断是否 undefined

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isUndefined(undefined)
// true
```

### isObject

- 说明：

判断是否对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isObject({})
//  rue
```

### isArray

- 说明：

判断是否数组

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isArray([])
// true
```

### isDate

- 说明：

判断是否时间

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isDate(new Date())
// true
```

### isRegExp

- 说明：

判断是否正则

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isRegExp(/\d+/)
// true
```

### isError

- 说明：

判断是否错误对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isError(new Error())
// true
```

### isSymbol

- 说明：

判断是否 Symbol 函数

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isSymbol(Symbol())
// true
```

### isPromise

- 说明：

判断是否 Promise 对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPromise(Promise.resolve())
// true
```

### isSet

- 说明：

判断是否 Set 对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isSet(new Set())
// true
```

### isFalse

- 说明：

判断是否为 false

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isFalse(false)
// true
jstk.isFalse("false")
// true
jstk.isFalse("null")
// true
jstk.isFalse("undefined")
// true
jstk.isFalse("NaN")
// true
```

### isTrue

- 说明：

判断是否为 true

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isTrue(true)
// true
```

### isIos

- 说明：

判断当前环境是否为ios苹果手机

- 返回值：

  {boolean}

- 示例：

```js
jstk.isIos()
```

### getMobileEnv

- 说明：

获取当前属于哪种类型手机运行环境

- 返回值：

  {string|boolean}

- 示例：

```js
jstk.getMobileEnv()
```

### isPC

- 说明：

判断当前环境是否为 PC 端

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPC()
```

### getBrowserType

- 说明：

获取浏览器类型

- 返回值：

  {string}

- 示例：

```js
jstk.getBrowserType()
```

### checkPwdLv

- 说明：

检测密码强度

- 参数：

    - {string} str 需要检测密码

- 返回值：

  {number} 级别 0-4

- 示例：

```js
jstk.checkPwdLv("123456")
// 2
```

### verifyFormatIsCorrect

- 说明：

检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确

- 参数：

    - {string} str 检查的字符串
    - {string} type 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english,
      chinese, lower, upper, HTML

- 返回值：

  {boolean}

- 示例：

```js
jstk.verifyFormatIsCorrect("15061709876", "phone")
// true
jstk.verifyFormatIsCorrect("025-1234567", "tel")
// true
// ...
```

### isCardID

- 说明：

严格的身份证校验

- 参数：

    - {string} sId 身份证号码

- 返回值：

  {boolean}

- 示例：

```js
jstk.isCardID("350524199010109876")
// false
```

### isPCBroswer

- 说明：

判断是否是PC浏览器

- 返回值：

  {boolean} 是否是PC浏览器

- 示例：

```js
jstk.isPCBroswer()
// true
```

## Storage

### setLocal

- 说明：

设置 localStorage

- 参数：

    - {string} key key值
    - {any} val value值

- 示例：

```js
jstk.setLocal("name", "zhangsan")
```

### getLocal

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

### removeLocal

- 说明：

清除某个 localStorage

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeLocal("name")
```

### clearLocal

- 说明：

清除所有 localStorage

- 示例：

```js
jstk.clearLocal()
```

### setSession

- 说明：

设置 sessionStorage

- 参数：

    - {string} key key值
    - {any} val 值

- 示例：

```js
jstk.setSession("name", "zhangsan")
```

### getSession

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

### removeSession

- 说明：

清除某个 sessionStorage

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeSession("name")
```

### clearSession

- 说明：

清除所有 sessionStorage

- 示例：

```js
jstk.clearSession()
```

### setCookie

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

### getCookie

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

### removeCookie

- 说明：

删除某个 cookie

- 参数：

    - {string} key key值

- 示例：

```js
jstk.removeCookie("name")
```

## Dom

### $

- 说明：

查找dom元素，类似jquery的$

- 参数：

    - {string|Element} selector 选择器

- 返回值：

  {Element|NodeListOf\<Element\>|null} 返回元素或元素集合

- 示例：

```js
jstk.$("#id")
jstk.$(".class")
jstk.$("div")
```

### hasClass

- 说明：

检测类名，校验指定元素的类名是否包含指定的类名

- 参数：

    - {Element} ele dom元素
    - {string} name 类名

- 返回值：

  {boolean} true/false

- 示例：

```html

<div id="e" class="a b"></div>
<script>
	jstk.hasClass(jstk.$("#e"), 'a')
	// ['a ', '', ' ', index: 0, input: 'a b', groups: undefined]
</script>
```

### addClass

- 说明：

添加类名

- 参数：

    - {Element|NodeList} ele 元素
    - {string} name 类名

- 示例：

```html

<div id="e" class="a b"></div>
<script>
	jstk.addClass(jstk.$("#e"), "c")
	// <div id="e" class="a b c"></div>
</script>
```

### removeClass

- 说明：

删除类名

- 参数：

    - {Element|NodeList} ele 元素
    - {string} name 类名

- 示例：

```html

<div id="e" class="a b c"></div>
<script>
	jstk.removeClass(jstk.$("#e"), "c")
	// <div id="e" class="a b"></div>
</script>
```

### replaceClass

- 说明：

替换类名

- 参数：

    - {Element|NodeList} ele 元素
    - {string} newName 新类名
    - {string} oldName 旧类名

- 示例：

```html

<div id="e" class="a b c"></div>
<script>
	jstk.replaceClass(jstk.$("#e"), "c", "d")
	// <div id="e" class="a b d"></div>
</script>
```

### siblings

- 说明：

获取兄弟节点

- 参数：

    - {Element} ele dom元素

- 返回值：

  {*[]} 兄弟节点数组

- 示例：

```js
jstk.siblings(jstk.$("#e"))
// [<div id="e" class="a b c"></div>]
```

### getByStyle

- 说明：

获取行间样式属性

- 参数：

    - {Element} ele 元素
    - {string} name 属性名

- 返回值：

  {*} 属性值

- 示例：

```html

<div id="e" style="color:red;"></div>
<script>
	jstk.getByStyle(jstk.$("#e"), "color")
	// "red"
</script>
```

### elInsertAfter

- 说明：

在指定元素之后插入新元素

- 参数：

    - {Element} el 元素
    - {string} htmlString 插入元素

- 示例：

```js
jstk.elInsertAfter(jstk.$("#e"), "<div>123</div>")
```

### elInsertBefore

- 说明：

在指定元素之前插入新元素

- 参数：

    - {Element} el 当前元素
    - {string} htmlString 插入元素

- 示例：

```js
jstk.elInsertBefore(jstk.$("#e"), "<div>123</div>")
```

## File

### getBlobType

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

### downloadFile

- 说明：

根据文件名称（带类型名称）和二进制数据流下载文件

- 参数：

    - {Blob} blobFile 二进制数据流
    - {string} fileName 文件名称

- 返回值：

  {boolean} 是否下载成功

- 示例：

```js
downloadFile("a.png", "....")
```

## Other

### deepClone

- 说明：

深克隆

- 参数：

    - {*} data 要克隆的数据

- 返回值：

  {*} 返回克隆后的数据

- 示例：

```js
let arr = [null, undefined, true, new Date(), function () {
}, 1, "aa", [], {}]
jstk.deepClone(arr)
// [null, undefined, true, Wed Jun 22 2022 13:53:02 GMT+0800 (中国标准时间), ƒ, 1, 'aa', [], {}]
```

### getRandomColor

- 说明：

获取十六进制随机颜色

- 返回值：

  {string} 颜色值

- 示例：

```js
 jstk.getRandomColor() // #2a260b
```

### getScrollPosition

- 说明：

获取当前的滚动位置

- 参数：

  - {string} el 元素 默认window

- 返回值：

  {Object} {x,y}  对象

- 示例：

```js
jstk.getScrollPosition()
```

### smoothScroll

- 说明：

滚动到指定元素区域

- 参数：

  - {string} element

- 示例：

```js
jstk.smoothScroll($('#app'))
```

### scrollToTop

- 说明：

平滑滚动至顶部

- 示例：

```js
jstk.scrollToTop()
```

### btoa

- 说明：

简单base64编码

- 参数：

  - {string} str 需要编码的字符串

- 返回值：

  {string} 返回编码后的字符串

- 示例：

```js
jstk.btoa('www.baidu.com?a=1&b=2') // d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI=
```

### atob

- 说明：

简单base64解码

- 参数：

  - {string} str 通过btoa编码后的字符串

- 返回值：

  {string} 解码后的字符串

- 示例：

```js
jstk.atob('d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI')
// www.baidu.com?a=1&b=2
```

### resizeFontSize

- 说明：

根据窗口大小自适应字体大小 用于大屏图表中的文案字体大小计算

- 参数：

    - {number} val 初始字体大小 默认：16
    - {number} initWidth 初始宽度 默认：1920

- 返回值：

  {number} 返回计算后字体大小

- 示例：

```js
jstk.resizeFont()
jstk.resizeFont(14, 1366)
```

### resizeViewScale

- 说明：

浏览器窗口变化页面缩放（数据可视化大屏用）,
注意：需要在页面中添加<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

- 参数：

    - {object} options {object} 参数 {id: 元素id, width : 标准/设计稿/实际宽度 默认：1920, height : 标准/设计稿/实际高度
      默认：1080,mode: 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)}

- 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<link rel="stylesheet" href="./index.css">
	<script src="../lib/index.js"></script>
	<style>
		#app-main {
			height: 100%;
			width: 100%;
		}

		.top {
			height: 50px;
			width: 100%;
			background-color: #f00;
		}

		.left {
			background-color: #1e6acb;
			position: absolute;
			left: 0;
			top: 50px;
			width: 200px;
			height: calc(100% - 50px);
		}

		.right {
			background-color: #f0bd14;
			position: absolute;
			left: 200px;
			top: 50px;
			width: calc(100% - 200px);
			height: calc(100% - 50px);
		}
	</style>
</head>
<body>
<div id="app-main" style="position:absolute;left:0;top:0;right:0;bottom:0;width: 1920px;height:1080px;">
	<div class="top">
		头部
	</div>
	<div class="left">
		左侧
	</div>
	<div class="right">
		右侧
	</div>
</div>
<script>
	let initResize = function () {
		let opt = {
			id: '#app-main',
			width: 1920,
			height: 1080,
			mode: "scaleToFill" // 或者 "aspectFit"
		}
		window.onresize = function () {
			jstk.resizeViewScale(opt)
		}
		jstk.resizeViewScale(opt)
	}
	initResize()
</script>
</body>
</html>

```

### dayjs

- 说明：

内部引入了dayjs，可以使用dayjs的方法，详情请查看dayjs文档[前往](https://dayjs.gitee.io/zh-CN/)

- 示例：

```js
jstk.dayjs().format()
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'
jstk.dayjs().format("YYYY-MM-DD HH:mm:ss")
// '2020-04-02 08:02:17'
```

### Cookies

- 说明：

内部引入了js-cookie，可以使用js-cookie的方法，详情请查看js-cookie文档[前往](https://github.com/js-cookie/js-cookie#readme)

- 示例：

```js
jstk.Cookies.set("name", "张三", {expires: 1});
jstk.Cookies.get("name")
// "张三"

jstk.Cookies.setJSON("userInfo", {name: "张三", age: 18},{expires: 7, path: '', domain: '*'} )
jstk.Cookies.getJSON("userInfo") // {name: "张三", age: 18}
```
### mathjs

- 说明：

内部引入了mathjs，可以使用mathjs的方法，详情请查看mathjs文档[前往](https://mathjs.org/)

- 示例：

```js
const {math} = jstk

// 加
function add(num1, num2) {
  return math.format(math.add(math.bignumber(num1), math.bignumber(num2)));
}

// 减
function subtract(num1, num2) {
  return math.format(math.subtract(math.bignumber(num1), math.bignumber(num2)));
}

// 乘
function multiply(num1, num2) {
  return math.format(math.multiply(math.bignumber(num1), math.bignumber(num2)));
}

// 除
function divide(num1, num2) {
  return math.format(math.divide(math.bignumber(num1), math.bignumber(num2)));
}

add(0.1, 0.3) // 0.4
subtract(0.3, 0.1) //0.2
multiply(2, 3) // 6
divide(8, 2) //4
```
