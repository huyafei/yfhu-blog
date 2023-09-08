# 常用

## 生成目录树

### Windows

自带 tree 命令

```shell
tree
```

### Mac

```shell
brew install tree
```
### 常用命令

* tree -d 只显示文件夹；
* tree -L n 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3；
* tree -I pattern 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"；
* tree > tree.md 将项目结构输出到tree.md这个文件。

举个例子，如果我们要显示某个项目下3层的所有文件结构，同时又过滤node_modules文件夹，最后输出到tree.md，可以这么写

```shell
tree -L 3 -I "node_modules" > tree.md
```

