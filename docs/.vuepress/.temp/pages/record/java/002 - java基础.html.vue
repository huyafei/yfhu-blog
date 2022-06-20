<template><div><h4 id="java-发展史" tabindex="-1"><a class="header-anchor" href="#java-发展史" aria-hidden="true">#</a> Java 发展史</h4>
<ul>
<li>1991 Sun Green</li>
<li>1995 java 问世</li>
<li>1996 JDK 1.0</li>
<li>1999 JAVA2 发布（JAVA SE/EE/ME）</li>
<li>2009 Oracle收购Sun</li>
</ul>
<h4 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h4>
<ul>
<li>全称 Java Development Kits</li>
<li>Java开发工具箱【Java开发必备】</li>
<li>Oracle官网下载 https://www.oracle.com/java/technologies/downloads/</li>
</ul>
<h4 id="java-三大块-1999年" tabindex="-1"><a class="header-anchor" href="#java-三大块-1999年" aria-hidden="true">#</a> Java 三大块（1999年 ）</h4>
<ul>
<li>JavaSE 【java平台标准版】</li>
<li>JavaEE 【java平台企业版】</li>
<li>JavaME 【java平台微型版】</li>
</ul>
<h4 id="java-开发环境" tabindex="-1"><a class="header-anchor" href="#java-开发环境" aria-hidden="true">#</a> java 开发环境</h4>
<ul>
<li>JDK - Java Development Kit 【java开发工具包】</li>
<li>JRE - Java Runtime Environment 【java运行环境】</li>
<li>JVM - Java Virtual Machines 【java虚拟机】</li>
</ul>
<p>三者之间的关系：JDK 中包含JRE，JRE中包含JVM<br>
【所以运行 java 程序最小环境为 JRE】</p>
<h4 id="java-编译运行过程" tabindex="-1"><a class="header-anchor" href="#java-编译运行过程" aria-hidden="true">#</a> java 编译运行过程</h4>
<ul>
<li>在 java 源文件（.java）中编写代码（源代码），编译生成字节码文件（.class）</li>
<li>java程序运行需要JVM支持，JVM是个软件安装在操作系统中，为字节码文件提供运行环境</li>
</ul>
<h4 id="java的加载与执行-一个完整的java程序" tabindex="-1"><a class="header-anchor" href="#java的加载与执行-一个完整的java程序" aria-hidden="true">#</a> Java的加载与执行：一个完整的java程序</h4>
<ul>
<li>Java开发的整个生命周期，包括两个重要的阶段，分别是：编译阶段和运行阶段</li>
<li>编译生成的程序被称为：字节码程序。编译生成的文件是：xxx.class文件</li>
<li>编译和运行可以在不同的操作系统中完成。</li>
<li>程序员在xxx.java文件中编写源代码，源代码必须符合java的语法，这些源代码就是高级语言。
存放源代码的文件被称为源文件。</li>
</ul>
<h5 id="编译期和运行期过程" tabindex="-1"><a class="header-anchor" href="#编译期和运行期过程" aria-hidden="true">#</a> 编译期和运行期过程</h5>
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
<li>打开命令窗口，在命令窗口中使用 java.exe 命令运行java程序，语法格式：
java 类名 【注意：java 后必须跟类名】</li>
</ul>
</li>
</ul>
<p><img src="images/002/by_yx.png" alt="java编译和运行过程"></p>
<h4 id="开始第一个java程序的开发" tabindex="-1"><a class="header-anchor" href="#开始第一个java程序的开发" aria-hidden="true">#</a> 开始第一个java程序的开发</h4>
<ul>
<li><a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">JDK 下载<ExternalLinkIcon/></a></li>
<li>JDK安装 【环境变量配置参考下面】
<ul>
<li>只安装了JDK，独立的JRE没有安装</li>
</ul>
</li>
<li>在硬盘的某个位置上新建一个java源文件：HelloWorld.java</li>
<li>在HelloWorld.java文件中编写源代码</li>
<li>打开命令窗口，使用javac命令进行编译：
<ul>
<li>javac 源文件路径</li>
</ul>
</li>
</ul>
<h4 id="jdk安装配置环境变量" tabindex="-1"><a class="header-anchor" href="#jdk安装配置环境变量" aria-hidden="true">#</a> JDK安装配置环境变量</h4>
<p>单击“计算机-属性-高级系统设置”，单击“环境变量”。在“系统变量”栏下单击“新建”，创建新的系统环境变量。</p>
<ul>
<li>新建-&gt;变量名&quot;JAVA_HOME&quot;，变量值&quot;C:\Java\jdk1.8.0_05&quot;（即JDK的安装路径）</li>
<li>编辑-&gt;变量名&quot;Path&quot;，在原变量值的最后面加上“;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin”</li>
<li>新建-&gt;变量名“CLASSPATH”,变量值“.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar” 【路径中“.”表示当前目录】</li>
</ul>
<p>测试命令：java -version</p>
</div></template>
