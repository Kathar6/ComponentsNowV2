const isDevelopment = process.env.WEBPACK_SERVE === 'development';

const mainRule = {
  oneOf: [
    {
      test: /\.[jt]s$/,
      include: /src/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.[jt]sx?$/,
      include: /src/,
      exclude: [/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {
          // Your Babel config here
          presets: [
            [
              '@babel/preset-react', 
              {runtime: 'automatic'}
            ],
            '@babel/preset-env', 
            '@babel/preset-typescript'
          ],
          plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean)
        }
      }
    }
  ]
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
  mainRule,
  cssRule,
  sassRule,
  svgRule,
  assetsRule
];

module.exports = rules;