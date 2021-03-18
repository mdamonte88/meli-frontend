import { GET_ITEMS, GET_ITEM_DETAILS } from './types';
import apiService from '../../services/apiService';

export const getItems = () => async dispatch => {
  apiService.get('/items').then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.items
    });
  })
};

export const getItemDetails = (id) => async dispatch => {
  const res = await apiService.get(`/items/${id}`);
  dispatch({
    type: GET_ITEM_DETAILS,
    payload: res.item
  });
};