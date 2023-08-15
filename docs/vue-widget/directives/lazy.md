# v-lazy 图片懒加载

::: tip
该指令是集成了 [vue-lazyload](https://github.com/hilongjw/vue-lazyload#readme) 依赖。所以你可以使用该依赖指令的所有功能。
:::

## 使用

```js
// main.js
import Vue from "vue";
import VenWidget from "@vensst/vue-widget";
import error from "./assets/images/error.jpg";
import loading from "./assets/images/loading.gif";

// 全部引入及配置
Vue.use(VenWidget, {
  // vue-lazyload 配置
  lazy: {
    preLoad: 1.3,
    error: error,
    loading: loading,
    attempt: 1,
  },
});
// 按需引入及配置
// Vue.use(VenWidget.VueLazyload,, {
// 	preLoad: 1.3,
// 	error: error,
// 	loading: loading,
// 	attempt: 1,
// });

```

```vue

<template>
  <div>
    <img
        v-lazy="
        'http://bpic.588ku.com/element_origin_min_pic/16/10/29/2ac8e99273bc079e40a8dc079ca11b1f.jpg'
      "
        width="200px;"
        height="200px"
    />
  </div>
</template>
```
