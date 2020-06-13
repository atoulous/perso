import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const date = new Date();
  const currentHour = date.getHours();
  const [theme, setTheme] = useState('dark');
  const [hour, setHour] = useState(currentHour);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, hour, setHour }}>
      { children }
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ThemeContextConsumer = ThemeContext.Consumer;
