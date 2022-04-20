/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppWrapper } from './App.style';
import Header from './layout/Header/Header';
import Editor from './pages/Editor/Editor';
import Showcase from './pages/Showcase/Showcase';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route exact path="/showcase" component={Showcase} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </AppWrapper>
  );
};

export default App;
