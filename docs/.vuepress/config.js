const {defaultTheme} = require('@vuepress/theme-default')
// const {pwaPlugin} = require('@vuepress/plugin-pwa')
const {searchPlugin} = require('@vuepress/plugin-search')

module.exports = {
  base: '/yfhu-blog/', // 这是部署到github相关的配置
  lang: 'en-US', // 默认
  //网站的标题
  title: 'vensst',
  //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '为开发者提供搭建项目模板脚手架、ui组件库、js工具库',
  //额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?]
  head: [
    // @vuepress/plugin-pwa 配置
    ['link', {rel: 'manifest', href: '/yfhu-blog/manifest.json'}],
    ['link', {rel: 'icon', href: '/yfhu-blog/static/images/logo.png'}],
  ],
  // dev 配置
  port: "9523",
  //Markdown 拓展
  markdown: {
    code: {
      lineNumbers: true //代码块显示行号
    },
    extractHeaders: {
      level: [2, 3, 4]
    }
  },
  //主题
  theme: defaultTheme({
    //导航
    navbar: [
      {text: '指南', link: '/guide/'},
      {
        text: '插件',
        children: [
          {text: '@vensst/js-toolkit', link: '/js-toolkit/'},
          {text: '@vensst/vue-widget', link: '/vue-widget/'},
          {text: 'ven-ui', target: '_blank', link: 'https://vensst.github.io/ven-ui/'},
          // {text: '@vensst/ven-ui',link: '/ven-ui/'},
          {text: '@vensst/cli', link: '/cli/'},
          {text: '笔记', link: '/record/'},
        ]
      },
      {
        text: '友情链接',
        children: [
          {text: 'vensst', target: '_blank', link: 'https://github.com/vensst'},
          {text: 'huyafei', target: '_blank', link: 'https://github.com/huyafei'},
        ]
      },
    ],

    //侧边
    sidebarDepth: 3, //左侧导航显示的层级
    // smoothScroll: true,

    locales: {
      // 中文
      '/': {
        // lang: 'zh-CN',
        // title: 'Vensst',
        // description: 'Vue-powered Static Site Generator',
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
              ],
            },
          ],
          '/js-toolkit/': [
            {
              text: "js-toolkit文档",
              children: [
                "/js-toolkit/README.md",
                "/js-toolkit/api.md",
              ]
            },
          ],
          '/vue-widget/': [
            {
              text: "vue-widget文档",
              children: [
                "/vue-widget/README.md",
                {
                  text: "组件",
                  // collapsible: true,
                  children: [
                    "/vue-widget/components/VenDrag.md",
                    "/vue-widget/components/VenCaptchaOrdinary.md",
                    "/vue-widget/components/VenCaptchaSlide.md",
                  ]
                },
                {
                  text: "指令",
                  // collapsible: true,
                  children: [
                    "/vue-widget/directives/drag.md",
                  ]
                }
              ]
            },
          ],
          '/cli/': [
            {
              text: "cli文档",
              children: [
                "/cli/README.md",
              ]
            },
          ],
          '/record/': [
            {
              text: '笔记',
              // collapsible: true,
              children: [
                '/record/README.md',
              ],
            },
            {
              text: 'VuePress',
              collapsible: true,
              children: [
                '/record/vuepress/README.md',
                '/record/vuepress/vuepress-guide.md',
              ],
            },
            {
              text: 'html',
              collapsible: true,
              children: [
                '/record/html/README.md',
              ],
            },
            {
              text: 'css',
              collapsible: true,
              children: [
                '/record/css/README.md',
              ],
            },
            {
              text: 'js',
              collapsible: true,
              children: [
                '/record/js/README.md',
              ],
            },
            {
              text: 'browser',
              collapsible: true,
              children: [
                '/record/browser/README.md',
              ],
            },
            {
              text: 'webpack',
              collapsible: true,
              children: [
                '/record/webpack/README.md',
              ],
            },
            {
              text: 'java',
              collapsible: true,
              children: [
                '/record/java/001_DOS基础知识.md',
                '/record/java/002_java基础.md',
                '/record/java/003_java.md',
                '/record/java/004_数据类型.md',
              ],
            },
          ]
        }
      },
    },


  }),

  plugins: [
    /**
     * https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html
     * 使你的 VuePress 站点成为一个 渐进式 Web 应用 (PWA)
     */
    // pwaPlugin({
    //   serviceWorker: true,
    //   updatePopup: true
    // }),
    /**
     * https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95
     * 搜索
     */
    searchPlugin({
      maxSuggestions: 10,// 搜索框显示的搜索结果数量
    }),

  ]
}
