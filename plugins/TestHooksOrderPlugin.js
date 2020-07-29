const { compilation } = require("webpack")
class TestHooksOrderPlugin {
  constructor (options = {}) {
    console.log('constructor', options)
    options.order = 1
  }

  apply(compiler) {
    // compiler.hooks.entryOption.tap(
    //   'TestHooksOrderPlugin',
    //   (compilation) => {
    //     console.log('entryOption')
    //   }
    // )
    const hooks = Object.keys(compiler.hooks)
    hooks.forEach(hook => {
      compiler.hooks[hook].tap(
        'TestHooksOrderPlugin',
        (compilation) => {
          // console.log(hook)
        }
      )
    })
  }
}

module.exports = TestHooksOrderPlugin