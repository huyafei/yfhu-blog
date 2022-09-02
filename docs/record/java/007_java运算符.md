# java运算符

运算符是指明对操作数的运算方式。组成表达式的Java操作符有很多种（什么是操作数和操作符，例如1+2，其中1和2都是操作数，+是操作符，
操作符和操作数联合起来构成表达式）。运算符按照其要求的操作数数目来分，可以有单目运算符（1个操作数）、双目运算符（2个操作数）和
三目运算符（3个操作数）。运算符按其功能来分，有算术运算符、赋值运算符、关系运算符、逻辑运算符、位运算符、条件运算符、字符串连接运算符和
其他运算符。常见的运算符如下所示：

| 运算符类型    | 使用方式                                  |
|----------|---------------------------------------|
| 算术运算符    | +、-、*、/、%（取模）、++（自加1【单目】）、--（自减1【单目】） |
| 关系运算符    | ==、!=、>、>=、<、<=                       |
| 逻辑运算符    | &（逻辑与）、\                              |（逻辑或）、!（逻辑非）、&&（短路与）、\|\|（短路或） |
| 赋值运算符    | =、+=、-=、*=、/=、%=、^=、&=、\              |=、<<=、>>= |
| 位运算符     | &（按位与）、\                              |（按位或）、^（按位异或）、~（按位取反【单目】）、<<（左移）、>>（带符号右移）、>>>（无符号右移） |
| 条件运算符    | 布尔表达式?表达式1:表达式2 （三目）                  |
| 字符串连接运算符 | +                                     |
| 其它运算符    | instanceof、new                        |

**备注：**  
优先级运算使用小括号括起来，例如：(1+2)*2

## 算术运算符

```java
public class JiSuan {
    public static void main(String[] args) {
        // 算术运算符：+、-、*、/、%（取模）、++（自加1【单目】）、--（自减1【单目】）
        int a = 20;
        int b = 6;
        // 26
        System.out.println(a + b);
        // 14
        System.out.println(a - b);
        // 120
        System.out.println(a * b);
        // 3 java规则：int类型和int类型运算结果还是int类型，所以是 3
        System.out.println(a / b);
        // 2 20对6取余数，结果是2
        System.out.println(a % b);


        int t = ((a + b) - b) / b;
        System.out.println("((a + b) - b) / b = " + t);


        // 比较以下两种 ++ 方式 ----------------------
        int c = 20;
        c++;
        // 21
        System.out.println(c);
        int d = 20;
        ++d;
        // 21
        System.out.println(d);
        /**
         * ++ 在前或在后都是自加1
         */
        // ------------------------

        int c1 = 20;
        int c2 = ++c1;
        int d1 = 20;
        int d2 = d1++;

        System.out.println("c1值为：" + c1);  // 21
        System.out.println("c2值为：" + c2);  // 21

        System.out.println("d1值为：" + d1);  // 21
        System.out.println("d2值为：" + d2);  // 20
        /**
         *  java语法规定：
         *  当++运算符出现在变量后，会先做赋值运算，再自加1
         * 	当++运算符出现在变量前，会先自加1，再做赋值运算
         */


        // -- 同理

    }
}
```

**备注：**  
- int类型和int类型运算结果还是int类型
- 当++运算符出现在变量后，会先做赋值运算，再自加1
- 当++运算符出现在变量前，会先自加1，再做赋值运算

## 关系运算符
关系运算符主要是完成数据和数据之间的比较,结果是 boolan 类型 true（真） 或 false（假）

```java
public class GuanXi {
    public static void main(String[] args) {
        /**
         * 关系运算符：>、>=、<、<=、==、!=
         * 关系运算符主要是完成数据和数据之间的比较,结果是 boolan 类型 true（真） 或 false（假）
         */
        int a = 20;
        int b = 6;
        System.out.println(a > b); // true
        System.out.println(a >= b); // true
        System.out.println(a < b); // false
        System.out.println(a <= b); // false
        System.out.println(a == b); // false
        System.out.println(a != b); // true
    }
}
```

## 逻辑运算符
逻辑运算符主要包括逻辑与（&），逻辑或（|），逻辑异或（^），短路与（&&），短路或（||）。
所有逻辑运算符的特点是操作数都是**布尔类型**，并且最终的运算结果也是布尔类型。逻辑运算符的基本运算规则如下表所示：

| 运算符 | 示例        |结果| 描述                                                                                       |
|-----|-----------|-----|------------------------------------------------------------------------------------------|
| &   | true & true |true| 如果两个操作数都为 true，则结果为 true。<br> (5>3) & (5>4)：5大于3并且5大于4                                   |
| \|  | true\| false  |true| 如果两个操作数中有一个为 true，则结果为 true。<br> (5>3) \| (5>10)：5大于3或者5大于10 |
| !   | !false    |true| 取反 。true 取反是 false，false 取反是 true                                                        |
| ^   | true^false |true| 异或运算符，只要两边的操作数不同，结果就是 true                                                               |
| &&  | true&&true |true| 短路与运算符，只要左边的操作数为 false，则结果就是 false。<br>短路与（&&）和逻辑与（&）实际上最终的运行结果是完全相同的，只不过短路与（&&）会存在短路现象。 |
| \|\| | true\|\|false |true| 短路或运算符，只要左边的操作数为 true，则结果就是 true。<br>短路或（\|\|）和逻辑或（\|）实际上最终的运行结果是完全相同的，只不过短路或（\|\|）会存在短路现象。 |

