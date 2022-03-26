const path = require('path');

module.exports = {
    mode: 'none',
    entry: '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
};