const theme = {
  palette: {
    white: '#fff',
    black: '#484848',
    gray: '#565656',
    lightgray: '#888',
    primary: 'rgb(56,130,135)',
    alert: 'rgb(237,100,100)',
    shadow: 'rgba(0, 0, 0, 0.25) 0px 10px 37px;',
    back: '#333',
    line: '#ddd',
  },
  typography: {
    pxToRem: (value) => `${value / 16}rem`,
    font: 'Noto Sans KR',
  },
};

export default theme;
