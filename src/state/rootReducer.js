import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducers';

const rootReducer = combineReducers({
  shop: cartReducer,
});

export default rootReducer;
