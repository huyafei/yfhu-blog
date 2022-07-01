<template><div><h1 id="vendrag-拖动" tabindex="-1"><a class="header-anchor" href="#vendrag-拖动" aria-hidden="true">#</a> VenDrag 拖动</h1>
<p>拖动组件，兼容pc和移动端。</p>
<p>::: demo</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VenDrag</span>
		<span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100px<span class="token punctuation">"</span></span>
		<span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100px<span class="token punctuation">"</span></span>
		<span class="token attr-name">right</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span>
		<span class="token attr-name">bottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20px<span class="token punctuation">"</span></span>
		<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Drag me<span class="token punctuation">"</span></span>
		<span class="token attr-name">borderRadius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10px<span class="token punctuation">"</span></span>
		<span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickEvent<span class="token punctuation">"</span></span>
	<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VenDrag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">clickEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>--</td>
<td>ven</td>
<td>标题文案</td>
</tr>
<tr>
<td>isDrag</td>
<td>boolean</td>
<td>--</td>
<td>true</td>
<td>是否拖拽</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>--</td>
<td>60px</td>
<td>宽度</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>--</td>
<td>60px</td>
<td>高度</td>
</tr>
<tr>
<td>left</td>
<td>string</td>
<td>--</td>
<td>null</td>
<td>左侧外边距边缘</td>
</tr>
<tr>
<td>top</td>
<td>string</td>
<td>--</td>
<td>null</td>
<td>顶部外边距边缘</td>
</tr>
<tr>
<td>right</td>
<td>string</td>
<td>--</td>
<td>null</td>
<td>右侧外边距边缘</td>
</tr>
<tr>
<td>bottom</td>
<td>string</td>
<td>--</td>
<td>null</td>
<td>底部外边距边缘</td>
</tr>
<tr>
<td>borderRadius</td>
<td>string</td>
<td>--</td>
<td>null</td>
<td>圆角</td>
</tr>
<tr>
<td>isRange</td>
<td>boolean</td>
<td>--</td>
<td>false</td>
<td>是否有边界</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>function</td>
<td>点击事件</td>
</tr>
</tbody>
</table>
</div></template>
