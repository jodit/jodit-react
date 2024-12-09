import path from 'node:path';
import process from 'node:process';

export default {
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
