const isDevelopment = process.env.NODE_ENV !== 'production';

const reactRule = {
  test: /\.(t|j)sx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        },
        '@babel/preset-typescript'
      ]
    ]
  }
}

const svgRule = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [{
    loader: 'svg-url-loader',
    options: {
      limit: 10000
    }
  }]
}


const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
};

const sassRule = {
  test: /\.s[ac]ss$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const assetsRule = {
  test: /\.(png|jpg|jpeg|gif|webp)$/i,
  type: 'asset/resource',
}

const rules = [
  reactRule,
  cssRule,
  sassRule,
  svgRule,
  assetsRule
];

module.exports = rules;