import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: { 
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Intro', 'Features', 'Series', 'Indicators', 'Visualization'],
      },
    },
    docs: {
      toc: true,
    },
    // React 19 compatibility
    react: {
      strictMode: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview; 