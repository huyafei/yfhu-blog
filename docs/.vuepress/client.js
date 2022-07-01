/**
 * @name: client
 * @description：client.js
 * @date: 2022/6/23 23:17
 * @author: yf_hu
 */
import { defineClientConfig } from '@vuepress/client'

// import VueWidget from "@vensst/vue-widget";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // app.use(VueWidget)
  },
  setup() {},
  rootComponents: [],
})
