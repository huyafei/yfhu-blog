# 开始

::: tip 提示
基于 vuepress 2.x 教程，帮助开发者快速上手。详细请参考[vuepress官方教程](https://v2.vuepress.vuejs.org/zh/guide/)
:::

## 手动安装

1. 创建并进入一个新目录

```shell
mkdir vuepress-demo
cd vuepress-demo
```

2. 初始化项目

```shell
npm init
```

3. 安装本地开发依赖

```shell
npm install -D vuepress@next
```

4. 在 `package.json` 中添加一些 `scripts`

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

5. 创建你的第一篇文档

- 新建 `docs` 文件夹
- 在 `docs` 文件夹下新建 `README.md` 文件，内容如下：

```markdown
# vueper 标题
```

6. 运行

```shell
npm run docs:dev
```

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown
文件时，浏览器中的内容也会自动更新。
