<template><div><h1 id="qiankun" tabindex="-1"><a class="header-anchor" href="#qiankun" aria-hidden="true">#</a> qiankun</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下操作流程是以 vue2.x 为示例，其它详细请参考 <a href="https://qiankun.umijs.org/zh/guide" target="_blank" rel="noopener noreferrer">qiankun<ExternalLinkIcon/></a> 官方文档。<br>
<a href="https://github.com/huyafei/qiankun-demo" target="_blank" rel="noopener noreferrer">示例源码<ExternalLinkIcon/></a></p>
</div>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>新建两个项目 vue2-main 和 vue2-child-histroy，分别作为主应用和微应用，且路由模式都是 <code v-pre>history</code> 模式。</p>
<h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>
<h3 id="主应用" tabindex="-1"><a class="header-anchor" href="#主应用" aria-hidden="true">#</a> 主应用</h3>
<h4 id="_1-安装-qiankun" tabindex="-1"><a class="header-anchor" href="#_1-安装-qiankun" aria-hidden="true">#</a> 1. 安装 qiankun</h4>
<CodeGroup>
<CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> qiankun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="npm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> qiankun -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="_2-在主应用中注册微应用" tabindex="-1"><a class="header-anchor" href="#_2-在主应用中注册微应用" aria-hidden="true">#</a> 2. 在主应用中注册微应用</h4>
<p>在 <code v-pre>main.js</code> 中注册微应用，增加如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... 其它代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span><span class="token punctuation">;</span>

<span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vue2-child-history"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的名称，必选，唯一</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"http://localhost:8083"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的入口地址,必选</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">"#micro-app-history-container"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的容器节点的选择器，必选</span>
    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">"/micro-app-history"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的激活规则，必选</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ... 其它代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>api详细说明参考：<a href="https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles" target="_blank" rel="noopener noreferrer">https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles<ExternalLinkIcon/></a></li>
<li>name 应用名称，必选，且是唯一的，后续webpack配置中，会使用该名称</li>
<li>entry 应用入口地址，必选</li>
<li>container 应用容器节点的选择器，必选</li>
<li>activeRule 应用激活规则，必选，当前时路由地址匹配，</li>
</ul>
<h3 id="微应用" tabindex="-1"><a class="header-anchor" href="#微应用" aria-hidden="true">#</a> 微应用</h3>
<h4 id="_1-在-src-下新增-public-path-js-文件-内容如下" tabindex="-1"><a class="header-anchor" href="#_1-在-src-下新增-public-path-js-文件-内容如下" aria-hidden="true">#</a> 1. 在 <code v-pre>src</code> 下新增 <code v-pre>public-path.js</code> 文件，内容如下：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line no-undef</span>
  __webpack_public_path__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__INJECTED_PUBLIC_PATH_BY_QIANKUN__<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>此文件是用于修改运行时的 publicPath。<a href="https://webpack.docschina.org/guides/public-path/#on-the-fly" target="_blank" rel="noopener noreferrer">什么是运行时 publicPath?<ExternalLinkIcon/></a></li>
<li>使用 esLint 需要加 <code v-pre>// eslint-disable-next-line no-undef</code></li>
</ul>
<h4 id="_2-修改入口文件-main-js-代码如下" tabindex="-1"><a class="header-anchor" href="#_2-修改入口文件-main-js-代码如下" aria-hidden="true">#</a> 2.  修改入口文件 <code v-pre>main.js</code> ,代码如下：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./public-path.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 页面渲染方法</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__ <span class="token operator">?</span> <span class="token string">"/micro-app-history"</span> <span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token comment">// 这里的 base 是为了让 qiankun 的路由生效</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"history"</span><span class="token punctuation">,</span> 
    routes<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>container <span class="token operator">?</span> container<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 独立运行时就直接渲染</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[vue] vue app bootstraped"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[vue] props from main framework'</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  router <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>引入 <code v-pre>public-path.js</code> 文件</li>
