# 数学

## add

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

## subtract

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

## multiply

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

## divide

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

## sum

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

## average

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

## max

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

## min

- 说明：

获取数组中取最小值

- 参数：

    - {number[]} arr 数组

- 返回值：

  {number} 最小值

- 示例：

```js
let arr = [1, 2, 3]
jstk.max(arr)
// 1
```

## ceil

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

## floor

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

## decimal

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

## round

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