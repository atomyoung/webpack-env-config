
var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')

var PORT = 8000;

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        // 输出html文件
        new HtmlWebpackPlugin(),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        // 打包后自动打开浏览器
        new openBrowserWebpackPlugin({ url: 'http://localhost:' + PORT }),
        // 给输出的文件头部添加注释信息
        new webpack.BannerPlugin('This file is created by Pyang at ' + new Date())
    ],
    devServer: {
        host: '0.0.0.0',
        port: PORT,
        contentBae: './dist',
        historyApiFallback: true
    }
}