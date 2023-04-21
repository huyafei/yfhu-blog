(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{299:function(a,t,v){"use strict";v.r(t);var s=v(6),_=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("根据系统类型下载对应的 JDK")])]),a._v(" "),t("p",[a._v("Java 程序必须运行在 JVM 之上，所以要安装 JDK。"),t("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Oracle官网下载"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[a._v("#")]),a._v(" 开发环境")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("JDK：JDK（Java Development Kit，Java 开发工具包（SDK）），是 Java 软件开发必须安装的。JDK 安装后自带一个 JRE。")])]),a._v(" "),t("li",[t("p",[a._v("JRE：JRE（Java Runtime Environment，Java 运行环境），运行 Java 程序所必须的环境的集合，包含 JVM 标准实现及Java 核心类库。如果只运行 Java 程序，则不需要安装 JDK，只需安装 JRE 即可")])]),a._v(" "),t("li",[t("p",[a._v("JVM：JVM（Java Virtual Machine，Java 虚拟机），JVM 是一种用于计算设备的规范，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的。")])])]),a._v(" "),t("p",[a._v("JDK、JRE 和 DVM 关系："),t("br"),a._v("\nJDK 中包含 JRE，JRE 中包含 JVM，所以运行 Java 程序最小环境为 JRE。")]),a._v(" "),t("h2",{attrs:{id:"jdk-下载、安装和配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-下载、安装和配置"}},[a._v("#")]),a._v(" JDK 下载、安装和配置")]),a._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK下载"),t("OutboundLink")],1),a._v(" "),t("img",{attrs:{src:"/static/images/java/002/jdk_xz_lc_1.jpg",alt:"JDK下载流程1"}}),a._v("\n我安装的是 JDK 18, JDK 8(1.8) 版本需要注册账号，才能下载。\n"),t("img",{attrs:{src:"/static/images/java/002/jdk_xz_lc_2.jpg",alt:"JDK下载流程2"}}),a._v("\n注意：根据电脑系统下载对应的 JDK，以及根据自己的需求下载对应的 JDK 版本。")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("我使用的是 "),t("code",[a._v(".exe")]),a._v(" 安装的，双击安装即可。安装过程中如果使用默认路径可以一直下一步就行了，图中我安装在其它目录下了，且我还安装了 8（1.8版本）。\n"),t("img",{attrs:{src:"/static/images/java/002/jdk_az_lc_1.jpg",alt:"JDK安装流程1"}})]),a._v(" "),t("p",[a._v("安装成功后进入到安装目录的 "),t("code",[a._v("bin")]),a._v(" 文件夹下，"),t("code",[a._v("javac.exe")]),a._v(" 命令用来完成 Java 程序的编译，"),t("code",[a._v("java.exe")]),a._v(" 命令用来完成Java程序的运行。\n"),t("img",{attrs:{src:"/static/images/java/002/jdk_az_lc_2.jpg",alt:"JDK安装流程2"}})]),a._v(" "),t("h3",{attrs:{id:"配置-jdk-8-1-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-jdk-8-1-8"}},[a._v("#")]),a._v(" 配置 （JDK 8(1.8)）")]),a._v(" "),t("p",[a._v("配置环境变量，是为了在任何文件夹下都可以使用命令。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("JDK 8（1.8）配置，18 版忽略此步骤。")])]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("计算机")]),a._v(" -> "),t("code",[a._v("属性")]),a._v(" -> "),t("code",[a._v("高级系统设置")]),a._v(" -> "),t("code",[a._v("环境变量")])])]),a._v(" "),t("li",[t("p",[a._v("在 "),t("code",[a._v("系统变量")]),a._v(" 中新建变量 "),t("code",[a._v("JAVA_HOME")]),a._v("，值为 JDK 安装目录的绝对路径，例如：\n"),t("code",[a._v("D:\\software\\Java\\jdk1.8.0_271")]),a._v(" "),t("img",{attrs:{src:"/static/images/java/002/jdk_pz_lc_1.jpg",alt:"JDK配置流程1"}})])]),a._v(" "),t("li",[t("p",[a._v("在 "),t("code",[a._v("系统变量")]),a._v(" 中编辑变量名 "),t("code",[a._v("Path")]),a._v("，新建 "),t("code",[a._v("%JAVA_HOME%\\bin")]),a._v(" 和 "),t("code",[a._v("%JAVA_HOME%\\jre\\bin")]),a._v("。\n"),t("img",{attrs:{src:"/static/images/java/002/jdk_pz_lc_2.jpg",alt:"JDK配置流程2"}})])]),a._v(" "),t("li",[t("p",[a._v("在 "),t("code",[a._v("系统变量")]),a._v(" 中新建变量 "),t("code",[a._v("CLASSPATH")]),a._v("，值为 "),t("code",[a._v(".;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar")]),a._v("【路径中“.”表示当前目录】\n"),t("img",{attrs:{src:"/static/images/java/002/jdk_pz_lc_3.jpg",alt:"JDK配置流程3"}})])]),a._v(" "),t("li",[t("p",[a._v("测试命令")])])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出以下则成功")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# java version "1.8.0_291"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Java(TM) SE Runtime Environment (build 1.8.0_291-b10)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Java HotSpot(TM) 64-Bit Server VM (build 25.291-b10, mixed mode)")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"关于环境变量【扩展】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于环境变量【扩展】"}},[a._v("#")]),a._v(" 关于环境变量【扩展】")]),a._v(" "),t("p",[a._v("当我们输入 "),t("code",[a._v("ipconfig")]),a._v(" 命令时，而 "),t("code",[a._v("ipconfig.exe")]),a._v(" 文件实际上在 "),t("code",[a._v("C:\\Windows\\System32")]),a._v(" 目录下，那么系统为什么能运行？\n其实是 windows 系统中的环境变量 path 在起作用。系统首先会在当前目录下查找 "),t("code",[a._v("ipconfig.exe")]),a._v(" 文件，如果没有找到，则会在系统目录下查找。\n"),t("code",[a._v("path")]),a._v(" 的值是一个字符串，用来指定系统中执行命令的文件路径，每个路径用分号隔开。"),t("br"),a._v("\n以上个人理解为：\n系统变量 - 理解为全局变量，要想在任何位置使用命令就要配置，path - 就是对应的命令所在的路径，比如 "),t("code",[a._v("ipconfig.exe")]),a._v(" 在 "),t("code",[a._v("C:\\Windows\\System32")]),a._v("，\n脑补一下js中全局变量一样。")])])}),[],!1,null,null,null);t.default=_.exports}}]);