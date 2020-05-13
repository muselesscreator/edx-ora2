const { getBaseConfig } = require('@edx/frontend-build');
const config = getBaseConfig('webpack');

const path = require('path');

Object.assign(config, {
  entry: {
    server: path.resolve(process.cwd(), 'openassessment/xblock/static/js/src/oa_server.js'),
    shared: path.resolve(process.cwd(), 'openassessment/xblock/static/js/src/oa_server.js'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'openassessment/xblock/static/js'),
  },
});

config.plugins.splice(4, 1);
config.plugins.splice(2, 1);

module.exports = config;
