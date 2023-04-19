// import {defineUserConfig, defaultTheme} from 'vuepress'
// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
//
// import {pwaPlugin} from '@vuepress/plugin-pwa'


const config = {
  //导航
  nav: [
    {text: '指南', link: '/guide/'},
    {
      text: '插件',
      items: [
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
      items: [
        {text: 'vensst', target: '_blank', link: 'https://github.com/vensst'},
        {text: 'huyafei', target: '_blank', link: 'https://github.com/huyafei'},
      ]
    },
  ],

  //侧边
  sidebarDepth: 3, //左侧导航显示的层级
  smoothScroll: true, // 启用页面滚动效果

  // 多语言配置 https://v1.vuepress.vuejs.org/zh/guide/i18n.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE

  sidebar: {
    '/guide/': [
      {
        title: '指南',
        collapsable: false,
        children: [
          '',
        ],
      },
    ],
    '/js-toolkit/': [
      {
        title: "js-toolkit文档",
        collapsable: false,
        children: [
          "",
          "/js-toolkit/api.md",
        ]
      },
    ],
    '/vue-widget/': [
      {
        title: "vue-widget文档",
        collapsable: false,
        children: [
          "",
          {
            title: "组件",
            collapsable: false,
            children: [
              "/vue-widget/components/VenDrag.md",
              "/vue-widget/components/VenCaptchaOrdinary.md",
              "/vue-widget/components/VenCaptchaSlide.md",
            ]
          },
          {
            title: "指令",
            collapsable: false,
            children: [
              "/vue-widget/directives/drag.md",
            ]
          }
        ]
      },
    ],
    '/cli/': [
      {
        title: "cli文档",
        collapsable: false,
        children: [
          "",
        ]
      },
    ],
    '/record/': [
      {
        title: '笔记',
        collapsible: false,
        children: [
          '',
          "/record/vue/",
          "/record/node/",
          "/record/nginx/",
          "/record/webpack/",
        ],
      },
      {
        title: 'VuePress',
        collapsible: false,
        children: [
          '/record/vuepress/',
          '/record/vuepress/vuepress-guide.md',
        ],
      },
      {
        title: '微前端',
        collapsible: false,
        children: [
          '/record/microFrontEnd/',
          '/record/microFrontEnd/qiankun.md',
          '/record/microFrontEnd/micro-app.md',
        ]
      },
      {
        title: 'Java',
        collapsible: true,
        children: [
          '/record/java/',
          '/record/java/001_简介.md',
          '/record/java/002_环境搭建.md',
          '/record/java/003_java开发和运行过程.md',
          '/record/java/004_DOS基础知识.md',
          '/record/java/005_java基础.md',
          '/record/java/006_变量和数据类型.md',
          '/record/java/007_java运算符.md',
          '/record/java/008_java控制语句.md',
          '/record/java/009_数组.md',
          '/record/java/010_方法.md',
          {
            title: '面向对象',
            collapsible: true,
            children: [
              '/record/java/011_面向对象.md',
              '/record/java/012_封装.md',
              '/record/java/013_static和this.md',
              '/record/java/014_继承.md',
              '/record/java/015_覆盖.md',
              '/record/java/016_多态.md',
              '/record/java/017_super.md',
              '/record/java/018_包(package).md',
              '/record/java/019_访问权限.md',
              '/record/java/020_Object类.md',
              '/record/java/021_final关键字.md',
              '/record/java/022_抽象类.md',
              '/record/java/023_接口.md',
            ]
          },
        ],
      },
    ]
  }
}


module.exports = {
  base: '/yfhu-blog/', // 这是部署到github相关的配置
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
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'vensst',
      description: '为开发者提供搭建项目模板脚手架、ui组件库、js工具库'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vensst',
      description: '为开发者提供搭建项目模板脚手架、ui组件库、js工具库'
    }
  },

  //Markdown 拓展
  markdown: {
    lineNumbers: true, //代码块显示行号
    extractHeaders: ['h2', 'h3']
  },
  //主题
  themeConfig: {
    locales: {
      // 英文
      '/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: 'English',
        ...config
      },
      // 中文
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        ...config
      },
    },


  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    'demo-container', // https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/
  ]
}
