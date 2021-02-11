const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'public/'), path.join(__dirname, 'src/mockedApi/')],
    contentBasePublicPath: ['/', '/api'],
    compress: true,
    writeToDisk: true,
    port: 9000
  }
}
