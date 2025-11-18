# node

## 设置淘宝镜像源

- 查看镜像源

```shell
npm config get registry
```

- 临时使用

```shell
npm --registry https://registry.npm.taobao.org install express
```

- 永久使用

```shell
npm config set registry https://registry.npm.taobao.org
# 恢复默认 或 npm config delete registry
npm config set registry https://registry.npmjs.org 
```

- 使用cnpm代替npm

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 常用命令

- `npm help` 查看 npm 帮助，简写 `npm -h`
- `npm -v` 查看 npm 版本
- `npm install npm@latest --global` 更新 npm 版本，简写 `npm i npm@latest -g`
- `npm init` 初始化 package.json 文件
- `npm install [package]` 安装包，默认安装最新版本，简写 `npm i [package]`
- `npm install [package]@[version]`
  安装包的指定版本，版本号可以是精确的版本号，也可以是模糊的版本号，简写 `npm i [package]@[version]`
- `npm install [package] --global` 全局安装包，简写 `npm i [package] -g`
- `npm install [package] --save` 安装包并添加到 package.json 的 dependencies 中，简写 `npm i [package] -S`
- `npm install [package] --save-dev` 安装包并添加到 package.json 的 devDependencies 中，简写 `npm i [package] -D`
- `npm install [package] --save-optional` 安装包并添加到 package.json 的 optionalDependencies
  中，简写 `npm i [package] -O`
- `npm install [package] --no-save` 安装包但不添加到 package.json 中，简写 `npm i [package] -X`
- `npm uninstall [package]` 卸载包，简写 `npm un [package]`
- `npm update [package]` 更新包，简写 `npm up [package]`
- `npm update [package]@[version]` 更新包到指定版本
- `npm view [package] versions` 查看包的所有版本
- `npm view [package] version` 查看包的最新版本
- `npm view [package] dependencies` 查看包的所有依赖
- `npm view [package] repository.url` 查看包的源码仓库地址
- `npm view [package] engines` 查看包的运行环境，当前依赖支持node最低版本号

## package.json 说明

```json
{
  "name": "my_package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "my_dep": "^1.0.0"
  },
  "devDependencies": {
    "my_test_framework": "^3.1.0"
  }
}
```

- name: 包名
- version: 版本号
- description: 包描述
- main: 入口文件
- scripts: 脚本命令
- author: 作者
- license: 许可证
- dependencies: 生产环境依赖
- devDependencies: 开发环境依赖

### 依赖包版本号说明

1. 版本号组成说明

   版本号组成：主版本号.次版本号.补丁版本号
    ```json
    {
      "dependencies": {
        "vue": "2.6.12"
      }
    }
    
    ```

   如上，vue 包的版本号为 2.6.12，表示主版本号为 2，次版本号为 6，补丁版本号为 12。

- 主版本号（Major releases）：当你做了不兼容的 API 修改，一般是大版本迭代
- 次版本号（Minor releases）：当你做了向下兼容的功能性新增，一般是小版本迭代
- 补丁版本号（Patch releases）：当你做了向下兼容的问题修正，修改一些小bug。偶数是稳定的，奇数是测试版本

2. 版本号符号说明

```json
{
  "dependencies": {
    "vue": "^2.6.12",
    "jQuery": "~3.1.2",
    "less": "*3.13.1",
    "scss": "*",
    "axios": "2.0.1"
  }
}

```

- ^: 表示安装最新的次版本号，主版本号不变，如上表示安装 vue 2.x.x 的最新版本
- ~: 表示安装最新的补丁版本号，主版本号和次版本号不变，即安装 jQuery 3.1.x 的最新版本，
- *: 表示安装最新的版本，即安装 less、 scss的最新版本
- 空: 表示安装指定的版本，锁定版本，即安装 axios 2.0.1 版本

### resolutions

假设项目依赖于包 packageA 而 packageA 包中又依赖于 packageB包，
由于安全、功能等问题需要升级packageB包，正常是升级packageA包带动packageB包升级，但有时可能会packageA包没有升级或者不维护了，这时候就可以使用
resolutions 来升级packageB包升级。

