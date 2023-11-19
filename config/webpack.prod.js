const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                        sassOptions: {
                            fiber: false, // or "fiber: require("fibers")
                        }
                    }
                }]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        })
    ],
});