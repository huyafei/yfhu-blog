<template><div><h1 id="micro-app" tabindex="-1"><a class="header-anchor" href="#micro-app" aria-hidden="true">#</a> micro-app</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下操作流程是以 vue2.x 为示例，其它详细请参考 <a href="https://micro-zoe.github.io/micro-app/docs.html#/" target="_blank" rel="noopener noreferrer">micro-app<ExternalLinkIcon/></a> 官方文档。<br>
<a href="https://github.com/huyafei/micro-app-demo" target="_blank" rel="noopener noreferrer">示例源码<ExternalLinkIcon/></a><br>
在 <code v-pre>micro-app</code> 中，分为基座和子应用，就是 <code v-pre>qiankun</code> 中主应用和微应用的区别。</p>
</div>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>新建两个项目 vue2-main 和 vue2-child-histroy，分别作为基座和子应用，且路由模式都是 <code v-pre>history</code> 模式。</p>
<p>基本目录结构如下：</p>
<p><img src="/static/images/microFrontEnd/micro-app_01.jpg" alt="基本目录结构"></p>
<p><strong>备注：</strong><br>
图中额外的可以不用管，只需新建两个项目 vue2-main 和 vue2-child-histroy，其它是配合使用 <code v-pre>npm-run-all</code>
插件使用的，可参考源码结构。</p>
<h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>
<h3 id="基座" tabindex="-1"><a class="header-anchor" href="#基座" aria-hidden="true">#</a> 基座</h3>
<h4 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1. 安装依赖</h4>
<CodeGroup>
<CodeGroupItem title="yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @micro-zoe/micro-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="npm">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @micro-zoe/micro-app --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="_2-在入口文件-main-js-引入" tabindex="-1"><a class="header-anchor" href="#_2-在入口文件-main-js-引入" aria-hidden="true">#</a> 2. 在入口文件 <code v-pre>main.js</code> 引入</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">'@micro-zoe/micro-app'</span>
microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-新建-micro-app-history-vue-页面-并分配一个路由给子应用" tabindex="-1"><a class="header-anchor" href="#_3-新建-micro-app-history-vue-页面-并分配一个路由给子应用" aria-hidden="true">#</a> 3. 新建 <code v-pre>micro-app-history.vue</code> 页面，并分配一个路由给子应用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "home" */</span> <span class="token string">"../views/home.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/micro-app-history/*"</span><span class="token punctuation">,</span> <span class="token comment">// vue-router@4.x path的写法为：'/micro-app-history/:page*'</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"micro-app-history"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token keyword">import</span><span class="token punctuation">(</span>
        <span class="token comment">/* webpackChunkName: "micro-app-history" */</span> <span class="token string">"../views/micro-app-history.vue"</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"history"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>新建的页面名字避免与 MicroApp 一样最好不一样。</li>
<li>基座路由模式为 <code v-pre>history</code> 模式</li>
</ul>
<h4 id="_4-在-microapphistory-页面中嵌入子应用" tabindex="-1"><a class="header-anchor" href="#_4-在-microapphistory-页面中嵌入子应用" aria-hidden="true">#</a> 4. 在 <code v-pre>MicroAppHistory</code> 页面中嵌入子应用</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>子应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:8083/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
       --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue2-child-history<span class="token punctuation">"</span></span>
      <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:8083/<span class="token punctuation">"</span></span>
      <span class="token attr-name">baseroute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/micro-app-history<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"MicroAppHistory"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子应用" tabindex="-1"><a class="header-anchor" href="#子应用" aria-hidden="true">#</a> 子应用</h3>
