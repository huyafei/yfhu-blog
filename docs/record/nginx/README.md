# nginx

## 服务器安装 node

### 安装
- 进入 node [下载地址](https://registry.npmmirror.com/binary.html?path=node/) 选择要安装的版本，右键选选择复制链接地址
- cd /usr/local/src/
- 下载
```shell
wget https://nodejs.org/dist/v9.8.0/node-v9.8.0.tar.gz
```
- 解压
```shell
tar -zxvf node-v9.8.0.tar.gz
```
- 移动
```shell
mv node-v9.8.0  /usr/local/node/
```

- 编辑文件
    - cd /etc 下编辑 profile 文件，或者 vim /etc/profile
    - 增加以下内容：
```text
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH
```
- 执行source才能使用环境变量立即有效
    - source /etc/profile
- 验证
```shell
node -v
npm -v
```

### 卸载
- 卸载 npm
```shell
npm uninstall npm -g
```
- 卸载 node
```shell
yum remove nodejs npm -y
```

## 服务器部署jar使用脚本运行

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
