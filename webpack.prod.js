const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = require('./webpack.dev')

module.exports = {
  ...devConfig,
  mode: 'production',
  entry: {
    emotion: './prod/Emotion.js',
    linaria: './prod/Linaria.js',
    stiches: './prod/Stiches.js',
    styledComponents: './prod/StyledComponents.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: './babel.config.js',
            },
          },
          { loader: '@linaria/webpack-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
}
