const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
           title: 'Output Management'
         }),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
        })
       ],
  mode:'development',
  devtool:'source-map',
  module:{
      rules:[
        {
            test: /\.(scss|css)$/,
            use: [{
                loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            },
            'resolve-url-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        },
        {
        test: /\.(jpeg)$/i,
        use: [
            {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
            }
        ]
        },
        {
            test:/\.(png|jpg|svg|gif)$/i,
            use:[
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