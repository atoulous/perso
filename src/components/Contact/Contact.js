import React from 'react';

import {
  Typography,
} from '@material-ui/core';

import styles from './Contact.scss';

const Contact = () => (
  <div className={styles.contact} id={'contact'}>

    <Typography gutterBottom variant="h2" component="h1" className={styles.title}>
      aymeric.toulouse@gmail.com
    </Typography>

  </div>
);

export default Contact;
