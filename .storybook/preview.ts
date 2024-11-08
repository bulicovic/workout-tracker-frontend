import type { Preview, ReactRenderer } from '@storybook/react';
import '../app/globals.css';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withThemeByClassName<ReactRenderer>({
        themes: {
          light: 'light',
          dark: 'dark',
        },
        defaultTheme: 'light',
      }),
    ],
    tags: ['autodocs'],
  },
};

export default preview;
