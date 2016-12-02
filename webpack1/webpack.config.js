var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//独立css样式
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports={
    devtool: 'eval-source-map',
	entry:'./entry.js',
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js',
		publicPath: 'dist/'
	},
	resolve: {
    extensions: ['', '.coffee', '.js'] //文件后缀如果为空则加上coffee,找不到文件则加上.js
  	},
	module:{
		loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader",'css!autoprefixer?{browsers:["last 2 version","> 1%"]}') //(short for style-loader!css-loader)
            },
            // Optionally extract less files
            // or any other compile-to-css language
            
            {
                test:/\.js$/,
                loaders:['babel?presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/, 
                loader: "url?limit=4192"
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader

        ]
	},
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("style[hash:8].css"), //{allChunks:true;}表示打包成一个css文件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
            })
       /* new webpack.optimize.UglifyJsPlugin({
            //警告信息，可以通过以下代码抑制：
            minimize: true,
            compress: {
            warnings: false,
          },}) //压缩代码*/
    ]
};