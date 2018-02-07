var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },

    resolve: {
        alias: {
            "jodit-react": './src'
        },
    },

    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'jodit-react.js',
        library: 'JoditEditor',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    externals: {
        jodit: 'jodit',
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
};