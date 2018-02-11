"use strict";
var path = require('path');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".html", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader!ts-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            },
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader:"file-loader",
				exclude: /node_modules/,
				query:{
					name:'[name].[ext]',
					outputPath:'images/'
				}
			},
			{
				test: /\.css$/,
				loaders: ["style-loader","css-loader"],
				exclude: /node_modules/
			}
        ]
    }
};