const path = require('path');
const webpack = require('webpack');

// Webpack config
/*
module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //test: /\.jsx?$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
*/

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets:['env', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,  
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
