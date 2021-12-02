import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  breakpointSm: {
    name: 'Breakpoint Small (576px)',
    styles: {
      width: '576px',
      height: '800px',
    },
  },
  breakpointMd: {
    name: 'Breakpoint Medium (768px)',
    styles: {
      width: '768px',
      height: '800px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  }
}
