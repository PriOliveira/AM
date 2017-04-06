import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import LogIn from './components/LogIn';
import HomePage from './components/views/HomePage';
import NavPage from './components/views/NavPage';

import BooksGridContainer from './Redux/containers/BooksGridContainer';

import RegisterBook from './components/RegisterBook';
// import BooksGrid from './components/BooksGrid';
import BookView from './components/BookView';
import TvShowsGrid from './components/TvShowsGrid';
import TvShowView from './components/TvShowView';
//import ProductView from './components/ProductView';

import CheckOut from './components/views/CheckOut';
import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Payment from './components/Payment';
import OrderConfirmation from './components/OrderConfirmation';
import OrderFinished from './components/OrderFinished';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={NavPage}>
        {
          // <IndexRoute component={HomePage}/>
          // <Route path="books" component={BooksGridContainer}/>
          // <Route path="books/:bookId" component={BookView}/>
          // <Route path="tvshows" component={TvShowsGrid}/>
          // <Route path="tvshows/:tvshowId" component={TvShowView}/>
        }
      </Route>
      {
        // <Route path="checkout" component={CheckOut}>
        //   <IndexRoute component={Cart}/>
        //   // <Route path="cart" component={Cart} />
        //   <Route path="delivery" component={Delivery} />
        //   <Route path="payment" component={Payment} />
        //   <Route path="confirm" component={OrderConfirmation} />
        //   <Route path="complete" component={OrderFinished} />
        // </Route>
        // <Route path="login" component={LogIn} />
        // <Route path="registerbook" component={RegisterBook} />

      }
    </Route>
  </Router>
);
