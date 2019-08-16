* 启用HMR 实际上就是配置webpack-dev-server
- devServer:{hot:true}
- 添加 webpack.NameModulesPlugin()
- 添加 webpack.HotModuleReplacementPlugin()
- if(module.hot){module.accept('./print.js',function(){})}

* 通过的Node.js API