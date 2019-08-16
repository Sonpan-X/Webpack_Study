* sourceMap 便于追踪错误和警告在源代码中的原始位置。
每次要编译代码时，手动运行 npm run build 就会变得很麻烦。

* webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
+ webpack's Watch Mode
+ webpack-dev-server
+ webpack-dev-middleware

* 观察者模式
```js
  {
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "main": "webpack.config.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "watch": "webpack --watch",
      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "clean-webpack-plugin": "^0.1.16",
      "css-loader": "^0.28.4",
      "csv-loader": "^2.1.1",
      "file-loader": "^0.11.2",
      "html-webpack-plugin": "^2.29.0",
      "style-loader": "^0.18.2",
      "webpack": "^3.0.0",
      "xml-loader": "^1.2.1"
    }
  }
```

* 使用webpack-dev-server
```js
 devServer: {
     contentBase: './dist'
   }


   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "watch": "webpack --watch",
+     "start": "webpack-dev-server --open",
      "build": "webpack"
    },
```

* 使用webpack-dev-middleware
+ webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)
