const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'public');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
//move entry point to include css
module.exports = {
  entry: path.resolve(SRC_DIR, 'src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }

    ]
  }
}
