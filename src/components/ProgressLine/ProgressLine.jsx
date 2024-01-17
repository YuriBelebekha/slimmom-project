import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { BoxCss } from './ProgressLine.styled';

const themeProgressLine = createTheme({
  palette: {
    primary: orange,
  },
});

export default function LinearIndeterminate() {
  return (
    <ThemeProvider theme={themeProgressLine}>
      <BoxCss>
        <LinearProgress />
      </BoxCss>
    </ThemeProvider>
  );
}
