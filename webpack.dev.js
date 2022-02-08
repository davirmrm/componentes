const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 8889
    }),
    new WebpackBuildNotifierPlugin(),
  ],
});
