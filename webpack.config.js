var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.js&/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process-env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
