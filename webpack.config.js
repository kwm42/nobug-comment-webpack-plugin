const path = require('path');
const NobugCommentWebpackPlugin = require('./src/NobugCommentWebpackPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    a: './example/a',
    b: './example/b',
    c: './example/c',
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]_bundle.js",
    chunkFilename: '[name]_chunk.js'
  },
  plugins: [
    new NobugCommentWebpackPlugin(),
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