// src/store/reducers/index.js
/*import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import wishlistReducer from '../slices/wishlistSlice';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export default rootReducer;*/


// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import wishlistReducer from '../slices/wishlistSlice';
import cartReducer from './cartReducer';
import themeReducer from './themeReducer'; // Import themeReducer

const rootReducer = combineReducers({
  products: productsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  theme: themeReducer, // Add themeReducer
});

export default rootReducer;

