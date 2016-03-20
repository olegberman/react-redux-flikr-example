'use strict';

module.exports = {
  entry: ['./index.js'],

  debug: true,

  output: {
    path: './dist',
    filename: 'bundle.js',
    pathinfo: true
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }
    ]
  }

};
