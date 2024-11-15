import { Preview } from '@storybook/react';
import '../app/globals.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Toaster } from '../components/ui/toaster';
import React from 'react';
import { DocsContainer } from '@storybook/blocks';
import { themes } from '@storybook/theming';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
      green: 'green',
    },
    defaultTheme: 'green',
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => (
    <>
      <Story />
      <Toaster />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [...decorators],
    tags: ['autodocs'],
    backgrounds: { disable: true },
    docs: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      container: (props: any) => {
        const el = document.querySelector('html');
        const theme =
          props?.context.store.userGlobals.globals.theme === 'light' ? themes.light : themes.dark;
        el!.dataset['theme'] = props?.context.store.userGlobals.globals.theme;
        const newProps = { ...props, theme };
        return React.createElement(DocsContainer, newProps);
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
