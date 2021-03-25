import { fromJS, List, Map } from 'immutable';
import { GET_ITEMS, GET_ITEM, GET_ITEM_DETAILS, ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from '../actions/types';

const initialState = {
  itemsList: List(),
  categories: List(),
  itemDetails: Map({}),
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload, categories } = action;
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        itemsList: fromJS(payload),
        categories: fromJS(categories)
      };
    case GET_ITEM:
      const indexElement = state.itemsList.toJS().findIndex(({_id}) => _id === payload._id);
      return {
        ...state,
        itemsList: state.itemsList.get(indexElement)
      };
    case ADD_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.push(payload)
      };
    case UPDATE_ITEM:
      const indexOldElement = state.itemsList.toJS().findIndex(({_id}) => _id === payload._id);
      return {
        ...state,
        itemsList: state.itemsList.set(indexOldElement, payload)
      };
    case REMOVE_ITEM:
        const itemUpdated = state.itemsList.toJS().filter(item => item._id !== payload)
        return {
          ...state,
          itemsList: fromJS(itemUpdated)
        };
    case GET_ITEM_DETAILS:
      return {
        ...state,
        itemDetails: fromJS(payload)
      };
    default:
      return state;
  }
}

export default moviesReducer;