/* eslint-disable react/jsx-max-props-per-line */
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Editor from './pages/Editor/Editor';
import Showcase from './pages/Showcase/Showcase';
import About from './pages/About/About';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route exact path="/showcase" component={Showcase} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default App;
