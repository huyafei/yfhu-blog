<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<h2 id="webpack-1" tabindex="-1"><a class="header-anchor" href="#webpack-1" aria-hidden="true">#</a> webpack</h2>
<h3 id="webpack-2" tabindex="-1"><a class="header-anchor" href="#webpack-2" aria-hidden="true">#</a> webpack</h3>
<h4 id="webpack-3" tabindex="-1"><a class="header-anchor" href="#webpack-3" aria-hidden="true">#</a> webpack</h4>
<h3 id="library" tabindex="-1"><a class="header-anchor" href="#library" aria-hidden="true">#</a> library</h3>
<p>编译后对外暴露方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'webpack-numbers.js'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">'webpackNumbers'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">'umd'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">commonjs2</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">'_'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过以下方式暴露 library：</p>
<ul>
<li>变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。</li>
<li>this：通过 this 对象访问（libraryTarget:'this'）。</li>
<li>window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。</li>
<li>UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）</li>
</ul>
</div></template>


