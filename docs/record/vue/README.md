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
   Vue.component('svg-icon',SvgIcon)
   
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

## vue
