import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from 'state/types';
import { product } from 'configs/product/product';

const initialState = {
  wishlistPage: [],
  products: product,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const wl = state.products.find((prod) => prod.id === action.payload.id);
      const inWishlistPage = state.wishlistPage.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        wishlistPage: inWishlistPage
          ? state.wishlistPage.map((item) =>
              item.id === action.payload.id ? { ...item } : item
            )
          : [...state.wishlistPage, { ...wl }],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistPage: state.wishlistPage.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
