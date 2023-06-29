# 数字

## randomNum

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

## numberToChinese

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

## numberCurrencyToChinese

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

## thousandSeparator

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

## numberFormatter

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

## timeAgo

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
