var webpack = require('webpack');
var path = require('path');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 根据配置生成HTML元素
const HtmlElementsPlugin = require('./html-elements-plugin');
// 头部元素配置
const headConfig = require('./head-config.common');

// 编译TypeScript的插件 ForkCheckerPlugin是用于异步检测代码的一个插件，提高webpack加载的效率
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
    title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

// Webpack Config
var webpackConfig = {
    metadata: METADATA,
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts',
    },
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    output: {
        path: './dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        // 解析引用模块所在的目录
        modulesDirectories: ['node_modules'],
    },
    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js', '.json']
    },
    plugins: [
        new ForkCheckerPlugin(),


        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),

    ],
    module: {
        /*
         * An array of applied pre and post loaders.
         * 前置装载文件
         * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
         */
        preLoaders: [

            /*
             * Tslint loader support for *.ts files
             *
             * See: https://github.com/wbuchwalter/tslint-loader
             */
            // { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules') ] },

            /*
             * Source map loader support for *.js files
             * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
             *
             * See: https://github.com/webpack/source-map-loader
             */
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/@angular'),
                    helpers.root('node_modules/@ngrx'),
                    helpers.root('node_modules/@angular2-material'),
                ]
            }

        ],
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }

};


module.exports = webpackConfig;