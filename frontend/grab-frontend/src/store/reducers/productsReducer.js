// store/reducers/productsReducer.js

const initialState = {
    productDetails: null, // Holds details of the selected product
    loading: false,
    error: null,
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_PRODUCT_SUCCESS':
        return {
          ...state,
          loading: false,
          productDetails: action.payload,
        };
      case 'FETCH_PRODUCT_FAILURE':
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
  