## 搭建 cli 脚手架 发布到 npm 教程

### 初始化

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
>许多npm包都具有一个或多个要安装到PATH中的可执行文件。package.json中提供一个字段bin，该字段是命令名到本地文件名的映射。在安装时，npm会将文件符号链接到prefix/bin以进行全局安装或./node_modules/.bin/本地安装。

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
    说明：  owner：仓库所有人，name：名称


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


### 使用 npm link 挂载全局进行 本地测试

```shell
# npm link 包链接地址
npm link  D:\huyafei\001-GitHub\vensst-cli
```

process.exit()
指示 Node.js 以 code 的退出状态同步终止进程 [参考](http://nodejs.cn/api/process/process_exit_code.html)


