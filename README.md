# rollup-jest

Rollup preprocessor for Jest.

[![build status](https://badgen.net/travis/ambar/rollup-jest)](https://travis-ci.org/ambar/rollup-jest)
[![npm version](https://badgen.net/npm/v/rollup-jest)](https://www.npmjs.com/package/rollup-jest)

## Install

```bash
npm install rollup-jest --save-dev
```

## Usage

Add preset to Jest config:

```json
{
  "jest": {
    "preset": "rollup-jest"
  }
}

// alternatively, specifying the files to transform:
{
  "jest": {
    "transform": {
      "\\.m?js$": "rollup-jest"
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

- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