<h4 id="_1-在子应用-src-目录下创建名称为-public-path-js-的文件-并在入口文件-main-js-中引入-public-path-js-内容如下" tabindex="-1"><a class="header-anchor" href="#_1-在子应用-src-目录下创建名称为-public-path-js-的文件-并在入口文件-main-js-中引入-public-path-js-内容如下" aria-hidden="true">#</a> 1. 在子应用 <code v-pre>src</code> 目录下创建名称为 <code v-pre>public-path.js</code> 的文件，并在入口文件 <code v-pre>main.js</code> 中引入，<code v-pre>public-path.js</code> 内容如下：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// public-path.js</span>
<span class="token comment">// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line</span>
  __webpack_public_path__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_PUBLIC_PATH__
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>main.js</code> 引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./public-path'</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-设置基础路由-如果基座应用是history路由-子应用是hash路由-这一步可以省略" tabindex="-1"><a class="header-anchor" href="#_2-设置基础路由-如果基座应用是history路由-子应用是hash路由-这一步可以省略" aria-hidden="true">#</a> 2. 设置基础路由(如果基座应用是history路由，子应用是hash路由，这一步可以省略)</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... 其它代码</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"history"</span><span class="token punctuation">,</span>
  <span class="token comment">// 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> window<span class="token punctuation">.</span>__MICRO_APP_BASE_ROUTE__ <span class="token operator">||</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ... 其它代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-在-vue-config-config-js-中配置-webpack-dev-server-的-headers-中设置跨域支持" tabindex="-1"><a class="header-anchor" href="#_3-在-vue-config-config-js-中配置-webpack-dev-server-的-headers-中设置跨域支持" aria-hidden="true">#</a> 3. 在 <code v-pre>vue.config.config.js</code> 中配置 <code v-pre>webpack-dev-server</code> 的 <code v-pre>headers</code> 中设置跨域支持</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vue/cli-service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8083</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Access-Control-Allow-Origin"</span><span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-监听卸载-在-main-js-中添加如下代码" tabindex="-1"><a class="header-anchor" href="#_4-监听卸载-在-main-js-中添加如下代码" aria-hidden="true">#</a> 4. 监听卸载，在 <code v-pre>main.js</code> 中添加如下代码：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// ... 其它代码</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听卸载操作</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"unmount"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据通信" tabindex="-1"><a class="header-anchor" href="#数据通信" aria-hidden="true">#</a> 数据通信</h2>
<h3 id="基座向子应用发送数据" tabindex="-1"><a class="header-anchor" href="#基座向子应用发送数据" aria-hidden="true">#</a> 基座向子应用发送数据</h3>
<p>两种方式：</p>
<h4 id="_1-通过-data-属性传递数据" tabindex="-1"><a class="header-anchor" href="#_1-通过-data-属性传递数据" aria-hidden="true">#</a> 1. 通过 <code v-pre>data</code> 属性传递数据</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>基座-内部展示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:8083/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
        data(可选)：传递给子应用的数据
       --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue2-child-history<span class="token punctuation">"</span></span>
      <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:8083/<span class="token punctuation">"</span></span>
      <span class="token attr-name">baseroute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/micro-app-history<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>microAppData<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"MicroAppHistory"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">microAppData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"hello micro-app-history"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-通过-setdata-手动发送数据局" tabindex="-1"><a class="header-anchor" href="#_2-通过-setdata-手动发送数据局" aria-hidden="true">#</a> 2. 通过 <code v-pre>setData</code> 手动发送数据局</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">'@micro-zoe/micro-app'</span>

<span class="token comment">// 发送数据给子应用 vue2-child-history，setData第二个参数只接受对象类型</span>
microApp<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">'vue2-child-history'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"hello micro-app-history"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong><br>
第一个参数是应用的名称，第二个参数是要发送的数据</p>
<h3 id="子应用获取来自基座数据" tabindex="-1"><a class="header-anchor" href="#子应用获取来自基座数据" aria-hidden="true">#</a> 子应用获取来自基座数据</h3>
<p>两种方式：</p>
<h4 id="_1-直接获取" tabindex="-1"><a class="header-anchor" href="#_1-直接获取" aria-hidden="true">#</a> 1. 直接获取</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> window<span class="token punctuation">.</span>microApp<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回基座下发的data数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-绑定监听函数" tabindex="-1"><a class="header-anchor" href="#_2-绑定监听函数" aria-hidden="true">#</a> 2. 绑定监听函数</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dataListener</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'来自基座应用的数据'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 绑定监听函数，监听函数只有在数据变化时才会触发
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 * !!!重要说明: 因为子应用是异步渲染的，而基座发送数据是同步的，
 * 如果在子应用渲染结束前基座应用发送数据，则在绑定监听函数前数据已经发送，在初始化后不会触发绑定函数，
 * 但这个数据会放入缓存中，此时可以设置autoTrigger为true主动触发一次监听函数来获取数据。
 */</span>
