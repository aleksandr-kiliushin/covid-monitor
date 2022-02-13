/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  devtool: 'source-map',
  entry: './src/index.tsx',
  mode: process.env.MODE,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
    }),
    new webpack.EnvironmentPlugin({
      MODE: process.env.MODE,
    }),
    new HTMLWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  resolve: {
    alias: {
      '#components': path.resolve(process.cwd(), 'src/components'),
      '#constants': path.resolve(process.cwd(), 'src/constants'),
      '#store': path.resolve(process.cwd(), 'src/store'),
      '#styles': path.resolve(process.cwd(), 'src/styles'),
      '#utils': path.resolve(process.cwd(), 'src/utils'),
      '#view': path.resolve(process.cwd(), 'src/view'),
      '#src': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
