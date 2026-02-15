import { createTheme } from '@mui/material/styles';

const baseTheme = {
  light: createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#faf9f5',
        paper: '#f8f5ee',
      },
      primary: {
        main: '#44a194',
        contrastText: '#f4f0e4',
      },
      secondary: {
        main: '#537d96',
        contrastText: '#f4f0e4',
      },
      error: {
        main: '#ec8f8d',
      },
      text: {
        primary: '#537d96',
        secondary: '#44a194',
      },
    },
    shape: {
      borderRadius: 8,
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#23272a',
        paper: '#2c2f33',
      },
      primary: {
        main: '#44a194',
        contrastText: '#23272a',
      },
      secondary: {
        main: '#537d96',
        contrastText: '#23272a',
      },
      error: {
        main: '#ec8f8d',
      },
      text: {
        primary: '#f4f0e4',
        secondary: '#b2dfdb',
      },
    },
    shape: {
      borderRadius: 8,
    },
  }),
};

export default baseTheme;
