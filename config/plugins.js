const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const plugins = [
  new HtmlWebpackPlugin({ 
    template: 'public/index.html',
    favicon: 'public/Logo.ico'
  }),
  isDevelopment && new ReactRefreshWebpackPlugin()
].filter(Boolean);

module.exports = plugins