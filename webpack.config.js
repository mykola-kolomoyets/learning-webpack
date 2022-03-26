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
        ]
    }
};