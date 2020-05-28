import React from 'react';

import logo from '../../logo.svg';
import './Home.scss';

const Home = () => (
  <header className="header">
    <p>AYMERIC TOULOUSE</p>
    <img src={logo} className="logo" alt="logo" />
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Developer
    </a>
  </header>
);

export default Home;
