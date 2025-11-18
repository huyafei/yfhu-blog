# Docker

- [Docker学习中文文档大全、docker&docker-compose实战](https://blog.csdn.net/MacWx/article/details/115670554)
- [Docker 从入门到实践](https://vuepress.mirror.docker-practice.com/)

## Docker是什么？

- [01-Docker概述 (yuque.com)](https://www.yuque.com/tmfl/cloud/rifotq)
  docker 是一款快速构建、运行、管理应用的工具。
  docker 是go语言开发实现的，是一个开源的应用容器引擎，基于 Linux 内核轻量级虚拟机，属于操作系统层面的**容器虚拟化技术**。

  docker是虚拟化容器技术。

## 解决什么问题？

部署项目：

​
docker出现前：在虚拟机上配置项目运行环境比如安装mysql+NGINX+Redis+java环境等等，如果分为开发，测试和正式环境，每个都要安装软件和配置环境，可能导致安装软件版本以及配置不一致导出出错，问题多、麻烦、容易出错，换台机器得重来一次，那么安装时原始环境是否可以一并复制过来？

​ docker出现后：开发环境运行正常，将源码、系统、软件及版本、环境配置等等打包成一个镜像文件，**一次使用到处运行**

Linux容器技术的出现就解决了这样一个问题，而 Docker 就是在它的基础上发展过来的。将应用打成镜像，通过镜像成为运行在Docker容器上面的实例，而
Docker容器在任何操作系统上都是一致的，这就实现了跨平台、跨服务器。只需要一次配置好环境，换到别的机子上就可以一键部署好，大大简化了操作

### 传统虚拟机和容器

传统虚拟机（virtual machine）：

​ 传统虚拟机技术基于安装在主操作系统上的虚拟机管理系统（如VirtualBox、VMware等），创建虚拟机（虚拟出各种硬件），在虚拟机上安装从操作系统，在从操作系统中安装部署各种应用。缺点：资源占用多、冗余步骤多、启动慢

Linux容器（Linux Container，简称LXC）：

​ Linux容器是与系统其他部分分隔开的一系列进程，从另一个镜像运行，并由该镜像提供支持进程所需的全部文件。容器提供的镜像包含了应用的所有依赖项，因而在从开发到测试再到生产的整个过程中，它都具有可移植性和一致性。

​
Linux容器不是模拟一个完整的操作系统，而是对进程进行隔离。有了容器，就可以将软件运行所需的所有资源打包到一个隔离的容器中。容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一的运行。

## 安装

### 在 CentOS 7 上安装

[官方CentOS安装教程](https://docs.docker.com/engine/install/centos/)
注意步骤4，步骤5

1. 查看系统信息是否是 CentOS 7以上

   ```shell
   # 查看系统版本
   cat /etc/redhat-release
   # 查看内核版本
   uname -r
   ```

2. 移除旧的版本

    ```shell
    sudo yum remove docker \
                   docker-client \
                   docker-client-latest \
                   docker-common \
                   docker-latest \
                   docker-latest-logrotate \
                   docker-logrotate \
                   docker-engine
    #               docker-selinux
    ```

   **备注：**

* \ 换行符

3. 安装必要系统工具（配置docker的yum库）

   ```shell
   sudo yum install -y yum-utils 
   #  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
   ```

   **备注：**

- 安装yum-utils包（提供yum-config-manager 实用程序）

4. 设置镜像仓库

* 官方仓库【不推荐】

   ```shell
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   ```

* 阿里云仓库【推荐】

   ```shell
   sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   ```

5. 更新yum工具

   ```shell
   sudo yum makecache fast
   ```

6. 安装 Docker 包

   ```shell
   sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

   **备注：**

* docker-ce：Docker 引擎
* docker-ce-cli：Docker 命令行工具
* containerd.io：容器运行时
* docker-buildx-plugin：Docker Buildx 插件
* docker-compose-plugin：Docker Compose 插件
*

7. 启动 Docker

   ```shell
   # 启动 docker
   sudo systemctl start docker
   # 停止 docker
   sudo systemctl stop docker
   # 启动 重启
   sudo systemctl restart docker
   # 设置开机自启
   sudo systemctl enable docker
   # 执行docker ps命令，如果不报错，说明安装启动成功
   docker ps
   ```

   **备注：**

- systemctl 英文词组”system control“的缩写，用于管理系统服务。
  - 语法格式：systemctl 参数 服务常用参数：
- start 启动服务
- stop 停止服务
- restart 重启服务
- enable 使某服务开机自启
- disable 关闭某服务开机自启
- status 查看服务状态
- list -units --type=service 列举所有已启动服务

8. 查看 Docker 版本，验证是否启动成功

   ```shell
   docker version
   ```

9. 测试

   ```shell
   sudo docker run hello-world
   ```

10. 停止 Docker

    ```shell
    sudo systemctl stop docker
    ```

## 卸载

1. 卸载安装包
   ```shell
   sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

2. 删除镜像、容器、配置文件等内容
   ```shell
   sudo rm -rf /var/lib/docker
   sudo rm -rf /var/lib/containerd
   ```

3. docker 文件位置及作用

* /var/lib/docker：docker 镜像、容器、网络、卷等数据的保存目录
* /etc/docker：docker 的配置文件目录，默认没有daemon.json文件
  * /etc/docker/daemon.json
* /usr/bin/docker：docker 的二进制可执行文件
* /usr/lib/systemd/system/docker.service：docker 的 systemd 配置文件
* /var/run/docker.sock：docker 的 socket 文件

## docker的组成/核心

![01](/static/images/docker/01.jpg)

- 镜像（Image）一个镜像代表一个应用环境，是一个**只读**的模板。镜像用来创建 Docker 容器，一个镜像可以创建多个容器。比如nginx、jekins镜像等。
- 容器（Container）是用镜像创建出来的运行实例可读可写。与镜像的关系类似java中类（镜像）与实例对象（容器）一样。
- 仓库（Repository）是集中存放镜像文件的场所。类似 github 仓库存放 git 项目一样。
- `dockerFile:`docker生成镜像配置文件,用来书写自定义镜像的一些配置
- `tar:`一个对镜像打包的文件,日后可以还原成镜像

## 镜像加速

国内从 DockerHub 拉取镜像有时会遇到困难，因此需要配置镜像加速器。
阿里云镜像地址：[https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)[参考地址](https://www.runoob.com/docker/docker-mirror-acceleration.html)

1. 登录阿里云，进入容器**镜像服务控制台**，选择左侧菜单栏的**镜像加速器**
2. 配置镜像加速器
   有两种方式：

1. 直接复制粘贴
2. 在/etc/docker下 创建、编辑 daemon.json 文件

   ```shell
   sudo touch /etc/docker/daemon.json
   sudo vim /etc/docker/daemon.json
   ```

   内容如下：

   ```json
   {
     "registry-mirrors": ["https://自己的编码.mirror.aliyuncs.com"]
   }
   ```
3. 重启 Docker 服务

```shell
# 重新加载配置文件
sudo systemctl daemon-reload
# 重启docker服务
sudo systemctl restart docker
```

4. 验证是否配置成功

```shell
sudo docker info
```

## Docker 常用命令

### 启动类命令

- systemctl start docker：启动 Docker
- systemctl stop docker：停止 Docker
- systemctl restart docker：重启 Docker
- systemctl status docker：查看 Docker 状态
- systemctl enable docker：设置 Docker 开机自启
- systemctl disable docker：取消 Docker 开机自启

### 信息类命令

- docker version：查看 Docker 版本信息
- docker info：查看 Docker 系统信息
- docker help：查看 Docker 帮助信息
- docker 具体命令 --help：查看docker具体命令的帮助信息

### 镜像命令

- docker pull 镜像名 ：拉取镜像（ docker pull 镜像名:版本号，没有表示:last拉取最新版本）
- docker images ：查看本地镜像。-a 所有镜像 ，-q 只显示镜像id，例如：docker images -a
- docker rmi 镜像名/ID ：删除镜像(强制单个：docker rmi -f 镜像名/ID，)
- docker search 镜像名 ：搜索镜像
- docker run 镜像名 ：运行镜像创建一个新容器。 例如：docker run -it --name myTomcat -p 8888:8080 tomcat
- **docker run [OPTIONS] IMAGE [COMMAND] [ARG...] 运行镜像创建一个新容器**
  - OPTIONS
  - -d：后台运行容器，并返回容器ID
  - -i：以交互模式运行容器，通常与 -t 同时使用
  - -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用
  - -p：端口映射，格式为：主机(宿主)端口:容器端口
  - -v：挂载数据卷，格式为：宿主机目录:容器目录 ，本地目录必须以 / 或 ./ 开头，否则识别为数据卷
  - --name=容器名称：为容器指定一个名称,唯一
  - -rm：容器退出时自动删除容器文件
  - -e：设置环境变量
  - --network ：指定网络
  - -link：链接到另一个容器
    例如：

  ```shell
  # 使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令
  # Docker 以 centos 镜像创建一个新容器，然后在容器里执行 /bin/bash 命令
  docker run -it centos /bin/bash
  ```

  参数说明：

  - -i: 交互式操作。
    - -t: 终端。
    - centos 表示镜像。centos 镜像（也可以centos:版本号）。
    - /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
    - **要退出终端，直接输入 exit 或者 Ctrl+D 即可。（使用exit退出容器会停止运行，ctrl+p+q容器不停止）**
- docker commit 容器ID 新镜像名 ：提交容器生成镜像
- **docker build -t 镜像名 Dockerfile所在目录：根据 Dockerfile 构建镜像** 例如：docker build -t centos:v1 .
  - -t：指定镜像名称。镜像名:版本号 不指定版本号，默认为latest
- **docker save -o 新镜像名.tar 镜像名** ：导出镜像1
- **docker save 镜像名 > 新镜像名.tar** ：导出镜像2
- **docker load -i 镜像名.tar** ：导入镜像
- docker push 镜像名：推送镜像到 DockerHub
- docker tag 镜像ID 新镜像名：给镜像打标签
- docker history 镜像名：查看镜像的历史记录
- docker system df：查看镜像占用空间

### 容器命令

- docker ps：查看正在运行的容器
- docker ps [OPTIONS] ：查看所有容器，列出当前所有正在运行的容器+历史上运行过的容器
  - -a：运行容器和历史容器
  - -q :  静默模式，只显示容器编号。
  - -l :   显示最近创建的容器。
  - -n：显示最近n个创建的容器。
- docker start 容器名/容器ID：启动容器
- docker stop 容器名/容器ID：停止容器
- docker rm 容器ID：删除已停止的容器
  - docker rm -f $(docker ps -aq)：删除所有容器
  - docker rm -f $(docker ps -a -q)：删除所有容器
- docker kill 容器名/容器ID：强制停止容器
- docker restart 容器名/容器ID：重启容器
- docker attach 容器ID：进入容器（使用exit退出容器会停止）
- **docker exec -it 容器ID /bin/bash：进入容器【推荐】（使用exit退出容器不会停止，exec是在容器中打开新的终端，并且启动新的进程
  **
  - -i 以交互模式运行容器，通常与-t一起使用
  - -t 分配一个伪终端 shell窗口 bash  
    redis一般先用 docker run -d IMAGE 启动程序，然后用 docker exec -it CONTAINER /bin/bash 进入容器，然后执行 ps -ef
    查看进程，然后执行 kill -9 PID 杀掉进程，最后执行 exit 退出容器。
- docker logs [OPTIONS] 容器名/容器ID：查看容器日志
  - -f：实时显示日志，docker logs -f 容器名/ID
- docker inspect 容器ID：查看容器详细信息
- docker top 容器名/容器ID：查看容器内运行的进程
- docker cp 容器ID:容器内路径 主机路径：将容器内文件拷贝到主机
  - docker cp 主机路径 容器ID:容器内路径：将宿主机复制到容器内部
- 导入和导出容器
  - docker export 容器ID > 容器.tar：导出容器
  - docker import 容器.tar 镜像名：导入容器
- docker port 容器ID：查看容器端口映射
- docker stats 容器ID：查看容器资源占用情况
- docker diff 容器ID：查看容器文件变化

### 数据卷命令

- docker volume create ：创建一个数据卷
- docker volume inspect ：查看数据卷信息
- docker volume rm ：删除数据卷
- docker volume ls：查看数据卷列表
- docker volume prune：清理所有未使用的数据卷

### 网络命令

- docker network create 网络名：创建一个网络。 例如：docker network create mynet
- docker network inspect ：查看网络信息
- docker network rm ：删除网络
- docker network ls：查看网络列表
- docker network connect 网络名 容器名/id ：将容器连接到网络。 例如：docker network connect mynet myTomcat
- docker network disconnect ：将容器从网络断开
- docker network prune：清理所有未使用的网络

## docker生成镜像

### 相关命令

1. docker commit 容器ID 新镜像名：提交容器生成镜像
2. docker commit -m="提交的描述信息" -a="作者" 容器ID 镜像名:版本号
3. docker build -t 镜像名 Dockerfile 所在目录：根据 Dockerfile 构建镜像

### 以在ubuntu加入vim功能为示例

1. 从 hub.docker.com 拉取 ubuntu 镜像

```shell
docker pull ubuntu
```

2. 运行 ubuntu 镜像

```shell
docker run -it ubuntu /bin/bash
```

3. 在容器中安装 vim
   默认Ubuntu镜像中没有vim，所以需要在容器中安装vim 测试：vim a.text

```shell
    # 先更新管理工具
    apt-get update
    # 安装 vim 
    apt-get -y install vim
```

4. 退出容器

```shell
    exit
```

5. 提交容器生成镜像

```shell
    # docker commit -m="提交的描述信息" -a "作者" 容器ID 镜像名:版本号
    docker commit -m="add vim" -a "zhangsan" 1d1f1f1f1f1f ubuntu:v1
```

6. 查看镜像

```shell
    docker images
```

7. 运行镜像

```shell
    docker run -it ubuntu:v1 /bin/bash
```

8. 测试vim

```shell
    vim a.text
```

**备注：**

- 慎用 docker commit，此操作为黑箱操作，因为只有制作此镜像的人才知道执行过什么命令，时间久会忘记。使用 Dockerfile 定制镜像

## 本地镜像发布到阿里云

接以上生成本地镜像流程，将本地镜像上传到阿里云

1. 进入阿里云`容器镜像服务`
2. 创建`命名空间`
3. 创建`镜像仓库`
4. 进入操作`管理`界面获取脚本（得到步骤5、步骤6的命令）
5. 将镜像推送到阿里云
1. 登录阿里云Docker Registry
   ```shell
    docker login --username=dq_hyf9527 registry.cn-hangzhou.aliyuncs.com
   ```
2. 将镜像推送到Registry
   ```shell
    docker tag 镜像ID registry.cn-hangzhou.aliyuncs.com/命名空间/镜像名:版本号
    docker push registry.cn-hangzhou.aliyuncs.com/命名空间/镜像名:版本号
   ```
6. 从阿里云下载镜像
   ```shell
   docker pull registry.cn-hangzhou.aliyuncs.com/vensst/myubuntu:[镜像版本号]
   ```

## 本地镜像发布到私有库

Docker Registry是官方提供的工具，可以用于构建私有镜像仓库

1. 下载 Docker Registry
   ```shell
   docker pull registry
   ```
2. 运行 Docker Registry 生成私有docker hub镜像仓库
   ```shell
    docker run -d -p 5000:5000 -v /vensst/myregistry/:/tmp/registry --privileged=true registry
   ```
   docker inspect 容器ID：查看容器详细信息
3. 以 ubuntu 安装 ifconfig 命令为例，将镜像推送到私有镜像仓库
1. 下载并运行ubuntu镜像
   ```shell
    docker pull ubuntu
    docker run -it ubuntu /bin/bash
   ```

2. 安装 ifconfig
   ```shell
    apt-get update
    apt-get install net-tools
    # 验证
    ifconfig
   ```

3. commit 容器生成镜像
   ```shell
    docker commit -m="add ifconfig" -a="yfhu" 1d1f1f1f1f1f myubuntu:1.2
   ```
4. 运行私有镜像仓库
   ```shell
    docker run -it myubuntu:1.2 /bin/bash
    ifconfig
   ```

4. 使用curl 验证私有库有什么镜像

```shell
curl -XGET http://81.69.44.160:5000/v2/_catalog
# {"repositories":[]} 说明没有镜像
```

5. 将新镜像修改符合私服规范的tag
   公式：docker tag 镜像:Tag Host:Port/Repository:Tag

```shell
docker tag myubuntu:1.2 81.69.44.160:5000/myubuntu:1.2
```

6. 修改配置文件使之支持http

```shell
# 查看配置文件
cat /etc/docker/daemon.json
# 修改配置文件
vim /etc/docker/daemon.json
```

新增"insecure-registries": ["192.168.111.162:5000"]

```json
{
  "registry-mirrors": [
    "https://aa25jngu.mirror.aliyuncs.com"
  ],
  "insecure-registries": [
    "192.168.111.162:5000"
  ]
}
```

修改好重启docker服务

```shell
systemctl restart docker
```

7. 将镜像推送到私有镜像仓库

```shell
 docker push 81.69.44.160:5000/yfhuubuntu:1.2
```

8. 使用curl 验证私有库有什么镜像2

```shell
curl -XGET http://81.69.44.160:5000/v2/_catalog
```

9. 从私有镜像仓库下载镜像

```shell
docker pull 81.69.44.160:5000/yfhuubuntu:1.2
```

## docker 容器数据卷

Docker容器数据卷（Volumes）是Docker中用于持久化和共享数据的一种机制。在Docker容器的生命周期中，容器内部的文件系统是临时性的，当容器停止或删除时，其所有更改通常都会丢失。为了确保重要数据能够跨容器持久存储，并且能够在多个容器之间共享，Docker引入了数据卷的概念。

docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录 镜像名

## docker 安装mysql

```shell
# 创建挂载目录：数据、初始化脚本、配置文件
## 容器内数据目录 /var/lib/mysql
## 容器内配置文件目录 /etc/mysql/conf.d
## 容器内初始化脚本目录 /docker-entrypoint-initdb.d

mkdir -p /vensst/mysql/data
mkdir -p /vensst/mysql/conf
mkdir -p /vensst/mysql/init

docker run -d \
  --name mysql \
  -p 3307:3306 \
  -e TZ=Asiz/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v /vensst/mysql/data:/var/lib/mysql \
  -v /vensst/mysql/conf:/etc/mysql/conf.d \
  -v /vensst/mysql/init:/docker-entrypoint-initdb.d \
  mysql:8 
  
```

## docker 安装 nginx

### 下载镜像前配置

目的是将nginx的配置文件、日志文件、网站文件、证书文件挂载到宿主机的目录

```shell
# 创建挂载目录 -p 递归创建
mkdir -p /vensst/nginx/conf
mkdir -p /vensst/nginx/log
mkdir -p /vensst/nginx/html
mkdir -p /vensst/nginx/ssl
# 或者
mkdir -p /vensst	/nginx/{conf,html,log,ssl}
```

### 拉取镜像

```shell
docker pull nginx
```

### 运行镜像

```shell
# docker run -d --name 生成的容器起名 -p 8080:80 镜像名:版本号
docker run -d -p 9001:80 --name nginx-vensst nginx
```

**备注：**

- nginx 镜像默认的端口是80

- nginx 镜像内文件位置说明
  - 默认的配置文件在容器的`/etc/nginx/nginx.conf`
  - 默认的配置文件夹在容器的`/etc/nginx/conf.d`
  - 默认的网站文件在容器的`/usr/share/nginx/html`
  - 默认的日志文件在容器的`/var/log/nginx`

### 配置 nginx.conf（可忽略）

- 进入容器  
  docker exec -it nginx-vensst /bin/bash

- 查找 nginx 目录

  whereis nginx

- 修改nginx配置文件  
  vim /etc/nginx/nginx.conf

- 重启nginx  
  nginx -s reload

- 退出容器

  exit

### 拷贝容器内配置文件到宿主机

```shell
# docker cp 容器id|容器名称:/etc/nginx/nginx.conf 宿主机目录
# 将容器nginx.conf文件复制到宿主机
docker cp nginx-vensst:/etc/nginx/nginx.conf /vensst/nginx/conf/nginx.conf
# 将容器conf.d文件夹下内容复制到宿主机
docker cp nginx-vensst:/etc/nginx/conf.d /vensst/nginx/conf/
# 将容器中的html文件夹复制到宿主机(部署项目放到这里)
docker cp nginx-vensst:/usr/share/nginx/html /vensst/nginx/
```

**备注：**

- nginx.conf` 主配置文件中包含了一个 include 指令，指向此目录下的所有 .conf 文件

### 删除容器

或者使用命令 docker rm -f nginx-vensst 直接删除正在运行的 nginx-vensst 容器

```shell
# 直接执行docker rm nginx或者以容器id方式关闭容器
# 找到nginx对应的容器id
docker ps -a
# 关闭该容器
docker stop nginx-vensst
# 删除该容器
docker rm nginx-vensst
```

### 重新运行容器

此时将宿主机上的配置文件和文档根目录挂载到容器上，后续改配置就在宿主机上改自动映射到容器内。

```shell
docker run --name nginx-vensst \
-p 9001:80 \
--privileged=true \
-v /vensst/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /vensst/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /vensst/nginx/html:/usr/share/nginx/html \
-v /vensst/nginx/log:/var/log/nginx \
-v /vensst/nginx/ssl:/etc/nginx/ssl/ \
-d nginx
```

- --privileged=true :  访问权限

## docker 安装 jenkins

### 下载镜像前配置

目的是将jenkins的配置文件、日志文件、网站文件挂载到宿主机的目录

```shell
# 创建挂载目录 -p 递归创建
mkdir -p /vensst/jenkins/jenkins_home
# 文件授权，不授权的话无法启动运行 jenkins 参考：https://www.linuxcool.com/chmod
chmod 777 /vensst/jenkins/jenkins_home
```

### 拉取镜像

::: tip

- jenkins停用，选择 jenkins/jenkins 或 jenkinsci/blueocean
  :::

```shell
docker pull jenkins/jenkins:lts-jdk11
```

### 运行镜像

```shell
docker run -d -p 7227:8080 -p 50000:50000 --name jenkins-vensst --privileged=true -v /vensst/jenkins/jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
```

**备注：**

- 8080端口是jenkins的web访问端口,50000端口是jenkins的代理端口
- jenkins 文件位置说明
  - jenkins镜像默认的配置文件在容器的`/var/jenkins_home`
  - jenkins镜像默认的日志文件在容器的`/var/log/jenkins`
  - jenkins镜像默认的端口是8080

### 获取密码登录（首次登录）

```shell
# 容器在 /var/jenkins_home/secrets/initialAdminPassword 位置，下面是挂载在外部目录位置
vim /vensst/jenkins/jenkins_home/secrets/initialAdminPassword
```

### 问题与解决

- 插件安装失败
  - 原因：一般是因为jenkins与插件版本不适应
  - 解决：系统管理->插件管理->高级->升级站点->
    修改对应的url（[查询地址](https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/)）->提交->重启jenkins

- 重启

  - 安全重启：`http://[jenkins-server]/safeRestart`
  - 立即重启：`http://[jenkins-server]/restart`

  请将 `[jenkins-server]` 替换为您的 Jenkins 服务器地址

### 在jenkins中安装jdk

- 系统管理->全局工具配置->JDK->新增JDK->自动安装->输入版本号->保存
- 1:别名随便取 2:版本id是8u开头 3.此处会有登录提示需要配置oracle账号
  ![jenkins中jdk使用](/static/images/jenkins/jenkin_jdk_az.jpg)

### 在jenkins中安装maven

- 系统管理->全局工具配置->Maven->新增Maven->自动安装->选择版本->保存

### 设置中文

- 安装插件 Locale

## Dokcerfile

Dokcerfile 是用来构建 Docker 镜像的文本文件，有一条条构建镜像的所需的指令和参数构成的脚本。

### 常用指令

- FROM ：指定基础镜像，必须以第一行出现。语法：FROM 镜像名[:版本] 例如： FROM ubuntu:14.04
- ENV ：设置环境变量，可在后面的指令使用。语法：ENV key value 或者 key=value 例如：ENV PATH \/usr\/local\/bin:\$PATH 或者 ENV
  PATH=\/usr\/local\/bin:\$PATH
- COPY ：拷贝宿主机本地文件倒镜像的指定目录。语法：COPY 宿主机路径 目标路径(镜像内路径) 例如：COPY \/usr\/local\/bin\/
  \/usr\/local\/bin\/
- RUN ：运行命令，执行linux的shell命令，一般是安装过程的命令。语法：RUN 命令 例如：RUN apt-get update && apt-get install -y curl
- EXPOSE ：暴露端口，指定容器运行时监听的端口，是给镜像使用者看的。语法：EXPOSE 端口 例如：EXPOSE 80
- ENTRYPOINT ：镜像中应用的启动命令，容器运行时调用。语法：ENTRYPOINT 命令 例如：ENTRYPOINT java -jar xxx.jar
### 指令(附录)

[Dockerfile 参考 |Docker 文档](https://docs.docker.com/reference/dockerfile/)

| 保留字            | 作用                                                                                                                                                                                                                                                                |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **FROM**       | **当前镜像是基于哪个镜像的** `第一个指令必须是FROM`。\<br /\>语法：FROM \<image\>[:\<tag\>]                                                                                                                                                                                               |
| **ENV**        | **用来在构建镜像过程中设置环境变量**。\<br /\>语法：ENV \<key\> \<value\> 或者 ENV \<key\>=\<value\>  \<br /\>例如：ENV MY_PATH /usr/mytest 也可以在其它指令使用，比如：WORKDIR $MY_PATH                                                                                                                 |
| **COPY**       | **类似于ADD，拷贝文件和目录到镜像中 将从构建上下文目录中<原路径>的文件/目录复制到新的一层的镜像内的\<目标路径\>位置**\<br /\>语法：COPY src dest 或者 COPY ["src","dest"] src：源路径 dest：目标路径                                                                                                                               |
| **RUN**        | **容器构建时需要运行的指令。**\<br /\>语法：RUN \<命令行命令\> 或者 RUN ["/bin/bash", "-c", "echo hello"] 写法等价 RUN /bin/bash -c echo hello                                                                                                                                               |
| **EXPOSE**     | **当前容器对外暴露出的端口号，TCP（默） 或 UDP。**\<br /\>语法：EXPOSE 80/tcp                                                                                                                                                                                                           |
| **ENTRYPOINT** | **指定一个容器启动时要运行的命令 ENTRYPOINT 的目的和 CMD 一样，都是在指定容器启动程序及其参数。ENTRYPOINT可以和CMD一起用，一般是变参才会使用 CMD ，这里的 CMD 等于是在给 ENTRYPOINT 传参**\<br /\> ENTRYPOINT 不会被 docker run 之后的参数替换。\<br /\>语法：ENTRYPOINT  ["executable", "param1", "param2"] 或者 ENTRYPOINT command param1 param2 |
| MAINTAINER     | **镜像维护者的姓名和邮箱地址。** \<br /\>语法：MAINTAINER \<name\>                                                                                                                                                                                                                 |
| **WORKDIR**    | **改变工作目录，指定在创建容器后，终端默认登录进来的工作目录，一个落脚点。** docker run 之后默认目录位置\<br /\>语法：WORKDIR 路径 \<br /\>例如：WORKDIR /usr/var                                                                                                                                                     |
| **ADD**        | **将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar包。** \<br /\>语法：ADD 宿主机文件路径 容器路径\<br /\>例如：ADD hom* /mydir/       通配符添加多个文件                                                                                                                                                  |
| **VOLUME**     | **容器数据卷，用于数据保存和持久化工作，用于容器运行时可以挂在到宿主机的目录**\<br /\>语法：VOLUME ["/data"]                                                                                                                                                                                              |
| **CMD**        | **指定一个容器启动时要运行的命令 Dockerfile 中可以有多个CMD指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换。** RUN 是在build时运行，CMD 是在 dokcer run 时运行。注意 ENTRYPOINT 存在时，CMD 就是传参 CMD ["参数1","参数2",...]\<br /\> 语法：两种格式 shell 和 exec：CMD \<命令\> 或 CMD ["可执行文件","参数1","参数2",...]                     |

**注意：**

- CMD

  理解：Dockerfile中可以有多个CMD指令，但只有最后一个生效，CMD会被docker run之后的参数替换。

  比如 tomcat 镜像的 DockerFile 最后部分如下：

  ```dockerfile
  EXPOSE 8080
  CMD ["catalina.sh", "run"]
  ```

  正常运行命令：**docker run -it -p 8080:8080 镜像id  **，但是如果加参数运行命令：**docker run -it -p 8080:8080 镜像id
  /bin/bash**

  那么  **CMD ["catalina.sh", "run"]**  会被 **/bin/bash **替换，相当于加了如下代码：

  ```dockerfile
  EXPOSE 8080
  CMD ["catalina.sh", "run"]
  # 加了如下代码，也就应证了，Dockerfile 中可以有多个CMD指令，但只有最后一个生效
  CMD ["/bin/bash", "run"]
  ```


- ENTRYPOINT

  ![1711024229960](/static/images/docker/1711024229960.jpg)

  ```dockerfile
  # 定参
  ENTRYPOINT ["nginx","-c"]
  # 变参
  CMD ["/etc/nginx/nginx.conf"] 
  ```

| 是否传参     | 按照dockerfile编写执行               | 传参运行                                         |
|----------|--------------------------------|----------------------------------------------|
| Docker命令 | docker run nginx:test          | docker run nginx:test -c /etc/nginx/new.conf |
| 衍生出的实际命令 | nginx -c /etc/nginx/nginx.conf | nginx -c /etc/nginx/new.conf                 |

docker run nginx:test -c /etc/nginx/new.conf 运行后变为如下代码：

```dockerfile
# 定参
ENTRYPOINT ["nginx","-c"] 
# 变参
CMD ["/etc/nginx/nginx.conf"] 
# 变参，增加以下代码（CMD 会被docker run 之后的参数替换）
CMD ["/etc/nginx/new.conf"] 
```

那么原来 nginx -c /etc/nginx/nginx.conf 就变为 nginx -c /etc/nginx/new.conf

### 构建 Dokcerfile 步骤

- 编写 Dokcerfile 文件

- docker build 命令构建镜像

  ```shell
  # 要起镜像名字和版本标签， TAG后面还有个点指 Dcokerfile 位置，点表示当前
  docker build 新镜像名:TAG .
  ```

- docker run 运行镜像创建容器实例，参考：

  ```shell
  docker run -it 新镜像名:TAG /bin/bash
  ```

### Dokcerfile 基础知识

- 保留字必须大写 且至少有一个参数
- 指令从上倒下，按顺序执行
- \# 注释
- 每条指令都会创建一个新的镜像层并对进行提交

### Dokcerfile 执行流程

- docker 从基础镜像运行一个容器

## Dockerfile 部署 springboot 项目到docker

1. 编译 jar 包
2. 编写 Dockerfile
3.

## Docker 转移所有环境到 新服务器

1. 查看所有容器

   ```shell
   docker ps
   ```


2. 查看所有镜像

   ```shell
   docker images
   ```

3. 将需要转移的容器保存为镜像

   ```shell
   # 参考之前指令
   docker commit 容器名或id 新镜像名
   ```

4. 将已有镜像保存为 tar 文件，使用docker save 命令

   ```shell
   # 方式一
   docker save -o 文件名.tar 新镜像
   # 方式二
   docker save 新镜像 > 文件名.tar 
   # 多个
   docker save 新镜像1 新镜像2 > 文件名.tar
   ```

   保存成功（没有提示），`ls` 命令查看是否生成 tar 文件

5. 将 tar 文件转到新的服务器上（使用Termius（Mac）、WinScp（Window）等工具）

6. 执行命令加载 tar 包和运行镜像

   ```shell
   docker load < xxx.tar
   # 或
   docker load -i xxx.tar
   ```

## docker 部署服务端
```dockerfile
# 使用 Centos 7 作为基础镜像
FROM centos:7

# 将jdk17.tar.gz 文件拷贝到镜像 /usr/local 目录下
COPY jdk17.tar.gz /usr/local/
RUN tar -zxf /usr/local/jdk17.tar.gz -C /usr/local/ && rm /usr/local/jdk17.tar.gz

## 设置环境变量
ENV JAVA_HOME /usr/local/jdk-17.0.10
ENV PATH=$JAVA_HOME/bin:$PATH

ENV OSS_ACCESS_KEY_ID=xxx
ENV OSS_ACCESS_KEY_SECRET=xxx

# 统一编码
ENV LANG=en.US.UTF-8
ENV LC_ALL=en.US.UTF-8
ENV LANGUAGE=en.US.UTF-8

## 创建项目目录
RUN mkdir -p /home/xxx
WORKDIR /home/xxx

# 将项目文件拷贝到镜像 /home/xxx 目录下
COPY xxx.jar /home/xxx

# 暴露端口
EXPOSE 8080

# 运行命令
ENTRYPOINT ["java","-jar","/home/xxx/xxx.jar"]
```

```shell
# 构建镜像
docker build -t xxx:1.0 .
# 运行容器
docker run -d --name 容器名 -p 8080:8080 --network 网路名 镜像名:版本号
```

## docker 部署前端

- 创建nginx容器，参考 docker 安装 nginx及配置(要将容器加入到与后端服务容器统一网络中，在同一网络中nginx配置代理就不需要写ip地址了)
- 将前端项目打包，上传到服务器上对应的 nginx 容器映射的静态资源 html 目录下

```shell
# 创建nginx容器示例
docker run --name nginx-vensst \
-p 9001:80 \
--privileged=true \
-v /vensst/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /vensst/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /vensst/nginx/html:/usr/share/nginx/html \
-v /vensst/nginx/log:/var/log/nginx \
-v /vensst/nginx/ssl:/etc/nginx/ssl/ \
--network 网路名 \
-d nginx
```


## DockerCompose 部署
Docker Compose 通过一个单独的docker-compose.yml 模板文件（YAML 格式）来定义一组相关联的应用容器，帮助我们实现多个相互关联的Docker容器快速部署。

语法
```text
services:
  服务名:
    image: "镜像名:版本号"
    container_name: 容器名
    volumes:
      - "宿主机映射路径:容器内映射路径"
    ports:
      - "宿主机映射端口:容器内映射端口"
    networks:
      - xx网络标识
networks:
  xx网络标识:
    name: 网络名
```
示例：
```yaml
services:
  nginx-s:
    image: "nginx:1.20.2"
    container_name: nginx-c
    volumes:
      - "/vensst/nginx/html:/usr/share/nginx/html"
    ports:
      - "80:80"
    networks:
      - network-a
networks:
  network-a:
    name: network-b
```

### docker-compose.yml 文件
- 涉及服务：mysql、服务端、前端nginx
- 准备资源：sql脚本、服务端jdk、jar包、Dockerfile、前端静态资源、nginx配置文件
- 创建 docker-compose.yml文件
- 运行 docker-compose up

假设项目名为 venblog 对应 docker-compose.yml 文件配置如下：
```yaml
services:
  mysql:
    image: mysql:8
    container_name: mysql-venblog
    ports:
      - "3307:3306"
    environment:
      TZ: Asiz/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - "/vensst/mysql/data:/var/lib/mysql"
      - "/vensst/mysql/conf:/etc/mysql/conf.d"
      - "/vensst/mysql/init:/docker-entrypoint-initdb.d"
    networks:
      - venblog-net
  venblog:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: venblog-server
    ports:
      - "8080:8080"
    networks:
      - venblog-net
    depends_on:
      - mysql
  nginx:
    image: nginx:1.20.2
    container_name: nginx-venblog
    ports:
      - "80:80"
    volumes:
      - "/vensst/nginx/html:/usr/share/nginx/html"
      - "/vensst/nginx/conf/nginx.conf:/etc/nginx/nginx.conf"
      - "/vensst/nginx/conf/conf.d:/etc/nginx/conf.d"
      - "/vensst/nginx/log:/var/log/nginx"
      - "/vensst/nginx/ssl:/etc/nginx/ssl/"
    networks:
      - venblog-net
    depends_on:
      - venblog
networks:
  venblog-net:
    name: venblog

```
depends_on: 表示依赖的服务

```shell
docker compose up
```

### DockerCompose 命令

docker compose [options] [command]

- options
  - -f 指定compose文件的路径和名字，默认当前
  - -p 指定compose文件所属的project
  - -d 后台运行
- command
  - up 创建并启动所有容器
  - down 停止并删除所有容器、网络
  - ps 列出所有容器
  - logs 查看指定容器日志
  - stop 停止容器
  - start 启动容器
  - restart 重启容器
  - top 查看容器进程

- 
