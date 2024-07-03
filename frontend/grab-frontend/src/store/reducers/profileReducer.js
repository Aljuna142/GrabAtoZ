//store/reducers/profileReducer.js

const initialState = {
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
  
  export default profileReducer;
  