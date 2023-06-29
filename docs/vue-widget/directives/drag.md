# v-drag

拖动指令

::: demo

```html

<template>
	<div style="width: 300px;height: 300px">
		<div
			v-drag="{ isRange: false }"
	
		>
			pc/移动端全局指令
		</div>
	</div>
</template>
```
:::

## 参数

| 参数 | 说明      | 类型 | 默认值 |
| ---- |---------| ---- | ---- |
| isRange | 是否有拖动边界 | boolean | false |
