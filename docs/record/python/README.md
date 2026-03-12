# Python

适合人群：Python 小白 + 有前端（HTML/CSS/JS）开发基础
学习目标：

1. 掌握 Python 语法与常用标准库
2. 能读懂真实 Python 项目代码
3. 能独立用 Python 搭建小项目（脚本 / Web 服务 / 后端 API）

一、你需要先知道的（给前端同学的对照）

| 前端            | Python                            |
|---------------|-----------------------------------|
| JavaScript    | Python                            |
| Node.js       | Python 解释器                        |
| npm           | pip                               |
| package.json  | requirements.txt / pyproject.toml |
| async / await | async / await                     |
| Express       | Flask / FastAPI                   |

👉 Python 是解释型语言，强调可读性，非常适合快速开发。

二、环境准备（10 分钟搞定）

1️⃣ 安装 Python
• 官网：https://www.python.org
• 推荐版本：Python 3.10+

验证是否成功：

```shell
python --version
# 或
python3 --version
```

2️⃣ 虚拟环境（非常重要）

- 什么是Python虚拟环境？
  virtual environment （venv）是一个独立的Python环境，包含独立的Python解释器和包管理系统
  它与系统的Python环境隔离，避免包依赖冲突
- 虚拟环境能做什么？
  包隔离: 不同项目可以使用不同版本的包，互不影响
  环境独立: 避免污染系统Python环境
  依赖管理: 每个项目可以维护自己的依赖列表
  版本控制: 便于团队协作和部署

类似于前端的 node_modules 隔离。

1. 创建虚拟环境

``````shell
python -m venv venv
``````

2. 激活

``````shell
# macOS / Linux
source venv/bin/activate
# Windows
venv\\Scripts\\activate
``````

看到 (venv) 说明成功。

退出虚拟环境：

````bash
deactivate
````

删除虚拟环境：

``````bash
# 直接删除目录即可
rm -rf myenv  # Linux/macOS
rmdir /s myenv  # Windows
``````

3️⃣ 安装依赖

``````bash
pip install requests
``````

生成依赖文件：

``````bash
pip freeze > requirements.txt
``````

依赖列表安装：

`````bash
pip install -r requirements.txt
`````

三、Python 基础语法（重点）

1️⃣ 变量 & 类型

``````python
name = "Evan"
age = 18
price = 99.9
is_admin = True

print(name, age, price, is_admin)
``````

Python 不需要声明类型，但支持类型标注（后面很重要）。

1. 基本数据类型
   int - 整数类型
   float - 浮点数类型
   str - 字符串类型
   bool - 布尔类型
   NoneType - None类型
2. 复合数据类型
   list - 列表类型
   tuple - 元组类型
   dict - 字典类型
   set - 集合类型
3. 其他内置类型
   bytes - 字节类型
   bytearray - 字节数组类型
   complex - 复数类型
   range - 范围类型
   frozenset - 不可变集合类型
4. 自定义类型
   class - 类类型
   function - 函数类型
   module - 模块类型

``````python
name: str = "Evan"
age: int = 18
``````

2️⃣ 字符串（非常常用）

```python
text = "Hello"
print(text.upper())
print(text.lower())
print(text.replace("H", "h"))
```

字符串拼接（推荐）：

```python
name = "Evan"
age = 18

print(f"我叫 {name}，今年 {age} 岁")
```

字符串切片：

```python
# 含头不含尾部，类似js slice
s = "python"
print(s[1:4])  # yth
print(s[:3])  # pyt
print(s[3:])  # hon
print(s[:])  # python
print(s[-3:])  # hon
# 步长 s[start:end:step]
print(s[::2])  # pto
# 倒序
print(s[::-1])  # nohtyp  
```

3️⃣ 列表（List）≈ JS Array

```python
nums = [1, 2, 3, 4]
nums.append(5)

for n in nums:
    print(n)
```

列表推导式（高级但常用）：

[表达式 for 变量 in 可迭代对象 if 条件]

```python
evens = [n for n in nums if n % 2 == 0]

```

**any()**：判断可迭代对象中是否至少有一个 True

常用函数：

1. list.sort()

   list方法，在原列表修改，没有返回值，只能迭代list

```python
nums = [3, 1, 4, 2]
nums.sort()
print(nums)  # [1, 2, 3, 4]
```

2. sorted()

   内置方法，不修改原列表，返回新列表，迭代任意对象

4️⃣ 字典（Dict）≈ JS Object

```python
user = {
    "name": "Evan",
    "age": 18
}

print(user["name"])
```

遍历：

```python
for key, value in user.items():
    print(key, value)
```

5️⃣ 条件判断

