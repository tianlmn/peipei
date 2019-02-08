const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');


const devMode = process.env.NODE_ENV === 'development';

const TerserPluginConfig = {
    cache: true,
    parallel: true,
    sourceMap: true // set to true if you want JS source maps
};

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    optimization: {
        //抽取公共的bundle，防止重复引用module
        splitChunks: {
            chunks: 'all'
        },
        //压缩js和css
        minimizer: devMode ? [] : [
            new TerserPlugin(TerserPluginConfig),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        contentBase: './dist',
        open: 'Google Chrome',
        port: devMode?7777:9999
    },
    plugins: [
        new CleanWebpackPlugin(
            [path.resolve(__dirname, '../dist')], {
                allowExternal: true
            }),
        new HtmlWebpackPlugin({
            title: 'htmlWebpackPlugin'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        //分析包大小
        // new BundleAnalyzerPlugin(),

        //热替换组件
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                use: [{
                        loader: devMode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
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