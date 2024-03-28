# Empty 空内容

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Empty);
```


::: demo

  ```vue
<template>
  <div style="height: 100vh">
    <VenEmpty style="height: 320px"></VenEmpty>
    <VenEmpty style="height: 320px;">
      没有数据
    </VenEmpty>
  </div>
</template>
  ```

:::

## 属性

| 参数          | 说明    | 类型     | 可选值 | 默认值 |
|-------------|-------|--------|-----|--|
| text        | 空内容文案 | String | --  | 暂无数据 |
| height | 高度    | String | --  | 100% |
| minHeight | 最小高度  | String | --  | 320px |

## 插槽

| name    | 说明     |
|---------|--------|
| default | 自定义空内容 |
