const { resolve } = require('path');
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    ...getWebpackEntryPoints(),
    viewer: resolve(__dirname, 'src/viewer/index.js'),
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.md$/,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      '@wpui': resolve(__dirname, 'src/'),
    },
  },
};