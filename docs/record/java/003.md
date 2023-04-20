# Java 开发和运行过程
- Java程序从开发到运行的整个生命周期，包括编译阶段和运行阶段两个重要阶段。
- 编译阶段是通过 `javac.exe` 命令来完成的，运行阶段是通过 `java.exe` 命令来完成的。

## Java 编译和运行过程
- 在 Java 源文件（.java）中编写代码（源代码），编译生成字节码文件（.class）。
- Java 程序运行需要 JVM 支持，JVM 是个软件安装在操作系统中，为字节码文件提供运行环境。

## Java 加载和执行过程
一个完整的 Java 程序：  
- Java开发的整个生命周期，包括两个重要的阶段，分别是：编译阶段和运行阶段
- 编译生成的程序被称为：字节码程序。编译生成的文件是：`xxx.class`文件
- 编译和运行可以在不同的操作系统中完成。
- 程序员在 `xxx.java` 文件中编写源代码，源代码必须符合 Java 的语法，这些源代码就是高级语言。
  存放源代码的文件被称为源文件。

## 编译期和运行期过程
- 编译期
  - 安装JDK，配置环境
  - 在硬盘的某个位置创建一个xxx.java源文件
  - 打开源文件，在该文件当中编写符合java语法的源程序，然后保存。
  - 使用JDK中自带的javac.exe命令对以上的java源程序进行编译
- 运行期
  - 打开命令窗口，在命令窗口中使用 java.exe 命令运行java程序。    
  语法格式：
    java 类名
  - 
```shell
java HelloWord
```

![java编译和运行过程](/static/images/java/002/by_yx.png)

## 开始第一个 Java 程序的开发
1. 在硬盘的某个位置上新建一个 Java 源文件：HelloWorld.java
![java源文件](/static/images/java/003/01.jpg)

2. 在 HelloWorld.java 文件中编写源代码
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}
```

3. 打开命令窗口，使用javac命令进行编译，生成 `HelloWorld.class` 文件
语法：javac 源文件路径
```shell
javac HelloWorld.java
```
![java源文件](/static/images/java/003/02.jpg)

4. 使用java命令进行运行
语法：java 编译生成的 `xxx.class` 类名
 ```shell
java HelloWorld
```
![java字节码文件](/static/images/java/003/03.jpg)

