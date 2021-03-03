import {
  ADD_ITEM,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
  REMOVE_ITEM,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM
} from 'state/types';
import { product } from 'configs/product/product';

const initialState = {
  cart: [],
  item: 20,
  loading: false,
  error: null,
  products: product,
  currentItem: null
};

const addToCartRequest = (state) =>
  Object.assign({}, state, { loading: true }, { error: null });

const addToCartSuccess = (state, action) =>
  Object.assign(
    {},
    state,
    {
      cartItems: state.cartItems.concat(action.payload),
    },
    { loading: false }
  );
const addToCartError = (state, action) =>
  Object.assign({}, state, { loading: false }, { error: action.error });

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = state.products.find(prod => prod.id === action.payload.id)
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
      return { ...state,
        cart: inCart
        ? state.cart.map(item =>
          item.id === action.payload.id
          ? {...item, qty: item.qty + 1}
          : item)
        : [...state.cart, {...item, qty: 1}],
      }
    case REMOVE_ITEM:
      return{
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item)=>
          item.id === action.payload.id
          ? {...item, qty: action.payload.qty}
          : item
          ),
      };
    case LOAD_CURRENT_ITEM:
      return{
        ...state,
        currentItem: action.payload,
      }

    case ADD_TO_CART_REQUEST:
      return addToCartRequest(state);
    case ADD_TO_CART_SUCCESS:
      return addToCartSuccess(state, action);
    case ADD_TO_CART_ERROR:
      return addToCartError(state, action);
    default:
      return state;
  }
};

export default cartReducers;
