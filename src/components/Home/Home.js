import React from 'react';
import cc from 'classnames';

import {
  Avatar, useMediaQuery, Box,
} from '@material-ui/core';

import styles from './Home.scss';

const me = 'https://d2ypeajg1katov.cloudfront.net/images/moi.jpeg';

const Home = () => {
  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <Box color="text.primary" className={cc(styles.home, !matchWidth && styles.homeMobile)} id={'home'}>
      <Avatar alt="Aymeric Toulouse" src={me} className={styles.avatar} />
      {
        matchWidth
          ? <h1 className={styles.title}>Aymeric Toulouse - fullstack developer</h1>
          : (
            <div className={styles.titles}>
              <h1 className={styles.title}>Aymeric Toulouse</h1>
              <h2 className={styles.title}>fullstack developer</h2>
            </div>
          )
      }
      <p className={cc(styles.body, !matchWidth && styles.bodyMobile)}>
        Welcome over here !
        <br />
        I'm a 27 yo french developer from 42 Paris (atoulous).
        <br />
        Started from scratch in 2015 with C and vim.
        <br />
        I love JavaScript ecosystem and building things with latest features of its languages.
        <br />
        I live both in Paris and Bordeaux. Depends of the weather ;)
      </p>
    </Box>
  );
};

export default Home;
