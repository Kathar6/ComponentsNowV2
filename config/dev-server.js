const path = require("path")

module.exports = {
  historyApiFallback: true,
  compress: true,
  port: '3000',
  hot:true,
  static: {
    directory: path.join(__dirname, 'public')
  },
  client: {
    overlay: {
      warnings: false,
      errors: true
    }
  }
}