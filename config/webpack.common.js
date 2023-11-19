const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    module: {
        rules: [
            { // CSS files/SASS files and style files
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
            { // Images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            { // Fonts -- should be "my-font-name.woff, my-font.woff2" and so on
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: "style.css", // can also do [name].css if serving up multiple files to generate the appropriate name
            chunkFilename: "[id].css"
        })
    ],

};