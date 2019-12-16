const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin(
        {  // Also generate a test.html
            title: 'My App',
            filename: 'index.html',
            template: 'src/assets/index.html'
        }
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

