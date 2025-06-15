import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@slowclap/financial-charts': path.resolve(__dirname, '../../src'),
        },
      },
      define: {
        global: 'globalThis',
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
        esbuildOptions: {
          target: 'es2020',
        },
      },
      build: {
        target: 'es2020',
        sourcemap: true,
      },
    });
  },
};

export default config; 