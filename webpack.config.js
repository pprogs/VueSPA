var path = require('path')
var webpack = require('webpack')
var stylusLoader = require('stylus-loader')

module.exports = {

    entry: ["babel-polyfill", "./src/main.js"],
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'styl': 'vue-style-loader!css-loader!stylus-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.styl$/,
                loader: 'vue-style-loader!css-loader!stylus-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            ['~']: path.resolve(__dirname + '/src'),
        }
    },
    plugins: [
        new stylusLoader.OptionsPlugin({
            default: {
                preferPathResolver: 'webpack',
            },
        }),
    ],
}
