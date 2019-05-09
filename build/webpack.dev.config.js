const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: "/"
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    publicPath: '/',
    disableHostCheck: true,
    host: 'localhost',
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    quiet: true,
    proxy: {
      '/api': {
        // https://cnodejs.org/api/v1/topics
        target: 'https://cnodejs.org/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/v1'
        }
      }
    }
  }
})