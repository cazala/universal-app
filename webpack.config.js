var webpack = require('webpack')
var path = require('path')
module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.css', 'scss'],
    modulesDirectories: ['.', 'src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss']
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')
  ]
}
