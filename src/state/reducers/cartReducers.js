import { ADD_ITEM } from 'state/types';

const initialState = {
  item: 20,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        item: state.item + 1,
      };
    default:
      return state;
  }
};

export default cartReducers;
