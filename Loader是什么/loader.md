### loader 
* 通过loader可以打包处理各种类型的依赖文件。

#### 加载Css和处理Sass
*1.从js模块中import一个css文件<br>2.在module配置中安装并添加style-loader和css-loader*
配置如下：
```js
 module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
```
* style-loader 和 css-loader建议结合使用
* css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们，所以css-loader能处理css的依赖
* css-loader配置
  + importLoaders作用 在 css-loader 前应用的 loader 的数量
  + alias 创建别名更容易导入一些模块
  + import 启用/禁用 @import 处理 默认为true
  + minimize 启用/禁用 压缩
  + modules 启用/禁用 CSS 模块
  + localIdentName 生成标识符

！对于生产环境构建，建议从 bundle 中提取 CSS，以便之后可以并行加载 CSS/JS 资源。可以通过使用 extract-text-webpack-plugin 来实现，在生产环境模式运行中提取 CSS。
```js
module:{
    rules:[
      {
        test:/\.css$/,
        use:[
         'style-loader', //将 JS 字符串生成为 style 节点
         {
           loader:'css-loader', //将 CSS 转化成 CommonJS 模块
           options:{
            importLoaders:2
           }
         },
         'sass-loader', //将 Sass 编译成 CSS
         'postcss-loader'
        ]
      }
    ]
  }
```
### 加载图片和加载字体
使用file-loader可以轻松把图片打包到依赖文件,也可以打包字体文件，url-loader用法也一样
```js
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
```