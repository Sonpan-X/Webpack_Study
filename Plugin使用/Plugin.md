* 使用plugin是让打包更加便捷
plugin类似一些声明周期，在某个时刻自动帮我完成一些是事情。

* 使用之前也要先安装

### 自动在dist目录生成index.html
使用HtmlWebpackPlugin就创建一个全新的bundle并自动添加到html中。
* html-webpack-plugin
* 还可以看下html-webpack-template

### 清理 /dist文件
* clean-webpack-plugin 每次构建前都会清理/dist 文件，避免杂乱文件。