# static和this

## this 关键字

this可以看做一个变量，它是引用类型，存储在Java虚拟机堆内存的对象内部，this这个引用保存了当前对象的内存地址指向自身，
任何一个堆内存的java对象都有一个this，也就是说创建100个java对象则分别对应100个this。
this指向“当前对象”，也可以说this代表“当前对象”，谁调用实例方法，this就是谁，this可以使用在实例方法中以及构造方法中，语法格式分别为“this.”和“this(..)”。**this不能出现在带有static的方法当中**。

### this 实例方法中使用

```java
// ThisZx.java
public class ThisZx {
    public static String name = "名字";
    public int no = 1;

    public static void main(String[] args) {
//        System.out.println(this);// 报错 无法从静态上下文中引用非静态 变量 this
        // static 静态方法 通过类名.方法名调用
        ThisZx.m();// 等同于 m()
        // 非静态方法 通过new出来的对象名.方法名调用
        ThisZx t = new ThisZx();//
        t.m2();

        System.out.println("--------------------------");
        Student s = new Student("张三", 201813, "六（1）");
        System.out.println("main --> " + s);
        System.out.println("name --> " + s.getName());
        System.out.println("--------------------------");
        Student s2 = new Student("李四", 2020, "六（2）");
        System.out.println("main --> " + s2);
        System.out.println("name --> " + s2.getName());

        System.out.println("--------------------------");

        // static 静态方法和静态变量都是用 类名.方法名/变量名 访问
        System.out.println(name); // 名字
        System.out.println(t.no); // 1
    }

    public static void m() {
//        System.out.println(this); // 报错 无法从静态上下文中引用非静态 变量 this
    }

    public void m2() {
        System.out.println(this); // ThisZx@6d06d69c，只有 new 出来的对象才能访问到 this，this 指向的是 new 出来的对象
    }
}

// Student.java
public class Student {
    // 成员变量
    private String name;
    private int no;
    private String className;

    public Student(String name, int _no, String _className) {
        System.out.println("Student构造方法 --> " + this);
        this.name = name;
        // this可以省略，前提是局部变量和成员变量名称不相同
        no = _no;
        className = _className;
    }

    public String getName() {
        System.out.println("getName --> "+ this);
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
}

```

**备注：**
- this 表示当前对象的引用 也就是 通过 new 出来的对象
- this 无法在 static 静态方法中使用，因为调用 static 静态方法不需要对象，所以无法使用 this
- this 可以在实例方法中使用，代表当前对象
- 在当前实例方法中使用 this，可以忽略使用this，区分局部变量和实例变量时不能省略

### this(实际参数列表) 使用
this 的另外一种写法 this(实际参数列表)，但**必须写在构造方法的第一行**，否则报错。

```java
// ThisZx.java
public class ThisZx2 {
    public static void main(String[] args) {
        MobilePhone mb = new MobilePhone();
        System.out.println(mb.getName());
    }
}
// MobilePhone.java
public class MobilePhone {
    private String name;
    private double price;

    public MobilePhone() {
        // this(参数列表)代码复用 默认值，必需在构造函数第一行
        this("iPhone", 699.00);
//        this.name = "iPhone";
//        this.price = 699.00;
    }

    public MobilePhone(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

```

**备注：**
- 主要记住 this(参数列表) 在写在构造方法的第一行，否则报错

## static 关键字

static是java语言中的关键字，表示“静态的”，它可以用来修饰变量、方法、代码块等，修饰的变量叫做静态变量，修饰的方法叫做静态方法，修饰的代码块叫做静态代码块。
在java语言中凡是用static修饰的都是类相关的，不需要创建对象，直接通过“类名”即可访问，即使使用“引用”去访问，在运行的时候也和堆内存当中的对象无关

声明为static的变量称为静态变量或类变量。可以直接通过类名引用静态变量，也可以通过实例名来引用静态变量，但最好采用前者，因为后者容易混淆静态变量和一般变量。 静态变量是跟类相关联的，类的所有实例共同拥有一个静态变量。
声明为static的方法称为静态方法或类方法。静态方法可以直接调用静态方法，访问静态变量，但是不能直接访问实例变量和实例方法。静态方法中不能使用this关键字，因为静态方法不属于任何一个实例。

### static 静态变量
java中的变量包括：局部变量和成员变量，
在方法体中声明的变量为局部变量，有效范围很小，只能在方法体中访问，方法结束之后局部变量内存就释放了，在内存方面局部变量存储在栈当中。
在类体中定义的变量为成员变量，而成员变量又包括实例变量和静态变量，
当成员变量声明时使用了static关键字，那么这种变量称为静态变量，没有使用static关键字称为实例变量

```text
修饰符 class  类名{
    //类体
    static 类型 成员变量1;
    static 类型 成员变量2;
}
```

