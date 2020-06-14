import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import cc from 'classnames';
import { Link as LinkScroll } from 'react-scroll';

import {
  ThemeProvider, ButtonGroup, Button, Avatar, useMediaQuery, Container,
} from '@material-ui/core';
import {
  Grade, Work as WorkIcon, Person, Home as HomeIcon, Devices, ArrowDropUp,
} from '@material-ui/icons';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

import Slider, { findIndexFromHour } from './Slider';

import CatalinaDay3 from '../../images/CatalinaDay3.png';
import CatalinaDay4 from '../../images/CatalinaDay4.png';
import CatalinaDay5 from '../../images/CatalinaDay5.png';
import CatalinaDay6 from '../../images/CatalinaDay6.png';
import CatalinaDay7 from '../../images/CatalinaDay7.png';
import CatalinaDay8 from '../../images/CatalinaDay8.png';
import CatalinaDay9 from '../../images/CatalinaDay9.png';
import CatalinaDay10 from '../../images/CatalinaDay10.png';

const bgs = [
  CatalinaDay3,
  CatalinaDay4,
  CatalinaDay5,
  CatalinaDay6,
  CatalinaDay7,
  CatalinaDay8,
  CatalinaDay9,
  CatalinaDay10,
];

const Layout = ({ children }) => {
  const { theme, hour, setHour } = useContext(ThemeContext);
  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);
  const matchWidth = useMediaQuery('(min-width:650px)');
  const bgIndex = findIndexFromHour(hour);

  return (
    <ThemeProvider theme={themeObj}>
      {
        bgs.map((bg, index) => bg &&
          <img src={bg} key={bg} className={cc(styles.background, bgIndex !== index && styles.bgHidden)} alt="bg" />)
      }
      <div className={cc(styles.layout)}>
        <header className={styles.header}>
          <ButtonGroup variant="text" className={styles.buttonGroup} aria-label="text primary button group">
            <LinkScroll to={'home'} smooth>
              <Button startIcon={matchWidth && <HomeIcon />} className={matchWidth && styles.button}>Home</Button>
            </LinkScroll>
            <LinkScroll to={'skills'} smooth>
              <Button startIcon={matchWidth && <Grade />} className={matchWidth && styles.button}>Skills</Button>
            </LinkScroll>
            <LinkScroll to={'works'} smooth>
              <Button startIcon={matchWidth && <Devices />} className={matchWidth && styles.button}>Works</Button>
            </LinkScroll>
            <LinkScroll to={'refs'} smooth>
              <Button startIcon={matchWidth && <WorkIcon />} className={matchWidth && styles.button}>Refs</Button>
            </LinkScroll>
            <LinkScroll to={'contact'} smooth>
              <Button startIcon={matchWidth && <Person />} className={matchWidth && styles.button}>Contact</Button>
            </LinkScroll>
          </ButtonGroup>

          <Slider
            hour={hour}
            setHour={setHour}
          />
        </header>
        <Container>
          { children }
        </Container>
        <footer className={styles.footer}>
          <p>Good to know, I currently work on mac with terminal/vim and my favorite IDE is jetbrains Intellij IDEA.</p>
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

export default Layout;
