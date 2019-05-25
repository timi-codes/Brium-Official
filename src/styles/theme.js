const theme = {
  colors: {
    darkBlue: 'rgba(20, 112, 219, 0.95)',
    lightBlue: 'rgba(20, 112, 219, 0.8075)',
    yellow: '#FBB837',
    darkGrey: '#3e3e3e',
    lightGrey: '#A5A5A5',
    blueGrey: '#4F5C66',
    slate: '#FBF2F2',
    black: '#000000',
    lightNavy: '#E5EFFB',
    offWhite: 'rgba(255, 255, 255, 0.36)',
    white: '#ffffff',
    blue: '#1470DB',
    neutral: '#F1F4F9'
  },
  fonts: {
    // eslint-disable-next-line max-len
    CircularStd:
      'CircularStd, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    Lato:
      'Lato, Roboto, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace'
  },
  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '26px',
    h3: '55px'
  },
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  navHeight: '100px',
  borderRadius: '5px',
  hamburgerWidth: 30,
  hamBefore: 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
  hamBeforeActive: 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
  hamAfter:
    'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  hamAfterActive:
    'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
};

export default theme;
