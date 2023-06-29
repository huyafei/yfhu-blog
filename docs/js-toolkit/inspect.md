# 检测

## isType

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

## isString

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

## isNumber

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

## isBoolean

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

## isFunction

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

## isNull

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

## isUndefined

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

## isObject

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

## isArray

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

## isDate

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

## isRegExp

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

## isError

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

## isSymbol

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

## isPromise

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

## isSet

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

## isFalse

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

## isTrue

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

## isIos

- 说明：

判断当前环境是否为ios苹果手机

- 返回值：

  {boolean}

- 示例：

```js
jstk.isIos()
```

## getMobileEnv

- 说明：

获取当前属于哪种类型手机运行环境

- 返回值：

  {string|boolean}

- 示例：

```js
jstk.getMobileEnv()
```

## isPC

- 说明：

判断当前环境是否为 PC 端

- 返回值：

  {boolean}

- 示例：

```js
jstk.isPC()
```

## getBrowserType

- 说明：

获取浏览器类型

- 返回值：

  {string}

- 示例：

```js
jstk.getBrowserType()
```

## checkPwdLv

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

## verifyFormatIsCorrect

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

## isCardID

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

## isPCBroswer

- 说明：

判断是否是PC浏览器

- 返回值：

  {boolean} 是否是PC浏览器

- 示例：

```js
jstk.isPCBroswer()
// true
```
