/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  framework: '@storybook/html-vite',
  stories: ['../stories/**/*.stories.js'],
  addons: [],   // empty — essentials are built-in in Storybook 10
};

export default config;
