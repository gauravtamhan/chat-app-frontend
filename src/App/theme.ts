import { createTheme } from '@mui/material/styles';

const sharedPalette = {
  grey: {
    100: 'rgba(0, 0, 0, 0.04)',
    800: 'rgba(255, 255, 255, 0.08)',
  },
};

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        ...sharedPalette,
        primary: {
          main: '#147efb',
        },
        secondary: {
          main: 'rgba(0, 0, 0, 0.05)',
          contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        background: {
          default: '#f5f5f5',
          paper: '#fff',
        },
      },
    },
    dark: {
      palette: {
        ...sharedPalette,
        primary: {
          main: '#1d8dff',
        },
        secondary: {
          main: 'rgba(255, 255, 255, 0.12)',
          contrastText: '#fff',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      },
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
