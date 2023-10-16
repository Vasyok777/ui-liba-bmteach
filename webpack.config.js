const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
	},
	externals: {
		react: 'react',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['autoprefixer'],
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10 * 1024,
							name: '[name].[hash:7].[ext]',
							outputPath: './src/assets/images/',
						},
					},
				],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
}
