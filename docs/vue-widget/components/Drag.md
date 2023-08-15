# Drag 拖动

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Drag);
```

::: demo

```vue

<template>
  <div class="" style="height: 300px">
    <div id="boxID" style="position: relative;width: 500px;height: 200px;border: 1px solid #ddd">
      <VenDrag class="avatar" style="left: 25%" parentElSelector="#boxID"> 拖拽(有边界)</VenDrag>
    </div>
    <VenDrag class="avatar" :isDrag="false" style="left: 50%">
      禁止拖拽
    </VenDrag>
    <VenDrag class="avatar" :isRange="false" style="left: 75%">
      拖拽(无边界)
    </VenDrag>

    <div class="avatar" v-drag="{ isRange: true }">v-drag指令</div>
  </div>
</template>
<script>
export default {
  methods: {}
}
</script>
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

## 属性

| 参数               | 说明      | 类型      | 可选值 | 默认值   |
|------------------|---------|---------|-----|-------|
| isDrag           | 是否拖拽    | Boolean | --  | true  |
| isRange          | 是否有边界   | Boolean | --  | false |
| parentElSelector | 父级元素选择器 | String  | --  | body  |









