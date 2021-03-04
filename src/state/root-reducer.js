import { combineReducers } from 'redux';
import cartReducer from './reducers/cart-reducers';

const rootReducer = combineReducers({
  shop: cartReducer,
});

export default rootReducer;
