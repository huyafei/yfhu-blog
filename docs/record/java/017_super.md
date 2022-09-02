# super 关键字
super 关键字表示当前对象中从父类继承过来的那部分特征。super 与 this类似，以下是super和this的说明：  

super 关键字：  
- super只是一个关键字，表示当前对象自己的父类型特征（也就是继承过来的那些东西），所以 super必须也只能出现在子类的方法或者构造方法中
- super出现在实例方法和构造方法中
- super的语法是 `super.` 和 `super()`
- `super()` **只能出现在构造方法的第一行**，通过当前的构造方法去调用“父类”中的对应的构造方法，目的是：创建子类对象时，先初始化父类型特征
- super不能出现在静态方法中
- super大部分情况下是可以省略的，子类中出现和父类一样的属性或者方法，此时，你要想调用父类的属性或者方法，此时“super.”不能省略。

this 关键字：  
- this是个引用，保存内存地址指向自己
- this出现在实例方法和构造方法中，谁调用这个实例方法，this就代表谁，this代表当前正在执行这个动作的对象
- this的语法是 `this.` 和 `this()`
- `this()` **只能出现在构造方法的第一行**，通过当前的构造方法去调用“本类”中的对应的构造方法，目的是：代码复用。
- this不能出现在静态方法中
- this大部分情况下可以省略，但是在区分局部变量和实例变量时不能省略

**备注：**  
- this 可以使用 `System.out.println();` 输出，super 不可以，会报错，
- super 和 this 不能同时调用构造方法！因为this 和 super都必须在方法的第一行

- super 只能在继承条件下使用，this 没有继承也可以使用
- super 表示父类特征应用，this 表示本身调用者这个对象
- super() 父类构造方法，this() 本类构造方法

```java
// P.java
public class P {
    String name;
    public void doSome() {
        System.out.println("P 中 doSome 方法");
    }
}
// S.java
public class S extends P {
    public void doSome() {
        System.out.println(this);
//        System.out.println(super); // 报错
        super.doSome();
        System.out.println(super.name); // null
    }

}
// Test01.java
public class Test01 {
    public static void main(String[] args) {
        S s = new S();
        s.doSome();
    }
}

```
**备注：**  
this是可以单独使用的引用，但super无法输出，编译器提示super要使用必须是“super.xxx”，显然super并不指向独立的对象，并不是保存某个对象的内存地址。


## super 关键字的使用（在构造方法中）

```java {56-61,63-71}
// People.java
public class People {
    String name;

    int age;

    String idCard;

    public People() {
    }

    public People(String name, int age, String idCard) {
        this.name = name;
        this.age = age;
        this.idCard = idCard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public void go() {
        System.out.println("出去~");
    }
}

// Student.java
public class Student extends People {
    String sNo;

    public Student() {

    }

    // 原来
//    public Student(String name, int age, String idCard, String sNo) {
//        this.name = name;
//        this.age = age;
//        this.idCard = idCard;
//        this.sNo = sNo;
//    }
    // 改造后 使用super(参数列表) 调用父类构造方法，复用性增强
    public Student(String name, int age, String idCard, String sNo) {
        super(name, age, idCard);
        this.sNo = sNo;
    }

    public void go() {
        System.out.println("去上学~");
    }
}

// Test02.java
public class Test02 {
    public static void main(String[] args) {
        Student s = new Student("小明", 14, "321***3031", "0826");
        System.out.println("姓名：" + s.name);
        System.out.println("年龄：" + s.age);
        System.out.println("身份证号：" + s.idCard);
        System.out.println("学号：" + s.sNo);
    }
}
```

**备注：**  
super(实际参数列表);表示调用父类构造方法，代码复用

通过以上代码的学习，“super(实际参数列表);”语法表示调用父类的构造方法，代码复用性增强了，另外一方面也是模拟现实世界当中的“要想有儿子，
必须先有父亲”的道理。不过这里的“super(实际参数列表)”在调用父类构造方法的时候，从本质上来说并不是创建一个“独立的父类对象”，
而是为了完成当前对象的父类型特征的初始化操作。（或者说通过子类的构造方法调用父类的构造方法，是为了让张小明身上长出具有他父亲特点的鼻子和眼睛，
鼻子和眼睛初始化完毕之后，具有父亲的特点，但最终还是长在张小明的身上）。

接下来，再来看一段代码：

