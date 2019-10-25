const webpack = require('webpack');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: project.scripts.dist.filename.dev
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin()
  ]
}
