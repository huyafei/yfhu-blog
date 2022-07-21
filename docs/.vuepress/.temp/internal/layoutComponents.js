import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/huyafei/001-GitHub/yfhu-blog/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/huyafei/001-GitHub/yfhu-blog/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
