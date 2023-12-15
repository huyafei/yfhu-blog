/*
* @Name: enhanceApp
* @description: enhanceApp.js
* @Date: 2023/4/19 14:29
* @Author: yf_hu
* @LastEditors: yf_hu
* @LastEditTime: 2023/4/19 14:29
* */

export default ({Vue, options, router, siteData, isServer}) => {
  Vue.mixin({
    created() {

      import('@vensst/vue-widget').then((m) => {
        Vue.use(m.default,{
          table: {
            components: ["Button"], // 按需引入组件
            // components:'all', // 为 all 则会全部引入
            options: {}, // 表格配置项 参考 https://vxetable.cn/v3/#/table/start/global
          }
        });
      });
    },
    mounted() {
    },
  });

}
