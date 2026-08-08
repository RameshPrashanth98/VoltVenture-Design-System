import '../tokens.css';

/** @type {import('@storybook/html-vite').Preview} */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Home', 'Foundation', 'Components', 'Screens'],
      },
    },
  },
};

export default preview;