```json
{
  "name": "project",
  "version": "1.0.0",
  "dependencies": {
    "packageA": "1.0.0"
  },
  "resolutions": {
    "packageA/packageB": "1.1.1"
  }
}
```

## 管理node版本

### nvm-windows

1. 下载

   [nvm-windows下载](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.11)
   最下面 [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.zip)

2. 安装

- 解压后运行安装包 nvm-setup.exe
- 安装路径不要有中文或空格
- 选择nodejs路径
- 安装完成后，打开cmd，输入 nvm -v 查看版本号，如果出现版本号，则安装成功

3. 常用命令

- `nvm list` 查看已安装的node版本
- `nvm install 10.16.0` 安装指定版本的node
- `nvm use 10.16.0` 切换node版本
- `nvm uninstall 10.16.0` 卸载指定版本的node
- `nvm on` 开启node版本管理
- `nvm off` 关闭node版本管理
- `nvm proxy` 设置代理
- `nvm node_mirror` 设置镜像
- `nvm npm_mirror` 设置npm镜像

## 搭建本地服务

### 准备

1. 创建一个项目文件夹 `server` 并进入文件夹内
    ```shell
        mkdir server
        cd server
    ```
2. 初始化 `package.json`
    ```shell
      npm init -y
    ```
3. 安装 `express`
    ```shell
    npm install express -D
    ```

### 前端

模拟部署前端项目到服务器

1. 安装 `http-proxy-middleware` 依赖（处理跨域问题）
    ```shell
        npm install http-proxy-middleware
    ```
2. 新建 `views` 文件夹，再其下面新增 `index.html` 页面
3. 新建 `viewServer.js` 内容如下
    ```js
      let express = require('express');
      // http 代理中间件
      let proxy = require('http-proxy-middleware');
      let app = express();
      // 指定静态资源文件夹地址
      app.use(express.static('./views'));
        
      // api接口代理中间件
       app.use('/api', proxy.createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: false,
          // pathRewrite: {
          //   "^/api": ""
          // }
       }));
        
       app.listen(3000,()=>{
        console.log('development server is running at http://localhost:3000');
       });

    ```

4. 修改 `package.json` 中 `scripts` 运行脚本
    ```json
    {
      "scripts": {
        "dev": "node viewServer.js"
      }
    }
    ```
5. 运行 `npm run dev`

### 后端

模拟接口服务器返回数据

1. 新建 `apiServer.js` 内容如下
    ```js
      // 引入
      let express = require('express');
      // 创建 Express 应用
      let app = express();
    
      // 设置允许跨域访问该服务
      app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
      });
      
      // 接口一
      app.get("/api/getUserList", (req, res) => {
        let arr = [ {name:"小明"},{name:"红"}]
        res.send({
        code: 200,
        data: arr
        });
      });
      // 接口二
      app.post("/api/EHRData/GetTjContent", (req, res) => {
        res.send({
          code: 200,
          data: {
            username:"小明",
            age:18,
          }
        });
      });
      // 启动一个服务器并在端口 3000 上监听连接
      app.listen(5000, () => {
        console.log("api Interface server is running at http://localhost:5000");
      });
    
    ```
2. 修改 `package.json` 中 `scripts` 运行脚本
    ```json
    {
      "scripts": {
        "dev": "node viewServer.js",
        "serve": "node apiServer.js"
      }
    }
    ```
3. 运行 `npm run serve`

## 发布包到 npm

### 手动发布

1. 注册 npm 账号
2. 登录 npm 账号
    ```shell
    npm login
    ```
3. 发布包
    ```shell
    npm publish
   	# 如果是名是带有@xx/xx符号这种（npm会认为要发布私包，私包需要收费），例如： @vensst/js-toolkit 使用下面命令，
   	npm publish --access public
    ```
4. 更新包
    ```shell
    npm version patch
    npm publish
    ```
5. 删除包
    ```shell
    npm unpublish [package]@[version]
    ```
6. 撤销发布
    ```shell
    npm unpublish [package]@[version] --force
    ```
7. 查看包
    ```shell
    npm view [package]@[version]
    ```

### github 自动发布

在 npm 官网上生成自动化授权 token：

