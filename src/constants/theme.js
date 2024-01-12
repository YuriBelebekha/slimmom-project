import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      accent: '#FC842D',
      main: '#212121',
      grey: '#E0E0E0',
      lightGrey: '#F0F1F3',
      darkGrey: '#9B9FAA',
      white: '#FFFFFF',
      errorMessage: '#FF0000',
      bgcMobileMenu: '#264061',
      bgcUserBlock: '#EFF1F3',
      modalBackdrop: 'rgba(33, 33, 33, 0.3) ',
    },
    secondary: {
      main: '#f44336',
      accent: '#FC842D80',
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

  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },

    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  components: {
    // DatePicker Component Theme
    MuiOutlinedInput: {
      styleOverrides: {
        input: {},
        notchedOutline: {
          display: 'none',
        },
      },
    },

    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          borderRadius: '4px 4px 0 0',
          borderWidth: 1,
          border: '1px solid',
          backgroundColor: '#FC842D',
        },
      },
    },

    MuiDatePickerToolbar: {
      styleOverrides: {
        title: {
          fontFamily: 'VerdanaBold',
          fontSize: '24px',
        },
      },
    },
  },
});
