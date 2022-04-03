const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({ template: 'public/index.html' })
]

module.exports = plugins