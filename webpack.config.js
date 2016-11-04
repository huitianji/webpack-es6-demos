var path = require("path");
var  webpack = require("webpack");

module.exports = {
    entry:{
        bundle:"./src/js/entry.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}//当需要加载的文件匹配'test'正则时。就会调用后面的`loadder`对文件进行加载
            ,
            {test:/\.(png|jpg)$/,loader:'url?limit = 4000'}//4000 == 4k 如果大小小于4k 转换成base64引入到页面里面去
            ,
            {test:/\.js?$/,loader:'babel',exclude: /node_modules/, query: {compact: false,presets:['es2015']}}
            ,
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('//jht') ,  //前缀
        new webpack.optimize.CommonsChunkPlugin('common.js')//通用的js
    ],
    resolve:{
        alias:{
            jquery:"./lib/jquery/jquery.js"
        }
    }

}