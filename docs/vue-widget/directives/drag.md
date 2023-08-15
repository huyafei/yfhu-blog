# v-drag 拖拽

## 使用

```js
import Vue from "vue";
import { drag } from "@vensst/vue-widget/src/directives/index.js";
Vue.directive("drag", drag);
```

::: demo

```vue

<template>
  <div class="" style="height: 300px">
    <div id="boxID" style="position: relative;width: 500px;height: 200px;border: 1px solid #ddd">
      <div class="avatar" v-drag="{ isRange: true,parentElSelector:'#boxID' }">v-drag指令</div>
    </div>
  </div>
</template>
<style>
.avatar {
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 50%;
  background: #ddd;
}
</style>
```

:::

## 参数

| 参数               | 说明      | 类型      | 可选值 | 默认值   |
|------------------|---------|---------|-----|-------|
| isRange          | 是否有拖动边界 | boolean | --  | false |
| parentElSelector | 父级元素选择器 | String  | --  | body  |
