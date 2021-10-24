import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    colors: {
      brand: {},
      gray: {
        dark: baseTheme.colors.gray[800],
        light: baseTheme.colors.gray[500],
      },
    },
    fonts: {
      heading: `'Inter', ${baseTheme.fonts?.heading}`,
      body: `'Inter', ${baseTheme.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'blackAlpha',
    components: ['Link'],
  }),
);
