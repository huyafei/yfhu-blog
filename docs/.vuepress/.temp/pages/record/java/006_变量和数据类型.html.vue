<template><div><h1 id="变量和数据类型" tabindex="-1"><a class="header-anchor" href="#变量和数据类型" aria-hidden="true">#</a> 变量和数据类型</h1>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>变量是指在内存中的一个存储单元，可以存储任意数据类型的数据。比如：一个空房间（理解为内存），放一张椅子（理解为变量），椅子上可以坐一个人也可以放一本书（人、书可以理解为不同类型的数据）。
java 中分为两种变量类型：基本数据类型变量和引用数据类型变量（后续说明）。<br>
java 中变量必需先定义后使用，变量类型必需要有，定义变量时可以先赋予初始值。
注意： <code v-pre>=</code> 是赋值语句。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>例如：
```java
<span class="token comment">// int 变量类型，x 变量名，初始值赋值为 30</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> z <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ul>
<li>变量定义时要声明变量的类型</li>
<li>变量要先定义后使用。</li>
<li>变量可以定义就赋值，也可以先定义后赋值。</li>
<li>一行可以定义多个变量。</li>
<li>在同一作用域中，变量名不能重复。</li>
<li>变量类型定义后，值必需是相同类型的值。例如：定义 整型 int 类型值，那么值也必需是 int 类型的值。</li>
<li>没有声明的变量，无法使用</li>
<li>变量名字
<ul>
<li>字母、数字、&quot;_&quot;、&quot;$&quot;，组成，但不能以数字开头。</li>
<li>不能使用保留字（java语言中使用的词，例如：int、public、static ...）</li>
<li>中文可以，但不提倡</li>
<li>驼峰式写法，要见名知意，</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Var</span> <span class="token punctuation">{</span>
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
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Var2</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量/实例变量/成员变量</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 静态全局变量/实例变量/成员变量</span>

  <span class="token comment">// int a，int b 局部变量</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sun</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 局部变量</span>
      <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3>
<p>局部变量只能在当前方法体内使用，成员变量可以在类体内任意方法体内使用，这就是变量作用域的概念。</p>
<p>使用下面代码试一下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VarScope</span> <span class="token punctuation">{</span>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>VarScope.java:7: 错误: 找不到符号
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
<h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3>
<p>java 中数据类型分为两种：基本数据类型和引用数据类型。</p>
<ul>
<li>基本数据类型（包括四大类八小类）
<ul>
<li>整型 byte,short,int,long</li>
<li>浮点型 float,double</li>
<li>布尔型 boolean</li>
<li>字符型 char</li>
</ul>
</li>
<li>引用数据类型
<ul>
<li>数组 []</li>
<li>类 class</li>
<li>接口 interface</li>
<li>枚举 enum</li>
<li>...</li>
</ul>
</li>
</ul>
<p><strong>备注：</strong></p>
<ul>
<li>整型不是四舍五入，而是舍弃小数部分</li>
<li>字符串-使用双引号 &quot;abc&quot;，字符-使用单引号 'a'</li>
</ul>
<h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h3>
<p>基本数据类型占用空间大小、取值范围：</p>
<table>
<thead>
<tr>
<th>基本数据类型</th>
<th>占用空间大小(单位:字节)</th>
<th>取值范围</th>
<th>缺省值</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte（字节型）</td>
<td>1</td>
<td>-128~127</td>
<td>0</td>
</tr>
<tr>
<td>short（短整型）</td>
<td>2</td>
<td>-32768~32767</td>
<td>0</td>
</tr>
<tr>
<td>int（整型）</td>
<td>4</td>
<td>-2147483648~2147483647</td>
<td>0</td>
</tr>
<tr>
<td>long（长整型）</td>
<td>8</td>
<td>-9223372036854775808~9223372036854775807</td>
<td>0L</td>
</tr>
<tr>
<td>float（单精度）</td>
<td>4</td>
<td>-3.4E38~3.4E38</td>
<td>0.0f</td>
</tr>
<tr>
<td>double（双精度）</td>
<td>8</td>
<td>-1.7E308~1.7E308</td>
<td>0</td>
</tr>
<tr>
<td>boolean（布尔型）</td>
<td>1</td>
<td>true/false</td>
<td>false</td>
</tr>
<tr>
<td>char（字符型）</td>
<td>2</td>
<td>0~65535</td>
<td>'\u0000'</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataType</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 基本数据类型 -----------</span>
        <span class="token comment">// byte 字节型: -128 ~ 127</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
        <span class="token comment">// 整型</span>
        <span class="token comment">// short 短整型: -32768 ~ 32767</span>
        <span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">32767</span><span class="token punctuation">;</span>
        <span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">32768</span><span class="token punctuation">;</span>
        <span class="token comment">// int 整型: -2147483648 ~ 2147483647</span>
        <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">2147483647</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2147483648</span><span class="token punctuation">;</span>
        <span class="token comment">// long 长整型: -9223372036854775808 ~ 9223372036854775807</span>
        <span class="token keyword">long</span> l1 <span class="token operator">=</span> <span class="token number">9223372036854775807L</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> l2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">9223372036854775808L</span><span class="token punctuation">;</span>
        <span class="token comment">// 浮点型</span>
        <span class="token comment">// float 单精度浮点型: -3.4E-038 ~ 3.4E-038</span>
        <span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">3.4E-038f</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> f2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3.4E-038f</span><span class="token punctuation">;</span>
        <span class="token comment">// double 双精度浮点型: -1.7E-308 ~ 1.7E-308</span>
        <span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">1.7E-308</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> d2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.7E-308</span><span class="token punctuation">;</span>
        <span class="token comment">// 布尔型</span>
        <span class="token keyword">boolean</span> bo1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> bo2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 字符型</span>
        <span class="token keyword">char</span> c1 <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> c2 <span class="token operator">=</span> <span class="token char">'\u0041'</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> c3 <span class="token operator">=</span> <span class="token char">'中'</span><span class="token punctuation">;</span>
        <span class="token comment">// 引用数据类型 -----------</span>
        <span class="token comment">// 字符串</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"中国"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面表格所展示的，每个类型不超过对应的取值范围，否则会报错。</p>
<p><strong>备注：</strong></p>
<ul>
<li>在java语言当中，整数型（byte、short、int、long）字面量默认被当做int类型处理，浮点型（例如：3.0、1.333...）的字面量被默认当做double类型处理。</li>
<li>长整型 long 后面加 l/L，一般是L便于识别</li>
<li>浮点型 float 后面加 f</li>
<li>布尔型 boolean  只有 true/false</li>
<li>字符型 char 使用单引号 'a'</li>
<li>字符串型 String 使用双引号 &quot;abc&quot;</li>
<li>除了基本类型，其他类型都是引用类型，常用的 是 String</li>
</ul>
<h4 id="基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型转换" aria-hidden="true">#</a> 基本数据类型转换</h4>
<p>6条规则：</p>
<ul>
<li>八种基本数据类型，除了 boolean 剩下的都可以互相转换类型</li>
<li>如果整数型字面量没有超出byte,short,char的取值范围，可以直接将其赋值给byte,short,char类型的变量</li>
<li>小容量向大容量转换称为自动类型转换，【容量】从小到大的排序为：byte &lt; short(char) &lt; int &lt; long &lt; float &lt; double
<ul>
<li>注：short和char都占用两个字节，但是char可以表示更大的正整数；</li>
</ul>
</li>
<li>大容量转换成小容量，称为强制类型转换，编写时必须添加“强制类型转换符”，但运行时可能出现精度损失，谨慎使用</li>
<li>byte,short,char类型混合运算时，先各自转换成int类型再做运算</li>
<li>多种数据类型混合运算，各自先转换成容量最大的那一种再做运算</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TypeConversion</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * - 八种基本数据类型，除了 boolean 剩下的都可以互相转换类型
         * - 如果整数型字面量没有超出byte,short,char的取值范围，可以直接将其赋值给byte,short,char类型的变量
         * - 小容量向大容量转换称为自动类型转换，容量从小到大的排序为：byte &lt; short(char) &lt; int &lt; long &lt; float &lt; double
         *   - 注：short和char都占用两个字节，但是char可以表示更大的正整数；
         * - 大容量转换成小容量，称为强制类型转换，编写时必须添加“强制类型转换符”，但运行时可能出现精度损失，谨慎使用
         * - byte,short,char类型混合运算时，先各自转换成int类型再做运算
         * - 多种数据类型混合运算，各自先转换成容量最大的那一种再做运算
         */</span>
        <span class="token comment">// 1000超出byte取值范围，不能直接赋值</span>
        <span class="token comment">//byte b1 = 1000;</span>
        <span class="token comment">// 如果想让上面程序编译通过，可以手动强制类型转换，但程序运行时会损失精度</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token comment">// -24</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 20没有超出byte取值范围，可以直接赋值</span>
        <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">// 1000没有超出short取值范围，可以直接赋值</span>
        <span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token comment">//1000本身就是int类型，以下程序不存在类型转换</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token comment">//小容量赋值给大容量属于自动类型转换</span>
        <span class="token keyword">long</span> d <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token comment">//大容量无法直接赋值给小容量</span>
        <span class="token comment">//int e = d;</span>
        <span class="token comment">//加强制类型转换符</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>d<span class="token punctuation">;</span>
        <span class="token comment">//int类型和int类型相除最后还是int类型，所以结果是3</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token comment">// 3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> g <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//g是long类型，long类型和int类型最终结果是long类型，无法赋值给int类型</span>
        <span class="token comment">//int h = g / 3;</span>
        <span class="token comment">//添加强制类型转换符</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>g <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//long类型赋值给long类型</span>
        <span class="token keyword">long</span> m <span class="token operator">=</span> g <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token comment">//g先转换成byte，byte和int运算，最后是int类型，无法直接赋值给byte</span>
        <span class="token comment">//byte x = (byte)g / 3;</span>
        <span class="token comment">//将以上程序的优先级修改一下,多种数据类型混合运算，各自先转换成容量最大的那一种再做运算,所以g / 3是long类型</span>
        <span class="token keyword">byte</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>g <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">short</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token punctuation">(</span>g <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">short</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> j <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token comment">//short和byte运算时先各自转换成int再做运算，结果是int类型，无法赋值给short,规则：byte,short,char类型混合运算时，先各自转换成int类型再做运算</span>
        <span class="token comment">//short k = i + j;</span>
        <span class="token keyword">short</span> k <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> n <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
        <span class="token keyword">char</span> cc <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span>
        <span class="token comment">// a</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"cc = "</span> <span class="token operator">+</span> cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将字符型char转换成数字，'a'对应的ASCII是97</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//char类型和int类型混合运算，char类型先转换成int再做运算，最终197</span>
        <span class="token keyword">int</span> o <span class="token operator">=</span> cc <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h3>
<p>后续更新</p>
</div></template>


