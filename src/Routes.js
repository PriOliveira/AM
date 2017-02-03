import React from 'react';
import {Router, Route} from 'react-router';

import App from './App';
import LogIn from './components/LogIn';
import HomePage from './components/HomePage';
import BookView from './components/BookView';
import RegisterBook from './components/RegisterBook';
import BooksGrid from './components/BooksGrid';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={App} />
      <Route path="home" component={HomePage} />
      <Route path="login" component={LogIn} />
      <Route path="book" component={BookView} />
      <Route path="registerbook" component={RegisterBook} />
      <Route path="booksgrid" component={BooksGrid} />
  </Router>
);

export default Routes;