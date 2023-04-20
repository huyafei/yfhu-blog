/*
* @Name: enhanceApp
* @description: enhanceApp.js
* @Date: 2023/4/19 14:29
* @Author: yf_hu
* @LastEditors: yf_hu
* @LastEditTime: 2023/4/19 14:29
* */
// import VueWidget from "@vensst/vue-widget";

export default ({Vue, options, router, siteData, isServer}) => {
  Vue.mixin({
    mounted() {
      import('@vensst/vue-widget').then((m) => {
        Vue.use(m.default);
      });
    },
  });

}
