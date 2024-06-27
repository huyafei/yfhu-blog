# vue

## vue 使用 svg-sprite-loader

1. 安装

   ```shell
   npm install svg-sprite-loader -D
   ```

2. 配置

   ```js
    // vue.config.js
   function resolve (dir){
    return path.join(__dirname,dir)
   }  
   module.exports = {
      chainWebpack: config => {
        // 已有配置排除掉svg
        config.module.rule("svg")
          .exclude.add(resolve('src/icons'));
        //配置svg
        config.module.rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons')).end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({symbolId: 'icon-[name]'})
      }
    }
   ```
3. 在 components 文件夹中 新建 SvgIcon.vue 组件
   ```vue
      <template>
        <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
          <use :xlink:href="iconName" />
        </svg>
      </template>
      
      <script>
      export default {
        name: 'SvgIcon',
        props: {
          iconClass: {
            type: String,
            required: true
          },
          className: {
            type: String,
            default: ''
          }
        },
        computed: {
          iconName() {
            return `#icon-${this.iconClass}`
          },
          svgClass() {
            if (this.className) {
              return 'svg-icon ' + this.className
            } else {
              return 'svg-icon'
            }
          }
        }
      }
      </script>
      
      <style scoped>
      .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      </style>
   
   ```

4. 根目录创建 icons 文件夹,在其中放入 svg 文件夹 和 index.js 文件

- icons/svg 文件夹中放入 svg 文件
- icons/index.js

   ```js
   // index.js

