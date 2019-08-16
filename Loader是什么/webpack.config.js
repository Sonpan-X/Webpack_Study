const path  = require('path');

module.exports={
  mode:'development',
  entry:{
    main:'./src/index.js'
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
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
      },
      {
        test:/\.(jpg|png|svg)$/,
        use:[
         {
           loader:'url-loader', //与file-loader用法一致，不同是可以转base64
           options: {
            limit: 8192,
            name (file) {
              if (env === 'development') {
                return '[path][name].[ext]'
              }
        
              return '[hash].[ext]'
            }
          }
         }
        ]
      }
    ]
  }

}