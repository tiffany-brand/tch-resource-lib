import React, { useEffect } from "react";

import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Search from './views/Search/Search';
import Add from './views/Add/Add';

import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <Nav />
          <Hero />
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
