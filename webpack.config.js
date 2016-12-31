var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: 'mylib.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};