import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Noto Serif JP"',
      'serif',
    ].join(','),
  },
  props: {
    MuiTextField: {
      // v4.9.4でデフォルトの'standard'はマテリアルデザインの定義から外されて
      // いるらしい。
      variant: 'outlined',
    },
  },
});

export default theme;
