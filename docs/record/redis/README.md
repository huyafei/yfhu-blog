#  Redis

- SQL 关系型数据库，结构化，存储结构化数据，例如：mysql
- NoSQL 非关系型数据库，非结构化，类似键值对，例如：redis
-

mysql：基于磁盘存储，读写性能低，适合存储结构化数据，例如：用户信息，订单信息，商品信息，日志信息，配置信息等
redis：基于内存存储，读写性能高，适合存储非结构化数据，例如：缓存，session，计数器，热点数据（热点商品、资讯、新闻）等
一般项目中都有mysql + redis 组合

## redis 安装

### windows 安装使用

1. [下载](https://redis.net.cn/download/)
2. 进入redis解压后目录下，使用 cmd 启动 redis 命令 `redis-server.exe redis.windows.conf`

  - redis.windows.conf 配置文件
  - 默认端口 6379
  - 退出 `ctrl + c`

3. 新开cmd窗口使用 `redis-cli.exe` 命令来连接redis服务

  - 连接其它服务的redis(默认无密码) `redis-cli.exe -h 127.0.0.1 -p 6379 -a 123456`
    - -h ip地址， -p 端口， -a 密码
  - 退出 `exit`

4. 增加密码（默认无密码）

  - 修改配置文件 `redis.windows.conf`
  - 找到 `# requirepass foobared` 处替换为 `requirepass 123456`
  - 重启 redis 服务 `redis-server.exe redis.windows.conf`

5. idea 连接 redis 问题处理

  - redis.windows.conf 配置文件 将 `bind 127.0.0.1` 改为 `# bind 127.0.0.1`
  - 防火墙 --> 高级设置 --> 入站规则 --> 放行端口 6379 （redis 默认端口 6379）
  - 重启 redis 服务 `redis-server.exe redis.windows.conf`

### redis 数据类型

- 字符串（string）
- 哈希（hash）
- 列表（list）按照插入顺序排序，可以有重复
- 集合（set）无序集合，没有重复
- 有序集合（sorted set）/ zset 没有重复，并且可以按照分数排序

### redis 命令

- 字符串 string
  - set key value 存储字符串
  - get key 获取字符串
  - del key 删除字符串
  - setex key seconds value 设置过期时间
  - setnx key value 如果key不存在才设置
  - keys * 获取所有key
- 哈希 hash
  - hset key field value 设置哈希值
  - hget key field 获取哈希值
  - hdel key field 删除哈希值
  - hgetall key 获取所有哈希值
  - hkeys key 获取所有哈希key
  - hvals key 获取所有哈希value
- 列表 list 可以有重复
  - lpush key value1 [value2] 向列表头部插入一个或多个元素
  - lrange key start stop 获取列表指定区间的元素
  - rpop key 从列表尾部删除元素并返回删除的元素
  - llen key 获取列表长度
- 无序集合 set 不重复
  - sadd key member1 [member2] 向集合中添加一个或多个成员
  - smembers key 获取集合中所有成员
  - scard key 获取集合中成员的数量
  - sinter key1 key2 ... 求交集
  - sunion key1 key2 ... 求并集
  - srem key member1 [member2] 从集合中删除一个或多个成员返回删除的个数
- 有序集合 sorted set / zset 不重复，每个成员都会关联一个double类型的分数
  - zadd key score1 member1 [score2 member2] 向有序集合中添加一个或多个成员
  - zrange key start stop [withscores] 获取有序集合指定区间内的成员 加 withscores 返回成员和分数
  - zincrby key increment member 为有序集合中成员分数加上增量 increment， increment加的分数，返回加分后的分数 ，例如：
    zincrby key 1 member1
  - zrem key member1 [member2] 从有序集合中删除一个或多个成员并返回删除的个数
- 通用命令
  - keys pattern 获取所有匹配给定模式的键 例如：keys * - *表示匹配所有，keys s* - 表示匹配以s开头的键
  - exists key 判断键是否存在
  - type key 获取键的类型
  - del key 删除键，del key1 key2 key3 ...

## java 配置 redis

- 导入依赖 spring data redis
  ```shell
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>
  ```
- 配置 redis 数据源，在 application.yml 配置文件 spring 中配置 redis 数据源
  ```yaml
  spring:
      redis:
        host: localhost
        port: 6379
        password: 123456
        # 默认数据库 0 
        database: 0
  ```
- 编写配置类，创建 RedisTemplate 对象（ 在 config 包下新建 RedisTemplate 配置类）
  ```java
        @Slf4j
        @Configuration
        public class RedisConfiguration {
            /*
            * 创建 RedisTemplate 对象，用于操作Redis数据库
            * RedisConnectionFactory
            *
            * */
            @Bean
            public RedisTemplate redisTemplate(RedisConnectionFactory redisConnectionFactory){
                log.info("创建 RedisTemplate 对象");
                RedisTemplate redisTemplate = new RedisTemplate();
                // 设置 redis 连接工厂对象（RedisConnectionFactory）
                redisTemplate.setConnectionFactory(redisConnectionFactory);
                // 设置 redis key 的序列化器为 String
                redisTemplate.setKeySerializer(new StringRedisSerializer());
                return redisTemplate;
            }
          }
    ```
- 通过 RedisTemplate 对象操作 redis
  ```java
      // 操作不同数据类型的操作类
      // String类型操作类
      ValueOperations valueOperations = redisTemplate.opsForValue();
      // Hash类型操作类
      HashOperations hashOperations = redisTemplate.opsForHash();
      // List类型操作类
      ListOperations listOperations = redisTemplate.opsForList();
      // Set类型操作类
      SetOperations setOperations = redisTemplate.opsForSet();
      // ZSet类型操作类
      ZSetOperations zSetOperations = redisTemplate.opsForZSet();
  
  ```
- 测试类示例

  ```java
    @SpringBootTest
    public class SpringDataRedisTest {
        @Autowired
        private RedisTemplate redisTemplate;
    
        @Test
        public void testRedisTemplate() {
            System.out.println(redisTemplate);
            // 操作不同数据类型的操作类
            // String类型操作类
            ValueOperations valueOperations = redisTemplate.opsForValue();
            // Hash类型操作类
            HashOperations hashOperations = redisTemplate.opsForHash();
            // List类型操作类
            ListOperations listOperations = redisTemplate.opsForList();
            // Set类型操作类
            SetOperations setOperations = redisTemplate.opsForSet();
            // ZSet类型操作类
            ZSetOperations zSetOperations = redisTemplate.opsForZSet();
    
        }
    
        @Test
        public void testString() {
            // 删除key
            redisTemplate.delete("age");
    
            ValueOperations opsForValue = redisTemplate.opsForValue();
    
            opsForValue.set("name", "张三");
            // get
            String name = (String) opsForValue.get("name");
            // setex
            opsForValue.set("code", "3322", 30, TimeUnit.SECONDS);
            // setnx
            opsForValue.setIfAbsent("age", "28");
            opsForValue.setIfAbsent("age", "30");
    
        }
    
        @Test
        public void testHash() {
            HashOperations hashOperations = redisTemplate.opsForHash();
            // hset
            hashOperations.put("user", "name", "张三");
            hashOperations.put("user", "age", "28");
            hashOperations.put("user", "sex", "男");
            // hget
            Object age = hashOperations.get("user", "age");
            System.out.println(age);
            // hgetall
    
            // hkeys
            Set keys = hashOperations.keys("user");
            System.out.println(keys);
            // hvals
            List values = hashOperations.values("user");
            System.out.println(values);
            // hdel
            hashOperations.delete("user", "sex");
    
        }
    
        @Test
        public void testList() {
            ListOperations listOperations = redisTemplate.opsForList();
            // lpush
            listOperations.leftPush("mylist", "a");
            listOperations.leftPushAll("mylist", "b", "c");
            // lrange
            List range = listOperations.range("mylist", 0, -1);
            System.out.println(range);
            // rpop
            Object pop = listOperations.rightPop("mylist");
            System.out.println(pop);
            // llen
            Long size = listOperations.size("mylist");
            System.out.println(size);
        }
    
        @Test
        public void testSet() {
            SetOperations setOperations = redisTemplate.opsForSet();
            // sadd
            setOperations.add("myset", "a", "b", "c");
            setOperations.add("myset2", "b", "c", "d");
            // smembers (获取集合所有元素)
            Set myset = setOperations.members("myset");
            System.out.println(myset);
            // scard (集合长度)
            Long size = setOperations.size("myset");
            System.out.println(size);
            // sinter (交集)
            Set intersect = setOperations.intersect("myset", "myset2");
            System.out.println(intersect);
            // sunion (并集)
            Set union = setOperations.union("myset", "myset2");
            System.out.println(union);
            // srem
            setOperations.remove("myset", "a");
        }
    
        @Test
        public void testZSet() {
            ZSetOperations zSetOperations = redisTemplate.opsForZSet();
            // zadd
            zSetOperations.add("myzset", "a", 1);
            zSetOperations.add("myzset", "b", 2);
            zSetOperations.add("myzset", "c", 3);
            zSetOperations.add("myzset", "d", 0.5);
            // zrange
            Set myzset = zSetOperations.range("myzset", 0, -1);
            System.out.println(myzset);
            // zincrby
            Double v = zSetOperations.incrementScore("myzset", "b", 3);
            System.out.println(v);
            // zrem
            Long remove = zSetOperations.remove("myzset", "a");
            // Long remove = zSetOperations.remove("myzset", "a","b");
            System.out.println(remove);
        }
        @Test
        public void testCommon() {
            // keys
            Set keys = redisTemplate.keys("*");
            System.out.println(keys);
            Set keys1 = redisTemplate.keys("my*");
            System.out.println(keys1);
    
            // exists 判断key是否存在
            Boolean age = redisTemplate.hasKey("age");
            for (Object key : keys) {
                DataType type = redisTemplate.type(key);
                System.out.println(key + ":" + type);
            }
            // 删除key
            redisTemplate.delete("age");
    
        }
    }

  ```
