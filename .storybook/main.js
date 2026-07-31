/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  framework: '@storybook/html-vite',
  stories: ['../stories/**/*.stories.js'], // covers stories/, stories/components/, stories/screens/ via ** glob
  addons: [],   // empty — essentials are built-in in Storybook 10
};

export default config;
