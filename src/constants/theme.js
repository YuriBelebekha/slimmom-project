import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      accent: '#FC842D',
      main: '#212121',
      grey: '#E0E0E0',
      lightGrey: '#F0F1F3',
      darkGrey: '#9B9FAA',
      // light: '#757ce8',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#f44336',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    },
  },
});