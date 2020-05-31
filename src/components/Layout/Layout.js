import React, { useContext, useMemo, useState } from 'react';
import {
  BottomNavigation, BottomNavigationAction, ThemeProvider, FormControlLabel, Switch, Button, Typography
} from '@material-ui/core';
import { Restore, Favorite, LocationOn, Home } from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [value, setValue] = useState(0);

  const handleSwitchTheme = (event) => {
    setTheme(event.target.checked ? 'dark' : 'default');
  };

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
          >
            <BottomNavigationAction label="AYMERIC TOULOUSE" icon={<Home />} />
            <BottomNavigationAction label="Recents" icon={<Restore />} />
            <BottomNavigationAction label="Favorite" icon={<Favorite />} />
            <BottomNavigationAction label="LocationOn" icon={<LocationOn />} />

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
          </BottomNavigation>
        </header>
        <div>
          { children }
        </div>
        <footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
