# Table 表格

::: tip
该组件是基于[vxe-table](https://vxetable.cn/v3/#/table/start/install)二次封装，主要用于项目中列表分页功能，简化处理分页逻辑部分代码，
当然你也可以当作普通表格使用。
:::

## 使用

表格配置项参考 vxe-table[全局参数](https://vxetable.cn/v3/#/table/start/global)

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
// 全部引入及配置
Vue.use(VueWidget, {
  table: {
    components: ["Button"], // 按需引入vxe-table里组件
    // components:'all', // 为 all 则会全部引入
    options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
  },
});

// 按需引入及配置
// Vue.use(VueWidget.Table, {
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
        :rowConfig="{ isCurrent: false, isHover: true }"
        :stripe="true"
        :edit-config="{ trigger: 'click', mode: 'cell' }"
        :pageFieldOptions="{
        dataPath: 'data',
        data: 'records',
      }"
        :mergeRowFields="['age']"
        @row-click="cellClickEvent"
    >
      <template #age_edit="{ row }">
        <vxe-input v-model="row.age"></vxe-input>
      </template>
      <template #operation="scope">
        <vxe-button @click="getRow(scope)">按钮</vxe-button>
        <vxe-button @click="getRow(scope)">按钮</vxe-button>
      </template>
    </VenTable>
    <VenTable
        :tableData="tableData"
        :tableColumn="tableColumn"
        ref="tableRef"
        :tree-config="{
        transform: true,
        rowField: 'id',
        parentField: 'parentId',
      }"
        :edit-config="{ trigger: 'click', mode: 'cell' }"
        :isPage="false"
    >
      <template #age_edit="{ row }">
        <vxe-input v-model="row.age"></vxe-input>
      </template>
      <template #operation="scope">
        <vxe-button @click="getRow(scope)">按钮</vxe-button>
        <vxe-button @click="getRow(scope)">按钮</vxe-button>
      </template>
    </VenTable>
  </div>
</template>

