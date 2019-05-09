const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('../dist/vue.manifest.json')
    }),
    new HtmlIncludeAssetsPlugin({
      assets: ['./vue.dll.js'], // 添加的资源相对html的路径
      append: false // false 在其他资源的之前添加 true 在其他资源之后添加
    })
  ]
})