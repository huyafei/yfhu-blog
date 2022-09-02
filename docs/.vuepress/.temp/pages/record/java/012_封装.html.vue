<template><div><h1 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h1>
<p>封装是面向对象的三大特征之一，什么是封装？封装有什么好处？怎么封装，代码怎么写？</p>
<p>封装就是指利用抽象数据类型将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体，数据被保护在抽象数据类型的内部，尽可能地隐藏内部的细节，只保留一些对外接口使之与外部发生联系。其他对象只能通过包裹在数据外面的已经授权的操作来与这个封装的对象进行交流和交互。也就是说用户是无需知道对象内部的细节，但可以通过该对象对外提供的接口来访问该对象。</p>
<p>就是将成员变量和成员方法封装在一起，使其成为一个单独的实体，并尽可能隐藏对象的内部实现细节，也就是对成员变量进行访问控制，只能通过对外开放的接口（方法）访问。</p>
<p>封装之后就形成了独立实体，独立实体可以在不同的环境中重复使用，显然封装可以降低程序的耦合度，提高程序的扩展性，以及重用性或复用性。</p>
<p>在 java 中虽然可以在一个 <code v-pre>.java</code> 源文件中 可以写多个类，但一般不建议这样做，一般建议单独写一个类，然后在其他类中引用该类。</p>
<p>如下新建一个 Production 商品实体类，也就是封装成单独的类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Production</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> no<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Production</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNo</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">=</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FengZhuang</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Student</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"张三"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>
        s<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"李四"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 李四</span>
        <span class="token comment">// Student2</span>
        <span class="token class-name">Student2</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 赋值</span>
<span class="token comment">//        s2.name="张三"; // 报错 name 在 Student2 中是 private 访问控制</span>
        <span class="token comment">// 取值</span>
<span class="token comment">//        System.out.println(s2.name); // 报错 name 在 Student2 中是 private 访问控制</span>

        s2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>

        <span class="token comment">//将商品类单独封装成一个实体类 成员变量也做private访问控制只能通过指定的方法获取或者赋值</span>
        <span class="token class-name">Production</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Production</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// p.name = "iphone'; // 报错 name 在 Production 中是 private 访问控制</span>
        p<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"iphone"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 成员变量未做 访问控制 默认是 public，可以被外部类访问</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">// 姓名</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 年龄</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> no<span class="token punctuation">;</span>
    <span class="token comment">// 是否合格</span>
    <span class="token keyword">boolean</span> isPass<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 成员变量做了 private 私有访问控制，只能被本类访问</span>
<span class="token keyword">class</span> <span class="token class-name">Student2</span> <span class="token punctuation">{</span>
    <span class="token comment">// 姓名</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 年龄</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">// 学号</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> no<span class="token punctuation">;</span>
    <span class="token comment">// 是否合格</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> isPass<span class="token punctuation">;</span>
    <span class="token comment">// 对外开放获取 name 成员变量的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token comment">// 对外开放设置 name 成员变量的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在java语言中封装的步骤：</p>
<ol>
<li>需要被保护的属性使用private进行修饰，</li>
<li>给私有的属性对外提供公开的set和get方法，其中set方法用来修改属性的值，get方法用来读取属性的值。</li>
<li>set和get方法在命名规范要求set方法名是set + 属性名（属性名首字母大写），get方法名是get + 属性名（属性名首字母大写）。 其中set方法有一个参数，用来给属性赋值，set方法没有返回值，一般在set方法内部编写安全控制程序，因为毕竟set方法是修改内部数据的，而get方法不需要参数，返回值类型是该属性所属类型（先记住，以后讲：另外set方法和get方法都不带static关键字，不带static关键字的方法称为实例方</li>
</ol>
<p><strong>备注：</strong></p>
<ul>
<li>private 表示私有的 只能在本类内部使用，不能在类外部使用</li>
<li>public 表示公有的 可以在本类内部使用，也可以在类外部使用</li>
<li>一般封装的实体类中，成员变量都是 private 私有的，方法一般是 public 公有的</li>
</ul>
</div></template>
