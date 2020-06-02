import React, { useContext } from 'react';

import {
  BottomNavigation, Card, FormControlLabel, Switch,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import reactlogo from '../../logos/reactlogo.svg';
import nodejslogo from '../../logos/nodejslogo.svg';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Home.scss';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitchTheme = (event) => {
    setTheme(event.target.checked ? 'dark' : 'default');
  };

  const reactList = [
    'Classes/Hooks',
    'Lifecycle optimization',
    'Proptypes validation',
    'Higher order components',
    'Webpack',
  ];

  const nodeList = [
    'ES6/Babel',
    'Express',
    'APIs communication',
    'Microservices/Monolithic architectures',
    'Database queries builders',
    'Testing and QA tools',
    'Logs',
  ];

  return (
    <div className={styles.home}>
      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={reactlogo} className={styles.logoReact} alt="reactlogo" />
          <Typography gutterBottom variant="h5" component="h2">
            Frontend: main ReactJS
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <List>
            {
              reactList.map((item, key) => (
                <ListItem key={item} button className={styles.listItem}>
                  <Checkbox
                    edge="start"
                    checked
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText id={key} primary={item} />
                </ListItem>
              ))
            }
          </List>

          <FormControlLabel
            control={(
              <Switch
                checked={theme === 'dark'}
                onChange={handleSwitchTheme}
              />
            )}
            label="Use Context API"
            className={styles.switchContext}
          />
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <img src={nodejslogo} className={styles.logo} alt="nodejslogo" />
          <Typography gutterBottom variant="h5" component="h2">
            Backend: main NodeJS
          </Typography>
        </div>

        <div className={styles.containContainer}>
          <List>
            {
                nodeList.map((item, key) => (
                  <ListItem key={item} button className={styles.listItem}>
                    <Checkbox
                      edge="start"
                      checked
                      tabIndex={-1}
                      disableRipple
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

export default Home;
