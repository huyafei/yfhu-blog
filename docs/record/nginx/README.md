# Nginx

## Nginx命令

- 查看nginx的版本号  
  nginx -v
- 启动nginx  
  nginx
- 关闭nginx  
  nginx -s stop
- 重新加载nginx（配置文件修改后需要重新加载配置）  
  nginx -s reload
- 查看nginx进程  
  ps -ef | grep nginx
- 查看nginx进程号  
  ps -ef | grep nginx | awk '{print $2}'
- 杀死nginx进程  
  kill -9 `ps -ef | grep nginx | awk '{print $2}'`
- 查看nginx进程是否存在  
  ps -ef | grep nginx | grep -v grep | wc -l


### 使用命令(有两种方式)
   1. 首先必须进入 cd usr/local/nginx/sbin 的目录下
      - 查看nginx的版本号  
        ./nginx -v  
        ...
      
   2. 配置全局变量后使用Nginx命令
      - 重新加载配置页面  
        nginx -s reload  
        ...
      
## Nginx配置
- 配置文件
   配置文件目录 cd /usr/local/nginx/conf 目录下 nginx.conf 文件
   cd /usr/local/nginx/conf/nginx.conf

- 验证 nginx 配置文件是否正确

  1. 进入nginx安装目录 sbin 下
  2. 输入命令 ./nginx -t

     看到如下显示:
     nginx.conf syntax is ok
     nginx.conf test is successful

## nginx配置文件详解

```nginx
#Nginx用户及组：用户 组。window下不指定
#user  nobody;
# 工作进程：数目。根据硬件调整，通常等于CPU数量或者2倍于CPU,值越大，可以支持的并发处理量也越多
worker_processes  1;

#错误日志：存放路径，全局错误日志定义类型，'[ debug | info | notice | warn | error | crit ]'
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid（进程标识符）：存放路径。
pid        logs/nginx.pid;

#工作模式与连接数上限
events {
    #单个进程最大连接数（最大连接数=连接数*进程数
    worker_connections  1024;
}

#设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    #文件扩展名与文件类型映射表,类型由mime.type文件定义
    include       mime.types;
    #默认文件类型
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为on，
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。
    #注意：如果图片显示不正常把这个改为off
    sendfile        on;
    
    #tcp_nopush     on;

    #长连接超时时间，单位是秒
    keepalive_timeout  65;

    #gzip模块设置
    #开启gzip压缩输出
    #gzip  on;

    #虚拟主机的配置，可以有多个server
    server {
        #监听端口
        listen       80;
        #服务名可以有多个，用空格隔开
        server_name  localhost;
        #location可以有多个  location ~ /abc/ {...} 表示正则匹配  /abc/
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```
