module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'android > 4'
      ]
    }),
    require('cssnano')
  ]
}