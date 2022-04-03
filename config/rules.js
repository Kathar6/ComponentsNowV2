const reactRule = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const cssRule = {
  test: /\.(css)$/,
  use: ['style-loader', 'css-loader']
};

const sassRule = {
  test: /\.s[ac]ss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const rules = [
  reactRule,
  cssRule,
  sassRule
];

module.exports = rules;