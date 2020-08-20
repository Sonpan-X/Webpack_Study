###  起步
#### 全局安装
```
  npm install --global webpack
```
#### 项目安装
```code
  npm install  webpack webpack-cli -D
   或者
  yarn add webpack webpack-cli -D
```
### 安装最新体验版
```
  npm install webpack@beta
```
---
*注意：为了项目的灵活性 建议在项目中装webpack*

### 基本概念
 · 入口起点 [entry points]
 webpack.config.js
> 单入口
```js
   // 简易版
   const config = {
     entry: './path/to/example'
   }
   // 或
   const config = {
     entry: {
       main: './path/to/example'
     }
   }
   
```
> 分离应用程序和第三方库入口
```js
   const config = {
     entry: {
       app: './src/app.js',
       vendors: './src/vendors.js' 
     }
   }
```
* 这样可以实现打包的优化实现长效缓存的通用模式

> 多页面应用程序
* 使用CommonsChunkPlugin为每个页面间的应用程序共享代码创建bundle。多页面应用能够复用入口起之间的大量代码/模块
```js
   const config = {
     entry: {
       pageOne: './src/pageOne/index.js',
       pageTwo: './src/pageTwo/index.js',
       pageThree: './src/pageThree/index.js'
     }
   }
```