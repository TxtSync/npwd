import { ThemeOptions } from '@mui/material';

const theme: ThemeOptions = {
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e8a37',
          color: '#fff',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e8a37',
          color: '#fff',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#1e8a37',
      light: '#eb4242',
      dark: '#941212',
      contrastText: '#ffffff',
    },
  },
};

export default theme;
