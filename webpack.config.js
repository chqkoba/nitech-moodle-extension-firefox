/* eslint-env node */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const JSON5 = require('json5');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            // CSSを別ファイルに出力
            loader: MiniCssExtractPlugin.loader
          },
          {
            // CSSを読み込み
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
            },
          },
          {
            // Sassを読み込み
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.json5$/,
        type: "json",
				parser: {
					parse: JSON5.parse
				}
      },
    ],
  },
  entry: {
    background: './src/background/backgroundEvent.js',
    calendar: './src/contents/calender/calender.js',
    videoArea: './src/contents/videoArea/videoArea.js',
    main: './src/contents/general/main.js',
    topPageStyle: './src/contents/top/topPageStyle.scss',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/manifest.json' },
        { from: './src/icons', to: 'icons' },
        { from: './src/popup', to: 'popup' },
        { from: './src/options', to: 'options' },
        { from: './src/contents/**/*.{html,css,svg}', to: '[name].[ext]' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  resolve: {
    alias: {
      // ライブラリファイルのエイリアス
      Lib: path.join(__dirname, 'src/lib'),
      Contents: path.join(__dirname, 'src/contents'),
      Features: path.join(__dirname, 'src/contents/features'),
    },
  },
  stats: {
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
