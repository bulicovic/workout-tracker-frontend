import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  'stories': ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  'addons': [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],

  'framework': {
    'name': '@storybook/nextjs',
    'options': {},
  },

  'staticDirs': ['../public'],

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
