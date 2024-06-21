// actions.js

import { addItem as addItemAction, removeItem as removeItemAction } from './wishlistSlice';

// Action creators
export const addItem = (item) => {
  return (dispatch) => {
    dispatch(addItemAction(item));
  };
};

export const removeItem = (itemId) => {
  return (dispatch) => {
    dispatch(removeItemAction({ id: itemId }));
  };
};




