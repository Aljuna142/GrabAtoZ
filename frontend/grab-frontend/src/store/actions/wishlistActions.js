


// store/actions/wishlistActions.js

//  may not need this if you use createSlice from Redux Toolkit
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












