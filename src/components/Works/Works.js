import React, { useContext, useState } from 'react';

import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Check, Close } from '@material-ui/icons';

import logoMRT from '../../logos/mrtlogowhite.png';
import kaptenlogo from '../../logos/kaptenlogo.svg';
import mpslogo from '../../logos/mpslogowhite.png';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Works.scss';

const Works = () => {
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

  return (
    <div className={styles.works} id={'works'}>
      <h2 className={styles.subTitle}>Works</h2>

      <Dialog
        open={dialogOpen}
        onEscapeKeyDown={handleToggleDialog}
        onClose={handleToggleDialog}
      >
        <DialogTitle id="form-dialog-title">About this project</DialogTitle>
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
        </div>

        <div className={styles.containContainer}>
          <h4>Project 1</h4>
          <p>
          </p>

          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('mrtList')}
            color={'secondary'}
          >
            More about this project
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
        </div>

        <div className={styles.containContainer}>
          <h4>Project 2</h4>
          <p>
          </p>

          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('kaptenList')}
            color={'secondary'}
          >
            More about this project
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
        </div>

        <div className={styles.containContainer}>
          <h4>Project 3</h4>
          <p>
          </p>

          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('kaptenList')}
            color={'secondary'}
          >
            More about this project
          </Button>
        </div>
      </Card>

    </div>
  );
};

export default Works;
