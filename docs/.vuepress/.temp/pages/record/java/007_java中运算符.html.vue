<template><div><h1 id="java中运算符" tabindex="-1"><a class="header-anchor" href="#java中运算符" aria-hidden="true">#</a> java中运算符</h1>
<p>运算符是指明对操作数的运算方式。组成表达式的Java操作符有很多种（什么是操作数和操作符，例如1+2，其中1和2都是操作数，+是操作符，
操作符和操作数联合起来构成表达式）。运算符按照其要求的操作数数目来分，可以有单目运算符（1个操作数）、双目运算符（2个操作数）和
三目运算符（3个操作数）。运算符按其功能来分，有算术运算符、赋值运算符、关系运算符、逻辑运算符、位运算符、条件运算符、字符串连接运算符和
其他运算符。常见的运算符如下所示：</p>
<table>
<thead>
<tr>
<th>运算符类型</th>
<th>使用方式</th>
</tr>
</thead>
<tbody>
<tr>
<td>算术运算符</td>
<td>+、-、*、/、%（取模）、++（自加1【单目】）、--（自减1【单目】）</td>
</tr>
<tr>
<td>关系运算符</td>
<td>==、!=、&gt;、&gt;=、&lt;、&lt;=</td>
</tr>
<tr>
<td>逻辑运算符</td>
<td>&amp;（逻辑与）、\</td>
</tr>
<tr>
<td>赋值运算符</td>
<td>=、+=、-=、*=、/=、%=、^=、&amp;=、\</td>
</tr>
<tr>
<td>位运算符</td>
<td>&amp;（按位与）、\</td>
</tr>
<tr>
<td>条件运算符</td>
<td>布尔表达式?表达式1:表达式2 （三目）</td>
</tr>
<tr>
<td>字符串连接运算符</td>
<td>+</td>
</tr>
<tr>
<td>其它运算符</td>
<td>instanceof、new</td>
</tr>
</tbody>
</table>
<p><strong>备注：</strong><br>
优先级运算使用小括号括起来，例如：(1+2)*2</p>
<h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JiSuan</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 算术运算符：+、-、*、/、%（取模）、++（自加1【单目】）、--（自减1【单目】）</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        <span class="token comment">// 26</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 14</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 120</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3 java规则：int类型和int类型运算结果还是int类型，所以是 3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2 20对6取余数，结果是2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"((a + b) - b) / b = "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 比较以下两种 ++ 方式 ----------------------</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        c<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 21</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token operator">++</span>d<span class="token punctuation">;</span>
        <span class="token comment">// 21</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * ++ 在前或在后都是自加1
         */</span>
        <span class="token comment">// ------------------------</span>

        <span class="token keyword">int</span> c1 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c2 <span class="token operator">=</span> <span class="token operator">++</span>c1<span class="token punctuation">;</span>
        <span class="token keyword">int</span> d1 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d2 <span class="token operator">=</span> d1<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"c1值为："</span> <span class="token operator">+</span> c1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 21</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"c2值为："</span> <span class="token operator">+</span> c2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 21</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"d1值为："</span> <span class="token operator">+</span> d1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 21</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"d2值为："</span> <span class="token operator">+</span> d2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 20</span>
        <span class="token doc-comment comment">/**
         *  java语法规定：
         *  当++运算符出现在变量后，会先做赋值运算，再自加1
         * 	当++运算符出现在变量前，会先自加1，再做赋值运算
         */</span>


        <span class="token comment">// -- 同理</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>int类型和int类型运算结果还是int类型</li>
<li>当++运算符出现在变量后，会先做赋值运算，再自加1</li>
<li>当++运算符出现在变量前，会先自加1，再做赋值运算</li>
</ul>
<h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2>
<p>关系运算符主要是完成数据和数据之间的比较,结果是 boolan 类型 true（真） 或 false（假）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GuanXi</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 关系运算符：>、>=、&lt;、&lt;=、==、!=
         * 关系运算符主要是完成数据和数据之间的比较,结果是 boolan 类型 true（真） 或 false（假）
         */</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">>=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<p>逻辑运算符主要包括逻辑与（&amp;），逻辑或（|），逻辑异或（^），短路与（&amp;&amp;），短路或（||）。
