# Linux

## Linux下的文件结构说明

- /bin 存放二进制可执行命令
- /boot 存放系统引导时使用的各种文件
- /dev 存放设备文件
- **/etc 存放系统配置文件**
- /etc/rc.d 启动的配置文件和脚本
- /home 存放系统用户的文件，用户主目录的基点，比如用户【user的主目录】就是/home/user，可以用~user表示
- /lib 存放程序运行所需的共享库和内核模块，标准程序设计库，又叫动态链接共享库，作用类似windows里的.dll文件
- /opt 额外安装的可选应用程序包所放置的位置
- /sbin 存放二进制可执行文件，只有root用户才能范文，系统管理命令，这里存放的是系统管理员使用的管理程序
- /tmp 公用的临时文件存储点
- **/root 系统管理员的主目录**
- /mnt 系统提供这个目录是让用户临时挂载其他的文件系统。
- /lost+found 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows下叫什么.chk）就在这里
- /proc 虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。
- /var 存放运行时需要改变数据的文件，某些大文件的溢出区，比方说各种服务的日志文件
- **/usr 最庞大的目录，要用到的应用程序和文件几乎都在这个目录。其中包含：**
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

命令格式：command [-options] [paraneter]

- command ：命令名
- [-options] ：选项，可用来对命令进行控制，可选
- [parameter] ：参数，0到多个，可选

### 常用命令

- ls [-al] 查看目录
  - ls -a 查看所有文件，包括隐藏文件
  - ls -l 查看文件详细信息
- cd [dirName] 切换目录
  - cd ~  切换到用户的home目录
  - cd .. 切换到当前目录的上级目录
  - cd - 切换到上一次所在目录
- mkdir [-p] dirName 创建目录，-p : 确保目录名称存在，不存在的就创建一个。通过此选项，可以实现多层目录同时创建
- rm [-rf] dirName 删除目录， -r: 递归删除目录， -f 无需确认，直接删除
- cp [-r] source dest 复制文件，-r：递归复制，例如：cp -r /usr/local/nginx /usr/local/nginx-1.20.1
- mv [-f] source dest 移动/重命名文件，-f：强制覆盖 例如：重命名： mv 1.log 2.log 移动：mv 1.log a/
- tar [-zcxvf] fileName [files] 对文件进行打包、解包、压缩、解压，-z：压缩，-c：创建，-x：解压，-v：显示压缩过程，-f：指定压缩文件名
  - tar -zcvf 压缩文件名 待压缩的文件或目录
  - tar -zxvf 解压文件名 解压文件 -C 解压到目录
- vi fileName 编辑文件，使用vi 升级版 vim，需要安装 yum install vim
  - vim fileName --> 进入命令模式 --> 输入 i,a,o 进入插入模式 -->  esc：退出编辑模式进入命令模式 --> 输入冒号”:“
    进入底行模式 --> wq：保存并退出，q!：强制退出，wq!：强制保存并退出
  - 进入底行模式 set num :显示行号， set nonum：不显示行号，输入行号，跳转到指定行号
  - 进入命令模式
    - gg ：跳转到文件开头，
    - g ：跳转到文件末尾
    - dd：删除当前行，
    - ndd ：删除当前行和之后的n行
    - p：复制当前行，
    - u ：撤销上一步操作
- find dirName -option fileName 指定目录查找文件，-name：指定文件名 例如：find ./ -name "*.log"
- grep [-inAB] word fileName 从指定文件中查找指定的文本内容，例如：grep out 1.log
  - -i：忽略大小写，
  - -n：显示关键字所在行号，
  - -A：输入关键字所在行及之后的几行记录，例如: grep -in -A5 out 1.log
  - -B：输入关键字所在行及之前的几行记录
- whereis **

### 其它命令

- history 查看历史操作命令
- cat [-n] fileName 显示文件内容 -n ：显示行号
- more [-n] fileName 分页显示文件内容
- head [-n] fileName 显示文件开头的几行
- tail [-nf] fileName 显示文件结尾的几行 -n：显示最后几行， -f：持续显示
- echo [-n] "**" >> fileName 向文件末尾追加内容
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

