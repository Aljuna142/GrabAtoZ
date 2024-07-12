// src/actions/themeActions.js
/*export const SET_THEME = 'SET_THEME';

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});*/


export const SET_THEME = 'SET_THEME';
export const SET_THEME_COLOR = 'SET_THEME_COLOR';

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setThemeColor = (color) => ({
  type: SET_THEME_COLOR,
  payload: color,
});


