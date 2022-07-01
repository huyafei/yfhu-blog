# 开始

## npm/yarn

:::: code-group
::: code-group-item npm
```shell
npm install @vensst/js-toolkit --save
```
:::
::: code-group-item yarn
```shell
yarn add @vensst/js-toolkit --save
```
:::
::::

```js
// 全部引用
import * as jstk from "@vensst/js-toolkit";
jstk.randomNum(0,100);
// 单个引用
// import {randomNum} from "@vensst/js-toolkit";
// randomNum(0,100);
```
## CDN
```html
<script src="https://unpkg.com/@vensst/js-toolkit"></script>
```
```js
jstk.randomNum(0,100);
```


