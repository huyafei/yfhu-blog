export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 4,
      "title": "guide页面",
      "slug": "guide页面",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1655722971000,
    "contributors": [
      {
        "name": "yfhu",
        "email": "879649442@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
}

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
