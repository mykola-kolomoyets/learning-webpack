const path = require('path');

module.exports = {
    mode: 'none',
    entry: '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg)$/,
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 3 // === 3 kB
                //     }
                // },
                // type: 'asset/inline'
                // type: 'asset/resource',
                type: 'asset'
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/env'],
                         plugins: ['@babel/plugin-proposal-class-properties']
                     }
                 }
            },
        ]
    }
};