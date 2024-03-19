const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'block.js'
    },
    module: {
        rules: [{
            test:/\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ]
        }]
    },
};