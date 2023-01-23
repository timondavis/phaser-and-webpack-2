var path = require('path');
var html = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    "mode": "development",
    "entry": [
        "./src/js/index.js",
        "./src/style/style.scss"
    ],
    "output": {
        "path": __dirname + '/dist/',
        "filename": "bundle.js",
    },
    "devServer": {
        "static": {
            "directory": path.join(__dirname, "dist")
        },
        "compress": true,
        "port":9001,
        "watchFiles": ['src/**/*']
    },
    plugins: [
        new html({
            template: __dirname + "/src/index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    }
};
