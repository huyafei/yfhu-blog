# idea 新建springBoot项目

## 步骤

### 新建项目

[步骤参考链接](https://blog.csdn.net/m0_52861000/article/details/129328147)

![](/static/images/java/springboot/1.jpg)

![](/static/images/java/springboot/2.jpg) 

SpringBoot 3.x	使用JDK17，SpringBoot2.x使用JDK8、11

###  配置项目 

#### Application 同级目录新建基础包 [参考1](https://www.cnblogs.com/phoenixy/p/16771332.html) [参考2](https://www.cnblogs.com/ShineLeBlog/p/16476702.html)

![](/static/images/java/springboot/3.jpg)

1. controller 控制层，定义前端请求与后端接口间的映射关系，这里只是映射，具体的业务逻辑方法在services包中说明

   工作原理：

   1. 前端向指定的URL发送请求；
   2. 后端接收到请求，根据URL的格式，查找controller层中的不同方法，将该请求传给符合条件的方法进行处理；
   3. 处理完毕后**返回response**（这个response可以是一个html页面，也可以是json对象和json字符串）

2. entity（model）数据库实体层，数据库表对应的Entity类，每个字段都是表中的一列，注意：属性名与数据库列名的对照

3. service 业务层，定义后端接口的具体业务逻辑方法的实现，services包的相关方法只是调用dao包的相关方法

   存放services接口与具体的实现类：

   1. 借助dao包（即mapper）中提供的数据库相关功能，完成前端要求功能所需的数据的查询与插入，并返回相关的entity类对象。

4. dao（mapper） 数据持久层，定义接口dao，声明了数据库操作的相关方法，业务逻辑层的各项功能通过dao方法实现与数据库的交互，具体的方法实现在mapper.xml中完善 *方法对应id*

Tips：

- mapper的namespace属性，必须是mapper名且名称从com开始：com.xxx.xxx.XxxMapper；
- 如果要返回多个查询项，就要**用resultMap，它对应一个entity类**，借助**类对象返回**；
- mapper 中方法传入的参数，通过#{参数名}传进xml文件。

#### 编写顺序

　　model　　-->　　mapper.xml　　-->　　mapper.java　　-->　　interfaceService　　-->　　Service　　-->　　Controller　　-->　　html、js 

#### 调用顺序

　　html、js　　-->　　Controller　　-->　　interfaceService　　-->　　Service　　-->　　mapper　　-->　　model

### mybatis配置 （2种**只能二选一**）

[参考：SpringBoot配置Mybatis的两种方式（通过XML配置和通过YML配置文件配置）](https://blog.csdn.net/weixin_43966635/article/details/112342116)

#### 第一种 application.yml 中配置 mybatis 的配置

```properties
# application.yml
server:
  # 端口
  port: 8885
  servlet:
    # 应用程序的上下文路径，接口统一前面部分
    context-path: "/api"
spring:
  datasource:
    url: "jdbc:mysql://localhost:3306/mother-helper?useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT%2B8&allowMultiQueries=true"
    username: "xxxxx"
    password: "xxxx"
    driver-class-name: com.mysql.cj.jdbc.Driver

# mybatis配置
mybatis:
  # Mapper XML文件的位置，这里假设在resources目录下的mapper文件夹中
  mapper-locations: classpath:mapper/*.xml
  # 类型别名包路径，指定实体类所在的包路径
  type-aliases-package: com.vensst.mother_helper
  configuration:
    map-underscore-to-camel-case: true # 将数据库下划线命名转换为驼峰命名
    lazy-loading-enabled: true
    aggressive-lazy-loading: false
```

* `mybatis.mapper-locations: classpath:mapper/*.xml ` 指定了Mapper XML文件的位置，这里使用了通配符`*`，表示在`resources/mapper`目录下的所有XML文件

* `mybatis.type-aliases-package` 指定了实体类的包路径，MyBatis会自动扫描该包下的类，并注册为别名，方便在Mapper XML文件中引用
* `mybatis.configuration` 部分配置了MyBatis的一些属性，例如`map-underscore-to-camel-case`用于将数据库字段的下划线命名转换为驼峰命名

#### 第二种 XML 中配置

```properties
# application.yml
server:
  # 端口
  port: 8885
  servlet:
    # 应用程序的上下文路径，接口统一前面部分
    context-path: "/api"
spring:
  datasource:
    url: "jdbc:mysql://localhost:3306/mother-helper?useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT%2B8&allowMultiQueries=true"
    username: "xxxxx"
    password: "xxxx"
    driver-class-name: com.mysql.cj.jdbc.Driver

# mybatis配置
mybatis:
 	# 标注mybatis配置文件的位置
  config-location: classpath:mybatis-config.xml
  # Mapper XML文件的位置，这里假设在resources目录下的mapper文件夹中
  mapper-locations: classpath:mapper/*.xml
  # 类型别名包路径，指定实体类所在的包路径
  type-aliases-package: com.vensst.mother_helper

```



以下配置mybatis-config.xml，是基于springboot框架配置的mybatis配置里的设置面没有 JDBC 配置，因为在  application.yml 中已经配置了

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!-- 文档定义类型约束（约束里面的标签不可随意写，本身xml标签可以随意），configuration 表示配置跟（根标签就是configuration -->
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
    	<!-- #开启mybatis驼峰式命名规则自动转换 -->
        <setting name="mapUnderscoreToCamelCase" value="true" />
    </settings>
    <typeAliases>
        <typeAlias alias="Integer" type="java.lang.Integer" />
        <typeAlias alias="Long" type="java.lang.Long" />
        <typeAlias alias="HashMap" type="java.util.HashMap" />
        <typeAlias alias="LinkedHashMap" type="java.util.LinkedHashMap" />
        <typeAlias alias="ArrayList" type="java.util.ArrayList" />
        <typeAlias alias="LinkedList" type="java.util.LinkedList" />
    </typeAliases>
</configuration>

```

如果不是基于springboot框架，可以像以下配置流程：

1. 引入 mybatis

   ```xml
   <dependency>
     <groupId>org.mybatis</groupId>
     <artifactId>mybatis</artifactId>
     <version>x.x.x</version>
   </dependency>
   ```

2. resources 包下新建配置文件 db.properties 和 mybatis-config.xml

   ```properties
   url=
   driver=
   username=
   password=
   ```

   

   ```xml-dtd
   <?xml version="1.0" encoding="UTF-8" ?>
   <!DOCTYPE configuration
     PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
     "http://mybatis.org/dtd/mybatis-3-config.dtd">
   <configuration>
   	<!-- 读取配置文件 -->
   	<properties resource="db.properties"></properties>	
     <environments default="development">
       <environment id="development">
         <transactionManager type="JDBC"/>
         <dataSource type="POOLED">
           <property name="driver" value="${driver}"/>
           <property name="url" value="${url}"/>
           <property name="username" value="${username}"/>
           <property name="password" value="${password}"/>
         </dataSource>
       </environment>
     </environments>
     <mappers>
   		<!-- 映射，映射文件地址，这里的配置就像 上面 mybatis配置 第一种配置的  mapper-locations: classpath:mapper/*.xml 一样-->
       <mapper resource="mapper/DicMapper.xml"/>
     </mappers>
   </configuration>
   ```

3. 创建实体类 ，例如：在com.vensst.mother_helper.entity 包下创建 Dic 实体类

4. resources 包创建 mapper 包里面存放映射文件 xml

   比如： DicMapper.xml

   ```xml-dtd
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE mapper
       PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
       "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <!-- namespace 的值是一个接口，每个Mapper 接口对应一个配置文件  -->
   <mapper namespace="com.vensst.mother_helper.mapper.DicMapper">
   		<!-- 
   				id：可以理解为给这个sql语句加一个标识符，与后面配置的 java下的mapper映射接口对应
   				parameterType：参数类型
   				resultType：返回结果类型
   			-->
       <select id="selectCostById" parameterType="java.lang.Integer" resultType="com.vensst.mother_helper.entity.Dic">
           SELECT *
           FROM dic
           WHERE id = #{id}
       </select>
   </mapper>
   ```

​	namespace 的值是一个接口,每个Mapper 接口对应一个配置文件

​	insert – 映射插入语句。
​        update – 映射更新语句。
​        delete – 映射删除语句。
​        select – 映射查询语句。
​        公有属性：
​             id - 在命名空间中唯一的标识符，可以被用来引用这条语句,与UserMapper void add(User user)对应
​             parameterType - 将会传入这条语句的参数的类 与UserMapper 定义的方法传的参数类型对应，void add(User user)对应
​        Select 属性：
​            resultType - 返回结果的类, 如果返回的是集合，那应该设置为集合包含的类型. resultType 和 resultMap 之间只能同时使用一个。
​            resultMap - 对外部 指定 resultMap 的命名引用

​	insert和 update 属性：
​        	useGeneratedKeys - （仅适用于 insert 和 update）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系型数据库管理系统的自动递增字段），默认值：false
​        	keyProperty -  (仅适用于 insert 和 update）指定能够唯一识别对象的属性，MyBatis 会使用 getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值，默认值：未设置（unset）。如果生成列不止一个，可以用逗号分隔多个属性名称。
​        	keyColumn	- （仅适用于 insert 和 update）设置生成键值在表中的列名，在某些数据库（像 PostgreSQL）中，当主键列不是表中的第一列的时候，是必须设置的。如果生成列不止一个，可以用逗号分隔多个属性名称

## MySql

![image-20240205143833572](/static/images/java/springboot/MySql/image-20240205143833572.png)

![image-20240205143904583](/static/images/java/springboot/MySql/image-20240205143904583.png)

### 主键、外键和索引

主键(primary key)：

 能够唯一标识表中某一行的属性或属性组。一个表只能有一个主键，但可以有多个候选索引。主键常常与外键构成参照完整性约束，防止出现数据不一致。主键可以保证记录的唯一和主键域非空,数据库管理系统对于主键自动生成唯一索引，所以主键也是一个特殊的索引。

外键（foreign key）：

 是用于建立和加强两个表数据之间的链接的一列或多列。外键约束主要用来维护两个表之间数据的一致性。简言之，表的外键就是另一表的主键，外键将两表联系起来。一般情况下，要删除一张表中的主键必须首先要确保其它表中的没有相同外键（即该表中的主键没有一个外键和它相关联）。

索引(index) ：

是用来快速地寻找那些具有特定值的记录。主要是为了检索的方便，是为了加快访问速度， 按一定的规则创建的，一般起到排序作用。所谓唯一性索引，这种索引和前面的“普通索引”基本相同，但有一个区别：索引列的所有值都只能出现一次，即必须唯一







## 开发过程中的问题

### id 字段自增问题

id自增的情况下，设置 useGeneratedKeys="true" keyProperty="id" 通过这样配置，在插入数据时会通过 getGeneratedKeys  获取数据库内部生成的主键

```xml
<insert id="insertDic" parameterType="dic" useGeneratedKeys="true" keyProperty="id">
    INSERT INTO dic (label, code, type, name, create_time)
    VALUES (#{label}, #{code}, #{type}, #{name}, #{createTime});
</insert>
```

![4](/static/images/java/springboot/4.jpg)

### 日期时间问题

[前后端时间格式统一_前端传日期一般传什么类型-CSDN博客](https://blog.csdn.net/l642148816/article/details/128389004)

```
   @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8") //指定格式
    private Date createTime;
```

### 日志功能 

* [SpringBoot 日志打印-CSDN博客](https://blog.csdn.net/weixin_70564024/article/details/135298742)
* [日志级别 - 核心特性 (springdoc.cn)](https://springdoc.cn/spring-boot/features.html#features.logging.log-levels)

springboot3 内置了两个日志框架：SLF4J + LogBack SLF4J ，参考如下配置：

```java
package com.vensst.mother_helper.controller;

import com.vensst.mother_helper.entity.Dic;
import com.vensst.mother_helper.entity.Result;
import com.vensst.mother_helper.service.DicService;
import com.vensst.mother_helper.utils.ResultUtil;
// 导包
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@RequestMapping("/dic")
public class DicController {
    @Autowired
    private DicService dicService;
  	// 1.得到日志对象，日志工厂需要将需要打印的类的类型传递进去,这样我们才知道日志的归属类,才能更方便的定位到文体类
    private static final Logger logger= LoggerFactory.getLogger(DicController.class);

    @GetMapping("/{id}")
    public Result selectDicById(@PathVariable("id") Integer id) {
        Dic dic = dicService.selectDicById(id);
      	// 2.使用日志对象打印日志
        logger.trace(dic.toString());
        logger.debug(dic.toString());
        logger.info(dic.toString());
       	logger.warn(dic.toString());
       	logger.error(dic.toString());
        return ResultUtil.success(dic);
    }
}

```

注意: Logger 对象是属于 **org.slf4j** 包下的,不要导错包

```yml
logging:
  level:
    # 整个项目的日志级别
    root: debug
    #给文件夹单独设置级别(level后跟对应的包名)
    com.vensst.mother_helper: debug

  # 设置日志文件的目录
  file:
    path: logs
    name: mother-helper.log
```

具体说明：

1. 得到日志对象

2. 使用日志对象打印日志

3. 在 application.properties`或`application.yml 中配置日志级别：

   trace -> debug -> info -> warn -> error -> fatal

   配置 warn 就打印  warn、error、 fatal

* trace：微量，少许的意思，级别最低；

* debug：需要调试的时候的关键信息打印；

* info：普通的打印信息（默认日志级别）；

* warn：警告，不影响使用，但需要注意的问题；

* error：错误信息，级别较高的错误日志信息；

* fatal：致命的，因为代码异常导致程序退出执行的时间(只有系统崩溃的时候才能输出的日志级别）
  

### 数据验证问题

* [SpringBoot Validation 表单验证 - 优质转载 - Spring Boot中文社区](https://springboot.io/t/topic/4743)
* [IO (springdoc.cn)](https://springdoc.cn/spring-boot/io.html#io.validation)
* [SpringBoot后端数据校验实战_后端怎么判断前端传递的参数数据类型是否正确-CSDN博客](https://blog.csdn.net/weixin_45070175/article/details/119079496) 备注：自定义校验注解部分

pom.xml 导入，springboot2.3.x以后要手动导入

```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
```

使用：

```java
public class Dic {
    @NotNull(message = "id不能为空")
    private Integer id;
    @NotNull(message = "label不能为空")
    private String label;
    @NotNull(message = "code不能为空")
    private String code;
    @NotNull(message = "type不能为空")
    private String type;
    @NotNull(message = "name不能为空")
    private String name;
}
```

当你在 Spring MVC 的控制器中使用 `@Valid` 注解时，Spring Boot 会自动验证请求体中的对象，并将任何验证错误绑定到 `BindingResult`

```java
    @PutMapping
    public Result updateDic(@Valid @RequestBody Dic dic, BindingResult result) {
				// 现在写法
        if (result.hasErrors()) {
            return ResultUtil.errorParam(result.getFieldError().getDefaultMessage());
        }
				// 以前写法
        // if (dic.getLabel() == null || dic.getLabel().isEmpty()) {
        //     return ResultUtil.errorParam("label不能为空");
        // }
        // if (dic.getCode() == null || dic.getCode().isEmpty()) {
        //     return ResultUtil.errorParam("code不能为空");
        // }
        // if (dic.getType() == null || dic.getType().isEmpty()) {
        //     return ResultUtil.errorParam("type不能为空");
        // }
        // if (dic.getName() == null || dic.getName().isEmpty()) {
        //     return ResultUtil.errorParam("name不能为空");
        // }
        dicService.updateDic(dic);
        return ResultUtil.success(dicService.selectDicById(dic.getId()));
    }
		// 也可以这么写
  	public String test(@NotBlank(message = "名称不能为空") String name) {
        return "success";
    }
```

默认验证注解功能不满足，可以自定义验证注解，暂时不会，待学





## 说明

### @Mapper 和 @MapperScan()

* 都是将普通接口转为 mapper 接口

* @Mapper  标注在 接口 上，表示这是一个 Mapper 接口

* @MapperScan("Mapper接口层路径") 标注在 启动类（springboot项目标有@SpringBootApplication注解的地方） 上，是对整个包下的所有的接口类的注解。是批量的操作。使用 @MapperScan 后，接口类 就不需要使用 @Mapper 注解

### @Resource 和 @Autowired 

* 都是用于依赖注入的注解，它们的作用类似

* @Resource 是Java标准的注解，它在Java EE中定义，默认按照名称进行自动装配，它先通过名称进行匹配，如果找到了与属性名称相同的Bean，则进行注入。如果没有找到与属性名称相同的Bean，则它会尝试使用属性的类型进行匹配

* @Autowired 是Spring提供的注解，在使用Spring框架时使用，按照类型匹配 Bean 进行自动装配，找不到抛出异常

  







### 问题

1. 如果选择依赖项有数据库，要先在application.properties 或 application.yml中配置，不然会报错

2. SpringBoot中为什么要把application.properties 改成 application.yml？

   配置springboot有两种application.properties 和 application.yml，官方推荐使用application.yml配置文件，树状结构，一目了然

   application.properties 结构： 

   ```properties
   server.port=8080
   server.session-timeout=30
   server.context-path=
   server.tomcat.max-threads=0
   server.tomcat.uri-encoding=UTF-8
    
   spring.datasource.url = jdbc:mysql://localhost:3306/spring
   spring.datasource.username = root
   spring.datasource.password = root
   spring.datasource.driverClassName = com.mysql.jdbc.Driver
   # Specify the DBMS
   spring.jpa.database = MYSQL
   # Show or not log for each sql query
   spring.jpa.show-sql = true
   # Hibernate ddl auto (create, create-drop, update)
   spring.jpa.hibernate.ddl-auto = update
   # Naming strategy
   spring.jpa.hibernate.naming-strategy = org.hibernate.cfg.ImprovedNamingStrategy
    
   # stripped before adding them to the entity manager)
   spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect
   ```

   application.yml 结构：

   ```yml
   server:
     port: 8080
     session-timeout: 30
     tomcat.max-threads: 0
     tomcat.uri-encoding: UTF-8
    
   spring:
     datasource:
       url : jdbc:mysql://localhost:3306/springboot
       username : root
       password : root
       driverClassName : com.mysql.jdbc.Driver
     jpa:
       database : MYSQL
       show-sql : true
       hibernate:
         ddl-auto : update
         naming-strategy : org.hibernate.cfg.ImprovedNamingStrategy
       properties:
         hibernate:
           dialect : org.hibernate.dialect.MySQL5Dialect
   ```

   注意：冒号后面要加一个空格，例如：`port: 8080`

3.  JDBC? Java DataBase Connectivity 数据库链接

4. com.mysql.jdbc.Driver 和 com.mysql.cj.jdbc.Driver的区别

   com.mysql.jdbc.Driver`对应低版本msyql、也就是`mysql-connector-java 5 中的。

   com.mysql.cj.jdbc.Driver 对应高版本mysql、也就是 `mysql-connector-java 6`及以上。

5. spring.datasource.url 连接参数，[参考](https://blog.csdn.net/weixin_43296313/article/details/122998245)
   1. 字符集，characterEncoding设置为UTF-8或gbk，必须添加 useUnicode 是否使用Unicode字符集，参数为 true 
   2. 时区，serverTimezone=UTC，UTC为世界标准时间，比北京时间早8个小时，也可以设置`serverTimezone=CST`或`serverTimezone=Asia/Shanghai`，`CST`表示上海
   3. 允许批量操作，allowMultiQueries=true，mybatis是默认不允许批量操作的，这里在URL后面拼接之后，就允许批量操作了
   4. 是否重新连接，autoReconnect=true&failOverReadOnly=false，`failOverReadOnly` 自动重连成功后，连接是否设置为只读
   5. 兼容更高版本的数据库，useSSL=false，默认false

6. idea 开发springboot项目热加载

   * 在 pom.xml添加

   ```xml
   <!--热加载-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-devtools</artifactId>
       <optional>true</optional>
   </dependency>
   ```

   * File -> settings -> Build,Execution,Deployment -> Compiler 勾选 Build project automatically

7. Springboot3 启用log4j2 （未完）

   1. pom.xml 修改

      ```xml
      <dependencies>
        <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
          <!--  springboot使用log4j2 排除原依赖中的日志相关包，单独引入Log4J2依赖  -->
          <exclusions>
            <exclusion>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-logging</artifactId>
            </exclusion>
          </exclusions>
        </dependency>
        <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>
      </dependencies>
      ```

      

