# js

## js 中 == 和 === 的区别

- == 会自动转换类型，再比较值是否相等
- === 不会转换类型，直接比较值是否相等
- 除了 == null 之外，其他情况都应该使用 ===
- 如果两个操作数都是对象，则比较它们是不是指向同一个对象
- 如果一个操作数是 null 或 undefined，则比较它们是否都是 null 或 undefined
- 如果两个操作数是不同类型的，就会尝试在比较之前将它们转换为相同类型

## 装饰器 Decorator

装饰器 Decorators 是一个函数，用来修改类的行为。装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。装饰器目前处于
ECMAScript 提案阶段，但是 Babel 转码器已经支持。[详细参考](https://es6.ruanyifeng.com/#docs/decorator)

### 类方法的装饰

方法的装饰器用来装饰类的方法，它的第一个参数target是类的原型对象，第二个参数name是所要装饰的属性名，第三个参数descriptor是该属性的描述对象。

下面是一个普通的类方法装饰器，使用装饰器后，会在调用前打印出参数。

```js

const logParams = function (target, name, descriptor) {
    const orgFunc = descriptor.value
    descriptor.value = function (...args) {
        console.log('参数为', args)
        orgFunc.apply(this, args)
    }
}

class Math {
    @logParams add(a, b) {
        return a + b
    }
}

const math = new Math()
const result = math.add(1, 2)
console.log('结果为', result)

```

如果需要添加参数可以写成以下形式：

```js
const logParams = function (type) {
    return function (target, name, descriptor) {
        const orgFunc = descriptor.value
        descriptor.value = function (...args) {
            console.log('参数为', args)
            orgFunc.apply(this, args)
        }
    }
}

class Math {
    @logParams('log') add(a, b) {
        return a + b
    }
}

const math = new Math()
const result = math.add(1, 2)
console.log('结果为', result)
```

## clientWidth/Height/Left/Top、offsetWidth/Height/Left/Top和scrollWidth/Height/Left/Top

::: demo

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 300px;
            padding: 20px;
            border: 10px solid #8cfab2;
            overflow: auto;
            background: #ddd;
            margin: 30px;
        }

        .b2 {
            width: 500px;
            height: 500px;
            background: #f6e5d2;
        }
    </style>
</head>
<body>
<div class="box">
    <div class="b2"></div>
</div>
</body>
</html>

```

:::

**备注：**

- 绿色：border
- 灰色：padding
- 橙色：content

### clientWidth/Height/Left/Top

#### clientWidth、clientHeight

clientWidth/Height是元素的`可视区域`宽度/高度，包含元素的padding，但不包括border、margin和滚动条宽度。

![img.png](/static/images/js/clientWH.png)

clientWidth = width + paddingLeft + paddingRight - 垂直滚动条宽度;  
clientHeight = height + paddingTop + paddingBottom - 水平滚动条高度;

**备注：**  
不同浏览器滚动条的宽度不一样，所以clientWidth/Height的值也不一样。

#### clientLeft、clientTop

clientLeft/Top是元素的border-left左边框宽度/border-top上边框宽度，不包括左边框的margin。

### offsetWidth/Height/Left/Top

#### offsetWidth、offsetHeight

offsetWidth/Height是元素的`可视区域`宽度/高度，包含元素的padding、border，但不包括margin和滚动条宽度。

![img.png](/static/images/js/offsetWH.png)

offsetWidth = width + paddingLeft + paddingRight + borderLeft + borderRight;  
offsetHeight = height + paddingTop + paddingBottom + borderTop + borderBottom;

#### offsetLeft、offsetTop

offsetLeft/Top是元素的左上角相对于offsetParent父元素左上角的偏移量，不包括父元素的border。
如果父元素没有定位，则是相对于body的偏移量。如果父元素有定位，则是相对于父元素的偏移量。

### scrollWidth/Height/Left/Top

#### scrollWidth、scrollHeight

scrollWidth/Height是元素的`内容区域`宽度/高度，包含元素的padding，但不包括border、margin和滚动条宽度。

![img.png](/static/images/js/scrollWH.png)

scrollWidth = width + paddingLeft + paddingRight;
也就是图中的橙色区域的内容宽度+左右灰色padding宽度。  
scrollHeight = height + paddingTop + paddingBottom;
也就是图中的橙色区域的内容高度+上下灰色padding宽度。

#### scrollLeft、scrollTop

scrollLeft/Top是元素的内容区域相对于元素左上角的偏移量，不包括元素的border。

![滚动条偏移量](/static/images/js/scrollLF.png)
