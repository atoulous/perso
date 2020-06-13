import React from 'react';

import { Slider as SliderUI, useMediaQuery } from '@material-ui/core';

import PropTypes from 'prop-types';
import styles from './Layout.scss';

const marks = [
  {
    value: 1,
    label: '1am',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 13,
    label: '1',
  },
  {
    value: 14,
    label: '2',
  },
  {
    value: 15,
    label: '3',
  },
  {
    value: 16,
    label: '4',
  },
  {
    value: 17,
    label: '5',
  },
  {
    value: 18,
    label: '6',
  },
  {
    value: 19,
    label: '7',
  },
  {
    value: 20,
    label: '8',
  },
  {
    value: 21,
    label: '9',
  },
  {
    value: 22,
    label: '10',
  },
  {
    value: 23,
    label: '11',
  },
  {
    value: 24,
    label: '12am',
  },
];

export const findIndexFromHour = (currentHour) => {
  if (currentHour >= 6 && currentHour < 8) return 0;
  if (currentHour >= 8 && currentHour < 10) return 1;
  if (currentHour >= 10 && currentHour < 12) return 2;
  if (currentHour >= 12 && currentHour < 16) return 3;
  if (currentHour >= 16 && currentHour < 18) return 4;
  if (currentHour >= 18 && currentHour < 20) return 5;
  if (currentHour >= 20 && currentHour < 22) return 6;
  if (currentHour >= 22 || currentHour < 6) return 7;
  return 0;
};

const Slider = ({ hour, setHour }) => {
  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <SliderUI
      className={styles.slider}
      defaultValue={hour}
      getAriaValueText={setHour}
      step={1}
      min={1}
      max={24}
      marks={matchWidth && marks}
    />
  );
};

Slider.propTypes = {
  hour: PropTypes.number.isRequired,
  setHour: PropTypes.func.isRequired,
};

export default Slider;