所有逻辑运算符的特点是操作数都是<strong>布尔类型</strong>，并且最终的运算结果也是布尔类型。逻辑运算符的基本运算规则如下表所示：</p>
<table>
<thead>
<tr>
<th>运算符</th>
<th>示例</th>
<th>结果</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;</td>
<td>true &amp; true</td>
<td>true</td>
<td>如果两个操作数都为 true，则结果为 true。<br> (5&gt;3) &amp; (5&gt;4)：5大于3并且5大于4</td>
</tr>
<tr>
<td>|</td>
<td>true| false</td>
<td>true</td>
<td>如果两个操作数中有一个为 true，则结果为 true。<br> (5&gt;3) | (5&gt;10)：5大于3或者5大于10</td>
</tr>
<tr>
<td>!</td>
<td>!false</td>
<td>true</td>
<td>取反 。true 取反是 false，false 取反是 true</td>
</tr>
<tr>
<td>^</td>
<td>true^false</td>
<td>true</td>
<td>异或运算符，只要两边的操作数不同，结果就是 true</td>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>true&amp;&amp;true</td>
<td>true</td>
<td>短路与运算符，只要左边的操作数为 false，则结果就是 false。<br>短路与（&amp;&amp;）和逻辑与（&amp;）实际上最终的运行结果是完全相同的，只不过短路与（&amp;&amp;）会存在短路现象。</td>
</tr>
<tr>
<td>||</td>
<td>true||false</td>
<td>true</td>
<td>短路或运算符，只要左边的操作数为 true，则结果就是 true。<br>短路或（||）和逻辑或（|）实际上最终的运行结果是完全相同的，只不过短路或（||）会存在短路现象。</td>
</tr>
</tbody>
</table>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LuoJi</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 逻辑运算符：逻辑与（&amp;），逻辑或（|），逻辑异或（^），短路与（&amp;&amp;），短路或（||）
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">></span> <span class="token number">3</span> <span class="token operator">&amp;</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">|</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">&amp;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">&amp;</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">^</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">^</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">^</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">^</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//重点研究逻辑与（&amp;）和短路与（&amp;&amp;）的区别</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">98</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">></span> y <span class="token operator">&amp;</span> x <span class="token operator">></span> z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">></span> y <span class="token operator">&amp;&amp;</span> x <span class="token operator">></span> z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token comment">//通过以上测试得出，逻辑与（&amp;）和短路与（&amp;&amp;）最终运行结果相同</span>
        <span class="token comment">//那么它们有什么区别呢？请看以下代码。</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m <span class="token operator">></span> n <span class="token operator">&amp;</span> m <span class="token operator">></span> n<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token comment">//逻辑与（&amp;）运算符，只有当两边的操作数都是true的时候，结果才是</span>
        <span class="token comment">//true，只要有一个是false，结果必然是false。以上程序逻辑与</span>
        <span class="token comment">//左边的表达式(m > n)显然结果是false，通过左边的表达式已经可</span>
        <span class="token comment">//以得出结果是false了，右边的表达式没有执行的必要，那我们来看一下</span>
        <span class="token comment">//右边的表达式有没有执行，只要输出n就可以了断定。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n = "</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//101</span>
        <span class="token comment">//以上程序的运行结果是101，足以说明n++已经执行了。也说明了逻辑与</span>
        <span class="token comment">//运算符无论左边表达式结果是true还是false，右边表达式一定会执行。</span>
        <span class="token comment">//那我们来看一下短路与（&amp;&amp;）是怎样的？</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k <span class="token operator">></span> f <span class="token operator">&amp;&amp;</span> k <span class="token operator">></span> f<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"f = "</span> <span class="token operator">+</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//100</span>
        <span class="token comment">//通过以上测试得出f++并没有执行，因为左边表达式(k > f)为false</span>
        <span class="token comment">//右边的表达式就不再执行了，这种现象被称为短路现象。也就是说对于短路与</span>
        <span class="token comment">//来说，左边的表达式只要为false，就会发生短路，右边表达式不再执行了。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong><br>
