import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const config = () => {
	const debug = process.env.NODE_ENV === 'development';

	return {
		context: process.cwd(),

		entry: {
			'react-jodit': './src/index.ts',
			...(debug ? { examples: './examples/app.tsx' } : {})
		},

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
			clean: true,
			path: path.join(process.cwd(), './build/'),
			filename: '[name].js',
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
			new webpack.optimize.ModuleConcatenationPlugin(),
			...(debug
				? [new HtmlWebpackPlugin({ template: './examples/index.html' })]
				: [])
		],

		externals: {
			jodit: 'jodit',
			Jodit: 'Jodit',
			...(!debug
				? {
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
				: {})
		},

		devServer: {
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
};

module.exports = config;
