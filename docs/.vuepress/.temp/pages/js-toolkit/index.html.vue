<template><div><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1>
<h2 id="npm-yarn" tabindex="-1"><a class="header-anchor" href="#npm-yarn" aria-hidden="true">#</a> npm/yarn</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vensst/js-toolkit --save
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> <span class="token function">add</span> @vensst/js-toolkit --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> jstk <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit"</span><span class="token punctuation">;</span>
jstk<span class="token punctuation">.</span><span class="token function">randomNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vensst/js-toolkit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">randomNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3>
<h4 id="randomnum" tabindex="-1"><a class="header-anchor" href="#randomnum" aria-hidden="true">#</a> randomNum</h4>
<ul>
<li>
<p>说明：</p>
<p>根据区间，获取随机整数(包含最大值、最大值)</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>min {number} 最小值，默认：0</li>
<li>max {number} 最大值，默认：1</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">randomNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token comment">// 79</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="numbertochinese" tabindex="-1"><a class="header-anchor" href="#numbertochinese" aria-hidden="true">#</a> numberToChinese</h4>
<ul>
<li>
<p>说明：</p>
<p>将阿拉伯数字翻译成中文大写数字</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>nun {number|string} 数字</li>
</ul>
</li>
<li>
<p>返回值：</p>
<ul>
<li>{string}</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">numberToChinese</span><span class="token punctuation">(</span><span class="token string">"9527.27"</span><span class="token punctuation">)</span>
<span class="token comment">// 九仟五百二十七点二七</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="numbercurrencytochinese" tabindex="-1"><a class="header-anchor" href="#numbercurrencytochinese" aria-hidden="true">#</a> numberCurrencyToChinese</h4>
<ul>
<li>说明：</li>
</ul>
<p>将阿拉伯数字数字金额转为中文大写金额</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>num {number|string} 数字金额</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">numberCurrencyToChinese</span><span class="token punctuation">(</span><span class="token string">"9527.27"</span><span class="token punctuation">)</span>
<span class="token comment">// 玖仟伍佰贰拾柒元贰角柒分</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="thousandseparator" tabindex="-1"><a class="header-anchor" href="#thousandseparator" aria-hidden="true">#</a> thousandSeparator</h4>
<ul>
<li>说明：</li>
</ul>
<p>将数字千分位分割</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>num {number|string} 数字</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*|string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">thousandSeparator</span><span class="token punctuation">(</span><span class="token number">369527.279527</span><span class="token punctuation">)</span>
<span class="token comment">// 369,527.279527</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h4>
<ul>
<li>说明：</li>
</ul>
<p>两个数相加</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {number} 第一个数</li>
<li>b {number} 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 相加后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// 0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="subtract" tabindex="-1"><a class="header-anchor" href="#subtract" aria-hidden="true">#</a> subtract</h4>
<ul>
<li>说明：</li>
</ul>
<p>两个数相减</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {number} 第一个数</li>
<li>b {number} 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 相减后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multiply" tabindex="-1"><a class="header-anchor" href="#multiply" aria-hidden="true">#</a> multiply</h4>
<ul>
<li>说明：</li>
</ul>
<p>两个数相乘</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {number} 第一个数</li>
<li>b {number} 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 相乘后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// 0.04</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="divide" tabindex="-1"><a class="header-anchor" href="#divide" aria-hidden="true">#</a> divide</h4>
<ul>
<li>说明：</li>
</ul>
<p>两个相除</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {number} 第一个数</li>
<li>b {number} 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 相除后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3>
<h4 id="strhidecode" tabindex="-1"><a class="header-anchor" href="#strhidecode" aria-hidden="true">#</a> strHideCode</h4>
<ul>
<li>说明：</li>
</ul>
<p>字符串脱敏</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string} 需要脱敏字符串</li>
<li>startIndex {number} 脱敏起始位置</li>
<li>endIndex {number} 脱敏结束位置</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已脱敏字符串 / ''</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">strHideCode</span><span class="token punctuation">(</span><span class="token string">"这是一段文字"</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// 这是**文字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="strtrim" tabindex="-1"><a class="header-anchor" href="#strtrim" aria-hidden="true">#</a> strTrim</h4>
<ul>
<li>说明：</li>
</ul>
<p>字符串去除空格</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string} 需要去除空格的字符串</li>
<li>type {number} 类型, 1:所有空格  2:前后空格 (默认)  3:前空格 4:后空格</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已去除的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">" 这是 一段 文字 "</span>
jstk<span class="token punctuation">.</span><span class="token function">strTrim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 这是一段文字</span>
jstk<span class="token punctuation">.</span><span class="token function">strTrim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 这是 一段 文字</span>
jstk<span class="token punctuation">.</span><span class="token function">strTrim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// 这是 一段 文字</span>
jstk<span class="token punctuation">.</span><span class="token function">strTrim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">//  这是 一段 文字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="strenchangecase" tabindex="-1"><a class="header-anchor" href="#strenchangecase" aria-hidden="true">#</a> strEnChangeCase</h4>
<ul>
<li>说明：</li>
</ul>
<p>英文字母大小写转换</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string}  需要转换的英文字符串</li>
<li>type {number} 类型, 1:首字母大写 (默认) 2:首页母小写  3:大小写转换  4:全部大写  5:全部小写</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|*} 已转换的英文字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">strEnChangeCase</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// This Is A Text</span>
jstk<span class="token punctuation">.</span><span class="token function">strEnChangeCase</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// tHIS iS a tEXT</span>
jstk<span class="token punctuation">.</span><span class="token function">strEnChangeCase</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// tHIS IS A TEXT</span>
jstk<span class="token punctuation">.</span><span class="token function">strEnChangeCase</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// THIS IS A TEXT</span>
jstk<span class="token punctuation">.</span><span class="token function">strEnChangeCase</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// this is a text</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="strfilterhtmltag" tabindex="-1"><a class="header-anchor" href="#strfilterhtmltag" aria-hidden="true">#</a> strFilterHtmlTag</h4>
<ul>
<li>说明：</li>
</ul>
<p>过滤 html代码(把 &lt;、&gt; 和 &amp; 转换)</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string} html 字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span><span class="token string">"&lt;div>这是一段文字&lt;/div>"</span><span class="token punctuation">;</span>
jstk<span class="token punctuation">.</span><span class="token function">strFilterHtmlTag</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token comment">// &amp;lt;div&amp;gt;这是一段文字&amp;lt;/div&amp;gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="createcode" tabindex="-1"><a class="header-anchor" href="#createcode" aria-hidden="true">#</a> createCode</h4>
<ul>
<li>说明：</li>
</ul>
<p>生成随机码（创建随机验证码）</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>length {number} 随机码长度 默认：4</li>
<li>checkCode {string|number} 当前随机码（防止重复）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">createCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// F1Fo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3>
<h4 id="oarrfindele" tabindex="-1"><a class="header-anchor" href="#oarrfindele" aria-hidden="true">#</a> oArrFindEle</h4>
<ul>
<li>说明：</li>
</ul>
<p>查找对象数组是否存在某元素，返回下标或-1，或使用 findIndex() 代替</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {Array&lt;Object&gt;}</li>
<li>attrName {string} 查找的元素属性名</li>
<li>attrVal {*} 查找的元素属性的值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 下标或-1</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">oArrFindEle</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>
<span class="token comment">// 1</span>
jstk<span class="token punctuation">.</span><span class="token function">oArrFindEle</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span>
<span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="oarrremoverepeat" tabindex="-1"><a class="header-anchor" href="#oarrremoverepeat" aria-hidden="true">#</a> oArrRemoveRepeat</h4>
<ul>
<li>说明：</li>
</ul>
<p>对象数组去重</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {Array&lt;Object&gt;}</li>
<li>attrName {string} 需要匹配去重的对象里属性名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Array&lt;Object&gt;}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">oArrRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">'type'</span><span class="token punctuation">)</span>
<span class="token comment">// [{type: "a"},{type: "b"},{type: "c"}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="findeleturnsymdelstrbyoarr" tabindex="-1"><a class="header-anchor" href="#findeleturnsymdelstrbyoarr" aria-hidden="true">#</a> findEleTurnSymDelStrByOArr</h4>
<ul>
<li>说明：</li>
</ul>
<p>对象数组根据指定属性名称值返回逗号隔开字符串</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {Object[]}</li>
<li>attrName {string} 属性名</li>
<li>sym {string}  符号 默认 ','</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">findEleTurnSymDelStrByOArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">'type'</span><span class="token punctuation">)</span>
<span class="token comment">// a,b,c</span>
jstk<span class="token punctuation">.</span><span class="token function">findEleTurnSymDelStrByOArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span>
<span class="token comment">// a-b-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrremoverepeat" tabindex="-1"><a class="header-anchor" href="#arrremoverepeat" aria-hidden="true">#</a> arrRemoveRepeat</h4>
<ul>
<li>说明：</li>
</ul>
<p>普通数组去重</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {Array&lt;string|number&gt;} 数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 4, 5, 'a', 'b']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrcontains" tabindex="-1"><a class="header-anchor" href="#arrcontains" aria-hidden="true">#</a> arrContains</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断一个元素是否在数组中</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {any[]} 数组</li>
<li>val {any} 元素</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrContains</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrmerge" tabindex="-1"><a class="header-anchor" href="#arrmerge" aria-hidden="true">#</a> arrMerge</h4>
<ul>
<li>说明：</li>
</ul>
<p>数组合并，求两个数组(集合)的并集</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {any[]}</li>
<li>b {any[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{<em>[]|</em>}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrMerge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 4, 5, 'a', 'b', 3, 6, 7, 'c']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrintersect" tabindex="-1"><a class="header-anchor" href="#arrintersect" aria-hidden="true">#</a> arrIntersect</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取两个数组相同元素，求两个数组(集合)的交集</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>a {any[]}</li>
<li>b {any[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrIntersect</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 'b']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrremoveele" tabindex="-1"><a class="header-anchor" href="#arrremoveele" aria-hidden="true">#</a> arrRemoveEle</h4>
<ul>
<li>说明：</li>
</ul>
<p>删除数组其中一个元素</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {Array&lt;any&gt;}</li>
<li>ele {number}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Array&lt;any&gt;}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrRemoveEle</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>
<span class="token comment">// ['a', 'c']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrmax" tabindex="-1"><a class="header-anchor" href="#arrmax" aria-hidden="true">#</a> arrMax</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取数组中最大值</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {number[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrmin" tabindex="-1"><a class="header-anchor" href="#arrmin" aria-hidden="true">#</a> arrMin</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取数组中取最小值</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {number[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrsum" tabindex="-1"><a class="header-anchor" href="#arrsum" aria-hidden="true">#</a> arrSum</h4>
<ul>
<li>说明：</li>
</ul>
<p>数组求和</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {number[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrSum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arraverage" tabindex="-1"><a class="header-anchor" href="#arraverage" aria-hidden="true">#</a> arrAverage</h4>
<ul>
<li>说明：</li>
</ul>
<p>求数组中数值平均值</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {number[]}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrAverage</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arrelecount" tabindex="-1"><a class="header-anchor" href="#arrelecount" aria-hidden="true">#</a> arrEleCount</h4>
<ul>
<li>说明：</li>
</ul>
<p>检测数组中某个数值出现次数</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>arr {any[]}</li>
<li>val {any}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">]</span>
jstk<span class="token punctuation">.</span><span class="token function">arrEleCount</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3>
<h4 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> debounce</h4>
<ul>
<li>说明：</li>
</ul>
<p>函数防抖</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>fun {Function} 需要被防抖的函数</li>
<li>wait {number} 防抖的时间（毫秒） 默认：500</li>
<li>immediate {boolean} 是否立即执行 默认：true</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Function} 返回新的 debounced（防抖动）函数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">debounceEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>防抖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> debounceEvent <span class="token operator">=</span> jstk<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'防抖成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="throttle" tabindex="-1"><a class="header-anchor" href="#throttle" aria-hidden="true">#</a> throttle</h4>
<ul>
<li>说明：</li>
</ul>
<p>函数节流</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>fun {Function} 需要被节流的函数</li>
<li>wait {number} 节流的时间（毫秒） 默认：500</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Function} 返回一个新的函数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">throttleEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>节流<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> throttleEvent <span class="token operator">=</span> jstk<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'节流成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> Url</h3>
<h4 id="geturlparam" tabindex="-1"><a class="header-anchor" href="#geturlparam" aria-hidden="true">#</a> getUrlParam</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取 url 地址栏参数</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 参数名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|null}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// http://localhost/examples/index.html?name=张三&amp;age=18</span>
jstk<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
<span class="token comment">// 张三</span>
jstk<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">'sex'</span><span class="token punctuation">)</span>
<span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="geturlallparams" tabindex="-1"><a class="header-anchor" href="#geturlallparams" aria-hidden="true">#</a> getUrlAllParams</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取全部 url 参数,并转换成对象</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>url {string|null} url地址</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 参数对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// http://localhost/examples/index.html?name=张三&amp;age=18</span>
jstk<span class="token punctuation">.</span><span class="token function">getUrlAllParams</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
<span class="token comment">// {name: '张三', age: '18'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delparamsurl" tabindex="-1"><a class="header-anchor" href="#delparamsurl" aria-hidden="true">#</a> delParamsUrl</h4>
<ul>
<li>说明：</li>
</ul>
<p>删除 url 指定参数，返回url</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>url {string} url地址</li>
<li>name {string} 参数名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|*} 返回url</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">delParamsUrl</span><span class="token punctuation">(</span><span class="token string">'http://localhost/examples/index.html?name=张三&amp;age=18'</span><span class="token punctuation">,</span><span class="token string">'name'</span><span class="token punctuation">)</span>
<span class="token comment">// http://localhost/examples/index.html?age=18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h3>
<h4 id="formatdate" tabindex="-1"><a class="header-anchor" href="#formatdate" aria-hidden="true">#</a> formatDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>格式化日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {Date|string|number}  时间戳或日期对象</li>
<li>format {string}  格式化字符串，年：Y，月：M，日：D，时：h分，m，秒：s，周：w 默认：'Y-M-D hⓂ️s'</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 格式化后的日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-13 17:30:49</span>
jstk<span class="token punctuation">.</span><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'Y/M/D h:m:s w'</span><span class="token punctuation">)</span>
<span class="token comment">// 2022/06/13 17:30:49 星期一</span>
jstk<span class="token punctuation">.</span><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token string">'2020-01-01 12:23:23'</span><span class="token punctuation">,</span><span class="token string">'h:m:s w'</span><span class="token punctuation">)</span>
<span class="token comment">// 12:23:23 星期三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gettimeslot" tabindex="-1"><a class="header-anchor" href="#gettimeslot" aria-hidden="true">#</a> getTimeSlot</h4>
<ul>
<li>说明：</li>
</ul>
<p>根据步长获取时间间隔</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>step {number} 间隔 单位分钟</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Array} 时间间隔数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getTimeSlot</span><span class="token punctuation">(</span><span class="token number">240</span><span class="token punctuation">)</span>
<span class="token comment">// ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="formathms" tabindex="-1"><a class="header-anchor" href="#formathms" aria-hidden="true">#</a> formatHMS</h4>
<ul>
<li>说明：</li>
</ul>
<p>秒转时分秒</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>s {number} 秒数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">formatHMS</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
<span class="token comment">// 60m0s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getdays" tabindex="-1"><a class="header-anchor" href="#getdays" aria-hidden="true">#</a> getDays</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取指定长度的天数集合</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {Date|string} 时间戳或日期对象</li>
<li>len {number} 长度</li>
<li>dir  方向 1: 前几天;  2: 后几天;  3:前后几天 (默认)</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 日期集合</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 当前 2022-6-15</span>
jstk<span class="token punctuation">.</span><span class="token function">getDays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15']</span>
jstk<span class="token punctuation">.</span><span class="token function">getDays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// ['2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']</span>
jstk<span class="token punctuation">.</span><span class="token function">getDays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// ['2022-6-12', '2022-6-13', '2022-6-14', '2022-6-15', '2022-6-16', '2022-6-17', '2022-6-18']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getmonthofdays" tabindex="-1"><a class="header-anchor" href="#getmonthofdays" aria-hidden="true">#</a> getMonthOfDays</h4>
<ul>
<li>
<p>说明：</p>
<p>获得某月天数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>year {number} 年份</li>
<li>month {number} 月份</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 天数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMonthOfDays</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getyearofdays" tabindex="-1"><a class="header-anchor" href="#getyearofdays" aria-hidden="true">#</a> getYearOfDays</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取某年天数</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {number|string|Date} 年份或new Date()</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 天数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getYearOfDays</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">)</span>
<span class="token comment">// 365</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getmonths" tabindex="-1"><a class="header-anchor" href="#getmonths" aria-hidden="true">#</a> getMonths</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取指定长度的月份集合</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {Date|string|number} 时间</li>
<li>len {number} 长度</li>
<li>dir {number} 1: 前几个月;  2: 后几个月;  3:前后几个月 (默认)</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 月份集合</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMonths</span><span class="token punctuation">(</span><span class="token string">'2022-3'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// ['2021-12', '2022-1', '2022-2', '2022-3']</span>
jstk<span class="token punctuation">.</span><span class="token function">getMonths</span><span class="token punctuation">(</span><span class="token string">'2022-3'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// ['2022-3', '2022-4', '2022-5', '2022-6']</span>
jstk<span class="token punctuation">.</span><span class="token function">getMonths</span><span class="token punctuation">(</span><span class="token string">'2022-3'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// ['2021-12', '2022-1', '2022-2', '2022-3', '2021-3', '2021-4', '2021-5', '2021-6']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getquarterstartmonth" tabindex="-1"><a class="header-anchor" href="#getquarterstartmonth" aria-hidden="true">#</a> getQuarterStartMonth</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本季度的开始月份</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 月份 1 - 12</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2021-01-01</span>
jstk<span class="token punctuation">.</span><span class="token function">getQuarterStartMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getdayofyear" tabindex="-1"><a class="header-anchor" href="#getdayofyear" aria-hidden="true">#</a> getDayOfYear</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取某个日期是当年中的第几天</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {Date|String} 时间</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-6-15'</span><span class="token punctuation">)</span>
<span class="token comment">// 165</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getdayofyearweek" tabindex="-1"><a class="header-anchor" href="#getdayofyearweek" aria-hidden="true">#</a> getDayOfYearWeek</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取某个日期在这一年的第几周</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>time {Date|String} 时间</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getDayOfYearWeek</span><span class="token punctuation">(</span><span class="token string">'2022-6-15'</span><span class="token punctuation">)</span>
<span class="token comment">// 24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getweekstartdate" tabindex="-1"><a class="header-anchor" href="#getweekstartdate" aria-hidden="true">#</a> getWeekStartDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本周、上周、下周的开始日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>type {number} -1:上周  0:本周(默认)  1:下周</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 开始日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 当前2022-06-16</span>
jstk<span class="token punctuation">.</span><span class="token function">getWeekStartDate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-06</span>
jstk<span class="token punctuation">.</span><span class="token function">getWeekStartDate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-13</span>
jstk<span class="token punctuation">.</span><span class="token function">getWeekStartDate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getmonthstartdate" tabindex="-1"><a class="header-anchor" href="#getmonthstartdate" aria-hidden="true">#</a> getMonthStartDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本月或指定月份的开始日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>y {string|number} 年</li>
<li>m {string|number} 月</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMonthStartDate</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-01</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getmonthenddate" tabindex="-1"><a class="header-anchor" href="#getmonthenddate" aria-hidden="true">#</a> getMonthEndDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本月或指定月份的结束日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>y {string|number} 年</li>
<li>m {string|number} 月</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMonthEndDate</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getquarterstartdate" tabindex="-1"><a class="header-anchor" href="#getquarterstartdate" aria-hidden="true">#</a> getQuarterStartDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本月或指定月份的结束日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>y {string|number} 年</li>
<li>m {string|number} 月</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMonthEndDate</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getquarterstartdate-1" tabindex="-1"><a class="header-anchor" href="#getquarterstartdate-1" aria-hidden="true">#</a> getQuarterStartDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本季度的开始日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2022-06-17</span>
jstk<span class="token punctuation">.</span><span class="token function">getQuarterStartDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-04-01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getquarterenddate" tabindex="-1"><a class="header-anchor" href="#getquarterenddate" aria-hidden="true">#</a> getQuarterEndDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本季度的结束日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2022-6-16</span>
jstk<span class="token punctuation">.</span><span class="token function">getQuarterEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getyearstartdate" tabindex="-1"><a class="header-anchor" href="#getyearstartdate" aria-hidden="true">#</a> getYearStartDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本年的开始日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getYearStartDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-01-01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getyearenddate" tabindex="-1"><a class="header-anchor" href="#getyearenddate" aria-hidden="true">#</a> getYearEndDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获得本年的结束日期</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getYearEndDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-12-31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getfirstorlastdayofyear" tabindex="-1"><a class="header-anchor" href="#getfirstorlastdayofyear" aria-hidden="true">#</a> getFirstOrLastDayOfYear</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取某年第一天或最后一天</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>year {string|number} 年份</li>
<li>type {number} 类型 -1：第一天,1：最后一天</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getFirstOrLastDayOfYear</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-01-01</span>
jstk<span class="token punctuation">.</span><span class="token function">getFirstOrLastDayOfYear</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-12-31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getbeforedate" tabindex="-1"><a class="header-anchor" href="#getbeforedate" aria-hidden="true">#</a> getBeforeDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取近三天、近一周、近一个月日期（包含当天）</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>len {number} 天数 1：当天 默认 3：近三天 7：近7天，30：近30天</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2022-6-17</span>
jstk<span class="token punctuation">.</span><span class="token function">getBeforeDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-6-17</span>
jstk<span class="token punctuation">.</span><span class="token function">getBeforeDate</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-15</span>
jstk<span class="token punctuation">.</span><span class="token function">getBeforeDate</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-06-11</span>
jstk<span class="token punctuation">.</span><span class="token function">getBeforeDate</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-05-19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h3>
<h4 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> _ajax</h4>
<ul>
<li>说明：</li>
</ul>
<p>XMLHttpRequest 简易封装成 ajax 请求</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>setting {Object} 配置
<ul>
<li>url {string} 请求地址</li>
<li>method {string} 请求类型，默认为 GET</li>
<li>async {boolean} 是否异步，默认为 true</li>
<li>data {Object} 请求参数</li>
<li>dataType {string} 返回数据类型，默认为 json</li>
<li>success {Function} 成功回调</li>
<li>error {Function} 失败回调</li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">_ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">"post"</span><span class="token punctuation">,</span> <span class="token comment">// 请求方式</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"http://baidu.com"</span><span class="token punctuation">,</span>  <span class="token comment">// 请求地址</span>
  <span class="token literal-property property">async</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否异步</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">"JSON"</span><span class="token punctuation">,</span> <span class="token comment">// 解析方式</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">// 参数</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"zs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 请求成功回调</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">error</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 请求失败回调</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> _fetch</h4>
<ul>
<li>说明：</li>
</ul>
<p>封装 fetch 请求</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>url {string} 请求地址</li>
<li>setting {Object} 配置
<ul>
<li>method {string} 请求类型，默认为 GET</li>
<li>headers {Object} 请求头</li>
<li>credentials {string} 请求凭证</li>
<li>body {Object} 请求参数 （post 使用body作为参数传值）</li>
<li>mode {string} 请求模式</li>
<li>redirect {string} 请求重定向</li>
<li>cache {string} 请求缓存</li>
<li>data {Object} 请求参数 （get，post都可以）</li>
</ul>
</li>
<li>{Promise&lt;unknown&gt;} 返回 Promise 对象</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;unknown&gt;} 返回 Promise 对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">_fetch</span><span class="token punctuation">(</span><span class="token string">"http://baidu.com"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span><span class="token string">"application/json"</span> <span class="token comment">// 设置请求头</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">"include"</span><span class="token punctuation">,</span>
  <span class="token comment">// body: JSON.stringify({name:123}),</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'no-cors'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'follow'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"zs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inspect" tabindex="-1"><a class="header-anchor" href="#inspect" aria-hidden="true">#</a> Inspect</h3>
<h4 id="istype" tabindex="-1"><a class="header-anchor" href="#istype" aria-hidden="true">#</a> isType</h4>
<ul>
<li>说明：</li>
</ul>
<p>类型判断</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>type {string} 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol</li>
<li>val {any} 值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否符合类型</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否字符串</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否数字</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isboolean" tabindex="-1"><a class="header-anchor" href="#isboolean" aria-hidden="true">#</a> isBoolean</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否 boolean</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> isFunction</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否函数</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isnull" tabindex="-1"><a class="header-anchor" href="#isnull" aria-hidden="true">#</a> isNull</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否为 null</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isundefined" tabindex="-1"><a class="header-anchor" href="#isundefined" aria-hidden="true">#</a> isUndefined</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否 undefined</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isobject" tabindex="-1"><a class="header-anchor" href="#isobject" aria-hidden="true">#</a> isObject</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否对象</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//  rue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray" aria-hidden="true">#</a> isArray</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否数组</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isdate" tabindex="-1"><a class="header-anchor" href="#isdate" aria-hidden="true">#</a> isDate</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否时间</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isregexp" tabindex="-1"><a class="header-anchor" href="#isregexp" aria-hidden="true">#</a> isRegExp</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否正则</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iserror" tabindex="-1"><a class="header-anchor" href="#iserror" aria-hidden="true">#</a> isError</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否错误对象</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isError</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="issymbol" tabindex="-1"><a class="header-anchor" href="#issymbol" aria-hidden="true">#</a> isSymbol</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否 Symbol 函数</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ispromise" tabindex="-1"><a class="header-anchor" href="#ispromise" aria-hidden="true">#</a> isPromise</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否 Promise 对象</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isPromise</span><span class="token punctuation">(</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isset" tabindex="-1"><a class="header-anchor" href="#isset" aria-hidden="true">#</a> isSet</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否 Set 对象</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isSet</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isfalse" tabindex="-1"><a class="header-anchor" href="#isfalse" aria-hidden="true">#</a> isFalse</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否为 false</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"null"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"undefined"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"NaN"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="istrue" tabindex="-1"><a class="header-anchor" href="#istrue" aria-hidden="true">#</a> isTrue</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否为 true</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>o {any} 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isTrue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="isios" tabindex="-1"><a class="header-anchor" href="#isios" aria-hidden="true">#</a> isIos</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断当前环境是否为ios苹果手机</p>
<ul>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isIos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getmobileenv" tabindex="-1"><a class="header-anchor" href="#getmobileenv" aria-hidden="true">#</a> getMobileEnv</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取当前属于哪种类型手机运行环境</p>
<ul>
<li>
<p>返回值：</p>
<p>{string|boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getMobileEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ispc" tabindex="-1"><a class="header-anchor" href="#ispc" aria-hidden="true">#</a> isPC</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断当前环境是否为 PC 端</p>
<ul>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isPC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getbrowsertype" tabindex="-1"><a class="header-anchor" href="#getbrowsertype" aria-hidden="true">#</a> getBrowserType</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取浏览器类型</p>
<ul>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getBrowserType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="checkpwdlv" tabindex="-1"><a class="header-anchor" href="#checkpwdlv" aria-hidden="true">#</a> checkPwdLv</h4>
<ul>
<li>说明：</li>
</ul>
<p>检测密码强度</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string}</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 级别 0-4</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">checkPwdLv</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="verifyformatiscorrect" tabindex="-1"><a class="header-anchor" href="#verifyformatiscorrect" aria-hidden="true">#</a> verifyFormatIsCorrect</h4>
<ul>
<li>说明：</li>
</ul>
<p>检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>str {string} 检查的字符串</li>
<li>type {string} 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english, chinese, lower, upper, HTML</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">verifyFormatIsCorrect</span><span class="token punctuation">(</span><span class="token string">"15061709876"</span><span class="token punctuation">,</span> <span class="token string">"phone"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
jstk<span class="token punctuation">.</span><span class="token function">verifyFormatIsCorrect</span><span class="token punctuation">(</span><span class="token string">"025-1234567"</span><span class="token punctuation">,</span><span class="token string">"tel"</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iscardid" tabindex="-1"><a class="header-anchor" href="#iscardid" aria-hidden="true">#</a> isCardID</h4>
<ul>
<li>说明：</li>
</ul>
<p>严格的身份证校验</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>sId {string} 身份证号码</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isCardID</span><span class="token punctuation">(</span><span class="token string">"350524199010109876"</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ispcbroswer" tabindex="-1"><a class="header-anchor" href="#ispcbroswer" aria-hidden="true">#</a> isPCBroswer</h4>
<ul>
<li>说明：</li>
</ul>
<p>判断是否是PC浏览器</p>
<ul>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">isPCBroswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h3>
<h4 id="setlocal" tabindex="-1"><a class="header-anchor" href="#setlocal" aria-hidden="true">#</a> setLocal</h4>
<ul>
<li>说明：</li>
</ul>
<p>设置 localStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
<li>val {any} 值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">setLocal</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getlocal" tabindex="-1"><a class="header-anchor" href="#getlocal" aria-hidden="true">#</a> getLocal</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取 localStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getLocal</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
<span class="token comment">// "zhangsan"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="removelocal" tabindex="-1"><a class="header-anchor" href="#removelocal" aria-hidden="true">#</a> removeLocal</h4>
<ul>
<li>说明：</li>
</ul>
<p>清除某个 localStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">removeLocal</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="clearlocal" tabindex="-1"><a class="header-anchor" href="#clearlocal" aria-hidden="true">#</a> clearLocal</h4>
<ul>
<li>说明：</li>
</ul>
<p>清除所有 localStorage</p>
<ul>
<li>示例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">clearLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="setsession" tabindex="-1"><a class="header-anchor" href="#setsession" aria-hidden="true">#</a> setSession</h4>
<ul>
<li>说明：</li>
</ul>
<p>设置 sessionStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
<li>val {any} 值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">setSession</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getsession" tabindex="-1"><a class="header-anchor" href="#getsession" aria-hidden="true">#</a> getSession</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取 sessionStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any} 值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
<span class="token comment">// "zhangsan"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="removesession" tabindex="-1"><a class="header-anchor" href="#removesession" aria-hidden="true">#</a> removeSession</h4>
<ul>
<li>说明：</li>
</ul>
<p>清除某个 sessionStorage</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>key {string} 键</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">removeSession</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="clearsession" tabindex="-1"><a class="header-anchor" href="#clearsession" aria-hidden="true">#</a> clearSession</h4>
<ul>
<li>说明：</li>
</ul>
<p>清除所有 sessionStorage</p>
<ul>
<li>示例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">clearSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="setcookie" tabindex="-1"><a class="header-anchor" href="#setcookie" aria-hidden="true">#</a> setCookie</h4>
<ul>
<li>说明：</li>
</ul>
<p>设置 cookie</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 键</li>
<li>value {any} 值</li>
<li>options {Object} 配置
<ul>
<li>expires {number} 过期时间，单位：秒</li>
<li>path {string} 路径</li>
<li>domain {string} 域名</li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">"www.baidu.com"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getcookie" tabindex="-1"><a class="header-anchor" href="#getcookie" aria-hidden="true">#</a> getCookie</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取 cookie</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 键</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="removecookie" tabindex="-1"><a class="header-anchor" href="#removecookie" aria-hidden="true">#</a> removeCookie</h4>
<ul>
<li>说明：</li>
</ul>
<p>删除某个 cookie</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 键</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> Dom</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $</h4>
<ul>
<li>说明：</li>
</ul>
<p>查找dom元素，类似jquery的$</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>selector {string} 选择器</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{HTMLElement} 元素</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#id"</span><span class="token punctuation">)</span>
jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".class"</span><span class="token punctuation">)</span>
jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hasclass" tabindex="-1"><a class="header-anchor" href="#hasclass" aria-hidden="true">#</a> hasClass</h4>
<ul>
<li>说明：</li>
</ul>
<p>检测类名，校验指定元素的类名是否包含指定的类名</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
<li>name {string} 类名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  jstk<span class="token punctuation">.</span><span class="token function">hasClass</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">)</span>
  <span class="token comment">// ['a ', '', ' ', index: 0, input: 'a b', groups: undefined]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="addclass" tabindex="-1"><a class="header-anchor" href="#addclass" aria-hidden="true">#</a> addClass</h4>
<ul>
<li>说明：</li>
</ul>
<p>添加类名</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
<li>name {string} 类名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  jstk<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">)</span>
  <span class="token comment">// &lt;div id="e" class="a b c">&lt;/div></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="removeclass" tabindex="-1"><a class="header-anchor" href="#removeclass" aria-hidden="true">#</a> removeClass</h4>
<ul>
<li>说明：</li>
</ul>
<p>删除类名</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
<li>name {string} 类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  jstk<span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">)</span>
  <span class="token comment">// &lt;div id="e" class="a b">&lt;/div></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="replaceclass" tabindex="-1"><a class="header-anchor" href="#replaceclass" aria-hidden="true">#</a> replaceClass</h4>
<ul>
<li>说明：</li>
</ul>
<p>替换类名</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
<li>newName {string} 新类名</li>
<li>oldName {string} 旧类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  jstk<span class="token punctuation">.</span><span class="token function">replaceClass</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">,</span><span class="token string">"d"</span><span class="token punctuation">)</span>
    <span class="token comment">// &lt;div id="e" class="a b d">&lt;/div></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="siblings" tabindex="-1"><a class="header-anchor" href="#siblings" aria-hidden="true">#</a> siblings</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取兄弟节点</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*[]}  兄弟节点数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [&lt;div id="e" class="a b c">&lt;/div>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getbystyle" tabindex="-1"><a class="header-anchor" href="#getbystyle" aria-hidden="true">#</a> getByStyle</h4>
<ul>
<li>说明：</li>
</ul>
<p>获取行间样式属性</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>ele {Dom} 元素</li>
<li>name {string} 属性名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 属性值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  jstk<span class="token punctuation">.</span><span class="token function">getByStyle</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"color"</span><span class="token punctuation">)</span> 
  <span class="token comment">// "red"</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="elinsertafter" tabindex="-1"><a class="header-anchor" href="#elinsertafter" aria-hidden="true">#</a> elInsertAfter</h4>
<ul>
<li>说明：</li>
</ul>
<p>在指定元素之后插入新元素</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>el {Dom} 元素</li>
<li>htmlString {string} 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">elInsertAfter</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"&lt;div>123&lt;/div>"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="elinsertbefore" tabindex="-1"><a class="header-anchor" href="#elinsertbefore" aria-hidden="true">#</a> elInsertBefore</h4>
<ul>
<li>说明：</li>
</ul>
<p>在指定元素之前插入新元素</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>el {Dom} 当前元素</li>
<li>htmlString {string} 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">elInsertBefore</span><span class="token punctuation">(</span>jstk<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"&lt;div>123&lt;/div>"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h3>
<h4 id="getblobtype" tabindex="-1"><a class="header-anchor" href="#getblobtype" aria-hidden="true">#</a> getBlobType</h4>
<ul>
<li>说明：</li>
</ul>
<p>根据文件名称（有文件类型） 查询对应blob type</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 名称，例如：&quot;image/png&quot;</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} blob type</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">getBlobType</span><span class="token punctuation">(</span><span class="token string">".image/png"</span><span class="token punctuation">)</span>
<span class="token comment">// "text/xml"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="downloadfile" tabindex="-1"><a class="header-anchor" href="#downloadfile" aria-hidden="true">#</a> downloadFile</h4>
<ul>
<li>说明：</li>
</ul>
<p>根据文件名称（带类型名称）和二进制数据流下载文件</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>name {string} 文件名称（带类型）</li>
<li>blobFile {sring} 二进制文件</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否下载成功</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token string">"a.png"</span><span class="token punctuation">,</span><span class="token string">"...."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h3>
<h4 id="resizefontsize" tabindex="-1"><a class="header-anchor" href="#resizefontsize" aria-hidden="true">#</a> resizeFontSize</h4>
<ul>
<li>说明：</li>
</ul>
<p>根据窗口大小自适应字体大小 用于大屏图表中的文案字体大小计算</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>val {number} 初始字体大小 默认：16</li>
<li>initWidth {number} 初始宽度 默认：1920</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 返回计算后字体大小</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">resizeFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
jstk<span class="token punctuation">.</span><span class="token function">resizeFont</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">1366</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="resizeviewscale" tabindex="-1"><a class="header-anchor" href="#resizeviewscale" aria-hidden="true">#</a> resizeViewScale</h4>
<ul>
<li>说明：</li>
</ul>
<p>浏览器窗口变化页面缩放（数据可视化大屏用）</p>
<ul>
<li>
<p>参数：</p>
<ul>
<li>@param options {object} 参数 {id: 元素id, width : 标准/设计稿/实际宽度 默认：1920, height : 标准/设计稿/实际高度  默认：1080,mode: 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)}</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../lib/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#app-main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.top</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.left</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #1e6acb<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.right</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f0bd14<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-main<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>1080px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		头部
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		左侧
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		右侧
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> <span class="token function-variable function">initResize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> opt <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'#app-main'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"scaleToFill"</span> <span class="token comment">// 或者 "aspectFit"</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      jstk<span class="token punctuation">.</span><span class="token function">resizeViewScale</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    jstk<span class="token punctuation">.</span><span class="token function">resizeViewScale</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">initResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dayjs" tabindex="-1"><a class="header-anchor" href="#dayjs" aria-hidden="true">#</a> dayjs</h4>
<ul>
<li>说明：</li>
</ul>
<p>内部引入了dayjs，可以使用dayjs的方法，详情请查看dayjs文档<a href="https://dayjs.gitee.io/zh-CN/" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a></p>
<ul>
<li>示例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment">// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'</span>
jstk<span class="token punctuation">.</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span><span class="token punctuation">)</span>
<span class="token comment">// '2020-04-02 08:02:17'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h4>
<ul>
<li>说明：</li>
</ul>
<p>内部引入了js-cookie，可以使用js-cookie的方法，详情请查看js-cookie文档<a href="https://github.com/js-cookie/js-cookie#readme" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a></p>
<ul>
<li>示例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jstk<span class="token punctuation">.</span>Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
jstk<span class="token punctuation">.</span>Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
<span class="token comment">// "张三"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
