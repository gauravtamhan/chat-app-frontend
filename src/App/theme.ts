import { createTheme } from '@mui/material/styles';

// Augment the palette to include a custom color
declare module '@mui/material/styles' {
  interface Palette {
    customGrey: Palette['primary'];
  }

  interface PaletteOptions {
    customGrey?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include the custom option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customGrey: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#147efb',
    },
    customGrey: {
      main: 'rgba(0, 0, 0, 0.05)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '0.9375rem',
      lineHeight: '1.36',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 600,
    },
  },
});
