const path = require("path");

const webpack = require("webpack")

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {

                test: /.(png|jpg|gif|bmp|jpeg)$/,

                use: [

                    {

                        loader: 'url-loader',

                        options: {

                            limit: 81920 // 字节 Byte 如果在8192个字节(8KB)内  就使用base64编码

                        }

                    }

                ]

            },

        ]
    },
    // 指定打包文件的入口,可以使用相对路径
    entry: "./src/main.js",

    // 指出输出的目录,必须是绝对路径
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase: "./src", //托管路径
        // host: true, //我们开启或者关闭HNR
        open: true, //自动打开浏览器
        port: 3000 //端口号
    },
    plugins: [
        // 开启HMR
        new webpack.HotModuleReplacementPlugin(),
        // 内存中生成一份index.html,并且动态生成bundle.js引用
        new HtmlWebpackPlugin({

            title: '传智大法好!!!', // 如果模板中有title, 会覆盖这里的配置

            template: './src/index.html'

        })

    ]


}