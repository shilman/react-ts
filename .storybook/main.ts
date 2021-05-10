const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: [/\.stories\.js$/, /index\.js$/],
  //     loaders: ["@storybook/asdf-loader"],
  //     include: [path.resolve(__dirname, "../")],
  //     enforce: "pre",
  //   });
  //   return config;
  // },
  core: {
    builder: 'webpack5',
  },
};
