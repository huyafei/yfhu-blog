# 其它

## deepClone

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

## getRandomColor

- 说明：

获取十六进制随机颜色

- 返回值：

  {string} 颜色值

- 示例：

```js
 jstk.getRandomColor() // #2a260b
```

## getScrollPosition

- 说明：

获取当前的滚动位置

- 参数：

    - {string} el 元素 默认window

- 返回值：

  {Object} {x,y} 对象

- 示例：

```js
jstk.getScrollPosition()
```

## smoothScroll

- 说明：

滚动到指定元素区域

- 参数：

    - {string} element

- 示例：

```js
jstk.smoothScroll($('#app'))
```

## scrollToTop

- 说明：

平滑滚动至顶部

- 示例：

```js
jstk.scrollToTop()
```

## btoa

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

## atob

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

## resizeFontSize

- 说明：

根据窗口大小自适应字体大小

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

## resizeViewScale

- 说明：

浏览器窗口变化页面缩放（数据可视化大屏用）[建议使用 initDataView 方法 与之等同]

- 参数：

    - {Object} options 参数 {id, width, height,mode}
    - {string} options.id 元素id
    - {number} options.width 标准/设计稿/实际宽度 默认：1920
    - {number} options.height 标准/设计稿/实际高度 默认：1080
    - {string} options.mode 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)

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

## initDataView

- 说明：

初始化数据可视化容器（用于数据可视化大屏）

- 添加版本： 1.1.0-beta.8

- 参数：

    - {HTMLElement} el 元素
    - {string} options.id 元素id
    - {number} options.width 标准/设计稿/实际宽度 默认：1920
    - {number} options.height 标准/设计稿/实际高度 默认：1080
    - {string} options.mode 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)

- 返回值：

  {}

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
<div id="app-main">
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
	const myDataView = jstk.initDataView(document.getElementById('app-main'))
	window.onresize = function () {
		myDataView.resize()
	}
</script>
</body>
</html>
```

## dayjs

- 说明：

内部引入了dayjs，可以使用dayjs的方法，详情请查看dayjs文档[前往](https://dayjs.gitee.io/zh-CN/)

- 示例：

```js
jstk.dayjs().format()
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'
jstk.dayjs().format("YYYY-MM-DD HH:mm:ss")
// '2020-04-02 08:02:17'
```

## Cookies

- 说明：

内部引入了js-cookie，可以使用js-cookie的方法，详情请查看js-cookie文档[前往](https://github.com/js-cookie/js-cookie#readme)

- 示例：

```js
jstk.Cookies.set("name", "张三", {expires: 1});
jstk.Cookies.get("name")
// "张三"

jstk.Cookies.setJSON("userInfo", {name: "张三", age: 18}, {expires: 7, path: '', domain: '*'})
jstk.Cookies.getJSON("userInfo") // {name: "张三", age: 18}
```

## mathjs

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
