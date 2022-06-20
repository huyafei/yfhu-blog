# 开始

## npm/yarn

```shell
npm install @vensst/js-toolkit --save
# 或者
yarn add @vensst/js-toolkit --save
```
```js
import * as jstk from "@vensst/js-toolkit";
jstk.randomNum(0,100);
```
## CDN
```html
<script src="https://unpkg.com/@vensst/js-toolkit"></script>
```
```js
jstk.randomNum(0,100);
```

## API

### Number

#### randomNum

- 说明：  

  根据区间，获取随机整数(包含最大值、最大值)

- 参数：

  - min {number} 最小值，默认：0
  - max {number} 最大值，默认：1  
  
- 返回值：
  
  {number}

- 示例：

```js
jstk.randomNum(0,100) 
// 79
```

#### numberToChinese            

- 说明：

  将阿拉伯数字翻译成中文大写数字

- 参数：

  - nun {number|string} 数字

- 返回值：

  - {string}
  
- 示例：

```js
jstk.numberToChinese("9527.27")
// 九仟五百二十七点二七
```

#### numberCurrencyToChinese

- 说明：

将阿拉伯数字数字金额转为中文大写金额

- 参数：

  - num {number|string} 数字金额

- 返回值：

  {string}

- 示例：

```js
jstk.numberCurrencyToChinese("9527.27")
// 玖仟伍佰贰拾柒元贰角柒分
```

#### thousandSeparator

- 说明：

将数字千分位分割

- 参数：

  - num {number|string} 数字

- 返回值：

  {*|string}

- 示例：

```js
jstk.thousandSeparator(369527.279527)
// 369,527.279527
```

### String

#### strHideCode

- 说明：

字符串脱敏

- 参数：

  - str {string} 需要脱敏字符串
  - startIndex {number} 脱敏起始位置
  - endIndex {number} 脱敏结束位置

- 返回值：

  {string} 已脱敏字符串 / ''

- 示例：

```js
jstk.strHideCode("这是一段文字",2,4)
// 这是**文字
```
#### strTrim

- 说明：

字符串去除空格

- 参数：

  - str {string} 需要去除空格的字符串
  - type {number} 类型, 1:所有空格  2:前后空格 (默认)  3:前空格 4:后空格

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
let str = " 这是 一段 文字 "
jstk.strTrim(str,1)
// 这是一段文字
jstk.strTrim(str,2)
// 这是 一段 文字
jstk.strTrim(str,3)
// 这是 一段 文字
jstk.strTrim(str,4)
//  这是 一段 文字
```

#### strEnChangeCase

- 说明：

英文字母大小写转换

- 参数：

  - str {string}  需要转换的英文字符串
  - type {number} 类型, 1:首字母大写 (默认) 2:首页母小写  3:大小写转换  4:全部大写  5:全部小写

- 返回值：

  {string|*} 已转换的英文字符串

- 示例：

```js
jstk.strEnChangeCase(str,1)
// This Is A Text
jstk.strEnChangeCase(str,2)
// tHIS iS a tEXT
jstk.strEnChangeCase(str,3)
// tHIS IS A TEXT
jstk.strEnChangeCase(str,4)
// THIS IS A TEXT
jstk.strEnChangeCase(str,5)
// this is a text
```

#### strFilterHtmlTag

- 说明：

过滤 html代码(把 <、> 和 & 转换)

- 参数：

  - str {string} html 字符串

- 返回值：

  {string}

- 示例：

```js
let str ="<div>这是一段文字</div>";
jstk.strFilterHtmlTag(str)
// &lt;div&gt;这是一段文字&lt;/div&gt;
```

#### createCode

- 说明：

生成随机码（创建随机验证码）

- 参数：

  - length {number} 随机码长度 默认：4
  - checkCode {string|number} 当前随机码（防止重复）

- 返回值：

  {string}

- 示例：

```js
jstk.createCode()
// F1Fo
```

### Array

#### oArrFindEle

- 说明：

查找对象数组是否存在某元素，返回下标或-1，或使用 findIndex() 代替

- 参数：

  - arr {Array\<Object\>}
  - attrName {string} 查找的元素属性名
  - attrVal {*} 查找的元素属性的值

- 返回值：

  {number} 下标或-1

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"}
]
jstk.oArrFindEle(arr, 'type', "b")
// 1
jstk.oArrFindEle(arr, 'type', "d")
// -1
```
#### oArrRemoveRepeat

- 说明：

对象数组去重

