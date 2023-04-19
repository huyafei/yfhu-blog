<template><div><h1 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限" aria-hidden="true">#</a> 访问权限</h1>
<p>java类的访问权限分为两种：公共类和非公共类，public修饰为公共类，没有使用public修饰的类为非公共类。<br>
使用场景：</p>
<ul>
<li>如果这个类想要在其他包中使用就定义为公共类</li>
<li>非公共类只能在当前包中使用</li>
</ul>
<table>
<thead>
<tr>
<th>访问权限</th>
<th>当前类</th>
<th>当前包</th>
<th>派生类（不在当前包）</th>
<th>其它包</th>
</tr>
</thead>
<tbody>
<tr>
<td>private(私有的)</td>
<td>可以</td>
<td>不</td>
<td>不</td>
<td>不</td>
</tr>
<tr>
<td>默认(没有权限修饰符)</td>
<td>可以</td>
<td>可以</td>
<td>不</td>
<td>不</td>
</tr>
<tr>
<td>protected(受保护的)</td>
<td>可以</td>
<td>可以</td>
<td>可以</td>
<td>不</td>
</tr>
<tr>
<td>public(公有的)</td>
<td>可以</td>
<td>可以</td>
<td>可以</td>
<td>可以</td>
</tr>
</tbody>
</table>
<p><strong>备注：</strong></p>
<ul>
<li>派生类 A类继承B类，B称为基类、父类、超类，A称为子类、派生类、扩展类</li>
<li>private 只能在当前类访问</li>
<li>默认 当前类、当前包访问</li>
<li>protected  当前类、当前包、派生类（不同包）访问</li>
<li>public 能在当前类、当前包、派生类、其它包访问</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Father.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>idCard<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Son.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// public</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// private</span>
<span class="token comment">//        System.out.println(this.idCard); // null // java: idCard 在 com.qym.xmm.day19.Father 中是 private 访问控制</span>
        <span class="token comment">// protected 受保护的</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// 默认</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Test01.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Father</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// public</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>father<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// private</span>
<span class="token comment">//        System.out.println(father.idCard); // java: idCard 在 com.qym.xmm.day19.Father 中是 private 访问控制</span>
        <span class="token comment">// protected 受保护的</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>father<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// 默认</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>father<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        father<span class="token punctuation">.</span><span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        son<span class="token punctuation">.</span><span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 测试在不同包中的派生类访问</span>
<span class="token comment">//Son.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19_</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19<span class="token punctuation">.</span></span><span class="token class-name">Father</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// public</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// private</span>
<span class="token comment">//        System.out.println(this.idCard); // null // java: idCard 在 com.qym.xmm.day19.Father 中是 private 访问控制</span>
        <span class="token comment">// protected 受保护的 派生类不在当前包中可以访问</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// 默认  派生类，不在当前包中不可以访问</span>
<span class="token comment">//        System.out.println(this.sex); // null //java: sex在com.qym.xmm.day19.Father中不是公共的; 无法从外部程序包中对其进行访问</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Test01.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19_</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19<span class="token punctuation">.</span></span><span class="token class-name">Father</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qym<span class="token punctuation">.</span>xmm<span class="token punctuation">.</span>day19_<span class="token punctuation">.</span></span><span class="token class-name">Son</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Father</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// public</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>father<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token comment">// private 私有的 其它包引入报错</span>
<span class="token comment">//        System.out.println(father.idCard); // java: idCard 在 com.qym.xmm.day19.Father 中是 private 访问控制</span>
        <span class="token comment">// protected 受保护的  其它包引入报错</span>
<span class="token comment">//        System.out.println(father.age); // null //java: age 在 com.qym.xmm.day19.Father 中是 protected 访问控制</span>
        <span class="token comment">// 默认 其它包引入报错</span>
<span class="token comment">//        System.out.println(father.sex); // null //java: sex在com.qym.xmm.day19.Father中不是公共的; 无法从外部程序包中对其进行访问</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        father<span class="token punctuation">.</span><span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        son<span class="token punctuation">.</span><span class="token function">pt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java方法覆盖中的访问权限，访问覆盖(重写)的规则:</p>
<ul>
<li>子类方法签名必须和父类方法一致, 方法签名就是方法名与参数列表</li>
<li>子类方法的返回值类型可以和父类方法返回值类型一样, 也可以是父类方法返回值类型的子类型</li>
<li>子类方法的访问权限可以和父类方法访问权限相同,也可以比父类方法访问权限更宽泛(更大)，如果父类方法是public修饰,子类方法只能是public修饰，如果父类方法是protected修饰,子类方法可以protected/public修饰</li>
<li>子类方法的异常不能比父类方法的异常更大</li>
</ul>
</div></template>