```python
age = 20

if age >= 18:
    print("成年人")
elif age >= 12:
    print("青少年")
else:
    print("儿童")
```

逻辑运算符：

1. 基本逻辑运算符
   and: 逻辑与运算，当两个操作数都为真时返回真
   or: 逻辑或运算，当至少一个操作数为真时返回真
   not: 逻辑非运算，对操作数进行取反操作
2. 比较运算符（常用于逻辑判断）
   ==: 等于
   !=: 不等于
   <, <=: 小于，小于等于

> , >=: 大于，大于等于
> is: 身份比较
> in: 成员测试

3. 运算特点
   短路求值: and 和 or 支持短路求值
   x and y: 如果 x 为假，不会计算 y
   x or y: 如果 x 为真，不会计算 y

```python
# and 运算符
result = True and False  # 结果为 False

# or 运算符  
result = True or False  # 结果为 True

# not 运算符
result = not True  # 结果为 False

# is
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)  # True - a和b引用同一个对象
print(a is c)  # False - a和c是不同的对象，尽管内容相同
print(a is None)  # 检查是否为None的常用方式

# in
# 在列表中
list_example = [1, 2, 3, 4]
print(2 in list_example)  # True

# 在字符串中
print('a' in 'hello')  # False

# 在字典中（检查键）
dict_example = {'a': 1, 'b': 2}
print('a' in dict_example)  # True

# 反向操作
print(5 not in list_example)  # True

```

6️⃣ 函数（重点）

```python
def add(a: int, b: int) -> int:
    return a + b


print(add(1, 2))
```

默认参数：

```python
def greet(name="World"):
    print(f"Hello {name}")
```

匿名函数：

lambda 参数1, 参数2: 表达式

- : 后面是 **返回值表达式**
- **不能写多行**
- **不能写赋值、for、while、try**

```python
f = lambda x: x * 2

print(f(3))  # 6
```

常用内置函数：

1. print(*objects, sep=' ', end='\n')  输出内容

```python
print("hello", "world")  # hello world
print("a", "b", sep=",")  # a,b
print("hello", end="!")  # hello!
```

2. len(obj) 获取长度

```python
len("abc")  # 3
len([1, 2, 3])  # 3
len({"a": 1})  # 1
```

3. type(obj) 类型查看

```python
type(123)  # <class 'int'>
type("abc")  # <class 'str'>
type([])  # <class 'list'>
```

4. isinstance(obj, type) 判断类型

```python
isinstance(123, int)  # True
isinstance("abc", str)  # True
```

5. input(prompt) 获取用户输入

```python
name = input("请输入名字：")
print(name)
```

6. int() / float() / str() 类型转换

```python
int("10")  # 10 
float("3.14")  # 3.14
str(100)  # "100"
```

7. abs()   绝对值

```python
abs(-5)  # 5
```

8. round() 四舍五入

```python
round(3.14159, 2)  # 3.14
round(3.5)  # 4
```

9. min()/max() 最小、最大值

```python
max(1, 3, 5)  # 5
min([2, 4, 6])  # 2
```

10. sum() 求和

```python
sum([1, 2, 3])  # 6
```

11. range(start, stop, step) 生成数字序列

```python
list(range(5))  # [0,1,2,3,4]
list(range(1, 6))  # [1,2,3,4,5]
list(range(1, 10, 2))  # [1,3,5,7,9]
```

12. enumerate(iterable, start=0) 同时拿下标和值（必会）

```python
for i, v in enumerate(["a", "b", "c"]):
    print(i, v)
```

13. zip(iter1, iter2) 并行遍历多个序列

```python
names = ["Tom", "Jack"]
ages = [18, 20]

for n, a in zip(names, ages):
    print(n, a)
```

14. sorted(iterable, key=None, reverse=False)  排序（不改原数据）

```python
sorted([3, 1, 2])  # [1,2,3] 
sorted(words, key=len)  # 按长度排
```

15. any(iterable)  是否存在 True

```python
any([False, False, True])  # True
```

16. all(iterable) 是否全为 True

```python
all([True, True])  # True
all([True, False])  # False
```

17. map(func, iterable) 映射

```python
list(map(lambda x: x * 2, [1, 2, 3]))
```

18. filter(func, iterable) 过滤

```python
list(filter(lambda x: x > 0, [-1, 0, 2]))
```

19. dict() / list() / set()

```python
dict(a=1, b=2)
list("abc")
set([1, 1, 2])
```

20. help() —— 查看文档（神器）

```python
help(len)
help(str)
```

四、文件 & 模块系统（像前端 import）

1️⃣ 文件读写

```python
# 写文件
with open("test.txt", "w", encoding="utf-8") as f:
    f.write("Hello Python")
# 读文件
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()
print(content)    
```

