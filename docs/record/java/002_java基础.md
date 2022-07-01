# Java 发展史
- 1991 Sun Green
- 1995 java 问世
- 1996 JDK 1.0
- 1999 JAVA2 发布（JAVA SE/EE/ME）
- 2009 Oracle收购Sun

#### JDK
- 全称 Java Development Kits
- Java开发工具箱【Java开发必备】
- Oracle官网下载 https://www.oracle.com/java/technologies/downloads/

#### Java 三大块（1999年 ）
- JavaSE 【java平台标准版】
- JavaEE 【java平台企业版】
- JavaME 【java平台微型版】

#### java 开发环境
- JDK - Java Development Kit 【java开发工具包】
- JRE - Java Runtime Environment 【java运行环境】
- JVM - Java Virtual Machines 【java虚拟机】

三者之间的关系：JDK 中包含JRE，JRE中包含JVM  
【所以运行 java 程序最小环境为 JRE】

#### java 编译运行过程
- 在 java 源文件（.java）中编写代码（源代码），编译生成字节码文件（.class）
- java程序运行需要JVM支持，JVM是个软件安装在操作系统中，为字节码文件提供运行环境

#### Java的加载与执行：一个完整的java程序
- Java开发的整个生命周期，包括两个重要的阶段，分别是：编译阶段和运行阶段 
- 编译生成的程序被称为：字节码程序。编译生成的文件是：xxx.class文件
- 编译和运行可以在不同的操作系统中完成。
- 程序员在xxx.java文件中编写源代码，源代码必须符合java的语法，这些源代码就是高级语言。
  存放源代码的文件被称为源文件。

##### 编译期和运行期过程
- 编译期
    - 安装JDK，配置环境
    - 在硬盘的某个位置创建一个xxx.java源文件
    - 打开源文件，在该文件当中编写符合java语法的源程序，然后保存。
    - 使用JDK中自带的javac.exe命令对以上的java源程序进行编译
- 运行期
  - 打开命令窗口，在命令窗口中使用 java.exe 命令运行java程序，语法格式：
    java 类名 【注意：java 后必须跟类名】
    
![java编译和运行过程](/static/images/java/002/by_yx.png)

#### 开始第一个java程序的开发
- [JDK 下载](https://www.oracle.com/java/technologies/downloads/)
- JDK安装 【环境变量配置参考下面】
  - 只安装了JDK，独立的JRE没有安装
- 在硬盘的某个位置上新建一个java源文件：HelloWorld.java
- 在HelloWorld.java文件中编写源代码
- 打开命令窗口，使用javac命令进行编译：
  - javac 源文件路径
  
#### JDK安装配置环境变量
单击“计算机-属性-高级系统设置”，单击“环境变量”。在“系统变量”栏下单击“新建”，创建新的系统环境变量。  
- 新建->变量名"JAVA_HOME"，变量值"C:\Java\jdk1.8.0_05"（即JDK的安装路径）
- 编辑->变量名"Path"，在原变量值的最后面加上“;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin”
- 新建->变量名“CLASSPATH”,变量值“.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar” 【路径中“.”表示当前目录】

测试命令：java -version 
