# Signature 电子签名

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Signature);
```

::: demo

  ```vue

<template>
  <div style="width: 300px;height: 300px">
    <VenSignature @save-click="saveImage"></VenSignature>
  </div>
</template>
<script>
export default {
  methods: {
    saveImage(data) {
      console.log(data);
    },
  }
}
</script>
  ```

:::

## 属性

| 参数            | 说明        | 类型            | 可选值 | 默认值  |
|---------------|-----------|---------------|-----|------|
| width         | 宽度        | Number,String | --  | 375  |
| height        | 高度        | Number,String | --  | 200  |
| isButtonGroup | 是否显示按钮组   | Boolean       | --  | true |
| options       | 配置选项，参考如下 | Object        | --  | --   |

### options

| 参数              | 说明     | 类型     | 可选值 | 默认值     |
|-----------------|--------|--------|-----|---------|
| strokeStyle     | 线条颜色   | String | --  | #000000 |
| lineWidth       | 线条粗细   | Number | --  | 4       |
| backgroundColor | 背景颜色   | String | --  | #ffffff |
| lineCap         | 线条两端形状 | String | --  | round   |

## 事件

| 事件名称       | 说明            | 回调参数           |
|------------|---------------|----------------|
| save-click | 点击保存事件，默认下载图片 | (value:string) |
