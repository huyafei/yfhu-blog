# Table 表格

::: tip
该组件是基于[vxe-table](https://vxetable.cn/v3/#/table/start/install)二次封装，主要用于项目中列表分页功能，简化处理分页逻辑部分代码，
当然你也可以当作普通表格使用。
:::

## 使用

表格配置项参考vxe-table[全局参数](https://vxetable.cn/v3/#/table/start/global)

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
// 全部引入及配置
Vue.use(VueWidget, {
  table: {
    components: ["Button"], // 按需引入vxe-table里组件
    // components:'all', // 为 all 则会全部引入
    options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
  }
})

// 按需引入及配置
// Vue.use(VenWidget.Table, {
//   components: ["Button"], // 按需引入vxe-table里组件
//   // components:'all', // 为 all 则会全部引入
//   options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
// });
```

::: demo

```vue

<template>
  <div>
    <VenTable
        :tableDataApi="listApi"
        :formData="formData"
        :tableColumn="tableColumn"
        :pageFieldOptions="{
        dataPath: 'data',
        data: 'records',
      }"
        @row-click="cellClickEvent"
    >
      <template #operation="scope">
        <button @click.stop="getRow(scope)">按钮</button>
        <button @click.stop="getRow(scope)">按钮</button>
      </template>
    </VenTable>
  </div>
</template>

<script>
// 模拟分页请求
const listApi = function ({size = 10, current = 1}) {
  return new Promise((resolve) => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({id: i, name: "zs" + i});
    }
    setTimeout(() => {
      resolve({
        data: {
          records: arr.slice((current - 1) * size, (current - 1) * size + size),
          total: arr.length,
          size: size,
          current: current,
          pages:
              arr.length % size === 0 ? arr.length / size : arr.length / size + 1,
        },
        // data: {
        //   records: [],
        //   total: arr.length,
        //   size: size,
        //   current: current,
        //   pages: arr.length % size === 0 ? arr.length / size : arr.length / size + 1,
        // },
      });
    }, Math.floor(Math.random() * 1000));
  });
};

export default {
  name: "Table",
  title: "表格",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      formData: {
        cjmc: "",
        cjbs: "",
        dateTime: [],
      },
      listApi,
      tableData: [],
      tableColumn: [
        {key: 1, type: "seq", title: "序号", width: 60},
        {key: 2, field: "name", title: "名称1", minWidth: 160},
        {
          key: 3,
          title: "操作",
          width: 160,
          fixed: "right",
          slot: "operation",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    cellClickEvent(e) {
      console.log(e);
    },
    getRow(scope) {
      console.log(scope);
    },
  },
};
</script>

<style scoped></style>

```

:::

## 属性

除以下属性你还可以使用[vxe-table插件API中的vxe-table的所有Props](https://vxetable.cn/v3/#/table/api)
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------------------|---------------|----------|-----|------|
| isPage | 是否显示分页 | Boolean | -- | true |
| isPageLeft | 是否显示分页左侧 | Boolean | -- | true |
| tableDataApi | 获取表格数据接口函数 | Function | -- | -- |
| formData | 表单数据（接口参数） | Object | -- | -- |
| tableData | 表格数据 | Array | -- | -- |
| tableColumn | 表格列 | Array | -- | -- |
| mergeRowFields | 合并行字段 | Array | -- | -- |
| pageFieldOptions | 分页组件字段配置，参考如下 | Object | -- | -- |
| pageOptions | 分页组件配置，参考如下 | Object | -- | -- |

### pageFieldOptions

| 参数                 | 说明            | 类型     | 可选值 | 默认值     |
|--------------------|---------------|--------|-----|---------|
| dataPath           | 数据路径，例如：'a.b' | String | --  | --      |
| data               | 数据字段          | String | --  | data    |
| total              | 总数字段          | String | --  | total   |
| size               | 每页条数字段        | String | --  | size    |
| current            | 当前页字段         | String | --  | current |
| pages              | 总页数字段         | String | --  | pages   |
| defaultCurrentPage | 默认当前页值        | Number | --  | 1       |
| defaultSize        | 默认分页大小值       | Number | --  | 10      |

### pageOptions

除以下属性你还可以使用[vxe-table插件API中的vxe-pager的所有Props](https://vxetable.cn/v3/#/pager/api)

| 参数         | 说明    | 类型     | 可选值 | 默认值                                                         |
|------------|-------|--------|-----|-------------------------------------------------------------|
| background | 背景颜色  | String | --  | --                                                          |
| layouts    | 自定义布局 | Array  | --  | ["PrevPage", "JumpNumber", "NextPage", "Sizes", "FullJump"] |
