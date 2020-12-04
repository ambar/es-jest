# esbuild-jest

[esbuild](https://github.com/evanw/esbuild) preprocessor for Jest.

[![build status](https://badgen.net/travis/ambar/esbuild-jest)](https://travis-ci.org/ambar/esbuild-jest)
[![npm version](https://badgen.net/npm/v/esbuild-jest)](https://www.npmjs.com/package/esbuild-jest)

## Install

```bash
npm install esbuild-jest --save-dev
```

## Usage

Add preset to Jest config:

```json
{
  "jest": {
    "preset": "esbuild-jest"
  }
}

// alternatively, specifying the files to transform:
{
  "jest": {
    "transform": {
      "\\.[jt]sx?$": "esbuild-jest"
    },
  }
}
```

Writes your test with ES modules:

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
