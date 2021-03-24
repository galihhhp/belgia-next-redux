import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  CHECKOUT_ACTION,
} from 'state/types';
import { product } from 'configs/product/product';

const initialState = {
  cart: [],
  products: product,
  currentItem: null,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case CHECKOUT_ACTION:
      const deleteAllItems = state.cart.filter((item) => {
        item.id !== action.payload.id;
      });
      return deleteAllItems;
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducers;
