//store/reducers/profileReducer.js

/*const initialState = {
    username: '',
    email: '',
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'profile/setUserDetails':
        return {
          ...state,
          username: action.payload.username,
          email: action.payload.email,
        };
      case 'profile/updateUserDetails':
        return {
          ...state,
          username: action.payload.username,
          email: action.payload.email,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;*/
  // store/reducers/productsReducer.js

import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../actions/productActions';

const initialState = {
  productDetails: null,
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        loading: false,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;


  