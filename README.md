# es-jest

ESM/React/TypeScript preprocessor for Jest, powered by [esbuild](https://github.com/evanw/esbuild).

[![build status](https://badgen.net/travis/ambar/es-jest)](https://travis-ci.org/ambar/es-jest)
[![npm version](https://badgen.net/npm/v/es-jest)](https://www.npmjs.com/package/es-jest)

## Install

```bash
npm install es-jest --save-dev
```

## Usage

Add preset to Jest config:

```json
{
  "jest": {
    "preset": "es-jest"
  }
}

// alternatively, specifying the files to transform:
{
  "jest": {
    "transform": {
      "\\.[jt]sx?$": "es-jest"
    },
  }
}

// you can also provide a custom esbuild config:
{
  "jest": {
    "transform": {
      "\\.[jt]sx?$": ["es-jest", { "jsx": "automatic" }]
    },
  }
}
```

Write your tests with ES modules:

```js
import path from 'path'

test('parses extname', () => {
  expect(path.extname('foo.md')).toBe('.md')
})
```

Happy testing!

## Related

- [rollup-jest](https://github.com/ambar/rollup-jest)
- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
