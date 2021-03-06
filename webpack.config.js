// var webpack = require('webpack');
// var path = require('path');

var config = {
  entry: [
   './assets/js/index.jsx'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;