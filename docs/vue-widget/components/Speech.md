---
sidebarDepth: 1
---
# Speech 语音播报

::: tip
该组件基于[Web Speech API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition)
封装简单的语音播报功能
:::

## 使用

```js
import Vue from "vue";
import VueWidget from "@vensst/vue-widget";

Vue.use(VueWidget.Speech);
```

::: demo

```vue
<template>
  <div>
    <input v-model="message">
    <VenSpeech :message="message"></VenSpeech>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻",
      }
    },
  }
</script>
```

:::

## 属性

| 参数      | 说明       | 类型     | 可选值 | 默认值 |
|---------|----------|--------|-----|-----|
| message | 播放文案     | String | --  | --  |
| options | 配置项，参考如下 | Object | --  | --  |

### options

| 参数     | 说明              | 类型     | 可选值 | 默认值  |
|--------|-----------------|--------|-----|------|
| lang   | 语言              | String | --  | 系统语言 |
| volume | 音量，\[0, 1\]     | Number | --  | 1    |
| rate   | 语速 ，\[0.1, 10\] | Number | --  | 1    |
| pitch  | 音高 ，\[0, 2\]    | Number | --  | 1    |

## 事件

| 事件名称       | 说明       | 回调参数 |
|------------|----------|------|
| onstart    | 播放开始时触发  | --   |
| onerror    | 播放错误时触发  | --   |
| onpause    | 播放暂停时触发  | --   |
| onresume   | 播放恢复时触发  | --   |
| onboundary | 播放到边界时触发 | --   |

## 方法

| 事件名称                 | 说明        | 参数 |
|----------------------|-----------|----|
| speak                | 播放        | -- |
| cancel               | 取消播放      | -- |
| pause                | 暂停播放      | -- |
| resume               | 恢复播放      | -- |
| getVoices            | 获取语言声音    | -- |
| getCurrentLangVoices | 获取当前语言的声音 | -- |

## 插槽

| name    | 说明      |
|---------|---------|
| default | 自定义内容模板 |
