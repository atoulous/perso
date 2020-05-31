import React from 'react';
import { Card } from '@material-ui/core';

import logo from '../../logo.svg';
import styles from './Home.scss';

const Home = () => (
  <div>
    <Card className={styles.card}>
      <img src={logo} className={styles.logo} alt="logo" />
    </Card>
    <Card className={styles.card}>
      <img src={logo} className={styles.logo} alt="logo" />
    </Card>
    <Card className={styles.card}>
      <img src={logo} className={styles.logo} alt="logo" />
    </Card>
    <Card className={styles.card}>
      <img src={logo} className={styles.logo} alt="logo" />
    </Card>
  </div>
);

export default Home;
