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
                // type: 'asset/inline'
                // type: 'asset/resource',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 3 // === 3 kB
                //     }
                // },
                type: 'asset'
            }
        ]
    }
};