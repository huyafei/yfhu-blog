# vue

## vue中使用 "?." 链式操作 编译报错
npm install @babel/plugin-proposal-optional-chaining --save-dev   
如果报错试试  
npm install '@babel/plugin-proposal-optional-chaining' --save-dev
在babel.config.js中添加:
```js
module.exports = {
  presets: ['@vue/app'],
  plugins: ["@babel/plugin-proposal-optional-chaining"]
}
```
