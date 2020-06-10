import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [backgroundIndex, setBackgroundIndex] = useState(3);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, backgroundIndex, setBackgroundIndex }}>
      { children }
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ThemeContextConsumer = ThemeContext.Consumer;
