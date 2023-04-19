# VenDrag 拖动

拖动组件，兼容pc和移动端。

::: demo

```html

<template>
	<div style="position: relative;width: 300px;height: 300px">
			<VenDrag
				width="100px"
				height="100px"
				right="20px"
				bottom="20px"
				title="Drag me"
				borderRadius="10px"
				@click="clickEvent"
			></VenDrag>
    </div>
</template>
<script>
	export default {
		methods: {
			clickEvent() {
				console.log('click')
			}
		}
	}
</script>
```

:::

### 属性

| 名称 | 类型 | 可选值    | 默认值   | 描述 |
| ---- | ---- | -------- | -------- | ---- |
| title  | string | --     | ven   | 标题文案 |
| isDrag | boolean | --     | true  | 是否拖拽   |
| width  | string | --     | 60px  | 宽度      |
| height | string | --     | 60px  | 高度      |
| left   | string | --     | null  | 左侧外边距边缘 |
| top    | string | --     | null  | 顶部外边距边缘 |
| right  | string | --     | null  | 右侧外边距边缘 |
| bottom | string | --     | null  | 底部外边距边缘 |
| borderRadius | string | -- | null  | 圆角    |
| isRange | boolean | --     |  false | 是否有边界 |

### 事件

| 名称 | 类型 | 描述   |
|------|------|------|
| click | function | 点击事件 |