```java
// StaticSy.java
public class StaticSy {
    public static void main(String[] args) {
        // 类名.  访问静态成员变量
        System.out.println(Man.sex); //true
        Man m = new Man(123);
        // 实例对象 访问静态成员变量，不建议这么做，容易混淆，静态变量和一般变量，建议使用  类名.
        System.out.println(m.sex); //123
        System.out.println(m.idCard); //123
        
        Man m1 = new Man(101);
        System.out.println(m1.idCard);
        System.out.println(m1.sex);
        Man m2 = new Man(102);
        System.out.println(m2.idCard);
        System.out.println(m2.sex);
        Man m3 = new Man(103);
        System.out.println(m3.idCard);
        System.out.println(m3.sex);
        System.out.println("----------------------------");
        
        m3 = null;
        System.out.println(m3.sex); // true
        // System.out.println(m3.idCard); // 报错 java.lang.NullPointerException
//静态方法比较正式的访问方式
        Man.printInfo(); // 男
        //访问静态方法可以使用引用吗？并且空的引用可以吗？
        m2.printInfo(); // 男
        // m3 = null 还可以调用 printInfo
        m3.printInfo(); // 男
    }
}
// man.java
public class Man {
    int idCard;
    // 静态成员变量（静态变量）
    // 性别（true表示男，false表示女）
    static boolean sex = true;
    public Man(int idCard){
        this.idCard = idCard;
    }
    // 静态方法
    public static void printInfo(){
        System.out.println("-----" + (Man.sex ? "男" : "女") + "------");
    }
}

```

**备注：**
- 静态变量和静态方法 使用类名访问
- 通过 new 出来的引用对象访问也可以访问并且当引用对象赋值为 null 时也可以访问静态变量/方法而且不会出现空指针异常，但不建议这么做

### static 静态代码块

静态代码块在类加载时执行，并且只执行一次。静态代码块实际上是java语言为程序员准备的一个特殊的时刻，这个时刻就是类加载时刻，如果你想在类加载的时候执行一段代码，那么这段代码就有的放矢了。
例如我们要在类加载的时候解析某个文件，并且要求该文件只解析一次，那么此时就可以把解析该文件的代码写到静态代码块当中了。
静态代码块的语法格式：

```text
修饰符 class  类名{
    //静态代码块
    static{
      java语句;
    }
}
```
```java
public class StaticDmk {
    static {
        System.out.println(2);
        // System.out.println(quantity);// 报错 非法前向引用,遵循代码自上而下顺序执行，先定义变量，再使用变量
    }

    int i = 100;
    static int quantity = 200;

    static {
        System.out.println(1);
        //System.out.println(i); // 报错  无法从静态上下文中引用非静态 变量 i
        StaticDmk sd = new StaticDmk();
        System.out.println(sd.i);
        System.out.println(quantity);
        // 调用静态方法
        test();
        // test2(); //报错  错误: 无法从静态上下文中引用非静态 方法 test2()
    }

    public static void main(String[] args) {

        /**
         * static 代码块先执行，再执行非static代码块，所以输出2、1、3 main
         */
        System.out.println("main");
    }

    static {
        System.out.println(3);

    }
    static void test(){
        System.out.println("test");
    }
    void test2(){
        System.out.println("test2");
    }
}


```
**备注：**
- 静态代码块可以访问静态变量和静态方法，不能访问非静态变量和非静态方法
- 静态代码块在类加载是只执行一次

### static 静态方法

有静态变量就有静态方法，方法是描述的是行为动作，在方法前加 static 修饰符称为静态方法，静态方法使用 `类名.静态方法` 调用，不需要实例化，因为没有实例变量，所以静态方法中没有 this，只有实例方法中才有 this，
一般用于编写 "工具类" 这样就不需要创建对象，直接使用 `类名.静态方法` 调用，方便使用
```text
修饰符 class 类名{
  修饰符列表 类型 变量名1;
  修饰符列表 类型 变量名2;
  
  public static 返回值类型 方法名 {
    // 方法体
  }

}

```
```java
//CustomerTest.java
public class CustomerTest {
    public static void main(String[] args) {
        Customer c_zs = new Customer("张三");
        c_zs.shopping();
        Customer c_ls = new Customer("李四");
        c_ls.shopping();
        Utils.p(20);
        Utils.p(20.00);
        Utils.p(true);
        Utils.p('A');
        Utils.p("abc");
    }
}

//Customer.java
public class Customer {
    private String name;
    public Customer(String name) {
        this.name = name;
    }
    public void shopping(){
        System.out.println(name + "正在购物");
        pay();
    }
    public void pay() {
        System.out.println(name + "正在支付");
    }

}
// Utils.java
public class Utils {
    public static void p(int data){
        System.out.println(data);
    }
    public static void p(long data){
        System.out.println(data);
    }
    public static void p(float data){
        System.out.println(data);
    }
    public static void p(double data){
        System.out.println(data);
    }
    public static void p(boolean data){
        System.out.println(data);
    }
    public static void p(char data){
        System.out.println(data);
    }
    public static void p(String data){
        System.out.println(data);
    }
}
```

