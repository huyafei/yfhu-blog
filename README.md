```
.
├── docs
│   ├── .vuepress #(可选的) 用于存放全局的配置、组件、静态资源等。
│   │   ├── components     #(可选的) 该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── theme  #(可选的) 用于存放本地主题。
│   │   │   └── Layout.vue
│   │   ├── public     #(可选的) 静态资源目录。
│   │   ├── styles #(可选的) 用于存放样式相关的文件。
│   │   │   ├── index.styl  #将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl    #用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── templates #(可选的, 谨慎配置) 存储 HTML 模板文件。
│   │   │   ├── dev.html    #用于开发环境的 HTML 模板文件
│   │   │   └── ssr.html    #构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── config.js #(可选的) 配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js #(可选的)客户端应用的增强。
│   │ 
│   ├── README.md #首页
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```
### 说明
1. YAML front matter
   front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML，如下：
```markdown
---
title: Blogging with VuePress //指定页面设置标题
lang: zh-CN //指定页面语言
sidebar: false //禁用指定页面侧边栏
navbar: false //禁用指定页面导航
---
```
