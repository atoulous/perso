import React, { useState } from 'react';
import cc from 'classnames';

import {
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Box,
  useMediaQuery,
} from '@material-ui/core';

import {
  MoreHoriz, Close,
} from '@material-ui/icons';

import reactlogo from '../../logos/reactlogo.svg';
import nodejslogo from '../../logos/nodejslogo.svg';
import baglogo from '../../logos/bag.svg';

import styles from './Skills.scss';

const Skills = () => {
  const [dialogSettings, setDialogSettings] = useState({ dialogOpen: false, dialogContent: null });
  const { dialogOpen, dialogContent } = dialogSettings;

  const handleToggleDialog = (value = null) => {
    setDialogSettings({ dialogOpen: !dialogOpen, dialogContent: value });
  };

  const lists = {
    reactList: [
      'Classes',
      'Hooks',
      'Lifecycle optimization',
      'Proptypes validation',
      'Higher order components',
      'Context API',
      'Fragments',
      'JSX',
      'Tests',
      'Webpack',
      'Eslint airbnb best practices',
    ],
    nodeList: [
      'ES6/Babel',
      'async/await',
      'Promise',
      'callback heal refactor ;)',
      'Express',
      'APIs communication',
      'Microservices/Monolithic architectures',
      'Query builder and ORM',
      'Testing and QA tools',
      'Logs',
      'Eslint airbnb best practices',
    ],
    othersLangList: [
      'C',
      'bash/zsh',
      'PHP',
      'Python',
      'Swift',
      'React Native',
      'AngularJS',
    ],
    othersList: [
      'DevOps',
      'Docker',
      'Monitoring',
      'Code Review',
      'Git',
      'Agile/Scrum',
    ],
  };

  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <Box color={'text.primary'} className={cc(styles.skills, !matchWidth && styles.skillsMobile)} id={'skills'}>
      <h2 className={styles.subTitle}>Skills</h2>

      <Dialog
        open={dialogOpen}
        onEscapeKeyDown={handleToggleDialog}
        onClose={handleToggleDialog}
      >
        <DialogTitle id="form-dialog-title">Knowledges</DialogTitle>
        <DialogContent className={styles.dialogContent}>
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
          <img src={reactlogo} className={styles.logoReact} alt="reactlogo" />
          {
            matchWidth && <h3>main ReactJS</h3>
          }
        </div>

        <div className={styles.containContainer}>
          <p>
            My favorite front framework is ReactJS.
            <br />
            I keep my works up to date with best practices and latest features.
            <br />
            I'm almost maniac and I care about my code style.
            <br />
            I spent so many hours creating custom webpack configurations !
            <br />
          </p>
          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('reactList')}
            color={'secondary'}
            variant="contained"
          >
            Details
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={nodejslogo} className={styles.logo} alt="nodejslogo" />
          {
            matchWidth && <h3>main NodeJS</h3>
          }
        </div>

        <div className={styles.containContainer}>
          <p>
            As a javascript dev, I mainly build my apis with NodeJS and Express.
            <br />
            I like to create clean restfull API for microservice architecture or optimize complex monolythic.
            <br />
            I know principles such as event loop/parallelism to understand thread cycle and boost performance.
            <br />
          </p>
          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('nodeList')}
            color={'secondary'}
            variant="contained"
          >
            Details
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={baglogo} className={styles.logo} alt="baglogo" />
          {
            matchWidth && <h3>bagpack</h3>
          }
        </div>

        <div className={styles.containContainer}>
          <p>From beginning to now, i have used many other languages and Framework for various projects like:</p>
          {
            lists.othersLangList.map((elem) => (
              <Chip label={elem} key={elem} className={styles.chip} />
            ))
          }
          <p>I work daily with these essential points:</p>
          {
            lists.othersList.map((elem) => (
              <Chip label={elem} key={elem} className={styles.chip} />
            ))
          }
        </div>
      </Card>
    </Box>
  );
};

export default Skills;
