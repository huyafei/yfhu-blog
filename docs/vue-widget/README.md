# 开始

::: tip
该组件库使用 Vue 2.x 开发
:::

## 介绍

[@vensst/vue-widget](https://github.com/vensst/vue-widget) 是个人封装的vue组件库

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
Vue.use(VueWidget);

// 配置方式
// Vue.use(VueWidget, {
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
Vue.use(VueWidget.Captcha);
Vue.use(VueWidget.Drag);
Vue.use(VueWidget.Signature);
Vue.use(VueWidget.VueLazyload, { // 配置与 vue-lazyload 配置一样
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 1,
});
Vue.use(VueWidget.Table, {
  components: ["Button"], // 按需引入vxe-table里组件
  // components:'all', // 为 all 则会全部引入
  options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
});

// 按需引入指令
import {drag} from "@vensst/vue-widget/src/directives/index.js";

Vue.directive("drag", drag);
```




## 自定义table主题
与官网一致，你可以通过修改scss变量来自定义主题，具体参考[vxe-table主题](https://vxetable.cn/v3/#/table/start/theme)
```scss
   // 修改scss变量
      $vxe-font-size: 14px;
      $vxe-font-color: #666;
      $vxe-primary-color: #409eff;
      $vxe-table-font-color: $vxe-font-color;
      $vxe-table-border-color: #e8eaec;
      $vxe-table-border-radius: 4px;
      // ...

      @import '@vensst/vue-widget/src/styles/table.scss';
```
