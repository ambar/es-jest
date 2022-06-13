const path = require('path')
const {transformSync} = require('esbuild')

const loaders = ['js', 'jsx', 'ts', 'tsx']
const nodeVersion =
  process.env.NODE_ENV === 'test' ? '12' : process.versions.node

exports.process = (input, file) => {
  const extname = path.extname(file)
  const loader = loaders.find((x) => `.${x}` === extname)
  const options = {
    target: `node${nodeVersion}`,
    format: 'cjs',
    loader: loader || 'js',
    sourcemap: 'inline',
    sourcefile: file,
  }
  // https://jestjs.io/docs/code-transformation#writing-custom-transformers
  const {code, map} = transformSync(input, options)
  return {code, map}
}
