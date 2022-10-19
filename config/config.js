const path = require('path')
const rules = require('./rules')
const alias = require('./alias')
const plugins = require('./plugins')
const devServer = require('./dev-server')
const extensions = require('./extensions')

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: "/",
    path: path.resolve(__dirname, '../build')
  },
  infrastructureLogging: {level: 'error'},
  stats: {modules: false},
  resolve: {
    roots: [path.resolve(__dirname, '../')],
    extensions,
    alias
  },
  plugins,
  devServer,
  devtool: 'eval',
  module: {rules}
}