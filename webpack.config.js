const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  //devtool：浏览器可以从转换后的代码直接定位到转换前的代码
  devtool: 'inline-source-map',

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  devServer: {
    // contentBase: './build',
    port: 8081, // 端口号
    // inline: true
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    })
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@src': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
    },
    //不写这个识别不到模块
    extensions:['.js','.jsx']
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
}