import path from 'path'

test('should resolve native module', () => {
  expect(path.extname('foo.md')).toBe('.md')
})
