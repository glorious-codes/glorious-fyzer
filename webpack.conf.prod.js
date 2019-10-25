const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'production',
  output: {
    filename: project.scripts.dist.filename.prod
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false
          }
        }
      })
    ]
  }
}
