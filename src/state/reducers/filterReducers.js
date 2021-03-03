import {
  TOGGLE_IS_FILTERED
} from 'state/types';

const initialState = {
  filteredItems: []
};

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FILTERED:
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    default:
      return state;
  }
}

export default filterReducers