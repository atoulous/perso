import React, { useContext, useState } from 'react';

import {
  Card,
  FormControlLabel,
  Switch,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@material-ui/core';

import {
  Check, Close,
} from '@material-ui/icons';

import reactlogo from '../../logos/reactlogo.svg';
import nodejslogo from '../../logos/nodejslogo.svg';
import baglogo from '../../logos/bag.svg';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Skills.scss';

const Skills = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitchTheme = (event) => {
    setTheme(event.target.checked ? 'dark' : 'default');
  };

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
    othersList: [
      'C',
      'bash',
      'PHP',
      'Python',
      'Swift',
      'React Native',
      'AngularJS',
    ],
  };

  return (
    <div className={styles.skills} id={'skills'}>
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
          <Typography gutterBottom variant="h5" component="h2">
            main ReactJS
          </Typography>

        </div>

        <div className={styles.containContainer}>
          <p>My favorite front framework is ReactJS.</p>
          <p>I keep my work up to date with best practices and latest features.</p>
          <p>I spent so many hours creating custom webpack configurations !</p>
          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('reactList')}
            color={'secondary'}
          >
            Details
          </Button>

          {/* <FormControlLabel */}
          {/*  control={( */}
          {/*    <Switch */}
          {/*      checked={theme === 'dark'} */}
          {/*      onChange={handleSwitchTheme} */}
          {/*    /> */}
          {/*  )} */}
          {/*  label="Use Context API" */}
          {/*  className={styles.switchContext} */}
          {/* /> */}
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={nodejslogo} className={styles.logo} alt="nodejslogo" />
          <Typography gutterBottom variant="h5" component="h2">
            main NodeJS
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <p>As a javascript dev, I mainly build my apis with NodeJS and Express.</p>
          <p>I like to create clean restfull API for microservice architecture or optimize complex monolythics.</p>
          <p>I know principles such as event loop/parallelism to understand thread cycle and boost performance.</p>
          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('nodeList')}
            color={'secondary'}
          >
            Details
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={baglogo} className={styles.logo} alt="baglogo" />
          <Typography gutterBottom variant="h5" component="h2">
            others
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <p>From beginning to now, i have used many other languages and Framework</p>

          <Button
            startIcon={<Check />}
            onClick={() => handleToggleDialog('othersList')}
            color={'secondary'}
          >
            Details
          </Button>
        </div>
      </Card>

    </div>
  );
};

export default Skills;