- npm 登录账号。
- 点击头像，选择 `Access Tokens` 选项。
- 点击 `Generate New Token` 按钮，选择 `Classic Token` 选项。
- 输入名称，不限制，例如：NPM_TOKEN；单选选择 Automation 选项。
- 点击 `Generate Token` 按钮生成 token，复制保存生成的 token，防止丢失，不要泄漏出去。

在 Github 项目上配置 Secrets：

- 登录 Github 选择要发布的项目仓库。
- 点击 `Settings` 选项。
- 新创建的项目，默认是开启 Actions 功能的，如果没有开启，需要手动在 Settings 里的 Actions > General 选项开启。
- 点击 `Secrets and variables` 下的 `Actions` 选项，点击 `New repository secret` 按钮。
- name：输入 NPM_TOKEN，value：输入刚才生成的 token，点击 `Add secret` 按钮保存。
  ![github配置](/static/images/node/github_setting.png)

创建 GitHub action：

- 在项目根目录下创建 .github/workflows 目录。
- 在 .github/workflows 目录下创建 publish.yml 文件。
- publish.yml 文件内容参考如下（具体根据自身需求）：

```yml
# 工作流名称，不设置的话默认取配置文件名
name: npm-publish

# 触发部署的条件 当 master 分支, 有 push 的操作, 即可触发。
on:
  # 在推或拉请求事件上触发工作流，但仅用于主分支
  push:
    tags:
      - 'v*'
      # branches: # 此处不仅限于监听分支, 还可监听 tag
      # - master
# 一个工作流运行由一个或多个任务组成，这些任务可以顺序地或并行地运行
jobs:
  # 任务名称
  publish-npm:
    # 任务运行的容器类型（虚拟机环境）
    runs-on: ubuntu-latest
    # 任务执行的步骤
    steps:
      # 步骤名称
      - name: Checkout
        # 使用的操作 actions，可以使用公共仓库，本地仓库，别人的仓库的action
        # 拉取代码
        uses: actions/checkout@v2
      # 打包构建
      - name: Build
        uses: actions/setup-node@v1
        # 参数
        with:
          node-version: 14
          registry-url: https://registry.npmjs.org/
      - run: npm install
      - run: npm run build
      # npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/@vensst/js-tookit - You must sign up for private packages
      # @xxx/xxxx   npm会认为要发布私包，私包需要收费，需将发布命令改成： npm publish --access public
      - name: publish-npm
        run: npm publish --access public
        env:
          # 配置的密钥
          NODE_AUTH_TOKEN: ${{secrets.NPM_EXPORT_FILE_PUBLISH_TOKEN}}
```

### 搭建 cli 脚手架 发布到 npm 教程

#### 初始化

1. 新建项目

```shell
mkdir project && cd project
npm init -y
```

2. 在项目文件夹下，新建 `bin` 文件夹，在其文件夹下新建 `vensst.js` 文件，并写入如下代码：

```js
#!/usr/bin/env node
console.log('hello world')
```

注意：`#!/usr/bin/env node` 必须放在第一行，否则会报错。指定脚本的解释程序用 `node`

执行 `node ./bin/vensst.js` ，在控制台就会打印出 `hello world`。

3. 在 `package.json` 文件中，加入`bin`字段

    ```text
    {
      //...
      "bin": {
        "vensst": "./bin/vensst.js"
      },
      //...
    }
    ```

>
许多npm包都具有一个或多个要安装到PATH中的可执行文件。package.json中提供一个字段bin，该字段是命令名到本地文件名的映射。在安装时，npm会将文件符号链接到prefix/bin以进行全局安装或./node_modules/.bin/本地安装。

5. 安装第三方依赖

```shell
npm install chalk commander download-git-repo inquirer ora log-symbols figlet
```

- commander [前往](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)  
  命令行工具，用于解析终端的输入命令，这样我们就能在终端输入命令然后执行代码，如 vue create appName  
  .option()方法来定义选项,可以接收三个参数：
  1. 自定义标志必须：分为长短标识，中间用逗号、竖线或者空格分割；标志后面可跟必须参数或可选参数，前者用<>包含，后者用[]包含。
     .option('-d,--debug')
     长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔
     .option('-d,--debug-bug')
     标志后面可跟必须参数或可选参数，前者用<>包含，后者用[]包含。
     .option('-d,--debug' [type])
  2. 选项描述省略不报错：在使用 --help 命令时显示标志描述
     .option('-d,--debug','这是描述')
  3. 默认值可省略：当没有传入参数时则会使用默认值，
     .option('-d,--debug','这是描述'，'默认值')

