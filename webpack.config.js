const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'jsgamelib.js',
    library: 'JSGameLib',
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist'),
  },
};