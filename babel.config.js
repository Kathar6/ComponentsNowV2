module.exports = {
  presets: [
    ['@babel/preset-env'],
    [
      '@babel/preset-react', 
      {
        runtime: "automatic"
      }
    ],
    '@babel/preset-typescript'
  ],
  exclude: '/node_modules/'
}