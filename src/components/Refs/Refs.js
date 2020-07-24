import React, { useState } from 'react';
import cc from 'classnames';

import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { MoreHoriz, Close } from '@material-ui/icons';

import logoMRT from '../../logos/mrtlogowhite.png';
import kaptenlogo from '../../logos/kaptenlogo.svg';
import mpslogo from '../../logos/mpslogowhite.png';

import styles from './Refs.scss';

const Refs = () => {
  const [dialogSettings, setDialogSettings] = useState({ dialogOpen: false, dialogContent: null });
  const { dialogOpen, dialogContent } = dialogSettings;

  const handleToggleDialog = (value = null) => {
    setDialogSettings({ dialogOpen: !dialogOpen, dialogContent: value });
  };

  const lists = {
    mrtList: [
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'Docker',
      'AWS',
      'React Native',
      'Electron',
      'Elasticsearch',
      'ELK',
      'Redis',
      'Nginx',
      'GA',
      'SEO perf',
      'BitBucket',
      'Asana',
      'Agile/Scrum',
    ],
    kaptenList: [
      'NodeJS',
      'AngularJS',
      'Python',
      'MongoDB',
      'Docker',
      'Git',
      'shell',
      'unit testing',
      'QA tools',
      'Code review',
      'Agile/Scrum',
      'Jira',
      'Confluence',
      'Slack',
    ],
    othersList: [
      'C',
      'bash',
    ],
  };

  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <Box color={'text.primary'} className={cc(styles.refs, !matchWidth && styles.refsMobile)} id={'refs'}>
      <h2 className={styles.subTitle}>Refs</h2>

      <Dialog
        open={dialogOpen}
        onEscapeKeyDown={handleToggleDialog}
        onClose={handleToggleDialog}
      >
        <DialogTitle id="form-dialog-title">About this job</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <h4>stack used list:</h4>
          <List className={styles.subSkills}>
            {
              lists[dialogContent] && lists[dialogContent].map((item, key) => (
                <ListItem key={item} button className={styles.listItem}>
                  <Checkbox
                    edge="start"
                    checked
                  />
                  <ListItemText id={key} primary={item} />
                </ListItem>
              ))
            }
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} startIcon={<Close />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'https://monsieurtshirt.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={logoMRT} className={matchWidth ? styles.logoMrt : styles.logoMrtMini} alt="logoMRT" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Full Stack Developer</h4>
          <p>
            Mars 2018 - summer 2020 | 2 ½ years | Paris - Bordeaux
            <br />
            <hr />
            Refonte du SI/ERP pour du custom (sites web + automatisation de l'atelier de production)
            <br />
            3 sites PWA, 1 backoffice, 1 app mobile, 1 app desktop, 1 app raspberry, 2 apis, 1 database
          </p>

          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('mrtList')}
            color={'secondary'}
            variant="contained"
          >
            More about job
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'https://kapten.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={kaptenlogo} className={matchWidth ? styles.logo : styles.logoMini} alt="kaptenlogo" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Full Stack Developer Internship</h4>
          <p>
            April 2017 - sept 2017 | 6 months | Paris
            <br />
            <hr />

            Team Tech Acquisition
            <br />
            Handle new features and migrations from legacy api to new microservices architecture
          </p>

          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('kaptenList')}
            color={'secondary'}
            variant="contained"
          >
            More about job
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'http://marineplaisanceservice.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={mpslogo} className={matchWidth ? styles.logoMps : styles.logoMpsMini} alt="mpslogo" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Mécanicien bateaux</h4>
          <p>
            2013 - 2015 | 2 ans | Lège Cap-Ferret
            <hr />
            Mécanique/Eléctricité/Stratification/Plomberie/Dépannage/Navigation/Manutention...
            <br />
            {`Cette expérience très riche m'a permis d'apprendre a travailler avec mes mains, et à acquérir de la
            débrouillardise qui m'aide encore au quotidien dans mon job de developpeur.`}
            <br />
            Il y a beaucoup de similitudes entre un débogage informatique et une recherche de panne moteur !
          </p>
        </div>
      </Card>
    </Box>
  );
};

export default Refs;