<script>
  const {random} = window.jsToolkit
  // 模拟分页请求
  const listApi = function ({size = 10, current = 1}) {
    return new Promise((resolve) => {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push({
          id: i,
          name: "会飞的鱼" + i,
          name2: "会飞的鱼" + i,
          name3: "会飞的鱼" + i,
          age: random(28, 30, false),
          contact1: "会跑的鱼" + random(0, 5, false),
          contact2: "会跳的鱼" + random(0, 5, false),
        });
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
        tableColumn: [
          {
            type: "checkbox",
            width: 60,
          },
          {
            type: "seq",
            title: "序号",
            width: 60,
          },
          {
            field: "name",
            title: "姓名",
            minWidth: 160,
            "show-overflow": "ellipsis",
            "tree-node": true,
          },
          {
            field: "name2",
            title: "姓名2",
            minWidth: 160,
            formatter: function ({cellValue}) {
              return cellValue + 66;
            },
          },
          {
            field: "name3",
            title: "姓名3",
            minWidth: 160,
            "show-overflow": "title",
          },
          {
            field: "age",
            title: "年龄",
            minWidth: 100,
            sortable: true,
            slots: {
              edit: "age_edit",
            },
            "edit-render": {},
          },
          {
            title: "紧急联系人",

            children: [
              {
                field: "contact1",
                title: "名称3",
                minWidth: 120,
              },
              {
                field: "contact2",
                title: "名称4",
                minWidth: 120,
              },
            ],
          },
          {
            title: "操作",
            width: 160,
            fixed: "right",
            slots: {
              default: "operation",
            },
          },
        ],
        tableData: [
          {
            id: "1",
            parentId: null,
            name: "张**",
            name2: "张**",
            name3: "张**",
            age: 26,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "11",
            parentId: "1",
            name: "张**",
            name2: "张**",
            name3: "张**",
            age: 26,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "12",
            parentId: "1",
            name: "张**",
            name2: "张**",
            name3: "张**",
            age: 26,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "2",
            parentId: null,
            name: "李**",
            name2: "李**",
            name3: "李**",
            age: 24,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "21",
            parentId: "2",
            name: "李**",
            name2: "李**",
            name3: "李**",
            age: 24,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "5",
            parentId: null,
            name: "溢出省略，李**李**李**李**李**李**李**李**李**李**李**李**李**",
            name2: "换行，李**李**李**李**李**李**李**李**李**李**李**李**李**",
            name3:
                "溢出省略，鼠标悬浮显示tooltip，李**李**李**李**李**李**李**李**李**李**李**李**李**",
            age: 24,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "3",
            parentId: null,
            name: "王**",
            name2: "王**",
            name3: "王**",
            age: 28,
            contact1: "王**",
            contact2: "李**",
          },
          {
            id: "4",
            parentId: null,
            name: "赵**",
            name2: "赵**",
            name3: "赵**",
            age: 28,
            contact1: "王**",
            contact2: "李**",
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
        console.log("点击行", e);
      },
      getRow(scope) {
        console.log("点击操作按钮：", scope);
      },
    },
  };
</script>

<style scoped></style>

```

:::

## 自定义主题

与官网一致，你可以通过修改 scss 变量来自定义主题，具体参考[vxe-table 主题](https://vxetable.cn/v3/#/table/start/theme)

```scss
// 修改scss变量
$vxe-font-size: 14px;
$vxe-font-color: #666;
$vxe-primary-color: #409eff;
$vxe-table-font-color: $vxe-font-color;
$vxe-table-border-color: #e8eaec;
$vxe-table-border-radius: 4px;
// ...

@import "@vensst/vue-widget/src/styles/table.scss";
```

## 属性

除以下属性你还可以使用[vxe-table 插件 API 中的 vxe-table 的所有 Props](https://vxetable.cn/v3/#/table/api)
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------------------|---------------|----------|-----|------|
| isPage | 是否显示分页 | Boolean | -- | true |
| tableDataApi | 获取表格数据接口函数 | Function | -- | -- |
| formData | 表单数据（接口参数） | Object | -- | -- |
| tableData | 表格数据 | Array | -- | -- |
| tableColumn | 表格列配置，参考[vxe-column](https://vxetable.cn/v3/#/column/api)属性 | Array | -- | -- |
| mergeRowFields | 合并行字段 | Array\<string\> | -- | -- |
| pageFieldOptions | 分页组件字段配置，参考如下 | Object | -- | -- |
| pageOptions | 分页组件配置，参考如下 | Object | -- | -- |

### pageFieldOptions

| 参数               | 说明                  | 类型   | 可选值 | 默认值  |
| ------------------ | --------------------- | ------ | ------ | ------- |
| dataPath           | 数据路径，例如：'a.b' | String | --     | --      |
| data               | 数据字段              | String | --     | data    |
| total              | 总数字段              | String | --     | total   |
| size               | 每页条数字段          | String | --     | size    |
| current            | 当前页字段            | String | --     | current |
| pages              | 总页数字段            | String | --     | pages   |
| defaultCurrentPage | 默认当前页值          | Number | --     | 1       |
| defaultSize        | 默认分页大小值        | Number | --     | 10      |

### pageOptions

除以下属性你还可以使用[vxe-table 插件 API 中的 vxe-pager 的所有 Props](https://vxetable.cn/v3/#/pager/api)

| 参数       | 说明       | 类型   | 可选值 | 默认值                                                      |
| ---------- | ---------- | ------ | ------ | ----------------------------------------------------------- |
| background | 背景颜色   | String | --     | --                                                          |
| layouts    | 自定义布局 | Array  | --     | ["PrevPage", "JumpNumber", "NextPage", "FullJump", "Sizes", "Total"], |


## 插槽

| name       | 说明            |
|------------|---------------|
| empty | 自定义表格空数据时显示模板 |
| loading    | 自定义表格加载中模板    |
| left    | 自定义分页左侧模板     |
| right    | 自定义分页右侧模板     |
