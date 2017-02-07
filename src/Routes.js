import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './App';
import LogIn from './components/LogIn';
import HomePage from './components/views/HomePage';
import NavPage from './components/views/NavPage';

import RegisterBook from './components/RegisterBook';
import BooksGrid from './components/BooksGrid';
import BookView from './components/BookView';
//import ProductView from './components/ProductView';

import CheckOut from './components/views/CheckOut';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route component={NavPage}>
        <IndexRoute component={HomePage}/>
        <Route path="books" component={BooksGrid}/>
        <Route path="books/:bookId" component={BookView}/>
      </Route>
      <Route path="checkout" component={CheckOut} />
      <Route path="login" component={LogIn} />
      <Route path="registerbook" component={RegisterBook} />
    </Route>
  </Router>
);
// <Route path="books" component={BooksGrid}>
//   <Route path=":bookId" component={BookView}/>
// </Route>
//<Route path="bookview" component={BookView} />
//<Route path="books" component={BookView} />

export default Routes;
