<template><div><h1 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> record</h1>
<h2 id="vue中使用-链式操作-编译报错" tabindex="-1"><a class="header-anchor" href="#vue中使用-链式操作-编译报错" aria-hidden="true">#</a> vue中使用 &quot;?.&quot; 链式操作 编译报错</h2>
<p>npm install @babel/plugin-proposal-optional-chaining --save-dev<br>
如果报错试试<br>
npm install '@babel/plugin-proposal-optional-chaining' --save-dev
在babel.config.js中添加:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@vue/app'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-proposal-optional-chaining"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
