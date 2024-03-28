/*
 * @Name: enhanceApp
 * @description: enhanceApp.js
 * @Date: 2023/4/19 14:29
 * @Author: yf_hu
 * @LastEditors: yf_hu
 * @LastEditTime: 2023/4/19 14:29
 * */

export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    // 解决引入自己组件报错document未找到的问题
    // Vue.mixin({
    //   created() {
    // import("@vensst/js-toolkit").then((m) => {
    //   window.jsToolkit = m.default;
    // });
    import("echarts").then((m) => {
      Vue.prototype.$echarts = m;
    });
    import("@vensst/vue-widget").then((m) => {

      Vue.use(m.default, {
        table: {
          components: [
            "Edit",
            "Icon",
            "Button",
            "Colgroup",
            "Tooltip",
            "Input",
            "Select",
            "Pager",
            "Column",
            "Table",
          ], // 按需引入组件
          // components:'all', // 为 all 则会全部引入
          options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
        },
      });
    });
    //   },
    //   mounted() {},
    // });
  }
};
