import {
  ADD_ITEM,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
} from 'state/types';
export { product } from 'configs/product/product';

const initialState = {
  cartItems: [],
  item: 20,
  loading: false,
  error: null,
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
      return {
        ...state,
        item: state.item + 1,
      };
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
