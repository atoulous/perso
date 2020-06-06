import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import cc from 'classnames';
import { HashLink } from 'react-router-hash-link';

import {
   ThemeProvider, Slider, ButtonGroup, Button,
} from '@material-ui/core';
import {
  Grade, Work as WorkIcon, Person, Home as HomeIcon,
} from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import Home from '../Home';
import Skills from '../Skills';
import Work from '../Work';
import Contact from '../Contact';

import styles from './Layout.scss';


const Layout = ({ children, history }) => {
  const { theme, setTheme, backgroundIndex, setBackgroundIndex } = useContext(ThemeContext);
  const [value, setValue] = useState(0);

  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);

  const handleGo = (path) => {
    // history.push(path);
  };

  const handleSlider = (index) => {
    setBackgroundIndex(index);
  };

  const marks = [
    {
      value: 3,
      label: '5am',
    },
    {
      value: 4,
      label: '6am',
    },
    {
      value: 5,
      label: '10am',
    },
    {
      value: 6,
      label: '4pm',
    },
    {
      value: 7,
      label: '8pm',
    },
    {
      value: 8,
      label: '9pm',
    },
    {
      value: 9,
      label: '10am',
    },
    {
      value: 10,
      label: '12am',
    },
  ];

  return (
    <ThemeProvider theme={themeObj}>
      <div className={cc(styles[`background${backgroundIndex}`], styles.layout)}>
        <header className={styles.header}>

          <ButtonGroup variant="text" className={styles.buttonGroup}>
            <HashLink to={'#home'} className={styles.buttonContainer}>
              <Button startIcon={<HomeIcon />} className={styles.button}>Home</Button>
            </HashLink>
            <HashLink to={'#skills'} className={styles.buttonContainer}>
              <Button startIcon={<Grade />} className={styles.button}>Skills</Button>
            </HashLink>
            <HashLink to={'#work'} className={styles.buttonContainer}>
              <Button startIcon={<WorkIcon />} className={styles.button}>Work</Button>
            </HashLink>
            <HashLink to={'#contact'} className={styles.buttonContainer}>
              <Button startIcon={<Person />} className={styles.button}>Contact</Button>
            </HashLink>
          </ButtonGroup>

          <Slider
            className={styles.slider}
            defaultValue={backgroundIndex}
            getAriaValueText={handleSlider}
            step={1}
            min={3}
            max={10}
            marks={marks}
          />
        </header>

        <Home />
        <Skills />
        <Work />
        <Contact />

        <footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
