const express = require('./node_modules/express');
const webpack = require('./node_modules/webpack');
const webpackDevMiddleware = require('./node_modules/webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.publicPath
}));

app.listen(3000,function(){
  console.log('Example Server');
})