import Vue from "vue"
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

   ```

5. 在 main.js 中引入
   ```js
   import './icons'
   ```

6. 使用
   ```vue
    <template>
      <div>
         <svg-icon icon-class="icon-xxx"></svg-icon>
      </div>
    </template>
   ```

## vue 数据可视化大屏解决方案

### 方式一：使用 scale

[参考@vensst/js-toolkit中initDataView方法](/js-toolkit/api.html#initdataview)

1. 安装
    ```shell
    npm install @vensst/js-toolkit
    ```
2. 使用

   ```html
   
   <template>
       <div class="page">
   
       </div>
   </template>
   <script>
       import {initDataView} from "@vensst/js-toolkit";
   
       export default {
           data() {
               return {
                   myDataView: null,
               }
           },
           mounted() {
               this.myDataView = initDataView(this.$el);
               window.addEventListener("resize", this.initResize);
           },
           beforeDestroy() {
               window.removeEventListener("resize", this.initResize);
           },
           methods: {
               initResize() {
                   this.myDataView.resize();
               }
           }
       }
   </script>
   ```

### 方式二：使用 rem （lib-flexible + postcss-px2rem）

lib-flexible 会根据屏幕宽度动态改变 html 的 font-size 值，通过postcss-px2rem将px转换为rem，从而实现 rem 布局。

1. 安装
   ```shell
   npm install postcss-px2rem --save
   ```

2. 配置

   ```js
   // vue.config.js
   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
           plugins: [
             require('postcss-px2rem')({
               // 以设计稿1920为例， 1920 / 10 = 192
               //remUnit通常我们是根据设计图来定这个值，
               //假如设计图给的宽度是1920，我们通常就会把remUnit设置为192，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
               remUnit: 192,
               selectorBlackList: [".ven"],// 要忽略的选择器并保留为px（正则匹配）。
               propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
               exclude: /node_modules/i // 要忽略并保留为 px 的文件路径
             })
           ]
         }
       }
     }
   }
   ```

3. 新建 flexible.js 文件，复制以下代码，在main.js中引入。  
   为什么要新建？因为原来的lib-flexible，内部 refreshRem 方法内部大于宽度为540px固定以540px不做适配了。

   ```js
   // flexible.js
   (function (win, lib) {
     var doc = win.document;
     var docEl = doc.documentElement;
     var metaEl = doc.querySelector('meta[name="viewport"]');
     var flexibleEl = doc.querySelector('meta[name="flexible"]');
     var dpr = 0;
     var scale = 0;
     var tid;
     var flexible = lib.flexible || (lib.flexible = {});
   
     if (metaEl) {
       console.warn("将根据已有的meta标签来设置缩放比例");
       var match = metaEl
         .getAttribute("content")
         // eslint-disable-next-line no-useless-escape
         .match(/initial\-scale=([\d\.]+)/);
       if (match) {
         scale = parseFloat(match[1]);
         dpr = parseInt(1 / scale);
       }
     } else if (flexibleEl) {
       var content = flexibleEl.getAttribute("content");
       if (content) {
         // eslint-disable-next-line no-useless-escape
         var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
         // eslint-disable-next-line no-useless-escape
         var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
         if (initialDpr) {
           dpr = parseFloat(initialDpr[1]);
           scale = parseFloat((1 / dpr).toFixed(2));
         }
         if (maximumDpr) {
           dpr = parseFloat(maximumDpr[1]);
           scale = parseFloat((1 / dpr).toFixed(2));
         }
       }
     }
   
     if (!dpr && !scale) {
       // eslint-disable-next-line no-unused-vars
       var isAndroid = win.navigator.appVersion.match(/android/gi);
       var isIPhone = win.navigator.appVersion.match(/iphone/gi);
       var devicePixelRatio = win.devicePixelRatio;
       if (isIPhone) {
         // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
         if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
           dpr = 3;
         } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
           dpr = 2;
         } else {
           dpr = 1;
         }
       } else {
         // 其他设备下，仍旧使用1倍的方案
         dpr = 1;
       }
       scale = 1 / dpr;
     }
   
     docEl.setAttribute("data-dpr", dpr);
     if (!metaEl) {
       metaEl = doc.createElement("meta");
       metaEl.setAttribute("name", "viewport");
       metaEl.setAttribute(
         "content",
         "initial-scale=" +
         scale +
         ", maximum-scale=" +
         scale +
         ", minimum-scale=" +
         scale +
         ", user-scalable=no"
       );
       if (docEl.firstElementChild) {
         docEl.firstElementChild.appendChild(metaEl);
       } else {
         var wrap = doc.createElement("div");
         wrap.appendChild(metaEl);
         doc.write(wrap.innerHTML);
       }
     }
   
     // 修改部分
     function refreshRem() {
       var width = docEl.getBoundingClientRect().width;
       // 也可以这样修改，假设设计稿是1920，最小适配1366px，最大适配3840px
       // if (width / dpr < 1366) {
       //   width = 1366 * dpr;
       // } else if (width / dpr > 3840) {
       //   width = 3840 * dpr;
       // }
       // 修改后
       if (width / dpr > 540) {
         width = width * dpr;
       }
       // 修改前（大于540不做适配了）
       // if (width / dpr > 540) {
       //   width = 540 * dpr;
       // }
       var rem = width / 10;
       docEl.style.fontSize = rem + "px";
       flexible.rem = win.rem = rem;
     }
   
     win.addEventListener(
       "resize",
       function () {
         clearTimeout(tid);
         tid = setTimeout(refreshRem, 300);
       },
       false
     );
     win.addEventListener(
       "pageshow",
       function (e) {
         if (e.persisted) {
           clearTimeout(tid);
           tid = setTimeout(refreshRem, 300);
         }
       },
       false
     );
   
     if (doc.readyState === "complete") {
       doc.body.style.fontSize = 12 * dpr + "px";
     } else {
       doc.addEventListener(
         "DOMContentLoaded",
         // eslint-disable-next-line no-unused-vars
         function (e) {
           doc.body.style.fontSize = 12 * dpr + "px";
         },
         false
       );
     }
   
     refreshRem();
   
     flexible.dpr = win.dpr = dpr;
     flexible.refreshRem = refreshRem;
     flexible.rem2px = function (d) {
       var val = parseFloat(d) * this.rem;
       if (typeof d === "string" && d.match(/rem$/)) {
         val += "px";
       }
       return val;
     };
     flexible.px2rem = function (d) {
       var val = parseFloat(d) / this.rem;
       if (typeof d === "string" && d.match(/px$/)) {
         val += "rem";
       }
       return val;
     };
   })(window, window["lib"] || (window["lib"] = {}));
   
   ```

### 方式三：使用 vw、vh

- 设计稿宽度为1920px，高度为1080px；
- 100vw=视口宽度，100vh=视口高度；
- 电脑为16:9标准屏幕下浏览器f11全屏的时候，视口宽度和高度就是1920px和1080px，也就是100vw=视口宽度=1920px，100vh=视口宽度=1080px；
- 假设A块区域在设计稿宽度300px、高度200px，那么在浏览器它的vw宽度就是300px/1920px
  *100vw=15.625vw，vh高度就是200px/1080px*100vh=18.518vh；屏幕放大缩小，A块区域的宽高也会跟着变化，这样就实现了自适应布局。
- 公式：vw = px/设计稿宽度*100vw；vh = px/设计稿高度*100vh；

scss样式写法：
::: demo

```vue

