# 数据存储
::: tip
**更新时间：2020年2月8日**
:::
## 本地储存
### cookie
* 存储在客户端文件
* 在浏览器（客户端）和服务器间来回传递，可读写（http传输携带 服务器可访问）
* 大小不超过4k（4k左右）
* 在所有同源（同一域名）窗口中都是共享的
* 在设置的时间过期之前一直有效，即使浏览器或窗口关闭
* 可以限制数据只属于某个路径下，即设置path路径（只能在此路径下显示）
* 可以设置过期时间（以 UTC 或 GMT 时间）

**使用：**

```js 
//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//删除cookie
function delCookie(cname) {
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GM";
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
        if (c.indexOf(name)  == 0) {
            return c.substring(name.length, c.length);
         }
    }
    return "";
}
//检查cookie
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
```
### sessionStorage
* 存储在客户端文件
* 客户端只能读取本地存储
* 可以达到5M，甚至更多
* 只在当前同源同窗口中共享（只在当前窗口中共享）
* 当前浏览器窗口关闭前有效（关闭浏览器或窗口数据就销毁了）

**使用：**

```js
//设置
sessionStorage.setItem(keyname, value)
//获取
sessionStorage.getItem(keyname)
//清除某值
sessionStorage.removeItem(keyname)
//清除所有
sessionStorage.clear()
```
### localStorage
* 存储在客户端文件
* 客户端只能读取本地存储
* 可以达到5M，甚至更多
* 在所有同源（同一域名）窗口中都是共享的
* 永久保存，浏览器或窗口关闭也一直保存

**使用：**

```js
//设置
localStorage.setItem(keyname, value)
//获取
localStorage.getItem(keyname)
//清除某值
localStorage.removeItem(keyname)
//清除所有
localStorage.clear()
```
### 区别
对cookie、sessionStorage和localStorage进行简单表格化整理
// cookie、sessionStorage和localStorage的区别


\<table\>
	\<tr\>
	    \<th\>\</th\>
	    \<th\>cookie\</th\>
	    \<th\>sessionStorage\</th\>  
        \<th\>localStorage\</th\> 
	\</tr\>
	\<tr \>
	    \<td\>储存大小\</td\>
	    \<td\>4k左右\</td\>
	    \<td colspan="2" \>\<=5M\</td\>
	\</tr\>
	\<tr\>
        \<td\>储存方式\</td\>
        \<td colspan="3"\>本地保存\</td\>
    \</tr\>
    \<tr\>
        \<td\>服务器读取\</td\>
        \<td \>可以读写\</td\>
        \<td \>不可以\</td\>
        \<td \>不可以\</td\>
    \</tr\>
    \<tr\>
        \<td\>作用域（数据共享）\</td\>
        \<td\>同源窗口\<br\>或指定path路径\</td\>
        \<td\>同源同窗口\</td\>
        \<td\>同源窗口\</td\>
    \</tr\>
	\<tr\>
        \<td\>期效性\</td\>
        \<td\>设置失效时间\</td\>
        \<td\>当前窗口关闭前\</td\>
        \<td\>永久保存\</td\>
    \</tr\>
    
\</table\>

