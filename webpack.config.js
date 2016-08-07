var webpack = require('webpack')
var path = require('path')
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  plugins: [ new webpack.NoErrorsPlugin() ],
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['.', 'src', 'node_modules']
  }
}
