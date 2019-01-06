const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'htmlWebpackPlugin'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        //分析包大小
        //new BundleAnalyzerPlugin() 
    ],
    //抽取公共的bundle，防止重复引用module
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer:{
        contentBase:'./dist'

    },
    mode: 'development',
    //   devtool:'source-map',
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                use: [{
                        loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpeg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ]
            }
        ]
    }
};