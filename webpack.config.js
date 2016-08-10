var webpack = require('webpack');
var libraryName = 'foo';

module.exports = {  
  cache: true,
  entry: {
    index : './src/index.js'
  },
  output: {
    path: '',
    filename: '[name].js',
    library: libraryName
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  }
}
