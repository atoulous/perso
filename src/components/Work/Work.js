import React, { useContext } from 'react';

import { Card, FormControlLabel, Switch } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import logoMRTBleu from '../../logos/logoMRTBleu.png';
import nodejslogo from '../../logos/nodejslogo.svg';
import baglogo from '../../logos/bag.svg';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Work.scss';

const Work = () => {
  const mrtList = [
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
    'Slack',
    'Asana',
    'Agile/scrum',
  ];

  const nodeList = [
    'NodeJS',
    'AngularJS',
    'Python',
    'MongoDB',
    'Docker',
    'Git',
    'shell',
    'Jira',
    'Confluence',
    'Slack',
  ];

  const othersList = [
    'Mécanique',
    'Eléctricité',
    'Stratification',
    'Bois',
    'Plomberie',
    'Manutention',
    'Dépannage',
    'Navigation',
  ];

  return (
    <div className={styles.work} id={'work'}>
      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={logoMRTBleu} className={styles.logoMRT} alt="logoMRTBleu" />
          <Typography gutterBottom variant="h5" component="h2">
            <a href={'https://monsieurtshirt.com'} target={'_blank'} className={styles.link}>Monsieur TSHIRT</a>
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <List className={styles.subSkills}>
            {
              mrtList.map((item, key) => (
                <ListItem key={item} button className={styles.listItem}>
                  <Checkbox
                    edge="start"
                    checked
                    tabIndex={-1}
                  />
                  <ListItemText id={key} primary={item} />
                </ListItem>
              ))
            }
          </List>

        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={nodejslogo} className={styles.logo} alt="nodejslogo" />
          <Typography gutterBottom variant="h5" component="h2">
            Kapten (ex Chauffeur Privé)
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <List className={styles.subSkills}>
            {
                nodeList.map((item, key) => (
                  <ListItem key={item} button className={styles.listItem}>
                    <Checkbox
                      edge="start"
                      checked
                      tabIndex={-1}
                    />
                    <ListItemText id={key} primary={item} />
                  </ListItem>
                ))
            }
          </List>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={baglogo} className={styles.logo} alt="baglogo" />
          <Typography gutterBottom variant="h5" component="h2">
            Marine Plaisance Service
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <List className={styles.subSkills}>
            {
              othersList.map((item, key) => (
                <ListItem key={item} className={styles.listItem}>
                  <Checkbox
                    edge="start"
                    checked
                  />
                  <ListItemText id={key} primary={item} />
                </ListItem>
              ))
            }
          </List>
        </div>
      </Card>

    </div>
  );
};

export default Work;