- download-git-repo [前往](https://github.com/JessonL/download-git-repo)
  在 node中通过git下载（GitHub, GitLab, Bitbucket）代码  
  download(repository, destination, options, callback)；
  - repository
    - GitHub - github:owner/name or simply owner/name
    - GitLab - gitlab:owner/name
    - Bitbucket - bitbucket:owner/name
      说明： owner：仓库所有人，name：名称


- inquirer [前往](https://github.com/SBoudrias/Inquirer.js#readme)
  命令行交互工具，用于命令行交互问询操作
  https://blog.csdn.net/qq_26733915/article/details/80461257

- ora [前往](https://github.com/sindresorhus/ora#readme)
  用于实现node命令环境的loading效果，并显示各种状态的图标,显示 loading 动画

- chalk [前往](https://github.com/chalk/chalk#readme)
  用于修改终端命令行字体颜色

- log-symbols [前往](https://github.com/sindresorhus/log-symbols)
  用于在打印输出的内容中加入icon更友好（显示出 √ 或 × 等的图标）

- handlebars.js [前往](https://handlebarsjs.com/zh/guide)
  模板引擎工具，可用于修改package.json中相关字段

- child_process (node自带) [前往](https://nodejs.cn/api/child_process.html)
  子进程，用于执行命令行的指令

- figlet [前往](https://github.com/patorjk/figlet.js#readme)
  字体样式

#### handlebars.js 使用方式

```js
const Handlebars = require("handlebars");
// package.json文件路径
const packagePath = `${process.cwd()}/${obj.projectName}/package.json`
// 读取 package.json 文件内容，并转换为json对象
const packageContent = fs.readFileSync(packagePath, "utf-8")
// 编译替换
const packageResult = Handlebars.compile(packageContent)({projectName: obj.projectName, version: "0.1.0"})
// 重写到本地文件
fs.writeFileSync(packagePath, packageResult);
```

###  本地测试

#### 使用 npm link 挂载全局进行
```shell
# npm link 包链接地址
npm link  D:\huyafei\001-GitHub\vensst-cli
```

process.exit()
指示 Node.js 以 code 的退出状态同步终止进程 [参考](http://nodejs.cn/api/process/process_exit_code.html)

#### 使用 npm pack 打包成 tgz 文件进行测试

1. `npm run build` 打包生成 dist 文件夹
2. 在项目根目录下执行 `npm pack` 命令，会生成一个 `.tgz` 的压缩包文件 
3. 在其他项目中执行 `npm install <tgz文件路径>` 进行安装


### node-ssh 部署本地项目

vite 项目示例：

创建deploy.config.js、deploy.js 文件，并写入如下代码：
```js
// deploy.config.js
module.exports = {
  host: '1.1.1.1',
  port: 22,
  username: 'root',
  password: '123456',
  localPath: 'dist',
  remotePath: '/www/web/myApp',
  buildCommand: 'npm run build',
  isReloadNginx: false,
  backupKeep: 3
}

// deploy.js
const { NodeSSH } = require('node-ssh')
const { execSync } = require('child_process')
const config = require('./deploy.config.js')

const ssh = new NodeSSH()

async function deploy () {
  validateConfig(config)

  const localDir = config.localPath || 'dist'
  const remoteDir = config.remotePath.replace(/\/$/, '')
  const timestamp = new Date()
    .toISOString()
    .replace(/[-T:\.Z]/g, '')
    .slice(0, 14)
  const backupDir = `${remoteDir}_backup_${timestamp}`
  const steps = config.isReloadNginx ? 5 : 4

  let backupCreated = false // 是否创建了备份，决定是否回滚

  try {
    // 1️⃣ 本地构建
    console.log(`🚧 [1/${steps}] 本地构建项目 (${localDir})...`)
    execSync(config.buildCommand || 'npm run build', { stdio: 'inherit' })

    // 2️⃣ 连接服务器
    console.log(`🔗 [2/${steps}] 连接服务器: ${config.host}...`)
    await ssh.connect({
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
    })

    // 3️⃣ 检查远程目录是否存在并备份
    console.log(`🗂️ [3/${steps}] 检查远程目录是否存在...`)
    const check = await ssh.execCommand(`if [ -d ${remoteDir} ]; then echo "yes"; fi;`)
    const exists = check.stdout.trim() === 'yes'

    if (exists) {
      console.log(`📦 发现旧版本，开始备份为：${backupDir}`)
      await ssh.execCommand(`mv ${remoteDir} ${backupDir}`)
      backupCreated = true

      // 清理多余备份
      if (config.backupKeep && Number.isInteger(config.backupKeep) && config.backupKeep > 0) {
        console.log(`🗑️ 检查多余备份，保留最近 ${config.backupKeep} 个...`)
        const listRes = await ssh.execCommand(`ls -1d ${remoteDir}_backup_* 2>/dev/null | sort -r`)
        if (listRes.stdout) {
          const backups = listRes.stdout.split('\n')
          const toDelete = backups.slice(config.backupKeep)
          if (toDelete.length > 0) {
            console.log(`🗑️ 删除旧备份：\n${toDelete.join('\n')}`)
            await ssh.execCommand(`rm -rf ${toDelete.join(' ')}`)
          } else {
            console.log('✅ 没有多余备份需要删除')
          }
        }
      }
    } else {
      console.log('📁 远程不存在旧目录，跳过备份')
    }

    // 4️⃣ 创建远程目录
    console.log(`📂 创建远程部署目录 ${remoteDir}...`)
    await ssh.execCommand(`mkdir -p ${remoteDir}`)

    // 5️⃣ 上传新 dist
    console.log(`📤 [4/${steps}] 上传 ${localDir} → ${remoteDir} ...`)
    await ssh.putDirectory(localDir, remoteDir, {
      recursive: true,
      concurrency: 10,
    })

    // 6️⃣ 可选重载 Nginx
    if (config.isReloadNginx) {
      console.log(`🔁 [5/${steps}] 重载 nginx...`)
      const nginxReload = await ssh.execCommand('systemctl reload nginx')
      if (nginxReload.stderr) {
        throw new Error(`Nginx reload 出错：${nginxReload.stderr}`)
      }
    }

    console.log('🎉 部署成功！')
    if (backupCreated) console.log(`📦 旧版本备份在：${backupDir}`)
  } catch (err) {
    console.error('❌ 部署失败:', err.message || err)

    if (backupCreated) {
      console.log('🔄 触发自动回滚到最近备份...')
      try {
        // 找最近一个备份
        const listRes = await ssh.execCommand(`ls -1d ${remoteDir}_backup_* 2>/dev/null | sort -r`)
        const backups = listRes.stdout ? listRes.stdout.split('\n') : []
        if (backups.length > 0) {
          const latestBackup = backups[0]
          console.log(`♻️ 回滚到 ${latestBackup} ...`)
          await ssh.execCommand(`rm -rf ${remoteDir}`)
          await ssh.execCommand(`mv ${latestBackup} ${remoteDir}`)
          if (config.isReloadNginx) await ssh.execCommand('systemctl reload nginx')
          console.log('✅ 回滚完成')
        } else {
          console.log('⚠️ 没有备份可回滚，请手动处理')
        }
      } catch (rollbackErr) {
        console.error('❌ 自动回滚失败:', rollbackErr)
      }
    } else {
      console.log('⚠️ 未创建备份，无需回滚')
    }
  } finally {
    ssh.dispose()
  }
}

// 配置验证
function validateConfig (cfg) {
  const required = ['host', 'username', 'remotePath']
  required.forEach(key => {
    if (!cfg[key]) throw new Error(`deploy.config.js 缺少必要字段：${key}`)
  })
  if (!cfg.localPath) console.warn('⚠️ 未设置 localPath，默认使用: dist')
}

// 执行部署
deploy()


```
package.json 添加脚本：
```json
{
  "scripts": {
    "deploy": "node deploy.js"
  }
}
```
运行 `node deploy.js` 即可进行部署