- with open(...) as f: 是**固定写法**
- read() = 一次性读完

2️⃣ 模块导入

```python
# utils.py

def add(a, b):
    return a + b


# main.py
from utils import add

print(add(1, 2))
```

五、异常处理（防止程序崩溃）

```python
try:
    num = int("abc")
except ValueError as e:
    print("转换失败", e)
finally:
    print("结束")
```

六、面向对象（读项目必会）

```python
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def say_hi(self):
        print(f"Hi, I'm {self.name}")


u = User("Evan", 18)
u.say_hi()    
```

七、常用标准库（非常重要）

1️⃣ os / pathlib

```python
from pathlib import Path

p = Path("./data")
p.mkdir(exist_ok=True)
```

2️⃣ json

```python
import json

data = {"name": "Evan"}

json_str = json.dumps(data)
obj = json.loads(json_str)
```

3️⃣ requests（发 HTTP 请求）

```python
import requests

resp = requests.get("https://api.github.com")
print(resp.status_code)
print(resp.json())
```

八、Python Web 开发（前端同学重点）

1️⃣ Flask（入门）

```python
pip
install
flask

from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/hello")
def hello():
    return jsonify({"msg": "hello python"})


app.run(debug=True)
```

访问：http://127.0.0.1:5000/api/hello

2️⃣ FastAPI（强烈推荐，现代化）

```python
pip
install
fastapi
uvicorn

from fastapi import FastAPI

app = FastAPI()


@app.get("/hello")
def hello(name: str = "World"):
    return {"msg": f"Hello {name}"}
```

启动：

```bash
uvicorn main:app --reload
```

自动文档：
•  http://127.0.0.1:8000/docs

九、数据库（后端必会）

1️⃣ SQLite + SQLAlchemy

```python
pip
install
sqlalchemy

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)


engine = create_engine("sqlite:///test.db")
Base.metadata.create_all(engine)
```

十、如何读懂一个 Python 项目

常见目录结构

```text
project/
├─ app/
│ ├─ main.py
│ ├─ models/
│ ├─ routes/
├─ tests/
├─ requirements.txt
└─ README.md
```

阅读顺序：1️⃣ README2️⃣ main.py / app.py3️⃣ routes / controllers4️⃣ models

十一、实战项目路线（一步步来）

✅ 阶段 1（脚本）

- 爬取接口数据
- 批量处理文件

✅ 阶段 2（服务）

- FastAPI + CRUD API
- JWT 登录

✅ 阶段 3（工程化）

- 日志 logging
- 配置管理
- 单元测试 pytest

十二、学习建议（给前端同学）

- 多写，不要只看
- 把 JS 思维映射到 Python
- 优先学：
- requests
- FastAPI
- SQLAlchemy

十三、30 天 Python 学习 + 实战计划（前端背景专属）

学习节奏：每天 1～2 小时
目标：第 30 天能独立写一个 Python 后端项目，并读懂中小型项目代码

🟢 第 1 周：Python 基础（语法 + 思维转换）

Day 1：环境 & 第一个 Python 程序
• 安装 Python / 虚拟环境
• pip 使用
• hello world

```python
print("Hello Python")
```

✅ 目标：能跑 Python 程序

Day 2：变量 & 基础类型
• int / float / str / bool
• 类型标注

```python
age: int = 18
name: str = "Evan"
```

Day 3：字符串 & 常用方法
• f-string
• split / join / replace

```python
print(f"name={name}")
```

Day 4：List / Dict（重点）
• 列表推导式
• dict 遍历

```python
users = [{"name": "A"}, {"name": "B"}]
names = [u["name"] for u in users]
```

Day 5：条件 & 循环
• if / for / while

Day 6：函数 & 模块
• def
• return
• import

```python
def sum(a: int, b: int) -> int:
    return a + b
```

Day 7：复盘 + 小练习
• 写 5 个工具函数
• 用 Python 实现 JS 常见工具函数

🎯 第 1 周成果：能独立写 Python 脚本

🟡 第 2 周：工程基础（读项目必备）

Day 8：文件操作
• 读写 txt / json

⸻

Day 9：异常处理
• try / except

⸻

Day 10：面向对象 OOP

```python
class User:
    def __init__(self, name):
        self.name = name
```

⸻

Day 11：标准库
• os / pathlib / datetime / json

⸻

Day 12：第三方库
• requests
• pip 管理

⸻

Day 13：项目结构
• main.py
• utils /
• services /

⸻

Day 14：读真实项目
• GitHub 找 FastAPI 项目
• 从 main.py 开始读

🎯 第 2 周成果：能看懂项目结构和主流程

⸻

