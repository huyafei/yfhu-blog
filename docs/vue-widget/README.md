# 开始

::: tip
该组件库使用 Vue 2.x 开发
:::

## 介绍

[@vensst/vue-widget](https://github.com/vensst/vue-widget) 是个人常用的vue组件库

## 安装

### 使用npm

```shell
npm install @vensst/vue-widget -S
```

#### 全部引入

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
// import error from "./assets/images/error.jpg";
// import loading from "./assets/images/loading.gif";
Vue.use(VenWidget);

// 配置方式
// Vue.use(VenWidget, {
//   lazy: { // 配置与 vue-lazyload 配置一样
//     preLoad: 1.3,
//     error: error,
//     loading: loading,
//     attempt: 1,
//   },
//   table: {
//     components: ["Button"], // 按需引入vxe-table里组件
//     // components:'all', // 为 all 则会全部引入
//     options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
//   }
// });
```

#### 按需引入

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";
import error from "./assets/images/error.jpg";
import loading from "./assets/images/loading.gif";

// 按需引入组件
Vue.use(VenWidget.Captcha);
Vue.use(VenWidget.Drag);
Vue.use(VenWidget.Signature);
Vue.use(VenWidget.VueLazyload, { // 配置与 vue-lazyload 配置一样
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 1,
});
Vue.use(VenWidget.Table, {
  components: ["Button"], // 按需引入vxe-table里组件
  // components:'all', // 为 all 则会全部引入
  options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
});

// 按需引入指令
import {drag} from "@vensst/vue-widget/src/directives/index.js";

Vue.directive("drag", drag);
```
