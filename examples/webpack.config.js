const path = require('node:path');
const process = require('node:process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
	entry: './app.tsx',
	context: path.join(process.cwd(), './examples/'),
	devtool: 'eval',
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
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},

	plugins: [
		new HtmlWebpackPlugin({ template: 'index.html' })
	  ],

	output: {
		path: path.join(process.cwd(), './examples/build/'),
		filename: 'app.js'
	},

	devServer: {
		static: './examples',
		open: true,
		allowedHosts: 'all',
		client: {
			progress: true,
			overlay: true
		},
		port: 4000,
		hot: true
	}
};
module.exports = config;