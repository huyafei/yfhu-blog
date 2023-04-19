---
sidebarDepth: 1
---


# VenCaptchaOrdinary 验证码
普通验证码组件

::: demo
```html
<template>
	<VenCaptchaOrdinary 
      :options="{
        contentWidth: 120,
        contentHeight: 38,
      }" 
      @getCode="getCode">
    </VenCaptchaOrdinary>
</template>
<script>
	export default {
      methods: {
        getCode(val) {
          console.log(val)
        }
      }
	}
</script>
```
:::

## 属性

| 名称 | 类型     | 可选值    | 默认值 | 描述      |
| ---- |--------| -------- |-----|---------|
| options  | Object | --     | --  | 配置，参考如下 |

##### options

| 名称 | 类型     | 可选值   | 默认值         | 描述      |
| ---- |--------|-------|-------------|---------|
| codeStr | string | --    | a-y,A-Y,0-9 | 验证码字符串  |
| codeNum | number | --    | 4           | 验证码数量   |
| contentWidth | number | --    | 112         | 内容宽度    |
| contentHeight | number | --    | 38          | 内容高度    |
| fontSizeMin | number | --    | 18          | 字体最小值   |
| fontSizeMax | number | --    | 40          | 字体最大值   |
| colorMin | number | 0-255 | 50          | 颜色最小值   |
| colorMax | number | 0-255 | 160         | 颜色最大值   |
| backgroundColorMin | number | 0-255 | 180         | 背景颜色最小值 |
| backgroundColorMax | number | 0-255 | 240         | 背景颜色最大值 |
| dotNum | number | --    | 30          | 干扰点数量   |
| dotColorMin | number | 0-255 | 0           | 干扰点颜色最小值 |
| dotColorMax | number | 0-255 | 255         | 干扰点颜色最大值 |
| lineNum | number | --    | 10          | 干扰线数量   |
| lineColorMin | number | 0-255 | 40          | 干扰线颜色最小值 |
| lineColorMax | number | 0-255 | 180         | 干扰线颜色最大值 |

## 事件

| 名称 | 类型     | 描述        |
| ---- |--------|-----------|
| getCode | Function | 点击获取当前验证码 |