<template>
  <div class="box"></div>
</template>
<style lang="scss">
// 以1920px为基准
$vm_base: 1920; // 设计稿宽度
$vh_base: 1080; // 设计稿高度

@function vw($px) {
  @return ($px / $vm_base) * 100vw;
}

@function vh($px) {
  @return ($px / $vh_base) * 100vh;
}

// 使用
.box {
  width: vw(300px);
  height: vh(200px);
  font-size: vw(20px);
}
</style>
```

:::

## vue 中常用见的报错以及解决方案

::: tip 提示
只记录遇到的或者可能出现的报错以及解决方案
:::

### Syntax Error: Unexpected token

语法错误：意外的标记。一般是语法上的错误，比如少了一个括号，少了一个分号，少了一个引号等等。

#### 排查与解决

1. 是否使用高级语法，可选链运算符（?.）或者空值合并运算符（??）等等

   > 可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。可选链操作符在 ?. 之前的对象为
   > undefined 或 null 时，会短路直接返回 undefined。

![错误1](/static/images/vue/error/error_syntax_error_1.png)

**项目信息：**  
vue2.6.11 + vue-cli4.5

**报错原因：**  
在vue项目template中使用了可选链运算符（?.）,vue2.6不支持可选链运算符（?.）为什么script中可以使用，template中不可以使用呢？
因为template中使用的是vue的模板语法，而vue2.6不支持可选链运算符（?.）,所以会报错。

**解决方案：**

1. 修改写法，不使用可选链运算符（?.）
2. 自定义链式

   ```js
    // 自定义链式
    Vue.prototype.$get = function (obj, chain, defaultValue = undefined) {
      const properties = chain.split('.');
      let current = obj;
      for (let i = 0; i < properties.length; i++) {
         if (current == null) return defaultValue;
         current = current[properties[i]];
      }
      return current;
    };
   ```
3. lodash的get方法代替
4. 升级vue到2.7+版本
5. 如果是低版本的vue，可以使用babel插件来解决（针对js部分)
   ，template模板部分可使用[vue-template-babel-compiler（不是官方的）](https://github.com/JuniorTour/vue-template-babel-compiler#readme)
   ```shell
     npm install --save-dev @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator
   ```
   ```js
    // babel.config.js (package.json同级目录)
   module.exports = {
       plugins: [
           '@babel/plugin-proposal-optional-chaining',
           '@babel/plugin-proposal-nullish-coalescing-operator'
       ]
   }
   ```

**备注**

1. vue3.0+支持可选链运算符（?.）和空值合并运算符（??），vue2中建议template中不使用高阶运算符语法硬要使用的话用2、3方式解决，js中可以使用babel插件解决。

## vite

::: tip 提示

* **HMR** 热模块替换（Hot Module Replacement）它是一种技术，可以在运行时更新应用程序的部分代码而不需要重新加载整个页面或应用程序。
* **ESM**（ES 模块，或者ES6 Module） 2015年 ES6（ECMAScript 6.0 简称 ES6（ECMAScript 是制定 JavaScript 语言的标准组织））
  提出的模块化。
  - 一个js脚本就是一个模块，模块之间可以相互加载，通过 export 和 import 来交换功能，让一个模块可以使用另一个模块的函数或变量。
  - ESM（服务器和浏览器）取代CommonJS（服务器）和 AMD（浏览器），现代浏览器通过<script type="module"></script>
    使用，在之前的浏览器不兼容所以使用垫片Polyfill来处理兼容性问题。

:::
[vite 官网](https://cn.vitejs.dev/guide/why.html)

1. 开发环境编译使用的是 esbuild
  - 冷启动速度快
2. 生产环境打包使用的是 rollup

### 了解vite时引发了解其它知识

#### esbuild 和 rollup

esbuild 和 rollup 都是模块打包工具（构建工具）

1. esbuild
   esbuild 构建工具的核心目标是开创构建工具性能的新时代，同时创建一个易于使用的现代构建工具。

2. rollup
   Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。

- Rollup 基于ESM打包（所以 vite 不只支持commonJs和AMD，要使用得安装插件），打包生成的文件更小。
- 使用 Tree-shaking 去除未使用的代码，减少打包体积。

#### babel

Babel 是一个 JavaScript 的编译器
[core.js && babel](https://www.kancloud.cn/cyyspring/webpack/2376167)

1. Babel、Polyfill、core-js区别：

* Babel：只转化新的语法，不负责实现新版本js中新增的api。将es6转es5
  通过配置 browserslist 需要兼容的浏览器版本，使用Babel将高级语法转化为browserslist中配置的浏览器版本可运行的js语法

* Polyfill：（垫片）实现新版本js中新增的api。
  开发使用es6 api，而低版本浏览器所支持es3 api，那么需要实现一个该方法使其可用，这个方法就是垫片。

* core-js：它是JavaScript标准库的 polyfill（垫片/补丁） ，新功能的 es 'api' 转换为大部分现代浏览器都可以支持运行的一个'api'
  补丁包集合。 从 Babel 7.4.0 开始，@babel/polyfill这个包已经被弃用，取而代之的是直接包含core-js/stable。

**备注：**

* js垫片：意思是在低级环境中用高级语法时，在低级环境中手动实现的高级功能，模拟高级环境。（低浏览器没有高浏览器语法，要自己实现或使用第三方插件来解决，使得可以使用高级浏览器语法）



## 大文件分片上传

- [vue3 + node大文件分片上传(前后端, 包括文件秒传、断点续传)-CSDN博客](https://blog.csdn.net/liyixuanstay/article/details/136660752)

```vue
<template>
  <div class="upload" @click="">
    <input class="upload__input" type="file" @change="handleChange" />
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
import SparkMD5 from "spark-md5";

