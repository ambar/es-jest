const path = require('path')

// https://jestjs.io/docs/en/configuration#preset-string
// https://jestjs.io/docs/en/configuration#transform-object-string-string
module.exports = {
  transform: {
    '\\.(js|jsx|ts|tsx|mjs|cjs)?$': path.resolve(__dirname, 'transform.js'),
  },
}
