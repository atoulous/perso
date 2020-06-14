import React from 'react';

import { Avatar, Box } from '@material-ui/core';
import { LinkedIn, GitHub, Mail, Twitter } from '@material-ui/icons';

import styles from './Contact.scss';

const Contact = () => (
  <Box color={'text.primary'} className={styles.contact} id={'contact'}>
    <h2 className={styles.subTitle}>Contact</h2>

    <div className={styles.avatarsContainer}>
      <a
        href={'https://www.linkedin.com/in/aymeric-toulouse-19a768b7'}
        target={'_blank'}
        rel={'noreferrer'}
        className={styles.link}
      >
        <Avatar className={styles.avatar}>
          <LinkedIn className={styles.icon} />
        </Avatar>
      </a>

      <a href={'https://github.com/atoulous'} target={'_blank'} rel={'noreferrer'} className={styles.link}>
        <Avatar className={styles.avatar}>
          <GitHub className={styles.icon} />
        </Avatar>
      </a>

      <a href={'https://twitter.com/aymerictoulouse'} target={'_blank'} rel={'noreferrer'} className={styles.link}>
        <Avatar className={styles.avatar}>
          <Twitter className={styles.icon} />
        </Avatar>
      </a>

      <a href={'mailto:aymeric.toulouse@gmail.com'} target={'_blank'} rel={'noreferrer'} className={styles.link}>
        <Avatar className={styles.avatar}>
          <Mail className={styles.icon} />
        </Avatar>
      </a>
    </div>

  </Box>
);

export default Contact;
