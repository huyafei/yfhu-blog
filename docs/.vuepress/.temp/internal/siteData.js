export const siteData = {
  "base": "/yfhu-blog/",
  "lang": "en-US",
  "title": "vensst",
  "description": "这是一段描述",
  "head": [
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.json"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "/static/images/logo.png"
      }
    ]
  ],
  "locales": {}
}

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
