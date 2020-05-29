import React from 'react';
import { Button } from '@material-ui/core';

import logo from '../../logo.svg';
import styles from './Home.scss';

const Home = () => (
  <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />

    {/*<Button color="primary">Hello World</Button>*/}

  </header>
);

export default Home;
