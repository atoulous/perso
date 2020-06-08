import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import cc from 'classnames';
import { Link as LinkScroll } from 'react-scroll';

import {
  ThemeProvider, Slider, ButtonGroup, Button, Avatar,
} from '@material-ui/core';
import {
  Grade, Work as WorkIcon, Person, Home as HomeIcon, Devices, ArrowDropUp,
} from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

const Layout = ({ children }) => {
  const { theme, backgroundIndex, setBackgroundIndex } = useContext(ThemeContext);

  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);

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
            <LinkScroll to={'home'} smooth className={styles.buttonContainer}>
              <Button startIcon={<HomeIcon />} className={styles.button}>Home</Button>
            </LinkScroll>
            <LinkScroll to={'skills'} smooth className={styles.buttonContainer}>
              <Button startIcon={<Grade />} className={styles.button}>Skills</Button>
            </LinkScroll>
            <LinkScroll to={'works'} smooth className={styles.buttonContainer}>
              <Button startIcon={<Devices />} className={styles.button}>Works</Button>
            </LinkScroll>
            <LinkScroll to={'refs'} smooth className={styles.buttonContainer}>
              <Button startIcon={<WorkIcon />} className={styles.button}>Refs</Button>
            </LinkScroll>
            <LinkScroll to={'contact'} smooth className={styles.buttonContainer}>
              <Button startIcon={<Person />} className={styles.button}>Contact</Button>
            </LinkScroll>
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
        { children }
        <footer className={styles.footer}>
          <LinkScroll to={'home'} smooth>
            <Avatar className={styles.avatar}>
              <ArrowDropUp className={styles.icon} />
            </Avatar>
          </LinkScroll>
        </footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
