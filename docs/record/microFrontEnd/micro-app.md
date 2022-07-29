# micro-app

::: tip 提示
以下操作流程是以 vue2.x 为示例，其它详细请参考 [micro-app](https://micro-zoe.github.io/micro-app/docs.html#/) 官方文档。  
[示例源码](https://github.com/huyafei/micro-app-demo)  
在 `micro-app` 中，分为基座和子应用，就是 `qiankun` 中主应用和微应用的区别。
:::

## 说明
新建两个项目 vue2-main 和 vue2-child-histroy，分别作为基座和子应用，且路由模式都是 `history` 模式。

基本目录结构如下：

![基本目录结构](/static/images/microFrontEnd/micro-app_01.jpg)

**备注：**  
图中额外的可以不用管，只需新建两个项目 vue2-main 和 vue2-child-histroy，其它是配合使用 `npm-run-all` 
插件使用的，可参考源码结构。

## 快速上手

### 基座

#### 1. 安装依赖

:::: code-group
::: code-group-item yarn
```shell
yarn add @micro-zoe/micro-app
```
:::
::: code-group-item npm
```shell
npm install @micro-zoe/micro-app --save
```
:::
::::

#### 2. 在入口文件 `main.js` 引入

```js
import microApp from '@micro-zoe/micro-app'
microApp.start()
```

#### 3. 新建 `micro-app-history.vue` 页面，并分配一个路由给子应用

```js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/micro-app-history/*", // vue-router@4.x path的写法为：'/micro-app-history/:page*'
    name: "micro-app-history",
    component: () =>
      import(
        /* webpackChunkName: "micro-app-history" */ "../views/micro-app-history.vue"
        ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

```
**备注：**  
- 新建的页面名字避免与 MicroApp 一样最好不一样。
- 基座路由模式为 `history` 模式

#### 4. 在 `MicroAppHistory` 页面中嵌入子应用
```vue
<template>
  <div class="">
    <h1>子应用</h1>
    <!--
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:8083/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
       -->
    <micro-app
      name="vue2-child-history"
      url="http://localhost:8083/"
      baseroute="/micro-app-history"
    ></micro-app>
  </div>
</template>
<script>
export default {
  name: "MicroAppHistory",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped></style>

```


### 子应用

#### 1. 在子应用 `src` 目录下创建名称为 `public-path.js` 的文件，并在入口文件 `main.js` 中引入，`public-path.js` 内容如下：

```js
// public-path.js
// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
}
```

`main.js` 引入
```js
import './public-path'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```

#### 2. 设置基础路由(如果基座应用是history路由，子应用是hash路由，这一步可以省略)

```js
// ... 其它代码
const router = new VueRouter({
  mode: "history",
  // 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes,
});
// ... 其它代码
```

#### 3. 在 `vue.config.config.js` 中配置 `webpack-dev-server` 的 `headers` 中设置跨域支持

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8083,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

```

#### 4. 监听卸载，在 `main.js` 中添加如下代码：

```js 
// main.js
// ... 其它代码
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 监听卸载操作
window.addEventListener("unmount", function () {
  app.$destroy();
});
```

## 数据通信

### 基座向子应用发送数据
两种方式：
#### 1. 通过 `data` 属性传递数据
```vue
<template>
  <div class="">
    <h1>基座-内部展示</h1>
    <!--
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:8083/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
        data(可选)：传递给子应用的数据
       -->
    <micro-app
      name="vue2-child-history"
      url="http://localhost:8083/"
      baseroute="/micro-app-history"
      :data="microAppData"
    ></micro-app>
  </div>
</template>
<script>
export default {
  name: "MicroAppHistory",
  components: {},
  data() {
    return {
      microAppData: {
        msg: "hello micro-app-history",
      },
    };
  },
};
</script>
```

#### 2. 通过 `setData` 手动发送数据局
```js
import microApp from '@micro-zoe/micro-app'

// 发送数据给子应用 vue2-child-history，setData第二个参数只接受对象类型
microApp.setData('vue2-child-history', { msg: "hello micro-app-history"})
```
**备注：**  
第一个参数是应用的名称，第二个参数是要发送的数据

### 子应用获取来自基座数据
两种方式：
#### 1. 直接获取
```js
const data = window.microApp.getData() // 返回基座下发的data数据
```

#### 2. 绑定监听函数
```js
function dataListener (data) {
  console.log('来自基座应用的数据', data)
}

/**
 * 绑定监听函数，监听函数只有在数据变化时才会触发
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 * !!!重要说明: 因为子应用是异步渲染的，而基座发送数据是同步的，
 * 如果在子应用渲染结束前基座应用发送数据，则在绑定监听函数前数据已经发送，在初始化后不会触发绑定函数，
 * 但这个数据会放入缓存中，此时可以设置autoTrigger为true主动触发一次监听函数来获取数据。
 */
window.microApp.addDataListener(dataListener: Function, autoTrigger?: boolean)

// 解绑监听函数
window.microApp.removeDataListener(dataListener: Function)

// 清空当前子应用的所有绑定函数(全局数据函数除外)
window.microApp.clearDataListener()
```
**备注：**  
- 绑定监听函数，window.microApp.addDataListener(dataListener: Function, autoTrigger?: boolean)
  - dataListener: 绑定函数
  - autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
- 解绑监听函数，window.microApp.removeDataListener(dataListener: Function)
  - dataListener: 绑定函数
- 清空当前子应用的所有绑定函数(全局数据函数除外)，window.microApp.clearDataListener()

![绑定数据监听函数](/static/images/microFrontEnd/micro-app_02.png)

### 子应用向基座发送数据
```js
// dispatch只接受对象作为参数
window.microApp.dispatch({type: '子应用发送的数据'})
```
### 基座获取子应用数据
基座应用获取来自子应用的数据有三种方式：

#### 1.直接获取数据
```js
import microApp from '@micro-zoe/micro-app'

const childData = microApp.getData(appName) // 返回子应用的data数据
```
**备注：**  
appName: 子应用的名称

#### 2. 监听自定义事件 (datachange)
```js
<template>
  <micro-app
    name='my-app'
    url='xx'
    // 数据在事件对象的detail.data字段中，子应用每次发送数据都会触发datachange
    @datachange='handleDataChange'
  />
</template>

<script>
export default {
  methods: {
    handleDataChange (e) {
      console.log('来自子应用的数据：', e.detail.data)
    }
  }
}
</script>
```


#### 3. 绑定监听函数
```js
import microApp from '@micro-zoe/micro-app'

function dataListener (data) {
  console.log('来自子应用my-app的数据', data)
}

/**
 * 绑定监听函数
 * appName: 应用名称
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 */
microApp.addDataListener(appName: string, dataListener: Function, autoTrigger?: boolean)

// 解绑监听my-app子应用的函数
microApp.removeDataListener(appName: string, dataListener: Function)

// 清空所有监听appName子应用的函数
microApp.clearDataListener(appName: string)
```
