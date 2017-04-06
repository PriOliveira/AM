import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

export default store;
