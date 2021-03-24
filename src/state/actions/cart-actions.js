import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  ADD_TO_WISHLIST,
  CHECKOUT_ACTION,
  REMOVE_FROM_WISHLIST,
} from '../types/cart-types';

export const addToWishlist = (itemID) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: {
      id: itemID,
    },
  };
};

export const addItem = (itemID) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromWishlist = (itemID) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: {
      id: itemID,
    },
  };
};
export const checkoutAction = (itemID) => {
  return {
    type: CHECKOUT_ACTION,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentITem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
