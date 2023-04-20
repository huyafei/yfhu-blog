(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{320:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[s._v("#")]),s._v(" 接口")]),s._v(" "),a("ul",[a("li",[s._v("接口（interface）可以看成是特殊的抽象类，只包含抽象方法的抽象类，所谓 interface 就是比抽象类还要抽象的接口")]),s._v(" "),a("li",[s._v("在抽象类中，抽象方法本质上是定义接口规范，即规定高层类的接口，从而保证所有子类都有相同的接口实现，同样接口也可以理解为一个操作规范，")]),s._v(" "),a("li",[s._v("接口与继承不同，类通过 implements 来实现接口也可以实现多个接口，用逗号隔开，同时该类要实现这些接口中定义的方法也就是重写")]),s._v(" "),a("li",[s._v("接口之间可以继承，用 extends 关键字，接口可以继承多个接口，用逗号隔开")]),s._v(" "),a("li",[s._v("接口也可以作为类型声明变量")]),s._v(" "),a("li",[s._v("不能实例化对象")]),s._v(" "),a("li",[s._v("建议面向接口编程")])]),s._v(" "),a("p",[a("strong",[s._v("备注：")])]),s._v(" "),a("ol",[a("li",[s._v("接口里只能定义抽象方法")]),s._v(" "),a("li",[s._v("接口通过 implements 实现接口，并且可以实现多个接口逗号隔开")]),s._v(" "),a("li",[s._v("实现接口后必需重写抽象方法（也就是接口中的方法）")])]),s._v(" "),a("h2",{attrs:{id:"接口定义与实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口定义与实现"}},[s._v("#")]),s._v(" 接口定义与实现")]),s._v(" "),a("ol",[a("li",[s._v("Java接口定义的语法:")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[修饰符]   interface  接口名 {\n    接口中的字段默认使用 public static final修饰\n    接口中的方法默认使用 public abstract 修饰\n    接口中可以定义 public static 静态方法\n    定义 public  default方法\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Java接口的使用\n通过 implements 实现接口，同时，要重写接口中方法,多个接口用逗号隔开")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[修饰符]  class  类名  implements  接口1,接口2{\n\n    //重写接口中的方法\n\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如果一个抽象类没有'字段'，所有方法全部都是抽象方法：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("qym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xmm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("day23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("就可以把该抽象类改写为接口：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("qym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xmm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("day23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以省略 public abstract：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("qym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xmm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("day23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"抽象类和接口区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口区别"}},[s._v("#")]),s._v(" 抽象类和接口区别")]),s._v(" "),a("p",[s._v("相同点：")]),s._v(" "),a("ul",[a("li",[s._v("都可以定义抽象方法")]),s._v(" "),a("li",[s._v("都不能实例化对象")]),s._v(" "),a("li",[s._v("抽象类/接口的抽象方法都需要被重写")]),s._v(" "),a("li",[s._v("抽象类/接口中都可以定义 public static final字段, public static静态方法")])]),s._v(" "),a("p",[s._v("不同点：")]),s._v(" "),a("ul",[a("li",[s._v("意义不同\n"),a("ul",[a("li",[s._v("抽象类对类进行更高层级的抽象")]),s._v(" "),a("li",[s._v("接口是对功能的封装")])])]),s._v(" "),a("li",[s._v("定义方式不同\n"),a("ul",[a("li",[s._v("抽象类使用 abstract class定义")]),s._v(" "),a("li",[s._v("接口使用 interface 定义")])])]),s._v(" "),a("li",[s._v("内容不同\n"),a("ul",[a("li",[s._v("抽象类中除了可以定义抽象方法外, 还可以定义实例变量/实例方法/静态变量/静态方法,构造方法等普通类所有的成员")]),s._v(" "),a("li",[s._v("接口中除了抽象方法外, 还可以定义public static final字段, public static方法,public default方法")]),s._v(" "),a("li",[s._v("抽象类有构造方法, 接口没有构造方法; 接口中可以使用default修饰方法，抽象类不能使用default修饰方法")])])]),s._v(" "),a("li",[s._v("使用方式不同\n"),a("ul",[a("li",[s._v("抽象类一般作为父类存在, 需要子类通过 extends 继承")]),s._v(" "),a("li",[s._v("接口需要通过类 implements 实现")])])]),s._v(" "),a("li",[s._v("继承\n"),a("ul",[a("li",[s._v("抽象类只支持单继承,")]),s._v(" "),a("li",[s._v("接口支持多继承")])])]),s._v(" "),a("li",[s._v("应用场景不同\n"),a("ul",[a("li",[s._v("如果除了功能外,还需要保存不同的数据,选择抽象类, 抽象类中的抽象方法,需要在子类中重写, 抽象类可以约束所有的子类都具有某个功能")]),s._v(" "),a("li",[s._v("如果仅仅是为了扩展类的功能,优先选择接口")])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("abstract class")]),s._v(" "),a("th",[s._v("interface")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("继承")]),s._v(" "),a("td",[s._v("只能extends一个class")]),s._v(" "),a("td",[s._v("可以implements多个interface")])]),s._v(" "),a("tr",[a("td",[s._v("字段")]),s._v(" "),a("td",[s._v("可以定义实例字段")]),s._v(" "),a("td",[s._v("不能定义实例字段")])]),s._v(" "),a("tr",[a("td",[s._v("抽象方法")]),s._v(" "),a("td",[s._v("可以定义抽象方法")]),s._v(" "),a("td",[s._v("可以定义抽象方法")])]),s._v(" "),a("tr",[a("td",[s._v("非抽象方法")]),s._v(" "),a("td",[s._v("可以定义非抽象方法")]),s._v(" "),a("td",[s._v("可以定义default方法")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);