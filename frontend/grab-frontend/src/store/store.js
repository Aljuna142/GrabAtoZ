


// store/store.js

/*import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer'; 
import wishlistReducer from '../store/slices/wishlistSlice';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;*/



// store/store.js
/*correct import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Adjust the import as per your file structure

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };*/

/* non serialiazalble import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // This middleware will check for non-serializable values in the state and actions
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
};

const rootReducer = combineReducers({
  // your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };*/


// store/store.js
/*import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Adjust the import as per your file structure
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products', 'wishlist', 'cart'], // Add reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };*/


/*import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Adjust the import as per your file structure
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products', 'wishlist', 'cart'], // Add reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER], // Remove PURGE from ignored actions
      },
    }),
});

const persistor = persistStore(store);

// Function to clear AsyncStorage and reload the app
const clearAllPersistedData = async () => {
  await persistor.purge(); // Clear AsyncStorage
  // Reload the app
  // This can typically be done by refreshing the entire app, which might involve restarting the development server or re-launching the app in production.
};

export { store, persistor, clearAllPersistedData };last code*/





// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Adjust the import as per your file structure
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products', 'wishlist', 'cart', 'theme'], // Add 'theme' here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER], // Remove PURGE from ignored actions
      },
    }),
});

const persistor = persistStore(store);

const clearAllPersistedData = async () => {
  await persistor.purge(); // Clear AsyncStorage
  // Reload the app
  // This can typically be done by refreshing the entire app, which might involve restarting the development server or re-launching the app in production.
};

export { store, persistor, clearAllPersistedData };







