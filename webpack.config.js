var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


//入口文件
var enterPath=path.resolve(__dirname,'src/main.js');
//出口文件
var buildPath=path.resolve(__dirname,'build')


var plugins = [
  //压缩js 
  // new webpack.optimize.UglifyJsPlugin(),
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin({
    name:'common'
  }),
  new webpack.DefinePlugin({
    "process.env": { 
       NODE_ENV: JSON.stringify("production") 
     }
  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true
  }),

];


module.exports = {
  //入口文件 main.js
  entry: {
    build : enterPath
  },
  //输出的文件名
  output: {
    path: buildPath,
    filename: '[name].js',
    // 指向异步加载的路径
    publicPath : 'build/',
    // 非主文件的命名规则
    chunkFilename: '[id].build.js?[chunkhash]'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      },
      {
        test: /\.(png|jpg|ttf)$/,
        use: 'url-loader?limit=8000&name=imgs/[name].[hash].[ext]'
      }
    ]
  },
  plugins: plugins
};
