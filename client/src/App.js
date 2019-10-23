import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalProvider, Layout } from './components';
import { Home, User } from './containers';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <GlobalProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="user/:user" component={User} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  </GlobalProvider>
);

export default App;
