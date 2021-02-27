import {
  ADD_ITEM,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from '../types/cartTypes';

export const addItem = () => ({
  type: ADD_ITEM,
});

export const addToCart = (payload) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });

  try {
    setTimeout(() => {
      dispatch({ type: ADD_TO_CART_SUCCESS, payload });
      alert('successfully added to cart');
    }, 2000);
  } catch (error) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: error });
  }
};
