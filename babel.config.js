module.exports = {
  presets: [
    [
      "@babel/env", {
        targets: {
          ie: "10"
        },
        modules: false
      }
    ]
  ]
}