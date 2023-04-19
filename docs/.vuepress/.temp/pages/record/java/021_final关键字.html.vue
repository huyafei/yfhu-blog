<template><div><h1 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字" aria-hidden="true">#</a> final关键字</h1>
<p>final 关键字表示最终的、不可变的。可以修饰类, 修饰字段, 修饰方法,修饰局部变量,修饰方法的形参：</p>
<ul>
<li>final 修饰类, 表示最终类,不能被继承,不能作为父类存在
<ul>
<li>使用场景：当定义的类不想被别的类继承时, 就可以使用 final 修饰，如 System类/String类就是使用 final 修饰的</li>
</ul>
</li>
<li>final 修饰字段,在定义时必须显示初始化, 不能被修改, 一般与static同时使用,所有字母都大写,称为 final 常量</li>
<li>final 修饰方法,不能被覆盖(重写)</li>
<li>final 修饰局部变量, 一旦初始化就不能再修改, 注意 final 修饰引用类型变量,是指这个变量不能再指向 其他对象 , 可以修改它的字段值</li>
<li>final 修饰方法形参, 在方法体中不能修改 final 参数的值</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day20</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * final 修饰类，无法被继承，称为最终类
 * 使用场景：当定义的类不想被别的继承时，例如：System/String
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day20</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * final 修饰字段
 * 1. 要么在定义的时候初始化，要么在构造方法中初值
 * 2. final 字段不能重复赋值
 * 3. 一般情况下，final修饰字段时, 同时使用static一起修饰, 称为final常量 , 所有字母都大写
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Father2</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token keyword">private</span> <span class="token keyword">int</span> aa <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// final修饰字段在定义时初始化值</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> bb<span class="token punctuation">;</span> <span class="token comment">// final修饰字段, 在构造函数初始化</span>

    <span class="token keyword">final</span> <span class="token keyword">static</span>  <span class="token class-name">String</span> <span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span> <span class="token comment">// final 常量</span>

    <span class="token keyword">public</span> <span class="token class-name">Father2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bb <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
        <span class="token comment">// final 定义字段不能重新赋值</span>
       <span class="token comment">// aa = 14;</span>
       <span class="token comment">// bb = 15;</span>
       <span class="token comment">// NAME = 16;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day20</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * final 修饰方法，无法被覆盖/重写，但可以被继承
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Father3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"father 在跑步~~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"father 在吃饭~~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day20</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son3</span> <span class="token keyword">extends</span> <span class="token class-name">Father3</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"son 在跑步~~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  final 修饰方法可以被继承</span>
        <span class="token comment">// eat();</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * final 修饰方法无法被覆盖/重写
     */</span>
    <span class="token comment">// public final void eat() {</span>
    <span class="token comment">//     System.out.println("son 在吃饭~~");</span>
    <span class="token comment">// }</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day20</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * final 修饰方法形参, '在方法体中'不能修改 final 参数的值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Father4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a:"</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">"b:"</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">out1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// b = 4; // final形参不能被赋值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a:"</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">"b:"</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


