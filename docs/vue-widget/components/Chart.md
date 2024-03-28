# Chart 图表

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
Vue.use(VueWidget.Chart);

// 引入 echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
```


::: demo

  ```vue
<template>
  <div>
    <button @click="changeData(1)">切换数据1</button>
    <button @click="changeData(2)">切换数据2</button>
    <button @click="noData">没有数据</button>
    <VenChart
        :option="option"
        :emptyOption="{
        text: '亲，没有数据哦！',
        style: {
          fontSize: '24px',
          fontWeight: 800,
        },
      }"
    ></VenChart>
    <VenChart :option="option">
      <template v-slot:empty> 自定义空内容</template>
    </VenChart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        option: {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },
      };
    },
    methods: {
      changeData(type) {
        this.option.series[0].data =
            type === 1 ? [20, 16, 26, 18, 3, 15] : [8, 10, 13, 20, 22, 16];
      },
      noData() {
        this.option.series[0].data = [];
      },
    },
  };
</script>
  ```

:::

## 属性

| 参数     | 说明           | 类型      | 可选值 | 默认值 |
|--------|--------------|---------|-----|-----|
| option     | echarts图表配置项 | Object  | --  | --  |
| emptyOption | 空组件配置项       | Object | --  | --  |

## 插槽

| name  | 说明     |
|-------|--------|
| empty | 自定义空内容 |
