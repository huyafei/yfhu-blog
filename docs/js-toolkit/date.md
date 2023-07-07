# 日期

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

## formatDate

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

## getTimeSlot

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

## formatHMS

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

## getDays

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

## getMonthOfDays

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

## getYearOfDays

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

## getMonths

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

## getQuarterStartMonth

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

## getDayOfYear

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

## getDayOfYearWeek

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

## getWeekStartDate

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

## getWeekEndDate

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

## getMonthStartDate

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

## getMonthEndDate

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

## getQuarterStartDate

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

## getQuarterEndDate

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

## getYearStartDate

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

## getYearEndDate

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

## getFirstOrLastDayOfYear

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

## doHandleMonth

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

## getBeforeDate

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

## getDatesBetween

- 说明：

获取两个日期之间的所有日期

- 参数：

    - {*} startDate 开始日期
    - {*} endDate 结束日期

- 返回值：

  {*[]} 日期数组

- 示例：

```js
jstk.getDatesBetween('2022-1-1', '2022-1-5')
// ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05']
```

