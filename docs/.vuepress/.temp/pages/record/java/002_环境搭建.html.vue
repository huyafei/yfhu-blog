<template><div><h1 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h1>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>根据系统类型下载对应的 JDK</p>
</div>
<p>Java 程序必须运行在 JVM 之上，所以要安装 JDK。<a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">Oracle官网下载<ExternalLinkIcon/></a></p>
<h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<ul>
<li>
<p>JDK：JDK（Java Development Kit，Java 开发工具包（SDK）），是 Java 软件开发必须安装的。JDK 安装后自带一个 JRE。</p>
</li>
<li>
<p>JRE：JRE（Java Runtime Environment，Java 运行环境），运行 Java 程序所必须的环境的集合，包含 JVM 标准实现及Java 核心类库。如果只运行 Java 程序，则不需要安装 JDK，只需安装 JRE 即可</p>
</li>
<li>
<p>JVM：JVM（Java Virtual Machine，Java 虚拟机），JVM 是一种用于计算设备的规范，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的。</p>
</li>
</ul>
<p>JDK、JRE 和 DVM 关系：<br>
JDK 中包含 JRE，JRE 中包含 JVM，所以运行 Java 程序最小环境为 JRE。</p>
<h2 id="jdk-下载、安装和配置" tabindex="-1"><a class="header-anchor" href="#jdk-下载、安装和配置" aria-hidden="true">#</a> JDK 下载、安装和配置</h2>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<p><a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">JDK下载<ExternalLinkIcon/></a>
<img src="/static/images/java/002/jdk_xz_lc_1.jpg" alt="JDK下载流程1">
我安装的是 JDK 18, JDK 8(1.8) 版本需要注册账号，才能下载。
<img src="/static/images/java/002/jdk_xz_lc_2.jpg" alt="JDK下载流程2">
注意：根据电脑系统下载对应的 JDK，以及根据自己的需求下载对应的 JDK 版本。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>我使用的是 <code v-pre>.exe</code> 安装的，双击安装即可。安装过程中如果使用默认路径可以一直下一步就行了，图中我安装在其它目录下了，且我还安装了 8（1.8版本）。
<img src="/static/images/java/002/jdk_az_lc_1.jpg" alt="JDK安装流程1"></p>
<p>安装成功后进入到安装目录的 <code v-pre>bin</code> 文件夹下，<code v-pre>javac.exe</code> 命令用来完成 Java 程序的编译，<code v-pre>java.exe</code> 命令用来完成Java程序的运行。
<img src="/static/images/java/002/jdk_az_lc_2.jpg" alt="JDK安装流程2"></p>
<h3 id="配置-jdk-8-1-8" tabindex="-1"><a class="header-anchor" href="#配置-jdk-8-1-8" aria-hidden="true">#</a> 配置 （JDK 8(1.8)）</h3>
<p>配置环境变量，是为了在任何文件夹下都可以使用命令。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>JDK 8（1.8）配置，18 版忽略此步骤。</p>
</div>
<ol>
<li>
<p><code v-pre>计算机</code> -&gt; <code v-pre>属性</code> -&gt; <code v-pre>高级系统设置</code> -&gt; <code v-pre>环境变量</code></p>
</li>
<li>
<p>在 <code v-pre>系统变量</code> 中新建变量 <code v-pre>JAVA_HOME</code>，值为 JDK 安装目录的绝对路径，例如：
<code v-pre>D:\software\Java\jdk1.8.0_271</code>
<img src="/static/images/java/002/jdk_pz_lc_1.jpg" alt="JDK配置流程1"></p>
</li>
<li>
<p>在 <code v-pre>系统变量</code> 中编辑变量名 <code v-pre>Path</code>，新建 <code v-pre>%JAVA_HOME%\bin</code> 和 <code v-pre>%JAVA_HOME%\jre\bin</code>。
<img src="/static/images/java/002/jdk_pz_lc_2.jpg" alt="JDK配置流程2"></p>
</li>
<li>
<p>在 <code v-pre>系统变量</code> 中新建变量 <code v-pre>CLASSPATH</code>，值为 <code v-pre>.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar</code>【路径中“.”表示当前目录】
<img src="/static/images/java/002/jdk_pz_lc_3.jpg" alt="JDK配置流程3"></p>
</li>
<li>
<p>测试命令</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
<span class="token comment"># 输出以下则成功</span>
<span class="token comment"># java version "1.8.0_291"</span>
<span class="token comment"># Java(TM) SE Runtime Environment (build 1.8.0_291-b10)</span>
<span class="token comment"># Java HotSpot(TM) 64-Bit Server VM (build 25.291-b10, mixed mode)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于环境变量【扩展】" tabindex="-1"><a class="header-anchor" href="#关于环境变量【扩展】" aria-hidden="true">#</a> 关于环境变量【扩展】</h3>
<p>当我们输入 <code v-pre>ipconfig</code> 命令时，而 <code v-pre>ipconfig.exe</code> 文件实际上在 <code v-pre>C:\Windows\System32</code> 目录下，那么系统为什么能运行？
其实是 windows 系统中的环境变量 path 在起作用。系统首先会在当前目录下查找 <code v-pre>ipconfig.exe</code> 文件，如果没有找到，则会在系统目录下查找。
<code v-pre>path</code> 的值是一个字符串，用来指定系统中执行命令的文件路径，每个路径用分号隔开。<br>
以上个人理解为：
系统变量 - 理解为全局变量，要想在任何位置使用命令就要配置，path - 就是对应的命令所在的路径，比如 <code v-pre>ipconfig.exe</code> 在 <code v-pre>C:\Windows\System32</code>，
脑补一下js中全局变量一样。</p>
</div></template>


