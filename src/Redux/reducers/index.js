import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import tvShowReducer from './tvShowReducer';

const reducers = combineReducers({
  bookReducer,
  tvShowReducer,
});

export default reducers;
