# java中包(package)

在现实中，如果小明写了一个Person类，小红也写了一个Person类，现在，小白既想用小明的Person，也想用小红的Person，怎么办？
如果小军写了一个Arrays类，恰好JDK也自带了一个Arrays类，如何解决类名冲突？
在Java中，我们使用package来解决名字冲突。
Java定义了一种名字空间，称之为包：package。一个类总是属于某个包，类名（比如Person）只是一个简写，真正的完整类名是包名.类名。
例如：
- 小明的Person类存放在包ming下面，因此，完整类名是ming.Person；
- 小红的Person类存放在包hong下面，因此，完整类名是hong.Person；
- 小军的Arrays类存放在包mr.jun下面，因此，完整类名是mr.jun.Arrays；
- JDK的Arrays类存放在包java.util下面，因此，完整类名是java.util.Arrays。
在定义class的时候，我们需要在第一行声明这个class属于哪个包。

包是用来管理类的, 就像使用文件夹管理文件一样，一个项目，可以包含很多的包，每个 包中又包含很多不同的类。
同一个包中类名不能相同 ，不同的包中类名可以相同。

java常用包：  

- java.lang： Java语言的基本包, 系统会自动导入
- java.util ：Java提供的常用工具包
- java.io： 输入/输出相关的类

Java包的定义：  

package 包

说明:

- package关键字,是用来定义包的

- package定义包的语句必须作为源文件的第一条语句

- 包名的命名规则 
  - 一般使用公司域名的倒序 + 项目名 + 模块名  
    com.wkcto.chapter01.package01 
  - 一般所有字母都小写

- 如果把类定义在包中, 类会有一个完整类名 
  - 包名.类名   
    com.wkcto.chapter01.package01.Demo01

- 使用java运行程序时, 如果是完整类名,系统会在当前目录中依次查找与包名对应的文件夹, 即在当前目录中查找  com/wkcto/chapter01/package01文件夹, 在该文件夹中查找Demo01.class字节码文件

- 把类定义在包中之后,编译时,可以通过 -d 参数指定字节码存储的位置，如：  
  javac -d . Test01.java （小点代表是当前目录）

::: tip 提示
示例项目结构：
```text
java_exercise_02                                       
  └─src                                          
      └─com                                      
          └─qym                                  
              └─xmm                              
                  ├─day18                        
                  │  ├─a     
                  │  │ └─A.java                
                  │  └─b  
                  │    └─B.java                         
                  └─day19   
```
:::


```java
package com.qym.xmm.day18;

/**
 *	1) 使用 package 关键字定义了一个包, 包名命名规则: 公司域名倒序.项目名.子模块名
 *	2) Test01 类的完整类名: package com.qym.xmm.day18
 *	3) 编译时, 通过 -d 参数指定生成字节码的存储位置
         javac   -d  .   Test01.java
         系统会在当前目录中依次创建与包名对应的文件夹
  * 4) 运行程序时, 使用完整类名
        java package com.qym.xmm.day18.Test01 报错了
        java com.qym.xmm.day18.Test01 这样写不报错

        系统会在当前目录中依次查找与包名对应的文件夹, 在该文件夹中查找字节码文件
 */
public class Test01 {
    public static void main(String[] args) {
        System.out.println("Hello World~");
    }
}

```
**备注：**  
- 编译： javac -d . Test01.java
- 运行： java com.qym.xmm.day18.Test01

使用其他包中的类  

在 a 包中想要使用 b 包中的类, **前提 b 包中的类必须定义为公共类**

在使用时,可以通过两种方式：

- 直接使用完整类名
- 先通过import导入该类,再使用

```java

// A.java
package com.qym.xmm.day18.a;


/**
 * 	在 a 包中, 想调用 b 包中的 getMsg 类的静态方法
 * 	1) 使用前提是, 被使用的 B 类必须定义为 public 公共类
 * 	2) 在使用时, 可以直接使用完整类名 , 也可以先import导入再使用，在写import时候可以使用 * 导入所有类（不推荐）
 */
 import com.qym.xmm.day18.b.B;
 // 或者
 //import com.qym.xmm.day18.b.*;

public class A {
    public static void main(String[] args) {
        // 1.可以直接使用完整类名
        com.qym.xmm.day18.b.B.getMsg();
        // 2.也可以先导入再使用，导入类，import com.example.exercise.day18.b.B;
        B.getMsg();
    }
}


// B.java
package com.qym.xmm.day18.b;

public class B {
    public static void getMsg() {
        System.out.println("Hello World~");
    }
}

```
**备注：**  
- javac -d . b/B.java  
- javac -d . a/A.java 
- java com.qym.xmm.day18.a.A
