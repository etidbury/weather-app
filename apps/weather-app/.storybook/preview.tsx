import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { Capriola } from 'next/font/google';

const capriola = Capriola({ subsets: ['latin'], weight: '400' });

import '../src/app/global.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
        default: 'dark',
      },
    },
  },
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      // default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      return (
        <ThemeProvider
          attribute="class"
          themes={['dark', 'light']}
          forcedTheme={theme}
        >
          <main
            className={[
              capriola.className,
              'w-full',
              'h-full',
              'absolute',
            ].join(' ')}
          >
            <Story />
          </main>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
