# qiankun
::: tip 提示
以下操作流程是以 vue2.x 为示例，其它详细请参考 [qiankun](https://qiankun.umijs.org/zh/guide) 官方文档。  
[示例源码](https://github.com/huyafei/qiankun-demo)
:::

## 说明
新建两个项目 vue2-main 和 vue2-child-histroy，分别作为主应用和微应用，且路由模式都是 `history` 模式。

## 快速上手

### 主应用

#### 1. 安装 qiankun
:::: code-group
::: code-group-item yarn
```shell
yarn add qiankun
```
:::
::: code-group-item npm
```shell
npm install qiankun -S
```
:::
::::

#### 2. 在主应用中注册微应用
在 `main.js` 中注册微应用，增加如下代码：

```js
// ... 其它代码
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: "vue2-child-history", // 微应用的名称，必选，唯一
    entry: "http://localhost:8083", // 微应用的入口地址,必选
    container: "#micro-app-history-container", // 微应用的容器节点的选择器，必选
    activeRule: "/micro-app-history", // 微应用的激活规则，必选
  },
]);

start();

// ... 其它代码
```

**备注：**
- api详细说明参考：[https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles](https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles)
- name 应用名称，必选，且是唯一的，后续webpack配置中，会使用该名称
- entry 应用入口地址，必选
- container 应用容器节点的选择器，必选
- activeRule 应用激活规则，必选，当前时路由地址匹配，

### 微应用

#### 1. 在 `src` 下新增 `public-path.js` 文件，内容如下：

```js
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```
**备注：**
- 此文件是用于修改运行时的 publicPath。[什么是运行时 publicPath?](https://webpack.docschina.org/guides/public-path/#on-the-fly)
- 使用 esLint 需要加 `// eslint-disable-next-line no-undef`

#### 2.  修改入口文件 `main.js` ,代码如下：

```js
import "./public-path.js";
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

// 页面渲染方法
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/micro-app-history" : "/", // 这里的 base 是为了让 qiankun 的路由生效
    mode: "history", 
    routes,
  });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时就直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}

```
**备注：**
- 引入 `public-path.js` 文件
- 修改入口文件 `main.js`
- `!window.__POWERED_BY_QIANKUN__` 判断是独立运行微应用还是被主应用运行微应用
- 路由的 `base` 要与注册应用的 `activeRule` 一致
- `main.js` 改成上面，那么 `router` 文件下 导出也要改一下 ,导出路由 routes 如下：

```js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // ...
];

export default routes;

```

#### 3. 修改 vue.config.js 中打包配置：

```js
const { name } = require('./package'); // 使用 package.json 中的 name 字段作为微应用的名称（注意要与注册的微应用名称一致）
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', 
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`, // name 与 注册的应用名称一致
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`, // webpack5 废弃
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
};
```

**备注：**
- 使用 `package.json` 中的 `name` 字段作名称要与注册的微应用名称一致
- `jsonpFunction` 在 webpack5 废弃了，使用 `chunkLoadingGlobal` 替代，

## 数据通信

在主应用使用 `initGlobalState(state)` 初始化状态方法，通过 `props` 传给微应用,通过 `setGlobalState(state)` 设置状态，
通过 `offGlobalStateChange()` 移除当前应用的状态监听。

```js
import { initGlobalState } from 'qiankun';
// 初始化 state
let state = {
  // 这里写初始化数据
};
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state); // 设置全局状态
actions.offGlobalStateChange(); // 移除当前应用的状态监听
```

[详细参考](https://qiankun.umijs.org/zh/api#initglobalstatestate)


#### 1. 在主应用 `src` 新增 `actions.js` 文件，代码如下：

```js
import store from "./store";
import { initGlobalState } from "qiankun";
const state = {
  // 这里写初始化数据
  token: "",
};
// 初始化 参数 state
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("主应用状态变化", state, prev);
  store.commit("SET_TOKEN", state.token);
});
export default actions;
```
**备注：**
可以先忽略 store 相关代码

#### 2. 在主应用注册应用处（main.js） 将 `actions` 通过 `props` 传给微应用

```js
// ... 其它代码
import { registerMicroApps, start } from 'qiankun';
import actions from './actions';
registerMicroApps([
  {
    name: "vue2-child-history", // 微应用的名称，必选，唯一
    entry: "http://localhost:8083", // 微应用的入口地址,必选
    container: "#micro-app-history-container", // 微应用的容器节点的选择器，必选
    activeRule: "/micro-app-history", // 微应用的激活规则，必选
    props: {  // 可选，主应用需要传递给微应用的数据。
      actions,
      msg: "hello",
    },
  },
]);

start();

// ... 其它代码
```
#### 3. 在微应用生命周期 mount 中获取通信方法

```js
export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("微应用history状态变化", state, prev);
    store.commit("SET_TOKEN", state.token);
  });

  // 使用 Vue 原型属性
  Vue.prototype.$mainStore = props;
  console.log("[vue] props from main framework", props);
  render(props);
}
```
**备注：**
可以先忽略 store 相关代码

::: tip 提示
以上为开发环境的测试，其它功能、需求、问题请参考 [官方文档](https://qiankun.umijs.org/zh/)
:::
