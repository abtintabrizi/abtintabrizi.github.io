import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import theme from './shared/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider value={theme}>
    <Home />
  </ThemeProvider>
);
