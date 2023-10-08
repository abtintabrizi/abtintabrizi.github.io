import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';

const theme = {
  button: {
    defaultProps: {
      ripple: false,
    },
    styles: {
      base: {
        initial: {
          fontWeight: '',
          textTransform: '',
        },
      },
      sizes: {
        sm: {
          fontSize: 'text-xs',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
        md: {
          fontSize: 'text-xs',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
        lg: {
          fontSize: 'text-sm',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            background: '',
            color: 'text-white',
            active: '',
          },
        },
      },
    },
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider value={theme}>
    <Home />
  </ThemeProvider>
);
