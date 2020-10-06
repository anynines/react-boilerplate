const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'public/'), path.join(__dirname, 'src/mockedApi/')],
    contentBasePublicPath: ['/', '/api'],
    compress: true,
    writeToDisk: true,
    port: 9000
  }
});