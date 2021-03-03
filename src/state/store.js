import { createStore, applyMiddleware } from 'redux';
import { cartReducers } from 'state';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithReduxDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
