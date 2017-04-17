/**
 * Created by dell on 2017/3/8.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //独立css文件的插件
var extractCSS = new ExtractTextPlugin('/bundle/style.css'); //css文件保存的路劲和设置文件名

//创建html页面
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./entry.js',//入口文件
    output:{
        filename:'./bundle/bundle.js'//转译后文件
    },
    module:{
        loaders:[
            {
                //样式配置
                test:/\.css$/,
                loader:extractCSS.extract({fallback:"style-loader",use:"css-loader"})
            },
            {
                //json文件配置
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                //js文件配置
                test:/\.js$/,
                loader:'react-hot-loader!babel-loader',
                exclude:/node_modules/
            },
            {
                //将图片保存到image文件夹下
                test:/\.png$/,
                loader:'url-loader?limit=8192&name=./images/[name].[ext]'
            }
        ]
    },
    plugins:[
        //生成独立css样式文件
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        //创建html文件
        new HtmlWebpackPlugin({
            //修改文件名和目录
            filename: '../index.html'
        }),
        //创建html模板文件
        new HtmlWebpackPlugin({
            template:'./temp/index.html',
            inject:'body',
            info:'Hello World'
        }),
        //配置jq
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}