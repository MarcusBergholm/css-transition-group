var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: {
    'alert': ['./examples/alert.js'],
    'todo': ['./examples/todo.js']
  },

  output: {
    path: path.join(__dirname, 'build', 'examples'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.css/, loader: 'style!css'},
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'rc-css-transition-group': 'index.js'
    }
  },

  externals: {
    react: "React"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common.js")
  ]
};
