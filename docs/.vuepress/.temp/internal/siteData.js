export const siteData = JSON.parse("{\"base\":\"/yfhu-blog/\",\"lang\":\"en-US\",\"title\":\"vensst\",\"description\":\"为开发者提供搭建项目模板脚手架、ui组件库、js工具库\",\"head\":[[\"link\",{\"rel\":\"manifest\",\"href\":\"/yfhu-blog/manifest.json\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/yfhu-blog/static/images/logo.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
