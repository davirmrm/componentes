const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.common.js');

module.exports = {
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};