const webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: './bin'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: 'node_modules/',
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
}




















