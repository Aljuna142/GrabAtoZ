


// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // Object with item IDs as keys and item details as values
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, ...itemDetails } = action.payload;
      state.items[id] = itemDetails;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      delete state.items[itemId];
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;







