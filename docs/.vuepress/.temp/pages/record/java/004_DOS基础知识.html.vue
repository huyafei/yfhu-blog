<template><div><h1 id="dos基础" tabindex="-1"><a class="header-anchor" href="#dos基础" aria-hidden="true">#</a> DOS基础</h1>
<h2 id="windows-系统常用dos命令" tabindex="-1"><a class="header-anchor" href="#windows-系统常用dos命令" aria-hidden="true">#</a> windows 系统常用DOS命令</h2>
<h3 id="打开-dos-窗口" tabindex="-1"><a class="header-anchor" href="#打开-dos-窗口" aria-hidden="true">#</a> 打开 DOS 窗口</h3>
<ul>
<li>快捷键：<code v-pre>win + r</code>，打开运行窗口</li>
<li>输入 <code v-pre>cmd</code> 回车</li>
</ul>
<h3 id="查看-ip" tabindex="-1"><a class="header-anchor" href="#查看-ip" aria-hidden="true">#</a> 查看 ip</h3>
<ul>
<li><code v-pre>ipconfig</code></li>
<li><code v-pre>ipconfig/all</code> 可以查看更详细的IP信息，这种查看方式可以看到网卡的物理地址</li>
</ul>
<h3 id="清屏" tabindex="-1"><a class="header-anchor" href="#清屏" aria-hidden="true">#</a> 清屏</h3>
<ul>
<li><code v-pre>cls</code> 或者 <code v-pre>clear</code></li>
</ul>
<h3 id="退出-dos-窗口" tabindex="-1"><a class="header-anchor" href="#退出-dos-窗口" aria-hidden="true">#</a> 退出 DOS 窗口</h3>
<ul>
<li><code v-pre>exit</code></li>
</ul>
<h3 id="dos-窗口复制" tabindex="-1"><a class="header-anchor" href="#dos-窗口复制" aria-hidden="true">#</a> DOS 窗口复制</h3>
<ul>
<li>鼠标选择要复制的内容 -&gt; 鼠标右击复制 -&gt; 粘贴</li>
</ul>
<h3 id="查看两台计算机之间是否可以正常通信" tabindex="-1"><a class="header-anchor" href="#查看两台计算机之间是否可以正常通信" aria-hidden="true">#</a> 查看两台计算机之间是否可以正常通信</h3>
<ul>
<li><code v-pre>ping ip/网网址</code>   【发送和接收数据包4次】</li>
<li><code v-pre>ping ip/网网址 -t</code> 【一直不停的发送和接收数据包】</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ping</span> <span class="token number">192.168</span>.27.23
<span class="token function">ping</span> <span class="token number">192.168</span>.27.23 <span class="token parameter variable">-t</span>
<span class="token function">ping</span> www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强行终止dos命令窗口中正在运行的程序" tabindex="-1"><a class="header-anchor" href="#强行终止dos命令窗口中正在运行的程序" aria-hidden="true">#</a> 强行终止DOS命令窗口中正在运行的程序</h3>
<ul>
<li><code v-pre>ctrl + c</code></li>
</ul>
<h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3>
<ul>
<li><code v-pre>mkdir 文件名</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 在前所在目录下 创建 test 目录</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3>
<ul>
<li><code v-pre>del 文件名</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 删除当前目录下 test 目录</span>
del <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换目命令" tabindex="-1"><a class="header-anchor" href="#切换目命令" aria-hidden="true">#</a> 切换目命令</h3>
<ul>
<li><code v-pre>cd 路径</code>
<ul>
<li>路径分为 相对路径 和 绝对路径
<ul>
<li>cd test 【相对路径】</li>
<li>cd C:\Users\Administrator 【绝对路径】</li>
<li>cd 文件首字母 【按 tab 自动补全文件名】</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>cd ..</code> 【..是一个路径，代表当前路径的上级路径】
<ul>
<li>cd ../../../</li>
</ul>
</li>
<li><code v-pre>cd \</code> 回到根路径</li>
</ul>
<h3 id="切换盘符" tabindex="-1"><a class="header-anchor" href="#切换盘符" aria-hidden="true">#</a> 切换盘符</h3>
<ul>
<li>d:</li>
<li>e:</li>
<li>...</li>
</ul>
<h3 id="查看当前目录下所有的子文件和子目录" tabindex="-1"><a class="header-anchor" href="#查看当前目录下所有的子文件和子目录" aria-hidden="true">#</a> 查看当前目录下所有的子文件和子目录</h3>
<ul>
<li><code v-pre>dir</code></li>
</ul>
<h3 id="打开注册表" tabindex="-1"><a class="header-anchor" href="#打开注册表" aria-hidden="true">#</a> 打开注册表</h3>
<ul>
<li><code v-pre>regedit</code></li>
</ul>
<h3 id="关于windows系统中常用快捷键" tabindex="-1"><a class="header-anchor" href="#关于windows系统中常用快捷键" aria-hidden="true">#</a> 关于windows系统中常用快捷键：</h3>
<ul>
<li><code v-pre>win + r</code>   打开运行窗口</li>
<li><code v-pre>win + d</code>	显示桌面</li>
<li><code v-pre>win + e</code>	打开资源管理器</li>
<li><code v-pre>win + L</code>	锁屏</li>
<li><code v-pre>alt + tab</code>	应用之间的切换</li>
</ul>
<h3 id="通用的-文本编辑快捷键" tabindex="-1"><a class="header-anchor" href="#通用的-文本编辑快捷键" aria-hidden="true">#</a> “通用的”文本编辑快捷键：</h3>
<ul>
<li><code v-pre>ctrl + a</code>	全选</li>
<li><code v-pre>ctrl + c</code>	复制</li>
<li><code v-pre>ctrl + v</code>	粘贴</li>
<li><code v-pre>ctrl + s</code>	保存</li>
<li><code v-pre>ctrl + x</code>  剪切</li>
<li><code v-pre>ctrl + z</code>	撤销</li>
<li><code v-pre>ctrl + y</code>  重做</li>
<li><code v-pre>tab</code>			缩进/多行缩进</li>
<li><code v-pre>shift + tab</code>	取消缩进</li>
<li><code v-pre>HOME</code> 回到行首</li>
<li><code v-pre>END</code>	回到行尾</li>
<li><code v-pre>shift + home</code>	选中一行</li>
<li><code v-pre>shift + end</code>	选中一行</li>
<li><code v-pre>ctrl + shift + 向右或者向左的箭头</code>  选中一个单词</li>
<li>鼠标双击：选中一个单词</li>
<li>鼠标三击：选中一行</li>
<li><code v-pre>ctrl + end</code>	回到文件末尾</li>
<li><code v-pre>ctrl + home</code>	回到文件头</li>
</ul>
</div></template>


