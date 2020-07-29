const path = require('path');
const AdditionCommentWebpackPlugin = require('./plugins/AdditionCommentWebpackPlugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TestHooksOrderPlugin = require('./plugins/TestHooksOrderPlugin')

console.log(__dirname)

module.exports = {
  mode: 'development',
  entry: {
    index: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]_bundle.js",
    chunkFilename: '[name]_chunk.js'
  },
  plugins: [
    new AdditionCommentWebpackPlugin({
      type: 'NO_BUG'
    }),
    new TestHooksOrderPlugin()
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8080,
  }
};