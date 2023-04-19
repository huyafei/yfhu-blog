<template><div><h1 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h1>
<p>如果父类的方法本身不需要实现任何功能，仅仅是为了定义方法签名（规范），目的是让子类去覆写它，那么，可以把父类的方法声明为抽象方法，</p>
<p>抽象类和抽象方法：</p>
<ol>
<li>
<p>abstract 关键字修饰的类为 ‘抽象类’</p>
<ul>
<li>抽象类不可以实例化对象</li>
<li>一个类中没有抽象方法，也可以将其定义为抽象类（也就是抽象类中不一定有抽象方法，但是又抽象方法的类一定是抽象类）</li>
<li>abstract 和 final 关键字不可以同时修饰一个类，因为 final 关键字让类不可以被继承，而 abstract 修饰的类设计之初就是用于被继承，强迫
子类实现其定义的抽象方法，如果不被继承就没有意义</li>
</ul>
</li>
<li>
<p>abstract 关键字修饰的方法为 ‘抽象方法’</p>
<ul>
<li>抽象方法只有方法的定义，没有方法体实现，分号结尾</li>
<li>一个类中如果有抽象方法，那么这个类必需用 abstract 关键字修饰为抽象类</li>
<li>一个类继承抽象类，必需重写其抽象方法（除非该类也是抽象类）</li>
</ul>
</li>
</ol>
<p>抽象类的意义：</p>
<ul>
<li>为其子类提供了一个公共的类型</li>
<li>封装子类中的公共内容（成员变量和方法）</li>
<li>定义有抽象方法，子类虽然有不同的实现，但该方法的定义是一致的（类似于定义了‘规范’）</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Person.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day22</span><span class="token punctuation">;</span>

<span class="token comment">// 抽象类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 跑步方法
     * 抽象方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 吃饭方法
     * 抽象方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Student.java</span>
<span class="token doc-comment comment">/**
 * 一个类继承抽象类方法，必需重写其抽象方法
 */</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day22</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 跑步方法
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"学生在跑步~~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 吃饭方法
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"学生在吃饭~~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Test01.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day22</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


