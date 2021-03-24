import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'

import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import ItemDetailsPage from './containers/ItemDetailsPage'; 
import NotFoundPage from './containers/NotFoundPage';

const App = () => (
  <div className="body-content">
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/items/search/:name'
            render={(props) => (
              <SearchPage {...props}/>
            )}
           />
          <Route path='/item/:id' component={ItemDetailsPage} />
          <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>


  </div>
);

export default App;