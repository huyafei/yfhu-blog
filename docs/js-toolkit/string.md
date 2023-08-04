# 字符串

## desensitization

- 说明：

字符串脱敏

- 添加版本：1.1.0-beta.11

- 参数：

    - {(string|number)} str 需要脱敏字符串
    - {number} [startIndex=0] 脱敏起始位置
    - {number} [endIndex=0] 脱敏结束位置
    - {string} [char="*"] 脱敏字符

- 返回值：

  {string} 已脱敏字符串

- 示例：

```js
const str = " my name is lilei-lei fromChina "
jstk.desensitization(str, 5, 7)
// my n**e is lilei-lei fromChina 
jstk.desensitization(15063946854, 3, 7, 'x')
// 150xxxx6854
```

## trim

- 说明：

	去除字符串空格

- 添加版本：1.1.0-beta.11

- 参数：

    - {string} str 需要去除空格的字符串
    - {number} [type=2] 类型 1:所有空格  2:前后空格(默认)  3:前空格 4:后空格

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
const str = " my name is lilei-lei fromChina "
jstk.trim(str, 1)
// mynameislilei-leifromChina
jstk.trim(str, 2)
// my name is lilei-lei fromChina
jstk.trim(str, 3)
// my name is lilei-lei fromChina 
jstk.trim(str, 4)
//  my name is lilei-lei fromChina
```

## toUpperCaseFirst

- 说明：

	字符串首字母转大写

- 添加版本：1.1.0-beta.11

- 参数：

    - {string} str 要转换的英文字符串

- 返回值：

  {string} 已转换的英文字符串

- 示例：

```js
const str = "my name is lilei-lei fromChina "
jstk.toUpperCaseFirst(str)
// My name is lilei-lei fromChina 
```

## toUpperCase

- 说明：

	字符串转大写

- 添加版本：1.1.0-beta.11

- 参数：

    - {string} str 要转换的字符串
    - {number} [type=1] 类型 1:全部大写(默认)  2:每个单词首字母大写（单词剩余部分不转） 3:每个单词首字母大写（单词剩余部分转小写）

- 返回值：

  {string} 已转换的字符串

- 示例：

```js
const str = " my name is lilei-lei fromChina "
jstk.toUpperCase(str)
//  MY NAME IS LILEI-LEI FROMCHINA 
jstk.toUpperCase(str, 2)
//  My Name Is Lilei-Lei FromChina 
jstk.toUpperCase(str, 3)
//  My Name Is Lilei-Lei Fromchina 
```

## toLowerCase

- 说明：

	字符串转小写

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str 要转换的字符串
  - {number} [type=1] 类型 1:全部小写(默认)  2:每个单词首字母小写（剩余部分不转） 3:每个单词首字母小写（剩余部分转大写）

- 返回值：

  {string} 已转换的字符串

- 示例：

```js
const str = " MY NAME IS LILIEI-LEI FROMcHINA "
jstk.toLowerCase(str)
//  my name is liliei-lei fromchina 
jstk.toLowerCase(str, 2)
//  mY nAME iS lILIEI-lEI fROMcHINA 
jstk.toLowerCase(str, 3)
//  mY nAME iS lILIEI-lEI fROMCHINA 
```

## filterHtmlTag

- 说明：

	过滤 html代码(把 <、> 和 & 转换)

- 添加版本：1.1.0-beta.11

- 参数：

    - {string} str html字符串

- 返回值：

  {string}

- 示例：

```js
let str = "<div>这是一段文字</div>";
jstk.filterHtmlTag(str)
// &lt;div&gt;这是一段文字&lt;/div&gt;
```

## randomCode

- 说明：

	生成随机验证码

- 参数：

    - {number} [length=4] 随机验证码的长度，默认4位
    - {(string|number)} checkCode 当前随机码（防止重复）

- 返回值：

  {string} 随机验证码

- 示例：

```js
jstk.randomCode()
// F1Fo
```

## findCharCount

- 说明：
  查找某个词或字符在字符串中出现次数

- 添加版本：1.1.0-beta.11

- 参数：    
	- {string} str 字符串
  - {string} key 要查找的词或字符

- 返回值：  
  {number} 出现次数

- 示例：

```js
const str = " my name is lilei-lei fromChina "
findCharCount(str,'i') // 5
```

## padStart

- 说明：

	字符串补全（开头）

- 添加版本：1.1.0-beta.11

- 参数：

    - {(string|number)} str 字符串
    - {number} targetLength 目标长度
    - {string} padString 补全字符

- 返回值：

  {string} 补全后的字符串

- 示例：

```js
jstk.padStart(9, 2, '0')
// 09
```

## padEnd

- 说明：

	字符串补全（尾部）  

- 添加版本：1.1.0-beta.11

- 参数：

    - {(string|number)} str 字符串
    - {number} targetLength 目标长度
    - {string} padString 补全字符

- 返回值：

  {string} 补全后的字符串

- 示例：

```js
jstk.padEnd(150, 11, '*')
// 150********
```
