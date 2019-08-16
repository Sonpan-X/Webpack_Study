const config =  require('./webpack.common');
const merge = require('webpack-merge');

const prod ={
	mode:'production',
	devtool:'cheap-module-source-map',
}

module.exports = merge(config,prod);