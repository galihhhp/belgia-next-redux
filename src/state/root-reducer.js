import { combineReducers } from 'redux';
import cartReducer from './reducers/cart-reducers';
import wishlistReducer from './reducers/wishlist-reducers'
const rootReducer = combineReducers({
  shop: cartReducer, 
  wlist: wishlistReducer,
});

export default rootReducer;
