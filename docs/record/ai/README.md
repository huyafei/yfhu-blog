# AI

### 什么是大模型？

大模型, 一般也称为"大语言模型"（LLM）, 是一种基于深度学习技术训练出来的人工智能系统, 主要用于处理和生成人类语言。

大模型工作原理：通过学习大量文本，掌握了语言的规律和知识，然后根据输入的提示(prompt)生成相应的输出。
模型规模：通常包含数十亿到数千亿个参数，这些参数就像是模型的“大脑神经元”；
训练数据：使用海量文本数据进行训练，包括书籍、文章、网页等各种形式的文字内容。

### 大模型蒸馏？

大模型训练时，通常会先使用较小的模型进行训练，然后再使用较大的模型进行微调，以获得更好的性能。

### 什么是微调？

## DeepSeek 本地部署

- Ollama + dify
- Ollama + chatboxai

参考 https://www.bilibili.com/read/cv39350144/?opus_fallback=1

### 使用 Ollama 本地部署 DeepSeek

- 下载和安装[Ollama](https://ollama.com/)
  - 进入终端 输入 `ollama` 有结果表示成功
- 输入命令 `ollama serve` 浏览器 `http://localhost:11434` 打开显示 running 说明启动成功
- 选择 [DeepSeek-R1](https://ollama.com/library/deepseek-r1:671b) 语言模型
  - 根据自身电脑硬件选择模型大小
- 复制安装指令到终端安装 deepseek
  - 例如：`ollama run deepseek-r1:1.5b`  ollama run 模型名:版本号 没有则会先下载再运行
  - Ctrl + d 或输入 exit 按回车退出
- 测试在终端进行问答

### 使用 Dify 构建 DeepSeek AI 助手

可视化构建 AI 应用

- [Dify](https://dify.ai/) 安装
  - 安装 docker
  - 克隆 Dify 代码到本地： `git clone https://github.com/langgenius/dify.git`
  - 进入到源代码中的docker目录下。一键启动（默认端口：80）
    ```shell
      cd dify/docker
      # 复制 .env.example 文件到当前目录下，并重命名为 .env
      cp .env.example .env
      # 启动容器 关闭容器：docker compose down
      docker compose up -d
    ```
    修改端口 进入 .env 文件 内修改 `EXPOSE_NGINX_PORT=80` 改为 `EXPOSE_NGINX_PORT=9003`
  - 访问地址：http://localhost:9003/
  - 创建应用
    - 顶部选择 `工作室` --> 侧边选择 `创建空白应用` -->  选择 `聊天助手` --> 填写应用名称 --> 创建
  - 配置模型方式 1
    - 右上角个人中心 `设置` --> 模型供应商 --> 首次需安装模型供应商(Ollama) --> 在待配置选择 Ollama --> 点击`添加模型`
    - 模型名称填写例如：`deepseek-r1:1.5b` 使用 `ollama ls` 命令查看
    - 基础URL 同一️服务器填写（固定） `http://host.docker.internal:11434`  不同写法： `http://本机地址:11434`
    - 保存无响应？目前不知怎么回事，摸索处理不知道怎么又好了可能跟防火墙或者权限有关
  - 配置模型方式 2
    - dify 关联 Ollama，在 dify 项目 docker 文件夹下 .env 文件中末尾加上下面配置
      ```shell
        # 启用自定义模型
        CUSTOM_MODEL_ENABLED=true
        # 指定 Ollama 的 api 地址（根据环境调整ip）
        OLLAMA_API_BASE_URL=http://host.docker.internal:11434
      ```
- RAG 构建本地知识库
  - 在 dify 顶部选择 知识库 --> 创建知识库 --> 导入已有文本/同步自 Notion 内容/同步自 Web 站点 -->
    根据需求修改配置或其它 --> 最后保存处理
  - 指定分片
  - 设定
- 集成 DeepSeek 构建专属 AI 助手
  - 工作室 --> 选择对应应用 --> （编排）知识库 --> 添加

### deepseek 构建邮件自动发送

CrewAI 是一个用于构建和协调多个 AI 智能体协作的开源框架

- 多只能提写作

#### 说明

- [Ollama](https://ollama.com/) 作用是在本地机器上部署和运行大语言模型
- [Dify](https://dify.ai/) 开源的大语言模型开发平台，作用是帮助开发者快速搭建 AI 应用程序
- RAG 一种信息检索技术
- Agent ：agent 是一个代理模型智能体，它使用大语言模型来执行任务，并使用知识库来提供上下文和参考信息。
- LLMOps（Large Language Model Operations）完整定义是基于大模型的应用程序的生命周期管理平台或者工具，大模型构建分三个阶段：
  - 预训练阶段，大模型预训练通过大量的数据进行预训练，使其完成通用任务的能力。
  - 微调阶段 SFT，大模型微调通过少量数据进行微调，提高大模型数据集特定领域的准确性，提升大模型泛化能力。
  -
  - 应用开发阶段 RLHF，大模型应用开发通过RLHF来优化大模型，提高大模型效果。

###

- 编排
-

## 基于 Ai 零代码开发和部署项目

- [DeepSeek](https://www.deepseek.com/) 项目设计，[问小白](https://www.wenxiaobai.com/chat/200006) 代替
- Cursor AI编码
- Devbox 环境管理
- Sealos 云原生部署

## ai

deepseek 底层生成能力，例如：生成文章、回答问题，如果要扩展能力比如绘图、发邮件就需要集成其它 agent 实现功能
manus 主要表现为执行能力，manus 相当于在其它厂商 大模型（例如：deepseek） 基础上，通过多智能体功能协作完成工作
两者互补关系
