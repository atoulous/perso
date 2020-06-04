import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import cc from 'classnames';

import {
  BottomNavigation, BottomNavigationAction, ThemeProvider, FormControlLabel, Switch,
} from '@material-ui/core';
import {
  Grade, Work, Person, Home,
} from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

const Layout = ({ children, history }) => {
  const { theme, setTheme, backgroundIndex } = useContext(ThemeContext);
  const [value, setValue] = useState(0);

  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);

  const handleGo = (path) => {
    history.push(path);
  };

  return (
    <ThemeProvider theme={themeObj}>
      <div className={cc(styles[`background${backgroundIndex}`], styles.layout)}>
        <header className={styles.header}>
          <BottomNavigation
            className={styles.bottomNavigation}
            showLabels
          >
            <BottomNavigationAction label="Home" icon={<Home />} onClick={() => handleGo('/')} />
            <BottomNavigationAction label="Skills" icon={<Grade />} onClick={() => handleGo('/skills')} />
            <BottomNavigationAction label="Refs" icon={<Work />} onClick={() => handleGo('/refs')} />
            <BottomNavigationAction label="Contact" icon={<Person />} onClick={() => handleGo('/contact')} />
          </BottomNavigation>
        </header>
        { children }
        <footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
