const { resolve } = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config"); module.exports = {
  ...defaultConfig,
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