- 查看所有端口占用情况  
  `netstat -ntulp`  或者 `netstat -tln`
  查看某一个端口号的情况：  
  netstat -ntulp | grep 端口号

- 查找**命令文件位置  
  `which **`
  例如：which git

## Linux软件安装

- 源码编译安装，需要手动编译，需要解决依赖性关系，需要手动安装依赖包
- 二进制发布包安装，软件以及针对具体平台编译发布，只要解压，修改配置即可
- rpm 安装 - 管理软件包（RPM： Red Package Manager），centos 7.x以集成，使用rpm命令进行安装，不能解决依赖性关系，需要手动安装依赖包
- yum 安装 - 管理服务软件 (Yellow dog Updater Modified) ，主要适用于基于Red Hat的Linux发行版，如Fedora、CentOS和Red Hat
  Enterprise Linux，它使用RPM软件包格式，能够自动处理依赖性关系，一次安装所有依赖的软件包  
  `yum install **`   
  例如：yum install nginx  
  参数：
  ![yum参数](/static/images/linux/yum_params.png)

### 安装 vim

```shell
yum install vim
```

### 安装 JDK

#### 方式一（通过 yum 安装）

- 执行 sudo yum update 更新yum源以确保获取到最新的软件包信息
- 执行 sudo yum install wget 成功安装 网络下载工具
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
  - 使用 java -version

#### 方式二 （通过oracle官网下载ftp上传安装）

