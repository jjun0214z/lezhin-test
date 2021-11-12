/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  webpack(config, { webpack }) {
    // config.resolve.modules.push(__dirname);
    config.resolve = {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
      ...config.resolve,
    };
    return config;
  },
};
