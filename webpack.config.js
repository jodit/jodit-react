const webpack = require("webpack");
const path = require('path');

module.exports = (env, argv) => {
    const debug = !argv || !argv.mode || !argv.mode.match(/production/);

    return {
        entry: './src/index.js',
        devtool: debug ? 'inline-source-map' : false,
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
                use: [
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
                    NODE_ENV: JSON.stringify(debug ? 'development' : 'production'),
                },
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
        ],
        externals: {
            jodit: 'jodit',
            Jodit: 'Jodit',
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
    }
};