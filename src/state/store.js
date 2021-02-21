import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import rootReducer from './rootReducer';
import { cartReducers } from 'state';

const store = createStore(cartReducers, applyMiddleware(logger));

export default store;
