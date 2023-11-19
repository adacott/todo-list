const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            inject: 'body',
            // If you want to place tags in specific spots on build use: <%= css %> and <%= js %> where they should go
            // inject: false,
            // templateParameters: (compilation, assets) => {
            //     const js = assets.js.map((filePath) => `<script src="${filePath}"></script>`).join("\n");
            //     const css = assets.css.map((filePath) => `<link rel="stylesheet" href="${filePath}" />`).join("\n");
            //     return { css, js };
            // },
            // Can also just manually put the scrpt link and bundle.js link in the html template
        }),
    ],
});