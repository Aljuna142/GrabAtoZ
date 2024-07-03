


// store/store.js

import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../store/slices/wishlistSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;



