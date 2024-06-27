# HarmonyOs

## 配置命令行工具 ohpm

* 预先配置好 node.js。
* 参考
  [官网教程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-ohpm-0000001490235312-V2)
  1，2步骤
* mac 将 ohpm 配置全局环境变量中
  * 在 .zshrc 文件中添加如下内容：
  ```shell
    export OHPM_HOME=/home/xx/Downloads/ohpm #本处路径请替换为ohpm的安装路径
    export PATH=${OHPM_HOME}/bin:${PATH}
  ```
  查看 ohpm 路径：`DevEco Studio > Preferences > Build, Execution, Deployment > Ohpm`
  ![Ohpm路径](/static/images/harmonyOS/ohpm_path.png)
  **备注：**  
  - 如果是 bash 为 shell（mac 默认 zsh 为默认 shell），则在 `.bash_profile` 中添加环境变量
  - 执行 `ls ~/.bash_profile` 查看该文件是否存在，不存在则创建 `touch ~/.bash_profile`
  - `source .bash_profile`
* `source .zshrc`
* `ohpm -v`
