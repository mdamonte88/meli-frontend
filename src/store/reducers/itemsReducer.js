import { fromJS, List } from 'immutable';
import { GET_ITEMS } from '../actions/types';

const initialState = {
  itemsList: List()
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        itemsList: fromJS(payload)
      };
    default:
      return state;
  }
}

export default moviesReducer;