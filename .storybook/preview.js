
import '../src/styles/style.css';
import { themes } from '@storybook/theming'

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
  },
  docs: {
    get theme() {
      let isDarkMode = parent.document.body.classList.contains('dark');
      return isDarkMode ? themes.dark : themes.light;
    }
  }
};