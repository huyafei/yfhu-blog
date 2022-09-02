<template><div><h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1>
<p>面向对象（OOP，Object-Oriented Programming）是一种程序设计思想，它基于对象的特征来描述程序的行为，并且使程序的可读性和可维护性更高。</p>
<h2 id="面向对象和面向过程" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程" aria-hidden="true">#</a> 面向对象和面向过程</h2>
<p><img src="/static/images/java/011/mxdx_gs.png" alt="面向对象描述">
引用地址：<a href="http://www.bjpowernode.com/tutorial_java_se/102.html" target="_blank" rel="noopener noreferrer">Java面向对象编程和面向过程编程的区别<ExternalLinkIcon/></a></p>
<h2 id="面向对象的特征" tabindex="-1"><a class="header-anchor" href="#面向对象的特征" aria-hidden="true">#</a> 面向对象的特征</h2>
<p>Java面向对象具有三大特征：</p>
<ul>
<li>封装
<ul>
<li>将同一种对象（一切事物皆对象）的属性、方法抽象成一个类，然后通过类的方法、属性来访问类</li>
</ul>
</li>
<li>继承
<ul>
<li>在封装的基础上，将同类事物继续抽象，继承时子类拥有父类的属性和方法，并且持有自己的属性和方法</li>
</ul>
</li>
<li>多态
<ul>
<li>不同对象之间行为的抽象</li>
</ul>
</li>
</ul>
<h2 id="java类与对象" tabindex="-1"><a class="header-anchor" href="#java类与对象" aria-hidden="true">#</a> java类与对象</h2>
<p>什么是类？
类(Class)是面向对象程序设计(OOP，Object-Oriented Programming),是一种抽象数据类型，是对所具有相同特征实体的抽象，
在 java 面向对象编程中就是是对一类 &quot;事物&quot; 的属性（成员变量）和行为（方法）的抽象（即类 = 属性 + 方法，属性描述的是状态，方法描述的是行为动作），
<strong>类是引用数据类型，类可以创建对象，对象又称为实例（instance），类创建对象这个过程称为实例化（实例化对象）</strong>。</p>
<p>抽象数据类型：将不同类型的数据集合组成一个整体用来描述新的事物。</p>
<h2 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义</h2>
<p>完整的类定义：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>修饰符 class 类名 {
    // 类体 = 属性(成员变量，也叫字段（field）)+方法（成员方法）
    // 1. 定义成员变量
    成员变量类型 成员变量名称;
    // ...
    // 2.定义成员方法
    修饰符 方法返回值类型 方法名称(参数列表) {
        // 方法体
    }
    // ...
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>成员变量就是描述类型对象共同的数据结构(对象的属性)，成员方法就是描述对象的行为，封装对象的功能</li>
<li>成员变量类型就是基本数据类型（byte、short、int、long、float、double、boolean、chart）和引用数据类型（String、Object、数组...）</li>
</ul>
<p>实现一个 “学生类” 如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">// 姓名</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 年龄</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> no<span class="token punctuation">;</span>
    <span class="token comment">// 是否合格</span>
    <span class="token keyword">boolean</span> isPass<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面程序中name、age、no、isPass是成员变量，而getName()是成员方法。要是使用成员变量和成员方法就需要使用 new 来创建实例对象。</p>
<h2 id="创建并使用对象" tabindex="-1"><a class="header-anchor" href="#创建并使用对象" aria-hidden="true">#</a> 创建并使用对象</h2>
<p>类定义后，可以使用类这个“模板”来创造“对象”了，一个类可以创建多个对象！<br>
语法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>new 类名()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个学生对象</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 访问学生对象的属性</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// 访问（调用）学生对象的方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>

        <span class="token comment">// 再创建一个学生对象</span>
        <span class="token class-name">Student</span> ss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给对象赋值</span>
        ss<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"李四"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ss<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 李四</span>

        <span class="token doc-comment comment">/**
         * 引用类型 变量如果赋值为 null，表示没有指向任何对象，即指向null
         * 则取值会报错误 空指针异常 NullPointerException
         */</span>
        <span class="token class-name">Student</span> sss <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sss<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错空指针异常 java.lang.NullPointerException</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">// 姓名</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 年龄</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> no<span class="token punctuation">;</span>
    <span class="token comment">// 是否合格</span>
    <span class="token keyword">boolean</span> isPass<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>【回顾】一个java源文件可以创建多个类，但 public class类只能有一个</li>
<li>java 语言当中凡是使用class关键字定义的类都属于引用数据类型，类名本身就是这种引用数据类型的类型名</li>
<li>除8种基本类型以外，用类、接口、数组等声明的变量都是引用数据类型</li>
<li>null 表示空</li>
<li>java.lang.NullPointerException 表示空指针异常</li>
</ul>
<h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2>
<p>java构造方法是类中特殊的方法，是类的初始化方法（构造方法/构造函数），通过 new 构造方法名(实际参数列表)来调用构造方法，用于初始化对象的属性。</p>
<p>语法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[修饰符列表] 构造方法名(形式参数列表){
    构造方法体;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构造方法也叫实例方法</li>
<li>构造方法的名称必需和类名相同</li>
<li>构造方法没有返回值，也<strong>不能写 void</strong></li>
<li>一个类中可以有多个构造方法（也就是方法重载）</li>
<li>构造方法用来创建对象，以及完成属性初始化操作，不允许使用 static 关键字</li>
</ul>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DateTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个日期对象</span>
        <span class="token class-name">Date</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用默认无参构造方法</span>
        <span class="token comment">// 整数型默认值是0，</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>month<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 有参构造方法，new 时传入参数，给成员变量添加初始值
         */</span>
        <span class="token comment">// 调用有参构造方法，传入参数 初始化成员变量</span>
        <span class="token class-name">Date</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2020</span>
        <span class="token class-name">Date</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2020</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span>month<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 8</span>
        <span class="token class-name">Date</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2020</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span>month<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 8</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 16</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Date</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> year<span class="token punctuation">;</span>
    <span class="token keyword">int</span> month<span class="token punctuation">;</span>
    <span class="token keyword">int</span> day<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 构造方法,
     * 多个构造方法形成方法重载
     */</span>
    <span class="token comment">// 无参构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"日期对象被创建"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 以下都为有参构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       year <span class="token operator">=</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        year <span class="token operator">=</span> y<span class="token punctuation">;</span>
        month <span class="token operator">=</span> m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">int</span> month<span class="token punctuation">,</span> <span class="token keyword">int</span> day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>month <span class="token operator">=</span> month<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>day <span class="token operator">=</span> day<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<ul>
<li>如果没有显式的声明构造方法，则编译器会自动添加一个默认的隐式的无参构造方法（默认构造方法）</li>
<li>构造方法可以有多个形成构造方法重载</li>
<li>this 关键字用在方法体中，指向为当前对象，也就是哪个对象调用就指向哪个对象</li>
<li>构造方法中的形参变量名称一般与成员变量名称相同有利于代码可读性就必须使用 <code v-pre>this.</code>，如果不同可以忽略 <code v-pre>this.</code></li>
<li>当定义构造方法后，java编译器不会在添加默认的构造方法</li>
</ul>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3>
<p>java 数据类型分类 <code v-pre>基本数据类型</code> 和 <code v-pre>引用数据类型</code>，除去八种基本数据类型（byte、short、int、long、float、double、boolean、chart）之外，其它都是引用类。</p>
<h4 id="基本数据类型和引用类型区别" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用类型区别" aria-hidden="true">#</a> 基本数据类型和引用类型区别</h4>
<ul>
<li>基本数据类型的变量的值是存储在栈中的</li>
<li>引用类型变量的值的内容是存储在堆中的，而栈中只存具体内容对应的内存地址</li>
</ul>
<h3 id="java中的内存" tabindex="-1"><a class="header-anchor" href="#java中的内存" aria-hidden="true">#</a> java中的内存</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下内容有些摘抄于网络，参考：<br>
<a href="https://www.bilibili.com/read/cv11636770/" target="_blank" rel="noopener noreferrer">一文让你彻底分清 Java 运行时数据区<ExternalLinkIcon/></a></p>
</div>
<p><code v-pre>.java</code> 源文件 --&gt; 编译成 <code v-pre>.class</code>字节码文件 --&gt; 在JVM上运行 <code v-pre>.class</code>字节码文件</p>
<p><img src="/static/images/java/011/java_cxyx.png" alt="java原理图"></p>
<p>Java程序运行在JVM(Java Virtual Machine，Java虚拟机)上,java内存分配也是在JVM虚拟机上进行的。</p>
<p>JVM 在执行 Java 程序的过程中会把它所管理的内存划分为若干个不同的数据区域，简称JVM 运行时数据区。这些区域都有各自的用途。以及创建和销毁的时间，有的区域随着虚拟机进程的启动就存在了，而有些区域则依赖用户线程的启动和结束而建立和销毁。
我们通常把 JVM 运行时数据区叫做 Java 内存模型（JMM：Java Memory Model），即 java 内存。</p>
<p>Java内存主要分为五块区域：</p>
<ol>
<li>
<p>方法区(Method Area)：<br>
存储.class相关信息，包含方法的信息，代码片段</p>
</li>
<li>
<p>栈内存(Stack)：<br>
保存的是一块堆内存的空间地址，每一块栈内存只能够保留一块堆内存地址。方法的运行一定要在栈当中运行</p>
</li>
<li>
<p>堆内存(Heap)：<br>
保存每一个对象的属性内容，即对象的真正数据。堆内存中的数据都需要用关键字 new 才可以开辟。堆内存中的每个数据都有一个唯一的16进制地址值(内存地址)</p>
</li>
<li>
<p>本地方法栈(Native Method Stack)：<br>
与操作系统相关</p>
</li>
<li>
<p>程序计数器(Program Counter Register)：<br>
与CPU相关</p>
</li>
</ol>
<p><img src="/static/images/java/011/java_nc_gs.png" alt="java内存划分"></p>
<p><strong>备注：</strong><br>
JVM 运行时数据区中有些数据是一直存在的，被所有线程所共享。而有些区域则是线程私有的，伴随着线程的开始而创建，线程的结束而销毁。
所以我们可以把JVM 分为两类：线程共享的、线程私有的。</p>
<p><img src="/static/images/java/011/LC-2.png" alt="java程序运行内存分配流程">
<img src="/static/images/java/011/LC-3.png" alt="java程序运行内存分配流程3"></p>
<p><strong>备注：</strong></p>
<ul>
<li>常量池存放所有的常量，包括字符串、数字、布尔值、引用等。</li>
<li>方法区存放所有的方法，包括类的方法、接口的方法、构造方法、静态方法、实例方法等。</li>
</ul>
<h3 id="栈和堆" tabindex="-1"><a class="header-anchor" href="#栈和堆" aria-hidden="true">#</a> 栈和堆</h3>
<ul>
<li>
<p>栈（Stack）</p>
<ul>
<li>先进后出，后进先出</li>
<li>存取数据速度比堆快</li>
<li>数据共享</li>
<li>栈内存是在编译时就确定的，不能改变</li>
<li>系统自动垃圾回收</li>
</ul>
</li>
<li>
<p>堆（Heap）</p>
<ul>
<li>堆内存中存储的实际对象，是被栈内存中变量所引用</li>
<li>内存大小是动态的，是在运行时动态分配内存空间</li>
<li>java中垃圾回收机制会自动回收不用的数据</li>
</ul>
</li>
</ul>
<h3 id="引用类型数组" tabindex="-1"><a class="header-anchor" href="#引用类型数组" aria-hidden="true">#</a> 引用类型数组</h3>
<ul>
<li>数组属于引用类型</li>
<li>数组对象在堆中存储，数组变量属于引用类型，存存储在栈中，变量的值是数组对象的地址信息，这个地址信息指向数组对象在堆中的地址</li>
<li>数组的元素看做是对象的成员变量只不过类型全部相同</li>
</ul>
<h4 id="引用类型数组数组" tabindex="-1"><a class="header-anchor" href="#引用类型数组数组" aria-hidden="true">#</a> 引用类型数组数组</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YyArr</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// int 类型数组，长度为3</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        intArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        intArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        intArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>intArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArr2 <span class="token operator">=</span> intArr<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>intArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
        <span class="token comment">// 修改 intArr2 的值，intArr 也会被修改</span>
        intArr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>intArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 2, 3]</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------------------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// String 类型数组，长度为3</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stringArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        stringArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span>
        stringArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"b"</span><span class="token punctuation">;</span>
        stringArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"c"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>stringArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [a, b, c]</span>
        <span class="token comment">// Cell 类型数组，长度为3</span>
        <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cellArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        cellArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cellArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cellArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">deepToString</span><span class="token punctuation">(</span>cellArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Cell{row=1, col=2}, Cell{row=3, col=4}, Cell{row=5, col=6}]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cell</span> cell <span class="token operator">:</span> cellArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>row <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> cell<span class="token punctuation">.</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Cell</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cell</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> row<span class="token punctuation">;</span>
    <span class="token keyword">int</span> col<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 构造方法 传参</span>
    <span class="token keyword">public</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>row <span class="token operator">=</span> row<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>col <span class="token operator">=</span> col<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong><br>
如果多个变量引用同一个引用类型数据，如上面示例 intArr 和 intArr2 改变其中一个变量的值，则其他变量的值也会被改变，因为实际改变的是公用的内存地址对应的数据的值。</p>
</div></template>
