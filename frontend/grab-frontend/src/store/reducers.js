import { combineReducers } from 'redux';
import wishlistReducer from './wishlistSlice'; // Assuming you have a wishlist slice

const rootReducer = combineReducers({
  // Add other reducers here if you have them
  wishlist: wishlistReducer,
});

export default rootReducer;
