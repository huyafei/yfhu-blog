<template><div><h2 id="搭建-cli-脚手架-发布到-npm-教程" tabindex="-1"><a class="header-anchor" href="#搭建-cli-脚手架-发布到-npm-教程" aria-hidden="true">#</a> 搭建 cli 脚手架 发布到 npm 教程</h2>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<ol>
<li>新建项目</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> project <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> project
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在项目文件夹下，新建 <code v-pre>bin</code> 文件夹，在其文件夹下新建 <code v-pre>vensst.js</code> 文件，并写入如下代码：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/usr/bin/env node</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>#!/usr/bin/env node</code> 必须放在第一行，否则会报错。指定脚本的解释程序用 <code v-pre>node</code></p>
<p>执行 <code v-pre>node ./bin/vensst.js</code> ，在控制台就会打印出 <code v-pre>hello world</code>。</p>
<ol start="3">
<li>在 <code v-pre>package.json</code> 文件中，加入<code v-pre>bin</code>字段</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  //...
  "bin": {
    "vensst": "./bin/vensst.js"
  },
  //...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>许多npm包都具有一个或多个要安装到PATH中的可执行文件。package.json中提供一个字段bin，该字段是命令名到本地文件名的映射。在安装时，npm会将文件符号链接到prefix/bin以进行全局安装或./node_modules/.bin/本地安装。</p>
</blockquote>
<ol start="5">
<li>安装第三方依赖</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> chalk commander download-git-repo inquirer ora log-symbols figlet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>commander <a href="https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a><br>
命令行工具，用于解析终端的输入命令，这样我们就能在终端输入命令然后执行代码，如 vue create appName<br>
.option()方法来定义选项,可以接收三个参数：</p>
<ol>
<li>自定义标志必须：分为长短标识，中间用逗号、竖线或者空格分割；标志后面可跟必须参数或可选参数，前者用&lt;&gt;包含，后者用[]包含。
.option('-d,--debug')
长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔
.option('-d,--debug-bug')
标志后面可跟必须参数或可选参数，前者用&lt;&gt;包含，后者用[]包含。
.option('-d,--debug' [type])</li>
<li>选项描述省略不报错：在使用 --help 命令时显示标志描述
.option('-d,--debug','这是描述')</li>
<li>默认值可省略：当没有传入参数时则会使用默认值，
.option('-d,--debug','这是描述'，'默认值')</li>
</ol>
</li>
<li>
<p>download-git-repo <a href="https://github.com/JessonL/download-git-repo" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
在 node中通过git下载（GitHub, GitLab, Bitbucket）代码<br>
download(repository, destination, options, callback)；</p>
<ul>
<li>repository
<ul>
<li>GitHub - github:owner/name or simply owner/name</li>
<li>GitLab - gitlab:owner/name</li>
<li>Bitbucket - bitbucket:owner/name
说明：  owner：仓库所有人，name：名称</li>
</ul>
</li>
</ul>
</li>
<li>
<p>inquirer <a href="https://github.com/SBoudrias/Inquirer.js#readme" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
命令行交互工具，用于命令行交互问询操作
https://blog.csdn.net/qq_26733915/article/details/80461257</p>
</li>
<li>
<p>ora <a href="https://github.com/sindresorhus/ora#readme" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
用于实现node命令环境的loading效果，并显示各种状态的图标,显示 loading 动画</p>
</li>
<li>
<p>chalk <a href="https://github.com/chalk/chalk#readme" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
用于修改终端命令行字体颜色</p>
</li>
<li>
<p>log-symbols <a href="https://github.com/sindresorhus/log-symbols" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
用于在打印输出的内容中加入icon更友好（显示出 √ 或 × 等的图标）</p>
</li>
<li>
<p>handlebars.js <a href="https://handlebarsjs.com/zh/guide" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
模板引擎工具，可用于修改package.json中相关字段</p>
</li>
<li>
<p>child_process (node自带) <a href="https://nodejs.cn/api/child_process.html" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
子进程，用于执行命令行的指令</p>
</li>
<li>
<p>figlet <a href="https://github.com/patorjk/figlet.js#readme" target="_blank" rel="noopener noreferrer">前往<ExternalLinkIcon/></a>
字体样式</p>
</li>
</ul>
<h4 id="handlebars-js-使用方式" tabindex="-1"><a class="header-anchor" href="#handlebars-js-使用方式" aria-hidden="true">#</a> handlebars.js 使用方式</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Handlebars <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"handlebars"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// package.json文件路径</span>
<span class="token keyword">const</span> packagePath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>projectName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/package.json</span><span class="token template-punctuation string">`</span></span>  
<span class="token comment">// 读取 package.json 文件内容，并转换为json对象</span>
<span class="token keyword">const</span> packageContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>packagePath<span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span>
<span class="token comment">// 编译替换</span>
<span class="token keyword">const</span> packageResult <span class="token operator">=</span> Handlebars<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>packageContent<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">projectName</span><span class="token operator">:</span> obj<span class="token punctuation">.</span>projectName<span class="token punctuation">,</span> <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 重写到本地文件</span>
fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>packagePath<span class="token punctuation">,</span> packageResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-npm-link-挂载全局进行-本地测试" tabindex="-1"><a class="header-anchor" href="#使用-npm-link-挂载全局进行-本地测试" aria-hidden="true">#</a> 使用 npm link 挂载全局进行 本地测试</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># npm link 包链接地址</span>
<span class="token function">npm</span> <span class="token function">link</span>  D:<span class="token punctuation">\</span>huyafei<span class="token punctuation">\</span>001-GitHub<span class="token punctuation">\</span>vensst-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>process.exit()
指示 Node.js 以 code 的退出状态同步终止进程 <a href="http://nodejs.cn/api/process/process_exit_code.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
</div></template>


