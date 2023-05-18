# github

## github 自动化部署 nuxt 项目到服务器

::: tip

- [github marketplace actions](https://github.com/marketplace?type=actions)
- [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)

:::

### 部署前准备

1. nuxt项目
2. 云服务器
3. [在linux服务器上安装 nodejs](/record/linux/#安装nodejs)
4. 通过node全局安装 pm2

    ```shell
    # 全局安装
    npm install pm2 -g
    
    # 建立全局软连接
    ln -s /usr/local/node/node-v16.20.0-linux-x64/bin/pm2 /usr/local/bin/
    
    # 验证
    pm2 -v
    ```

### github 配置

1. 生成 TOKEN
   在 `github` 上生成 `token`，相当于权限，生成token流程如下：

   `settings` -> `Developer settings` -> `Personal access tokens` -> `Fine-grained tokens` -> `Generate new token`

   ![github设置](/static/images/github/setting.png)
   ![github developer设置](/static/images/github/developer_settings.png)
   ![github 生成token](/static/images/github/generrater_new_token.png)

   **备注**
    - 生成的token要保存起来，因为这个token只会显示一次，我们要在下一步secrets中配置

2. 配置 secrets
   在 `github` 项目中配置 `secrets`，流程如下：

   `项目settings` -> ` Secrets and variables` -> `New repository secret` -> `Secrets`

   ![github secrets](/static/images/github/secrets.png)
   ![github secret 添加](/static/images/github/secret_add.png)

   分别配置TOKEN、HOST、PORT、USERNAME、PASSWORD。
    - TOKEN：上一步生成的token
    - HOST：服务器地址
    - PORT：服务器端口，默认是 22
    - USERNAME：服务器用户名，默认是 root
    - PASSWORD：服务器密码

### 项目配置

1. nuxt.config.js
   在 `nuxt.config.js` 文件中配置 `server` 选项，配置如下：

    ```js
    server: {
      port: 1223,
      host: '0.0.0.0'
    ```

2. pm2.config.json
   在项目下新建 `pm2.config.json`文件，用于配置 `pm2` 运行的脚本文件，配置如下：

    ```json
    {
      "apps": [
        {
          "name": "yfhu", // 项目名称
          "script": "npm", // 项目运行脚本
          "args": "start" // 脚本运行命令
        }
      ]
    }
    ```

3. main.yml

   在项目下新建 `.github`文件夹，在 `.github` 文件夹下新建 `workflows` 文件夹，然后在 `workflows`文件夹下新建 `main.yml`
   文件(`.github > workflows > main.yml`)， 配置如下：

    ```yml
    # 自动化部署名称
    name: CI
    
    # 触发部署的条件 当 master 分支, 有 push 的操作, 即可触发。
    on:
      # 在推或拉请求事件上触发工作流，但仅用于主分支
      push:
        #tags:
         # - 'v*'
        branches: # 此处不仅限于监听分支, 还可以监听 tag
          - master
        paths-ignore: # 下列文件的变更不触发部署，可以自行添加
          - README.md
    
    # 一个工作流运行由一个或多个作业组成，这些作业可以顺序地或并行地运行
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
    
          # 下载源码
          - name: Checkout
            uses: actions/checkout@master
    
          # 安装 node并打包构建
          - name: Setup Node.js
            uses: actions/setup-node@v2
            with:
              # 选择要使用的 node 版本
              node-version: '14'
          - run: npm install
          - run: npm run build
          - run: tar -zcvf release.tgz .nuxt static nuxt.config.js package.json pm2.config.json
    
          # 发布 Release
          - name: Create Release
            id: create_release
            uses: actions/create-release@master
            env:
              GITHUB_TOKEN: ${{ secrets.TOKEN }}
            with:
              tag_name: ${{ github.ref }}
              release_name: Release ${{ github.ref }}
              draft: false
              prerelease: false
    
          # 上传构建结果到 Release
          # 将 release.tgz 上传到 github 上
          - name: Upload Release Asset
            id: upload-release-asset
            uses: actions/upload-release-asset@master
            env:
              GITHUB_TOKEN: ${{ secrets.TOKEN }}
            with:
              upload_url: ${{ steps.create_release.outputs.upload_url }}
              asset_path: ./release.tgz
              asset_name: release.tgz
              asset_content_type: application/x-tgz
    
          # 部署到服务器
          - name: Deploy
            uses: appleboy/ssh-action@master
            with:
              host: ${{ secrets.HOST }}
              username: ${{ secrets.USERNAME }}
              password: ${{ secrets.PASSWORD }}
              port: ${{ secrets.PORT }}
              script: |
                cd /{serviceFile}/{projectFile}
                wget https://github.com/{githubName}/{libName}/releases/latest/download/release.tgz -O release.tgz
                tar zxvf release.tgz
                rm -rf release.tgz
                npm install --production
                npm run start
                pm2 reload pm2.config.json
    
    ```

**备注：**

* secrets: github 仓库的 secrets 配置（TOKEN、HOST、PORT、USERNAME、PASSWORD）
* serviceFile、projectFile: 服务器上存放项目的文件夹路径地址
* githubName: github用户名
* libName: github项目名

### 验证

1. 推送代码到master分支上
2. 在该仓库 actions 标签查看工作流运行情况，可以点进去查看详细情况，如果有报错根据相应问题排查解决
   ![仓库actions位置](/static/images/github/actions.png)
   ![仓库actions详情](/static/images/github/actions_detail.png)

### 遇到的问题

1. docker使用nginx容器代理访问应用页面无法展示页面，提示502 bad gateway
   nginx配置：
   ```nginx
      server {
          server_name  yfhu.vensst.com;
        
          location / {
              # 原
              #proxy_pass http://localhost:1223;
              # 现 使用172.18.0.1代替localhost
              proxy_pass http://172.18.0.1:1223;
          }      
      }
   ```
    1. 产生的原因
        - nginx 使用的是 docker 安装启动的，自动部署的项目是在服务器上用node启动的，docker默认启动的nginx使用的是bridge模式，
          无法访问宿主机的ip
          ![docker运行nginx网络模式](/static/images/docker/docker_nginx_network_mode.png)

    2. 解决方式
        1. 使用 docker 虚拟网卡 docker0 代理 localhost
           在安装Docker的时候，会在宿主机安装一个虚拟网关 docker0 ，我们可以使用宿主机在 docker0 上的IP地址来代替
           localhost 。
           使用 `ip addr show docker0` 查看

        2. 使用host网络
           Docker容器运行运行nginx，默认是 bridge ，即桥接网络，以桥接模式连接到宿主机；
           host 是宿主网络，即与宿主机共用网络； none 则表示无网络，容器将无法联网，当容器使用 host
           网络时，容器与宿主共用网络，这样就能在容器中访问宿主机网络，那么容器的 localhost 就是宿主机的 localhost
         ```shell
           docker run -d --name nginx --network host nginx
         ```
       上面的命令中，没有必要像前面一样使用 -p 80:80 -p 443:443 来映射端口，是因为本身与宿主机共用了网络，容器中暴露端口等同于宿主机暴露端口。

       使用host网络不需要修改 nginx.conf ，仍然可以使用 localhost ，因而通用性比上一种方法好。但是，由于 host 网络没有
       bridge
       网络的隔离性好，使用 host 网络安全性不如 bridge 高。
   
**备注：**

- [Docker容器访问宿主机网络的方法](https://www.yingsoo.com/news/posts/61151.html)
- [docker启动nginx无法正常代理问题解决](https://blog.csdn.net/fengxiandada/article/details/130111736)
