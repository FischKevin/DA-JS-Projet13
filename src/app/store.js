// Used to create a Redux store with simplified configuration
import { configureStore } from '@reduxjs/toolkit';
// Enables the store to be persisted across sessions
import { persistStore } from 'redux-persist';
// Importing the reducer that has been enhanced with persistence capabilities
import persistedReducer from './persistedReducer';

// Creating the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Assigning the persisted reducer to the store's reducer
  // Adding custom middleware configurations
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoring specific actions from serializability checks, necessary for redux-persist to work correctly
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/REGISTER',
        ],
      },
    }),
});

// Creating a persistor instance for the store, enabling the state to be persisted across sessions
export const persistor = persistStore(store);