- 参数：

  - arr {Array\<Object\>}
  - attrName {string} 需要匹配去重的对象里属性名

- 返回值：

  {Array\<Object\>}

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"},
  {type: "c"}
]
jstk.oArrRemoveRepeat(arr, 'type')
// [{type: "a"},{type: "b"},{type: "c"}]
```

#### findEleTurnSymDelStrByOArr

- 说明：

对象数组根据指定属性名称值返回逗号隔开字符串

- 参数：

  - arr {Object[]} 
  - attrName {string} 属性名
  - sym {string}  符号 默认 ','

- 返回值：

  {string}

- 示例：

```js
let arr = [
  {type: "a"},
  {type: "b"},
  {type: "c"}
]
jstk.findEleTurnSymDelStrByOArr(arr, 'type')
// a,b,c
jstk.findEleTurnSymDelStrByOArr(arr, 'type', '-')
// a-b-c
```

#### arrRemoveRepeat

- 说明：

普通数组去重

- 参数：

  - arr {Array\<string|number\>} 数组

- 返回值：

  {any[]}

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
jstk.arrRemoveRepeat(arr)
// [1, 2, 4, 5, 'a', 'b']
```
#### arrContains

- 说明：

判断一个元素是否在数组中

- 参数：

  - arr {any[]} 数组
  - val {any} 元素

- 返回值：

  {boolean}

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrContains(1)
// true
```

#### arrMerge

- 说明：

数组合并，求两个数组(集合)的并集

- 参数：

  - a {any[]}
  - b {any[]}

- 返回值：

  {*[]|*}

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
let arr2 = [1, 2, 3, 6, 7, 'b', 'c']
jstk.arrMerge(arr, arr2)
// [1, 2, 4, 5, 'a', 'b', 3, 6, 7, 'c']
```

#### arrIntersect

- 说明：

获取两个数组相同元素，求两个数组(集合)的交集

- 参数：

  - a {any[]}
  - b {any[]}

- 返回值：

  {any[]}

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
let arr2 = [1, 2, 3, 6, 7, 'b', 'c']
jstk.arrIntersect(arr, arr2)
// [1, 2, 'b']
```

#### arrRemoveEle

- 说明：

删除数组其中一个元素

- 参数：

  - arr {Array\<any\>}
  - ele {number}

- 返回值：

  {Array\<any\>}

- 示例：

```js
let arr = ['a', 'b', 'c']
jstk.arrRemoveEle(arr, "b")
// ['a', 'c']
```

#### arrMax

- 说明：

获取数组中最大值

- 参数：

  - arr {number[]}

- 返回值：

  {number}

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrMax(arr)
// 3
```

#### arrMin

- 说明：

获取数组中取最小值

- 参数：

  - arr {number[]}

- 返回值：

  {number}

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrMax(arr)
// 1
```

#### arrSum

- 说明：

数组求和

- 参数：

  - arr {number[]}

- 返回值：

  {number}

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrSum(arr)
// 6
```

#### arrAverage

- 说明：

求数组中数值平均值

- 参数：

  - arr {number[]}

- 返回值：

  {number}

- 示例：

```js
let arr = [1, 2, 3]
jstk.arrAverage(arr)
// 2
```

#### arrEleCount

- 说明：

检测数组中某个数值出现次数

- 参数：

  - arr {any[]}
  - val {any}

- 返回值：

  {number}

- 示例：

```js
let arr = [1, 1, 2, 4, 5, 'a', 'b', 'a']
jstk.arrEleCount(arr, 1)
// 2
```

### Function
#### debounce

- 说明：

函数防抖

- 参数：

  - fun {Function} 需要被防抖的函数
  - wait {number} 防抖的时间（毫秒） 默认：500
  - immediate {boolean} 是否立即执行 默认：true

- 返回值：

  {Function} 返回新的 debounced（防抖动）函数

- 示例：

```html
<button onclick="debounceEvent()">防抖</button>
<script>
  const debounceEvent = jstk.debounce(function(){
    console.log('防抖成功')
  }, 1000,true)
</script>
```

#### throttle

- 说明：

函数节流

- 参数：

  - fun {Function} 需要被节流的函数
  - wait {number} 节流的时间（毫秒） 默认：500

- 返回值：

  {Function} 返回一个新的函数

- 示例：

```html
<button onclick="throttleEvent()">节流</button>
<script>
  const throttleEvent = jstk.throttle(function(){
    console.log('节流成功')
  }, 1000)
</script>
```

