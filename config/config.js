const path = require('path')
const rules = require('./rules')
const plugins = require('./plugins')
const devServer = require('./dev-server')

module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build')
  },
  infrastructureLogging: {
    level: 'error'
  },
  stats: {
    modules: false
  },
  plugins,
  devServer,
  devtool: 'eval',
  module: {
    rules
  }
}