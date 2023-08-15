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
        Vue.use(m.default);
      });
    },
    mounted() {
    },
  });

}
