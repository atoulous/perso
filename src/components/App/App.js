import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppProvider from '../../providers';
import Layout from '../Layout';
import Home from '../Home';
import Skills from '../Skills';

const App = () => (
  <Router>
    <Switch>
      <AppProvider>
        <Layout>
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/" component={Home} />
        </Layout>
      </AppProvider>
    </Switch>
  </Router>
);

export default App;
