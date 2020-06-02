import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  BottomNavigation, BottomNavigationAction, ThemeProvider, FormControlLabel, Switch,
} from '@material-ui/core';
import {
  Grade, Work, Person, Home,
} from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [value, setValue] = useState(0);

  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);

  return (
    <ThemeProvider theme={themeObj}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className={styles.bottomNavigation}
            showLabels
          >
            <BottomNavigationAction label="AYMERIC TOULOUSE" icon={<Home />} />
            <BottomNavigationAction label="Skills" icon={<Grade />} />
            <BottomNavigationAction label="Refs" icon={<Work />} />
            <BottomNavigationAction label="Contact" icon={<Person />} />
          </BottomNavigation>
        </header>
        { children }
        <footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
