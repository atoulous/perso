import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppProvider from '../../providers';
import Layout from '../Layout';
import Home from '../Home';
import Skills from '../Skills';
import Works from '../Works';
import Refs from '../Refs';
import Contact from '../Contact';

const App = () => (
  <Router>
    <Switch>
      <AppProvider>
        <Layout>
          <Route component={Home} />
          <Route component={Skills} />
          <Route component={Works} />
          <Route component={Refs} />
          <Route component={Contact} />
        </Layout>
      </AppProvider>
    </Switch>
  </Router>
);

export default App;
