// import path from 'path';

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

// export default {
module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.parsed)
		})
	]
};
