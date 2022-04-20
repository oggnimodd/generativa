/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Editor from './pages/Editor/Editor';
import Showcase from './pages/Showcase/Showcase';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route exact path="/showcase" component={Showcase} />
      </Switch>
    </>
  );
};

export default App;