```java
// A.java
public class A {
    public A(){
        System.out.println("A类无参构造函数~");
    }
}
// B.java
public class B extends A{
    public B() {
        System.out.println("B类无参构造函数~");
    }
}

// C.java
public class C extends B{
    public C() {
        System.out.println("C类无参构造函数~");
    }
}

// Test03.java
public class Test03 {
    public static void main(String[] args) {
        /**
         * 以下输出
         * A类无参构造函数~
         * B类无参构造函数~
         * C类无参构造函数~
         */
        C c = new C();
    }
}

```
通过以上运行结果可以得出以下的等效代码：
```java
// A.java
public class A {
    public A(){
        //这里调用的是Object类中的无参数构造方法
        //因为A类的父类是Object
        super();
        System.out.println("A类无参构造函数~");
    }
}
// B.java
public class B extends A{
    public B() {
        super();
        System.out.println("B类无参构造函数~");
    }
}
// C.java
public class C extends B{
    public C() {
        super();
        System.out.println("C类无参构造函数~");
    }
}
// Test03.java
public class Test03 {
    public static void main(String[] args) {
        /**
         * 以下输出
         * A类无参构造函数~
         * B类无参构造函数~
         * C类无参构造函数~
         */
        C c = new C();

    }
}

```
当一个构造方法第一行没有显示的调用“super(实际参数列表)”的话，系统默认调用父类的无参数构造方法“super()”。
当然前提是“this(实际参数列表)”也没有显示的去调用（因为super()和this()都只能出现在构造方法第一行，所以不能并存）。
我们可以通过以下程序再次测试一下：

```java
// D.java
public class D {
    public D(String name) {
        System.out.println(name);
    }
}
// E.java
public class E extends D{
    public E(){
    }
}
// Test04.java
public class Test04 {
    public static void main(String[] args) {
        /**
         * 编译时报错
         *
         *  错误: 无法将类 D中的构造器 D应用到给定类型;
         *     public E(){
         *               ^
         *   需要: String
         *   找到: 没有参数
         *   原因: 实际参数列表和形式参数列表长度不同
         */
        E e = new E();
    }
}

```
以上代码编译时报错，原因是E类的构造方法第一行默认会调用“super()”，而super()会调用父类D的无参数构造方法，但由于父类D中提供了有参数构造方法，
导致无参数构造方法不存在，从而编译报错了。所以在实际开发中还是建议程序员将无参数构造方法显示的定义出来，这样就可以避免对象的创建失败了

super()的作用主要是：
第一，调用父类的构造方法，使用这个构造方法来给当前子类对象初始化父类型特征；
第二，代码复用。

## super 关键字的使用（在实例方法中）

示例一：  

```java {34}
// Book.java
public class Book {
    String name;
    public Book() {
        super();
    }
    public Book(String name) {
        this.name = name;
    }
}

// PaperBook.java
public class PaperBook extends Book{
    public PaperBook() {
        super();
    }
    public PaperBook(String name) {
        super();
        this.name = name;
    }
    public void printName() {
        System.out.println("super.name: "+ super.name);
        System.out.println("this.name: "+ this.name);
    }
}

// Test05.java
public class Test05 {
    public static void main(String[] args) {
        PaperBook pb = new PaperBook("HelloWorld~");
        /**
         * 调用pb.printName();方法输出：
         * 
         * super.name: HelloWorld~
         * this.name: HelloWorld~
         */
        pb.printName();
    }
}

```
示例二：  
在 PaperBook 类中增加 name 字段
```java {14,43}
// Book.java
public class Book {
    String name;
    public Book() {
        super();
    }
    public Book(String name) {
        this.name = name;
    }
}

// PaperBook.java
public class PaperBook extends Book{
    String name;
    public PaperBook() {
        super();
    }
    public PaperBook(String name) {
        super();
        this.name = name;
    }
    public void printName() {
        System.out.println("super.name: "+ super.name);
        System.out.println("this.name: "+ this.name);
      //-----------------
        System.out.println(super.toString()); // PaperBook@6842775d
        System.out.println(this.toString()); // 我是金牌会员
        System.out.println(toString()); // 我是金牌会员
    }
    //重写从Object类中继承过来的toString()方法
    public String toString(){
        return "我是金牌会员";
    }
}

// Test05.java
public class Test05 {
    public static void main(String[] args) {
        PaperBook pb = new PaperBook("HelloWorld~");
        /**
         * 调用pb.printName();方法输出：
         * 
         * super.name: null
         * this.name: HelloWorld~
         */
        pb.printName();
    }
}

```

通过以上两个示例发现:  
1. 当子类继承父类，子类中没有变量 name，而是从父类中继承，this.name和super.name 访问的是同一个内存地址，输出的值相同，
当子类中有自己的变量 name，父类中也有 name，那么this.name 访问的是子类自己的name，super.name访问的时父类中的name

2. 父类和子类中有同名实例变量或者有同名的实例方法，想在子类中访问父类中的实例变量或实例方法，则super是不能省略的，其它情况都可以省略。 
