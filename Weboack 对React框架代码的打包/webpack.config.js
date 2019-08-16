const path = require('path');
const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');
const CleanWebpackPlugin = require('./node_modules/clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    main:'./src/index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open:true,
    port:8080
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240
          }
        }
      }, {
            test: /\.(eot|ttf|svg)$/,
            use: {
              loader: 'file-loader'
            } 
      }, {
            test: /\.scss$/,
            use: [
              'style-loader', 
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2
                }
              },
              'sass-loader',
              'postcss-loader'
            ]
          }      
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  }
}
