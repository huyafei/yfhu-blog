/*
 * @Author: yfhu
 * @Date: 2023-10-27 17:23:47
 * @LastEditors: yfhu
 * @LastEditTime: 2023-10-27 17:23:50
 * @Description:
 */
const config = {
  //导航
  nav: [
    {text: '指南', link: '/guide/'},
    {
      text: '插件',
      items: [
        {text: '@vensst/js-toolkit', link: '/js-toolkit/'},
        {text: '@vensst/vue-widget', link: '/vue-widget/'},
        // {text: '@vensst/css-toolkit', link: '/css-toolkit/'},
        {text: '@vensst/cli', link: '/cli/'},
        {text: 'ven-ui', target: '_blank', link: 'https://vensst.github.io/ven-ui/'},
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
    '/css-toolkit/': [
      {
        title: "css-toolkit文档",
        collapsable: false,
        children: [
          "",
        ]
      }
    ],
    '/js-toolkit/': [
      {
        title: "js-toolkit文档",
        collapsable: false,
        children: [
          "",
          "/js-toolkit/number.md",
          "/js-toolkit/string.md",
          "/js-toolkit/array.md",
          "/js-toolkit/object.md",
          "/js-toolkit/date.md",
          "/js-toolkit/function.md",
          "/js-toolkit/dom.md",
          "/js-toolkit/inspect.md",
          "/js-toolkit/math.md",
          "/js-toolkit/storage.md",
          "/js-toolkit/url.md",
          "/js-toolkit/file.md",
          "/js-toolkit/img.md",
          "/js-toolkit/http.md",
          "/js-toolkit/scroll.md",
          "/js-toolkit/window.md",
          "/js-toolkit/other.md",
          "/js-toolkit/thirdpart.md",
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
            title: "功能组件",
            collapsable: false,
            children: [
              "/vue-widget/components/Captcha.md",
              "/vue-widget/components/Drag.md",
              "/vue-widget/components/Signature.md",
              "/vue-widget/components/Table.md",
              "/vue-widget/components/Teleport.md",
              "/vue-widget/components/ContextMenu.md",
              "/vue-widget/components/Speech.md",
            ]
          },
          // {
          //   title: "样式组件",
          //   collapsable: false,
          //   children: [
          //   ]
          // },
          {
            title: "指令",
            collapsable: false,
            children: [
              "/vue-widget/directives/drag.md",
              "/vue-widget/directives/lazy.md",
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
          "/record/html/",
          "/record/css/",
          "/record/js/",
          "/record/vue/",
          "/record/react/",
          "/record/node/",
          "/record/webpack/",
          "/record/github/",
          "/record/linux/",
          "/record/nginx/",
          "/record/docker/",
        ],
      },
      {
        title: 'VuePress',
        collapsible: false,
        children: [
          '/record/vuepress/',
          '/record/vuepress/problem.md',
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
          '/record/java/001.md',
          '/record/java/002.md',
          '/record/java/003.md',
          '/record/java/springBoot/README.md',
          '/record/java/springBoot/knowledge.md',
          '/record/java/004.md',
          '/record/java/005.md',
          '/record/java/006.md',
          '/record/java/007.md',
          '/record/java/008.md',
          '/record/java/009.md',
          '/record/java/010.md',
          '/record/java/011.md',
          {
            title: '面向对象',
            collapsible: true,
            children: [
              '/record/java/012.md',
              '/record/java/013.md',
              '/record/java/014.md',
              '/record/java/015.md',
              '/record/java/016.md',
              '/record/java/017.md',
              '/record/java/018.md',
              '/record/java/019.md',
              '/record/java/020.md',
              '/record/java/021.md',
              '/record/java/022.md',
              '/record/java/023.md',
              '/record/java/024.md',
              '/record/java/025.md',
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
    // @vuepress/pwa 配置  https://developer.mozilla.org/zh-CN/docs/Web/Manifest
    // ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel: 'icon', href: '/static/images/logo.png'}],
    ['script', { src: 'https://unpkg.com/@vensst/js-toolkit'}],
  ],
  // dev 配置
  port: "9523",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'vensst',
      description: '为开发者提供搭建项目模板脚手架、ui组件库、js工具库'
    },
    '/en/': {
      lang: 'en-US',
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
      // 中文
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        ...config
      },
      // 英文
      '/en/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: 'English',
        ...config
      },
    },


  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    'demo-container', // https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/
    // '@vuepress/pwa',
  ]
}
