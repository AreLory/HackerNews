const path = require('path');

module.exports = {
  mode: 'development',
    entry:{
     main: path.resolve(__dirname, './src/data.js'),
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};