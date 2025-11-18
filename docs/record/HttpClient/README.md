# HttpClient

jdk 11 之前 使用HttpClient

```java
<!-- Apache HttpClient依赖 -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.13</version> 
</dependency>
```

- 创建HttpClient对象
- 创建Http请求对象
- 调用HttpClient对象的execute方法发送请求


```java
@SpringBootTest
public class HttpClientTest {

    @Test
    public void testGet() throws Exception {
        // 创建HttpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建Http Get请求
        HttpGet httpGet = new HttpGet("http://localhost:8080/user/shop/status");
        // 执行请求
        CloseableHttpResponse response = httpClient.execute(httpGet);
        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println(statusCode);
        HttpEntity entity = response.getEntity();
        String body = EntityUtils.toString(entity);
        System.out.println(body);
        // 关闭response
        response.close();
        httpClient.close();

    }
    @Test
    public void testPost() throws Exception {
        // 创建HttpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建Http post请求
        HttpPost httpPost = new HttpPost("http://localhost:8080/admin/employee/login");
        // 设置请求参数
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username","admin");
        jsonObject.put("password","123456");
        StringEntity stringEntity = new StringEntity(jsonObject.toString());
        stringEntity.setContentEncoding("utf-8");
        stringEntity.setContentType("application/json");

        httpPost.setEntity(stringEntity);

        // 发送请求
        CloseableHttpResponse response = httpClient.execute(httpPost);

        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println(statusCode);
        HttpEntity entity = response.getEntity();
        String body = EntityUtils.toString(entity);
        System.out.println(body);
        // 关闭response
        response.close();
        httpClient.close();

    }

}

```