export default {
  name: "UploadFile",
  components: {},
  props: {},
  data() {
    return {
      file: "",
      chunkSize: 1 * 1024 * 1024, // 1M
      maxUploadNum: 5, // 最大上传数
      progressNum: 0,
    };
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    /**
     * 验证文件是否已经上传，返回状态
     */
    checkFile(fileHash, fileName) {
      // 这里请求接口代码

      //  后端需要的参数（协定），修改位置1
      const data = {
        fileHash,
        fileName,
      };
      //
      return {
        isUpload: false, // 是否已经上传
        existChunks: [], // 已上传的分片
      };
    },
    /**
     * 合并分片
     */
    mergeChunk() {
      // 发送请求合并分片

      // 后端需要的参数（协定），修改位置2
      const data = {
        fileHash: "",
        fileName: "",
        size: "",
      };
    },

    async handleUpload() {
      if (!this.file) {
        return;
      }
      // 分片
      const chunks = this.createChunks(this.file, this.chunkSize);
      console.log(chunks);
      // 计算文件哈希值
      const fileHash = await this.hash(chunks); // 进行哈希加密得到16位字符
      console.log(fileHash);
      // 发送请求，根据文件 hash 值验证文件是否已经上传
      const { isUpload, existChunks } = await this.checkFile(
        fileHash,
        this.file.name
      );
      if (isUpload) {
        this.uploadFile(fileHash, chunks, existChunks);
      }
      this.uploadFile(fileHash, chunks);
    },
    /**
     * 上传文件
     * @param fileHash {string} 文件的hash
     * @param chunks {Array<Blob>} 文件分片
     * @param existChunks 已上传的分片
     */
    async uploadFile(fileHash, chunks, existChunks) {
      //
      const newChunks = chunks.map((chunk, chunkIndex) => {
        return {
          fileHash: fileHash, // 文件的hash: 区分上传的是哪个文件
          chunkHash: fileHash + "-" + chunkIndex, // 切片的 hash
          chunk, // Blob 对象
        };
      });

      /*
       * 每个切片都要有formData对象
       * 过滤过滤掉已上传的切片
       */
      const formDataList = newChunks
        .filter((item) => !existChunks.includes(item.chunkHash))
        .map((item) => {
          const formData = new FormData();
          // 传给后端的 formData 数据（协定）
          formData.append("fileHash", item.fileHash);
          formData.append("chunkHash", item.chunkHash);
          formData.append("chunk", item.chunk);

          return formData;
        });

      const taskPool = [];
      let num = 0; //当前上传的数量

      for (let i = 0; i < formDataList.length; i++) {
        // i: 用来标识当前上传到第几个
        // task: Promise，修改位置2
        const task = fetch("http://127.0.0.1:3000/upload", {
          method: "POST",
          body: formDataList[i],
        });

        // 请求完成从请求池移除
        task.then(() => {
          num++;
          // 进度
          this.progressNum =
            (Math.round((num / formDataList.length) * 100) / 100) * 100;
          taskPool.splice(taskPool.findIndex((item) => item === task));
        });

        taskPool.push(task); // 将每个请求放入请求池数组中

        // 请求池已经达到最大请求数, 需要等待请求池中要有完成的请求(完成一个就行)
        if (taskPool.length === this.maxUploadNum) {
          await Promise.race(taskPool); // 一个完成 promise状态为成功
        }
      }

      // 为了保证请求池中的请求全部完成
      await Promise.all(taskPool);

      // 全部完成后, 通知服务器去合并分片
      this.mergeChunk();
    },

    async handleChange(e) {
      this.file = e.target.files[0];
    },
    /**
     * 计算文件哈希值
     * @param chunks 文件分片
     * @returns {Promise<unknown>}
     */
    hash(chunks) {
      return new Promise((resolve) => {
        const spark = new SparkMD5(); //创建SparkMD5的实例
        const _read = (i) => {
          if (i >= chunks.length) {
            resolve(spark.end()); // 计算结束
            return; // 读取完成
          }
          const blob = chunks[i]; // 获取每一项
          const reader = new FileReader(); // 解析每一块数据
          reader.onload = (e) => {
            const bytes = e.target.result; // 读取到的字节数组
            spark.append(bytes);
            _read(i + 1);
          };
          reader.readAsArrayBuffer(blob);
        };
        _read(0);
      });
    },
    /**
     * 切片,对上传文件进行切片
     * @param file {File} 上传的文件
     * @param chunkSize {number} 切片大小
     * @returns {*[]}
     */
    createChunks(file, chunkSize) {
      const result = [];
      for (let i = 0; i < file.size; i += chunkSize) {
        result.push(file.slice(i, i + chunkSize));
      }
      return result;
    },
  },
};
</script>

<style scoped>
.upload__input {
  //display: none;
}
</style>
```
