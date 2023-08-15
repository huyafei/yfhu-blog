# 常见问题

## 展示源码和预览功能

::: tip
使用插件 [vuepress-plugin-demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)
:::

::: demo

```html

<template>
  <div class="red-center-text">
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Input something..."/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello Vue'
      }
    }
  }
</script>
<style>
  .red-center-text {
    color: #ff7875;
    text-align: center;
  }
</style>
```

:::

## table样式问题(element ,vxetable)

::: tip
参考[解决vuepress table样式污染(element ,vxetable) 样式错位](https://blog.csdn.net/weixin_44500448/article/details/130087375)
:::

在.vuepress/styles/index.styl中添加

```stylus
vxe-table, .el-table   
  table
    border-collapse unset
    margin unset
    display inherit
    overflow-x unset
  tr
    border-top unset
    &:nth-child(2n)
      background-color unset
  th, td
    border unset
    padding unset
```
