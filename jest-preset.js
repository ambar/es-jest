const path = require('path')

// https://jestjs.io/docs/en/configuration#preset-string
// https://jestjs.io/docs/en/configuration#transform-object-string-string
module.exports = {
  transform: {
    '\\.m?js$': path.resolve(__dirname, 'transform.js'),
  },
}
