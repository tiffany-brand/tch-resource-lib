import React from "react";

import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';

import "./App.css";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>

        <Nav />
        <Hero />
        <h1>App</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