```java
public class LuoJi {
    public static void main(String[] args) {
        /**
         * 逻辑运算符：逻辑与（&），逻辑或（|），逻辑异或（^），短路与（&&），短路或（||）
         */
        System.out.println(5 > 3 & 5 > 4); //true
        System.out.println(5 > 100 | 5 > 4); //true
        System.out.println(!(5 > 3)); //false
        System.out.println(!(5 < 3)); //true
        System.out.println("-------------------");

        System.out.println(true & true); //true
        System.out.println(true & false); //false
        System.out.println(true | false); //true
        System.out.println(!false); //true
        System.out.println(!true); //false
        System.out.println("-------------------");

        System.out.println(true ^ false); //true
        System.out.println(true ^ true); //false
        System.out.println(false ^ false); //false
        System.out.println(false ^ true); //true
        System.out.println("-------------------");
        //重点研究逻辑与（&）和短路与（&&）的区别
        int x = 100;
        int y = 98;
        int z = 99;
        System.out.println(x > y & x > z); //true
        System.out.println(x > y && x > z); //true
        //通过以上测试得出，逻辑与（&）和短路与（&&）最终运行结果相同
        //那么它们有什么区别呢？请看以下代码。
        int m = 99;
        int n = 100;
        System.out.println(m > n & m > n++); //false
        //逻辑与（&）运算符，只有当两边的操作数都是true的时候，结果才是
        //true，只要有一个是false，结果必然是false。以上程序逻辑与
        //左边的表达式(m > n)显然结果是false，通过左边的表达式已经可
        //以得出结果是false了，右边的表达式没有执行的必要，那我们来看一下
        //右边的表达式有没有执行，只要输出n就可以了断定。
        System.out.println("n = " + n); //101
        //以上程序的运行结果是101，足以说明n++已经执行了。也说明了逻辑与
        //运算符无论左边表达式结果是true还是false，右边表达式一定会执行。
        //那我们来看一下短路与（&&）是怎样的？
        int k = 99;
        int f = 100;
        System.out.println(k > f && k > f++); //false
        System.out.println("f = " + f); //100
        //通过以上测试得出f++并没有执行，因为左边表达式(k > f)为false
        //右边的表达式就不再执行了，这种现象被称为短路现象。也就是说对于短路与
        //来说，左边的表达式只要为false，就会发生短路，右边表达式不再执行了。
    }
}
```
**备注：**  
逻辑与（&） 和 短路与（&&）的区别：
1. 逻辑与（&），只有当两边的操作数都是true的时候，结果才是true，只要有一个是false，结果必然是false。（两边都会执行）
2. 短路与（&&），只要左边表达式结果是false，就会发生短路，右边表达式不再执行了。如果左边是 true 右边才会执行。

逻辑或（|） 和 短路或（||）的区别：
1. 逻辑或（|），两边的操作数只要有一个是true，结果就是true，（两边都会执行）
2. 短路或（||），只要左边表达式结果是true，就会发生短路，右边表达式不再执行了。如果左边是 false 右边才会执行。

## 位运算符

后续更新

## 赋值运算符

赋值运算符目前也是只需要掌握=、+=、-=、*=、/=、%=，其它和二进制相关的内容也是到后面遇到的时候再详细学习。赋值类的运算符包括基本赋值运算符（=）和扩展的赋值运算符（+=、-=、*=、/=、%=）。我们来看一段代码：

```java
public class FuZhi {
    public static void main(String[] args) {
        /**
         * 赋值运算符：=、+=、-=、*=、/=、%=
         * 赋值运算符主要是完成数据和数据之间的赋值，结果是 int 类型
         */
        int a = 20;
        int b = 6;
        a = b;
        System.out.println(a); // 6
        a += b; // 等同于  a = a + b
        System.out.println(a); // 12
        a -= b; // 等同于  a = a - b
        System.out.println(a); // 6
        a *= b; // 等同于  a = a * b
        System.out.println(a); // 36
        a /= b; // 等同于  a = a / b
        System.out.println(a); // 6
        a %= b; // 等同于  a = a % b
        System.out.println(a); // 0

        byte bt = 20;
        bt += 1; // 等同于  bt = (byte)(bt + 1)，1 是 int 类型
        System.out.println(bt); // 24
    }
}
```


## 条件运算符

```java
public class TiaoJian {
    public static void main(String[] args) {
        /**
         * 条件运算符/三目运算符：布尔表达式?表达式1:表达式2
         * 先判断布尔表达式，如果为 true，则输出表达式1，否则输出表达式2
         */

        boolean flag = true;
        //编译报错：这不是一个语句
        //flag ? 1 : 0;

        //以上如果是一条完整的语句应该这样写
        int k = flag ? 1 : 0;
        System.out.println("k = " + k); //1

        //三目运算符最经典的用法
        boolean sex = true;
        //当布尔变量sex为true则结果是'男'，反之'女'
        char gender = sex ? '男' : '女';
        System.out.println("性别：" + gender); //男
        sex = false;
        gender = sex ? '男' : '女';
        System.out.println("性别：" + gender); //女

        //又如
        int x = 100;
        int y = 100;
        System.out.println(x == y ? "x和y相等" : "x和y不相等");
    }
}
```

## 字符串连接运算符

在java中字符串都使用半角双引号括起来的，字符串属于引用数据类型，使用 String 类型来表示字符串。
例如： String str = "hello"; 字符串的链接 使用 "+" 来连接。  
"+" 符号在java中有两个作用：
1. 在 "+" 运算的时候，两边的操作数都是数字的话，是求和运算，
2. 如果其中有一个操作数是字符串类型，那么一定会进行字符串拼接运算

```java
public class PinJ {
    public static void main(String[] args) {
        int a = 20;
        int b = 6;
        int c = a + b;
        System.out.println("a + b = " + c); // a + b = 26
        System.out.println(a + "+" + b + "=" + (a + b)); // 20+6=26
    }
}
```
