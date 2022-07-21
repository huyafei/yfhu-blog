<template><div><h1 id="变量和数据类型" tabindex="-1"><a class="header-anchor" href="#变量和数据类型" aria-hidden="true">#</a> 变量和数据类型</h1>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p>java 中的变量类似于数学中x、y、z，分为两种变量类型：基本数据类型变量和引用数据类型变量（后续说明）。<br>
java 中变量必需先定义后使用，定义变量时可以先赋予初始值。
注意： <code v-pre>=</code> 是赋值语句。
例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个整型 init 类型的 变量 x 赋值 30</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ul>
<li>变量要先定义后使用。</li>
<li>变量可以定义就赋值，也可以先定义后赋值。</li>
<li>一行可以定义多个变量。</li>
<li>在同一作用域中，变量名不能重复。</li>
<li>变量类型定义后，值必需是相同类型的值。例如：定义 整型 int 类型值，那么值也必需是 int 类型的值。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Var</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义就赋值</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 30</span>
    <span class="token comment">// 先定义后赋值</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 60</span>
    <span class="token comment">// 一行可以定义多个变量</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    b <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 10</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 10</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量分类" tabindex="-1"><a class="header-anchor" href="#变量分类" aria-hidden="true">#</a> 变量分类</h3>
<p>变量根据声明的位置不同可分为：成员变量(也可以叫全局变量或实例变量)和局部变量。
方法体内的变量是局部变量，方法体外类体内的变量是成员变量。<code v-pre>static</code> 关键字修饰的称为静态成员变量。<br>
局部变量只能在当前方法体内使用，成员变量可以在类体内任意方法体内使用。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Var2</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量/实例变量/成员变量</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 静态全局变量/实例变量/成员变量</span>

  <span class="token comment">// int a，int b 局部变量</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sun</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 局部变量</span>
      <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3>
<p>局部变量只能在当前方法体内使用，成员变量可以在类体内任意方法体内使用，这就是变量作用域的概念。<br>
使用下面代码试一下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VarScope</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"xֵ:"</span><span class="token operator">+</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"yֵ:"</span><span class="token operator">+</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"zֵ:"</span><span class="token operator">+</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//编译报错，z未定义</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"xֵ:"</span><span class="token operator">+</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"yֵ:"</span><span class="token operator">+</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//编译报错，y未定义</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"zֵ:"</span><span class="token operator">+</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>VarScope.java:7: 错误: 找不到符号
        System.out.println<span class="token punctuation">(</span><span class="token string">"z?:"</span>+z<span class="token punctuation">)</span><span class="token punctuation">;</span> //编译报错，z未定义
                                 ^
  符号:   变量 z
  位置: 类 VarScope
VarScope.java:13: 错误: 找不到符号
        System.out.println<span class="token punctuation">(</span><span class="token string">"y?:"</span>+y<span class="token punctuation">)</span><span class="token punctuation">;</span> //编译报错，y未定义
                                 ^
  符号:   变量 y
  位置: 类 VarScope
<span class="token number">2</span> 个错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<ul>
<li>基本数据类型（包括四大类八小类）
<ul>
<li>整数型 byte,short,int,long</li>
<li>浮点型 float,double</li>
<li>布尔型 boolean</li>
<li>字符型 char</li>
</ul>
</li>
<li>引用数据类型
<ul>
<li>...</li>
</ul>
</li>
</ul>
<p>【注意：字符串-使用双引号&quot;abc&quot;，字符-使用单引号'a'】</p>
<h5 id="八种基本类型占用空间大小" tabindex="-1"><a class="header-anchor" href="#八种基本类型占用空间大小" aria-hidden="true">#</a> 八种基本类型占用空间大小</h5>
<table>
<thead>
<tr>
<th>基本数据类型</th>
<th>占用空间大小(单位:字节)</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td>1</td>
</tr>
<tr>
<td>short</td>
<td>2</td>
</tr>
<tr>
<td>int</td>
<td>4</td>
</tr>
<tr>
<td>long</td>
<td>8</td>
</tr>
<tr>
<td>float</td>
<td>4</td>
</tr>
<tr>
<td>double</td>
<td>8</td>
</tr>
<tr>
<td>boolean</td>
<td>1</td>
</tr>
<tr>
<td>char</td>
<td>2</td>
</tr>
</tbody>
</table>
<h4 id="二进制-十进制" tabindex="-1"><a class="header-anchor" href="#二进制-十进制" aria-hidden="true">#</a> 二进制，十进制</h4>
<p>待学</p>
<h1 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h1>
<h4 id="byte" tabindex="-1"><a class="header-anchor" href="#byte" aria-hidden="true">#</a> byte</h4>
<ul>
<li>1 个字节</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="short" tabindex="-1"><a class="header-anchor" href="#short" aria-hidden="true">#</a> short</h4>
<h4 id="int" tabindex="-1"><a class="header-anchor" href="#int" aria-hidden="true">#</a> int</h4>
<h4 id="long" tabindex="-1"><a class="header-anchor" href="#long" aria-hidden="true">#</a> long</h4>
<h4 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h4>
<h4 id="double" tabindex="-1"><a class="header-anchor" href="#double" aria-hidden="true">#</a> double</h4>
<h4 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h4>
<h4 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h4>
<h4 id="基本数据类型之间互相转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型之间互相转换" aria-hidden="true">#</a> 基本数据类型之间互相转换</h4>
<ul>
<li>byte &lt; short &lt; int &lt; long &lt; float &lt; double
char &lt;</li>
</ul>
</div></template>
