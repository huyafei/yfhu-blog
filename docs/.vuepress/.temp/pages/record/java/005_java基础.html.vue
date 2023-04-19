<template><div><h1 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> Java基础</h1>
<h2 id="java基本结构" tabindex="-1"><a class="header-anchor" href="#java基本结构" aria-hidden="true">#</a> Java基本结构</h2>
<p>一个完整的java程序：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * （javadoc注释，写在这里的注释信息会被JDKbin
 * 目录下的javadoc.exe工具提取并生成帮助文档）
 * HelloWorld.java
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
  <span class="token comment">// 单行注释</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">/* 多行注释
      注释内容
      注释结束 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>**
 * （javadoc注释，写在这里的注释信息会被JDKbin
 * 目录下的javadoc.exe工具提取并生成帮助文档）
 * HelloWorld.java
 */
关键字 关键字 类名标识符 {
  // 单行注释
  关键字 关键字 关键字 方法名标识符(关键字[] 参数标识符) {
    System.out.println("Hello World!");
      /* 多行注释
      注释内容
      注释结束 */
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java是面向对象的语言，一个程序的基本单位就是 <code v-pre>class</code>，<code v-pre>class</code> 是关键字，这里定义的 <code v-pre>class</code> 类的名字就是 HelloWorld：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span> <span class="token comment">// 类名是 HelloWorld</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token comment">// class定义结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类名要求：</p>
<ul>
<li>类名必须以英文字母开头，后接字母，数字和下划线<code v-pre>_</code>的组合</li>
<li>一般以大写字母开头，驼峰命名法</li>
</ul>
<p>例如：</p>
<ul>
<li>good
<ul>
<li>HelloWorld</li>
<li>NoteBook</li>
<li>...</li>
</ul>
</li>
<li>bad
<ul>
<li>hello_world</li>
<li>notebook</li>
<li>123HelloWorld</li>
<li>HelloWorld_123</li>
<li>...</li>
</ul>
</li>
</ul>
<p><code v-pre>public</code> 修饰符表示类的访问权限，<code v-pre>public</code> 表示该 <code v-pre>class</code> 是公开的，不写 <code v-pre>public</code> 则默认为 <code v-pre>private</code>  私有的，
只能在当前文件中使用，不能在其他文件中使用。</p>
<p>一个源文件中可以有多个 <code v-pre>class</code> 类，但是一个 <code v-pre>class</code> 类只能有一个 <code v-pre>public</code> 的类， 并且要求此 <code v-pre>类名</code> 必须和 <code v-pre>java源文件名</code> 保持一致。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// HelloWorld.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
 <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> person <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> cart <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个源文件中有多个 <code v-pre>class</code> 类时，在编译的时候一个<code v-pre>class</code> 会编译生成一个 <code v-pre>class</code> 字节码程序文件，一般规范化写法一个 java 源文件只定义一个 <code v-pre>class</code> 类，</p>
<p>在 <code v-pre>class</code> 内部，可以定义若干方法（method）：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// HelloWorld.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 方法名是main</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Preson</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 方法名是main</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Preson"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cart</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 方法名是main</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Cart"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例中定义的 是 <code v-pre>main</code> 方法名，返回值是 <code v-pre>viod</code> 表示没有任何返回值， <code v-pre>public</code> 修饰符可以修饰 <code v-pre>class</code> 外，也可以修饰方法，
而关键字 <code v-pre>static</code> 是另一个修饰符，它表示静态方法。</p>
<p>在 Java 中以 <code v-pre>main</code> 命名的方法示为主方法，在 <code v-pre>class</code> 中定义 <code v-pre>main</code> 方法（主方法），示作为程序的入口，
也就是说任何一个class中都可以写 <code v-pre>main</code> 方法（主方法），想从哪个入口进去执行，则让类加载器先加载对应的类即可。 例如：
想让A类中的main方法执行，则执行：java A，想让B类中的main方法执行，则执行：java B。但实际上，对于一个完整的独立的应用来说，只需要提供一个入口，也就是说只需要定义一个main方法即可。</p>
<p><strong>备注：</strong></p>
<ul>
<li>java入口程序必需是静态方法 【static 修饰】</li>
<li>方法名必须为 main</li>
<li>参数必须是String数组 【String[] args】</li>
<li>方法返回值必须是void 【void】</li>
</ul>
<p>方法名也有命名规则，命名和class一样，但是首字母小写例如：</p>
<ul>
<li>
<p>good</p>
<ul>
<li>main</li>
<li>goodMorning</li>
<li>playVR</li>
</ul>
</li>
<li>
<p>bad</p>
<ul>
<li>Main</li>
<li>good123</li>
<li>good_morning</li>
<li>_playVR</li>
</ul>
</li>
</ul>
<h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2>
<p>标识符就是程序员自己规定的代表一定含义的单词（java源程序当中凡是程序员自己有权利修改的名字），比如类名，属性名，变量名等。</p>
<p><strong>Java标识符命名规则：</strong></p>
<ul>
<li>标识符只能由数字、字母、下划线<code v-pre>_</code> 、美元符号 <code v-pre>$</code> 组成，不能含有其它符号。</li>
<li>标识符不能以数字开始。</li>
<li>java关键字和保留字不能作为标识符。</li>
<li>标识符严格区分大小写。</li>
</ul>
<p><strong>Java标识符命名规范：</strong></p>
<ul>
<li>见名知意。（看到这个单词就知道它表示什么）</li>
<li>遵循驼峰命名方式。（单词界线更明确）</li>
<li>类名、接口名首字母大写，后面每个单词首字母大写。</li>
<li>变量名、方法名首字母小写，后面每个单词首字母大写。</li>
<li>常量名全部大写，单词和单词之间使用 <code v-pre>_</code> 衔接。</li>
</ul>
<h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2>
<p>关键字是Java编程语言中内置事先定义好的一些特殊的标识符，它们是用来标识程序的一些特殊的功能的，不能用作变量名、方法名、类名、包名和参数等。例如：</p>
<ul>
<li>abstract：表明类或者成员方法具有抽象属性</li>
<li>assert：断言，用来进行程序调试</li>
<li>boolean：基本数据类型之一，声明布尔类型的关键字</li>
<li>break：提前跳出一个块</li>
<li>byte：基本数据类型之一，字节类型</li>
<li>case：用在switch语句之中，表示其中的一个分支</li>
<li>catch：用在异常处理中，用来捕捉异常</li>
<li>char：基本数据类型之一，字符类型</li>
<li>class：声明一个类</li>
<li>const：保留关键字，没有具体含义</li>
<li>continue：回到一个块的开始处</li>
<li>default：默认，例如，用在switch语句中，表明一个默认的分支。Java8 中也作用于声明接口函数的默认实现</li>
<li>do：用在do-while循环结构中</li>
<li>double：基本数据类型之一，双精度浮点数类型</li>
<li>else：用在条件语句中，表明当条件不成立时的分支</li>
<li>enum：枚举</li>
<li>extends：表明一个类型是另一个类型的子类型。对于类，可以是另一个类或者抽象类；对于接口，可以是另一个接口</li>
<li>final：用来说明最终属性，表明一个类不能派生出子类，或者成员方法不能被覆盖，或者成员域的值不能被改变，用来定义常量</li>
<li>finally：用于处理异常情况，用来声明一个基本肯定会被执行到的语句块</li>
<li>float：基本数据类型之一，单精度浮点数类型</li>
<li>for：一种循环结构的引导词</li>
<li>goto：保留关键字，没有具体含义</li>
<li>if：条件语句的引导词</li>
<li>implements：表明一个类实现了给定的接口</li>
<li>import：表明要访问指定的类或包</li>
<li>instanceof：用来测试一个对象是否是指定类型的实例对象</li>
<li>int：基本数据类型之一，整数类型</li>
<li>interface：接口</li>
<li>long：基本数据类型之一，长整数类型</li>
<li>native：用来声明一个方法是由与计算机相关的语言（如C/C++/FORTRAN语言）实现的</li>
<li>new：用来创建新实例对象</li>
<li>package：包</li>
<li>private：一种访问控制方式：私用模式</li>
<li>protected：一种访问控制方式：保护模式</li>
<li>public：一种访问控制方式：共用模式</li>
<li>return：从成员方法中返回数据</li>
<li>short：基本数据类型之一,短整数类型</li>
<li>static：表明具有静态属性</li>
<li>strictfp：用来声明FP_strict（单精度或双精度浮点数）表达式遵循IEEE 754算术规范</li>
<li>super：表明当前对象的父类型的引用或者父类型的构造方法</li>
<li>switch：分支语句结构的引导词</li>
<li>synchronized：表明一段代码需要同步执行</li>
<li>this：指向当前实例对象的引用</li>
<li>throw：抛出一个异常</li>
<li>throws：声明在当前定义的成员方法中所有需要抛出的异常</li>
<li>transient：声明不用序列化的成员域</li>
<li>try：尝试一个可能抛出异常的程序块</li>
<li>void：声明当前成员方法没有返回值</li>
<li>volatile：表明两个或者多个变量必须同步地发生变化</li>
<li>while：用在循环结构中</li>
</ul>
<h2 id="public-class-和-class的区别" tabindex="-1"><a class="header-anchor" href="#public-class-和-class的区别" aria-hidden="true">#</a> public class 和 class的区别</h2>
<ul>
<li>一个java源文件当中可以定义多个 class</li>
<li>一个java源文件当中 public 的 class 不是必须的</li>
<li>一个class会定义生成一个 xxx.class 字节码文件</li>
<li>一个java源文件当中定义公开的类的话，只能有一个，并且该类名称必须和java源文件名称一致。</li>
<li>每一个class当中都可以编写 main 方法，都可以设定程序的入口，想执行 B.class 中的 main 方法：java B，
想执行 X.class 当中的 main 方法：java X</li>
</ul>
</div></template>


