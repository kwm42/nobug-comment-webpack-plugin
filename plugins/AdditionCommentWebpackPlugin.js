const NO_BUG = require('./NO_BUG');

const DEFAULT_OPTION = {
  type: 'default',
  comment: ''
}

class AdditionCommentWebpackPlugin {
  constructor(options = {}) {
    this.options = Object.assign(DEFAULT_OPTION, options);
    if (this.options.comment) {
      this.comment = this.options.comment;
    } else {
      this.comment = 
        NO_BUG[this.options.type]
        ? NO_BUG[this.options.type]
        : NO_BUG['default']
    }
  }

  apply(compiler) {
    compiler.hooks.emit.tap(
      'NobugCommentWebpackPlugin',
      (compilation) => {
        for (let key in compilation.assets) {
          let newSource = this.comment + compilation.assets[key].source();
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

module.exports = AdditionCommentWebpackPlugin;