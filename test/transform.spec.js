import {process} from '..'

describe('process', () => {
  const warn = jest.fn(console.warn)
  const oldConsole = global.console
  global.console = {...oldConsole, warn}
  afterAll(() => {
    global.console = oldConsole
  })

  it('should process', () => {
    expect(
      process(
        `
        export const foo =  42
        export {default as noop} from 'noop3'
        export {URL} from 'url'
    `,
        './null.js',
        {}
      )
    ).toMatchSnapshot()
    expect(warn.mock.calls.join('')).not.toMatch(
      /could not be resolved – treating it as an external dependency/
    )
  })

  it('should add inline snapshot', () => {
    expect(1).toMatchInlineSnapshot(`1`)
  })
})