window<span class="token punctuation">.</span>microApp<span class="token punctuation">.</span><span class="token function">addDataListener</span><span class="token punctuation">(</span>dataListener<span class="token operator">:</span> Function<span class="token punctuation">,</span> autoTrigger<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span>

<span class="token comment">// 解绑监听函数</span>
window<span class="token punctuation">.</span>microApp<span class="token punctuation">.</span><span class="token function">removeDataListener</span><span class="token punctuation">(</span>dataListener<span class="token operator">:</span> Function<span class="token punctuation">)</span>

<span class="token comment">// 清空当前子应用的所有绑定函数(全局数据函数除外)</span>
window<span class="token punctuation">.</span>microApp<span class="token punctuation">.</span><span class="token function">clearDataListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>绑定监听函数，window.microApp.addDataListener(dataListener: Function, autoTrigger?: boolean)
<ul>
<li>dataListener: 绑定函数</li>
<li>autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false</li>
</ul>
</li>
<li>解绑监听函数，window.microApp.removeDataListener(dataListener: Function)
<ul>
<li>dataListener: 绑定函数</li>
</ul>
</li>
<li>清空当前子应用的所有绑定函数(全局数据函数除外)，window.microApp.clearDataListener()</li>
</ul>
<p><img src="/static/images/microFrontEnd/micro-app_02.png" alt="绑定数据监听函数"></p>
<h3 id="子应用向基座发送数据" tabindex="-1"><a class="header-anchor" href="#子应用向基座发送数据" aria-hidden="true">#</a> 子应用向基座发送数据</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// dispatch只接受对象作为参数</span>
window<span class="token punctuation">.</span>microApp<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'子应用发送的数据'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基座获取子应用数据" tabindex="-1"><a class="header-anchor" href="#基座获取子应用数据" aria-hidden="true">#</a> 基座获取子应用数据</h3>
<p>基座应用获取来自子应用的数据有三种方式：</p>
<h4 id="_1-直接获取数据" tabindex="-1"><a class="header-anchor" href="#_1-直接获取数据" aria-hidden="true">#</a> 1.直接获取数据</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">'@micro-zoe/micro-app'</span>

<span class="token keyword">const</span> childData <span class="token operator">=</span> microApp<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span> <span class="token comment">// 返回子应用的data数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong><br>
appName: 子应用的名称</p>
<h4 id="_2-监听自定义事件-datachange" tabindex="-1"><a class="header-anchor" href="#_2-监听自定义事件-datachange" aria-hidden="true">#</a> 2. 监听自定义事件 (datachange)</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>micro<span class="token operator">-</span>app
    name<span class="token operator">=</span><span class="token string">'my-app'</span>
    url<span class="token operator">=</span><span class="token string">'xx'</span>
    <span class="token comment">// 数据在事件对象的detail.data字段中，子应用每次发送数据都会触发datachange</span>
    @datachange<span class="token operator">=</span><span class="token string">'handleDataChange'</span>
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleDataChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'来自子应用的数据：'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-绑定监听函数" tabindex="-1"><a class="header-anchor" href="#_3-绑定监听函数" aria-hidden="true">#</a> 3. 绑定监听函数</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">'@micro-zoe/micro-app'</span>

<span class="token keyword">function</span> <span class="token function">dataListener</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'来自子应用my-app的数据'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 绑定监听函数
 * appName: 应用名称
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 */</span>
microApp<span class="token punctuation">.</span><span class="token function">addDataListener</span><span class="token punctuation">(</span>appName<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">dataListener</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> autoTrigger<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span>

<span class="token comment">// 解绑监听my-app子应用的函数</span>
microApp<span class="token punctuation">.</span><span class="token function">removeDataListener</span><span class="token punctuation">(</span>appName<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">dataListener</span><span class="token operator">:</span> Function<span class="token punctuation">)</span>

<span class="token comment">// 清空所有监听appName子应用的函数</span>
microApp<span class="token punctuation">.</span><span class="token function">clearDataListener</span><span class="token punctuation">(</span>appName<span class="token operator">:</span> string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
