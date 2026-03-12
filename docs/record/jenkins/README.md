# jenkins

## 安装jdk

## 问题

### 忘记密码

1. docker 容器中修改

    ```shell
    # 进入容器
    docker exec -it containerId /bin/bash
    # 进入用户目录
    cd /var/jenkins_home/users
    # 列出用户
    ls
    # 修改 config.xml (没有vim 可以安装)
    vim config.xml
    ```

   找到 `<passwordHash>` 将`#jbcrypt:*****`替换下面内容（密码：123456）：

    ```text
      #jbcrypt:$2a$10$LxMm9HqAI/R4z7gL57qTouW/Mrz8uSaBpCGKvKc7K6dK.g/0yk/uq
    ```

   保存退出

2. 宿主机中修改

   查看容器详情： docker inspect ContainerID ，在 `"Mounts"` 中找到 `"Destination": "/var/jenkins_home"`，对应的`“Source”: "宿主机路径"`，重复步骤1
