module.exports = {
  //网站的标题
  title: '风畔博客',
  //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '个人在学习或开发过程中所遇到的问题及解决办法',
  //额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?]
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  port: "9523",
  //Markdown 拓展
  markdown: {
    lineNumbers: true //代码块显示行号
  },
  //主题
  themeConfig: {
    //导航
    nav: [
      {text: 'GitHub', target: '_blank', link: 'https://github.com/huyafei?tab=repositories'},
      {
        text: '友情链接',
        items: [
          {text: '百度一下', target: '_blank', link: 'https://www.baidu.com'},
          {text: 'vuepress', target: '_blank', link: 'https://vuepress.vuejs.org/zh/'},
        ]
      },
    ],
    //侧边
    sidebarDepth: 2, //左侧导航显示的层级
    smoothScroll: true,
    sidebar: [
      {
        title: '前端',
        collapsable: false,
        children: [
          ['/view/web/html/', 'Html'],
          ['/view/web/css/', 'CSS'],
          ['/view/web/js/', 'JS'],
        ]
      },
      {
        title: '后端',
        collapsable: false,
        children: [
          ['/view/backend/java/', 'Java'],
        ]
      },
      {
        title: '浏览器',
        collapsable: false,
        children: [
          ['/view/browser/storage/', '数据存储'],
        ]
      }
    ]
  },
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
}
