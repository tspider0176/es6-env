var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    'application': './es2015/application',
  },
  output: {
    path: __dirname + '/distribution/',
    filename: 'bundle.js'
  },
  // Configuration for dev server
  devServer: {
    contentBase: 'distribution',
    inline: true,
    hot: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules'],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
