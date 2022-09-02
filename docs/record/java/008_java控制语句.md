# java控制语句

## 选择语句 if...else...
跟JavaScript一样，Java语言也支持if...else...语句。有以下几种：

```text
// 第一种
if(布尔表达式){
  // java语句
}

// 第二种
if(布尔表达式){
  // java语句
}else{
  // java语句
}

// 第三种
if(布尔表达式){
  // java语句
}else if(布尔表达式){
   // java语句
}else if(布尔表达式){
  // java语句
}

// 第四种
if(布尔表达式){
  // java语句
}else if(布尔表达式){
   // java语句
}else {
  // java语句
}
```
```java
public class If {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        // 第一种
        if (a > b) {
            System.out.println("a大于b");
        }

        // 第二种
        if (a > b) {
            System.out.println("a大于b");
        } else {
            System.out.println("a小于b");
        }

        // 第三种
        if (a > b) {
            System.out.println("a大于b");
        } else if (a == 10) {
            System.out.println("a等于10");
        } else if (a < b) {
            System.out.println("a小于b");
        }

        // 第四种
        if (a > b) {
            System.out.println("a大于b");
        } else if (a == 10) {
            System.out.println("a等于10");
        } else {
            System.out.println("a大于b");
        }
        // 创建键盘扫描器对象
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.println("请输入一个数字：");
        // 调用nextInt方法获取用户输入的数字 nextInt方法返回的是int类型的数据，next()方法返回的是String类型的数据
        int num = scanner.nextInt();

        if (num == 1) {
            System.out.println("男性");
        } else if (num == 0) {
            System.out.println("女性");
        } else {
            System.out.println("请输入正确的数字");
        }
    }
}
```

## 选择语句 switch...case...

switch语句和if语句一样，都属于选择语句（分支语句），完整写法：

```text
switch(int/String类型数据){
  case int/String值1:
    // java语句
    break;
  case int/String值2:
    // java语句
    break;
  case int/String值3:
    // java语句
    break;
  default:
    // java语句
}
```
```java
public class Switch {
    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.println("请输入一个数字：");
        int num = scanner.nextInt();
        switch (num) {
            case 1:
                System.out.println("男性");
                break;
            case 0:
                System.out.println("女性");
                break;
            default:
                System.out.println("请输入正确的数字");
                break;
        }
        //注意： break 可以不写，不写break，则会发生case穿透现象，也就是说下一个分支也不再进行匹配，直接进入下一个分支执行，直到遇到“break;”为止

        switch (num) {
            case 1:
                System.out.println(1);
            case 2:
                System.out.println(2);
                break;
            default:
                System.out.println(3);
        }

        // switch语句当中case是可以进行合并的
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                System.out.println("今天是工作日哦！");
                break;
            case 6:
            case 7:
                System.out.println("今天是休息日哦！");
                break;
            default:
                System.out.println("对不起，您的输入有误");
        }
    }
}
```

**备注：**
- break 可以不写，不写break，则会发生case穿透现象，也就是说下一个分支也不再进行匹配，直接进入下一个分支执行，直到遇到“break;”为止
- case可以合并

## 循环语句 for

```text
for(初始表达式;布尔表达式;更新表达式;){
  // java语句
}
```

```java
public class For {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
        System.out.println("-------------分割线---------------");
        // 可以不写初始表达式、条件表达式和更新表达式，但是 ; 必须要写
//        for (; ; ) {
//            System.out.println("死循环");
//        }
        System.out.println("-------------分割线---------------");
        // 变量初始变量可以写在外部
        int i2 = 0;
        for (; i2 < 10; i2++) {
            System.out.println(i2);
        }

        // 9乘9乘法表
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "*" + i + "=" + i * j + " ");
            }
            System.out.println();
        }
    }
}
```
**备注：**  
- 执行步骤
  1. 首先初始化变量
  2. 判断条件，
     1. 如果条件为真，则执行循环体，
        1. 更新变量,然后执行 2 步骤【重复流程，直到条件为假为止】
     2. 如果条件为假，则跳出循环
 
- 可以不写初始表达式、条件表达式和更新表达式，但是 ";" 必须要写
- 变量初始变量可以写在外部


## 循环语句 while
语法结构：
```text
while(布尔表达式){
  // java语句
}
```

```java
public class While {
    public static void main(String[] args) {
        int i = 0;
        while (i < 10) {
            System.out.println(i);
            i++;
        }
    }
}
```

## 循环语句 do-while

语法结构：
```text
do{
  // java语句
}while(布尔表达式);
```

```java
public class DoWhile {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 10);
    }
}
```

**备注：**  
do-while是先执行循环体，然后判断条件，如果条件为真，则执行循环体，然后更新变量，直到条件为假为止，所有循环次数最少是一次。

## break 语句
break 单词是一条java语句，是循环控制语句，一般用于 switch 或 循环语句中，用来终止当前循环。

```java
public class Break {
    public static void main(String[] args) {
        // for循环的break语句
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break;
            }
            System.out.println(i);
        }
        System.out.println("----------分界线----------");
        // while循环的break语句
        int j = 0;
        while (j < 10){
            if (j == 5) {
                break;
            }
            System.out.println(j);
            j++;
        }
        System.out.println("----------分界线----------");
        // do-while循环的break语句
        int k = 0;
        do {
            if (k == 5) {
                break;
            }
            System.out.println(k);
            k++;
        } while (k < 10);
        System.out.println("----------分界线----------");
        // 嵌套循环的break语句，break语句只能终止最近的 ‘一层’ 循环
        for (int x = 0; x < 10; x++) {
            for (int y = 0; y < 10; y++) {
                if (x == 5 && y == 5) {
                    break;
                }
                System.out.println(x + " " + y);
            }
        }
        System.out.println("----------分界线----------");
        // 为每个循环增加标识符，可以终止指定循环
        f1:for (int x = 0; x < 10; x++) {
            f2:for (int y = 0; y < 10; y++) {
                if (x == 5 && y == 5) {
                    break f1;
                }
                System.out.println(x + " " + y);
            }
        }

    }
}
```

**备注：**
 - break语句只能终止最近的一层循环
 - 嵌套for循环可以添加标识符(例如：f1:for...)，可以使用 `break 标识名;` 终止指定循环(例如：break f1;)  

## continue 语句

continue 和 break 单词一样也是一条java语句，也是循环控制语句，`break` 是终止循环执行，而 `continue` 用来跳过当前循环的一部分，继续执行下一次循环。

```java
public class Continue {
    public static void main(String[] args) {
        /**
         * 比较两个循环
         * break：当i==5 时 会终止当前循环语句
         * continue：当i==5 时 会终止当前循环，然后执行下一个循环
         */
        // for循环的break语句
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break;
            }
            System.out.println(i);
        }

        // for循环的continue语句
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                continue;
            }
            System.out.println(i);
        }
    }
}

```

**备注：**  
- break 终止当前整个循环语句
- continue 终止当前循环的一部分，继续执行下一次循环


