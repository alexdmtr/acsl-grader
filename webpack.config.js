// https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
var path = require('path');
const APP_DIR = path.resolve(__dirname, 'app');
const DIST_DIR = path.resolve(__dirname, 'public', 'dist');

const ENTRY_POINTS = {
  problem: path.resolve(APP_DIR, 'problem.jsx')
}
module.exports = {
  entry: ENTRY_POINTS, //path.resolve(APP_DIR, 'index.jsx'), //'./app/index.js',
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};