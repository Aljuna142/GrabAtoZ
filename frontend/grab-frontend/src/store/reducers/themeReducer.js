// src/reducers/themeReducer.js
/*import { SET_THEME } from '../actions/themeActions';

const initialState = {
  theme: 'light',
};

const themes = {
  light: {
    background: '#fff',
    text: '#000',
    primary: '#6200ee',
  },
  dark: {
    background: '#000',
    text: '#fff',
    primary: '#bb86fc',
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;*/


/*import { SET_THEME, SET_THEME_COLOR } from '../actions/themeActions';

const initialState = {
  theme: 'light',
  themeColor: '#0B086B', // Default theme color
};

const themes = {
  light: {
    background: '#fff',
    text: '#000',
    primary: '#6200ee',
  },
  dark: {
    background: '#000',
    text: '#fff',
    primary: '#bb86fc',
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_THEME_COLOR:
      return { ...state, themeColor: action.payload };
    default:
      return state;
  }
};

export default themeReducer;*/

/*// themeReducer.js
import { SET_THEME, SET_THEME_COLOR } from '../actions/themeActions';

const initialState = {
  theme: 'light',
  themeColor: '#0B086B', // Default theme color
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_THEME_COLOR:
      return { ...state, themeColor: action.payload };
    default:
      return state;
  }
};

export default themeReducer;*/



// themeReducer.js
import { SET_THEME, SET_THEME_COLOR } from '../actions/themeActions';

const initialState = {
  theme: 'light',
  themeColor: '#0B086B', // Default theme color
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_THEME_COLOR:
      return { ...state, themeColor: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