### Url

#### getUrlParam

- 说明：

获取 url 地址栏参数

- 参数：

  - name {string} 参数名

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

#### getUrlAllParams

- 说明：

获取全部 url 参数,并转换成对象

- 参数：

  - url {string|null} url地址

- 返回值：

  {Object} 参数对象

- 示例：

```js
// http://localhost/examples/index.html?name=张三&age=18
jstk.getUrlAllParams('name')
// {name: '张三', age: '18'}
```

#### delParamsUrl

- 说明：

删除 url 指定参数，返回url

- 参数：

  - url {string} url地址
  - name {string} 参数名

- 返回值：

  {string|*} 返回url

- 示例：

```js
jstk.delParamsUrl('http://localhost/examples/index.html?name=张三&age=18','name')
// http://localhost/examples/index.html?age=18
```

### Date

#### formatDate

- 说明：

格式化日期

- 参数：

  - time {Date|string|number}  时间戳或日期对象
  - format {string}  格式化字符串，年：Y，月：M，日：D，时：h分，m，秒：s，周：w 默认：'Y-M-D h:m:s'

- 返回值：

  {string} 格式化后的日期

- 示例：

```js
jstk.formatDate(Date())
// 2022-06-13 17:30:49
jstk.formatDate(new Date().getTime(),'Y/M/D h:m:s w')
// 2022/06/13 17:30:49 星期一
jstk.formatDate('2020-01-01 12:23:23','h:m:s w')
// 12:23:23 星期三
```

#### getTimeSlot

- 说明：

根据步长获取时间间隔

- 参数：

  - step {number} 间隔 单位分钟

- 返回值：

  {Array} 时间间隔数组

- 示例：

```js
jstk.getTimeSlot(240)
// ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
```

#### formatHMS

- 说明：

秒转时分秒

- 参数：

  - s {number} 秒数

- 返回值：

  {string}

- 示例：

```js
jstk.formatHMS(3600)
// 60m0s
```

#### getDays

- 说明：

获取指定长度的天数集合

- 参数：

  - time {Date|string} 时间戳或日期对象
  - len {number} 长度
  - dir  方向 1: 前几天;  2: 后几天;  3:前后几天 (默认)

- 返回值：

  {string[]} 日期集合

- 示例：

```js
// 当前 2022-6-15
jstk.getDays(new Date(),3,1)
// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15']
jstk.getDays(new Date(),3,2)
// ['2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']
jstk.getDays(new Date(),3,3)
// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']
```

#### getMonthOfDays

- 说明：  

  获得某月天数

- 参数：

  - year {number} 年份
  - month {number} 月份
  
- 返回值：

  {number} 天数

- 示例：

```js
jstk.getMonthOfDays(2022,6)
// 30
```

#### getYearOfDays

- 说明：

获取某年天数

- 参数：

  - time {number|string|Date} 年份或new Date()

- 返回值：

  {number} 天数

- 示例：

```js
jstk.getYearOfDays(2022)
// 365
```

#### getMonths

- 说明：

获取指定长度的月份集合

- 参数：

  - time {Date|string|number} 时间
  - len {number} 长度
  - dir {number} 1: 前几个月;  2: 后几个月;  3:前后几个月 (默认)

- 返回值：

  {string[]} 月份集合

- 示例：

```js
jstk.getMonths('2022-3',4,1)
// ['2021-12', '2022-1', '2022-2', '2022-3']
jstk.getMonths('2022-3',4,2)
// ['2022-3', '2022-4', '2022-5', '2022-6']
jstk.getMonths('2022-3',4,3)
// ['2021-12', '2022-1', '2022-2', '2022-3', '2021-3', '2021-4', '2021-5', '2021-6']
```

#### getQuarterStartMonth

- 说明：

获得本季度的开始月份

- 参数：

  - 

- 返回值：

  {number} 月份 1 - 12

- 示例：

```js
// 2021-01-01
jstk.getQuarterStartMonth()
// 1
```

#### getDayOfYear

- 说明：

获取某个日期是当年中的第几天

- 参数：

  - time {Date|String} 时间

- 返回值：

  {number}

- 示例：

```js
jstk.getDayOfYear('2022-6-15')
// 165
```

#### getDayOfYearWeek

- 说明：

获取某个日期在这一年的第几周

- 参数：

  - time {Date|String} 时间

- 返回值：

  {number}

- 示例：

```js
jstk.getDayOfYearWeek('2022-6-15')
// 24
```

