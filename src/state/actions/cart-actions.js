import {
  ADD_ITEM,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  REMOVE_ITEM,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  ADD_TO_WISHLIST

} from '../types/cart-types';

export const addToWishlist =(itemID) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: {
      id: itemID
    }
  }
}

export const addItem = (itemID) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: itemID
    }
  }
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id: itemID
    }
  }
}

export const adjustItemQty = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const loadCurrentITem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item
  }
}

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
