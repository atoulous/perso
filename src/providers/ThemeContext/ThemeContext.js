import React, { createContext, useState } from 'react';

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

export const ThemeContextConsumer = ThemeContext.Consumer;