#### getWeekStartDate

- 说明：

获得本周、上周、下周的开始日期

- 参数：

  - type {number} -1:上周  0:本周(默认)  1:下周

- 返回值：

  {string} 开始日期

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

#### getMonthStartDate

- 说明：

获得本月或指定月份的开始日期

- 参数：

  - y {string|number} 年
  - m {string|number} 月

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getMonthStartDate(2022,6)
// 2022-06-01

```

#### getMonthEndDate

- 说明：

获得本月或指定月份的结束日期

- 参数：

  - y {string|number} 年
  - m {string|number} 月

- 返回值：

  {string}

- 示例：

```js
jstk.getMonthEndDate(2022,6)
// 2022-06-30
```

#### getQuarterStartDate

- 说明：

获得本月或指定月份的结束日期

- 参数：

  - y {string|number} 年
  - m {string|number} 月

- 返回值：

  {string} 日期

- 示例：

```js
jstk.getMonthEndDate(2022,6)
// 2022-06-30
```

#### getQuarterStartDate

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

#### getQuarterEndDate

- 说明：

获得本季度的结束日期

- 参数：

  -

- 返回值：

  {string}

- 示例：

```js
// 2022-6-16
jstk.getQuarterEndDate()
// 2022-06-30
```

#### getYearStartDate

- 说明：

获得本年的开始日期

- 参数：

  -

- 返回值：

  {string}

- 示例：

```js
jstk.getYearStartDate()
// 2022-01-01
```

#### getYearEndDate

- 说明：

获得本年的结束日期

- 参数：

  -

- 返回值：

  {string}

- 示例：

```js
jstk.getYearEndDate()
// 2022-12-31
```

#### getFirstOrLastDayOfYear

- 说明：

获取某年第一天或最后一天

- 参数：

  - year {string|number} 年份
  - type {number} 类型 -1：第一天,1：最后一天

- 返回值：

  {string}

- 示例：

```js
jstk.getFirstOrLastDayOfYear(2022)
// 2022-01-01
jstk.getFirstOrLastDayOfYear(2022,1)
// 2022-12-31
```

#### getBeforeDate

- 说明：

获取近三天、近一周、近一个月日期（包含当天）

- 参数：

  - len {number} 天数 1：当天 默认 3：近三天 7：近7天，30：近30天

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

### Http

#### _ajax

- 说明：

XMLHttpRequest 简易封装成 ajax 请求

- 参数：

  - setting {Object} 配置
    - url {string} 请求地址
    - method {string} 请求类型，默认为 GET
    - async {boolean} 是否异步，默认为 true
    - data {Object} 请求参数
    - dataType {string} 返回数据类型，默认为 json
    - success {Function} 成功回调
    - error {Function} 失败回调


- 示例：

```js
jstk._ajax({
  method:"post", // 请求方式
  url:"http://baidu.com",  // 请求地址
  async:true, // 是否异步
  dataType:"JSON", // 解析方式
  data:{ // 参数
    name:"zs"
  },
  success:function (res){ // 请求成功回调
    console.log(res)
  },
  error:function (err){ // 请求失败回调
    console.log(err)
  }
})
```

#### _fetch

- 说明：

封装 fetch 请求

- 参数：

  - url {string} 请求地址
  - setting {Object} 配置
    - method {string} 请求类型，默认为 GET
    - headers {Object} 请求头
    - credentials {string} 请求凭证 
    - body {Object} 请求参数 （post 使用body作为参数传值）
    - mode {string} 请求模式
    - redirect {string} 请求重定向
    - cache {string} 请求缓存
    - data {Object} 请求参数 （get，post都可以）
  - {Promise\<unknown\>} 返回 Promise 对象

- 返回值：

  {Promise\<unknown\>} 返回 Promise 对象

- 示例：

```js
jstk._fetch("http://baidu.com",{
  method: "post",
  headers: {
    "Content-Type":"application/json" // 设置请求头
  },
  credentials: "include",
  // body: JSON.stringify({name:123}),
  mode: 'no-cors',
  redirect: 'follow',
  cache: 'default',
  dataType: 'json',
  data:{
    name:"zs"
  }
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```

### Inspect

#### isType

- 说明：

类型判断

- 参数：

  - type {string} 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol
  - val {any} 值

- 返回值：

  {boolean} 是否符合类型

- 示例：

```js
isType("String", "123")
// true
```


#### isString

- 说明：

判断是否字符串

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isString('123')
// true
jstk.isString(123)
// false

```

#### isNumber

- 说明：

判断是否数字

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isNumber(123)
// true
jstk.isNumber("123")
// false
```

#### isBoolean

- 说明：

判断是否 boolean

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isBoolean(true)
// true
jstk.isBoolean(123)
// false
```

#### isFunction

- 说明：

判断是否函数

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isFunction(()=>{})
// true
```

#### isNull

- 说明：

判断是否为 null

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isNull(null)
// true
```

#### isUndefined

- 说明：

判断是否 undefined

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isUndefined(undefined)
// true
```

#### isObject

- 说明：

判断是否对象

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isObject({})
//  rue
```

#### isArray

- 说明：

判断是否数组

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isArray([])
// true
```

#### isDate

- 说明：

判断是否时间

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isDate(new Date())
// true
```

#### isRegExp

- 说明：

判断是否正则

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isRegExp(/\d+/)
// true
```

#### isError

- 说明：

判断是否错误对象

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isError(new Error())
// true
```

#### isSymbol

- 说明：

判断是否 Symbol 函数

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isSymbol(Symbol())
// true
```

#### isPromise

- 说明：

判断是否 Promise 对象

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPromise(Promise.resolve())
// true
```

#### isSet

- 说明：

判断是否 Set 对象

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isSet(new Set())
// true
```

#### isFalse

- 说明：

判断是否为 false

- 参数：

  - o {any} 任意类型

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

#### isTrue

- 说明：

判断是否为 true

- 参数：

  - o {any} 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jstk.isTrue(true)
// true
```

#### isIos

- 说明：

判断当前环境是否为ios苹果手机

- 返回值：

  {boolean}

- 示例：

```js
jstk.isIos()
```

#### getMobileEnv

- 说明：

获取当前属于哪种类型手机运行环境

- 返回值：

  {string|boolean}

- 示例：

```js
jstk.getMobileEnv()
```

#### isPC

- 说明：

判断当前环境是否为 PC 端

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPC()
```

#### getBrowserType

- 说明：

获取浏览器类型

- 返回值：

  {string}

- 示例：

```js
jstk.getBrowserType()
```

#### checkPwdLv

- 说明：

检测密码强度

- 参数：

  - str {string}

- 返回值：

  {number} 级别 0-4

- 示例：

```js
jstk.checkPwdLv("123456")
// 2
```

#### verifyFormatIsCorrect

- 说明：

检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确

- 参数：

  - str {string} 检查的字符串
  - type {string} 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english, chinese, lower, upper, HTML

- 返回值：

  {boolean}

- 示例：

```js
jstk.verifyFormatIsCorrect("15061709876", "phone")
// true
jstk.verifyFormatIsCorrect("025-1234567","tel")
// true
// ...
```

#### isCardID

- 说明：

严格的身份证校验

- 参数：

  - sId {string} 身份证号码

- 返回值：

  {boolean}

- 示例：

```js
jstk.isCardID("350524199010109876")
// false
```

#### isPCBroswer

- 说明：

判断是否是PC浏览器

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPCBroswer()
// true
```

### Storage

#### setLocal

- 说明：

设置 localStorage

- 参数：

  - key {string} 键
  - val {any} 值

- 示例：

```js
jstk.setLocal("name", "zhangsan")
```

#### getLocal

- 说明：

获取 localStorage

- 参数：

  - key {string} 键

- 示例：

```js
jstk.getLocal("name")
// "zhangsan"
```

#### removeLocal

- 说明：

清除某个 localStorage

- 参数：

  - key {string} 键

- 示例：

```js
jstk.removeLocal("name")
```

#### clearLocal

- 说明：

清除所有 localStorage

- 示例：

```js
jstk.clearLocal()
```

#### setSession

- 说明：

设置 sessionStorage

- 参数：

  - key {string} 键
  - val {any} 值

- 示例：

```js
jstk.setSession("name", "zhangsan")
```

#### getSession

- 说明：

获取 sessionStorage

- 参数：

  - key {string} 键

- 返回值：

  {any} 值

- 示例：

```js
jstk.getSession("name")
// "zhangsan"
```

#### removeSession

- 说明：

清除某个 sessionStorage

- 参数：

  - key {string} 键

- 示例：

```js
jstk.removeSession("name")
```

#### clearSession

- 说明：

清除所有 sessionStorage

- 示例：

```js
jstk.clearSession()
```

#### setCookie

- 说明：

设置 cookie

- 参数：

  - name {string} 键
  - value {any} 值
  - options {Object} 配置
    - expires {number} 过期时间，单位：秒
    - path {string} 路径
    - domain {string} 域名

- 示例：

```js
jstk.setCookie("name", "zhangsan", {
  expires: 3600,
  path: "/",
  domain: "www.baidu.com"
})
```

#### getCookie

- 说明：

获取 cookie

- 参数：

  - name {string} 键

- 返回值：

  {string|string}

- 示例：

```js
jstk.getCookie("name")
```

#### removeCookie

- 说明：

删除某个 cookie

- 参数：

  - name {string} 键

- 示例：

```js
jstk.removeCookie("name")
```

### Dom

#### $

- 说明：

查找dom元素，类似jquery的$

- 参数：

  - selector {string} 选择器

- 返回值：

  {HTMLElement} 元素

- 示例：

```js
jstk.$("#id")
jstk.$(".class")
jstk.$("div")
```

#### hasClass

- 说明：

检测类名，校验指定元素的类名是否包含指定的类名

- 参数：

  - ele {Dom} 元素
  - name {string} 类名

- 返回值：

  {}

- 示例：

```html
<div id="e" class="a b"></div>
<script>
  jstk.hasClass(jstk.$("#e"),'a')
  // ['a ', '', ' ', index: 0, input: 'a b', groups: undefined]
</script>
```

#### addClass

- 说明：

添加类名

- 参数：

  - ele {Dom} 元素
  - name {string} 类名
 
- 返回值：

  {}

- 示例：

```html
<div id="e" class="a b"></div>
<script>
  jstk.addClass(jstk.$("#e"),"c")
  // <div id="e" class="a b c"></div>
</script>
```

#### removeClass

- 说明：

删除类名

- 参数：

  - ele {Dom} 元素
  - name {string} 类名

- 示例：

```html
<div id="e" class="a b c"></div>
<script>
  jstk.removeClass(jstk.$("#e"),"c")
  // <div id="e" class="a b"></div>
</script>
```

#### replaceClass

- 说明：

替换类名

- 参数：

  - ele {Dom} 元素
  - newName {string} 新类名
  - oldName {string} 旧类名

- 示例：

```html
<div id="e" class="a b c"></div>
<script>
  jstk.replaceClass(jstk.$("#e"),"c","d")
    // <div id="e" class="a b d"></div>
</script>
```

#### siblings

- 说明：

获取兄弟节点

- 参数：

  - ele {Dom} 元素

- 返回值：

  {*[]}  兄弟节点数组

- 示例：

```js
jstk.siblings(jstk.$("#e"))
// [<div id="e" class="a b c"></div>]
```

#### getByStyle

- 说明：

获取行间样式属性

- 参数：

  - ele {Dom} 元素
  - name {string} 属性名

- 返回值：

  {*} 属性值

- 示例：

```html
<div id="e" style="color:red;"></div>
<script>
  jstk.getByStyle(jstk.$("#e"),"color") 
  // "red"
</script>
```

#### elInsertAfter

- 说明：

在指定元素之后插入新元素

- 参数：

  - el {Dom} 元素
  - htmlString {string} 插入元素

- 示例：

```js
jstk.elInsertAfter(jstk.$("#e"),"<div>123</div>")
```

#### elInsertBefore

- 说明：

在指定元素之前插入新元素

- 参数：

  - el {Dom} 当前元素
  - htmlString {string} 插入元素

- 示例：

```js
jstk.elInsertBefore(jstk.$("#e"),"<div>123</div>")
```

### File

#### getBlobType

- 说明：

根据文件名称（有文件类型） 查询对应blob type

- 参数：

  - name {string} 名称，例如："image/png"

- 返回值：

  {string} blob type

- 示例：

```js
jstk.getBlobType(".image/png")
// "text/xml"
```

#### downloadFile

- 说明：

根据文件名称（带类型名称）和二进制数据流下载文件

- 参数：

  - name {string} 文件名称（带类型）
  - blobFile {sring} 二进制文件

- 返回值：

  {boolean} 是否下载成功

- 示例：

```js
downloadFile("a.png","....")
```

### Other

#### resizeFont

- 说明：

根据窗口大小自适应字体大小 用于大屏图表中的文案字体大小计算

- 参数：

  - val {number} 字体大小
  - initWidth {number} 初始宽度

- 返回值：

  {number} 返回计算后字体大小

- 示例：

```js
jstk.resizeFont(16,1920)
```



