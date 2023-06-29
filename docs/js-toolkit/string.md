# 字符串

## strHideCode

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

## strTrim

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

## uppercaseFirst

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

## strEnChangeCase

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

## strFilterHtmlTag

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

## randomCode

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
