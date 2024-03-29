import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cc from 'classnames';
import { Link as LinkScroll } from 'react-scroll';

import {
  ThemeProvider, ButtonGroup, Button, Avatar, useMediaQuery, Container,
} from '@material-ui/core';
import {
  Grade, Work as WorkIcon, Person, Home as HomeIcon, Devices, ArrowDropUp,
} from '@material-ui/icons';
import Loader from '../Loader';

import { darkTheme, defaultTheme } from '../../themes';
import { ThemeContext } from '../../providers/ThemeContext';

import styles from './Layout.scss';

import Slider, { findIndexFromHour } from './Slider';

const bgs = [
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay3.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay4.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay5.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay6.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay7.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay8.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay9.png',
  'https://d2ypeajg1katov.cloudfront.net/images/CatalinaDay10.png',
];

const Layout = ({ children }) => {
  const { theme, hour, setHour } = useContext(ThemeContext);
  const themeObj = useMemo(() => (theme === 'dark' ? darkTheme() : defaultTheme()), [theme]);
  const matchWidth = useMediaQuery('(min-width:650px)');
  const bgIndex = findIndexFromHour(hour);

  const [bgLoad, setBgLoad] = useState(false);
  const handleBgLoad = () => {
    setBgLoad(true);
  };

  // if (!bgLoad) {
  //   return (
  //     <>
  //       <Loader styles={styles.loader} />
  //       <img
  //         onLoad={bgIndex && handleBgLoad}
  //         src={bgs[bgIndex]}
  //         key={bgs[bgIndex]}
  //         className={cc(styles.background, !bgLoad && styles.bgHidden)}
  //         alt="bg"
  //       />
  //     </>
  //   );
  // }

  return (
    <>
      <ThemeProvider theme={themeObj}>
        {
          !bgLoad && <div className={cc(styles.background, styles.lazyBg)} />
        }
        <img
          onLoad={bgIndex && handleBgLoad}
          src={bgs[bgIndex]}
          key={bgs[bgIndex]}
          className={cc(styles.background, !bgLoad && styles.bgHidden)}
          alt="bg"
        />

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
            <p>I currently work on mac with term/vim and my favorite IDE is jetbrains Intellij IDEA.</p>
            <LinkScroll to={'home'} smooth>
              <Avatar className={styles.avatar}>
                <ArrowDropUp className={styles.icon} />
              </Avatar>
            </LinkScroll>
          </footer>
        </div>
      </ThemeProvider>
      {
        bgLoad && bgs.map((bg, index) => bg && bgIndex !== index && (
          <img
            src={bg}
            key={bg}
            className={cc(styles.background, styles.bgHidden)}
            alt="bg"
          />
        ))
      }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
