const webpack = require("webpack");
const path = require('path');

module.exports = (env, argv, dir = process.cwd()) => {
	const debug = !argv || !argv.mode || !argv.mode.match(/production/);

	return {
		context: dir,

		entry: './src/index.js',
		devtool: debug ? 'inline-source-map' : false,

		module: {
			rules: [
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
						options: require(path.join(dir, './babel.config.json'))
					}
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
				"jodit-react": path.join(__dirname, './src')
			},
		},

		output: {
			path: path.join(dir, './build/'),
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
