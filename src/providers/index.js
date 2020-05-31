import React from 'react';

import { ThemeContextProvider } from './ThemeContext';

const AppProvider = ({ children }) => (
  <ThemeContextProvider>
    { children }
  </ThemeContextProvider>
);

export default AppProvider;
