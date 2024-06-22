// actions.js


// store/actions.js

// You may not need this if you use createSlice from Redux Toolkit
export const ADD_ITEM = 'wishlist/addItem';
export const REMOVE_ITEM = 'wishlist/removeItem';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});














/*export const addItemToWishlist = (item) => ({
  type: 'wishlist/addItem',
  payload: item,
});

export const removeItemFromWishlist = (id) => ({
  type: 'wishlist/removeItem',
  payload: id,
});
*/







/*import { addItem as addItemAction, removeItem as removeItemAction } from './wishlistSlice';

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
};*/


/*import { addItem as addItemAction, removeItem as removeItemAction } from './wishlistSlice';

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
};*/




