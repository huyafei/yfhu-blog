import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-74457188","/cli/",{"title":""},["/cli/index.html","/cli/README.md"]],
  ["v-6bd5191c","/js-toolkit/",{"title":"开始"},["/js-toolkit/index.html","/js-toolkit/README.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-aae6de36","/record/",{"title":""},["/record/index.html","/record/README.md"]],
  ["v-7ea28bd4","/ven-ui/",{"title":""},["/ven-ui/index.html","/ven-ui/README.md"]],
  ["v-e9b146ea","/vue-widget/",{"title":""},["/vue-widget/index.html","/vue-widget/README.md"]],
  ["v-7e8e54f1","/record/css/",{"title":"存储"},["/record/css/index.html","/record/css/README.md"]],
  ["v-5383241f","/record/html/",{"title":"存储"},["/record/html/index.html","/record/html/README.md"]],
  ["v-2ab8a614","/record/java/001%20-%20DOS%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html",{"title":""},["/record/java/001 - DOS基础知识.html","/record/java/001%20-%20DOS%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86","/record/java/001 - DOS基础知识.md","/record/java/001%20-%20DOS%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md"]],
  ["v-2c03db30","/record/java/002%20-%20java%E5%9F%BA%E7%A1%80.html",{"title":""},["/record/java/002 - java基础.html","/record/java/002%20-%20java%E5%9F%BA%E7%A1%80","/record/java/002 - java基础.md","/record/java/002%20-%20java%E5%9F%BA%E7%A1%80.md"]],
  ["v-acb3256e","/record/java/003%20-%20java.html",{"title":""},["/record/java/003 - java.html","/record/java/003%20-%20java","/record/java/003 - java.md","/record/java/003%20-%20java.md"]],
  ["v-51de641b","/record/java/004%20-%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",{"title":""},["/record/java/004 - 数据类型.html","/record/java/004%20-%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B","/record/java/004 - 数据类型.md","/record/java/004%20-%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],
  ["v-5396d088","/record/java/",{"title":""},["/record/java/index.html","/record/java/README.md"]],
  ["v-0859b5fe","/record/js/",{"title":"js文档"},["/record/js/index.html","/record/js/README.md"]],
  ["v-5447e647","/record/webpack/",{"title":""},["/record/webpack/index.html","/record/webpack/README.md"]],
  ["v-7c610490","/web/html/",{"title":"存储"},["/web/html/index.html","/web/html/README.md"]],
  ["v-9a3f249c","/web/js/",{"title":"js文档"},["/web/js/index.html","/web/js/README.md"]],
  ["v-e4b91200","/record/browser/storage/",{"title":"数据存储"},["/record/browser/storage/index.html","/record/browser/storage/README.md"]],
  ["v-4999eb4b","/record/browser/storage/cookie/",{"title":"cookie"},["/record/browser/storage/cookie/index.html","/record/browser/storage/cookie/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
