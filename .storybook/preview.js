
import '../src/styles/style.css';
import { addParameters } from '@storybook/client-api';

addParameters({
  viewMode: 'docs',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  }
};