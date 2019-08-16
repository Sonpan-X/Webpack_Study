const webpack =  require('webpack');
const config =  require('./webpack.common');
const merge = require('webpack-merge');

 const dev={
	mode:'development',
	devtool:'cheap-module-eval-source-map',
	devServer:{
		contentBase:'./dist',
		open:true,
		port:8080,
		hot: true,
		hotOnly: true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	optimization:{
		usedExports: true
	}
}

module.exports = merge(config,dev);