- [官网下载地址](https://www.oracle.com/java/technologies/downloads/#java8) 注：下载linux版本
- uname -m 查看系统位数
- 创建目录
  - `mkdir /usr/local/java` 自定义目录（也可以不自定义）
  - `cd /usr/local/java`
  - `把下载的文件 jdk-8u151-linux-x64.tar.gz 放在/usr/local/java/目录下
  - `tar -zxvf jdk-8u151-linux-x64.tar.gz`
  - 配置环境变量，同方式一 （注意安装的文件目录，安装位置不同配置的路径也不同）

### 安装 MySQL

- uname -m 查看系统位数
- 卸载linux系统中自带的mysql/mariadb安装包，否则MySQL安装会失败
  - rpm -qa | grep mysql 查找所有 mysql 安装包 -qa：查找所有安装包，竖线 为管道符前面的输出结果为后面输入
  - rpm -qa | grep mariadb 查找所有 mariadb 安装包
  - rpm -e --nodeps mariadb-libs-5.5.68-1.el7.aarch64 卸载查找到的安装包 ，rpm 中卸载软件包 rpm -e --nodeps
- [下载](https://downloads.mysql.com/archives/community/)并上传mysql安装包
- 解压安装包，解压后的文件移动到 /usr/local 目录下，改名 mysql
  - 解压 `tar -zxvf mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz`
- 配置环境变量 `vim /etc/profile`

```shell
export MYSQL_HOME=/usr/local/mysql
export PATH=$MYSQL_HOME/bin:$PATH
```

- 注册MySQL为系统服务
  - cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
  - chkconfig --add mysql

- 初始化数据库
  - groupadd mysql 初始化mysql用户组
  - useradd -r -g mysql -s /bin/false mysql 创建系统用户
  - mysqld --initialize --insecure --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
    初始化指定用户的数据库，数据库基本安装目录，数据存放目录（初始化完毕后，日志中会输出mysql的root用户的临时密码，复制保存下来）
- 启动服务登录MySQL
  - systemctl start mysql 启动mysql服务,linux 启动服务 systemctl start
  - mysql -uroot -pxxxxx 登录mysql
- 配置MySQL的root用户的密码，授权远程访问
  - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxx'; 修改root用户临时密码
  - CREATE USER 'root'@'%' IDENTIFIED BY 'xxxxx'; 配置远程访问权限以及访问密码，% 表示所有ip
  - GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'; 远程用户分配权限
  - FLUSH PRIVILEGES; 刷新权限
- windows 远程连接 linux 系统 mysql 命令： mysql -h192.168.1.1 -P 3306 -u root -pxxxxx
- 防火墙配置
  - 查看防火墙状态 `systemctl status firewalld`、`firewalld-cmd --state`
  - 关闭防火墙 `systemctl stop firewalld`
  - 开启防火墙 `systemctl start firewalld`
  - 永久关闭防火墙 `systemctl disable firewalld`
  - 永久开启防火墙 `systemctl enable firewalld`
  - 开放指定端口 `firewall-cmd --zone=public --add-port=3306/tcp --permanent`
  - 关闭指定端口 `firewall-cmd --zone=public --remove-port=3306/tcp --permanent`
  - 立即生效 `firewall-cmd --reload`
  - 查看开放的端口 `firewall-cmd --zone=public --list-ports`
  - 注意：
    - systemctl 是管理linux中服务的命令，可以对服务进行启动、停止、重启、查看状态等操作
    - firewalld-cmd 是linux专门用于控制防火墙的命令
    - 为了保证系统安全，生产服务器的防火墙不建议关闭

### 安装 Nginx

- [官网下载地址](https://nginx.org/en/download.html)
- 安装nginx运行时需要的依赖 `yum install -y pcre pcre-devel zlib zlib-devel openssl openssl-devel`
- `cd /usr/local`
- 上传nginx的源码包 nginx-1.18.0.tar.gz
- 解压nginx安装包 `tar -zxvf nginx-1.18.0.tar.gz`
- 进入解压目录（cd nginx-1.18.0）后执行指令： `./configure --prefix=/usr/local/nginx`
- 执行编译nginx指令：make
- 执行安装nginx指令：安装到上述指令的/usr/local/nginx目录： `make install`
- 进入到nginx安装目录/usr/local/nginx，启动nginx服务：`sbin/nginx`
- 防火墙开启 80 端口，`firewall-cmd --zone=public --add-port=80/tcp --permanent`
- 立即生效 `firewall-cmd --reload`
- 查看开放的端口 `firewall-cmd --zone=public --list-ports`

#### 命令

进入到nginx安装目录/usr/local/nginx，启动nginx服务：`sbin/nginx`，可以加入到全局环境变量

- 重新加载配置文件 `sbin/nginx -s reload`
- 停止nginx服务：`sbin/nginx -s quit`

### 安装 maven

#### 方式一（通过 yum 安装）

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

#### 方式二 （通过apache官网下载ftp上传安装）

- [官网下载地址](https://maven.apache.org/download.cgi) 注：下载linux版本，点 link 下载 Binary tar.gz archive
- 创建目录
  - `mkdir -p /usr/local/maven` 自定义目录
  - `cd /usr/local/maven`
  - `把下载的文件 apache-maven-3.6.3-bin.tar.gz 放在/usr/local/maven/目录下
  - `tar -zxvf apache-maven-3.6.3-bin.tar.gz`
- 配置环境变量及以下流程，同方式一 （注意安装的文件目录，安装位置不同配置的路径也不同）

### 安装 nodejs

#### 安装

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

### 安装 net-tools

查看ip地址

```shell
sudo yum install net-tools
```

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

## 前端部署

- 编译编译，放到 `/usr/local/nginx/html` 文件夹下
- 配置 nginx 配置文件

## 后端部署

- mysql 连接地址，日志路径按需修改，涉及系统环境变量也要修改（例如aliyun oss环境变量）
- 执行 meven 生命周期 package，对项目进行打包【打包前连接服务器数据，先测试通过】
- 在 linux服务器的 /usr/local目录下，创建项目目录tlias-app，将jar包上传服务器的 /usr/local/tlias-app 目录中
- 然后命令行执行命令，运行jar包：java -jar xxxxxx.jar 【此命令会占用窗口，关闭窗口则jar包也会停止】
- `nohup java -jar xxxxxx.jar &> /home/www/java/tlias-app/xxx.log &` 返回进程的id
  - nohup：后台运行，&>：将输出重定向到文件， &：后台运行
  - 查看进程：ps -ef | grep xxx  例如 ps -ef | grep java
  - 杀死进程 `kill -9 进程id`
