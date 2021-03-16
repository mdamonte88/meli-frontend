import { GET_ITEMS } from './types';
import apiService from '../../services/apiService';

export const getItems = () => async dispatch => {
  apiService.get('/items').then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.items
    });
  })
};