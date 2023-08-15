---
sidebarDepth: 1
---

# Captcha 验证码

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Captcha);
```

::: demo

```vue

<template>
  <div>
    <VenCaptcha type="ordinary" @change="onChange"></VenCaptcha>
    <VenCaptcha type="slide" @change="onChange"></VenCaptcha>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      console.log(e)
    }
  }
}
</script>
```

:::

## 属性

| 参数      | 说明      | 类型     | 可选值            | 默认值      |
|---------|---------|--------|----------------|----------|
| type    | 验证码类型   | String | ordinary,slide | ordinary |
| options | 配置，参考如下 | Object | --             | --       |

### [type=ordinary] options

| 参数                 | 说明       | 类型     | 可选值   | 默认值         |
|--------------------|----------|--------|-------|-------------|
| codeStr            | 验证码字符串   | String | --    | a-y,A-Y,0-9 |
| codeNum            | 验证码数量    | Number | --    | 4           |
| contentWidth       | 内容宽度     | Number | --    | 112         |
| contentHeight      | 内容高度     | Number | --    | 38          |
| fontSizeMin        | 字体最小值    | Number | --    | 18          |
| fontSizeMax        | 字体最大值    | Number | --    | 40          |
| colorMin           | 颜色最小值    | Number | 0-255 | 50          |
| colorMax           | 颜色最大值    | Number | 0-255 | 160         |
| backgroundColorMin | 背景颜色最小值  | Number | 0-255 | 180         |
| backgroundColorMax | 背景颜色最大值  | Number | 0-255 | 240         |
| dotNum             | 干扰点数量    | Number | --    | 30          |
| dotColorMin        | 干扰点颜色最小值 | Number | 0-255 | 0           |
| dotColorMax        | 干扰点颜色最大值 | Number | 0-255 | 255         |
| lineNum            | 干扰线数量    | Number | --    | 10          |
| lineColorMin       | 干扰线颜色最小值 | Number | 0-255 | 40          |
| lineColorMax       | 干扰线颜色最大值 | Number | 0-255 | 180         |

### [type=ordinary] options

| 参数            | 说明   | 类型     | 可选值 | 默认值 |
|---------------|------|--------|-----|-----|
| contentWidth  | 内容宽度 | Number | --  | 300 |
| contentHeight | 内容高度 | Number | --  | 32  |

## 事件

| 事件名称   | 说明       | 回调参数          |
|--------|----------|---------------|
| change | 当前状态变化触发 | （value:string |boolean） |
