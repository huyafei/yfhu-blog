# Java基础
## Java基本结构
一个完整的java程序：
```java
/**
 * （javadoc注释，写在这里的注释信息会被JDKbin
 * 目录下的javadoc.exe工具提取并生成帮助文档）
 * HelloWorld.java
 */
public class HelloWorld {
  // 单行注释
  public static void main(String[] args) {
    System.out.println("Hello World!");
      /* 多行注释
      注释内容
      注释结束 */
  }
}
```
```text
**
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
```

Java是面向对象的语言，一个程序的基本单位就是 `class`，`class` 是关键字，这里定义的 `class` 类的名字就是 HelloWorld：

```java
public class HelloWorld { // 类名是 HelloWorld
    // ...
} // class定义结束
```

类名要求：
- 类名必须以英文字母开头，后接字母，数字和下划线`_`的组合
- 一般以大写字母开头，驼峰命名法

例如：  
- good
  - HelloWorld
  - NoteBook
  - ...
- bad
  - hello_world
  - notebook
  - 123HelloWorld
  - HelloWorld_123
  - ...
  
`public` 修饰符表示类的访问权限，`public` 表示该 `class` 是公开的，不写 `public` 则默认为 `private`  私有的，
只能在当前文件中使用，不能在其他文件中使用。  

一个源文件中可以有多个 `class` 类，但是一个 `class` 类只能有一个 `public` 的类， 并且要求此 `类名` 必须和 `java源文件名` 保持一致。如下：

```java
// HelloWorld.java
public class HelloWorld {
 // ...
}
class person {
  // ...
}
class cart {
  // ...
}
```

一个源文件中有多个 `class` 类时，在编译的时候一个`class` 会编译生成一个 `class` 字节码程序文件，一般规范化写法一个 java 源文件只定义一个 `class` 类，

在 `class` 内部，可以定义若干方法（method）：

```java 
// HelloWorld.java
public class HelloWorld {
  public static void main(String[] args) { // 方法名是main
    // ...
  }
}
class Preson {
  public static void main(String[] args) { // 方法名是main
      System.out.println("Preson");
  }
}
class Cart {
  public static void main(String[] args) { // 方法名是main
      System.out.println("Cart");
  }
}
```
上面的示例中定义的 是 `main` 方法名，返回值是 `viod` 表示没有任何返回值， `public` 修饰符可以修饰 `class` 外，也可以修饰方法，
而关键字 `static` 是另一个修饰符，它表示静态方法。

在 Java 中以 `main` 命名的方法示为主方法，在 `class` 中定义 `main` 方法（主方法），示作为程序的入口， 
也就是说任何一个class中都可以写 `main` 方法（主方法），想从哪个入口进去执行，则让类加载器先加载对应的类即可。 例如：
想让A类中的main方法执行，则执行：java A，想让B类中的main方法执行，则执行：java B。但实际上，对于一个完整的独立的应用来说，只需要提供一个入口，也就是说只需要定义一个main方法即可。

**特殊说明：**
- java入口程序必需是静态方法 【static 修饰】
- 方法名必须为 main
- 参数必须是String数组 【String[] args】
- 方法返回值必须是void 【void】

方法名也有命名规则，命名和class一样，但是首字母小写例如：  

- good
  - main
  - goodMorning
  - playVR
  
- bad 
  - Main
  - good123
  - good_morning
  - _playVR

## 标识符
标识符就是程序员自己规定的代表一定含义的单词（java源程序当中凡是程序员自己有权利修改的名字），比如类名，属性名，变量名等。  

**Java标识符命名规则：**  
- 标识符只能由数字、字母、下划线`_` 、美元符号 `$` 组成，不能含有其它符号。
- 标识符不能以数字开始。
- java关键字和保留字不能作为标识符。
- 标识符严格区分大小写。
  
**Java标识符命名规范：**
- 见名知意。（看到这个单词就知道它表示什么）
- 遵循驼峰命名方式。（单词界线更明确）
- 类名、接口名首字母大写，后面每个单词首字母大写。
- 变量名、方法名首字母小写，后面每个单词首字母大写。
- 常量名全部大写，单词和单词之间使用 `_` 衔接。

## 关键字
关键字是Java编程语言中内置事先定义好的一些特殊的标识符，它们是用来标识程序的一些特殊的功能的，不能用作变量名、方法名、类名、包名和参数等。例如：
- abstract：表明类或者成员方法具有抽象属性
- assert：断言，用来进行程序调试
- boolean：基本数据类型之一，声明布尔类型的关键字
- break：提前跳出一个块
- byte：基本数据类型之一，字节类型
- case：用在switch语句之中，表示其中的一个分支
- catch：用在异常处理中，用来捕捉异常
- char：基本数据类型之一，字符类型
- class：声明一个类
- const：保留关键字，没有具体含义
- continue：回到一个块的开始处
- default：默认，例如，用在switch语句中，表明一个默认的分支。Java8 中也作用于声明接口函数的默认实现
- do：用在do-while循环结构中
- double：基本数据类型之一，双精度浮点数类型
- else：用在条件语句中，表明当条件不成立时的分支
- enum：枚举
- extends：表明一个类型是另一个类型的子类型。对于类，可以是另一个类或者抽象类；对于接口，可以是另一个接口
- final：用来说明最终属性，表明一个类不能派生出子类，或者成员方法不能被覆盖，或者成员域的值不能被改变，用来定义常量
- finally：用于处理异常情况，用来声明一个基本肯定会被执行到的语句块
- float：基本数据类型之一，单精度浮点数类型
- for：一种循环结构的引导词
- goto：保留关键字，没有具体含义
- if：条件语句的引导词
- implements：表明一个类实现了给定的接口
- import：表明要访问指定的类或包
- instanceof：用来测试一个对象是否是指定类型的实例对象
- int：基本数据类型之一，整数类型
- interface：接口
- long：基本数据类型之一，长整数类型
- native：用来声明一个方法是由与计算机相关的语言（如C/C++/FORTRAN语言）实现的
- new：用来创建新实例对象
- package：包
- private：一种访问控制方式：私用模式
- protected：一种访问控制方式：保护模式
- public：一种访问控制方式：共用模式
- return：从成员方法中返回数据
- short：基本数据类型之一,短整数类型
- static：表明具有静态属性
- strictfp：用来声明FP_strict（单精度或双精度浮点数）表达式遵循IEEE 754算术规范
- super：表明当前对象的父类型的引用或者父类型的构造方法
- switch：分支语句结构的引导词
- synchronized：表明一段代码需要同步执行
- this：指向当前实例对象的引用
- throw：抛出一个异常
- throws：声明在当前定义的成员方法中所有需要抛出的异常
- transient：声明不用序列化的成员域
- try：尝试一个可能抛出异常的程序块
- void：声明当前成员方法没有返回值
- volatile：表明两个或者多个变量必须同步地发生变化
- while：用在循环结构中

## public class 和 class的区别
- 一个java源文件当中可以定义多个 class
- 一个java源文件当中 public 的 class 不是必须的
- 一个class会定义生成一个 xxx.class 字节码文件
- 一个java源文件当中定义公开的类的话，只能有一个，并且该类名称必须和java源文件名称一致。
- 每一个class当中都可以编写 main 方法，都可以设定程序的入口，想执行 B.class 中的 main 方法：java B， 
  想执行 X.class 当中的 main 方法：java X


