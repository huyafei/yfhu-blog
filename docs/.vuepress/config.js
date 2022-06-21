const {defaultTheme} = require('@vuepress/theme-default')
// const {pwaPlugin} = require('@vuepress/plugin-pwa')
const {searchPlugin} = require('@vuepress/plugin-search')

module.exports = {
  base: '/yfhu-blog/', // 这是部署到github相关的配置
  //网站的标题
  title: 'vensst',
  //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '这是一段描述',
  //额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?]
  head: [
    // @vuepress/plugin-pwa 配置
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel: 'icon', href: '/static/images/logo.png'}],
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
          {text: '@vensst/ven-ui', target: '_blank', link: 'https://vensst.github.io/ven-ui/'},
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
    // 中文
    '/': {
      lang: 'zh-CN',
      title: 'Vensst',
      description: 'Vue-powered Static Site Generator',
      sidebar: {
        '/guide/': [
          {
            text: 'guide',
            children: ['/guide/README.md',],
          },
        ],
        '/js-toolkit/': [
          "README.md",
        ],
        '/vue-widget/': [
          '',
        ],
        '/cli/': [
          '',
        ],
        // '/record/':[
        //   {
        //     text: 'html',
        //     path: '/record/html/',
        //     collapsable: true
        //   },
        //   {
        //     text: 'css',
        //     path: '/record/css/',
        //     collapsable: true
        //   },
        //   {
        //     text: 'js',
        //     path: '/record/js/',
        //     collapsable: true
        //   },
        //   {
        //     text: 'browser',
        //     // path: '/record/browser/',
        //     collapsable: false,
        //     children: [
        //       {
        //         text: '数据存储',
        //         path: '/record/browser/storage/'
        //       },
        //     ]
        //   },
        // ]
      }
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
