
// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store'; // Adjust the path as necessary
import AppNavigator from './src/navigation/AppNavigator'; 

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;





/*import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store'; // Adjust the path as necessary
import AppNavigator from './src/navigation/AppNavigator'; 

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;*/








/*import React from 'react';

import AppNavigator from './src/navigation/AppNavigator'; 

const App = () => {
  return <AppNavigator />;
};

export default App;*/

