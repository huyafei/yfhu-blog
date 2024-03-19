# JAVA 知识点

## JAVA 分层

1. 业务分层
   1. 表现层（UI）： UI（User Interface）层 或者 web 层
   2. 业务逻辑层（BLL）：Business Logic Layer 或者 Service 层
   3. 数据访问层（DAL）：Data Access Layer 或者 DAO（Data Access Object）层
2. 代码的包分层
   1. controller：控制层，输出数据到表示层
   2. dao：数据库访问层，对数据库访问的操作
   3. entity：model 实体层，把数据库表字段的映射到 java 代码
   4. service：业务逻辑层business/服务层service，业务逻辑层上面可能还有一个服务层

## 什么是PO、DO、DTO、VO 

[一文理解什么是DTO、VO、BO、PO、DO，并推荐一款IDEA转换插件_dto vo po bo-CSDN博客](https://blog.csdn.net/MacWx/article/details/122618986)

![01](/static/images/java/springboot/01.png)

接收前端参数使用dto 可以添加一些验证，传给前端使用vo

一般建包层级：

- config 配置包，存放全局配置文件、启动参数配置、数据库连接配置等
- controller 控制器包，在Web应用中，存放处理HTTP请求的控制器类，如Spring MVC中的Controller
- dto 数据传输对象包，用于网络传输或者不同层次间数据交换的对象
- entity/model 用于存放数据模型类，通常是与数据库表对应的实体类
  - po
  - do
- mapper 持久层映射包，在使用MyBatis等ORM框架时，存放Mapper接口和XML映射文件
- service 用于存放服务层代码，处理业务逻辑
- utils 工具类包，提供一些通用方法和工具类，比如日期处理、字符串操作等辅助工具
- vo
- core 核心业务逻辑包，包含项目的核心业务逻辑类，例如服务接口（Service Interface）、服务实现类（Service Implementation）。
- constant 常量包。存放项目全局使用的常量
- exception 异常处理包，用于存放自定义异常类
- enums 枚举包，用于存放枚举类
- ...



## mybatis 按时间范围查询

1. 方式一

```xml
 <if test="startTime != null and startTime != '' and endTime != null and endTime != ''">
      and p.create_time &gt;=#{startTime} AND  p.create_time &lt;=#{endTime}
 </if>
```

2. 方式二

   ```xml
   <if test="startTime != null and startTime != '' and endTime != null and endTime != ''">
        and p.create_time between #{startTime} and #{endTime}
   </if>
   ```

3. 方式三

   ```xml
   <if test="startTime != null and startTime != '' and endTime != null and endTime != ''">
    
                   <![CDATA[  and DATE_FORMAT(p.create_time, '%Y-%m-%d %H:%T:%s') >
                           DATE_FORMAT(#{startTime} , '%Y-%m-%d %H:%T:%s')    ]]>
    
                   <![CDATA[  and DATE_FORMAT(p.create_time, '%Y-%m-%d %H:%T:%s') <=
                           DATE_FORMAT(#{endTime} , '%Y-%m-%d %H:%T:%s')    ]]>
   </if>
   ```

   如果有包类型相关问题排查看看是否要去掉 **and startTime != ''**

## @DateTimeFormat和@JsonFormat区别

1. @DateTimeFormat：
   来源于Spring框架，**主要用于处理HTTP请求和响应中的日期字段格式化**。
   当我们在处理表单提交或者RESTful API的HTTP请求时，可以通过@DateTimeFormat注解来指定日期字段的接收格式和展示格式。
   例如，在一个控制器方法参数中使用此注解，可以确保从HTTP请求中获取到的日期字符串能够正确地转换为java.util.Date或java.time.LocalDate等类型。

   ```java
   @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
   private Date startTime;
   ```

2. @JsonFormat：
   来源于Jackson库，它是一个流行的JSON处理库，**广泛应用于Java对象与JSON之间的序列化和反序列化过程**。
   在进行后端数据模型（如实体类）与JSON交互时，通过@JsonFormat注解可以定制日期属性在序列化（Java对象转JSON字符串）和反序列化（JSON字符串转Java对象）时的日期时间格式。
   当我们返回一个包含日期字段的对象给前端时，或者前端传回一个JSON对象包含日期字段给后端时，@JsonFormat会按照指定的格式解析或生成日期字符串。

```java
 @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8") // 指定格式
 private Date createTime;
```

​	总结来说，两者的主要区别在于处理上下文的不同：

- @DateTimeFormat主要应用于HTTP层面的数据交换。

- @JsonFormat主要应用于JSON序列化和反序列化的场景

## 分页查询

1. MyBatis分页

   - [Java项目开发中实现分页的三种方式一篇包会_java分页-CSDN博客](https://blog.csdn.net/xiangyangsanren/article/details/122790338)
   - [Spring Boot：实现MyBatis分页 - 朝雨忆轻尘 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xifengxiaoma/p/11027551.html)

   1. pom.xml 引入插件

      ```xml
         <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
            <version>1.4.6</version>
          </dependency>
      ```

   	2.  统一返回格式

        ```java
        package com.vensst.mother_helper.utils;
        
        import java.util.List;
        
        public class PageResult {
            /**
             * 当前页码
             */
            private int pageNum;
            /**
             * 每页数量
             */
            private int pageSize;
            /**
             * 记录总数
             */
            private long total;
            /**
             * 页码总数
             */
            private int pages;
            /**
             * 数据模型
             */
            private List<?> list;
        
            public PageResult() {
            }
        
            public PageResult(int pageNum, int pageSize, long total, int pages, List<?> list) {
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.total = total;
                this.pages = pages;
                this.list = list;
            }
        
            public int getPageNum() {
                return pageNum;
            }
        ```

        ```java
        package com.vensst.mother_helper.utils;
        import com.github.pagehelper.PageInfo;
        
        /**
         * @author huyafei
         */
        public class PageUtil {
            /**
             * 将分页信息封装到统一的接口
             */
            public static PageResult getPageResult(PageInfo<?> pageInfo) {
                PageResult pageResult = new PageResult();
                pageResult.setPageNum(pageInfo.getPageNum());
                pageResult.setPageSize(pageInfo.getPageSize());
                pageResult.setTotal(pageInfo.getTotal());
                pageResult.setPages(pageInfo.getPages());
                pageResult.setList(pageInfo.getList());
                return pageResult;
            }
        }
        
        ```

   	3.  使用

        ```java
        @Override
        public List<Dic> findDicAll(DicQueryDTO dicQueryDTO) {
            return dicMapper.findDicAll(dicQueryDTO);
        }
        
        @Override
        public PageResult findDicListPage(DicQueryDTO dicQueryDTO) {
            String[] sortArr = dicQueryDTO.getSort().split(" ");
            // 驼峰转下划线
            String fieldName = StringUtil.camel2Underline(sortArr[0], true);
            String sort = fieldName + " " + sortArr[1];
        
            int pageNum = dicQueryDTO.getPageNum();
            int pageSize = dicQueryDTO.getPageSize();
            // 
            PageHelper.startPage(pageNum, pageSize, sort);
        
            List<Dic> dicList = dicMapper.findDicAll(dicQueryDTO);
        
            PageInfo<Dic> pageInfo = new PageInfo<>(dicList);
            return PageUtil.getPageResult(pageInfo);
        }
        ```

## mybatis嵌套查询

- [MyBatis（三） MyBatis复杂嵌套查询_mybatis嵌套查询-CSDN博客](https://blog.csdn.net/qq_40772692/article/details/124524560)

  

## token验证

- [jjwt实现token验证（指定api拦截）_j-jwt-CSDN博客](https://blog.csdn.net/pengxiaozhong/article/details/122340666)
- [Java实现JWT的Token认证机制[通俗易懂\]-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2066473)
- [JSON Web Token Libraries - jwt.io](https://jwt.io/libraries?language=Java)

1. pom.xml 添加依赖

   ```xml
   <dependency>
     <groupId>io.jsonwebtoken</groupId>
     <artifactId>jjwt</artifactId>
     <version>0.9.1</version> <!-- 使用最新的版本 -->
   </dependency>   
   ```

2. 新建 JwtUtil.java 工具类 ，用于生成、解析token以及对token判断等

   ```java
   package com.vensst.mother_helper.utils;
   
   import io.jsonwebtoken.Claims;
   import io.jsonwebtoken.Jwts;
   import io.jsonwebtoken.SignatureAlgorithm;
   
   import java.util.Date;
   
   public class JwtUtil {
   
       // token过期时间 30 天
       private static final long TOKEN_TIME_OUT = 30L * 24 * 60 * 60 * 1000;
       // 密钥（用于签名）
       private static final String SECRET = "MotherHelper";
   
       /**
        * 生成token
        *
        * @param {string} userId
        * @return
        */
       public static String generateToken(String userId) {
           Date expirationDate = new Date(System.currentTimeMillis() + TOKEN_TIME_OUT);
           System.out.println(expirationDate);
           return Jwts.builder()
                   .setId(userId) // 或者使用 UUID.randomUUID().toString()
                   .setSubject("app") // 说明
                   .setIssuedAt(new Date()) // 设置签发时间
                   .setExpiration(expirationDate) // 设置过期时间
                   .signWith(SignatureAlgorithm.HS512, SECRET) // 使用密钥进行签名
                   .compact(); // 生成Token字符串
       }
   
       /**
        * 解析 token
        *
        * @param token
        * @return
        */
       public static Claims getClaimsByToken(String token) {
           try {
               return Jwts.parser()
                       .setSigningKey(SECRET)
                       .parseClaimsJws(token)
                       .getBody();
           } catch (Exception e) {
               return null;
           }
   
       }
       /**
        * 判断token是否过期
        */
       public static boolean isTokenExpired(Date expiration) {
           return expiration.before(new Date());
       }
   }
   
   ```

3. 新建 JwtInterceptor.java 拦截器实现 HandlerInterceptor 接口

   ```java
   package com.vensst.mother_helper.config;
   
   import com.fasterxml.jackson.core.JsonProcessingException;
   import com.fasterxml.jackson.databind.ObjectMapper;
   import com.vensst.mother_helper.utils.JwtUtil;
   import com.vensst.mother_helper.utils.ResultUtil;
   import io.jsonwebtoken.Claims;
   import jakarta.servlet.http.HttpServletRequest;
   import jakarta.servlet.http.HttpServletResponse;
   import org.springframework.http.HttpStatus;
   import org.springframework.stereotype.Component;
   import org.springframework.web.servlet.HandlerInterceptor;
   import org.springframework.web.servlet.ModelAndView;
   
   import java.io.IOException;
   import java.io.PrintWriter;
   import java.util.Date;
   
   /**
    * @description: jwt拦截器
    */
   @Component
   public class JwtInterceptor implements HandlerInterceptor {
     /**
        * 设置响应信息，主要是自定返回给前端的错误信息
        * @param {HttpServletResponse} response 
        * @param {int} code
        * @param {String} msg
        */
       public void setResponseInfo(HttpServletResponse response,int code,String msg)  {
           try {
               // 返回JSON格式的错误信息
               ObjectMapper objectMapper = new ObjectMapper(); // ObjectMapper 其它各个类型和Json类型的相互转换
               String jsonResponse = objectMapper.writeValueAsString(ResultUtil.error(code, msg));
   
               response.setStatus(code);
               response.setContentType("application/json;charset=utf-8");
               PrintWriter out = response.getWriter();
               out.print(jsonResponse);
               out.flush();
           }catch (IOException e){
               System.out.println(e.getMessage());
           }
   
       }
       /**
        * 预处理回调方法，实现处理器的预处理（如检查登陆），第三个参数为响应的处理器，自定义Controller
        * 返回值：true表示继续流程（如调用下一个拦截器或处理器）；false表示流程中断
        * （如登录检查失败），不会继续调用其他的拦截器或处理器，此时我们需要通过response来产生响应；
        * request : 是指经过spring封装的请求对象, 包含请求地址, 头, 参数, body(流)等信息.
        * response:是指经过spring封装的响应对象, 包含输入流, 响应body类型等信息.
        * handler,是指controller的@Controller注解下的"完整"方法名, 是包含exception等字段信息的.
        */
       @Override
       public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
   
           // 1. 从请求头 获取token
           String authorizationValue = request.getHeader("Authorization");
   
           // 2. 判断token是否为空
           if (authorizationValue == null || !authorizationValue.startsWith("Bearer ")) {
               setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "无效token");
               return false;
           }
           String token = authorizationValue.substring(7); // 去掉"Bearer "前缀
           // 3. 解析token
           Claims claims = JwtUtil.getClaimsByToken(token);
           System.out.println(claims);
           if (claims == null) {
               setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "无效token，null");
               return false;
           }
           // 4. 验证token是否过期
           Date expiration = claims.getExpiration();
           boolean isTokenExpired = JwtUtil.isTokenExpired(expiration);
           if (isTokenExpired) {
               setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "token过期");
               return false;
           }
           // 5. 获取信息，自定义业务逻辑
           String userId = claims.getId();
           if (userId == null) {
               setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "token错误");
               return false;
           }
           return true;
       }
   
       // 处理执行后、视图处理前调用。此时可以通过 ModelAndView 对象模型数据处理或对视图进行处理
       @Override
       public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
           System.out.println("postHandle()");
       }
   
       // 整个请求处理完毕后调用，在此可以计算性能监控的结束时间并输出消耗时间，可以进行一些资源清理，只有 preHandle 为 true，才会执行 afterCompletion
       @Override
       public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
           System.out.println("afterCompletion()");
       }
   
   }
   
   ```

   HandlerInterceptor 和 HandlerInterceptorAdapter 区别，HandlerInterceptor是接口使用时必须重写所有方法，HandlerInterceptorAdapter是抽象类实现了HandlerInterceptor接口使用时只需重写需要用到的方法。

4. 在配置类中（WebMvcConfig.java 没有就新建） 添加拦截器（JwtInterceptor），如下：

   ```java
   package com.vensst.mother_helper.config;
   
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.web.servlet.config.annotation.CorsRegistry;
   import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
   import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
   
   import java.util.ArrayList;
   import java.util.List;
   
   @Configuration
   public class WebMvcConfig implements WebMvcConfigurer {
       @Autowired
       private JwtInterceptor jwtInterceptor;
   
       @Override
       public void addInterceptors(InterceptorRegistry registry) {
           // 排除登录和注册请求
           // List<String> patterns = new ArrayList<>();
           // patterns.add("/user/login");
           // patterns.add("/user/register");
           registry.addInterceptor(jwtInterceptor)
                   .addPathPatterns("/**") // 拦截所有请求
                   .excludePathPatterns(
                           "/user/login",
                           "/user/register",
                           "/**/*.html",
                           "/**/*.js",
                           "/**/*.css"
                     ); // 不拦截登录和注册请求
                   // .excludePathPatterns(patterns); // 不拦截登录和注册请求
       }
   
       /**
        * 跨域配置
        * https://springdoc.cn/spring/web.html#mvc-cors-global-java
        * @param registry
        */
       // @Override
       // public void addCorsMappings(CorsRegistry registry) {
       //     registry.addMapping("/**")
       //             .allowedOrigins("*")
       //             .allowCredentials(true)
       //             .allowedMethods("GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS", "HEAD")
       //             .maxAge(3600 * 24);
       // }
   }
   
   ```

5. 使用

   ```java
   @PostMapping("/login")
       public Result login(@Validated @RequestBody UserLoginDTO userLoginDTO, BindingResult result) {
           if (result.hasErrors()) {
               return ResultUtil.errorParam(result.getFieldError().getDefaultMessage());
           }
           User user = userService.findUserByAccount(userLoginDTO.getAccount());
           if (user == null) {
               return ResultUtil.errorParam("账号错误");
           }
           if(!Objects.equals(user.getPassword(), userLoginDTO.getPassword())){
               return ResultUtil.errorParam("密码错误");
           }
           Map<String, Object> u = new HashMap<>();
           u.put("id", user.getId());
           u.put("nickname", user.getNickname());
           u.put("account", user.getAccount());
           u.put("token", JwtUtil.generateToken(user.getId().toString()));
   
           return ResultUtil.success(u);
       }
   ```

6. 通过注解形式 指定请求 忽略token 验证配置

   1. 新建 AuthTokenIgnore,java 配置注解

   ```java
   package com.vensst.mother_helper.annotation;
   
   import java.lang.annotation.ElementType;
   import java.lang.annotation.Retention;
   import java.lang.annotation.RetentionPolicy;
   import java.lang.annotation.Target;
   
   /**
    * 忽略token验证注解
    *
    * @author yf.hu
    * @version 1.0
    * @date 2020/10/29 14:57
    */
   @Target({ElementType.METHOD, ElementType.TYPE})
   @Retention(RetentionPolicy.RUNTIME)
   public @interface AuthTokenIgnore {
       boolean required() default true;
   }
   
   ```

   	2. 拦截器添加判断（在 JwtInterceptor.java 中）

       ```java
       package com.vensst.mother_helper.config;
       
       import com.fasterxml.jackson.core.JsonProcessingException;
       import com.fasterxml.jackson.databind.ObjectMapper;
       import com.vensst.mother_helper.annotation.AuthTokenIgnore;
       import com.vensst.mother_helper.utils.JwtUtil;
       import com.vensst.mother_helper.utils.ResultUtil;
       import io.jsonwebtoken.Claims;
       import jakarta.servlet.http.HttpServletRequest;
       import jakarta.servlet.http.HttpServletResponse;
       import org.springframework.http.HttpStatus;
       import org.springframework.stereotype.Component;
       import org.springframework.web.method.HandlerMethod;
       import org.springframework.web.servlet.HandlerInterceptor;
       import org.springframework.web.servlet.ModelAndView;
       
       import java.io.IOException;
       import java.io.PrintWriter;
       import java.lang.reflect.Method;
       import java.util.Date;
       
       /**
        * @description: jwt拦截器
        */
       @Component
       public class JwtInterceptor implements HandlerInterceptor {
           /**
            * 设置响应信息，主要是自定返回给前端的错误信息
            * @param {HttpServletResponse} response
            * @param {int} code
            * @param {String} msg
            */
           public void setResponseInfo(HttpServletResponse response,int code,String msg)  {
               try {
                   // 返回JSON格式的错误信息
                   ObjectMapper objectMapper = new ObjectMapper(); // ObjectMapper 其它各个类型和Json类型的相互转换
                   String jsonResponse = objectMapper.writeValueAsString(ResultUtil.error(code, msg));
       
                   response.setStatus(code);
                   response.setContentType("application/json;charset=utf-8");
                   PrintWriter out = response.getWriter();
                   out.print(jsonResponse);
                   out.flush();
               }catch (IOException e){
                   System.out.println(e.getMessage());
               }
       
           }
           /**
            * 预处理回调方法，实现处理器的预处理（如检查登陆），第三个参数为响应的处理器，自定义Controller
            * 返回值：true表示继续流程（如调用下一个拦截器或处理器）；false表示流程中断
            * （如登录检查失败），不会继续调用其他的拦截器或处理器，此时我们需要通过response来产生响应；
            * request : 是指经过spring封装的请求对象, 包含请求地址, 头, 参数, body(流)等信息.
            * response:是指经过spring封装的响应对象, 包含输入流, 响应body类型等信息.
            * handler,是指controller的@Controller注解下的"完整"方法名, 是包含exception等字段信息的.
            */
           @Override
           public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
               // start 判断是否有 忽略token验证的注解
               // 如果不是映射到方法直接通过 instanceof 左边是否是右边的实例
               if (!(handler instanceof HandlerMethod)) {
                   return true;
               }
               HandlerMethod handlerMethod = (HandlerMethod) handler;
               Method method = handlerMethod.getMethod();
               if (method.isAnnotationPresent(AuthTokenIgnore.class)) {
                   AuthTokenIgnore authTokenIgnore = method.getAnnotation(AuthTokenIgnore.class);
                   if (authTokenIgnore.required()) {
                       return true;
                   }
               }
               // end
       
               // 1. 从请求头 获取token
               String authorizationValue = request.getHeader("Authorization");
       
               // 2. 判断token是否为空
               if (authorizationValue == null || !authorizationValue.startsWith("Bearer ")) {
                   setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "无效token");
                   return false;
               }
               String token = authorizationValue.substring(7); // 去掉"Bearer "前缀
               // 3. 解析token
               Claims claims = JwtUtil.getClaimsByToken(token);
               System.out.println(claims);
               if (claims == null) {
                   setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "无效token，null");
                   return false;
               }
               // 4. 验证token是否过期
               Date expiration = claims.getExpiration();
               boolean isTokenExpired = JwtUtil.isTokenExpired(expiration);
               if (isTokenExpired) {
                   setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "token过期");
                   return false;
               }
               // 5. 获取信息，自定义业务逻辑
               String userId = claims.getId();
               if (userId == null) {
                   setResponseInfo(response,  HttpStatus.UNAUTHORIZED.value(), "token错误");
                   return false;
               }
               return true;
           }
       
           // 处理执行后、视图处理前调用。此时可以通过 ModelAndView 对象模型数据处理或对视图进行处理
           @Override
           public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
               System.out.println("postHandle()");
           }
       
           // 整个请求处理完毕后调用，在此可以计算性能监控的结束时间并输出消耗时间，可以进行一些资源清理，只有 preHandle 为 true，才会执行 afterCompletion
           @Override
           public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
               System.out.println("afterCompletion()");
           }
       
       }
       
       ```

       

   	3. 使用

       ```java
         @AuthTokenIgnore
         @GetMapping("/{id}")
         public Result findUserById(@PathVariable("id") Integer id) {
             UserDetailFilterPwdVO u = userService.findUserById(id);
             return ResultUtil.success(u);
         }
       ```

       

问题：

1.  javax/xml/bind/DatatypeConverter] with root cause 报错

   原因：

   ​	JAXB API 是 java EE 的API，因此在java SE 9.0 中不再包含这个 Jar 包。
   java 9 中引入了模块的概念，默认情况下，Java SE中将不再包含java EE 的Jar包
   而在 java 6/7 / 8 时关于这个API 都是捆绑在一起的

   

   解决方案：

   	1.  降低JDK 版本到 JDK 8
   	1.  将 jaxb-api 添加为 Maven 依赖项，如下：

   - [NoClassDefFoundError: javax/xml/bind/DatatypeConverter\] with root cause-CSDN博客](https://blog.csdn.net/qq_59312178/article/details/126537853)

```xml
    <dependency>
      <groupId>javax.xml.bind</groupId>
      <artifactId>jaxb-api</artifactId>
      <version>2.3.0</version>
    </dependency>
```

