var path = require('path');

module.exports = {
    entry: './app.js',
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },

    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'app.js'
    },

    devServer:{
        contentBase: './'
    }
};