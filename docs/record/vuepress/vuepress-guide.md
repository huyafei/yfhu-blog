# 实现类似 element-ui 文档代码预览功能

::: tip
使用插件 [vuepress-plugin-demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)
::: 

# 实现类似 element-ui 文档代码预览功能

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


