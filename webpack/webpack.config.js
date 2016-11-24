var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	entry:{
		entry:"./entry.js",
		entrys:"./entrys.js",
	},
	output:{
		path: path.resolve(__dirname, './dist'),
		filename:"[name].js",
		chunkFilename:"[id].js",
	},
	module:{
		loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
            // Optionally extract less files
            // or any other compile-to-css language
            
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
		new ExtractTextPlugin('[name].css')
	]
}