// Import storage from redux-persist for persisting and rehydrating a redux store
import storage from 'redux-persist/lib/storage';
// Import persistReducer to create a persistable reducer
import { persistReducer } from 'redux-persist';
// Import combineReducers to combine several reducers into a single reducing function
import { combineReducers } from 'redux';
// Import the authReducer, which handles authentication related state changes
import authReducer from '../features/auth/authSlice';

// Configuration object for redux-persist to define how the redux state is stored
const persistConfig = {
  key: 'root', // The key to use for storing the state
  storage, // The storage engine to use for persisting the state
  whitelist: ['auth'], // Array of reducer names to store, only 'auth' state will be persisted
};

// Combine reducers into a single root reducer
// Currently, only the auth reducer is included, but more can be added as needed
const rootReducer = combineReducers({
  auth: authReducer,
});

// Enhance the rootReducer with persistence capabilities
// This will automatically save and load the parts of the state specified in persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Export the persistedReducer for use in the store configuration
export default persistedReducer;