逻辑与（&amp;） 和 短路与（&amp;&amp;）的区别：</p>
<ol>
<li>逻辑与（&amp;），只有当两边的操作数都是true的时候，结果才是true，只要有一个是false，结果必然是false。（两边都会执行）</li>
<li>短路与（&amp;&amp;），只要左边表达式结果是false，就会发生短路，右边表达式不再执行了。如果左边是 true 右边才会执行。</li>
</ol>
<p>逻辑或（|） 和 短路或（||）的区别：</p>
<ol>
<li>逻辑或（|），两边的操作数只要有一个是true，结果就是true，（两边都会执行）</li>
<li>短路或（||），只要左边表达式结果是true，就会发生短路，右边表达式不再执行了。如果左边是 false 右边才会执行。</li>
</ol>
<h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2>
<p>后续更新</p>
<h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2>
<p>赋值运算符目前也是只需要掌握=、+=、-=、<em>=、/=、%=，其它和二进制相关的内容也是到后面遇到的时候再详细学习。赋值类的运算符包括基本赋值运算符（=）和扩展的赋值运算符（+=、-=、</em>=、/=、%=）。我们来看一段代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FuZhi</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 赋值运算符：=、+=、-=、*=、/=、%=
         * 赋值运算符主要是完成数据和数据之间的赋值，结果是 int 类型
         */</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        a <span class="token operator">=</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
        a <span class="token operator">+=</span> b<span class="token punctuation">;</span> <span class="token comment">// 等同于  a = a + b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
        a <span class="token operator">-=</span> b<span class="token punctuation">;</span> <span class="token comment">// 等同于  a = a - b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
        a <span class="token operator">*=</span> b<span class="token punctuation">;</span> <span class="token comment">// 等同于  a = a * b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 36</span>
        a <span class="token operator">/=</span> b<span class="token punctuation">;</span> <span class="token comment">// 等同于  a = a / b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
        a <span class="token operator">%=</span> b<span class="token punctuation">;</span> <span class="token comment">// 等同于  a = a % b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>

        <span class="token keyword">byte</span> bt <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        bt <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 等同于  bt = (byte)(bt + 1)，1 是 int 类型</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符" aria-hidden="true">#</a> 条件运算符</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TiaoJian</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 条件运算符/三目运算符：布尔表达式?表达式1:表达式2
         * 先判断布尔表达式，如果为 true，则输出表达式1，否则输出表达式2
         */</span>

        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//编译报错：这不是一个语句</span>
        <span class="token comment">//flag ? 1 : 0;</span>

        <span class="token comment">//以上如果是一条完整的语句应该这样写</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> flag <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"k = "</span> <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>

        <span class="token comment">//三目运算符最经典的用法</span>
        <span class="token keyword">boolean</span> sex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//当布尔变量sex为true则结果是'男'，反之'女'</span>
        <span class="token keyword">char</span> gender <span class="token operator">=</span> sex <span class="token operator">?</span> <span class="token char">'男'</span> <span class="token operator">:</span> <span class="token char">'女'</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"性别："</span> <span class="token operator">+</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//男</span>
        sex <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        gender <span class="token operator">=</span> sex <span class="token operator">?</span> <span class="token char">'男'</span> <span class="token operator">:</span> <span class="token char">'女'</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"性别："</span> <span class="token operator">+</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//女</span>

        <span class="token comment">//又如</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">==</span> y <span class="token operator">?</span> <span class="token string">"x和y相等"</span> <span class="token operator">:</span> <span class="token string">"x和y不相等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串连接运算符" tabindex="-1"><a class="header-anchor" href="#字符串连接运算符" aria-hidden="true">#</a> 字符串连接运算符</h2>
<p>在java中字符串都使用半角双引号括起来的，字符串属于引用数据类型，使用 String 类型来表示字符串。
例如： String str = &quot;hello&quot;; 字符串的链接 使用 &quot;+&quot; 来连接。<br>
&quot;+&quot; 符号在java中有两个作用：</p>
<ol>
<li>在 &quot;+&quot; 运算的时候，两边的操作数都是数字的话，是求和运算，</li>
<li>如果其中有一个操作数是字符串类型，那么一定会进行字符串拼接运算</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PinJ</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a + b = "</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a + b = 26</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">"+"</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20+6=26</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
