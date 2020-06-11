import React from 'react';

import AppProvider from '../../providers';
import Layout from '../Layout';
import Home from '../Home';
import Skills from '../Skills';
import Works from '../Works';
import Refs from '../Refs';
import Contact from '../Contact';

const App = () => (
  <AppProvider>
    <Layout>
      <Home />
      <Skills />
      <Works />
      <Refs />
      <Contact />
    </Layout>
  </AppProvider>
);

export default App;
