# VenCaptchaSlide 滑动验证

滑动验证组件（待优化，滑动到最后会触发多次 getVal 事件）

::: demo
```html
<template>
	<VenCaptchaSlide
        :width="300"
        :height="32"
        :btnWidth="34"
		@getVal="getVal">
	</VenCaptchaSlide>
</template>
<script>
	export default {
		methods: {
          getVal(val) {
            console.log(val)
          }
		}
	}
</script>
```
:::

## 属性

| 名称 | 类型       | 可选值    | 默认值   | 描述 |
| ---- |----------| -------- | -------- | ---- |
| width  | number   | --     | 300px  | 宽度      |
| height | number   | --     | 32px  | 高度      |
| btnWidth | number   | --     | 34px  | 按钮宽度      |

## 事件

| 名称 | 类型 | 描述                        |
|------|------|---------------------------|
| getVal | function | 滑动时获取操作状态。返回 true / false |
