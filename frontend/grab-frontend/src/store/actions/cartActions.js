// store/actions/cartActions.js

/*correctimport { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cartActionTypes';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});*/

// store/actions/cartActions.js

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_CART_ITEM_QUANTITY } from '../actions/cartActionTypes';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const updateCartItemQuantity = (id, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { id, quantity },
});



