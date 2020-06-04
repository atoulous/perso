import React, { useContext } from 'react';

import {
  BottomNavigation, Card, FormControlLabel, Switch, Typography, Slider,
} from '@material-ui/core';

import { ThemeContext } from '../../providers/ThemeContext';


import styles from './Home.scss';

const Home = () => {
  const { backgroundIndex, setBackgroundIndex } = useContext(ThemeContext);

  const handleSlider = (value) => {
    setBackgroundIndex(value);
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
    <div className={styles.home}>

      <Slider
        className={styles.slider}
        defaultValue={backgroundIndex}
        getAriaValueText={handleSlider}
        step={1}
        min={3}
        max={10}
        marks={marks}
      />

      <Typography gutterBottom variant="h2" component="h1" className={styles.title}>
        Aymeric Toulouse - fullstack developer
      </Typography>

    </div>
  );
};

export default Home;