🔵 第 3 周：Web 后端（前端同学重点）

Day 15：HTTP & API 思维
• GET / POST
• JSON

⸻

Day 16：FastAPI 入门

@app.get("/ping")
def ping():
return {"msg": "ok"}

⸻

Day 17：参数 & 校验
• Query
• Body

⸻

Day 18：Pydantic 数据模型

class User(BaseModel):
name: str

⸻

Day 19：数据库 ORM
• SQLAlchemy

⸻

Day 20：CRUD 接口
• 增删改查

⸻

Day 21：前后端联调
• 前端 axios 调 API

🎯 第 3 周成果：一个完整 API 服务

⸻

🔴 第 4 周：项目实战 + 进阶

Day 22：用户系统
• 注册 / 登录

⸻

Day 23：JWT 认证

⸻

Day 24：权限控制

⸻

Day 25：日志 logging

⸻

Day 26：配置管理
• env

⸻

Day 27：错误处理
• 全局异常

⸻

Day 28：测试
• pytest

⸻

Day 29：部署
• Uvicorn
• Linux

⸻

Day 30：项目总结
• README
• 项目结构优化

🎯 最终成果：
• 一个完整 Python 后端项目
• 能读懂 80% Python Web 项目

⸻

下一步建议

完成 30 天后，你可以继续：
• Django
• 异步 asyncio
• 爬虫 / 自动化
• AI / 数据分析

⸻

如果你愿意，下一步我可以：
• 带你 从 0 写一个 FastAPI 实战项目（每天一小步）
• 给你 前端 + Python 后端完整工程模板

## 部署

### Docker

#### 使用 Dockerfile

1. 在本地项目中，生成最新依赖 requirements.txt
    ```shell
    pip freeze > requirements.txt
    ```
2. 编写 Dockerfile

    ```dockerfile
    # 镜像
    FROM python:3.11-slim
    # 工作目录
    WORKDIR /app
    
    # 安装依赖
    COPY requirements.txt .
    # 安装依赖
    RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
    
    # 复制项目
    COPY . .
    
    # 运行
    CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
    ```
3. 构建镜像

   将项目源码部署到服务器，然后进入项目目录下，执行以下命令：

    ```shell
    docker build -t todo-api .
    ```
   通过`docker images`查看是否有无镜像

4. 运行镜像

    ```shell
    docker run -d --name todoapi -p 9002:8001 --restart=always todo-api
    ```
    - `-d` 后台运行
    - `--name` 指定容器名称
    - `-p` 映射端口, 格式为`宿主机端口:容器端口`
    - `--restart=always` 容器启动时自动启动
    - `todoapi` 镜像名称

5. 后续更新项目流程

    ```shell
    # 1. 进入项目目录
    cd /vensst/api/todo-api
    
    # 2. 停止并删除旧容器
    docker stop todoapi
    docker rm todoapi
    
    # 3. 重新构建镜像（同名会自动覆盖）
    docker build -t todo-api .
    
    # 4. 启动新容器
    docker run -d --name todoapi -p 9002:8001 --restart=always todo-api
    ```

推荐使用 Docker Compose，启动时自动构建镜像并启动容器。

#### 使用 Docker Compose

Docker Compose会自动：

- 停旧容器
- 构建新镜像
- 起新容器

之前如果运行过 Dockerfile 构建镜像，则需要先删除旧镜像。

1. 在项目中创建 docker-compose.yml 文件
    ```shell
    # docker-compose 文件版本
    version: "3"
   # 服务列表，意思是我要启动哪些服务（容器）
    services:
      # fastapi: 服务器名（容器名）
      fastapi:
        # 镜像名字
        image: todo-api
        # 容器名字
        container_name: todoapi
        # 构建镜像 路径，当前目录下的 Dockerfile 文件
        build: .
        # 映射端口 服务器8000端口 → 容器8000端口
        ports:
          - "9002:8001"
        # 容器挂了/服务器重启自动启动，默认是 unless-stopped
        restart: always
       
    ```
2. 运行
   项目部署服务器后，进入项目目录下，执行以下命令：
    ```shell
    docker compose up -d --build
    ```
   ps：
    - 新版 docker compose 命令
    - 旧版 docker-compose 命令

3. 检查
    1. 看容器
       ```shell
        docker compose ps
       ``` 
    2. 看日志
       ```shell
        docker compose logs -f
       ```

##  Django、Flask、FastAPI 区别

Django “全家桶”企业级 Web 框架
Flask 轻量、灵活、可控的 Web 框架
FastAPI 现代、高性能、API 优先框架


## fastapi + mysql

```shell
pip install fastapi uvicorn sqlalchemy pymysql python-dotenv
```