<template><div><h1 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类" aria-hidden="true">#</a> 内部类</h1>
<p>在一个类的类体中定义了的类,称为内部类。
内部类分为：成员内部类、静态内部类、局部内部类、匿名内部类</p>
<h2 id="成员内部类" tabindex="-1"><a class="header-anchor" href="#成员内部类" aria-hidden="true">#</a> 成员内部类</h2>
<ul>
<li>成员内部类与实例变量/实例方法在同一级,都属于某个Outer对象</li>
<li>一般情况下, 在实例方法中使用成员内部类创建对象</li>
<li>在Java中,所有类编译后都会生成一个独立的字节码文件,</li>
<li>内部类的字节码文件: 外部类$内部类名.class</li>
</ul>
<h2 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h2>
<ul>
<li>使用static修饰的成员 内部类</li>
<li>静态内部类一般情况下是在静态方法中使用</li>
</ul>
<h2 id="局部内部类" tabindex="-1"><a class="header-anchor" href="#局部内部类" aria-hidden="true">#</a> 局部内部类</h2>
<ul>
<li>在方法体中定义的内部类</li>
<li>局部内部类只能在方法体中使用</li>
<li>局部内部类不能有访问修饰符</li>
</ul>
<h2 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类" aria-hidden="true">#</a> 匿名内部类</h2>
<ul>
<li>匿名内部类是局部内部类的一种，就是没有类名 的内部类</li>
<li>匿名内部类没有类名,只能使用一次</li>
<li>匿名内部类可以继承一个类或实现一个接口</li>
<li>给接口/抽象类的引用赋值时,可以赋值匿名内部类对象,  接口实现类/抽象类的子类只使用一次时, 可以使用匿名内部类 ，经常, 如果方法的形参是接口/抽象类的引用,在调用方法时,可以传递匿名内部类对象</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day24</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 内部类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name1 <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span> <span class="token comment">// 实例变量</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"实例方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 一般情况下, 在实例方法中使用成员内部类创建对象</span>
        <span class="token class-name">Inner1</span> inner1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 成员内部类</span>
    <span class="token keyword">class</span> <span class="token class-name">Inner1</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token class-name">String</span> name2 <span class="token operator">=</span> <span class="token string">"李四"</span><span class="token punctuation">;</span> <span class="token comment">// 静态变量</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"静态方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 一般情况下, 在实例方法中使用成员内部类创建对象</span>
        <span class="token class-name">Inner2</span> inner2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 静态内部类</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner2</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name3 <span class="token operator">=</span> <span class="token string">"王五"</span><span class="token punctuation">;</span>
        <span class="token comment">// 局部内部类</span>
        <span class="token keyword">class</span> <span class="token class-name">Inner3</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 匿名内部类</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Inner4</span> inner4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


