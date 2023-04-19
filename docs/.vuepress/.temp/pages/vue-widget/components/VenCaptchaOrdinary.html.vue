<template><div><h1 id="vencaptchaordinary-验证码" tabindex="-1"><a class="header-anchor" href="#vencaptchaordinary-验证码" aria-hidden="true">#</a> VenCaptchaOrdinary 验证码</h1>
<p>普通验证码组件</p>
<p>::: demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VenCaptchaOrdinary</span> 
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        contentWidth: 120,
        contentHeight: 38,
      }<span class="token punctuation">"</span></span> 
      <span class="token attr-name">@getCode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getCode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VenCaptchaOrdinary</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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
<td>options</td>
<td>Object</td>
<td>--</td>
<td>--</td>
<td>配置，参考如下</td>
</tr>
</tbody>
</table>
<h5 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h5>
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
<td>codeStr</td>
<td>string</td>
<td>--</td>
<td>a-y,A-Y,0-9</td>
<td>验证码字符串</td>
</tr>
<tr>
<td>codeNum</td>
<td>number</td>
<td>--</td>
<td>4</td>
<td>验证码数量</td>
</tr>
<tr>
<td>contentWidth</td>
<td>number</td>
<td>--</td>
<td>112</td>
<td>内容宽度</td>
</tr>
<tr>
<td>contentHeight</td>
<td>number</td>
<td>--</td>
<td>38</td>
<td>内容高度</td>
</tr>
<tr>
<td>fontSizeMin</td>
<td>number</td>
<td>--</td>
<td>18</td>
<td>字体最小值</td>
</tr>
<tr>
<td>fontSizeMax</td>
<td>number</td>
<td>--</td>
<td>40</td>
<td>字体最大值</td>
</tr>
<tr>
<td>colorMin</td>
<td>number</td>
<td>0-255</td>
<td>50</td>
<td>颜色最小值</td>
</tr>
<tr>
<td>colorMax</td>
<td>number</td>
<td>0-255</td>
<td>160</td>
<td>颜色最大值</td>
</tr>
<tr>
<td>backgroundColorMin</td>
<td>number</td>
<td>0-255</td>
<td>180</td>
<td>背景颜色最小值</td>
</tr>
<tr>
<td>backgroundColorMax</td>
<td>number</td>
<td>0-255</td>
<td>240</td>
<td>背景颜色最大值</td>
</tr>
<tr>
<td>dotNum</td>
<td>number</td>
<td>--</td>
<td>30</td>
<td>干扰点数量</td>
</tr>
<tr>
<td>dotColorMin</td>
<td>number</td>
<td>0-255</td>
<td>0</td>
<td>干扰点颜色最小值</td>
</tr>
<tr>
<td>dotColorMax</td>
<td>number</td>
<td>0-255</td>
<td>255</td>
<td>干扰点颜色最大值</td>
</tr>
<tr>
<td>lineNum</td>
<td>number</td>
<td>--</td>
<td>10</td>
<td>干扰线数量</td>
</tr>
<tr>
<td>lineColorMin</td>
<td>number</td>
<td>0-255</td>
<td>40</td>
<td>干扰线颜色最小值</td>
</tr>
<tr>
<td>lineColorMax</td>
<td>number</td>
<td>0-255</td>
<td>180</td>
<td>干扰线颜色最大值</td>
</tr>
</tbody>
</table>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
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
<td>getCode</td>
<td>Function</td>
<td>点击获取当前验证码</td>
</tr>
</tbody>
</table>
</div></template>