<li>修改入口文件 <code v-pre>main.js</code></li>
<li><code v-pre>!window.__POWERED_BY_QIANKUN__</code> 判断是独立运行微应用还是被主应用运行微应用</li>
<li>路由的 <code v-pre>base</code> 要与注册应用的 <code v-pre>activeRule</code> 一致</li>
<li><code v-pre>main.js</code> 改成上面，那么 <code v-pre>router</code> 文件下 导出也要改一下 ,导出路由 routes 如下：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-修改-vue-config-js-中打包配置" tabindex="-1"><a class="header-anchor" href="#_3-修改-vue-config-js-中打包配置" aria-hidden="true">#</a> 3. 修改 vue.config.js 中打包配置：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./package'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 package.json 中的 name 字段作为微应用的名称（注意要与注册的微应用名称一致）</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-[name]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// name 与 注册的应用名称一致</span>
      <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">"umd"</span><span class="token punctuation">,</span> <span class="token comment">// 把微应用打包成 umd 库格式</span>
      <span class="token comment">// jsonpFunction: `webpackJsonp_${name}`, // webpack5 废弃</span>
      <span class="token literal-property property">chunkLoadingGlobal</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">webpackJsonp_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>使用 <code v-pre>package.json</code> 中的 <code v-pre>name</code> 字段作名称要与注册的微应用名称一致</li>
<li><code v-pre>jsonpFunction</code> 在 webpack5 废弃了，使用 <code v-pre>chunkLoadingGlobal</code> 替代，</li>
</ul>
<h3 id="主应用和微应用数据通信" tabindex="-1"><a class="header-anchor" href="#主应用和微应用数据通信" aria-hidden="true">#</a> 主应用和微应用数据通信</h3>
<p>在主应用使用 <code v-pre>initGlobalState(state)</code> 初始化状态方法，通过 <code v-pre>props</code> 传给微应用,通过 <code v-pre>setGlobalState(state)</code> 设置状态，
通过 <code v-pre>offGlobalStateChange()</code> 移除当前应用的状态监听。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span><span class="token punctuation">;</span>
<span class="token comment">// 初始化 state</span>
<span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里写初始化数据</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token function">initGlobalState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
actions<span class="token punctuation">.</span><span class="token function">onGlobalStateChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// state: 变更后的状态; prev 变更前的状态</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
actions<span class="token punctuation">.</span><span class="token function">setGlobalState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置全局状态</span>
actions<span class="token punctuation">.</span><span class="token function">offGlobalStateChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除当前应用的状态监听</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://qiankun.umijs.org/zh/api#initglobalstatestate" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<h4 id="_1-在主应用-src-新增-actions-js-文件-代码如下" tabindex="-1"><a class="header-anchor" href="#_1-在主应用-src-新增-actions-js-文件-代码如下" aria-hidden="true">#</a> 1. 在主应用 <code v-pre>src</code> 新增 <code v-pre>actions.js</code> 文件，代码如下：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"qiankun"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里写初始化数据</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 初始化 参数 state</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token function">initGlobalState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
actions<span class="token punctuation">.</span><span class="token function">onGlobalStateChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// state: 变更后的状态; prev 变更前的状态</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"主应用状态变化"</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"SET_TOKEN"</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> actions<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong>
可以先忽略 store 相关代码，在此可以做一些其它操作</p>
<h4 id="_2-在主应用注册应用处-main-js-将-actions-通过-props-传给微应用" tabindex="-1"><a class="header-anchor" href="#_2-在主应用注册应用处-main-js-将-actions-通过-props-传给微应用" aria-hidden="true">#</a> 2. 在主应用注册应用处（main.js） 将 <code v-pre>actions</code> 通过 <code v-pre>props</code> 传给微应用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... 其它代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">'./actions'</span><span class="token punctuation">;</span>
<span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vue2-child-history"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的名称，必选，唯一</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"http://localhost:8083"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的入口地址,必选</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">"#micro-app-history-container"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的容器节点的选择器，必选</span>
    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">"/micro-app-history"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用的激活规则，必选</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 可选，主应用需要传递给微应用的数据。</span>
      actions<span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ... 其它代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-在微应用生命周期-mount-中获取通信方法" tabindex="-1"><a class="header-anchor" href="#_3-在微应用生命周期-mount-中获取通信方法" aria-hidden="true">#</a> 3. 在微应用生命周期 mount 中获取通信方法</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  props<span class="token punctuation">.</span><span class="token function">onGlobalStateChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// state: 变更后的状态; prev 变更前的状态</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"微应用history状态变化"</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"SET_TOKEN"</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 使用 Vue 原型属性</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mainStore <span class="token operator">=</span> props<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[vue] props from main framework"</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong>
可以先忽略 store 相关代码，在此可以做一些其它操作</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以上为开发环境的测试，其它功能、需求、问题请参考 <a href="https://qiankun.umijs.org/zh/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</div>
</div></template>
