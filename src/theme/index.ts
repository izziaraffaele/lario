import { ThemeOptions } from '@mui/material';
import palette from './palette';
import typography from './typography';
import shadows, { customShadows } from './shadows';

const theme: ThemeOptions = {
  palette: palette,
  typography: typography,
  shadows: shadows.light,
  customShadows: customShadows.light,
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
};

export default theme;
