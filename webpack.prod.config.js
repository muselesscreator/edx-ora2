const { getBaseConfig } = require('@edx/frontend-build');
const config = getBaseConfig('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

Object.assign(config, {
  entry: {
    studio: path.resolve(process.cwd(), 'openassessment/xblock/static/js/src/studio.js'),
    lms: path.resolve(process.cwd(), 'openassessment/xblock/static/js/src/lms.js'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'openassessment/xblock/static/js/dist'),
  },
  optimization: {
    minimizer: [ new TerserPlugin() ],
  }
});

config.plugins.splice(4, 1);
config.plugins.splice(2, 1);

module.exports = config;
