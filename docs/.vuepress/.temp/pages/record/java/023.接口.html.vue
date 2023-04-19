<template><div><h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1>
<ul>
<li>接口（interface）可以看出是特殊的抽象类，只包含抽象方法的抽象类，所谓 interface 就是比抽象类还要抽象的接口</li>
<li>在抽象类中，抽象方法本质上是定义接口规范，即规定高层类的接口，从而保证所有子类都有相同的接口实现，同样接口也可以理解为一个操作规范，</li>
<li>接口与继承不同，类通过 implements 来实现接口也可以实现多个接口，用逗号隔开，同时该类要实现这些接口中定义的方法也就是重写</li>
<li>接口也可以作为类型声明变量</li>
<li>不能实例化对象</li>
<li>建议面向接口编程</li>
</ul>
<h2 id="java接口定义与实现" tabindex="-1"><a class="header-anchor" href="#java接口定义与实现" aria-hidden="true">#</a> Java接口定义与实现</h2>
<ol>
<li>Java接口定义的语法:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[修饰符]   interface  接口名 {

    接口中的方法默认使用public abstract修饰
    
    接口中的字段默认使用 public static final修饰
    
    接口中可以定义public static 静态方法
    
    定义public  default方法

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Java接口的使用
通过 implements 实现接口，同时，要重写接口中方法</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[修饰符]  class  类名  implements  接口{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个抽象类没有字段，所有方法全部都是抽象方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day23</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以把该抽象类改写为接口：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day23</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以省略 public abstract：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day23</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类和接口区别" tabindex="-1"><a class="header-anchor" href="#抽象类和接口区别" aria-hidden="true">#</a> 抽象类和接口区别</h2>
<p>相同点：</p>
<ul>
<li>都可以定义抽象方法</li>
<li>都不能实例化对象</li>
<li>接口/抽象类的抽象方法都需要被重写</li>
<li>接口/抽象类中都可以定义 public static final字段, public static静态方法</li>
</ul>
<p>不同点：</p>
<ul>
<li>意义不同
<ul>
<li>抽象类对类进行更高层级的抽象</li>
<li>接口是对功能的封装</li>
</ul>
</li>
<li>定义方式不同
<ul>
<li>抽象类使用 abstract class定义</li>
<li>接口使用 interface 定义</li>
</ul>
</li>
<li>内容不同
<ul>
<li>抽象类中除了可以定义抽象方法外, 还可以定义实例变量/实例方法/静态变量/静态方法,构造方法等普通类所有的成员。</li>
<li>接口中除了抽象方法外, 还可以定义public static final字段, public static方法,public default方法 。</li>
<li>抽象类有构造方法, 接口没有构造方法; 接口中可以使用default修饰方法，抽象类不能使用default修饰方法。</li>
</ul>
</li>
<li>使用方式不同
<ul>
<li>抽象类一般作为父类存在, 需要子类通过 extends 继承。</li>
<li>接口需要通过类implements实现。</li>
</ul>
</li>
<li>继承
<ul>
<li>类只支持单继承, 接口支持多继承</li>
</ul>
</li>
<li>应用场景不同
<ul>
<li>如果仅仅是为了扩展类的功能,优先选择接口;</li>
<li>如果除了功能外,还需要保存不同的数据,选择抽象类,  抽象类中的抽象方法,需要在子类中重写, 抽象类可以约束所有的子类都具有某个功能。</li>
</ul>
</li>
</ul>
</div></template>
