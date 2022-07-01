<template><div><h1 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储" aria-hidden="true">#</a> 数据存储</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>更新时间：2020年2月8日</strong></p>
</div>
<h2 id="本地储存" tabindex="-1"><a class="header-anchor" href="#本地储存" aria-hidden="true">#</a> 本地储存</h2>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3>
<ul>
<li>存储在客户端文件</li>
<li>在浏览器（客户端）和服务器间来回传递，可读写（http传输携带 服务器可访问）</li>
<li>大小不超过4k（4k左右）</li>
<li>在所有同源（同一域名）窗口中都是共享的</li>
<li>在设置的时间过期之前一直有效，即使浏览器或窗口关闭</li>
<li>可以限制数据只属于某个路径下，即设置path路径（只能在此路径下显示）</li>
<li>可以设置过期时间（以 UTC 或 GMT 时间）</li>
</ul>
<p><strong>使用：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//设置cookie</span>
<span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter">cname<span class="token punctuation">,</span> cvalue<span class="token punctuation">,</span> exdays</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    d<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>exdays <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> expires <span class="token operator">=</span> <span class="token string">"expires="</span><span class="token operator">+</span>d<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cname <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> cvalue <span class="token operator">+</span> <span class="token string">";"</span> <span class="token operator">+</span> expires <span class="token operator">+</span> <span class="token string">";path=/"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//删除cookie</span>
<span class="token keyword">function</span> <span class="token function">delCookie</span><span class="token punctuation">(</span><span class="token parameter">cname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cname <span class="token operator">+</span> <span class="token string">"=;expires=Thu, 01 Jan 1970 00:00:00 GM"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//获取cookie</span>
<span class="token keyword">function</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token parameter">cname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> cname <span class="token operator">+</span> <span class="token string">"="</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ca <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ca<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> c <span class="token operator">=</span> ca<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>  <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token punctuation">,</span> c<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//检查cookie</span>
<span class="token keyword">function</span> <span class="token function">checkCookie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Welcome again "</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        user <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"Please enter your name:"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token string">""</span> <span class="token operator">&amp;&amp;</span> user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> user<span class="token punctuation">,</span> <span class="token number">365</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h3>
<ul>
<li>存储在客户端文件</li>
<li>客户端只能读取本地存储</li>
<li>可以达到5M，甚至更多</li>
<li>只在当前同源同窗口中共享（只在当前窗口中共享）</li>
<li>当前浏览器窗口关闭前有效（关闭浏览器或窗口数据就销毁了）</li>
</ul>
<p><strong>使用：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//设置</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token comment">//获取</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">)</span>
<span class="token comment">//清除某值</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">)</span>
<span class="token comment">//清除所有</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3>
<ul>
<li>存储在客户端文件</li>
<li>客户端只能读取本地存储</li>
<li>可以达到5M，甚至更多</li>
<li>在所有同源（同一域名）窗口中都是共享的</li>
<li>永久保存，浏览器或窗口关闭也一直保存</li>
</ul>
<p><strong>使用：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//设置</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token comment">//获取</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">)</span>
<span class="token comment">//清除某值</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>keyname<span class="token punctuation">)</span>
<span class="token comment">//清除所有</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3>
<p>对cookie、sessionStorage和localStorage进行简单表格化整理
// cookie、sessionStorage和localStorage的区别</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;&lt;/th&gt;
&lt;th&gt;cookie&lt;/th&gt;
&lt;th&gt;sessionStorage&lt;/th&gt;<br>
&lt;th&gt;localStorage&lt;/th&gt;
&lt;/tr&gt;
&lt;tr &gt;
&lt;td&gt;储存大小&lt;/td&gt;
&lt;td&gt;4k左右&lt;/td&gt;
&lt;td colspan=&quot;2&quot; &gt;&lt;=5M&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;储存方式&lt;/td&gt;
&lt;td colspan=&quot;3&quot;&gt;本地保存&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;服务器读取&lt;/td&gt;
&lt;td &gt;可以读写&lt;/td&gt;
&lt;td &gt;不可以&lt;/td&gt;
&lt;td &gt;不可以&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;作用域（数据共享）&lt;/td&gt;
&lt;td&gt;同源窗口&lt;br&gt;或指定path路径&lt;/td&gt;
&lt;td&gt;同源同窗口&lt;/td&gt;
&lt;td&gt;同源窗口&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;期效性&lt;/td&gt;
&lt;td&gt;设置失效时间&lt;/td&gt;
&lt;td&gt;当前窗口关闭前&lt;/td&gt;
&lt;td&gt;永久保存&lt;/td&gt;
&lt;/tr&gt;</p>
<p>&lt;/table&gt;</p>
</div></template>
