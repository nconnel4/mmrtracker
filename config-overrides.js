// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
    },
  };
  return config;
};
