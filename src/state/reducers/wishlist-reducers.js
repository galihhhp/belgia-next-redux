import {
    ADD_TO_WISHLIST,
    ADJUST_QTY,
    LOAD_CURRENT_ITEM
  } from 'state/types';
import { product } from 'configs/product/product';


const initialState = {
    wishlistPage: [],
    products: product
}

const wishlistReducer = (
    state = initialState, action
) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const wl = state.products.find(prod => prod.id === action.payload.id)
        const inWishlistPage = state.wishlistPage.find(item => item.id === action.payload.id)
        
            return {
                ...state,
                wishlistPage: inWishlistPage
                ? state.wishlistPage.map(item =>
                  item.id === action.payload.id
                  ?{...item} : item)
                : [...state.wishlistPage, {...wl}]
            } 
            default:
                return state

    }
}


export default wishlistReducer