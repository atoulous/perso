import React from 'react';

import {
  Typography, Card, Avatar,
} from '@material-ui/core';

import styles from './Home.scss';

const Home = () => (
  <div className={styles.home} id={'home'}>

    <Avatar alt="Aymeric Toulouse" src={'/moi.jpeg'} className={styles.avatar} />

    <Typography gutterBottom variant="h2" component="h1" className={styles.title}>
      Aymeric Toulouse - fullstack developer
    </Typography>

    <Typography gutterBottom variant="body1" component="p" className={styles.body}>
      Welcome over here !
      <br />
      I'm a 27 yo french developer from 42 Paris (atoulous).
      <br />
      Started from scratch in 2015 with C and vim.
      <br />
      I love JavaScript ecosystem and build things with latest features of its languages.
      <br />
      I live both in Paris and Bordeaux. Depends of the weather ;)
    </Typography>

  </div>
);

export default Home;
