# Teleport 模板传送

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Teleport);
```


::: demo

  ```vue

<template>
  <div>
    <div id="test" style="border: 1px solid #ddd">
      <span>我是id为test标签</span>
    </div>
    <VenTeleport to="#test">
      <span>我是Teleport组件内元素，传送到id为test标签内</span>
    </VenTeleport>
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

| 参数     | 说明       | 类型      | 可选值 | 默认值   |
|--------|----------|---------|-----|-------|
| to     | 移到元素的选择器 | String  | --  | --    |
| disabled | 禁用       | Boolean | --  | false |
