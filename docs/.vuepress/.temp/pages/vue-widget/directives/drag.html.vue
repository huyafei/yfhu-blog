<template><div><h1 id="v-drag" tabindex="-1"><a class="header-anchor" href="#v-drag" aria-hidden="true">#</a> v-drag</h1>
<p>拖动指令</p>
<p>::: demo</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
		<span class="token attr-name">v-drag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ isRange: false }<span class="token punctuation">"</span></span>
		<span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        width: 100px;
        height: 100px;
        display: inline-block;
        cursor: pointer;
        background: #ddd;
        left: 200px;
      <span class="token punctuation">"</span></span></span>
	<span class="token punctuation">></span></span>
		pc/移动端全局指令
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>isRange</td>
<td>是否有拖动边界</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
</div></template>
