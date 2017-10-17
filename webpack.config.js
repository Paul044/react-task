const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            './index.jsx'
        ]
    },

    output: {
        filename: '[name].js',
        path:  path.join(__dirname, 'built'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                } ]
        },
        {
            test: /\.(jpg|png)$/,
            use: [{ 
                loader: 'url-loader',
            }]
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: ["transform-react-jsx"],
                    presets: ['env']
                }
            }
        }]
    },

    devtool: 'source-map',

    watch: true,

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
          })
    ]


};
