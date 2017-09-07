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
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        'styl': 'vue-style-loader!css-loader!stylus-loader'
                    }
                    // other vue-loader options go here
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
