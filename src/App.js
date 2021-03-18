import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header'

import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import ItemDetailsPage from './containers/ItemDetailsPage'; 
import NotFoundPage from './containers/NotFoundPage';

const App = () => (
  <div className="App">
    <Header/>

    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/items' component={SearchPage} />
          <Route path='/item' component={ItemDetailsPage} />
          <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>


  </div>
);

export default App;