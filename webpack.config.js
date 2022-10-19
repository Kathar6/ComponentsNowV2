const config = require('./config/config')

module.exports = (env, argv) => {
  const {mode} = argv
  const isProduction = mode === 'production'
  if (isProduction) config.output.filename = '[name].[contenthash].js'
  return config
}