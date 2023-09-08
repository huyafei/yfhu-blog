# css

## 盒子模型

[盒子模型](https://www.w3.org/TR/CSS2/box.html)（Box Model），CSS 框模型描述了矩形框，这些矩形框是 为文档中的元素生成
树并根据视觉格式进行布局 模型。
html在渲染时会将每个元素都看成一个矩形盒子，这个盒子包含了元素的内容width、内边距padding、边框border和外边距margin。

![盒子模型 浏览器查看图](/static/images/css/browser_box_model.png)
![盒子模型](/static/images/css/box_model.png)

盒子模型分为W3C标准盒子模型和IE怪异盒子模型

### W3C标准盒子模型

标准盒子模型 width = 内容宽度、height = 内容高度，width/height不包含padding和border。  
盒子模型的总宽度 = width + padding + border + margin，  
盒子模型的总高度 = height + padding + border + margin

![标准盒子模型](/static/images/css/box_model_bz.png)

### IE怪异盒子模型

怪异盒子模型 width = 内容宽度 + padding + border、height = 内容高度 + padding + border，width/height包含padding和border。  
盒子模型的总宽度 = width + margin，  
盒子模型的总高度 = height + margin

![怪异盒子模型](/static/images/css/box_model_ie.png)

### 如何设置统一盒子模型

css中box-sizing属性用于更改用于计算元素宽度和高度的默认的CSS盒子模型。可以使用此属性来模拟不正确支持CSS盒子模型规范的浏览器的行为。
box-sizing属性可以设置为以下值：

- content-box：默认值。标准盒子模型，width/height不包含padding和border
- border-box：怪异盒子模型，width/height包含padding和border
- inherit：规定应从父元素继承 box-sizing 属性的值

将box-sizing设置为border-box，可以使得width/height包含padding和border，这样就不用再计算width/height了，直接设置width/height就可以了。

## background

### 四个角背景颜色点缀

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
		.c {
			background: #2d2d2d;
			padding: 20px;
		}

		.bg {
			width: 500px;
			height: 300px;
			background: linear-gradient(#B7E4EA, #B7E4EA) left top,
			linear-gradient(#B7E4EA, #B7E4EA) left top,
			linear-gradient(#B7E4EA, #B7E4EA) right top,
			linear-gradient(#B7E4EA, #B7E4EA) right top,
			linear-gradient(#B7E4EA, #B7E4EA) left bottom,
			linear-gradient(#B7E4EA, #B7E4EA) left bottom,
			linear-gradient(#B7E4EA, #B7E4EA) right bottom,
			linear-gradient(#B7E4EA, #B7E4EA) right bottom,
			linear-gradient(#0B2639, #0B2639);
			background-repeat: no-repeat;
			background-position: 0px 0px,
			0px 0px,
			0px 100%,
			0px 100%,
			100% 0px,
			100% 0px,
			100% 100%,
			100% 100%,
			0px 0px;
			background-size: 2px 10px,
			10px 2px,
			2px 10px,
			10px 2px,
			2px 10px,
			10px 2px,
			2px 10px,
			10px 2px,
			calc(100% - 0px) calc(100% - 0px);
		}
	</style>
</head>
<body>
<div class="c">
	<div class="bg">

	</div>
</div>
</body>
</html>
```

:::



### 图片添加不规则边框
[CSS 给图片加上不规则边框](https://blog.csdn.net/tianyu0_0/article/details/111311778)
::: demo

```vue
<template>
  <div class="img">
    <!-- 边框图片 -->
<!--    	<img src="/docs/record/css/img/border.png">-->
    <!-- 使用背景为边框图片 -->
    <img>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style>
.img {
  width: 400px;
  height: 200px;
  /* 要显示的图片作为背景 */
  background: url('./img/tp.jpg') no-repeat;
  background-size: 100% 100%;
  /* mask所需要的图片  原理是 mask属性会将图片的透明部分不显示，只显示有颜色的部分 */
  -webkit-mask-image: url('./img/mask.png');
  -webkit-mask-size: 100% 100%;
}

.img img {
  width: 100%;
  height: 100%;
  background: url('./img/border.png');
  background-size: 100% 100%;
}
</style>
```

:::

#### 六边形
::: demo
```vue
<template>
  <div class="ven-hexagon">
    <div class="ven-hexagon_box1">
      <div class="ven-hexagon_box2">
        <div class="ven-hexagon_box3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ven-hexagon {
  position: relative;
  visibility: hidden;
  display: inline-block;
}

.ven-hexagon_box1,
.ven-hexagon_box2,
.ven-hexagon_box3,
.overlay {
  width: 280px;
  height: 220px;
  overflow: hidden;
}
.ven-hexagon_box1,
.ven-hexagon_box2 {
  visibility: hidden;
}

.ven-hexagon_box1 {
  transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}

.ven-hexagon_box2 {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}

.ven-hexagon_box3 {
  transform: rotate(-60deg);
  background:url("./img/6s.png") no-repeat 50% center;
  background-size: 226% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
</style>
```
:::
