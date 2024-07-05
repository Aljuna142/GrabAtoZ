

// App.js
/*import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store'; // Adjust the path as necessary
import AppNavigator from './src/navigation/AppNavigator'; 
import SplashScreen from './src/screens/SplashScreen'; // Import SplashScreen for loading

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;*/


import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store'; // Adjust the path as necessary
import AppNavigator from './src/navigation/AppNavigator'; 
import SplashScreen from './src/screens/SplashScreen'; // Import SplashScreen for loading

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;








