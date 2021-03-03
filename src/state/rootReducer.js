import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducers';
import filterReducer from './reducers/filterReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer
});

export default rootReducer;
