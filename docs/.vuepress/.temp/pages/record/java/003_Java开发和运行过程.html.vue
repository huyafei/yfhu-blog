<template><div><h1 id="java-开发和运行过程" tabindex="-1"><a class="header-anchor" href="#java-开发和运行过程" aria-hidden="true">#</a> Java 开发和运行过程</h1>
<ul>
<li>Java程序从开发到运行的整个生命周期，包括编译阶段和运行阶段两个重要阶段。</li>
<li>编译阶段是通过 <code v-pre>javac.exe</code> 命令来完成的，运行阶段是通过 <code v-pre>java.exe</code> 命令来完成的。</li>
</ul>
<h2 id="java-编译和运行过程" tabindex="-1"><a class="header-anchor" href="#java-编译和运行过程" aria-hidden="true">#</a> Java 编译和运行过程</h2>
<ul>
<li>在 Java 源文件（.java）中编写代码（源代码），编译生成字节码文件（.class）。</li>
<li>Java 程序运行需要 JVM 支持，JVM 是个软件安装在操作系统中，为字节码文件提供运行环境。</li>
</ul>
<h2 id="java-加载和执行过程" tabindex="-1"><a class="header-anchor" href="#java-加载和执行过程" aria-hidden="true">#</a> Java 加载和执行过程</h2>
<p>一个完整的 Java 程序：</p>
<ul>
<li>Java开发的整个生命周期，包括两个重要的阶段，分别是：编译阶段和运行阶段</li>
<li>编译生成的程序被称为：字节码程序。编译生成的文件是：<code v-pre>xxx.class</code>文件</li>
<li>编译和运行可以在不同的操作系统中完成。</li>
<li>程序员在 <code v-pre>xxx.java</code> 文件中编写源代码，源代码必须符合 Java 的语法，这些源代码就是高级语言。
存放源代码的文件被称为源文件。</li>
</ul>
<h2 id="编译期和运行期过程" tabindex="-1"><a class="header-anchor" href="#编译期和运行期过程" aria-hidden="true">#</a> 编译期和运行期过程</h2>
<ul>
<li>编译期
<ul>
<li>安装JDK，配置环境</li>
<li>在硬盘的某个位置创建一个xxx.java源文件</li>
<li>打开源文件，在该文件当中编写符合java语法的源程序，然后保存。</li>
<li>使用JDK中自带的javac.exe命令对以上的java源程序进行编译</li>
</ul>
</li>
<li>运行期
<ul>
<li>打开命令窗口，在命令窗口中使用 java.exe 命令运行java程序。<br>
语法格式：
java 类名</li>
<li></li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> HelloWord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="/static/images/java/002/by_yx.png" alt="java编译和运行过程"></p>
<h2 id="开始第一个-java-程序的开发" tabindex="-1"><a class="header-anchor" href="#开始第一个-java-程序的开发" aria-hidden="true">#</a> 开始第一个 Java 程序的开发</h2>
<ol>
<li>
<p>在硬盘的某个位置上新建一个 Java 源文件：HelloWorld.java
<img src="/static/images/java/003/01.jpg" alt="java源文件"></p>
</li>
<li>
<p>在 HelloWorld.java 文件中编写源代码</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>打开命令窗口，使用javac命令进行编译，生成 <code v-pre>HelloWorld.class</code> 文件
语法：javac 源文件路径</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javac HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="/static/images/java/003/02.jpg" alt="java源文件"></p>
<ol start="4">
<li>使用java命令进行运行
语法：java 编译生成的 <code v-pre>xxx.class</code> 类名</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="/static/images/java/003/03.jpg" alt="java字节码文件"></p>
</div></template>


