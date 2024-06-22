


const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'wishlist/addItem':
      // Check if the item is already in the wishlist
      const existingItem = state.wishlist.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // If item is already in the wishlist, do nothing
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case 'wishlist/removeItem':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;





