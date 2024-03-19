# Linux

## Linux下的文件结构说明

- /bin 二进制可执行命令
- /dev 设备特殊文件
- /etc 系统管理和配置文件
- /etc/rc.d 启动的配置文件和脚本
- /home 用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示
- /lib 标准程序设计库，又叫动态链接共享库，作用类似windows里的.dll文件
- /sbin 系统管理命令，这里存放的是系统管理员使用的管理程序
- /tmp 公用的临时文件存储点
- /root 系统管理员的主目录（呵呵，特权阶级）
- /mnt 系统提供这个目录是让用户临时挂载其他的文件系统。
- /lost+found 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows下叫什么.chk）就在这里
- /proc 虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。
- /var 某些大文件的溢出区，比方说各种服务的日志文件
- /usr 最庞大的目录，要用到的应用程序和文件几乎都在这个目录。其中包含：
- /usr/x11r6 存放x window的目录
- /usr/bin 众多的应用程序
- /usr/sbin 超级用户的一些管理程序
- /usr/doc linux文档
- /usr/include linux下开发和编译应用程序所需要的头文件
- /usr/lib 常用的动态链接库和软件包的配置文件
- /usr/man 帮助文档
- /usr/src 源代码，linux内核的源代码就放在/usr/src/linux里
- /usr/local/bin 本地增加的命令
- /usr/local/lib 本地增加的库

## Linux命令

- yum命令 - 管理服务软件 (Yellow dog Updater Modified) ，主要适用于基于Red Hat的Linux发行版，如Fedora、CentOS和Red Hat Enterprise Linux，它使用RPM软件包格式，能够自动处理依赖性关系，一次安装所有依赖的软件包  
  `yum install **`   
  例如：yum install nginx  
  参数：
  ![yum参数](/static/images/linux/yum_params.png)

- 查看 ** 的安装目录  
  `whereis **`  
  例如：查看nginx安装位置 whereis nginx

- 查看 ** 进程（https://www.cnblogs.com/huitailang2021/p/16011690.html）  
  `ps -ef | grep **`  
  例如：查看nginx进程 ps -ef | grep nginx  
  grep：正则匹配查询

- 用户切换至 root 用户  
  `sudo su root`
