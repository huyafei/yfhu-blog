export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/static/images/hero.png\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"@vensst/js-toolkit\",\"details\":\"整合前端一些常用方法。\"},{\"title\":\"@vensst/vue-widget\",\"details\":\"基于vue整合了一些常用的功能组件\"},{\"title\":\"ven-ui\",\"details\":\"基于element-ui@2.15.3改写的ui组件库\"},{\"title\":\"@vensst/cli\",\"details\":\"快速搭建项目的模板脚手架\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present vensst\"},\"headers\":[],\"git\":{\"updatedTime\":1656639476000,\"contributors\":[{\"name\":\"yfhu\",\"email\":\"879649442@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
