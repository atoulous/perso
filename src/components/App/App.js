import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
