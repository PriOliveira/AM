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
import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Payment from './components/Payment';
import OrderConfirmation from './components/OrderConfirmation';
import OrderFinished from './components/OrderFinished';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route component={NavPage}>
        <IndexRoute component={HomePage}/>
        <Route path="books" component={BooksGrid}/>
        <Route path="books/:bookId" component={BookView}/>
      </Route>
      <Route path="checkout" component={CheckOut}>
        <Route path="cart" component={Cart} />
        <Route path="delivery" component={Delivery} />
        <Route path="payment" component={Payment} />
        <Route path="confirm" component={OrderConfirmation} />
        <Route path="complete" component={OrderFinished} />
      </Route>
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
