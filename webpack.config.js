module.exports = {
  context: __dirname + '/src',
  entry: {
    'application': './es2015/application',
  },
  output: {
    path: __dirname + '/distribution/javascript',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
