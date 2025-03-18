const path = require('path');
const webpack =require('webpack');
const process =require('process');

const config= (env, argv, dir = process.cwd()) => {
	const debug = !argv || !argv.mode || !argv.mode.match(/production/);

	return {
		context: dir,

		entry: './src/index.ts',
		devtool: debug ? 'inline-source-map' : false,

		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					use: {
						loader: 'swc-loader'
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			alias: {
				'jodit-react': path.join(__dirname, './src')
			}
		},

		output: {
			path: path.join(dir, './build/'),
			filename: 'jodit-react.js',
			library: ['JoditEditor', 'Jodit'],
			libraryTarget: 'umd'
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(
						debug ? 'development' : 'production'
					)
				}
			}),
			new webpack.optimize.ModuleConcatenationPlugin()
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
	};
};
module.exports = config;
