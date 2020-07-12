import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@srvycool/ds';
import { Frame } from './ui/Frame/Frame';

import 'typeface-hammersmith-one';
import 'typeface-montserrat';
import './index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Frame />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
