const rollup = require('rollup')
const deasync = require('deasync')
const {callbackify} = require('util')
const {builtinModules} = require('module')
const {isAbsolute} = require('path')

// resolve module in memory without accessing the file system
const memory = ({file, code}) => {
  return {
    name: 'rollup-plugin-memory',
    resolveId(id) {
      return id === file ? id : null
    },
    load(id) {
      return id === file ? code : null
    },
  }
}

// mark third party or builtin modules as external
const external = () => {
  const builtins = builtinModules.filter(m => !m.startsWith('_'))
  return {
    name: 'rollup-plugin-external',
    resolveId(id) {
      // filter relative or absolute imported modules
      if (builtins.includes(id) || !id.startsWith('.') || !isAbsolute(id)) {
        return false
      }
      return null
    },
  }
}

// transform ESM to CJS
const transform = async ({file, code}) => {
  const {generate} = await rollup.rollup({
    input: file,
    plugins: [memory({file, code}), external()],
  })
  const {output} = await generate({
    format: 'cjs',
  })
  return output[0].code
}

exports.process = (code, file) => {
  const transformSync = deasync(callbackify(transform))
  return transformSync({file, code})
}
