const webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const PORT = process.env.PORT || 3001;
const IP = process.env.IP || '0.0.0.0';

new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    disableHostCheck: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    historyApiFallback: true
})
.listen(PORT, IP, function (err, result) {
    if (err) {
      console.log(err);
    };
    console.log(`Running at http://${IP}:${PORT}`);
});

