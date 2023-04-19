# final关键字
final 关键字表示最终的、不可变的。可以修饰类, 修饰字段, 修饰方法,修饰局部变量,修饰方法的形参：
- final 修饰类, 表示最终类,不能被继承,不能作为父类存在
  - 使用场景：当定义的类不想被别的类继承时, 就可以使用 final 修饰，如 System类/String类就是使用 final 修饰的
- final 修饰字段,在定义时必须显示初始化, 不能被修改, 一般与static同时使用,所有字母都大写,称为 final 常量
- final 修饰方法,不能被覆盖(重写)
- final 修饰局部变量, 一旦初始化就不能再修改, 注意 final 修饰引用类型变量,是指这个变量不能再指向 其他对象 , 可以修改它的字段值
- final 修饰方法形参, 在方法体中不能修改 final 参数的值

```java
package com.qym.xmm.day20;

/**
 * final 修饰类，无法被继承，称为最终类
 * 使用场景：当定义的类不想被别的继承时，例如：System/String
 */
public final class Father {
}
```

```java
package com.qym.xmm.day20;

/**
 * final 修饰字段
 * 1. 要么在定义的时候初始化，要么在构造方法中初值
 * 2. final 字段不能重复赋值
 * 3. 一般情况下，final修饰字段时, 同时使用static一起修饰, 称为final常量 , 所有字母都大写
 */
public class Father2 {
    int a;
    int b = 0;

    final private int aa = 123; // final修饰字段在定义时初始化值
    final int bb; // final修饰字段, 在构造函数初始化

    final static  String NAME = "张三"; // final 常量

    public Father2() {
        this.bb = 22;
    }

    public void m() {
        a = 12;
        b = 13;
        // final 定义字段不能重新赋值
       // aa = 14;
       // bb = 15;
       // NAME = 16;
    }
}

```

```java
package com.qym.xmm.day20;

/**
 * final 修饰方法，无法被覆盖/重写，但可以被继承
 */
public class Father3 {
    public void run(){
        System.out.println("father 在跑步~~");
    }
    public final void eat(){
        System.out.println("father 在吃饭~~");
    }
}

package com.qym.xmm.day20;

public class Son3 extends Father3{
    @Override
    public void run() {
        System.out.println("son 在跑步~~");
        //  final 修饰方法可以被继承
        // eat();
    }

    /**
     * final 修饰方法无法被覆盖/重写
     */
    // public final void eat() {
    //     System.out.println("son 在吃饭~~");
    // }

}

```

```java
package com.qym.xmm.day20;

/**
 * final 修饰方法形参, '在方法体中'不能修改 final 参数的值
 */
public class Father4 {
    public void out(int a, int b) {
        a = 2;
        b = 3;
        System.out.println("a:" + a + "b:" + b);
    }
    public void out1(int a, final int b) {
        a = 2;
        // b = 4; // final形参不能被赋值
        System.out.println("a:" + a + "b:" + b);
    }
}

```
