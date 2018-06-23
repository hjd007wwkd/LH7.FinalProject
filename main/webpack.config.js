const path = require('path');
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '0.0.0.0';

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${IP}:${PORT}`,
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            include: path.join(__dirname, 'src')
        }, {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
    },
    devtool: 'eval'
};