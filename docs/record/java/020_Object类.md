# Object类
Object 类是所有类的根父类, Java中的类要么直接继承Object要么间接继承Object
Java中的继承是可传递的, 所以Object类的方法所有的类都能继承到

Java中Object类的方法:  
- String：toString() 
  - 把对象转换为字符串
- Class<?>：getClass() 
  - 返回对象的运行时类.
- boolean：equals(Object obj) 
  - 判断对象的内容是否一样.
- protected Object：clone() 
  - 对象克隆, 是在堆中再创建一个完全一样的对象
- protected void：finalize() 
  - 当垃圾回收器回收这个对象时,会调用该方法，
  - 当一个对象没有变量引用它时, 垃圾回收器就会把这个对象释放, 回收该对象时会调用对象的finalize()方法, 垃圾回收器在什么时候回收这个对象不确定, finalize()方法的执行时间不确定, 该方法一般不用
- int：hashCode() 
  - 返回对象的哈希码.
  - 根据哈希约定, 如果两个对象equals()相等, 这两个对象的哈希码也应该相等 
  - 在重写equals()方法时,必须同时重写hashCode()
- void：notify() 
  - 唤醒等待中的线程
- void：notifyAll()
- void：wait() 
  - 线程等待

```java
// Person.java
package com.qym.xmm.day20;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
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

    public String getInfo() {
        return "姓名：" + name + "年龄：" + age;
    }

    /**
     * 重写 toString() 方法
     *
     * @return
     * @Override 注解，验证重写是否正确
     */
    @Override
    public String toString() {
        return "name：" + name + "age：" + age;
    }

    @Override
    public boolean equals(Object o) {
        // 依次判断两个对象的内容, 如果一个不相同的就返回false, 如果都相同就返回true
        // 1.两个变量引用同一个对象, 返回true，即在堆内存中的引用地址相同
        if (this == o) {
            return true;
        }
        // 2.参数为null 返回false
        if (o == null) {
            return false;
        }
        // 3.如果参数对象和当前对象不是同一个类型,返回false
        if (this.getClass() != o.getClass()) {
            return false;
        }
        //4. 当前对象与参数对象类型一样, 如果有一个字段的值不相等,就返回false
        //先把o对象转换为Person类型 大容量转小容量 强制类型转换 加转换符
        Person p = (Person) o;
        if (this.name == null) {
            if (p.name != null) {
                return false;
            }
        } else if (!this.name.equals(p.name)) {
            return false;
        }
        if (this.age == 0) {
            if (p.age != 0) {
                return false;
            }
        } else if (this.age != p.age) {
            return false;
        }
        return true;
    }

    // idea 生成
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        Person person = (Person) o;
//
//        if (age != person.age) return false;
//        return name.equals(person.name);
//    }
//
//    @Override
//    public int hashCode() {
//        int result = name.hashCode();
//        result = 31 * result + age;
//        return result;
//    }
}

// Test01.java
package com.qym.xmm.day20;

public class Test01 {
    public static void main(String[] args) {
        Person person = new Person("张三", 28);
        Person person2 = new Person("李四", 25);
        System.out.println(person.getInfo());
        /**
         * getClass()
         * 返回对象的运行时类对象
         *
         * 可以简单的把getClass()方法理解为返回对象的类
         * 可以利用这个方法判断两个对象的类是否是同一个类
         */
        System.out.println(person.getClass()); // class com.qym.xmm.day20.Person
        System.out.println(person.getClass() == person2.getClass()); // true


        /**
         * toString()
         * 作用是把对象转换为字符串
         * toString() 默认显示完整类名@十六进制数, 如果想要打印obj对象的各个字段值, 需要重写toString()
         * 输出 person 默认调 toString() 方法，等同于person.toString()
         *
         * 未重写 输出：com.qym.xmm.day20.Person@26ba2a48，
         * 重写 输出：name：张三age：28
         */
        System.out.println(person);

        /**
         * equals()
         * 1.使用关系运算符 == 判断两个引用是否指向堆中的同一个对象
         * 2.用equals()方法判断两个对象的内容是否一样,即各个字段值是否相等
         * 如果两个类需要使用equals()判断两个对象是否一样时,需要重写equals()方法
         * 就像之前判断两个字符串是否一样时,需要调用equals()方法, String类已经重写过equals()方法了
         */
        Person person4 = new Person("张三", 28);
        Person person5 = person;
        System.out.println(person.equals(person4));// 不重写 false，重写 true（引用地址不同，里面的内容相同）
        System.out.println(person.equals(person5));// true，引用地址一样
    }
}

```