- chmod 命令 - 修改文件或目录权限 [参考](https://www.linuxcool.com/chmod)  
  `chmod 777 **`  
  例如：chmod 777 /usr/local/nginx/sbin/nginx
  ![chmod参数](/static/images/linux/chmod_params.png)
- 杀死进程  
  `kill -QUIT ****`
- 创建文件夹  
  `mkdir **` 或者 `mkdir -p **/**`（递归创建）

- 删除文件夹  
  `rm -rf */`

- 创建文件
  
  touch *
  
- 重命名文件夹  
  `mv ** **`

- 解压文件  
  `tar -zxvf **.tar.gz`  
  例如：tar -zxvf nginx-1.20.1.tar.gz
  -
- 查看所有端口占用情况  
  `netstat -ntulp`  或者 `netstat -tln`
  查看某一个端口号的情况：  
  netstat -ntulp | grep 端口号

- 查找**命令文件位置  
  `which **`
  例如：which git

- apt-get命令 – 管理服务软件 (Advanced Package Tool get)，适用于基于Debian的Linux发行版，如Ubuntu、Debian和Linux Mint，它使用DEB软件包格式

  语法格式：apt-get [参数] 软件名  
  例如安装vim：

```shell
apt-get update
apt-get install vim
```

常用参数：

| 参数名          | 说明         |
|--------------|------------|
| update       | 重新获取软件包列表  |
| upgrade      | 更新软件       |
| install      | 安装软件       |
| remove       | 卸载软件       |
| autoremove   | 自动卸载不使用的软件 |
| source       | 下载源代码      |
| build-dep    | 编译依赖关系     |
| dist-upgrade | 更新系统       |
| purge        | 删除配置文件     |
| clean        | 清理垃圾文件     |
| check        | 检查是否       |

**备注：**

1. '|'  
   中间的|是管道命令，是指两个命令同时执行，例如：ps -ef | grep nginx，指ps命令与grep同时执行
2. yum 和 apt-get 区别
   1. yum。主要适用于基于Red Hat的Linux发行版，如Fedora、CentOS和Red Hat Enterprise Linux，它使用RPM软件包格式，能够自动处理依赖性关系，一次安装所有依赖的软件包。
   2. apt-get。适用于基于Debian的Linux发行版，如Ubuntu、Debian和Linux Mint，它使用DEB软件包格式。


## 如何配置全局环境变量

1. vi /etc/profile
   在最下面添加，例如：

```text
export JAVA_HOME=/usr/local/java/jdk-11.0.18
export JRE_HOME=$JAVA_HOME/jre
export NODE_HOME=/usr/local/node/node-v14.16.1-linux-x64
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$NODE_HOME/bin:$PATH
```

## 安装 net-tools

查看ip地址

```shell
sudo yum install net-tools
```



## 安装 VIM



## 安装 java

### 方式一（通过 yum 安装）

- 查找 java 相关的列表
    - `yum list java*` 或者 `yum search jdk`

- 安装 jdk
    - `yum install java-1.8.0-openjdk.x86_64`

```shell
yum install java
```

- 查看 java 版本
    - `java -version`

- 查看 java 安装位置
    - `whereis java`
    - 通过yum安装的java，默认安装位置在 `/usr/lib/jvm`

- 配置环境变量，将jdk的安装路径加入到JAVA_HOME
    - 编辑文件
        - cd /etc 下编辑 profile 文件，或者 vim /etc/profile
        - 增加以下内容：

```text
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-1.el7_6.x86_64
JRE_HOME=$JAVA_HOME/jre
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

export JAVA_HOME JRE_HOME CLASSPATH PATH
```

- 执行source才能使用环境变量立即有效
    - source /etc/profile

### 方式二 （通过oracle官网下载ftp上传安装）

- [官网下载地址](https://www.oracle.com/java/technologies/downloads/#java8) 注：下载linux版本
- 创建目录
    - `mkdir /usr/local/java` 自定义目录
    - `cd /usr/local/java`
    - `把下载的文件 jdk-8u151-linux-x64.tar.gz 放在/usr/local/java/目录下
    - `tar -zxvf jdk-8u151-linux-x64.tar.gz`
    - 配置环境变量，同方式一 （注意安装的文件目录，安装位置不同配置的路径也不同）

## 安装 maven

### 方式一（通过 yum 安装）

- 查找maven相关的列表
    - `yum list maven*` 或者 `yum search maven`

- 安装 maven
    - `yum install -y maven` -y表示对所有的提问都回答“yes”

- 查看 maven 版本
    - `mvn -version`

- 查看 maven 安装位置
    - `whereis maven`
    - 通过yum安装的java，默认安装位置在 `/usr/share/maven`

- 配置环境变量
    - 编辑文件
        - cd /etc 下编辑 profile 文件，或者 vim /etc/profile
        - 增加以下内容（根据具体情况编写）：

```text
MAVEN_HOME=/usr/share/maven

PATH=$PATH:$MAVEN_HOME/bin

export JAVA_HOME JRE_HOME CLASSPATH PATH
```

- 执行source才能使用环境变量立即有效
    - source /etc/profile

- 新建本地仓库
    - `mkdir -p /usr/share/maven/repository`

    - 配置本地仓库、镜像、jdk版本
        - 编辑文件
            - cd /usr/share/maven/conf 下编辑 settings.xml 文件，或者 vim /usr/share/maven/conf/settings.xml
            - 增加以下内容（根据具体情况编写）：

本地仓库地址

```xml

<localRepository>/usr/share/maven/repository</localRepository>
```

使用阿里云镜像

```xml

<mirrors>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
</mirrors>
```

jdk版本

```xml

<properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
</properties>
```

### 方式二 （通过apache官网下载ftp上传安装）

- [官网下载地址](https://maven.apache.org/download.cgi) 注：下载linux版本，点 link 下载 Binary tar.gz archive
- 创建目录
    - `mkdir -p /usr/local/maven` 自定义目录
    - `cd /usr/local/maven`
    - `把下载的文件 apache-maven-3.6.3-bin.tar.gz 放在/usr/local/maven/目录下
    - `tar -zxvf apache-maven-3.6.3-bin.tar.gz`
- 配置环境变量及以下流程，同方式一 （注意安装的文件目录，安装位置不同配置的路径也不同）

## 部署jar使用脚本运行

- 同级新建 `xx.sh` 文件

```shell
#!/bin/bash
#这里可替换为你自己的执行程序，其他代码无需更改
APP_NAME=yfhu-0.0.1-SNAPSHOT.jar
  
#使用说明，用来提示输入参数
usage() {
 echo "Usage: sh yfhu.sh [start|stop|restart|status]"
 exit 1
}
  
#检查程序是否在运行
is_exist(){
 pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
 #如果不存在返回1，存在返回0 
 if [ -z "${pid}" ]; then
 return 1
 else
 return 0
 fi
}
  
#启动方法
start(){
 is_exist
 if [ $? -eq "0" ]; then
 echo "${APP_NAME} is already running. pid=${pid} ."
 else
 nohup java -jar /home/www/java/yfhu/$APP_NAME > /home/www/java/yfhu/yfhu.file 2>&1 &
 echo "${APP_NAME} start success"
 fi
}
  
#停止方法
stop(){
 is_exist
 if [ $? -eq "0" ]; then
 kill -9 $pid
 else
 echo "${APP_NAME} is not running"
 fi
}
  
#输出运行状态
status(){
 is_exist
 if [ $? -eq "0" ]; then
 echo "${APP_NAME} is running. Pid is ${pid}"
 else
 echo "${APP_NAME} is NOT running."
 fi
}
  
#重启
restart(){
 stop
 start
}
  
#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
 "start")
 start
 ;;
 "stop")
 stop
 ;;
 "status")
 status
 ;;
 "restart")
 restart
 ;;
 *)
 usage
 ;;
esac
```

- 使用

```shell
./yfhu.sh start #启动
./yfhu.sh stop #停止
./yfhu.sh status #查看状态
./yfhu.sh restart #重启
```

[原文：https://www.jb51.net/article/157237.htm](https://www.jb51.net/article/157237.htm)

## 对jenkins操作命令

1. 启动service jenkins start

* 或者使用命令 java -jar jenkins.war
  前提是 java 配置环境变量 然后到 /usr/lib/jenkins/ 文件夹下使用

2. 重启
   service jenkins restart
   运行状态可以使用地址重启，例如： http://localhost:8080/restart
3. 停止
   service jenkins stop

## 安装nodejs

### 安装

- 新建存放node文件夹
    - `mkdir -p /usr/local/node`

- 下载node
    - 进入node文件夹 `cd /usr/local/node`
    - 复制链接wget下载 [下载地址](https://registry.npmmirror.com/binary.html?path=node/) 选择要安装的版本，右键选选择复制链接地址
      `wget https://registry.npmmirror.com/-/binary/node/latest-v16.x/node-v16.20.0-linux-x64.tar.gz`

- 解压
    - `tar -zxvf node-v16.20.0-linux-x64.tar.gz`

- 配置环境变量
    - 编辑文件
        - cd /etc 下编辑 profile 文件，或者 vim /etc/profile
        - 增加以下内容：

```text
NODE_HOME=/usr/local/node/node-v16.20.0-linux-x64
PATH=$NODE_HOME/bin:$PATH
export NODE_HOME PATH
```

- 执行source才能使用环境变量立即有效

```shell
source /etc/profile
```

- 使用ln -s创建软连接
  相当于全局变量，在任何文件夹都能查看版本信息

```shell
ln -s /usr/local/node/node-v16.20.0-linux-x64/bin/npm /usr/local/bin/npm
ln -s /usr/local/node/node-v16.20.0-linux-x64/bin/npmx /usr/local/bin/npmx
ln -s /usr/local/node/node-v16.20.0-linux-x64/bin/node /usr/local/bin/node 
```

- 验证

```shell
node -v
npm -v
```
