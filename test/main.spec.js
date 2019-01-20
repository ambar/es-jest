import path from 'path' // native
import noop from 'noop3' // vendor
import * as utils from './fixtures/utils' // relative

describe('rollup-jest', () => {
  it('should resolve native module', () => {
    expect(path.extname('foo.md')).toBe('.md')
  })

  it('should resolve vendor module', () => {
    expect(noop()).toBe(undefined)
  })

  it('should resolve relative module', () => {
    expect(utils).toMatchObject({foo: expect.any(Number)})
  })
})
