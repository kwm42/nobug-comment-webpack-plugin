const { NO_BUG } = require('./NO_BUG');

class NobugCommentWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap(
      'NobugCommentWebpackPlugin',
      (compilation) => {
        for (let key in compilation.assets) {
          let newSource = NO_BUG + compilation.assets[key].source();
          compilation.assets[key] = {
            source: function() {
              return newSource
            },
            size: function() {
              return newSource.length
            }
          }
        }
      }
    )
  }
}

module.exports = NobugCommentWebpackPlugin;