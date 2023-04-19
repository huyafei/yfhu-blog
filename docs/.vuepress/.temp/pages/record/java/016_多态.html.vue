<template><div><h1 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h1>
<p><img src="/static/images/java/016/duotai.jpg" alt="多态"></p>
<h2 id="多态用法" tabindex="-1"><a class="header-anchor" href="#多态用法" aria-hidden="true">#</a> 多态用法</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Animal.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Animal move"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cat.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法覆盖</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"走猫步~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"捉老鼠~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Bird.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"鸟在飞翔~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"在唱歌~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Test01.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建 Animal 对象</span>
        <span class="token class-name">Animal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Animal move</span>
        <span class="token comment">// 创建 Cat 对象</span>
        <span class="token class-name">Cat</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 走猫步~</span>
        <span class="token comment">// 创建 Bird 对象</span>
        <span class="token class-name">Bird</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鸟在飞翔~</span>
        <span class="token comment">// -----------------</span>
        <span class="token comment">// 多态</span>
        <span class="token comment">// 向上转型</span>
        <span class="token class-name">Animal</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 走猫步~</span>
        <span class="token class-name">Animal</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鸟在飞翔~</span>

        <span class="token comment">// --------------------------</span>
        <span class="token class-name">Animal</span> a3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 下面调用 catchMouse() 编译报错
         * 错误: 找不到符号
         * a3.catchMouse();
         *   ^
         * 符号:   方法 catchMouse()
         * 位置: 类型为Animal的变量 a3
         * 原因：在编译的时候，编译器只知道a3变量的数据类型是Animal，也就是说它只会去Animal.class字节码中查找catchMouse()方法，结果没找到，
         * 自然“静态绑定”就失败了，编译没有通过。就像以上描述的错误信息一样：在类型为Animal的变量a中找不到方法catchMouse()。
         */</span>
<span class="token comment">//        a3.catchMouse();</span>
        <span class="token comment">// ----------------------------</span>
        <span class="token doc-comment comment">/**
         * 向下转型,为了调用子类对象特有的方法
         * 向下转型也就是强制类型转换 将Animal类型转换Cat类型
         */</span>
        <span class="token class-name">Animal</span> a4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Cat</span> c1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> a4<span class="token punctuation">;</span>
        c1<span class="token punctuation">.</span><span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 捉老鼠~</span>
        <span class="token doc-comment comment">/**
         *  向下转型 编译不报错，运行报错
         *  Exception in thread "main" java.lang.ClassCastException: class Bird cannot be cast to class Cat (Bird and Cat are in unnamed module of loader 'app')
         *         at Test01.main(Test01.java:45)
         *  编译不报错：
         * 因为编译器只知道a5变量是Animal类型，Animal类和Cat类之间存在继承关系，所以可以进行向下转型（前面提到过，只要两种类型之间存在继承关系，
         * 就可以进行向上或向下转型），语法上没有错误，所以编译通过了
         * 运行报错：
         * 报 ClassCastException 错误，翻译为类型转换异常，这种异常通常出现在向下转型的操作过程当中，当类型不兼容的情况下进行转型出现的异常，
         * 之所以出现此异常是因为在程序运行阶段a5 引用指向的对象是一只小鸟，然后我们要将一只小鸟转换成一只猫，这显然是不合理的，因为小鸟和猫之间是没有继承关系的。
         */</span>
        <span class="token class-name">Animal</span> a5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Cat a6 = (Cat) a5; // 编译不报错，运行报错</span>
        <span class="token comment">// 避免引发上面问题，通过使用 instanceof 运算符</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Cat</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Bird</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Animal</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token comment">// 先判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Cat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// false</span>
            <span class="token class-name">Cat</span> c2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> a5<span class="token punctuation">;</span>
            c2<span class="token punctuation">.</span><span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Bird</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// true</span>
            <span class="token class-name">Bird</span> b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Bird</span><span class="token punctuation">)</span>a5<span class="token punctuation">;</span>
            b2<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在唱歌~</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-运算符" tabindex="-1"><a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a> instanceof 运算符</h2>
<p>instanceof 运算符是用来测试一个对象是否为一个类的实例，运算结果是布尔类型，true或者false，假设(c instanceof Cat)结果是true则表示在运行阶段c引用指向的对象是Cat类型，
如果结果是false则表示在运行阶段c引用指向的对象不是Cat类型。在进行任何向下转型的操作之前，要使用instanceof进行判断，这是一个很好的编程习惯</p>
<p>语法格式：<br>
对象 instanceof 类型</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 参考上面完整代码</span>
<span class="token class-name">Animal</span> a5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 先判断</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Cat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Cat</span> c2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> a5<span class="token punctuation">;</span>
    c2<span class="token punctuation">.</span><span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a5 <span class="token keyword">instanceof</span> <span class="token class-name">Bird</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Bird</span> b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Bird</span><span class="token punctuation">)</span>a5<span class="token punctuation">;</span>
    b2<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在唱歌~</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多态存在的三个必要条件：</p>
<ul>
<li>继承</li>
<li>方法覆盖</li>
<li>父类型引用指向子类型对象</li>
</ul>
<p>多态显然是离不开方法覆盖机制的，多态就是因为编译阶段绑定父类当中的方法，程序运行阶段自动调用子类对象上的方法，如果子类对象上的方法没有进行重写，
这个时候创建子类对象就没有意义了，自然多态也就没有意义了，只有子类将方法重写之后调用到子类对象上的方法产生不同效果时，多态就形成了。实际上方法覆盖机制
和多态机制是捆绑的，谁也离不开谁，多态离不开方法覆盖，方法覆盖离开了多态也就没有意义了。</p>
<p><img src="/static/images/java/016/jt_method_duotai.png" alt="静态方法多态"></p>
<h2 id="多态的作用" tabindex="-1"><a class="header-anchor" href="#多态的作用" aria-hidden="true">#</a> 多态的作用</h2>
<p><img src="/static/images/java/016/duotai_zy.png" alt="多态作用">
<a href="http://www.bjpowernode.com/tutorial_java_se/125.html" target="_blank" rel="noopener noreferrer">图片来源地址<ExternalLinkIcon/></a></p>
</div></template>


