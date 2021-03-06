import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@srvycool/ds';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Create } from './pages/Create/Create';
import { ApolloProvider } from '@apollo/client';
import { client } from './configs/apollo';

import 'typeface-hammersmith-one';
import 'typeface-montserrat';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/create" component={Create} />
            <Redirect to="/create" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
