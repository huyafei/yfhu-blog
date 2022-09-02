<template><div><h1 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> record</h1>
<h2 id="vue中使用-链式操作-编译报错" tabindex="-1"><a class="header-anchor" href="#vue中使用-链式操作-编译报错" aria-hidden="true">#</a> vue中使用 &quot;?.&quot; 链式操作 编译报错</h2>
<p>npm install @babel/plugin-proposal-optional-chaining --save-dev<br>
如果报错试试<br>
npm install '@babel/plugin-proposal-optional-chaining' --save-dev
在babel.config.js中添加:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@vue/app'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-proposal-optional-chaining"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器安装-node" tabindex="-1"><a class="header-anchor" href="#服务器安装-node" aria-hidden="true">#</a> 服务器安装 node</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<ul>
<li>进入 node <a href="https://registry.npmmirror.com/binary.html?path=node/" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a> 选择要安装的版本，右键选选择复制链接地址</li>
<li>cd /usr/local/src/</li>
<li>下载</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://nodejs.org/dist/v9.8.0/node-v9.8.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>解压</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> -zxvf node-v9.8.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>移动</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mv</span> node-v9.8.0  /usr/local/node/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>编辑文件
<ul>
<li>cd /etc 下编辑 profile 文件，或者 vim /etc/profile</li>
<li>增加以下内容：</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行source才能使用环境变量立即有效
<ul>
<li>source /etc/profile</li>
</ul>
</li>
<li>验证</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3>
<ul>
<li>卸载 npm</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall <span class="token function">npm</span> -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>卸载 node</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum remove nodejs <span class="token function">npm</span> -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器部署jar使用脚本运行" tabindex="-1"><a class="header-anchor" href="#服务器部署jar使用脚本运行" aria-hidden="true">#</a> 服务器部署jar使用脚本运行</h2>
<ul>
<li>同级新建 <code v-pre>xx.sh</code> 文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#这里可替换为你自己的执行程序，其他代码无需更改</span>
<span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>yfhu-0.0.1-SNAPSHOT.jar
  
<span class="token comment">#使用说明，用来提示输入参数</span>
<span class="token function-name function">usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Usage: sh yfhu.sh [start|stop|restart|status]"</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
  
<span class="token comment">#检查程序是否在运行</span>
<span class="token function-name function">is_exist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> $APP_NAME<span class="token operator">|</span><span class="token function">grep</span> -v <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token variable">`</span></span>
 <span class="token comment">#如果不存在返回1，存在返回0 </span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">${pid}</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">return</span> <span class="token number">1</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">return</span> <span class="token number">0</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
  
<span class="token comment">#启动方法</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${APP_NAME}</span> is already running. pid=<span class="token variable">${pid}</span> ."</span>
 <span class="token keyword">else</span>
 <span class="token function">nohup</span> java -jar /home/www/java/yfhu/<span class="token variable">$APP_NAME</span> <span class="token operator">></span> /home/www/java/yfhu/yfhu.file <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${APP_NAME}</span> start success"</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
  
<span class="token comment">#停止方法</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token function">kill</span> -9 <span class="token variable">$pid</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${APP_NAME}</span> is not running"</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
  
<span class="token comment">#输出运行状态</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${APP_NAME}</span> is running. Pid is <span class="token variable">${pid}</span>"</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${APP_NAME}</span> is NOT running."</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
  
<span class="token comment">#重启</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 stop
 start
<span class="token punctuation">}</span>
  
<span class="token comment">#根据输入参数，选择执行对应方法，不输入则执行使用说明</span>
<span class="token keyword">case</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token keyword">in</span>
 <span class="token string">"start"</span><span class="token punctuation">)</span>
 start
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">"stop"</span><span class="token punctuation">)</span>
 stop
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">"status"</span><span class="token punctuation">)</span>
 status
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">"restart"</span><span class="token punctuation">)</span>
 restart
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 *<span class="token punctuation">)</span>
 usage
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./yfhu.sh start <span class="token comment">#启动</span>
./yfhu.sh stop <span class="token comment">#停止</span>
./yfhu.sh status <span class="token comment">#查看状态</span>
./yfhu.sh restart <span class="token comment">#重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.jb51.net/article/157237.htm" target="_blank" rel="noopener noreferrer">原文：https://www.jb51.net/article/157237.htm<ExternalLinkIcon/></a></p>
</div></template>
